import { Theme } from "./createTheme";

function makeGetDefaultTheme(createTheme: () => Theme) {
  let defaultTheme: Theme;
  return function getDefaultTheme() {
    if (!defaultTheme) {
      defaultTheme = createTheme();
    }
    return defaultTheme;
  };
}

export default makeGetDefaultTheme;
