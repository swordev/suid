import { Node, ts } from "ts-morph";

function isReactComponentNode(node: Node) {
  if (Node.isCallExpression(node)) {
    const callText = node
      .getFirstDescendantByKind(ts.SyntaxKind.PropertyAccessExpression)
      ?.getText();
    return (
      callText === "React.cloneElement" || callText === "React.createElement"
    );
  } else {
    return false;
  }
}

export default function getAncestorComponent(node: Node) {
  let result: Node | undefined;
  node.getParentWhile((node) => {
    if (Node.isFunctionDeclaration(node) || Node.isFunctionExpression(node)) {
      const returnStms = node
        .getBody()
        ?.getChildrenOfKind(ts.SyntaxKind.ReturnStatement);
      for (const returnStm of returnStms || []) {
        const wrapper = returnStm.getChildAtIndexIfKind(
          1,
          ts.SyntaxKind.ParenthesizedExpression
        );
        const value = (wrapper || returnStm).getChildAtIndex(1);
        if (
          Node.isJsxFragment(value) ||
          Node.isJsxElement(value) ||
          Node.isJsxSelfClosingElement(value) ||
          isReactComponentNode(value)
        ) {
          result = node;
          return false;
        }
      }
    }
    return true;
  });
  return result;
}
