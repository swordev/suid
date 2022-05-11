import checkNodeScope, { NodeScope } from "../utils/checkNodeScope";
import isStaticValue from "../utils/isStaticValue";
import { Node, ObjectLiteralExpression } from "ts-morph";

export type ReplaceSpreadAsignmentOptions = {
  scopes?: NodeScope[];
};

function getSpreadAsignment(node: ObjectLiteralExpression) {
  if (node.wasForgotten()) return "";

  const mergeValues: string[] = [];
  let properties: string[] = [];
  const drainProperties = () => {
    if (properties.length) {
      mergeValues.push(`{ ${properties.join(",\n")}}`);
    }
    properties = [];
  };

  for (const subnode of node.forEachChildAsArray()) {
    if (Node.isSpreadAssignment(subnode)) {
      drainProperties();
      const value = subnode.getChildAtIndex(1);
      if (isStaticValue(value)) {
        mergeValues.push(value.getText());
      } else {
        mergeValues.push(`() => ${value.getText()}`);
      }
    } else if (Node.isPropertyAssignment(subnode)) {
      const initializer = subnode.getInitializer();
      let text: string;
      if (Node.isObjectLiteralExpression(initializer)) {
        text = getSpreadAsignment(initializer);
      } else {
        text = initializer?.getText() ?? "undefined";
      }

      if (initializer && isStaticValue(initializer)) {
        properties.push(`${subnode.getName()}: ${text}`);
      } else {
        properties.push(`get ${subnode.getName()}() { return ${text} }`);
      }
    } else if (Node.isShorthandPropertyAssignment(subnode)) {
      const name = subnode.getName();
      properties.push(`${name}: ${name}`);
    } else {
      properties.push(subnode.getText());
    }
  }

  const requireMergeProps = !!mergeValues.length;

  drainProperties();
  if (requireMergeProps) {
    node.getSourceFile().addImportDeclaration({
      namedImports: ["mergeProps"],
      moduleSpecifier: "solid-js",
    });
    return `mergeProps(${mergeValues.join(", ")})`;
  } else {
    return mergeValues[0] ?? "{}";
  }
}

function replaceSpreadAsignment(
  node: ObjectLiteralExpression,
  options: ReplaceSpreadAsignmentOptions = {
    scopes: ["component-top-level", "jsx"],
  }
) {
  if (node.wasForgotten() || !checkNodeScope(node, options.scopes)) return;
  node.replaceWithText(getSpreadAsignment(node));
}

export default replaceSpreadAsignment;
