import { isPlainObject } from "./deepmerge";

export default function cloneObject<T>(target: T): T {
  if (Array.isArray(target)) {
    const output = [];
    for (const value of target) {
      output.push(cloneObject(value));
    }
    return output as any;
  } else if (isPlainObject(target)) {
    const output: Record<keyof any, unknown> = {};
    for (const key in target) {
      if (key === "__proto__") {
        continue;
      }
      output[key] = cloneObject(target[key]);
    }
    return output as any;
  } else {
    return target;
  }
}
