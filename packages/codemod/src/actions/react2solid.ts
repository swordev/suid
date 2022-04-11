import transformReactSource from "../transforms/transformReactSource";
import applyTransforms from "../utils/applyTransforms";
import safeStat from "../utils/safeStat";
import fg from "fast-glob";
import { mkdir, readFile, writeFile } from "fs/promises";
import micromatch from "micromatch";
import { dirname, normalize, relative, resolve } from "path";

export default async function react2solid(options: {
  in: string;
  out: string;
  filters: string[];
}) {
  const inputPath = normalize(options.in);
  const inPattern = inputPath.replaceAll("\\", "/") + "/**/*";
  const stream = fg.stream(inPattern, { dot: true });
  const outPath = resolve(options.out ?? `${inputPath}-out`);

  if (await safeStat(outPath))
    throw new Error(`Output path already exists: ${outPath}`);

  let files = 0;
  for await (const entry of stream) {
    const path = normalize(entry.toString());
    const validExt = /\.[jt]sx?$/.test(path);
    if (!validExt) continue;

    const rpath = relative(inputPath, path);
    const matches =
      !options.filters.length || !!micromatch([rpath], options.filters).length;

    if (!matches) continue;

    console.log(rpath);
    files++;

    const outFilePath = `${outPath}/${rpath}`;
    const contents = (await readFile(path)).toString();
    const newContents = applyTransforms(contents, [transformReactSource]);
    const outFileDir = dirname(outFilePath);

    await mkdir(outFileDir, { recursive: true });
    await writeFile(outFilePath, newContents);
  }
  if (!files) throw new Error(`No files found`);
}
