import { Node } from "ts-morph";

export default function hasAncestorType(node: Node) {
  let result = false;
  node.getParentWhile((node) => {
    if (
      Node.isTypeAliasDeclaration(node) ||
      Node.isInterfaceDeclaration(node) ||
      Node.isTypeLiteral(node)
    ) {
      result = true;
      return false;
    }
    return true;
  });

  return result;
}
