export default function toArray<T>(value: T | T[] | undefined): T[] {
  return value ? (Array.isArray(value) ? value : [value]) : ([] as any);
}
