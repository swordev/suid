import { Node, ts } from "ts-morph";

export default function hasAncestorComponent(node: Node) {
  let isJSX = false;
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
        isJSX =
          !!(wrapper || returnStm).getChildAtIndexIfKind(
            1,
            ts.SyntaxKind.JsxFragment
          ) ||
          !!(wrapper || returnStm).getChildAtIndexIfKind(
            1,
            ts.SyntaxKind.JsxElement
          );

        return false;
      }
    }
    return true;
  });

  return isJSX;
}
