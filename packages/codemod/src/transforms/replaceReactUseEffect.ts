import getParentExpr from "../navigations/getParentExpr";
import { Identifier, ts, Node, ReturnStatement } from "ts-morph";

export default function replaceReactUseEffect(node: Identifier) {
  const expr = getParentExpr(node);
  const call = expr.getParentIfKind(ts.SyntaxKind.CallExpression);
  let functionName = "createEffect";
  let withCleanup = false;
  let onlyReturn: ReturnStatement | undefined;

  if (call) {
    const [cb, vars] = call.getArguments();
    onlyReturn = (
      call.getFirstChildByKind(ts.SyntaxKind.ArrowFunction) ||
      call.getFirstChildByKind(ts.SyntaxKind.FunctionExpression)
    )
      ?.getFirstChildByKind(ts.SyntaxKind.Block)
      ?.getChildSyntaxList()
      ?.getFirstChildIfKind(ts.SyntaxKind.ReturnStatement);

    let returnType = "";
    if (Node.isFunctionExpression(cb) || Node.isArrowFunction(cb)) {
      returnType = cb.getReturnType().getText();
    }
    withCleanup =
      returnType.startsWith("() =>") || returnType.startsWith("function");
    if (Node.isArrayLiteralExpression(vars) && !vars.getElements().length) {
      functionName = "onMount";
    }
    if (vars) call.removeArgument(vars);
  }

  if (withCleanup) {
    if (functionName === "onMount" && onlyReturn) {
      functionName = "onCleanup";
      const body = (
        onlyReturn.getFirstChildByKind(ts.SyntaxKind.ArrowFunction) ||
        onlyReturn.getFirstChildByKindOrThrow(ts.SyntaxKind.FunctionExpression)
      )
        .getFirstChildByKindOrThrow(ts.SyntaxKind.Block)
        .getChildSyntaxListOrThrow();
      onlyReturn.replaceWithText(body.getText());
    } else {
      functionName += "WithCleaning";
    }
    expr.replaceWithText(functionName);
    node.getSourceFile().addImportDeclaration({
      namedImports: [functionName],
      moduleSpecifier: "@suid/system",
    });
  } else {
    expr.replaceWithText(functionName);
    node.getSourceFile().addImportDeclaration({
      namedImports: [functionName],
      moduleSpecifier: "solid-js",
    });
  }
}
