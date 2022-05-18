import getParentExpr from "../utils/getParentExpr";
import { Identifier, ts } from "ts-morph";

export default function replaceReactReactElement(node: Identifier) {
  const expr = getParentExpr(node);
  const typeRef = expr.getParentIfKind(ts.SyntaxKind.TypeReference);
  const typeRefChildren = typeRef?.forEachChildAsArray() || [];
  if (typeRef && typeRefChildren.length > 1) {
    const [, props] = typeRefChildren;
    const propsText = props?.getText();
    if (propsText === "any") {
      typeRef.replaceWithText("ST.ElementType");
      node.getSourceFile().addImportDeclaration({
        moduleSpecifier: "@suid/types",
        namespaceImport: "ST",
      });
    } else {
      typeRef.replaceWithText(`Component<${propsText}>`);
      node.getSourceFile().addImportDeclaration({
        moduleSpecifier: "solid-js",
        namedImports: ["Component"],
      });
    }
  } else {
    expr.replaceWithText("ST.ElementType");
    node.getSourceFile().addImportDeclaration({
      moduleSpecifier: "@suid/types",
      namespaceImport: "ST",
    });
  }
}
