import findReactObjects from "../navigations/findReactObjects";
import groupImports from "./groupImports";
import removePropTypes from "./removePropTypes";
import removeReactImports from "./removeReactImports";
import renameMuiImports from "./renameMuiImports";
import replaceReactElementType from "./replaceReactElementType";
import replaceReactEventHandlers from "./replaceReactEventHandlers";
import replaceReactFragment from "./replaceReactFragment";
import replaceReactHTMLAttributes from "./replaceReactHTMLAttributes";
import replaceReactMemo from "./replaceReactMemo";
import replaceReactNode from "./replaceReactNode";
import replaceReactRef from "./replaceReactRef";
import replaceReactUseCallback from "./replaceReactUseCallback";
import replaceReactUseContext from "./replaceReactUseContext";
import replaceReactUseEffect from "./replaceReactUseEffect";
import replaceReactUseMemo from "./replaceReactUseMemo";
import replaceReactUseState from "./replaceReactUseState";
import { Identifier, SourceFile } from "ts-morph";

const reactObjectTransformers: Record<string, (node: Identifier) => void> = {
  Fragment: replaceReactFragment,
  ElementType: replaceReactElementType,
  HTMLAttributes: replaceReactHTMLAttributes,
  memo: replaceReactMemo,
  ReactNode: replaceReactNode,
  Ref: replaceReactRef,
  useCallback: replaceReactUseCallback,
  useContext: replaceReactUseContext,
  useState: replaceReactUseState,
  useMemo: replaceReactUseMemo,
  useEffect: replaceReactUseEffect,
};

export default function transformReactSource(source: SourceFile) {
  const reactObjects = findReactObjects(source);
  for (const reactObject of reactObjects) {
    if (reactObject.node.wasForgotten()) continue;
    let transformer = reactObjectTransformers[reactObject.name];
    if (!transformer) {
      if (reactObject.name.endsWith("EventHandler"))
        transformer = replaceReactEventHandlers;
    }
    transformer?.(reactObject.node);
  }
  renameMuiImports(source);
  removeReactImports(source);
  removePropTypes(source);
  groupImports(source);
}
