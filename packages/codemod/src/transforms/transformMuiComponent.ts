import findReactObjects from "../navigations/findReactObjects";
import replaceObjectBinding from "./replaceObjectBinding";
import transformReactSource from "./transformReactSource";
import { Block, SourceFile, ts } from "ts-morph";

function createComponentStatement(data: {
  name: string;
  propDefaults: Record<string, string>;
  selfPropNames: string[];
  slotClasses?: string;
}) {
  return `\nconst $ = createComponentFactory<${data.name}TypeMap>()({
    name: ${JSON.stringify(`Mui${data.name}`)},
    selfPropNames: ${JSON.stringify(
      data.selfPropNames.filter((v) => v !== "sx")
    )},
    ${
      data.slotClasses
        ? `utilityClass: get${data.name}UtilityClass,
          slotClasses: (ownerState) => (${data.slotClasses}),`
        : ""
    }});\n`;
}

function transformPropsVar(block: Block) {
  const result: Record<string, string> = {};
  const propsVar = block
    .getVariableDeclarations()
    .find((v) => v.getStructure().initializer === "props");

  if (propsVar) {
    const bindingProps = propsVar
      .getFirstChildByKindOrThrow(ts.SyntaxKind.ObjectBindingPattern)
      .getChildrenOfKind(ts.SyntaxKind.BindingElement);

    for (const node of bindingProps) {
      const name = node.getFirstChildByKind(ts.SyntaxKind.Identifier);
      const eqIndex = node
        .getChildren()
        .findIndex((n) => n.getKind() === ts.SyntaxKind.EqualsToken);

      if (name && eqIndex !== -1) {
        const value = node.getChildAtIndex(eqIndex + 1);
        result[name.getText()] = value.getText();
      }
    }
    //propsVar.remove();
  }
  return result;
}

function transformUseUtilityClasses(block: Block) {
  let slots: string | undefined;
  const useUtilityClassesVar = block
    .getSourceFile()
    .getChildrenOfKind(ts.SyntaxKind.VariableStatement)
    .find((vs) =>
      vs
        .getDeclarationList()
        .getChildrenOfKind(ts.SyntaxKind.VariableDeclaration)
        .find((vd) => vd.getName() === "useUtilityClasses")
    );

  if (useUtilityClassesVar) {
    const identifier = useUtilityClassesVar.getFirstDescendantByKindOrThrow(
      ts.SyntaxKind.Identifier
    );

    for (const ref of identifier.findReferencesAsNodes()) {
      if (ref !== identifier) ref.replaceWithText("$.useClasses");
    }

    const objects = useUtilityClassesVar.getDescendantsOfKind(
      ts.SyntaxKind.ObjectBindingPattern
    );

    for (const object of objects) replaceObjectBinding(object, {});

    const block = useUtilityClassesVar.getFirstDescendantByKindOrThrow(
      ts.SyntaxKind.Block
    );

    const slotsVar = block.getVariableDeclarationOrThrow("slots");
    slots = slotsVar.getInitializer()?.getText();
    useUtilityClassesVar.remove();
  }

  return slots;
}

function transformUseThemeProps(block: Block) {
  const useThemeProps = block
    .getDescendantsOfKind(ts.SyntaxKind.CallExpression)
    .find(
      (expr) =>
        expr.getFirstChildByKind(ts.SyntaxKind.Identifier)?.getText() ===
        "useThemeProps"
    );

  if (useThemeProps) {
    const nameProp = useThemeProps
      .getDescendantsOfKind(ts.SyntaxKind.PropertyAssignment)
      .find(
        (prop) =>
          prop.getFirstChildByKind(ts.SyntaxKind.Identifier)?.getText() ===
          "name"
      );
    nameProp?.remove();
    useThemeProps
      .getFirstChildByKindOrThrow(ts.SyntaxKind.Identifier)
      .replaceWithText("$.useThemeProps");
  }
}

function transformUseForkRef(block: Block) {
  const callExprs = block
    .getDescendantsOfKind(ts.SyntaxKind.CallExpression)
    .filter(
      (expr) =>
        expr.getFirstChildByKind(ts.SyntaxKind.Identifier)?.getText() ===
        "useForkRef"
    );

  for (const expr of callExprs) {
    const [ref, refProp] = expr.getArguments();
    const varStm = expr.getFirstAncestorByKind(ts.SyntaxKind.VariableStatement);
    const [refDeclaration] = ref.getSymbol()?.getDeclarations() || [];
    const refVarStm = refDeclaration.getFirstAncestorByKind(
      ts.SyntaxKind.VariableStatement
    );
    const refCall = refVarStm?.getFirstDescendantByKind(
      ts.SyntaxKind.CallExpression
    );

    if (refCall) {
      refCall.addArguments([`() => ${refProp.getText()}`]);
    }

    if (varStm) {
      const varIdentifier = varStm
        ?.getFirstDescendantByKind(ts.SyntaxKind.VariableDeclaration)
        ?.getFirstChildByKind(ts.SyntaxKind.Identifier);
      if (varIdentifier) {
        varIdentifier.rename(ref.getText());
      }
      varStm.remove();
    }
  }
}

function transformMuiImports(source: SourceFile) {
  const imports = source.getDescendantsOfKind(ts.SyntaxKind.ImportDeclaration);
  const modPrefix = "../utils/";
  for (const node of imports) {
    const mod = node.getModuleSpecifier().getLiteralText();
    if (mod.startsWith(modPrefix)) {
      node.setModuleSpecifier("@suid/utils/" + mod.slice(modPrefix.length));
    }
  }
}

function transformMuiComponent(
  source: SourceFile,
  data: {
    componentName: string;
    docblock?: string;
    defaultPropNames?: string[];
    selfPropNames?: string[];
  }
) {
  const [forwardRef] = findReactObjects(source, ["forwardRef"]);

  const callExpr = forwardRef.node.getFirstAncestorByKindOrThrow(
    ts.SyntaxKind.CallExpression
  );
  const block = callExpr.getFirstDescendantByKindOrThrow(ts.SyntaxKind.Block);
  const useUtilityClasses = transformUseUtilityClasses(block);
  const propsVar = transformPropsVar(block);
  transformUseThemeProps(block);
  transformUseForkRef(block);
  transformMuiImports(source);
  const lastImport = source.getLastChildByKind(ts.SyntaxKind.ImportDeclaration);

  const componentStatement = createComponentStatement({
    name: data.componentName,
    selfPropNames: data.selfPropNames || [],
    slotClasses: useUtilityClasses,
    propDefaults: propsVar,
  });

  let lastImportIndex = lastImport?.getChildIndex();

  if (!lastImportIndex) {
    lastImportIndex = 0;
  } else {
    lastImportIndex++;
  }

  source.insertStatements(lastImportIndex, [
    `import createComponentFactory from "@suid/base/createComponentFactory"`,
    `import { ${data.componentName}TypeMap } from "."`,
    componentStatement,
  ]);

  const blockText = block.getText();

  callExpr.replaceWithText(
    `$.defineComponent(function ${data.componentName}(inProps) ${blockText})\n\n`
  );

  if (data.docblock) {
    callExpr
      .getFirstAncestorByKindOrThrow(ts.SyntaxKind.VariableStatement)
      .addJsDoc(data.docblock);
  }

  transformReactSource(source);
}

export default transformMuiComponent;
