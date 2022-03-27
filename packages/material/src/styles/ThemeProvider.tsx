import { Theme } from ".";
import ThemeContext from "@suid/system/ThemeContext";
import createSxClass from "@suid/system/createSxClass";
import { JSXElement } from "solid-js";

function ThemeProvider<T extends string>(props: {
  theme: Theme<T>;
  children: JSXElement;
}) {
  createSxClass(() => ({
    "@global": {
      body: {
        backgroundColor: props.theme.palette.background.default,
      },
    },
  }));
  return (
    <ThemeContext.Provider value={props.theme}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
