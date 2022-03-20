import { createEffect } from "solid-js";

export type ClassListProp = Record<string, boolean | undefined> /*
  | (string | false | Record<string, boolean>)[]
  | Record<string, boolean>
  | Readonly<Record<string, boolean>>*/;

export function normalizeClassList(object: ClassListProp) {
  const items = Array.isArray(object) ? object : [object];
  const result: Record<string, boolean> = {};
  for (const item of items) {
    if (typeof item === "string") {
      result[item] = true;
    } else if (item) {
      Object.assign(result, item);
    }
  }
  return result;
}

export function applyClassList(
  element: HTMLElement,
  current?: ClassListProp,
  prev?: ClassListProp
) {
  const currentMap = current ? normalizeClassList(current) : {};
  for (const name in currentMap)
    if (currentMap[name]) element.classList.add(name);
  const prevMap = prev ? normalizeClassList(prev) : {};
  for (const name in prevMap)
    if (!currentMap[name]) element.classList.remove(name);
  return current;
}

function createClassListEffect(
  element: { ref: HTMLElement },
  classList: () => ClassListProp | undefined
) {
  createEffect<ClassListProp | undefined>((prev) => {
    const current = classList();
    return applyClassList(element.ref, current, prev);
  }, undefined);
}

export default createClassListEffect;
