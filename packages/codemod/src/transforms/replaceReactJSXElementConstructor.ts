import renameParentExpr from "./renameParentExpr";
import { Identifier } from "ts-morph";

export default function replaceReactJSXElementConstructor(node: Identifier) {
  renameParentExpr(node, "Component", {
    moduleSpecifier: "solid-js",
    namedImport: "Component",
  });
}
