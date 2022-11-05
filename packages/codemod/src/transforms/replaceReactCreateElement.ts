import renameParentExpr from "./renameParentExpr";
import { Identifier } from "ts-morph";

/**
 * @see https://github.com/solidjs/solid/tree/main/packages/solid/h
 */
export default function replaceReactCreateElement(node: Identifier) {
  renameParentExpr(node, "h", {
    // import h from "solid-js/h";
    moduleSpecifier: "solid-js/h",
    defaultImport: "h",
  });
}
