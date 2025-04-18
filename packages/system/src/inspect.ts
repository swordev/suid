import {
  children,
  Component,
  createComponent,
  createContext,
  JSX,
  useContext,
} from "solid-js";

export const $INSPECT = Symbol("solid-inspect");

export type ComponentObject<T extends Record<string, any> = any> = {
  Component: Component<T>;
  props: T;
};

type PrivateComponentObject<T extends Record<string, any> = any> =
  ComponentObject<T> & {
    $INSPECT: symbol;
  };

export type InspectResult = JSX.Element | ComponentObject;

export const InspectContext = createContext<{ enabled: boolean }>();

export function inspectChildren(fn: () => JSX.Element): () => InspectResult[] {
  const cb = createComponent(InspectContext.Provider, {
    value: { enabled: true },
    get children() {
      return fn();
    },
  }) as any;
  const result = children(cb);
  return result.toArray;
}

export function componentTrap<T extends Record<string, any>>(
  fn: Component<T>
): Component<T> {
  function Component(props: T) {
    if (useContext(InspectContext)?.enabled)
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
export function isComponentObject<T extends Record<string, any>>(
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
