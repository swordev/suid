import { readOptions } from "./prettier";
import { readFile, writeFile } from "fs/promises";
import json5 from "json5";
import { format } from "prettier";

type CompilerOptions = {
  outDir?: string;
  rootDir?: string;
  paths?: Record<string, string[]>;
};
type Reference = { path: string };
export type TsConfig = {
  extends?: string;
  references?: Reference[];
  compilerOptions: CompilerOptions;
  include?: string[];
  exclude?: string[];
};

export async function parseTsConfigFile(path: string) {
  const contents = await readFile(path);
  return json5.parse(contents.toString()) as TsConfig;
}

export async function writeTsConfigFile(path: string, config: TsConfig) {
  await writeFile(
    path,
    format(JSON.stringify(config), {
      ...(await readOptions()),
      parser: "json",
    })
  );
}
