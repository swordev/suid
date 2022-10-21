import { Package, parsePackageFile, writePackageFile } from "../util/package";
import { getPackageNames, packagesPath, rootPath } from "../util/workspace";
import { spawnSync } from "child_process";
import { copyFile, mkdir, rm } from "fs/promises";
import { join } from "path";

async function tryRm(path: string) {
  try {
    await rm(path);
    // eslint-disable-next-line no-empty
  } catch (error) {}
}

async function pack(options: { patch?: string }) {
  const { name } = pack;
  const packageNames = await getPackageNames();
  const registryDir = join(rootPath, ".registry");
  const registryPath = join(registryDir, Date.now().toString());

  await mkdir(registryPath, { recursive: true });

  const data: Record<
    string,
    {
      pkg: { path: string; manifest: Package };
      distPkg: { path: string; manifest: Package };
      tarball: string;
    }
  > = {};

  for (const packageName of packageNames) {
    const dir = join(packagesPath, packageName);
    const pkgPath = join(dir, "package.json");
    const pkg = await parsePackageFile(pkgPath);
    const packName = pkg.name.replace("@", "").replace("/", "-");
    const packPath = join(registryPath, `${packName}-${pkg.version}.tgz`);
    const distPkgPath = join(
      dir,
      pkg.publishConfig?.["directory"] ?? ".",
      "package.json"
    );
    const distPkg = await parsePackageFile(distPkgPath);

    data[packageName] = {
      pkg: { manifest: pkg, path: pkgPath },
      distPkg: { manifest: distPkg, path: distPkgPath },
      tarball: `file://${packPath}`,
    };
  }

  const overwriteDeps = false;

  for (const packageName of packageNames) {
    console.log(`[${name}] ${packageName}`);
    const { distPkg } = data[packageName];
    const cwd = join(rootPath, "packages", packageName);

    try {
      if (overwriteDeps) {
        await tryRm(`${distPkg.path}.bk`);
        await copyFile(distPkg.path, `${distPkg.path}.bk`);
        const deps = distPkg.manifest.dependencies || {};
        for (const dep in deps) {
          if (dep in data) deps[dep] = data[dep].tarball;
        }
        await writePackageFile(distPkg.path, distPkg.manifest);
      }
      const result = spawnSync(
        "pnpm",
        ["pack", "--pack-destination", registryPath],
        {
          cwd,
          stdio: "inherit",
          shell: true,
        }
      );
      if (result.error) throw result.error;
    } finally {
      if (overwriteDeps) {
        await tryRm(distPkg.path);
        await copyFile(`${distPkg.path}.bk`, `${distPkg.path}`);
      }
    }
  }

  const newPkg = {
    pnpm: {
      overrides: Object.entries(data).reduce((result, [, item]) => {
        result[item.pkg.manifest.name] = item.tarball;
        return result;
      }, {} as Record<string, string>),
    },
  };

  await writePackageFile(join(registryPath, "package.json"), newPkg as any);

  console.info();

  if (options.patch) {
    console.info(`Patched '${options.patch}' with:\n`);
    const pkg = await parsePackageFile(options.patch);
    pkg.pnpm = {
      ...pkg.pnpm,
      overrides: {
        ...pkg.pnpm?.overrides,
        ...newPkg.pnpm.overrides,
      },
    };
    await writePackageFile(options.patch, pkg);
  }
  console.info(JSON.stringify(newPkg, null, 2));
}

export default pack;
