import { SourceFile, ts } from "ts-morph";

export default function findJSXAttrs(source: SourceFile, names?: string[]) {
  const attrs = source.getDescendantsOfKind(ts.SyntaxKind.JsxAttribute);
  return names ? attrs.filter((attr) => names.includes(attr.getName())) : attrs;
}
