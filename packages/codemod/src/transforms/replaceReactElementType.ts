import renameParentExpr from "./renameParentExpr";
import renameNode from "./renameNode";
import { Identifier, ts } from "ts-morph";

export default function replaceReactElementType(node: Identifier) {
  const typeRef = node.getFirstAncestorByKindOrThrow(
    ts.SyntaxKind.TypeReference
  );
  const typeName = typeRef.getTypeName()
  const rename = (
    // type a = React.ElementType
    typeName.isKind(ts.SyntaxKind.QualifiedName) ? renameParentExpr :
    // type a = ElementType
    typeName.isKind(ts.SyntaxKind.Identifier) ? renameNode :
    // error
    null
  )
  if (rename == null) return
  if (typeRef.getTypeArguments().length > 0) {
    rename(node, "Component", {
      moduleSpecifier: "solid-js",
      namedImport: "Component",
    });
  } else {
    rename(node, "ElementType", {
      moduleSpecifier: "@suid/types",
      namespaceImport: "ST",
    });
  }
}
