export function resolveFunction<T>(value: T | (() => T)): T {
  if (typeof value === "function") value = (value as () => T)();
  return value;
}
