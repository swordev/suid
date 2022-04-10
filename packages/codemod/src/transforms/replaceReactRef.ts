import renameExpr from "./renameExpr";
import { Identifier } from "ts-morph";

export default function replaceReactRef(node: Identifier) {
  renameExpr(node, "Ref", {
    moduleSpecifier: "@suid/types",
    namespaceImport: "ST",
  });
}
