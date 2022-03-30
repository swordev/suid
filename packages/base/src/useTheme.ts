import ThemeContext from "@suid/system/ThemeContext";
import { Theme } from "@suid/system/createTheme";
import useSysTheme from "@suid/system/useTheme";

function useTheme(defaultTheme?: Theme | (() => Theme)) {
  return useSysTheme(defaultTheme as any, ThemeContext) as Theme;
}

export default useTheme;
