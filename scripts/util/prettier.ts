import { dirname } from "path";
import { Options } from "prettier";

const __dirname = new URL(dirname(import.meta.url)).pathname;

export const readOptions: () => Promise<Options> = () =>
  import(`${__dirname}/../../.prettierrc`);
