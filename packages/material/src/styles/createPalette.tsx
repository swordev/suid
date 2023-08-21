import {
  common,
  green,
  lightBlue,
  orange,
  red,
  blue,
  purple,
  grey,
} from "../colors";
import {
  darken,
  getContrastRatio,
  lighten,
} from "@suid/system/colorManipulator";
import { DeepPartial, DoRequired } from "@suid/types";
import merge from "@suid/utils/merge";

export type PaletteColorOptions = {
  light: string;
  main: string;
  dark: string;
  contrastText?: string;
};

export type PaletteColor = Required<PaletteColorOptions>;

export type PaletteColorName =
  | "primary"
  | "secondary"
  | "error"
  | "warning"
  | "info"
  | "success";

type PaletteBase = Omit<PaletteOptions, PaletteColorName> & {
  [color in PaletteColorName]: PaletteColor;
};

export interface Palette extends PaletteBase {
  getColorObject(name: PaletteColorName): PaletteColor;
  getColor(name: PaletteColorName): string;
  isColorName(name: string): name is PaletteColorName;
  augmentColor(data: {
    color: PaletteColor;
    mainShade?: number | string;
    lightShade?: number | string;
    darkShade?: number | string;
  }): PaletteColor;
  getContrastText(color: string): string;
}

export interface PaletteOptions {
  mode: "light" | "dark";
  primary: PaletteColorOptions;
  secondary: PaletteColorOptions;
  error: PaletteColorOptions;
  warning: PaletteColorOptions;
  info: PaletteColorOptions;
  success: PaletteColorOptions;
  text: {
    primary: string;
    secondary: string;
    disabled: string;
  };
  background: {
    paper: string;
    default: string;
  };
  contrastThreshold: number;
  tonalOffset:
    | number
    | {
        light: number;
        dark: number;
      };
  divider: string;
  common: typeof common;
  action: {
    active: string;
    hover: string;
    hoverOpacity: number;
    selected: string;
    selectedOpacity: number;
    disabled: string;
    disabledOpacity: number;
    disabledBackground: string;
    focus: string;
    focusOpacity: number;
    activatedOpacity: number;
  };
  grey: typeof grey;
}

export const useLightOptions: () => Partial<PaletteOptions> = () => ({
  text: {
    primary: "rgba(0, 0, 0, 0.87)",
    secondary: "rgba(0, 0, 0, 0.6)",
    disabled: "rgba(0, 0, 0, 0.38)",
  },
  divider: "rgba(0, 0, 0, 0.12)",
  background: {
    paper: common.white,
    default: common.white,
  },
  action: {
    active: "rgba(0, 0, 0, 0.54)",
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    disabled: "rgba(0, 0, 0, 0.26)",
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12,
  },
});

export const lightColors: Pick<PaletteOptions, PaletteColorName> = {
  primary: {
    main: blue[700],
    light: blue[400],
    dark: blue[800],
  },
  secondary: {
    main: purple[500],
    light: purple[300],
    dark: purple[700],
  },
  error: {
    main: red[700],
    light: red[400],
    dark: red[800],
  },
  info: {
    main: lightBlue[700],
    light: lightBlue[800],
    dark: lightBlue[900],
  },
  success: {
    main: green[800],
    light: green[500],
    dark: green[900],
  },
  warning: {
    main: "#ED6C02",
    light: orange[500],
    dark: orange[900],
  },
};

export const useDarkOptions: () => Partial<PaletteOptions> = () => ({
  text: {
    primary: common.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212",
  },
  action: {
    active: common.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24,
  },
});

export const darkColors: Pick<PaletteOptions, PaletteColorName> = {
  primary: { main: blue[200], light: blue[50], dark: blue[400] },
  secondary: { main: purple[200], light: purple[50], dark: purple[400] },
  error: { main: red[500], light: red[300], dark: red[700] },
  info: { main: lightBlue[400], light: lightBlue[300], dark: lightBlue[700] },
  success: { main: green[400], light: green[300], dark: green[700] },
  warning: { main: orange[400], light: orange[300], dark: orange[700] },
};

const modes = { light: useLightOptions, dark: useDarkOptions };

function getContrastText(background: string, contrastThreshold: number) {
  return getContrastRatio(background, common.white) >= contrastThreshold
    ? common.white
    : "rgba(0, 0, 0, 0.87)";
}

function addLightOrDark(
  intent: PaletteColor,
  direction: "light" | "dark",
  shade: number | string,
  tonalOffset: PaletteOptions["tonalOffset"]
) {
  const tonalOffsetLight =
    typeof tonalOffset === "number" ? tonalOffset : tonalOffset.light;
  const tonalOffsetDark =
    typeof tonalOffset === "number" ? tonalOffset * 1.5 : tonalOffset.dark;

  if (!intent[direction]) {
    // eslint-disable-next-line no-prototype-builtins
    if (intent.hasOwnProperty(shade)) {
      intent[direction] = intent[shade as keyof typeof intent];
    } else if (direction === "light") {
      intent.light = lighten(intent.main, tonalOffsetLight);
    } else if (direction === "dark") {
      intent.dark = darken(intent.main, tonalOffsetDark);
    }
  }
}

function augmentColor(data: {
  color: PaletteColor;
  tonalOffset: PaletteOptions["tonalOffset"];
  contrastThreshold: number;
  mainShade?: number | string;
  lightShade?: number | string;
  darkShade?: number | string;
}) {
  const color = { ...data.color };
  const mainShade: keyof typeof data.color = data.mainShade ?? (500 as any);
  if (!data.color.main && data.color[mainShade])
    color.main = data.color[mainShade];
  addLightOrDark(color, "light", data.lightShade ?? 300, data.tonalOffset);
  addLightOrDark(color, "dark", data.darkShade ?? 700, data.tonalOffset);
  if (!color.contrastText)
    color.contrastText = getContrastText(color.main, data.contrastThreshold);
  return color;
}

export const usePalleteDefaults = () =>
  createPaletteOptions({
    mode: "light",
    tonalOffset: 0.2,
    contrastThreshold: 3,
    grey,
    common,
  }) as DoRequired<Partial<PaletteOptions>, "mode">;

export function createPaletteOptions(data: Partial<PaletteOptions>) {
  return data;
}

export function createPalette(options?: DeepPartial<PaletteOptions>) {
  const colorNames: PaletteColorName[] = [
    "error",
    "info",
    "primary",
    "secondary",
    "success",
    "warning",
  ];
  const palleteDefaults = usePalleteDefaults();
  const result: Palette = {
    ...merge(
      {} as Palette,
      palleteDefaults,
      modes[options?.mode ?? palleteDefaults.mode](),
      options
    ),
    isColorName(name): name is PaletteColorName {
      return colorNames.includes(name as any);
    },
    getColorObject(color) {
      return result[color];
    },
    getColor(color) {
      return result.mode === "light" ? result[color].light : result[color].dark;
    },
    augmentColor(data) {
      return augmentColor({
        ...data,
        tonalOffset: result.tonalOffset,
        contrastThreshold: result.contrastThreshold,
      });
    },
    getContrastText(background) {
      return getContrastText(background, result.contrastThreshold);
    },
  };

  const getDefaultColor = (color: PaletteColorName) =>
    result.mode === "light" ? lightColors[color] : darkColors[color];

  result.primary = result.augmentColor({
    color: result.primary || getDefaultColor("primary"),
  });

  result.secondary = result.augmentColor({
    color: result.secondary || getDefaultColor("secondary"),
    mainShade: "A400",
    lightShade: "A200",
    darkShade: "A700",
  });
  result.error = result.augmentColor({
    color: result.error || getDefaultColor("error"),
  });
  result.warning = result.augmentColor({
    color: result.warning || getDefaultColor("warning"),
  });
  result.info = result.augmentColor({
    color: result.info || getDefaultColor("info"),
  });
  result.success = result.augmentColor({
    color: result.success || getDefaultColor("success"),
  });
  return result;
}
