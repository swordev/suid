import { Theme } from ".";
import ThemeContext from "@suid/system/ThemeContext";
import createSxClass from "@suid/system/createSxClass";
import { JSXElement } from "solid-js";

function ThemeProvider<T extends string>(props: {
  data: Theme<T>;
  children: JSXElement;
}) {
  createSxClass(() => ({
    "@global": {
      body: {
        backgroundColor: props.data.palette.background.default,
      },
    },
  }));
  return (
    <ThemeContext.Provider value={props.data}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
