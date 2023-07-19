import { mkdir, readdir, stat, writeFile } from "fs/promises";
import { dirname, join as pathJoin } from "path";

export async function safeStat(path: string) {
  try {
    return await stat(path);
  } catch (error) {
    // Do nothing
  }
}

export async function isEmptyDir(path: string, exclude?: string[]) {
  const info = await safeStat(path);
  if (!info) {
    return true;
  }

  if (info.isFile()) {
    return false;
  }

  const files = await readdir(path);
  return files.every((file) => exclude?.includes(file));
}

export async function createFiles(
  files: Record<string, string>,
  baseDir = process.cwd()
) {
  await Promise.all(
    Object.entries(files).map(async ([name, content]) => {
      const path = pathJoin(baseDir, name);
      const dir = dirname(path);
      await mkdir(dir, { recursive: true });
      await writeFile(path, content);
    })
  );
}
