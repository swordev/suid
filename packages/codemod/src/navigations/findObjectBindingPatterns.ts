import { SourceFile, ts } from "ts-morph";

export default function findObjectBindingPatterns(source: SourceFile) {
  return source.getDescendantsOfKind(ts.SyntaxKind.ObjectBindingPattern);
}
