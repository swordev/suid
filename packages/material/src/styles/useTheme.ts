import { Theme } from "./createTheme";
import getDefaultTheme from "./getDefaultTheme";
import useSysTheme from "@suid/system/useTheme";

function useTheme(
  defaultTheme: Theme | (() => Theme) = getDefaultTheme as any
) {
  return useSysTheme(defaultTheme as any) as Theme;
}

export default useTheme;
