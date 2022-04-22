export default function resolveFunction<T, TArgs extends any[]>(
  value: T | ((...args: TArgs) => T),
  args?: TArgs
): T {
  if (typeof value === "function")
    value = (value as (...args: any[]) => T)(...(args || []));
  return value;
}
