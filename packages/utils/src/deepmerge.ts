export function isPlainObject(
  item: unknown
): item is Record<keyof any, unknown> {
  return (
    item !== null && typeof item === "object" && item.constructor === Object
  );
}

export interface DeepmergeOptions {
  clone?: boolean;
  sortKeys?: boolean;
}

function sortKeys<T extends Record<string, any>>(object: T, keys: (keyof T)[]) {
  for (const key of keys) {
    const value = object[key];
    delete object[key];
    object[key] = value;
  }
}

export default function deepmerge<T>(
  target: T,
  source: unknown,
  options: DeepmergeOptions = { clone: true }
): T {
  const output = options.clone ? { ...target } : target;
  const sourceKeys: string[] | undefined = options.sortKeys ? [] : undefined;

  if (isPlainObject(target) && isPlainObject(source)) {
    Object.keys(source).forEach((key) => {
      // Avoid prototype pollution
      if (key === "__proto__") {
        return;
      }

      if (sourceKeys) sourceKeys.push(key);

      let sourceValue: any;
      let targetValue: any;

      if (
        isPlainObject((sourceValue = source[key])) &&
        key in target &&
        isPlainObject((targetValue = target[key]))
      ) {
        // Since `output` is a clone of `target` and we have narrowed `target` in this block we can cast to the same type.
        (output as Record<keyof any, unknown>)[key] = deepmerge(
          targetValue,
          sourceValue,
          options
        );
      } else {
        (output as Record<keyof any, unknown>)[key] = sourceValue;
      }
    });

    if (sourceKeys) sortKeys(output as Record<string, any>, sourceKeys);
  }

  return output;
}
