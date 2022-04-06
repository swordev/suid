import addReplaceText from "../utils/addReplacePattern";
import { Identifier } from "ts-morph";

const magicKey = `__CALLFUNCTION__${Date.now()}`;

export default function renameGetterVarToCall(
  identifier: Identifier,
  excludeSelf = false
) {
  const text = identifier.getText();
  addReplaceText(identifier.getSourceFile(), magicKey, "()");
  identifier.rename(`${text}${magicKey}`);
  if (excludeSelf) identifier.replaceWithText(text);
}
