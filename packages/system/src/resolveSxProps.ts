import { resolvedPropKey } from "./createSxClass";
import { Theme } from "./createTheme";
import { resolveStyledPropsValue } from "./resolveStyledProps";
import { SxPropsObject } from "./sxProps";
import systemProps from "./systemProps";
import resolve from "@suid/css/resolve";

export function resolveSystemPropsValue(
  name: string,
  value: any,
  theme: Theme
) {
  return systemProps[name as keyof typeof systemProps](value, theme);
}

export function reslveSxPropsValue(name: string, value: unknown, theme: Theme) {
  return name in systemProps
    ? resolveSystemPropsValue(name, value, theme)
    : resolveStyledPropsValue(name, value);
}

function resolveSxProps(v: SxPropsObject, theme: Theme): SxPropsObject {
  return resolve(v, (name, value) => reslveSxPropsValue(name, value, theme), {
    [resolvedPropKey]: true,
  });
}

export default resolveSxProps;
