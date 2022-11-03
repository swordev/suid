import { Identifier, ts } from "ts-morph";

// based on replaceReactElementType

export default function replaceReactComponentPropsWithoutRefType(node: Identifier) {
  const typeRef = node.getFirstAncestorByKind(
    ts.SyntaxKind.TypeReference
  );
  if (!typeRef) return // TODO what?
  const arg = (typeRef.getTypeArguments() || [])[0]
  if (!arg) return
  typeRef.replaceWithText(`JSX.IntrinsicElements[${arg.getText()}]`)
  node.getSourceFile().addImportDeclaration({
    moduleSpecifier: "solid-js",
    namedImports: ["JSX"],
    isTypeOnly: true,
  });
}
