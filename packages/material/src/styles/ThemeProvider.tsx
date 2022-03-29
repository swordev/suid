import { Theme } from ".";
import ThemeContext from "@suid/system/ThemeContext";
import { JSXElement } from "solid-js";

function ThemeProvider<T extends string>(props: {
  theme: Theme<T>;
  children: JSXElement;
}) {
  return (
    <ThemeContext.Provider value={props.theme}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
