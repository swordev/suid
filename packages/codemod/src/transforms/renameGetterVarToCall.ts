import { Identifier } from "ts-morph";

export const callFunctionMagicKey = `__CALLFUNCTION__${Date.now()}`;

export default function renameGetterVarToCall(
  identifier: Identifier,
  excludeSelf = false
) {
  const text = identifier.getText();
  identifier.rename(`${text}${callFunctionMagicKey}`);
  if (excludeSelf) identifier.replaceWithText(text);
}
