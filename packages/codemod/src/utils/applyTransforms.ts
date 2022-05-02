import getReplacePatterns from "./getReplacePatterns";
import { Project, SourceFile, ts } from "ts-morph";

type Transform = (sourceFile: SourceFile) => any;

export default function applyTransforms(
  input: string,
  transforms: Transform[]
): string;
export default function applyTransforms(
  input: Record<string, string>,
  transforms: Transform[]
): Record<string, string>;
export default function applyTransforms(
  input: string | Record<string, string>,
  transforms: Transform[]
) {
  const project = new Project({
    useInMemoryFileSystem: true,
    compilerOptions: {
      strict: true,
      target: ts.ScriptTarget.ESNext,
      module: ts.ModuleKind.ESNext,
      moduleResolution: ts.ModuleResolutionKind.NodeNext,
      forceConsistentCasingInFileNames: true,
      allowSyntheticDefaultImports: true,
      esModuleInterop: true,
      jsx: ts.JsxEmit.Preserve,
    },
  });

  const fileMap = (
    typeof input === "string" ? { "file.tsx": input } : input
  ) as Record<string, string>;

  const sourceFiles: Record<string, SourceFile> = {};
  for (const path in fileMap) {
    sourceFiles[path] = project.createSourceFile(path, fileMap[path]);
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
