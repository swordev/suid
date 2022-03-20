import { readdir, rm } from "fs/promises";
import { join } from "path";
import { safeStat } from "~/util/fs";
import { getPackageNames, packagesPath } from "~/util/workspace";

async function clean(options: { packageNames?: string[] }) {
  const packageNames = await getPackageNames();

  for (const name of packageNames) {
    if (options.packageNames?.length && !options.packageNames.includes(name))
      continue;

    console.log(`[${clean.name}] ${name}`);

    const pkgPath = join(packagesPath, name);
    const tsbuildPath = join(pkgPath, "tsconfig.tsbuildinfo");
    const libPath = join(pkgPath, "lib");
    const distPath = join(pkgPath, "dist");

    if (await safeStat(tsbuildPath)) await rm(tsbuildPath);

    if (!(await safeStat(libPath))) continue;

    if (name === "icons-material") {
      if (!(await safeStat(libPath))) continue;
      const files = await readdir(libPath);
      for (const file of files) {
        if (file.endsWith(".jsx")) continue;
        await rm(join(libPath, file), {
          recursive: true,
        });
      }
    } else if (name === "site") {
      if (await safeStat(distPath))
        await rm(distPath, {
          recursive: true,
        });
    } else {
      if (await safeStat(libPath))
        await rm(libPath, {
          recursive: true,
        });
    }
  }
}

export default clean;
