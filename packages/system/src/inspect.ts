import { Component, createMemo, onCleanup, JSX } from "solid-js";

export const $INSPECT = Symbol("solid-inspect");

export type ComponentObject<T = any> = {
  Component: Component<T>;
  props: T;
};

type PrivateComponentObject<T = any> = ComponentObject<T> & {
  $INSPECT: Symbol;
};

export type InspectResult = JSX.Element | ComponentObject;

const nodeToComponent = new WeakMap();

let inspectionEnabled = false;

export function createInspector<T>(fn: Component<T>, props: T) {
  let elementRef: HTMLElement | null;
  const cleanup = () => {
    if (elementRef) {
      nodeToComponent.delete(elementRef);
      elementRef = null;
    }
  };
  onCleanup(cleanup);
  return (newElementRef: HTMLElement) => {
    cleanup();
    elementRef = newElementRef;
    nodeToComponent.set(elementRef, { Component: fn, props, $INSPECT });
  };
}

export function inspect(fn: () => JSX.Element): InspectResult[] {
  try {
    inspectionEnabled = true;
    const ret = fn();
    const result = Array.isArray(ret) ? ret : [ret];
    return result.map((v: any) => nodeToComponent.get(v) || v);
  } finally {
    inspectionEnabled = false;
  }
}

export function componentTrap<T>(fn: Component<T>): Component<T> {
  function Component(props: T) {
    if (inspectionEnabled)
      return {
        Component,
        props,
        $INSPECT,
      } as PrivateComponentObject as any;
    return fn(props);
  }
  Object.defineProperty(Component, "name", {
    value: fn.name,
  });
  Component.toString = fn.toString;
  return Component;
}

export function isComponentObject(input: unknown): input is ComponentObject;
export function isComponentObject<T>(
  input: unknown,
  component: Component<T>
): input is ComponentObject<T>;
export function isComponentObject(input: unknown, component?: Component) {
  return (
    !!input &&
    (input as PrivateComponentObject).$INSPECT === $INSPECT &&
    (!component || (input as PrivateComponentObject).Component === component)
  );
}

export function resolveChildren(children: any): unknown {
  if (typeof children === "function" && !children.length)
    return resolveChildren(children());
  if (Array.isArray(children)) {
    const results: any[] = [];
    for (let i = 0; i < children.length; i++) {
      const result = resolveChildren(children[i]);
      Array.isArray(result)
        ? // eslint-disable-next-line prefer-spread
          results.push.apply(results, result)
        : results.push(result);
    }
    return results;
  }
  return children;
}

export function inspectChildren(fn: () => any) {
  const children = createMemo(() => inspect(fn));
  const memo = createMemo(() =>
    inspect(() => resolveChildren(children()) as any)
  );
  (memo as any).toArray = () => {
    const c = memo();
    return Array.isArray(c) ? c : c != null ? [c] : [];
  };
  return memo;
}
