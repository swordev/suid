import { readdir, symlink, unlink } from "fs/promises";
import { join } from "path";
import { safeReadLink, safeStat } from "~/util/fs";
import { parsePackageFile } from "~/util/package";
import { getPackageNames, packagesPath } from "~/util/workspace";

async function patch(packagePath: string) {
  const wsPath = `${packagePath}/node_modules/@suid`;
  if (!(await safeStat(wsPath))) return;
  const dependencyNames = await readdir(wsPath);
  for (const dependencyName of dependencyNames) {
    const dependencyPath = join(wsPath, dependencyName);
    const link = await safeReadLink(dependencyPath);
    if (!link) continue;
    const pkg = await parsePackageFile(join(dependencyPath, "package.json"));
    if (pkg.publishConfig?.directory) {
      await unlink(dependencyPath);
      await symlink(
        join(link, pkg.publishConfig.directory),
        dependencyPath,
        "junction"
      );
    }
  }
}

/**
 * @link https://github.com/pnpm/pnpm/issues/3901
 */
async function patchWsModulesLinks() {
  const { name } = patchWsModulesLinks;
  const packageNames = await getPackageNames();
  for (const packageName of packageNames) {
    console.log(`[${name}] ${packageName}`);
    const packagePath = `${packagesPath}/${packageName}`;
    await patch(packagePath);
  }
}

export default patchWsModulesLinks;
