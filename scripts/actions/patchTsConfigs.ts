import { safeStat } from "./../util/fs";
import { parsePackageFile } from "./../util/package";
import {
  parseTsConfigFile,
  TsConfig,
  writeTsConfigFile,
} from "./../util/tsconfig";
import { getPackageNames, packagesPath, rootPath } from "./../util/workspace";
import { join } from "path";

const scope = "suid";
const scopePrefix = `@${scope}/`;

const extraPaths: Record<string, TsConfig["compilerOptions"]["paths"]> = {
  site: {
    "~/*": ["./src/*"],
  },
};

const withoutReferences = ["site", "vite-plugin", "icons-material"];

const customPath: Record<string, string> = {
  "icons-material": "icons-material/lib",
};

async function patchTsConfigs() {
  const { name } = patchTsConfigs;
  const packageNames = await getPackageNames();

  for (const packageName of packageNames) {
    console.log(`[${name}] ${packageName}`);
    const packagePath = join(packagesPath, packageName);
    const tsconfigPath = join(packagePath, "tsconfig.json");
    const tsconfigBuildPath = join(packagePath, "tsconfig.build.json");
    if (!(await safeStat(tsconfigPath))) continue;
    const pkgPath = join(packagePath, "package.json");
    const tsconfig = await parseTsConfigFile(tsconfigPath);
    const pkg = await parsePackageFile(pkgPath);
    const publishDirectory = pkg.publishConfig?.["directory"];
    const wsDependencies = Object.keys(pkg.dependencies || {})
      .filter((v) => v.startsWith(scopePrefix))
      .map((v) => v.slice(scopePrefix.length));

    tsconfig.include = ["src", "test"];
    delete tsconfig.exclude;
    delete tsconfig.compilerOptions.outDir;
    delete tsconfig.compilerOptions.rootDir;
    tsconfig.references = wsDependencies
      .filter((v) => !withoutReferences.includes(v))
      .map((v) => ({
        path: `./../${v}/tsconfig.build.json`,
      }));

    if (!tsconfig.references.length) delete tsconfig.references;

    tsconfig.compilerOptions.paths = wsDependencies.reduce((result, name) => {
      const path = `./../` + (customPath[name] || `${name}/src`);
      result[`@${scope}/${name}`] = [path];
      result[`@${scope}/${name}/*`] = [`${path}/*`];
      return result;
    }, {} as Record<string, string[]>);

    if (extraPaths[packageName])
      Object.assign(tsconfig.compilerOptions.paths, extraPaths[packageName]);

    if (!Object.keys(tsconfig.compilerOptions.paths).length)
      delete tsconfig.compilerOptions.paths;

    const tsconfigBuild: TsConfig = JSON.parse(JSON.stringify(tsconfig));

    tsconfigBuild.extends = "./tsconfig.json";
    tsconfigBuild.exclude = ["src/**/*.test.*"];
    tsconfigBuild.include = ["src"];
    tsconfigBuild.compilerOptions = {
      outDir: publishDirectory,
      rootDir: "src",
      paths: tsconfig.compilerOptions.paths,
    };

    await writeTsConfigFile(tsconfigBuildPath, tsconfigBuild);

    await writeTsConfigFile(tsconfigPath, tsconfig);
  }

  const tsconfigBuildPath = join(rootPath, "tsconfig.build.json");
  const tsconfigBuild = await parseTsConfigFile(tsconfigBuildPath);

  tsconfigBuild.references = packageNames
    .filter((name) => !withoutReferences.includes(name))
    .map((v) => ({ path: `packages/${v}/tsconfig.build.json` }));

  await writeTsConfigFile(tsconfigBuildPath, tsconfigBuild);
}

export default patchTsConfigs;
