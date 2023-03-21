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
      const sortedCss: Record<string, any> = {};
      for (const key of theme.breakpoints.keys) {
        sortedCss[theme.breakpoints.up(key)] = {};
      }
      return Object.assign(
        sortedCss,
        handleBreakpoints(
          { theme },
          value,
          (v) => resolveSxPropsValue(name, v, theme) ?? { [name]: v }
        )
      );
    } else {
      return resolveSxPropsValue(name, value, theme);
    }
  });
}

export default resolveSxProps;
