import cloneObject from "./cloneObject";
import deepmerge from "./deepmerge";

export default function merge<TTarget extends Record<string, any>>(
  target: TTarget,
  ...sources: (Record<string, any> | undefined)[]
) {
  for (const source of sources)
    deepmerge(target, cloneObject(source), {
      clone: false,
    });
  return target;
}
