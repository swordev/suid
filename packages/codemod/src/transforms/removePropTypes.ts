import { SourceFile, ts } from "ts-morph";

export default function removePropTypes(source: SourceFile) {
  const allImports = source.getImportDeclarations();
  for (const node of allImports) {
    if (node.getModuleSpecifier().getLiteralText() === "prop-types")
      node.remove();
  }

  const exprs = source.getChildrenOfKind(ts.SyntaxKind.ExpressionStatement);

  for (const expr of exprs) {
    const binExpr = expr.getFirstChildByKind(ts.SyntaxKind.BinaryExpression);
    const propAccessExpr = binExpr?.getFirstChildByKind(
      ts.SyntaxKind.PropertyAccessExpression
    );
    const lastIdentifier = propAccessExpr?.getLastChildByKind(
      ts.SyntaxKind.Identifier
    );

    if (lastIdentifier?.getText() === "propTypes") {
      expr.remove();
    }
  }
}
