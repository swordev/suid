import renameParentExpr from "./renameParentExpr";
import { Identifier } from "ts-morph";

export default function replaceReactNode(node: Identifier) {
  renameParentExpr(node, "JSXElement", {
    moduleSpecifier: "solid-js",
    namedImport: "JSXElement",
  });
}
