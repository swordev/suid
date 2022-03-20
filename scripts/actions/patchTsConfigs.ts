import { safeStat } from "./../util/fs";
import { parsePackageFile } from "./../util/package";
import { join } from "path";
import {
  parseTsConfigFile,
  TsConfig,
  writeTsConfigFile,
} from "~/util/tsconfig";
import { getPackageNames, packagesPath, rootPath } from "~/util/workspace";

const scope = "suid";
const scopePrefix = `@${scope}/`;

const extraPaths: Record<string, TsConfig["compilerOptions"]["paths"]> = {
  site: {
    "~/*": ["./src/*"],
  },
};

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
    if (!(await safeStat(tsconfigPath))) continue;
    const pkgPath = join(packagePath, "package.json");
    const tsconfig = await parseTsConfigFile(tsconfigPath);
    const pkg = await parsePackageFile(pkgPath);

    const wsDependencies = Object.keys(pkg.dependencies || {})
      .filter((v) => v.startsWith(scopePrefix))
      .map((v) => v.slice(scopePrefix.length));

    tsconfig.include = ["src/**/*"];
    tsconfig.exclude = ["src/**/*.test.*"];
    tsconfig.references = wsDependencies.map((v) => ({ path: `./../${v}` }));
    tsconfig.compilerOptions.paths = wsDependencies.reduce((result, name) => {
      const path = `./../` + (customPath[name] || `${name}/src`);
      result[`@${scope}/${name}`] = [path];
      result[`@${scope}/${name}/*`] = [`${path}/*`];
      return result;
    }, {} as TsConfig["compilerOptions"]["paths"]);
    if (extraPaths[packageName])
      Object.assign(tsconfig.compilerOptions.paths, extraPaths[packageName]);

    await writeTsConfigFile(tsconfigPath, tsconfig);
  }

  const tsconfigBuildPath = join(rootPath, "tsconfig.build.json");
  const tsconfigBuild = await parseTsConfigFile(tsconfigBuildPath);

  tsconfigBuild.references = packageNames
    .filter((name) => name !== "site")
    .map((v) => ({ path: `packages/${v}` }));

  await writeTsConfigFile(tsconfigBuildPath, tsconfigBuild);

  const tsconfigJestPath = join(rootPath, "tsconfig.jest.json");
  const tsconfigJest = await parseTsConfigFile(tsconfigJestPath);

  tsconfigJest.compilerOptions.paths = packageNames
    .filter((name) => name !== "site")
    .reduce((result, name) => {
      const path = `./packages/${customPath[name] || `${name}/src`}`;
      result[`@${scope}/${name}`] = [path];
      result[`@${scope}/${name}/*`] = [`${path}/*`];
      return result;
    }, {} as TsConfig["compilerOptions"]["paths"]);

  await writeTsConfigFile(tsconfigJestPath, tsconfigJest);
}

export default patchTsConfigs;
