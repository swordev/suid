import GlobalStyles from "../GlobalStyles";
import { Theme, useTheme } from "../styles";
import { CssBaselineTypeMap } from "./CssBaselineProps";
import createComponentFactory from "@suid/base/createComponentFactory";
import { SxPropsObject } from "@suid/system/sxProps";

const $ = createComponentFactory<CssBaselineTypeMap>()({
  name: "MuiCssBaseline",
  selfPropNames: ["children", "enableColorScheme"],
  propDefaults: ({ set }) =>
    set({
      enableColorScheme: false,
    }),
});

export const html = (theme: Theme, enableColorScheme: boolean) =>
  ({
    WebkitFontSmoothing: "antialiased", // Antialiasing.
    MozOsxFontSmoothing: "grayscale", // Antialiasing.
    // Change from `box-sizing: content-box` so that `width`
    // is not affected by `padding` or `border`.
    boxSizing: "border-box",
    // Fix font resize problem in iOS
    WebkitTextSizeAdjust: "100%",
    ...(enableColorScheme && { colorScheme: theme.palette.mode }),
  } as SxPropsObject);

export const body = (theme: Theme) =>
  ({
    color: theme.palette.text.primary,
    ...theme.typography.body1,
    backgroundColor: theme.palette.background.default,
    "@media print": {
      // Save printer ink.
      backgroundColor: theme.palette.common.white,
    },
  } as SxPropsObject);

export const styles = (theme: Theme, enableColorScheme = false) => {
  const defaultStyles = {
    html: html(theme, enableColorScheme),
    "*, *::before, *::after": {
      boxSizing: "inherit",
    },
    "strong, b": {
      fontWeight: theme.typography.fontWeightBold,
    },
    body: {
      margin: 0, // Remove the margin in all browsers.
      ...body(theme),
      // Add support for document.body.requestFullScreen().
      // Other elements, if background transparent, are not supported.
      "&::backdrop": {
        backgroundColor: theme.palette.background.default,
      },
    },
  } as Record<string, SxPropsObject>;

  /*const themeOverrides = theme.components?.MuiCssBaseline?.styleOverrides;
  if (themeOverrides) {
    defaultStyles = [defaultStyles, themeOverrides];
  }*/

  return defaultStyles;
};

/**
 * Kickstart an elegant, consistent, and simple baseline to build upon.
 *
 * Demos:
 *
 * - [Css Baseline](https://mui.com/components/css-baseline/)
 *
 * API:
 *
 * - [CssBaseline API](https://mui.com/api/css-baseline/)
 */
const CssBaseline = $.component(function CssBaseline({ props }) {
  const theme = useTheme();
  return <GlobalStyles styles={styles(theme, props.enableColorScheme)} />;
});

export default CssBaseline;
