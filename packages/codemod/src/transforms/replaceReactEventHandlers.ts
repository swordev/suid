import renameParentExpr from "./renameParentExpr.js";
import { Identifier } from "ts-morph";

export default function replaceReactEventHandlers(node: Identifier) {
  const name = node.getText();
  renameParentExpr(node, name, {
    moduleSpecifier: "@suid/types",
    namespaceImport: "ST",
  });
}
