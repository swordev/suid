import deepmerge from "./deepmerge";

export function merge<
  TObject extends Record<string, any>,
  TSource extends Record<string, any> | undefined
>(object: TObject, ...sources: TSource[]) {
  return sources.reduce(
    (target, source, index) =>
      deepmerge(target, source, {
        clone: !!index,
      }),
    object
  );
}

export default merge;
