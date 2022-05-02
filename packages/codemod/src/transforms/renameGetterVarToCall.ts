import renameIdentifiers from "../utils/renameIdentifiers";
import { Identifier } from "ts-morph";

export default function renameGetterVarToCall(
  identifier: Identifier,
  excludeSelf = false
) {
  const text = identifier.getText();
  renameIdentifiers(identifier, `${text}()`);
  if (excludeSelf) identifier.replaceWithText(text);
}
