import { createProgressLog } from "./../util/cli";
import { readOptions } from "./../util/prettier";
import { packagesPath } from "./../util/workspace";
import { readdir, writeFile } from "fs/promises";
import { join } from "path";
import { format } from "prettier";

const outPath = join(packagesPath, "icons-material/lib");

async function genIconsMaterialTyping() {
  const { name } = genIconsMaterialTyping;

  const fileNames = (await readdir(outPath)).filter((v) => v.endsWith(".jsx"));
  const progressLog = createProgressLog({
    name,
    total: fileNames.length,
  });
  const contents = format(`export { default } from "@suid/material/SvgIcon"`, {
    ...(await readOptions()),
    parser: "typescript",
  });
  for (const fileName of fileNames) {
    progressLog.add();
    const componentTypePath = join(outPath, fileName.replace(/.jsx$/, ".d.ts"));
    await writeFile(componentTypePath, contents);
  }
  progressLog.stop();
}

export default genIconsMaterialTyping;
