import { createRequire } from "module";
import { basename, dirname, relative } from "path";
import { SourceFile } from "ts-morph";

type Module =
  | {
      type: "module";
      name: string;
      path?: string;
      pathExt?: string;
    }
  | {
      type: "relative";
      path: string;
      pathExt?: string;
    };

function getFileExt(path: string) {
  const name = basename(path);
  const parts = name.split(".");
  if (name !== "." && parts.length > 1) return parts[parts.length - 1];
}

function parseModule(module: string): Module {
  let scope!: string;
  let name!: string;
  let parts!: string[];
  if (module.startsWith("@")) {
    [scope, name, ...parts] = module.split("/");
  } else if (!module.startsWith(".")) {
    [name, ...parts] = module.split("/");
  } else {
    parts = module.split("/");
  }
  const path = parts.join("/");
  const pathExt = getFileExt(path);
  const type = typeof name === "string" ? "module" : "relative";

  if (type === "module") {
    return {
      type,
      name: scope ? `${scope}/${name}` : name,
      path,
      pathExt,
    };
  } else {
    return {
      type,
      path,
      pathExt,
    };
  }
}

export default async function fixEsmImports(
  source: SourceFile,
  options: {
    sourcePath?: string;
    onImport?: (old: string, next: string | undefined) => false | void | string;
    dryRun?: boolean;
  }
) {
  const allImports = source.getImportDeclarations();
  const allExports = source.getExportDeclarations();

  for (const node of [...allImports, ...allExports]) {
    const moduleText = node.getModuleSpecifier()?.getLiteralText();
    const module = !!moduleText && parseModule(moduleText);
    const sourcePath = options.sourcePath ?? source.getFilePath().toString();
    const matches =
      module &&
      ((module.type === "relative" && !module.pathExt) ||
        (module.type === "module" && module.path && !module.pathExt));

    if (!matches) continue;

    const { resolve } = createRequire(sourcePath);
    let resolvedPath: string | undefined;
    let newModuleText: string | undefined;

    try {
      resolvedPath = resolve(moduleText);
      // eslint-disable-next-line no-empty
    } catch (error) {}

    if (!resolvedPath) continue;

    if (module.type === "relative") {
      newModuleText = relative(dirname(sourcePath), resolvedPath).replaceAll(
        "\\",
        "/"
      );
      if (!newModuleText.startsWith(".")) newModuleText = `./${newModuleText}`;
      newModuleText = newModuleText.replace(/\.ts(x)?$/, ".js$1");
    } else if (module.type === "module") {
      const baseDir = dirname(resolve(module.name));
      newModuleText = `${module.name}/${relative(
        baseDir,
        resolvedPath
      ).replaceAll("\\", "/")}`;
    }

    if (options.onImport) {
      const result = options.onImport(moduleText, newModuleText);
      if (typeof result === "string") {
        newModuleText = result;
      } else if (result === false) {
        continue;
      }
    }
    if (newModuleText && !options.dryRun)
      node.setModuleSpecifier(newModuleText);
  }
}
