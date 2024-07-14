import capitalize from "../utils/capitalize.js";
import checkNodeScope, { NodeScope } from "../utils/checkNodeScope.js";
import isStaticValue from "../utils/isStaticValue.js";
import renameIdentifiers from "../utils/renameIdentifiers.js";
import {
  Identifier,
  Node,
  ObjectBindingPattern,
  StringLiteral,
  ts,
} from "ts-morph";

export type ReplaceObjectBindingOptions = {
  scopes?: NodeScope[];
};

type ObjectBindingJson = {
  name: string;
  nameNode: Identifier | StringLiteral;
  rename?: Identifier;
  defaults?: Node;
  destruct?: ObjectBindingJson[];
  rest?: boolean;
};

function renameObjectBinding(object: ObjectBindingJson, varName: string) {
  const nameNode = object.rename || object.nameNode;
  if (Node.isIdentifier(nameNode))
    renameIdentifiers(
      nameNode,
      Node.isStringLiteral(object.nameNode)
        ? `${varName}[${object.nameNode.getText()}]`
        : `${varName}.${object.nameNode.getText()}`
    );
}

function toJson(node: ObjectBindingPattern) {
  const result: ObjectBindingJson[] = [];
  for (const element of node.getChildrenOfKind(ts.SyntaxKind.BindingElement)) {
    const rest = !!element.getChildAtIndexIfKind(
      0,
      ts.SyntaxKind.DotDotDotToken
    );

    const nameNode = element.getChildAtIndex(rest ? 1 : 0);

    if (!Node.isIdentifier(nameNode) && !Node.isStringLiteral(nameNode))
      throw new Error(`Invalid name node`);

    const item: ObjectBindingJson = {
      name: nameNode.getText(),
      nameNode,
      rest,
    };

    result.push(item);
    const defaultsToken = element.getFirstChildByKind(
      ts.SyntaxKind.EqualsToken
    );
    if (defaultsToken) {
      item.defaults = element.getChildAtIndex(
        defaultsToken.getChildIndex() + 1
      );
    }
    const renameToken = element.getFirstChildByKind(ts.SyntaxKind.ColonToken);
    if (renameToken) {
      const renameValue = element.getChildAtIndex(
        renameToken.getChildIndex() + 1
      );

      if (Node.isObjectBindingPattern(renameValue)) {
        item.destruct = toJson(renameValue);
      } else if (Node.isIdentifier(renameValue)) {
        item.rename = renameValue;
      }
    }
  }
  return result;
}

function safePropName(
  name: string,
  accessor: boolean | "withMergeProps" = true
) {
  if (name.endsWith("?")) name = name.slice(0, -1) + " || {}";
  if (accessor && name.includes(".")) {
    if (accessor) {
      name = `() => ${name}`;
    }
    if (accessor === "withMergeProps") {
      name = `mergeProps(${name})`;
    }
  }
  return name;
}

// [review]
function createSafeVarName(name: string) {
  return name;
}

function generateSentences(name: string, objects: ObjectBindingJson[]) {
  const sentences: string[] = [];
  const solidNamedImports: string[] = [];
  const restObject = objects.find((o) => o.rest);

  if (restObject) {
    const varName = createSafeVarName(restObject.name);
    const propNames = JSON.stringify(
      objects.filter((o) => !o.rest).map((o) => o.name)
    );
    solidNamedImports.push("splitProps");
    sentences.push(
      `const [, ${varName}] = splitProps(${safePropName(
        name,
        "withMergeProps"
      )}, ${propNames});`
    );
    if (Node.isIdentifier(restObject.nameNode))
      renameIdentifiers(restObject.nameNode, varName);
  }

  const defaultsObjects = objects.filter((o) => o.defaults && !o.destruct);

  if (defaultsObjects.length) {
    const varName = createSafeVarName(`base${capitalize(name)}`)
      .replaceAll(".", "_")
      .replaceAll("?", "");

    const defaultsObject = defaultsObjects.reduce((result, o) => {
      if (o.defaults && isStaticValue(o.defaults)) {
        result += `${o.name}: ${o.defaults?.getText()},\n`;
      } else {
        result += `get ${o.name}() { return ${o.defaults?.getText()}; }\n`;
      }
      return result;
    }, "");

    const defaultsObjectJson = `{\n${defaultsObject}}`;
    solidNamedImports.push("mergeProps");
    sentences.push(
      `const ${varName} = mergeProps(${defaultsObjectJson}, ${safePropName(
        name
      )});\n`
    );
    for (const object of defaultsObjects) {
      renameObjectBinding(object, varName);
    }
  }

  const destructObjects = objects.filter((o) => o.destruct);

  if (destructObjects.length) {
    for (const object of destructObjects) {
      const optional = object.defaults?.getText().trim().startsWith("{");
      const result = generateSentences(
        `${name}.${object.name}${optional ? "?" : ""}`,
        object.destruct!
      );
      solidNamedImports.push(
        ...result.solidNamedImports.filter(
          (name) => !solidNamedImports.includes(name)
        )
      );
      sentences.push(...result.sentences);
    }
  }

  const otherObjects = objects.filter(
    (o) => !o.rest && !o.destruct && !o.defaults
  );
  for (const object of otherObjects) {
    renameObjectBinding(object, name);
  }
  return {
    sentences,
    solidNamedImports,
  };
}

function replaceObjectBinding(
  node: ObjectBindingPattern,
  options: ReplaceObjectBindingOptions = {
    scopes: ["component-top-level", "jsx"],
  }
) {
  if (node.wasForgotten() || !checkNodeScope(node, options.scopes)) return;
  const parent = node.getParent();

  let name!: string;
  const objects = toJson(node);

  if (Node.isParameterDeclaration(parent)) {
    const func =
      parent.getParentIfKind(ts.SyntaxKind.FunctionExpression) ||
      parent.getParentIfKind(ts.SyntaxKind.FunctionDeclaration) ||
      parent.getParentIfKind(ts.SyntaxKind.ArrowFunction);

    const params = func?.getParameters();
    const paramIndex = params?.indexOf(parent);
    name = createSafeVarName(
      params?.length === 1 ? `params` : `params_${paramIndex}`
    );
  } else if (parent.getKind() === ts.SyntaxKind.VariableDeclaration) {
    const nameNode = parent.getChildAtIndex(2);
    if (nameNode.getKind() === ts.SyntaxKind.Identifier) {
      name = nameNode.getText();
    } else {
      return;
    }
  } else {
    return;
  }

  // Partial support
  if (parent.getKind() === ts.SyntaxKind.Parameter) {
    for (const object of objects) {
      renameObjectBinding(object, name);
    }
    parent.replaceWithText(name);
  } else if (parent.getKind() === ts.SyntaxKind.VariableDeclaration) {
    const { sentences, solidNamedImports } = generateSentences(name, objects);
    if (solidNamedImports.length)
      parent.getSourceFile().addImportDeclaration({
        moduleSpecifier: "solid-js",
        namedImports: solidNamedImports,
      });
    parent
      .getFirstAncestorByKind(ts.SyntaxKind.VariableStatement)
      ?.replaceWithText(sentences.join("\n\n"));
  }
}

export default replaceObjectBinding;
