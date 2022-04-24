import renameExpr from "./renameExpr";
import { Identifier } from "ts-morph";

export default function replaceReactContext(node: Identifier) {
  renameExpr(node, "Context", {
    moduleSpecifier: "solid-js",
    namedImport: "Context",
  });
}
