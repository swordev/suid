import { readFile } from "fs/promises";
import { dirname } from "path";
import { Options } from "prettier";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(dirname(import.meta.url));

export const readOptions: () => Promise<Options> = async () =>
  JSON.parse(
    (await readFile(`${__dirname}/../../.prettierrc.json`)).toString()
  );
