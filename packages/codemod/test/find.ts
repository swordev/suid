import createProject from "../src/utils/createProject.js";
import { Identifier, ts } from "ts-morph";

export default function find<T>(code: string, cb: (source: Identifier) => T) {
  const project = createProject();
  const source = project.createSourceFile("file.tsx", code);
  const placeholder = source
    .getDescendantsOfKind(ts.SyntaxKind.Identifier)
    .find((node) => node.getText() === "$");
  if (!placeholder) throw new Error(`Placeholder not found`);
  return cb(placeholder);
}
