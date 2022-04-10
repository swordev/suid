import renameExpr from "./renameExpr";
import { Identifier } from "ts-morph";

export default function replaceReactElementType(node: Identifier) {
  renameExpr(node, "ElementType", {
    moduleSpecifier: "@suid/types",
    namespaceImport: "ST",
  });
}
