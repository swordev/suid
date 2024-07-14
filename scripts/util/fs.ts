import { readFile, readlink, stat, writeFile } from "fs/promises";
import * as json5 from "json5";
import { fileURLToPath } from "url";

export async function parseJSONFile<T = any>(path: string) {
  const contents = await readFile(path);
  return json5.parse(contents.toString()) as T;
}

export async function safeStat(path: string) {
  try {
    return await stat(path);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
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

export async function tryRead(path: string): Promise<Buffer | undefined> {
  try {
    return await readFile(path);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== "ENOENT") throw error;
  }
}

export async function writeIfDifferent(path: string, content: string) {
  const current = await tryRead(path);
  if (current?.toString() !== content) await writeFile(path, content);
}

export function getDirname(url: string) {
  return fileURLToPath(new URL(".", url));
}
