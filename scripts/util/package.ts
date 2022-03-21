import { readFile, writeFile } from "fs/promises";
import { format } from "prettier";

type Package = {
  scripts?: Record<string, string>;
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
  peerDependencies?: Record<string, string>;
  publishConfig?: Record<string, string>;
  keywords?: string[];
  repository?: {
    type?: string;
    url?: string;
    directory?: string;
  };
};

export async function parsePackageFile(path: string) {
  const contents = await readFile(path);
  return JSON.parse(contents.toString()) as Package;
}

export async function writePackageFile(path: string, config: Package) {
  await writeFile(
    path,
    format(JSON.stringify(config), {
      filepath: "package.json",
      parser: "json-stringify",
    })
  );
}
