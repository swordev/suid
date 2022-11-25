import getAncestorComponent from "./getAncestorComponent.js";
import hasAncestorJSX from "./hasAncestorJSX.js";
import { Node } from "ts-morph";

export type NodeScope = "jsx" | "component" | "component-top-level";

export default function checkNodeScope(node: Node, scopes?: NodeScope[]) {
  if (!scopes) return true;
  if (scopes.includes("jsx") && hasAncestorJSX(node)) return true;
  if (scopes.includes("component") || scopes.includes("component-top-level")) {
    const component = getAncestorComponent(node);
    if (!component) return false;
    if (scopes.includes("component-top-level")) {
      const firstFunction = node.getFirstAncestor(
        (node) =>
          Node.isFunctionDeclaration(node) ||
          Node.isFunctionExpression(node) ||
          Node.isArrowFunction(node)
      );
      return firstFunction === component;
    } else {
      return true;
    }
  }
  return false;
}
