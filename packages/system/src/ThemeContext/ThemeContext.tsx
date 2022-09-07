import { Context, createContext } from "solid-js";

let ThemeContext!: Context<{}>;

type Global = {
  __suid?: {
    systemThemeContext?: Context<{}>;
  };
};

if (process.env.NODE_ENV !== "production") {
  const global: Global = globalThis as any;
  const suid = global.__suid || (global.__suid = {});
  ThemeContext =
    suid.systemThemeContext || (suid.systemThemeContext = createContext({}));
} else {
  ThemeContext = createContext({});
}

export default ThemeContext;
