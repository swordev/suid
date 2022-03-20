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
import { createMutable } from "solid-js/store";

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

export function createThemeOptions<T extends string>(
  options: Partial<ThemeOptions<T>>
) {
  return options;
}

export function createTheme<T extends string = Breakpoint>(
  options?: DeepPartial<ThemeOptions<T>>
): Theme<T> {
  const breakpoints = createBreakpoints(options?.breakpoints);
  const result: Theme<T> = {
    direction: "ltr",
    ...options,
    breakpoints,
    components: createComponents(options?.components),
    palette: createPalette(options?.palette),
    shape: createShape(options?.shape),
    spacing: createSpacing(options?.spacing as any),
    typography: createTypography(options?.typography),
    shadows: createShadows(),
    transitions: createTransitions({}),
    zIndex: createZIndex(options?.zIndex),
    mixins: createMixins(breakpoints),
  };
  return result;
}

export function createThemeStore<T extends string = Breakpoint>(
  data?: DeepPartial<ThemeOptions<T>>
) {
  return createMutable(createTheme(data as any));
}

export default createTheme;
