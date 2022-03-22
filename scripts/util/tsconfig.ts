import { readFile, writeFile } from "fs/promises";
import { parse } from "json5";
import { format } from "prettier";
import { options } from "~/util/prettier";

type CompilerOptions = { paths: Record<string, string[]> };
type Reference = { path: string };
export type TsConfig = {
  references: Reference[];
  compilerOptions: CompilerOptions;
  include?: string[];
  exclude?: string[];
};

export async function parseTsConfigFile(path: string) {
  const contents = await readFile(path);
  return parse(contents.toString()) as TsConfig;
}

export async function writeTsConfigFile(path: string, config: TsConfig) {
  await writeFile(
    path,
    format(JSON.stringify(config), {
      ...options,
      parser: "json",
    })
  );
}
