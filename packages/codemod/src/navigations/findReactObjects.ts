import getParentExpr from "../utils/getParentExpr";
import { Identifier, Node, SourceFile, ts } from "ts-morph";

export default function findReactObjects(source: SourceFile, names?: string[]) {
  const reactImport = source.getImportDeclaration("react");
  const result: { name: string; node: Identifier }[] = [];
  const push = (ref: Identifier) => {
    const name = ref.getText();
    if (!names || names.includes(name))
      result.push({
        name,
        node: ref,
      });
  };
  if (reactImport) {
    const ns = (
      reactImport.getNamespaceImport() || // import * as React from "react"
      reactImport.getDefaultImport() // import React from "react"
    );
    const named = reactImport.getNamedImports();
    for (const name of named) {
      const identifier = name.getFirstChildByKind(ts.SyntaxKind.Identifier);
      if (identifier) {
        for (const ref of identifier.findReferencesAsNodes()) {
          if (ref === identifier) continue;
          if (Node.isIdentifier(ref)) push(ref);
        }
      }
    }

    if (ns)
      for (const ref of ns.findReferencesAsNodes()) {
        if (ref.getFirstAncestorByKind(ts.SyntaxKind.NamespaceImport)) continue;
        const parent = getParentExpr(ref);
        const lastIdentifier = parent?.getLastChildByKind(
          ts.SyntaxKind.Identifier
        );
        if (lastIdentifier) push(lastIdentifier);
      }
  }
  return result;
}
