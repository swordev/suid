import getParentExpr from "../utils/getParentExpr";
import renameGetterVarToCall from "./renameGetterVarToCall";
import { Identifier, ts } from "ts-morph";

export default function replaceReactUseState(node: Identifier) {
  const expr = getParentExpr(node);
  const call = expr.getFirstAncestorByKind(ts.SyntaxKind.CallExpression);
  const variableDec = call?.getFirstAncestorByKind(
    ts.SyntaxKind.VariableDeclaration
  );

  if (variableDec) {
    const array = variableDec.getFirstDescendantByKind(
      ts.SyntaxKind.ArrayBindingPattern
    );
    if (array) {
      const arrayBinding = array.getFirstDescendantByKind(
        ts.SyntaxKind.BindingElement
      );
      const getterIdentifier = arrayBinding?.getFirstDescendantByKind(
        ts.SyntaxKind.Identifier
      );
      if (getterIdentifier) {
        renameGetterVarToCall(getterIdentifier, true);
      }
    }
  }

  expr.replaceWithText("createSignal");

  node.getSourceFile().addImportDeclaration({
    namedImports: ["createSignal"],
    moduleSpecifier: "solid-js",
  });
}
