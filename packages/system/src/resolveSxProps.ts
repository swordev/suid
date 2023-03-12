import { handleBreakpoints } from "./breakpoints";
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

export function resolveSxPropsValue(
  name: string,
  value: unknown,
  theme: Theme
) {
  return name in systemProps
    ? resolveSystemPropsValue(name, value, theme)
    : resolveStyledPropsValue(name, value);
}

function resolveSxProps(object: SxPropsObject, theme: Theme): SxPropsObject {
  return resolve(object, (name, value) => {
    if (typeof value === "function") {
      value = value(theme);
    }
    if (value === null || value === undefined) {
      return value;
    } else if (typeof value === "object") {
      return handleBreakpoints({ theme }, value, (x) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return resolveSxPropsValue(name, x, theme)!;
      });
    } else {
      return resolveSxPropsValue(name, value, theme);
    }
  });
}

export default resolveSxProps;
