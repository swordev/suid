import { writeIfDifferent } from "../util/fs";
import { createProgressLog, ProgressLog } from "./../util/cli";
import { readOptions } from "./../util/prettier";
import { packagesPath } from "./../util/workspace";
import { writeIndexFile } from "./genIconsMaterialSource";
import { readdir, writeFile } from "fs/promises";
import pLimit from "p-limit";
import { join } from "path";
import { format } from "prettier";

const outPath = join(packagesPath, "icons-material/lib");

async function writeIndexTypingFile(
  iconNames: string[],
  progressLog: ProgressLog
) {
  const contents = [
    `import SvgIcon from "@suid/material/SvgIcon";`,
    `type C = typeof SvgIcon;`,
    ...iconNames.map((v) => `export const ${v}: C;`),
  ].join("\n");
  progressLog.add();
  await writeFile(join(outPath, "index.d.ts"), contents);
}

async function writeComponentTypingFiles(
  iconNames: string[],
  progressLog: ProgressLog
) {
  const contents = await format(
    `export { default } from "@suid/material/SvgIcon"`,
    {
      ...(await readOptions()),
      parser: "typescript",
    }
  );

  const limit = pLimit(10);
  const paths = iconNames.map((v) => join(outPath, `${v}.d.ts`));

  return paths.map((path) =>
    limit(() => {
      progressLog?.add();
      return writeIfDifferent(path, contents);
    })
  );
}
async function genIconsMaterialTyping() {
  const { name } = genIconsMaterialTyping;

  const iconNames = (await readdir(outPath))
    .filter((v) => v !== "index.jsx" && v.endsWith(".jsx"))
    .map((v) => v.replace(/.jsx$/, ""));

  const progressLog = createProgressLog({
    name,
    total: iconNames.length + 1,
  });

  await Promise.all([
    ...(await writeComponentTypingFiles(iconNames, progressLog)),
    writeIndexTypingFile(iconNames, progressLog),
    writeIndexFile(iconNames),
  ]);
  progressLog.stop();
}

export default genIconsMaterialTyping;
