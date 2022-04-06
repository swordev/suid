import renameGetterVarToCall from "./renameGetterVarToCall";
import { Identifier, ts } from "ts-morph";

export default function replaceReactUseState(node: Identifier) {
  const call = node.getFirstAncestorByKind(ts.SyntaxKind.CallExpression);
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

  const callProp = call?.getFirstDescendantByKind(
    ts.SyntaxKind.PropertyAccessExpression
  );

  callProp?.replaceWithText("createSignal");

  node.getSourceFile().addImportDeclaration({
    namedImports: ["createSignal"],
    moduleSpecifier: "solid-js",
  });
}
