import getParentExpr from "../utils/getParentExpr.js";
import renameExpr from "./renameExpr.js";
import { Identifier, ts } from "ts-morph";

export default function replaceReactElementType(node: Identifier) {
  const typeRef = getParentExpr(node).getParentIfKind(
    ts.SyntaxKind.TypeReference
  );
  if (typeRef && typeRef.getChildren().length > 1) {
    renameExpr(node, "Component", {
      moduleSpecifier: "solid-js",
      namedImport: "Component",
    });
  } else {
    renameExpr(node, "ElementType", {
      moduleSpecifier: "@suid/types",
      namespaceImport: "ST",
    });
  }
}
