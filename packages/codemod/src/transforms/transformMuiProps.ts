import groupImports from "./groupImports";
import removeUnusedImports from "./removeUnusedImports";
import transformReactSource from "./transformReactSource";
import { Node, PropertySignature, SourceFile, ts } from "ts-morph";

function getDocBlock(source: SourceFile, componentName: string) {
  let docblock: string | undefined;

  for (const varNode of source.getChildrenOfKind(
    ts.SyntaxKind.VariableStatement
  )) {
    if (
      varNode.getStructure().declarations.some((d) => d.name === componentName)
    ) {
      const jsDocComment = varNode.getFirstChildByKind(
        ts.SyntaxKind.JSDocComment
      );
      docblock = jsDocComment?.getDescription();
    }
  }

  return docblock;
}

function parseConfigTypeProps(props: PropertySignature[]) {
  const propNames: string[] = [];
  const defaultPropNames: string[] = [];

  for (const prop of props) {
    propNames.push(prop.getName());
    const hasDefautlValue = prop
      .getJsDocs()
      .some((jsDoc) =>
        jsDoc.getTags().some((tag) => tag.getTagName() === "default")
      );
    if (hasDefautlValue) defaultPropNames.push(prop.getName());
  }
  return { propNames, defaultPropNames };
}

function findConfigType(source: SourceFile, componentName: string) {
  return (
    source.getInterface(`${componentName}TypeMap`) ||
    source.getTypeAlias(`${componentName}TypeMap`) ||
    source.getInterface(`${componentName}Props`) ||
    source.getTypeAlias(`${componentName}Props`)
  );
}

function findDefaultComponent(source: SourceFile, componentName: string) {
  const iface = findConfigType(source, componentName);
  if (iface?.getName().endsWith("TypeMap")) {
    const param = iface.getStructure().typeParameters?.find((param) => {
      if (typeof param === "string") return false;
      return param.constraint === "ST.ElementType";
    });
    if (param && typeof param !== "string") return param.default?.toString();
  }
}

function findConfigTypeProps(source: SourceFile, componentName: string) {
  const iface = findConfigType(source, componentName);
  let propsWrapper: string | undefined;
  let propsExtends: { name: string; args: string[] }[] = [];
  let propsNode: Node | undefined;

  if (iface?.getName().endsWith("TypeMap")) {
    let typeMap: PropertySignature[] = [];
    if (Node.isInterfaceDeclaration(iface)) {
      // interface XTypeMap { props: * }
      typeMap = iface.getProperties();
    } else if (Node.isTypeAliasDeclaration(iface)) {
      const value = iface.getTypeNode();
      if (Node.isTypeReference(value)) {
        // XTypeMap = ExtendMap<{ props: * }>
        propsWrapper = value
          .getChildAtIndexIfKindOrThrow(0, ts.SyntaxKind.Identifier)
          .getText();
        typeMap = value
          .getFirstChildByKindOrThrow(ts.SyntaxKind.SyntaxList)
          .getFirstChildByKindOrThrow(ts.SyntaxKind.TypeLiteral)
          .getProperties();
      } else if (Node.isTypeLiteral(value)) {
        // XTypeMap = { props: * }
        typeMap = value.getProperties();
      }
    }
    propsNode = typeMap
      .find((prop) => prop.getName() === "props")
      ?.getTypeNode();
  } else if (Node.isInterfaceDeclaration(iface)) {
    // interface XProps { * }
    const heritage = iface.getFirstChildByKind(ts.SyntaxKind.HeritageClause);
    propsExtends = (
      heritage?.getChildrenOfKind(ts.SyntaxKind.ExpressionWithTypeArguments) ||
      []
    ).map((expr) => {
      const [name, ...args] = expr.forEachChildAsArray();
      return {
        name: name.getText(),
        args: args.map((v) => v.getText()),
      };
    });
    propsNode = iface;
  } else if (Node.isTypeAliasDeclaration(iface)) {
    // {*}
    propsNode = iface.getTypeNode();
  }

  let props: PropertySignature[] = [];

  if (Node.isIntersectionTypeNode(propsNode)) {
    // P & {}
    const propsX = propsNode.getLastChildByKindOrThrow(
      ts.SyntaxKind.TypeLiteral
    );
    props = propsX?.getProperties();
  } else if (Node.isInterfaceDeclaration(propsNode)) {
    // interface X {*}
    props = propsNode.getProperties();
  } else if (Node.isTypeLiteral(propsNode)) {
    // {*}
    props = propsNode.getProperties();
  }
  return { propsWrapper, propsExtends, props };
}

function removeNoTypes(source: SourceFile, componentName: string) {
  source
    .getChildrenOfKind(ts.SyntaxKind.VariableStatement)
    .forEach((n) => n.remove());
  source
    .getChildrenOfKind(ts.SyntaxKind.ExportAssignment)
    .forEach((n) => n.remove());
  source
    .getChildrenOfKind(ts.SyntaxKind.FunctionDeclaration)
    .forEach((node) => node.remove());

  source.getInterface(`${componentName}TypeMap`)?.remove();
  source.getTypeAlias(`${componentName}TypeMap`)?.remove();
  source.getInterface(`${componentName}Props`)?.remove();
  source.getTypeAlias(`${componentName}Props`)?.remove();

  for (const node of source.getExportDeclarations()) {
    node.remove();
  }
}

function transformMuiProps(source: SourceFile, componentName: string) {
  const haveReactImport = !!source.getImportDeclaration("react");
  if (!haveReactImport)
    source.addImportDeclaration({
      moduleSpecifier: "react",
      namespaceImport: "React",
    });
  transformReactSource(source);
  const defaultComponent = findDefaultComponent(source, componentName);
  const { props, propsWrapper, propsExtends } = findConfigTypeProps(
    source,
    componentName
  );
  const propsConfig = parseConfigTypeProps(props);
  source.addImportDeclaration({
    namespaceImport: "ST",
    moduleSpecifier: "@suid/types",
  });
  const typeMapParams = [
    `P = {}`,
    `D extends ST.ElementType = ${defaultComponent ?? "'div'"}`,
  ].join(", ");
  const typeMap = `type ${componentName}TypeMap<${typeMapParams}>`;
  const typeMapValues: string[] = [`{`, `name: "Mui${componentName}"`];

  if (propsConfig.defaultPropNames?.length)
    typeMapValues.push(
      `defaultPropNames: ${propsConfig.defaultPropNames
        .map((v) => `"${v}"`)
        .join(" | ")}`
    );

  typeMapValues.push(
    `selfProps: {${props.map((m) => m.getFullText()).join("\n")}}`
  );

  const propsExtendsExpr = propsExtends
    .map((extend) => {
      if (extend.name === "StandardProps") {
        const [name, omit] = extend.args;
        return `Omit<${name}, ${omit}>`;
      } else if (extend.args.length) {
        return `${extend.name}<${extend.args.join(",")}>`;
      } else {
        return `${extend.name}`;
      }
    })
    .join(" & ");

  const endTypeMapValues = [
    `props: P & ${componentName}TypeMap['selfProps']${
      propsExtendsExpr ? ` & ${propsExtendsExpr}` : ""
    }`,
    `defaultComponent: D`,
  ];

  if (propsWrapper) {
    typeMapValues.push(`}\n & ${propsWrapper}<{`, ...endTypeMapValues, `}>`);
  } else {
    typeMapValues.push(...endTypeMapValues, `}`);
  }

  const docblock = getDocBlock(source, componentName);

  removeNoTypes(source, componentName);

  source.addStatements(
    [
      `export ${typeMap} = ${typeMapValues.map((v) => `\t${v}`).join("\n")}`,
      `export type ${componentName}Props<
      D extends ST.ElementType = ${componentName}TypeMap['defaultComponent'],
      P = {},
    > = ST.OverrideProps<${componentName}TypeMap<P, D>, D>;`,
      `export default ${componentName}Props`,
    ].map((v) => `${v}\n\n`)
  );

  groupImports(source);
  removeUnusedImports(source);

  return {
    docblock,
    selfPropNames: propsConfig.propNames,
    defaultPropNames: propsConfig.defaultPropNames,
  };
}

export default transformMuiProps;
