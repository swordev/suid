import { format as _format } from "prettier";

export default function format(code: string) {
  return _format(code, {
    filepath: "file.tsx",
  })
    .split(/[\n]+/)
    .join("\n");
}
