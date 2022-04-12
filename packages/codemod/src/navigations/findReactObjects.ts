import getParentExpr from "./getParentExpr";
import { Identifier, Node, SourceFile, ts } from "ts-morph";

export default function findReactObjects(source: SourceFile) {
  const reactImport = source.getImportDeclaration("react");
  const result: { name: string; node: Identifier }[] = [];
  if (reactImport) {
    const ns = reactImport.getNamespaceImport();
    const named = reactImport.getNamedImports();
    for (const name of named) {
      const identifier = name.getFirstChildByKind(ts.SyntaxKind.Identifier);
      if (identifier) {
        for (const ref of identifier.findReferencesAsNodes()) {
          if (ref === identifier) continue;
          if (Node.isIdentifier(ref))
            result.push({
              name: ref.getText(),
              node: ref,
            });
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
        if (lastIdentifier)
          result.push({
            name: lastIdentifier.getText(),
            node: lastIdentifier,
          });
      }
  }
  return result;
}
