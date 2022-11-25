import { format as _format } from "prettier";
import parserTypeScript from "prettier/parser-typescript.js";

export default function format(code: string) {
  return _format(code, {
    filepath: "file.tsx",
    plugins: [parserTypeScript],
  })
    .split(/[\n]+/)
    .join("\n");
}
