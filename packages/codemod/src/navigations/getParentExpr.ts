import { Node, ts } from "ts-morph";

function getParentExpr(node: Node) {
  const qualifedName = node.getParentWhileKind(ts.SyntaxKind.QualifiedName);
  if (qualifedName) return qualifedName;
  const typeReference = node.getParentWhileKind(ts.SyntaxKind.TypeReference);
  if (typeReference) return typeReference;
  const propertyAccessExpression = node.getParentWhileKind(
    ts.SyntaxKind.PropertyAccessExpression
  );
  if (propertyAccessExpression) return propertyAccessExpression;
  return node;
}

export default getParentExpr;
