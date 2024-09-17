import ThemeContext from "./ThemeContext";
import { Theme } from "./createTheme";
import getDefaultTheme from "./getDefaultTheme";
import isEmptyObject from "@suid/utils/isEmptyObject";
import { useContext } from "solid-js";

function useTheme(
  defaultTheme: Theme | (() => Theme) = getDefaultTheme,
  Context: typeof ThemeContext = ThemeContext
) {
  const theme = useContext(Context);
  if (typeof theme === "function") {
    return new Proxy({}, { get: (_, p) => theme()[p] });
  } else if (isEmptyObject(theme) && defaultTheme) {
    if (typeof defaultTheme === "function") return defaultTheme();
    return defaultTheme;
  } else if (!theme) {
    throw new Error("Theme is not defined");
  }
  return theme as Theme;
}

export default useTheme;
