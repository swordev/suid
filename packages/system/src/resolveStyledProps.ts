import { resolvedPropKey } from "./createSxClass";
import { StyledProps } from "./styledProps";
import resolve from "@suid/css/resolve";

export const unitLess = new Set<string>([]);

export function resolveStyledPropsValue(name: string, value: unknown) {
  if (typeof value === "number") {
    return { [name]: unitLess.has(name) ? value.toString() : `${value}px` };
  }
}

function resolveStyledProps(v: StyledProps): StyledProps {
  return resolve(v, resolveStyledPropsValue, { [resolvedPropKey]: true });
}

export default resolveStyledProps;
