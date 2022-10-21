import type { PropTypes } from "..";
import { PaperProps } from "../Paper";
import { Theme } from "../styles";
import { OverrideProps } from "./../OverridableComponent";
import { AppBarClasses } from "./appBarClasses";
import SxProps from "@suid/system/sxProps";
import {
  DistributiveOmit,
  ElementType,
  OverridableStringUnion,
} from "@suid/types";

export interface AppBarPropsColorOverrides {}

export interface AppBarTypeMap<P = {}, D extends ElementType = "header"> {
  name: "MuiAppBar";
  defaultPropNames: "color" | "enableColorOnDark" | "position";
  selfProps: {
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<AppBarClasses>;
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     * @default 'primary'
     */
    color?: OverridableStringUnion<
      PropTypes.Color | "transparent",
      AppBarPropsColorOverrides
    >;
    /**
     * If true, the `color` prop is applied in dark mode.
     * @default false
     */
    enableColorOnDark?: boolean;
    /**
     * The positioning type. The behavior of the different options is described
     * [in the MDN web docs](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning).
     * Note: `sticky` is not universally supported and will fall back to `static` when unavailable.
     * @default 'fixed'
     */
    position?: "fixed" | "absolute" | "sticky" | "static" | "relative";
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
  };
  props: P &
    DistributiveOmit<PaperProps, "position" | "color" | "classes"> &
    AppBarTypeMap["selfProps"];
  defaultComponent: D;
}

export type AppBarProps<
  D extends ElementType = AppBarTypeMap["defaultComponent"],
  P = {}
> = OverrideProps<AppBarTypeMap<P, D>, D>;

export default AppBarProps;
