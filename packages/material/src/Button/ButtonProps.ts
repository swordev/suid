import { ButtonBaseTypeMap, ExtendButtonBaseTypeMap } from "../ButtonBase";
import { OverrideProps, OverridableComponent } from "../OverridableComponent";
import { Theme } from "../styles";
import { ButtonClasses } from "./buttonClasses";
import SxProps from "@suid/system/sxProps";
import {
  DistributiveOmit,
  ElementType,
  OverridableStringUnion,
  OverridableTypeMap,
} from "@suid/types";
import { JSX, JSXElement } from "solid-js";

export interface ButtonPropsVariantOverrides {}

export interface ButtonPropsColorOverrides {}

export interface ButtonPropsSizeOverrides {}

export type ButtonTypeMap<P = {}, D extends ElementType = "button"> = {
  name: "MuiButton";
  defaultPropNames:
    | "color"
    | "disabled"
    | "disableElevation"
    | "disableFocusRipple"
    | "fullWidth"
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
    classes?: Partial<ButtonClasses>;
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     * @default 'primary'
     */
    color?: OverridableStringUnion<
      | "inherit"
      | "primary"
      | "secondary"
      | "success"
      | "error"
      | "info"
      | "warning",
      ButtonPropsColorOverrides
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
     * If `true`, the  keyboard focus ripple is disabled.
     * @default false
     */
    disableFocusRipple?: boolean;
    /**
     * Element placed after the children.
     */
    endIcon?: JSXElement;
    /**
     * If `true`, the button will take up the full width of its container.
     * @default false
     */
    fullWidth?: boolean;
    /**
     * The URL to link to when the button is clicked.
     * If defined, an `a` element will be used as the root node.
     */
    href?: string;
    /**
     * The size of the component.
     * `small` is equivalent to the dense button styling.
     * @default 'medium'
     */
    size?: OverridableStringUnion<
      "small" | "medium" | "large",
      ButtonPropsSizeOverrides
    >;
    /**
     * Element placed before the children.
     */
    startIcon?: JSXElement;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
    /**
     * The variant to use.
     * @default 'text'
     */
    variant?: OverridableStringUnion<
      "text" | "outlined" | "contained",
      ButtonPropsVariantOverrides
    >;
  };
  props: P &
    ButtonTypeMap["selfProps"] &
    Omit<ButtonBaseTypeMap["props"], "classes">;
  defaultComponent: D;
};

/**
 * utility to create component types that inherit props from ButtonBase.
 * This component has an additional overload if the `href` prop is set which
 * can make extension quite tricky
 */
export interface ExtendButtonTypeMap<M extends OverridableTypeMap> {
  props: M["props"] &
    (M["props"] extends { classes?: Record<string, string> }
      ? DistributiveOmit<ButtonTypeMap["props"], "classes">
      : ButtonTypeMap["props"]);
  defaultComponent: M["defaultComponent"];
}

export type ExtendButton<M extends OverridableTypeMap> = ((
  props: { href: string } & OverrideProps<ExtendButtonBaseTypeMap<M>, "a">
) => JSX.Element) &
  OverridableComponent<ExtendButtonBaseTypeMap<M>>;

export type ButtonProps<
  D extends ElementType = ButtonTypeMap["defaultComponent"],
  P = {},
> = OverrideProps<ButtonTypeMap<P, D>, D>;

export default ButtonProps;
