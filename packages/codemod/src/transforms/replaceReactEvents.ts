import renameParentExpr from "./renameParentExpr.js";
import { Identifier, ts } from "ts-morph";

export const nativeEvents = [
  "MouseEvent",
  "TouchEvent",
  "KeyboardEvent",
];

export default function replaceReactEvents(node: Identifier) {
  const name = node.getText();
  const typeRef = node.getFirstAncestorByKindOrThrow(
    ts.SyntaxKind.TypeReference
  );
  const args = typeRef.getTypeArguments()
  if (name === "ChangeEvent") {
    renameParentExpr(node, name, {
      moduleSpecifier: "@suid/types",
      namespaceImport: "ST",
    });
  }
  else if (
    nativeEvents.includes(name) &&
    args.length > 0
  ) {
    // React.MouseEvent<HTMLDivElement>
    // React.MouseEvent<HTMLDivElement, MouseEvent>
    typeRef.replaceWithText(`${name}On<${args[0].getText()}>`)

    /*
    // TODO? move to @types/suid
    // https://stackoverflow.com/a/60833178/10440128
    interface MouseEventOn<T extends EventTarget> extends MouseEvent {
      readonly target: T
    }
    */
    if (!node.getSourceFile().getInterfaces().find(iface => iface.getName() == `${name}On`)) {
      // note: the new interface is inserted at end of file
      node.getSourceFile().addInterface({
        name: `${name}On`,
        extends: [name],
        typeParameters: ["T extends EventTarget"]
      }).addProperty({
        name: "readonly target",
        type: "T",
      });
    }
  }
  else {
    renameParentExpr(node, name);
  }
}
