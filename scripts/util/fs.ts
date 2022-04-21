import { readFile, readlink, stat } from "fs/promises";
import { parse } from "json5";

export async function parseJSONFile<T = any>(path: string) {
  const contents = await readFile(path);
  return parse(contents.toString()) as T;
}

export async function safeStat(path: string) {
  try {
    return await stat(path);
  } catch (error) {
    return;
  }
}

export async function safeReadLink(path: string) {
  try {
    return await readlink(path);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== "ENOENT") throw error;
  }
}
