import addReplacePattern from "../utils/addReplacePattern.js";
import { Identifier, ts } from "ts-morph";

const emptyMagicKey = `__EMPTY__${Date.now()}`;

export default function replaceReactFragment(node: Identifier) {
  const jsxElement = node.getFirstAncestorByKind(ts.SyntaxKind.JsxElement);
  addReplacePattern(node.getSourceFile(), emptyMagicKey, "");
  jsxElement?.set({
    name: emptyMagicKey,
  });
}
