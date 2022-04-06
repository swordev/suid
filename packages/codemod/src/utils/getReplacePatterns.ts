import { SourceFile } from "ts-morph";

export type NewSourceFile = SourceFile & {
  __replacePatterns?: Record<string, string>;
};

export default function getReplacePatterns(source: SourceFile) {
  const object = source as NewSourceFile;
  return object.__replacePatterns;
}
