import renameParentExpr from "./renameParentExpr.js";
import { Identifier } from "ts-morph";

export default function replaceReactCreateContext(node: Identifier) {
  renameParentExpr(node, "createContext", {
    moduleSpecifier: "solid-js",
    namedImport: "createContext",
  });
}
