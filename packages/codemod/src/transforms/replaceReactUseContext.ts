import renameExpr from "./renameExpr.js";
import { Identifier } from "ts-morph";

export default function replaceReactUseContext(node: Identifier) {
  renameExpr(node, "useContext", {
    moduleSpecifier: "solid-js",
    namedImport: "useContext",
  });
}
