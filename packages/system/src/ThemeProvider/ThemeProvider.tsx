import ThemeContext from "../ThemeContext";
import { Theme } from "../createTheme";
import { JSXElement } from "solid-js";

function ThemeProvider<T extends string>(props: {
  theme: Theme<T>;
  children: JSXElement;
}) {
  return (
    <ThemeContext.Provider
      value={props.theme as any}
      children={props.children}
    />
  );
}

export default ThemeProvider;
