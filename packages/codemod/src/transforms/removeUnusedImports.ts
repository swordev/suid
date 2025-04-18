import { SourceFile } from "ts-morph";

export default function removeUnusedImports(source: SourceFile) {
  const allImports = source.getImportDeclarations();

  for (const importNode of allImports) {
    const defaultImport = importNode.getDefaultImport();
    const namedImports = importNode.getNamedImports();
    const nsImport = importNode.getNamespaceImport();
    let removed = 0;

    if (defaultImport?.findReferencesAsNodes().length === 1) {
      importNode.removeDefaultImport();
      removed++;
    }

    for (const nameImport of namedImports) {
      const node = nameImport.getAliasNode() || nameImport.getNameNode();
      if (
        "findReferencesAsNodes" in node &&
        node.findReferencesAsNodes().length === 1
      ) {
        nameImport.remove();
        removed++;
      }
    }
    if (nsImport?.findReferencesAsNodes().length === 1) {
      importNode.removeNamespaceImport();
      removed++;
    }

    if (
      removed &&
      !importNode.getDefaultImport() &&
      !importNode.getNamedImports().length &&
      !importNode.getNamespaceImport()
    ) {
      importNode.remove();
    }
  }
}
