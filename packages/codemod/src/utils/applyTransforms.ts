import createProject from "./createProject.js";
import getReplacePatterns from "./getReplacePatterns.js";
import { Project, SourceFile } from "ts-morph";

type Transform = (sourceFile: SourceFile) => any;

export default function applyTransforms(
  input: string,
  transforms: Transform[],
  project?: Project
): string;
export default function applyTransforms(
  input: Record<string, string>,
  transforms: Transform[],
  project?: Project
): Record<string, string>;
export default function applyTransforms(
  input: string | Record<string, string>,
  transforms: Transform[],
  project?: Project
) {
  if (!project) project = createProject();
  const fileMap = (
    typeof input === "string" ? { "file.tsx": input } : input
  ) as Record<string, string>;

  const sourceFiles: Record<string, SourceFile> = {};
  for (const path in fileMap) {
    sourceFiles[path] = project.createSourceFile(path, fileMap[path], {
      overwrite: true,
    });
  }

  const result: Record<string, string> = {};
  for (const path in sourceFiles) {
    const sourceFile = sourceFiles[path];
    for (const transform of transforms) transform(sourceFile);
    const replaceTextPatterns = getReplacePatterns(sourceFile) || {};
    sourceFile.formatText();
    let sourceText = sourceFile.getText();
    for (const [pattern, text] of Object.entries(replaceTextPatterns)) {
      sourceText = sourceText.replaceAll(pattern, text);
    }
    result[path] = sourceText;
  }

  if (typeof input === "string") return Object.values(result)[0];

  return result;
}
