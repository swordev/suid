import { JSXElement } from "solid-js";

export interface CssBaselineTypeMap<P = {}> {
  name: "MuiCssBaseline";
  defaultPropNames: "enableColorScheme";
  selfProps: {
    /**
     * You can wrap a node.
     */
    children?: JSXElement;
    /**
     * Enable `color-scheme` CSS property to use `theme.palette.mode`.
     * For more details, check out https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme
     * For browser support, check out https://caniuse.com/?search=color-scheme
     * @default false
     */
    enableColorScheme?: boolean;
  };
  props: P & CssBaselineTypeMap["selfProps"];
}

export type CssBaselineProps<P = {}> = CssBaselineTypeMap<P>;

export default CssBaselineProps;
