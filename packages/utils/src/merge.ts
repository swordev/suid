import deepmerge from "./deepmerge";

export function merge<
  TObject extends Record<string, any>,
  TSource extends Record<string, any> | undefined
>(object: TObject, ...sources: TSource[]) {
  return sources.reduce((target, source) => deepmerge(target, source), object);
}

export default merge;
