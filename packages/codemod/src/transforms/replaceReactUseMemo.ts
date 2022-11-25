import getParentExpr from "../utils/getParentExpr.js";
import renameGetterVarToCall from "./renameGetterVarToCall.js";
import { Identifier, ts } from "ts-morph";

export default function replaceReactUseMemo(node: Identifier) {
  const expr = getParentExpr(node);
  const call = expr.getFirstAncestorByKind(ts.SyntaxKind.CallExpression);

  if (call) {
    const variableDec = call.getFirstAncestorByKind(
      ts.SyntaxKind.VariableDeclaration
    );

    if (variableDec) {
      const varName = variableDec.getFirstChildByKind(ts.SyntaxKind.Identifier);

      if (varName) {
        renameGetterVarToCall(varName, true);
      }
    }
    const args = call.getArguments();
    if (args.length > 1) call.removeArgument(1);
  }

  expr.replaceWithText("createMemo");

  node.getSourceFile().addImportDeclaration({
    namedImports: ["createMemo"],
    moduleSpecifier: "solid-js",
  });
}
