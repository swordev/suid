import { ImportSpecifier, SourceFile } from "ts-morph";

const defaults: Partial<Record<string, RegExp[]>> = {
  "@mui/base": [/.+/],
};

const renames: Partial<Record<string, string>> = {
  "@mui/base/isHostComponent": "@suid/base/utils/isHostComponent",
};

function replace(text: string) {
  return text.replace(/^@mui/, "@suid");
}

export default function renameMuiImports(source: SourceFile) {
  for (const node of source.getImportDeclarations()) {
    const mod = node.getModuleSpecifier();
    const modText = mod.getLiteralText();
    const patterns = defaults[modText];

    if (patterns) {
      const namedImports = node.getNamedImports();
      const removedNamed: ImportSpecifier[] = [];

      for (const named of namedImports) {
        const namedName = named.getName();
        const matches = patterns.some((p) => p.exec(namedName));
        if (matches) {
          const endModText = `${modText}/${namedName}`;
          source.addImportDeclaration({
            moduleSpecifier: replace(renames[endModText] || endModText),
            defaultImport: named.getAliasNode()?.getText() || named.getName(),
          });
          removedNamed.push(named);
        }
      }
      if (
        removedNamed.length &&
        removedNamed.length === namedImports.length &&
        !node.getDefaultImport() &&
        !node.getNamespaceImport()
      ) {
        node.remove();
        continue;
      } else {
        removedNamed.forEach((named) => named.remove());
      }
    }

    if (modText.startsWith("@mui/")) {
      mod.setLiteralValue(replace(modText));
    }
  }
}
