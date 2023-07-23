import { format as _format } from "prettier";
import parserTypeScript from "prettier/parser-typescript.js";

export default async function format(code: string) {
  return (
    await _format(code, {
      filepath: "file.tsx",
      plugins: [parserTypeScript],
    })
  )
    .split(/[\n]+/)
    .join("\n");
}
