import transformSuidImports from "../transforms/transformSuidImports.js";
import applyTransforms from "../utils/applyTransforms.js";
import colorize from "../utils/colorize.js";
import fg from "fast-glob";
import { readFile, writeFile } from "fs/promises";
import micromatch from "micromatch";
import { normalize, relative } from "path";

export default async function suidImports(options: {
  cwd: string;
  filters: string[];
  write: boolean;
}) {
  const inputPath = normalize(options.cwd);
  const inPattern = inputPath.replaceAll("\\", "/") + "/**/*";
  const entries = fg.stream(inPattern, {
    dot: true,
    ignore: ["**/node_modules/**"],
  });

  let files = 0;
  for await (const entry of entries) {
    const path = normalize(entry.toString());
    const validExt = /\.[jt]sx?$/.test(path);
    if (!validExt) continue;

    const rpath = relative(inputPath, path);
    const matches =
      !options.filters.length || !!micromatch([rpath], options.filters).length;

    if (!matches) continue;

    console.log(`+ ${colorize(rpath)}`);
    files++;

    const contents = (await readFile(path)).toString();
    let imports = 0;
    const newContents = applyTransforms(contents, [
      async (source) => {
        return await transformSuidImports(source, {
          format: "named",
          onImport(module) {
            imports++;
            console.log(`# ${colorize(module, "yellow")} `);
          },
        });
      },
    ]);
    if (options.write && imports) await writeFile(path, newContents);
  }
  if (!files) throw new Error(`No files found`);
}
