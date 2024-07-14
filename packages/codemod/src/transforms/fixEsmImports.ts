import { builtinModules, createRequire } from "module";
import { basename, dirname, relative } from "path";
import { SourceFile } from "ts-morph";

type Module =
  | {
      type: "node";
      name: string;
    }
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
  if (module.startsWith("node:") || builtinModules.includes(module)) {
    return {
      type: "node",
      name: module,
    };
  } else if (module.startsWith("@")) {
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
    const moduleTextWithoutExt = moduleText?.replace(/(\.[jt]sx?)$/, "");
    const module = !!moduleText && parseModule(moduleText);
    const sourcePath = options.sourcePath ?? source.getFilePath().toString();
    const matches =
      module &&
      (module.type === "relative" || (module.type === "module" && module.path));

    if (!matches) continue;

    const { resolve } = createRequire(sourcePath);
    let resolvedPath: string | undefined;
    let newModuleText: string | undefined;
    const suffixes = [".jsx", ".js", "/index.jsx", "/index.js", ""];

    for (const ext of suffixes) {
      try {
        newModuleText = `${moduleTextWithoutExt}${ext}`;
        resolvedPath = resolve(newModuleText);
        break;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        continue;
      }
    }

    if (!resolvedPath) continue;

    if (module.type === "relative") {
      newModuleText = relative(dirname(sourcePath), resolvedPath).replaceAll(
        "\\",
        "/"
      );
      if (!newModuleText.startsWith(".")) newModuleText = `./${newModuleText}`;
      newModuleText = newModuleText.replace(/\.ts(x)?$/, ".js$1");
    }

    if (options.onImport) {
      const result = options.onImport(moduleText, newModuleText);
      if (typeof result === "string") {
        newModuleText = result;
      } else if (result === false) {
        continue;
      }
    }
    if (newModuleText && newModuleText !== moduleText && !options.dryRun)
      node.setModuleSpecifier(newModuleText);
  }
}
