import { getDirname } from "./fs";
import { readdir } from "fs/promises";
import { join } from "path";

const __dirname = getDirname(import.meta.url);

export const rootPath = join(__dirname, "../..");
export const packagesPath = join(rootPath, "packages");

export async function getPackageNames() {
  return await readdir(packagesPath);
}
