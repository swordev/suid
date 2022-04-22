export default function isEmptyObject(object: Record<string, any>) {
  for (const _key in object) return false;
  return true;
}
