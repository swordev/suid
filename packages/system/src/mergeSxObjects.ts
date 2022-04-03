import { SxPropsObject } from "./sxProps";
import deepmerge from "@suid/utils/deepmerge";

export function mergeSxObjects(
  object: SxPropsObject,
  ...sources: SxPropsObject[]
) {
  return sources.reduce(
    (target, source, index) =>
      deepmerge(target, source, {
        clone: !!index,
        sortKeys: true,
      }),
    object
  );
}

export default mergeSxObjects;
