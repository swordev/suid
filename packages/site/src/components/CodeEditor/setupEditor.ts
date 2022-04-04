import { languages, Environment, editor, Uri } from "monaco-editor";
import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";

export default function setupEditor() {
  const self: { MonacoEnvironment: Environment } = globalThis as any;

  if (self.MonacoEnvironment) return;

  self.MonacoEnvironment = {
    getWorker(_, label) {
      if (label === "typescript" || label === "javascript") {
        return new tsWorker();
      }
      return new editorWorker();
    },
  };

  languages.typescript.typescriptDefaults.setCompilerOptions({
    strict: true,
    target: languages.typescript.ScriptTarget.ESNext,
    module: languages.typescript.ModuleKind.ESNext,
    moduleResolution: languages.typescript.ModuleResolutionKind.NodeJs,
    forceConsistentCasingInFileNames: true,
    allowSyntheticDefaultImports: true,
    esModuleInterop: true,
    jsx: languages.typescript.JsxEmit.Preserve,
    jsxImportSource: "solid-js",
    allowNonTsExtensions: true,
  });

  for (const path in SOLID_TYPINGS) {
    editor.createModel(
      SOLID_TYPINGS[path],
      "typescript",
      Uri.parse(`file://root/node_modules/solid-js/${path}`)
    );
  }

  const createEmptyModuleModel = (name: string, fileName: string) =>
    editor.createModel(
      `declare module '${name}';`,
      "typescript",
      Uri.parse(`file://root/${fileName}`)
    );

  createEmptyModuleModel("@suid/*", "suid-globals.d.ts");
  createEmptyModuleModel("@mui/*", "mui-globals.d.ts");
  createEmptyModuleModel("react", "react-globals.d.ts");

  // https://github.com/microsoft/monaco-editor/issues/2295 (pending)
  /*for (const item of SUID_TYPINGS) {
        for (const path in item.typings) {
          monaco.editor.createModel(
            item.typings[path],
            "typescript",
            monaco.Uri.parse(
              `file://root/node_modules/@suid/${item.name}/${path}`
            )
          );
        }
      }*/
}
