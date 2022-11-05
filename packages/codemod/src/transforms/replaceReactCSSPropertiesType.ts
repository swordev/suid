import { Identifier, ts } from "ts-morph";

export default function replaceReactElementType(node: Identifier) {
  const typeRef = node.getFirstAncestorByKindOrThrow(
    ts.SyntaxKind.TypeReference
  );
  typeRef.replaceWithText(`CSS.Properties`)
  node.getSourceFile().addImportDeclaration({
    moduleSpecifier: "csstype",
    namespaceImport: "CSS",
    // FIXME(milahu): import type
    // a: import * as CSS from "csstype";
    // b: import type * as CSS from "csstype";
    isTypeOnly: true,
  });
}
