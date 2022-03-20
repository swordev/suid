export function isVar(value: string) {
  return value.startsWith("--");
}

export function isSelector(value: string) {
  return /[^a-z-]/i.test(value) && !isVar(value);
}

export function isGlobalSelector(value: string) {
  return value.startsWith("@global");
}

export function isMediaQuery(value: string) {
  return value.startsWith("@media");
}
export function isKeyframes(value: string) {
  return value.startsWith("@keyframes");
}
