import renameExpr from "./renameExpr.js";
import { Identifier } from "ts-morph";

export default function replaceReactEvents(node: Identifier) {
  const name = node.getText();
  if (name === "ChangeEvent") {
    renameExpr(node, name, {
      moduleSpecifier: "@suid/types",
      namespaceImport: "ST",
    });
  } else {
    renameExpr(node, name);
  }
}
