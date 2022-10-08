import transformMuiComponent from "../transforms/transformMuiComponent";
import transformMuiProps from "../transforms/transformMuiProps";
import transformReactSource from "../transforms/transformReactSource";
import applyTransforms from "../utils/applyTransforms";
import capitalize from "../utils/capitalize";
import colorize from "../utils/colorize";
import uncapitalize from "../utils/uncapitalize";
import FastGlob from "fast-glob";
import { mkdir, readFile, rm, stat, writeFile } from "fs/promises";
import micromatch from "micromatch";
import { dirname, join, normalize, relative, basename } from "path";
import { format } from "prettier";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootPath = normalize(`${__dirname}/../../../../`);

export function muiSourcePath(version: string) {
  return join(rootPath, `node_modules/.mui-source/material-ui-${version}`);
}

export async function safeStat(path: string) {
  try {
    return await stat(path);
  } catch (error) {
    return;
  }
}

async function transformClassFile(path: string) {
  const contents = (await readFile(path)).toString();
  return applyTransforms(contents, [transformReactSource]);
}

async function transformPropsFile(path: string, componentName: string) {
  const contents = (await readFile(path)).toString();
  let result!: ReturnType<typeof transformMuiProps>;
  const newContents = applyTransforms(contents, [
    (source) => {
      result = transformMuiProps(source, componentName);
    },
  ]);
  return { ...result, contents: newContents };
}

async function transformComponentFile(
  path: string,
  data: Parameters<typeof transformMuiComponent>[1]
) {
  const contents = (await readFile(path)).toString();
  return applyTransforms(contents, [
    (source) => transformMuiComponent(source, data),
  ]);
}

async function transformFile(path: string) {
  const contents = (await readFile(path)).toString();
  return applyTransforms(contents, [transformReactSource]);
}

export default async function mui2suid(options: {
  version: string;
  packageName: string;
  name: string;
  print?: boolean;
  out?: string | true;
  filters?: string[];
}) {
  const { name } = options;

  const componentName = capitalize(name);
  const src = muiSourcePath(options.version);
  const componentDir = `${src}/packages/mui-${options.packageName}/src/${componentName}`;
  const contents: Record<string, string> = {};
  const sourcePaths: Record<string, string> = {};
  const outBasePath = `${rootPath}/packages/${options.packageName}/src/`;
  const defaultsOutPath = join(outBasePath, options.name);
  const outPath =
    options.out === true
      ? defaultsOutPath
      : typeof options.out === "string"
      ? join(outBasePath, options.out)
      : undefined;

  if (outPath && (await safeStat(outPath))) {
    if (outPath.endsWith("Test")) {
      await rm(outPath, {
        recursive: true,
      });
    } else {
      throw new Error(`Output path already exists: ${outPath}`);
    }
  }

  const excludedFiles: string[] = [];
  const checkFilter = (v: string) =>
    !options.filters?.length || !!micromatch([v], options.filters).length;
  const relPath = (absPath: string) => relative(componentDir, absPath);

  // Classes

  const sourceClassesPath = join(
    componentDir,
    `${uncapitalize(options.name)}Classes.ts`
  );
  const classesPath = basename(sourceClassesPath);
  if ((await safeStat(sourceClassesPath)) && checkFilter(classesPath)) {
    sourcePaths[classesPath] = sourceClassesPath;
    contents[classesPath] = await transformClassFile(sourceClassesPath);
    excludedFiles.push(sourceClassesPath);
  }

  // Exists component

  const sourceComponentPath = join(componentDir, `${componentName}.js`);
  const componentPath = `${componentName}.tsx`;
  const existsSourceComponent =
    (await safeStat(sourceComponentPath)) && checkFilter(componentPath);

  // Props

  let transformPropsResult:
    | Awaited<ReturnType<typeof transformPropsFile>>
    | undefined;

  const sourcePropsPath = join(componentDir, `${componentName}.d.ts`);
  const propsPath = `${componentName}Props.tsx`;

  if (
    (await safeStat(sourcePropsPath)) &&
    (checkFilter(propsPath) || existsSourceComponent)
  ) {
    transformPropsResult = await transformPropsFile(
      sourcePropsPath,
      componentName
    );
    if (checkFilter(propsPath)) {
      sourcePaths[propsPath] = sourcePropsPath;
      contents[propsPath] = transformPropsResult.contents;
      excludedFiles.push(sourcePropsPath);
    }
  }

  // Component

  if (existsSourceComponent) {
    sourcePaths[componentPath] = sourceComponentPath;
    contents[componentPath] = await transformComponentFile(
      sourceComponentPath,
      {
        componentName: name,
        ...(transformPropsResult || {}),
      }
    );
    excludedFiles.push(sourceComponentPath);
  }

  // Index

  const sourceIndexPath = join(componentDir, "index.d.ts");
  const indexPath = `index.tsx`;

  if ((await safeStat(sourceIndexPath)) && checkFilter(indexPath)) {
    sourcePaths[indexPath] = sourceIndexPath;
    contents[indexPath] = await transformFile(sourceIndexPath);
    if (transformPropsResult)
      contents[`index.tsx`] += `
      export * from "./${componentName}Props";
    `;
    excludedFiles.push(sourceIndexPath);
    excludedFiles.push(sourceIndexPath.replace(/\.d\.ts$/, ".js"));
  }

  // Other files

  const unixExcludedFiles = excludedFiles.map((v) => v.replaceAll("\\", "/"));
  const pattern = componentDir.replaceAll("\\", "/") + "/*";
  const otherFiles = (await FastGlob(pattern)).filter(
    (v) => !unixExcludedFiles.includes(v) && !/\.(test|spec)\.[tj]sx?$/.test(v)
  );

  for (const absPath of otherFiles) {
    const path = relPath(absPath);
    if (!checkFilter(path)) continue;
    sourcePaths[path] = absPath;
    contents[path] = await transformFile(absPath);
  }

  // Output

  const cwd = process.cwd();
  let files = 0;

  for (const fileName in contents) {
    if (!checkFilter(fileName)) continue;
    files++;
    const fileContents = format(contents[fileName], {
      parser: "typescript",
    });
    const relSourcePath = relative(cwd, sourcePaths[fileName]);
    const relTargetPath = relative(
      cwd,
      join(outPath || defaultsOutPath, fileName)
    );

    console.log(`# ${colorize(relSourcePath)} » ${colorize(relTargetPath)}`);

    if (options.print) {
      console.log(fileContents);
    }

    if (outPath) {
      const outFilePath = join(outPath, fileName);
      await mkdir(dirname(outFilePath), {
        recursive: true,
      });
      await writeFile(outFilePath, fileContents);
    }
  }

  if (!files) throw new Error(`No files found`);
  return contents;
}
