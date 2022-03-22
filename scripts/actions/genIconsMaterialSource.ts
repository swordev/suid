import { readdir, readFile, writeFile } from "fs/promises";
import parse from "node-html-parser";
import { join } from "path";
import { format } from "prettier";
import { createProgressLog } from "~/util/cli";
import { normalizeFileName } from "~/util/icons-material";
import { muiSourcePath } from "~/util/material-ui";
import { options } from "~/util/prettier";
import { packagesPath } from "~/util/workspace";

const outPath = join(packagesPath, "icons-material/lib");

function renderComponentContents(name: string, children: string[]) {
  return format(
    `
      import $ from "./utils/createSvgIcon";
      export default $(
        () => ${
          children.length > 1 ? `<>${children.join("\n")}</>` : children[0]
        },
        "${name}"
      );
    `,
    {
      ...options,
      parser: "typescript",
    }
  );
}

async function genIconsMaterialSource(options: { version: string }) {
  const { name } = genIconsMaterialSource;
  const sourcePath = muiSourcePath(options.version);
  const svgPath = join(
    sourcePath,
    "packages/mui-icons-material/material-icons"
  );
  const fileNames = await readdir(svgPath);
  const progressLog = createProgressLog({
    name,
    total: fileNames.length,
  });

  for (const fileName of fileNames) {
    progressLog.add();
    const [name] = normalizeFileName(fileName).split(".");
    const filePath = join(svgPath, fileName);
    const fileContents = (await readFile(filePath)).toString();
    const $svg = parse(fileContents);
    const svgChildren = $svg.childNodes[0].childNodes
      .map((v) =>
        v.toString().replace(/><\/(path|rect|polygon|circle)>/g, " />")
      )
      .filter(
        (v) =>
          !(
            v === '<g><rect fill="none" height="24" width="24" /></g>' ||
            v === '<path d="M0 0h24v24H0V0z" fill="none" />'
          )
      );
    const componentPath = join(outPath, `${name}.jsx`);
    const componentSource = renderComponentContents(name, svgChildren);
    await writeFile(componentPath, componentSource);
  }
  progressLog.stop();
}

export default genIconsMaterialSource;
