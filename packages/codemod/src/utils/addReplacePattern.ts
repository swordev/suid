import { NewSourceFile } from "./getReplacePatterns";
import { SourceFile } from "ts-morph";

export default function addReplacePattern(
  source: SourceFile,
  searchValue: string,
  replaceValue: string
) {
  const object = source as NewSourceFile;
  if (!object.__replacePatterns) object.__replacePatterns = {};
  object.__replacePatterns[searchValue] = replaceValue;
}
