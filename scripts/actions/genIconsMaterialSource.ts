import { createProgressLog } from "./../util/cli.js";
import { normalizeFileName } from "./../util/icons-material.js";
import { muiSourcePath } from "./../util/material-ui.js";
import { readOptions } from "./../util/prettier.js";
import { packagesPath } from "./../util/workspace.js";
import { readdir, readFile, writeFile } from "fs/promises";
import * as htmlParser from "node-html-parser";
import { join } from "path";
import { format } from "prettier";

const outPath = join(packagesPath, "icons-material/lib");

export async function writeIndexFile(iconNames: string[]) {
  const contents = iconNames
    .map((v) => `export { default as ${v} } from "./${v}";`)
    .join("\n");
  await writeFile(join(outPath, "index.jsx"), contents);
}

async function renderComponentContents(name: string, children: string[]) {
  return format(
    `
      import $ from "./utils/createSvgIcon";\n
      export default $(
        () => ${
          children.length > 1 ? `<>${children.join("\n")}</>` : children[0]
        },
        "${name}"
      );
    `,
    {
      ...(await readOptions()),
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

  const iconNames = new Set<string>();

  for (const fileName of fileNames) {
    if (fileName === "index.jsx") continue;
    progressLog.add();
    const [name] = normalizeFileName(fileName).split(".");
    if (iconNames.has(name)) throw new Error(`Duplicated icon name: ${name}`);
    iconNames.add(name);
    const filePath = join(svgPath, fileName);
    const fileContents = (await readFile(filePath)).toString();
    const $svg = htmlParser.parse(fileContents);
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
    const componentSource = await renderComponentContents(name, svgChildren);
    await writeFile(componentPath, componentSource);
  }
  await writeIndexFile(Array.from(iconNames));
  progressLog.stop();
}

export default genIconsMaterialSource;
