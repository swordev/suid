import { copyFile, mkdir } from "fs/promises";
import { safeStat } from "~/util/fs";
import { parsePackageFile, writePackageFile } from "~/util/package";
import { getPackageNames, packagesPath, rootPath } from "~/util/workspace";

const resPath = `${__dirname}/../res`;

async function genRes() {
  const { name } = genRes;
  const packageNames = ["root", ...(await getPackageNames())];
  const commonPkg = await parsePackageFile(`${resPath}//common-package.json`);
  const commonLicensePath = `${resPath}/common-license`;
  const muiLicensePath = `${resPath}/mui-license`;

  for (const packageName of packageNames) {
    console.log(`[${name}] ${packageName}`);
    const pkgDir =
      packageName === "root" ? rootPath : `${packagesPath}/${packageName}`;
    const pkgPath = `${pkgDir}/package.json`;
    const pkg = await parsePackageFile(pkgPath);
    let targetPath: string;
    if (packageName === "root") {
      targetPath = pkgDir;
    } else if (packageName === "site") {
      targetPath = `${pkgDir}/dist/`;
    } else {
      targetPath = `${pkgDir}/lib/`;
    }
    const outPkgPath = `${targetPath}/package.json`;
    const newPkg: typeof pkg = {
      ...commonPkg,
      ...pkg,
      repository: {
        ...(packageName !== "root" && {
          directory: `packages/${packageName}`,
        }),
        ...(commonPkg.repository || {}),
        ...(pkg.repository || {}),
      },
      keywords: [
        ...(commonPkg?.keywords ?? []),
        ...(pkg.keywords ?? []),
      ].sort(),
    };

    delete newPkg.publishConfig;

    if (newPkg.private) delete newPkg.files;

    if (packageName !== "root") {
      delete newPkg.scripts;
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

      await copyFile(commonLicensePath, `${rootPath}/LICENSE`);
    }
    await writePackageFile(outPkgPath, newPkg);
  }
}

export default genRes;
