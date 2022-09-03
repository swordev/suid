import { createProgressLog } from "./../util/cli";
import { readOptions } from "./../util/prettier";
import { packagesPath } from "./../util/workspace";
import { readdir, writeFile } from "fs/promises";
import pLimit from "p-limit";
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

  const limit = pLimit(10);
  const paths = fileNames.map((f) =>
    join(outPath, f.replace(/.jsx$/, ".d.ts"))
  );

  const promises = paths.map((path) =>
    limit(() => {
      progressLog.add();
      return writeFile(path, contents);
    })
  );

  await Promise.all(promises);
  progressLog.stop();
}

export default genIconsMaterialTyping;
