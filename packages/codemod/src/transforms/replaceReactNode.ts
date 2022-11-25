import renameExpr from "./renameExpr.js";
import { Identifier } from "ts-morph";

export default function replaceReactNode(node: Identifier) {
  renameExpr(node, "JSXElement", {
    moduleSpecifier: "solid-js",
    namedImport: "JSXElement",
  });
}
