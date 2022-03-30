import { Theme } from "./createTheme";
import getDefaultTheme from "./getDefaultTheme";
import ThemeContext from "@suid/system/ThemeContext";
import useSysTheme from "@suid/system/useTheme";

function useTheme(
  defaultTheme: Theme | (() => Theme) = getDefaultTheme as any
) {
  return useSysTheme(defaultTheme as any, ThemeContext) as Theme;
}

export default useTheme;
