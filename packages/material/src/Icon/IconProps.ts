import { OverrideProps } from "../OverridableComponent";
import { Theme } from "../styles";
import { IconClasses } from "./iconClasses";
import { SxProps } from "@suid/system";
import { ElementType, OverridableStringUnion } from "@suid/types";
import { JSXElement } from "solid-js";

export interface IconPropsSizeOverrides {}

export interface IconPropsColorOverrides {}

export interface IconTypeMap<P = {}, D extends ElementType = "span"> {
  name: "MuiIcon";
  defaultPropNames: "baseClassName" | "color" | "fontSize";
  selfProps: {
    /**
     * The base class applied to the icon. Defaults to 'material-icons', but can be changed to any
     * other base class that suits the icon font you're using (e.g. material-icons-rounded, fas, etc).
     * @default 'material-icons'
     */
    baseClassName?: string;
    /**
     * The name of the icon font ligature.
     */
    children?: JSXElement;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<IconClasses>;
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     * @default 'inherit'
     */
    color?: OverridableStringUnion<
      | "inherit"
      | "action"
      | "disabled"
      | "primary"
      | "secondary"
      | "error"
      | "info"
      | "success"
      | "warning",
      IconPropsColorOverrides
    >;
    /**
     * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
     * @default 'medium'
     */
    fontSize?: OverridableStringUnion<
      "inherit" | "large" | "medium" | "small",
      IconPropsSizeOverrides
    >;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
  };
  props: P & IconTypeMap["selfProps"];
  defaultComponent: D;
}

export type IconProps<
  D extends ElementType = IconTypeMap["defaultComponent"],
  P = {},
> = OverrideProps<IconTypeMap<P, D>, D>;

export default IconProps;
