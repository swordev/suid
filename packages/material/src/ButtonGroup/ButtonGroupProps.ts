import { OverrideProps } from "../OverridableComponent";
import { Theme } from "../styles";
import { ButtonGroupClasses } from "./buttonGroupClasses";
import { SxProps } from "@suid/system";
import { ElementType, OverridableStringUnion } from "@suid/types";
import { JSXElement } from "solid-js";

export interface ButtonGroupPropsColorOverrides {}
export interface ButtonGroupPropsVariantOverrides {}
export interface ButtonGroupPropsSizeOverrides {}

export interface ButtonGroupTypeMap<P = {}, D extends ElementType = "div"> {
  name: "MuiButtonGroup";
  defaultPropNames:
    | "color"
    | "disabled"
    | "disableElevation"
    | "disableFocusRipple"
    | "disableRipple"
    | "fullWidth"
    | "orientation"
    | "size"
    | "variant";
  selfProps: {
    /**
     * The content of the component.
     */
    children?: JSXElement;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<ButtonGroupClasses>;
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     * @default 'primary'
     */
    color?: OverridableStringUnion<
      | "inherit"
      | "primary"
      | "secondary"
      | "error"
      | "info"
      | "success"
      | "warning",
      ButtonGroupPropsColorOverrides
    >;
    /**
     * If `true`, the component is disabled.
     * @default false
     */
    disabled?: boolean;
    /**
     * If `true`, no elevation is used.
     * @default false
     */
    disableElevation?: boolean;
    /**
     * If `true`, the button keyboard focus ripple is disabled.
     * @default false
     */
    disableFocusRipple?: boolean;
    /**
     * If `true`, the button ripple effect is disabled.
     * @default false
     */
    disableRipple?: boolean;
    /**
     * If `true`, the buttons will take up the full width of its container.
     * @default false
     */
    fullWidth?: boolean;
    /**
     * The component orientation (layout flow direction).
     * @default 'horizontal'
     */
    orientation?: "vertical" | "horizontal";
    /**
     * The size of the component.
     * `small` is equivalent to the dense button styling.
     * @default 'medium'
     */
    size?: OverridableStringUnion<
      "small" | "medium" | "large",
      ButtonGroupPropsSizeOverrides
    >;
    /**
     * The variant to use.
     * @default 'outlined'
     */
    variant?: OverridableStringUnion<
      "text" | "outlined" | "contained",
      ButtonGroupPropsVariantOverrides
    >;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
  };
  props: P & ButtonGroupTypeMap["selfProps"];
  defaultComponent: D;
}

export type ButtonGroupProps<
  D extends ElementType = ButtonGroupTypeMap["defaultComponent"],
  P = {},
> = OverrideProps<ButtonGroupTypeMap<P, D>, D>;

export default ButtonGroupProps;
