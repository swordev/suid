export function isEmptyObject(object: Record<string, any>) {
  return !Object.keys(object).length;
}
