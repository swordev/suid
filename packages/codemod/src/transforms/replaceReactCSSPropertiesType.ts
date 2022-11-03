import { Identifier, ts } from "ts-morph";

export default function replaceReactElementType(node: Identifier) {
  const typeRef = node.getFirstAncestorByKindOrThrow(
    ts.SyntaxKind.TypeReference
  );
  typeRef.replaceWithText(`CSS.Properties`)
  node.getSourceFile().addImportDeclaration({
    moduleSpecifier: "csstype",
    namespaceImport: "CSS",
    isTypeOnly: true,
  });
}
