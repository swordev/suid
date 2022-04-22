import deepmerge from "./deepmerge";

export default function merge<TObject extends Record<string, any>>(
  object: TObject,
  ...sources: (Record<string, any> | undefined)[]
) {
  return sources.reduce(
    (target, source, index) =>
      deepmerge(target, source, {
        clone: !!index,
      }),
    object
  );
}
