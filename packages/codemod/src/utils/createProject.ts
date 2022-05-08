import { Project, ts } from "ts-morph";

export default function createProject() {
  return new Project({
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
}
