import findReactObjects from "../navigations/findReactObjects";
import groupImports from "./groupImports";
import removeReactImports from "./removeReactImports";
import renameMuiImports from "./renameMuiImports";
import replaceReactFragment from "./replaceReactFragment";
import replaceReactUseState from "./replaceReactUseState";
import { SourceFile } from "ts-morph";

export default function transformReactSource(source: SourceFile) {
  const reactObjects = findReactObjects(source);
  for (const reactObject of reactObjects) {
    if (reactObject.node.wasForgotten()) continue;
    if (reactObject.name === "useState") {
      replaceReactUseState(reactObject.node);
    } else if (reactObject.name === "Fragment") {
      replaceReactFragment(reactObject.node);
    }
  }
  renameMuiImports(source);
  removeReactImports(source);
  groupImports(source);
}
