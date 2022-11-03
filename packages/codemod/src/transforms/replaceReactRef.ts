import renameParentExpr from "./renameParentExpr";
import { Identifier } from "ts-morph";

export default function replaceReactRef(node: Identifier) {
  renameParentExpr(node, "Ref", {
    moduleSpecifier: "@suid/types",
    namespaceImport: "ST",
  });
}
