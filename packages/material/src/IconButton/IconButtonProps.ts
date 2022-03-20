import { Theme } from "..";
import { ButtonBaseTypeMap } from "../ButtonBase";
import { OverrideProps } from "../OverridableComponent";
import { IconButtonClasses } from "./iconButtonClasses";
import { SxProps } from "@suid/system";
import { ElementType, OverridableStringUnion } from "@suid/types";
import { JSXElement } from "solid-js";

export interface IconButtonPropsColorOverrides {}

export interface IconButtonPropsSizeOverrides {}

export interface IconButtonTypeMap<P = {}, D extends ElementType = "button"> {
  name: "MuiIconButton";
  defaultPropNames:
    | "color"
    | "disabled"
    | "disableFocusRipple"
    | "edge"
    | "size";
  selfProps: {
    /**
     * The icon to display.
     */
    children?: JSXElement;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<IconButtonClasses>;
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     * @default 'default'
     */
    color?: OverridableStringUnion<
      | "inherit"
      | "default"
      | "primary"
      | "secondary"
      | "error"
      | "info"
      | "success"
      | "warning",
      IconButtonPropsColorOverrides
    >;
    /**
     * If `true`, the component is disabled.
     * @default false
     */
    disabled?: boolean;
    /**
     * If `true`, the  keyboard focus ripple is disabled.
     * @default false
     */
    disableFocusRipple?: boolean;
    /**
     * If given, uses a negative margin to counteract the padding on one
     * side (this is often helpful for aligning the left or right
     * side of the icon with content above or below, without ruining the border
     * size and shape).
     * @default false
     */
    edge?: "start" | "end" | false;
    /**
     * The size of the component.
     * `small` is equivalent to the dense button styling.
     * @default 'medium'
     */
    size?: OverridableStringUnion<
      "small" | "medium" | "large",
      IconButtonPropsSizeOverrides
    >;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
  };
  props: P &
    Omit<ButtonBaseTypeMap["props"], "classes"> &
    IconButtonTypeMap["selfProps"];
  defaultComponent: D;
}

export type IconButtonProps<
  D extends ElementType = IconButtonTypeMap["defaultComponent"],
  P = {}
> = OverrideProps<IconButtonTypeMap<P, D>, D>;

export default IconButtonProps;
