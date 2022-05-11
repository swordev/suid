import { SourceFile, ts } from "ts-morph";

export default function findObjectLiteralExpressions(source: SourceFile) {
  return source.getDescendantsOfKind(ts.SyntaxKind.ObjectLiteralExpression);
}
