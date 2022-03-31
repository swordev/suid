import { readlink, symlink, unlink } from "fs/promises";
import { safeStat } from "~/util/fs";
import { getPackageNames, packagesPath } from "~/util/workspace";

async function patchLibModulesLink(sourceDir: string, targetPath: string) {
  const modulesFolder = "node_modules";
  const sourceModulesPath = `${sourceDir}/${modulesFolder}`;
  const targetModulesPath = `${targetPath}/${modulesFolder}`;

  if (await safeStat(sourceModulesPath)) {
    try {
      await symlink(sourceModulesPath, targetModulesPath, "junction");
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code !== "EEXIST") throw error;
    }
  } else {
    let existsLink = false;
    try {
      existsLink = !!(await readlink(targetModulesPath));
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code !== "ENOENT") throw error;
    }
    if (existsLink) await unlink(targetModulesPath);
  }
}

async function patchLibModulesLinks() {
  const { name } = patchLibModulesLinks;
  const packageNames = await getPackageNames();
  for (const packageName of packageNames) {
    console.log(`[${name}] ${packageName}`);
    const pkgDir = `${packagesPath}/${packageName}`;
    const targetPath = `${pkgDir}/${packageName === "site" ? "dist" : "lib"}/`;
    await patchLibModulesLink(pkgDir, targetPath);
  }
}

export default patchLibModulesLinks;
