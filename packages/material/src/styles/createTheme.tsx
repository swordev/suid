import {
  createComponents,
  Components,
  ComponentsOptions,
} from "./createComponents";
import createMixins, { Mixins } from "./createMixins";
import { createPalette, Palette, PaletteOptions } from "./createPalette";
import { createShadows, Shadows } from "./createShadows";
import createTransitions, { ThemeTransitionsType } from "./createTransitions";
import {
  createTypography,
  ThemeTypographyType,
  TypographyOptions,
} from "./createTypography";
import { createZIndex, ZIndex, ZIndexOptions } from "./createZIndex";
import {
  Theme as SysTheme,
  ThemeOptions as SysThemeOptions,
} from "@suid/system/createTheme";
import createBreakpoints, {
  Breakpoint,
} from "@suid/system/createTheme/createBreakpoints";
import createSpacing from "@suid/system/createTheme/createSpacing";
import createShape from "@suid/system/createTheme/shape";
import { DeepPartial } from "@suid/types";

export interface Theme<T extends string = Breakpoint> extends SysTheme<T> {
  components: Components;
  palette: Palette;
  typography: ThemeTypographyType;
  shadows: Shadows;
  transitions: ThemeTransitionsType;
  zIndex: ZIndex;
  direction: "ltr" | "rtl";
  mixins: Mixins;
}

export interface ThemeOptions<T extends string = Breakpoint>
  extends SysThemeOptions<T> {
  components: ComponentsOptions;
  palette: PaletteOptions;
  typography: TypographyOptions;
  zIndex: ZIndexOptions;
}

export interface ThemeInput<T extends string = Breakpoint> {
  breakpoints:
    | DeepPartial<ThemeOptions<T>["breakpoints"]>
    | (() => Theme<T>["breakpoints"]);
  shape: DeepPartial<ThemeOptions<T>["shape"]> | (() => Theme<T>["shape"]);
  spacing:
    | DeepPartial<ThemeOptions<T>["spacing"]>
    | (() => Theme<T>["spacing"]);
  components:
    | DeepPartial<ThemeOptions<T>["components"]>
    | (() => Theme<T>["components"]);
  palette:
    | DeepPartial<ThemeOptions<T>["palette"]>
    | (() => Theme<T>["palette"]);
  typography:
    | DeepPartial<ThemeOptions<T>["typography"]>
    | (() => Theme<T>["typography"]);
  shadows: () => Theme<T>["shadows"];
  transitions: () => Theme<T>["transitions"];
  zIndex: DeepPartial<ThemeOptions<T>["zIndex"]> | (() => Theme<T>["zIndex"]);
  direction: () => Theme<T>["direction"];
  mixins: () => Theme<T>["mixins"];
}

export function createThemeOptions<T extends string>(
  options: Partial<ThemeOptions<T>>
) {
  return options;
}

export function createTheme<T extends string = Breakpoint>(
  input: Partial<ThemeInput<T>> = {}
): Theme<T> {
  const theme: Theme<T> = {
    direction: "ltr",
    ...input,
  } as any;

  function def<K extends keyof Theme>(
    key: K,
    defaults: (input: Partial<ThemeOptions<T>>) => any
  ) {
    const inputValue = input[key];
    Object.defineProperty(theme, key, {
      configurable: true,
      enumerable: true,
      ...(typeof inputValue === "function"
        ? {
            get: inputValue as any,
          }
        : {
            value: defaults({ [key]: inputValue }),
          }),
    });
  }

  def("breakpoints", (input) => createBreakpoints(input.breakpoints as any));
  def("components", (input) => createComponents(input.components as any));
  def("palette", (input) => createPalette(input.palette));
  def("shape", (input) => createShape(input.shape));
  def("spacing", (input) => createSpacing(input.spacing as any));
  def("typography", (input) => createTypography(input.typography));
  def("shadows", () => createShadows());
  def("transitions", () => createTransitions({}));
  def("zIndex", (input) => createZIndex(input.zIndex));
  def("mixins", () => createMixins(theme.breakpoints));
  return theme;
}

export default createTheme;
