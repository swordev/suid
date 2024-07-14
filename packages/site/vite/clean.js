import { rmSync } from "fs";

const __dirname = import.meta.dirname;

rmSync(`${__dirname}/../dist`, {
  recursive: true,
});
