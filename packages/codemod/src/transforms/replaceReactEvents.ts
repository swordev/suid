import renameParentExpr from "./renameParentExpr";
import { Identifier } from "ts-morph";

export default function replaceReactEvents(node: Identifier) {
  const name = node.getText();
  if (name === "ChangeEvent") {
    renameParentExpr(node, name, {
      moduleSpecifier: "@suid/types",
      namespaceImport: "ST",
    });
  } else {
    renameParentExpr(node, name);
  }
}
