import renameExpr from "./renameExpr.js";
import { Identifier } from "ts-morph";

export default function replaceReactEventHandlers(node: Identifier) {
  const name = node.getText();
  renameExpr(node, name, {
    moduleSpecifier: "@suid/types",
    namespaceImport: "ST",
  });
}
