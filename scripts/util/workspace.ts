import { readdir } from "fs/promises";
import { join } from "path";

export const rootPath = join(__dirname, "../..");
export const packagesPath = join(rootPath, "packages");

export async function getPackageNames() {
  return await readdir(packagesPath);
}
