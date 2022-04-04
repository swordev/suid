import { SourceFile } from "ts-morph";

export default function removeReactImports(source: SourceFile) {
  const allImports = source.getImportDeclarations();
  for (const node of allImports) {
    if (node.getModuleSpecifier().getLiteralText() === "react") node.remove();
  }
}
