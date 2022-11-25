import renameExpr from "./renameExpr.js";
import { Identifier } from "ts-morph";

export default function replaceReactCreateContext(node: Identifier) {
  renameExpr(node, "createContext", {
    moduleSpecifier: "solid-js",
    namedImport: "createContext",
  });
}
