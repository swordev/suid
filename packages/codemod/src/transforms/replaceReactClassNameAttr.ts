import { JsxAttribute } from "ts-morph";

export default function replaceReactClassNameAttr(attr: JsxAttribute) {
  attr.set({ name: "class" });
}
