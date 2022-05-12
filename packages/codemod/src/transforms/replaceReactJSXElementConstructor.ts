import renameExpr from "./renameExpr";
import { Identifier } from "ts-morph";

export default function replaceReactJSXElementConstructor(node: Identifier) {
  renameExpr(node, "Component", {
    moduleSpecifier: "solid-js",
    namedImport: "Component",
  });
}
