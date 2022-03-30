import { copyFile, mkdir, readlink, symlink, unlink } from "fs/promises";
import { safeStat } from "~/util/fs";
import { parsePackageFile, writePackageFile } from "~/util/package";
import { getPackageNames, packagesPath } from "~/util/workspace";

const resPath = `${__dirname}/../res`;

async function syncModulesDir(sourceDir: string, targetPath: string) {
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

async function genRes() {
  const { name } = genRes;
  const packageNames = await getPackageNames();
  const commonPkg = await parsePackageFile(`${resPath}//common-package.json`);
  const commonLicensePath = `${resPath}/common-license`;
  const muiLicensePath = `${resPath}/mui-license`;

  for (const packageName of packageNames) {
    console.log(`[${name}] ${packageName}`);
    const pkgDir = `${packagesPath}/${packageName}`;
    const pkg = await parsePackageFile(`${pkgDir}/package.json`);
    const targetPath = `${pkgDir}/${packageName === "site" ? "dist" : "lib"}/`;
    const outPkgPath = `${targetPath}/package.json`;
    const newPkg: typeof pkg = {
      ...commonPkg,
      ...pkg,
      repository: {
        directory: `packages/${packageName}`,
        ...(commonPkg.repository || {}),
        ...(pkg.repository || {}),
      },
      keywords: [...(commonPkg?.keywords ?? []), ...(pkg.keywords ?? [])]
        .sort()
        .filter(
          (v) =>
            !["best_ecosystem", "solid"].some((pattern) => v.includes(pattern))
        ),
    };

    delete newPkg.scripts;
    delete newPkg.keywords;
    delete newPkg.devDependencies;
    delete newPkg.peerDependencies;
    delete newPkg.publishConfig;
    if (newPkg.dependencies) delete newPkg.dependencies["solid-app-router"];

    const readmePath = `${pkgDir}/README.md`;
    const changelogPath = `${pkgDir}/CHANGELOG.md`;

    if (!(await safeStat(targetPath))) await mkdir(targetPath);

    if (await safeStat(readmePath)) {
      await copyFile(readmePath, `${targetPath}/README.md`);
    }
    if (await safeStat(changelogPath)) {
      await copyFile(changelogPath, `${targetPath}/CHANGELOG.md`);
    }
    if (
      ["base", "icons-material", "material", "system"].includes(packageName)
    ) {
      await copyFile(muiLicensePath, `${targetPath}/../LICENSE`);
      await copyFile(muiLicensePath, `${targetPath}/LICENSE`);
    } else {
      await copyFile(commonLicensePath, `${targetPath}/../LICENSE`);
      await copyFile(commonLicensePath, `${targetPath}/LICENSE`);
    }

    await writePackageFile(outPkgPath, newPkg);
    await syncModulesDir(pkgDir, targetPath);
  }
}

export default genRes;
