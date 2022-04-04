import renameGetterVarToCall from "./renameGetterVarToCall";
import { CallExpression, ts } from "ts-morph";

export default function replaceReactUseState(call: CallExpression) {
  const variableDec = call.getFirstAncestorByKind(
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

  const callProp = call.getFirstDescendantByKind(
    ts.SyntaxKind.PropertyAccessExpression
  );

  callProp?.replaceWithText("createSignal");

  call.getSourceFile().addImportDeclaration({
    namedImports: ["createSignal"],
    moduleSpecifier: "solid-js",
  });
}
