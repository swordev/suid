import { format as _format } from "prettier";
import parserTypeScript from "prettier/parser-typescript.js";
import estree from "prettier/plugins/estree.js";

export default async function format(code: string) {
  return (
    await _format(code, {
      filepath: "file.tsx",
      parser: "typescript",
      plugins: [parserTypeScript, estree],
    })
  )
    .split(/[\n]+/)
    .join("\n");
}
