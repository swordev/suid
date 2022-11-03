import renameParentExpr from "./renameParentExpr";
import { Identifier } from "ts-morph";

export default function replaceReactContext(node: Identifier) {
  renameParentExpr(node, "Context", {
    moduleSpecifier: "solid-js",
    namedImport: "Context",
  });
}
