/* eslint-disable no-constant-condition */

/* eslint-disable no-case-declarations */
import {
  $DEVCOMP,
  createMemo,
  splitProps,
  JSX,
  sharedConfig,
  untrack,
} from "solid-js";
import { isServer, spread, ssrElement } from "solid-js/web";
import * as web from "solid-js/web";

function createElement(
  tagName: string,
  isSVG = false
): HTMLElement | SVGElement {
  return isSVG
    ? document.createElementNS("http://www.w3.org/2000/svg", tagName)
    : document.createElement(tagName);
}

// https://github.com/solidjs/solid/blob/cafc51f6fc2e3ddf24b40cae00b77cf879051c9e/packages/solid/web/server/index.ts#L25
function createServerDynamicComponent<T>(
  component: () => Function | string,
  props: T & {
    children?: any;
  }
) {
  const comp = component(),
    t = typeof comp;

  if (comp) {
    if (t === "function") return (comp as Function)(props);
    else if (t === "string") {
      return ssrElement(comp as string, props, undefined, true);
    }
  }
}

export function createStaticComponent(
  component: Function | string,
  props: any
) {
  switch (typeof component) {
    case "function":
      if ("_DX_DEV_") Object.assign(component, { [$DEVCOMP]: true });
      return untrack(() => component(props));

    case "string":
      const isSvg = web.SVGElements.has(component);
      const el = sharedConfig.context
        ? web.getNextElement()
        : createElement(component, isSvg);
      spread(el, props, isSvg);
      return el;
  }
}

export function createDynamicComponent(
  component: () => Function | string,
  props: any
): JSX.Element {
  if (isServer) return createServerDynamicComponent(component, props);
  const cached = createMemo<Function | string>(component);
  return createMemo(() =>
    createStaticComponent(cached(), props)
  ) as unknown as JSX.Element;
}

// https://github.com/solidjs/solid/blob/12c0dbbbf9f9fdf798c6682e57aee8ea763cf1ba/packages/solid/web/src/index.ts#L114
export function Dynamic(props: any): JSX.Element {
  const [p, others] = splitProps(props, ["$component"]);
  if (isServer) return createServerDynamicComponent(() => p.$component, others);
  return createDynamicComponent(() => p.$component, others);
}

export default Dynamic;
