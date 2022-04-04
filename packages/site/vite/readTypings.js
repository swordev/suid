import fg from "fast-glob";
import { readFileSync } from "fs";
import { relative } from "path/posix";

export default function readTypings(path) {
  path = path.replace(/\\/g, "/");
  return fg
    .sync([`${path}/**/*.d.ts`, `${path}/**/package.json`])
    .reduce((result, v) => {
      const rpath = relative(path, v);
      if (rpath.includes("node_modules")) return result;
      const contents = readFileSync(v).toString();
      result[rpath] = contents;
      return result;
    }, {});
}
