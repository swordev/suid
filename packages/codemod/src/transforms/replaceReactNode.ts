import renameExpr from "./renameExpr";
import { Identifier } from "ts-morph";

export default function replaceReactNode(node: Identifier) {
  renameExpr(node, "JSXElement", {
    moduleSpecifier: "solid-js",
    namespaceNamedImport: "JSX",
  });
}
