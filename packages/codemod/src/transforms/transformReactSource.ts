import findObjectBindingPatterns from "../navigations/findObjectBindingPatterns";
import findReactObjects from "../navigations/findReactObjects";
import findObjectLiteralExpressions from "../utils/findObjectLiteralExpressions";
import groupImports from "./groupImports";
import removePropTypes from "./removePropTypes";
import removeReactImports from "./removeReactImports";
import renameMuiImports from "./renameMuiImports";
import replaceObjectBinding from "./replaceObjectBinding";
import replaceReactContext from "./replaceReactContext";
import replaceReactCreateContext from "./replaceReactCreateContext";
import replaceReactElementType from "./replaceReactElementType";
import replaceReactEventHandlers from "./replaceReactEventHandlers";
import replaceReactEvents from "./replaceReactEvents";
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
import replaceSpreadAsignment from "./replaceSpreadAsignment";
import { Identifier, SourceFile, ts } from "ts-morph";

const reactObjectTransformers: Record<string, (node: Identifier) => void> = {
  Fragment: replaceReactFragment,
  Context: replaceReactContext,
  createContext: replaceReactCreateContext,
  ElementType: replaceReactElementType,
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
      if (reactObject.name.endsWith("EventHandler")) {
        transformer = replaceReactEventHandlers;
      } else if (reactObject.name.endsWith("Event")) {
        transformer = replaceReactEvents;
      } else if (reactObject.name.endsWith("HTMLAttributes")) {
        transformer = replaceReactHTMLAttributes;
      }
    }
    transformer?.(reactObject.node);
  }
  renameMuiImports(source);
  removeReactImports(source);
  removePropTypes(source);
  findObjectBindingPatterns(source).forEach((node) =>
    replaceObjectBinding(node)
  );
  findObjectLiteralExpressions(source).forEach((node) =>
    replaceSpreadAsignment(node)
  );
  groupImports(source);
}
