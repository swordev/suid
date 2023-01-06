import type { Breakpoint } from "../createTheme/createBreakpoints";

export type ResponsiveStyleValue<T> =
  | T
  | Array<T | undefined>
  | { [key in Breakpoint]?: T };
