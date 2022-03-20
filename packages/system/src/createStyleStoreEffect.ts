import { applyClassList } from "./createClassListEffect";
import { createEffect } from "solid-js";

function createStyleStoreEffect(
  element: { ref: HTMLElement },
  style: Record<string, string>
) {
  createEffect<Record<string, any> | undefined>((prev) => {
    return applyClassList(
      element.ref,
      Object.values(style ?? {}).reduce((result, name) => {
        result[name] = true;
        return result;
      }, {} as Record<string, boolean>),
      prev
    );
  }, undefined);
}

export default createStyleStoreEffect;
