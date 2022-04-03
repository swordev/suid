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

  if (isPlainObject(target) && isPlainObject(source)) {
    Object.keys(source).forEach((key) => {
      // Avoid prototype pollution
      if (key === "__proto__") {
        return;
      }

      if (
        isPlainObject(source[key]) &&
        key in target &&
        isPlainObject(target[key])
      ) {
        // Since `output` is a clone of `target` and we have narrowed `target` in this block we can cast to the same type.
        (output as Record<keyof any, unknown>)[key] = deepmerge(
          target[key],
          source[key],
          options
        );
      } else {
        (output as Record<keyof any, unknown>)[key] = source[key];
      }
    });

    if (options.sortKeys)
      sortKeys(output, Object.keys(source) as (keyof typeof output)[]);
  }

  return output;
}
