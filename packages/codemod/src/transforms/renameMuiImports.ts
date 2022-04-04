import { SourceFile } from "ts-morph";

export default function renameMuiImports(source: SourceFile) {
  for (const node of source.getImportDeclarations()) {
    const module = node.getModuleSpecifier();
    if (module.getLiteralText().startsWith("@mui/")) {
      module.setLiteralValue(module.getLiteralText().replace(/^@mui/, "@suid"));
    }
  }
}
