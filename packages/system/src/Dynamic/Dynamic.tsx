/* eslint-disable no-constant-condition */

/* eslint-disable no-case-declarations */
import {
  $DEVCOMP,
  Accessor,
  Component,
  createMemo,
  JSX,
  sharedConfig,
  splitProps,
  untrack,
} from "solid-js";
import {
  getNextElement,
  isServer,
  spread,
  ssrElement,
  SVGElements,
} from "solid-js/web";

function createElement(
  tagName: string,
  isSVG = false
): HTMLElement | SVGElement {
  return isSVG
    ? document.createElementNS("http://www.w3.org/2000/svg", tagName)
    : document.createElement(tagName);
}

// https://github.com/solidjs/solid/blob/cafc51f6fc2e3ddf24b40cae00b77cf879051c9e/packages/solid/web/server/index.ts#L25
function ServerDynamic<T>(
  props: T & {
    children?: any;
    $component?: Component<T> | string | keyof JSX.IntrinsicElements;
  }
) {
  const [p, others] = splitProps(props, ["$component"]);
  const comp = p.$component,
    t = typeof comp;

  if (comp) {
    if (t === "function") return (comp as Function)(others);
    else if (t === "string") {
      return ssrElement(comp as string, others, undefined, true);
    }
  }
}

// https://github.com/solidjs/solid/blob/12c0dbbbf9f9fdf798c6682e57aee8ea763cf1ba/packages/solid/web/src/index.ts#L114
export function Dynamic(props: any): JSX.Element {
  if (isServer) return ServerDynamic(props);
  const [p, others] = splitProps(props, ["$component"]);
  const cached = createMemo<Function | string>(() => p.$component);
  return createMemo(() => {
    const component = cached();
    switch (typeof component) {
      case "function":
        if ("_DX_DEV_") Object.assign(component, { [$DEVCOMP]: true });
        return untrack(() => component(others));

      case "string":
        const isSvg = SVGElements.has(component);
        const el = sharedConfig.context
          ? getNextElement()
          : createElement(component, isSvg);
        spread(el, others, isSvg);
        return el;

      default:
        break;
    }
  }) as unknown as JSX.Element;
}

export default Dynamic;
