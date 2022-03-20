import {
  createBreakpoints,
  Breakpoints,
  BreakpointsOptions,
  Breakpoint,
} from "./createBreakpoints";
import { createSpacing, Spacing, SpacingOptions } from "./createSpacing";
import { createShape, Shape, ShapeOptions } from "./shape";
import { DeepPartial } from "@suid/types";
import { createMutable } from "solid-js/store";

export interface Theme<T extends string = Breakpoint> {
  breakpoints: Breakpoints<T>;
  shape: Shape;
  spacing: Spacing;
  components: any;
  palette: any;
  typography: any;
  shadows: any;
  transitions: any;
  zIndex: any;
  direction: any;
  mixins: any;
}

export type ThemeOptions<T extends string = Breakpoint> = {
  breakpoints: BreakpointsOptions<T>;
  components: any;
  palette: any;
  shape: ShapeOptions;
  spacing: SpacingOptions;
  typography: any;
  zIndex: any;
};

export function createThemeOptions<T extends string>(
  options: Partial<ThemeOptions<T>>
) {
  return options;
}

export function createTheme<T extends string = Breakpoint>(
  data?: DeepPartial<ThemeOptions<T>>
): Theme<T> {
  const result: Theme<T> = {
    direction: "ltr",
    ...data,
    breakpoints: createBreakpoints(data?.breakpoints),
    shape: createShape(data?.shape),
    spacing: createSpacing(data?.spacing as any),
    shadows: undefined,
    transitions: undefined,
    components: undefined,
    palette: undefined,
    typography: undefined,
    zIndex: undefined,
    mixins: undefined,
  };
  return result;
}

export function createThemeStore<T extends string = Breakpoint>(
  data?: DeepPartial<ThemeOptions<T>>
) {
  return createMutable(createTheme(data as any));
}

export default createTheme;
