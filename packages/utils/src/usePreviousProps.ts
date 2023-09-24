import { createEffect } from "solid-js";
import { createMutable } from "solid-js/store";

export default function usePreviousProps<
  T extends Record<string, any>,
  K extends keyof T,
>(props: T, propNames: K[]) {
  const initialValue = propNames.reduce(
    (result, name) => {
      result[name] = props[name];
      return result;
    },
    {} as Pick<T, K>
  );

  const prevProps = createMutable(initialValue);

  for (const propName of propNames)
    createEffect((prev) => {
      (prevProps as any)[propName] = prev;
      return props[propName];
    }, props[propName]);

  return prevProps;
}
