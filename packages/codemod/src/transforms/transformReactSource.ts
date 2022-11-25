import findAttributes from "../navigations/findAttributes.js";
import findObjectBindingPatterns from "../navigations/findObjectBindingPatterns.js";
import findObjectLiteralExpressions from "../navigations/findObjectLiteralExpressions.js";
import findReactObjects from "../navigations/findReactObjects.js";
import groupImports from "./groupImports.js";
import removePropTypes from "./removePropTypes.js";
import removeReactImports from "./removeReactImports.js";
import removeReactKeyAttr from "./removeReactKeyAttr.js";
import removeUnusedImports from "./removeUnusedImports.js";
import renameMuiImports from "./renameMuiImports.js";
import replaceObjectBinding from "./replaceObjectBinding.js";
import replaceReactClassNameAttr from "./replaceReactClassNameAttr.js";
import replaceReactContext from "./replaceReactContext.js";
import replaceReactCreateContext from "./replaceReactCreateContext.js";
import replaceReactElementType from "./replaceReactElementType.js";
import replaceReactEventHandlers from "./replaceReactEventHandlers.js";
import replaceReactEvents from "./replaceReactEvents.js";
import replaceReactForwardRef from "./replaceReactForwardRef.js";
import replaceReactFragment from "./replaceReactFragment.js";
import replaceReactHTMLAttributes from "./replaceReactHTMLAttributes.js";
import replaceReactJSXElementConstructor from "./replaceReactJSXElementConstructor.js";
import replaceReactMemo from "./replaceReactMemo.js";
import replaceReactNode from "./replaceReactNode.js";
import replaceReactReactElement from "./replaceReactReactElement.js";
import replaceReactRef from "./replaceReactRef.js";
import replaceReactUseCallback from "./replaceReactUseCallback.js";
import replaceReactUseContext from "./replaceReactUseContext.js";
import replaceReactUseEffect from "./replaceReactUseEffect.js";
import replaceReactUseLayoutEffect from "./replaceReactUseLayoutEffect.js";
import replaceReactUseMemo from "./replaceReactUseMemo.js";
import replaceReactUseState from "./replaceReactUseState.js";
import replaceSpreadAsignment from "./replaceSpreadAsignment.js";
import { Identifier, JsxAttribute, SourceFile } from "ts-morph";

const reactObjectTransformers: Record<string, (node: Identifier) => void> = {
  Fragment: replaceReactFragment,
  Context: replaceReactContext,
  createContext: replaceReactCreateContext,
  ReactElement: replaceReactReactElement,
  ElementType: replaceReactElementType,
  memo: replaceReactMemo,
  ReactNode: replaceReactNode,
  Ref: replaceReactRef,
  useCallback: replaceReactUseCallback,
  useContext: replaceReactUseContext,
  useState: replaceReactUseState,
  JSXElementConstructor: replaceReactJSXElementConstructor,
  useMemo: replaceReactUseMemo,
  forwardRef: replaceReactForwardRef,
  useEffect: replaceReactUseEffect,
  useLayoutEffect: replaceReactUseLayoutEffect,
};

const attrTransforms: Record<string, (node: JsxAttribute) => void> = {
  className: replaceReactClassNameAttr,
  key: removeReactKeyAttr,
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
  findAttributes(source).forEach((node) => {
    const name = node.getName();
    attrTransforms[name]?.(node);
  });
  groupImports(source);
  removeUnusedImports(source);
}
