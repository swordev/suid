import { Node, ts } from "ts-morph";

export default function hasAncestorJSX(node: Node) {
  return !!node.getFirstAncestorByKind(ts.SyntaxKind.JsxElement);
}
