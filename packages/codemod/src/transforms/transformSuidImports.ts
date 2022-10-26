import type { SourceFile } from "ts-morph";

function createImportsMap() {
  const map: Record<string, Record<string, string>> = {};

  return {
    map,
    add(module: string, named: string, alias: string) {
      if (!map[module]) map[module] = {};
      map[module][named] = alias;
    },
  };
}

export default async function transformSuidImports(
  source: SourceFile,
  options: {
    format: "named";
    onImport?: (moduleSpecifier: string) => false | void;
    dryRun?: boolean;
  }
) {
  const allImports = source.getImportDeclarations();
  const imports = createImportsMap();

  for (const node of allImports) {
    const alias = node.getDefaultImport()?.getText();
    const moduleSpecifier = node.getModuleSpecifier()?.getLiteralText();
    if (!alias || !moduleSpecifier) continue;
    const levels = moduleSpecifier.split("/");
    const [importScope, importModule, importPath] = levels;

    if (importScope === "@suid" && levels.length === 3) {
      if (importModule === "material") {
        imports.add("@suid/material", importPath, alias);
        if (options.onImport) {
          if (options.onImport(moduleSpecifier) !== false) {
            if (!node.getNamedImports().length) {
              node.remove();
            } else {
              node.removeDefaultImport();
            }
          }
        }
      }
    }
  }

  if (!options.dryRun)
    for (const moduleSpecifier in imports.map) {
      const importNode = source.addImportDeclaration({
        moduleSpecifier,
      });
      const names = Object.keys(imports.map[moduleSpecifier]).sort();
      for (const name of names) {
        const alias = imports.map[moduleSpecifier][name];
        importNode.addNamedImport({
          name,
          alias: name === alias ? undefined : alias,
        });
      }
    }
}
