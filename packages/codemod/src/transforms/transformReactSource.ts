import findReactCalls from "../navigations/findReactCalls";
import groupImports from "./groupImports";
import removeReactImports from "./removeReactImports";
import renameMuiImports from "./renameMuiImports";
import replaceReactUseState from "./replaceReactUseState";
import { SourceFile } from "ts-morph";

export default function transformReactSource(source: SourceFile) {
  const reactCalls = findReactCalls(source);
  for (const reactCall of reactCalls) {
    if (reactCall.methodName === "useState") {
      replaceReactUseState(reactCall.node);
    }
  }
  renameMuiImports(source);
  removeReactImports(source);
  groupImports(source);
}
