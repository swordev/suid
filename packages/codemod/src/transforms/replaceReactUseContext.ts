import renameParentExpr from "./renameParentExpr";
import { Identifier } from "ts-morph";

export default function replaceReactUseContext(node: Identifier) {
  renameParentExpr(node, "useContext", {
    moduleSpecifier: "solid-js",
    namedImport: "useContext",
  });
}
