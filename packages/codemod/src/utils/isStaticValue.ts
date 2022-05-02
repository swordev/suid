import { Node } from "ts-morph";

export default function isStaticValue(node: Node) {
  if (
    Node.isObjectLiteralExpression(node) ||
    Node.isArrayLiteralExpression(node)
  ) {
    for (const subnode of node.forEachChildAsArray()) {
      if (Node.isPropertyAssignment(subnode)) {
        const value = subnode.getInitializer();
        if (value && !isStaticValue(value)) return false;
      } else if (!isStaticValue(subnode)) {
        return false;
      }
    }
    return true;
  }
  return (
    Node.isTrueLiteral(node) ||
    Node.isFalseLiteral(node) ||
    Node.isUndefinedKeyword(node) ||
    Node.isNullLiteral(node) ||
    Node.isNumericLiteral(node) ||
    Node.isStringLiteral(node) ||
    Node.isIdentifier(node)
  );
}
