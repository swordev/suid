import hasAncestorType from "./hasAncestorType";
import { Identifier, Node } from "ts-morph";

export default function renameIdentifiers(
  node: Identifier,
  name: string,
  excludeSelf = true
) {
  for (const ref of node.findReferencesAsNodes()) {
    if (excludeSelf && node === ref) continue;
    if (hasAncestorType(ref)) continue;
    const parent = ref.getParent();
    if (Node.isShorthandPropertyAssignment(parent)) {
      parent.replaceWithText(`${node.getText()}: ${name}`);
    } else if (Node.isIdentifier(ref)) {
      ref.replaceWithText(name);
    }
  }
}
