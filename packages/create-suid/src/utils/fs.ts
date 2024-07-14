import { mkdir, readdir, stat, writeFile } from "fs/promises";
import { dirname, join } from "path";

export async function safeStat(path: string) {
  try {
    return await stat(path);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return;
  }
}

export async function isEmptyDir(path: string, exclude?: string[]) {
  const info = await safeStat(path);
  if (!info) return true;
  if (info.isFile()) return false;
  const files = await readdir(path);
  for (const file of files) {
    if (exclude && exclude.includes(file)) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

export async function createFiles(
  files: Record<string, string>,
  baseDir = process.cwd()
) {
  for (const name in files) {
    const path = join(baseDir, name);
    const dir = dirname(path);
    await mkdir(dir, { recursive: true });
    await writeFile(path, files[name]);
  }
}
