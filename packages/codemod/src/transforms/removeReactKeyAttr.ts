import { JsxAttribute } from "ts-morph";

export default function removeReactKeyAttr(attr: JsxAttribute) {
  attr.remove();
}
