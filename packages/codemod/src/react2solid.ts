import transformReactSource from "./transforms/transformReactSource";
import getReplacePatterns from "./utils/getReplacePatterns";
import { Project, SourceFile, ts } from "ts-morph";

export default function react2solid(files: Record<string, string>) {
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

  const sourceFiles: Record<string, SourceFile> = {};
  for (const path in files) {
    sourceFiles[path] = project.createSourceFile(path, files[path]);
  }

  const result: Record<string, string> = {};
  for (const path in sourceFiles) {
    const sourceFile = sourceFiles[path];
    transformReactSource(sourceFiles[path]);
    const replaceTextPatterns = getReplacePatterns(sourceFile) || {};
    let sourceText = sourceFile.getText();
    for (const [pattern, text] of Object.entries(replaceTextPatterns)) {
      sourceText = sourceText.replaceAll(pattern, text);
    }
    result[path] = sourceText;
  }

  return result;
}
