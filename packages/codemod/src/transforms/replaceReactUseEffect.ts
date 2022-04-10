import getParentExpr from "../navigations/getParentExpr";
import { Identifier, ts, Node } from "ts-morph";

export default function replaceReactUseEffect(node: Identifier) {
  const expr = getParentExpr(node);
  const call = expr.getParentIfKind(ts.SyntaxKind.CallExpression);
  let functionName = "createEffect";
  if (call) {
    const [cb, vars] = call.getArguments();
    let returnType = "";
    if (Node.isFunctionExpression(cb) || Node.isArrowFunction(cb)) {
      returnType = cb.getReturnType().getText();
    }
    // [review] WIP
    if (returnType.startsWith("() =>")) return;
    if (Node.isArrayLiteralExpression(vars) && !vars.getElements().length) {
      functionName = "onMount";
    }
    call.removeArgument(vars);
  }

  expr.replaceWithText(functionName);

  node.getSourceFile().addImportDeclaration({
    namedImports: [functionName],
    moduleSpecifier: "solid-js",
  });
}
