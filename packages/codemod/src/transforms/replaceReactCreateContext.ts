import renameExpr from "./renameExpr";
import { Identifier } from "ts-morph";

export default function replaceReactCreateContext(node: Identifier) {
  renameExpr(node, "createContext", {
    moduleSpecifier: "solid-js",
    namedImport: "createContext",
  });
}
