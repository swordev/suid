import { PropTypes, Theme } from "..";
import { ExtendButtonBaseTypeMap } from "../ButtonBase";
import { FabClasses } from "./fabClasses";
import { SxProps } from "@suid/system";
import { OverridableStringUnion } from "@suid/types";
import * as ST from "@suid/types";
import { JSXElement } from "solid-js";

export interface FabPropsVariantOverrides {}

export interface FabPropsSizeOverrides {}

export interface FabPropsColorOverrides {}
export type FabTypeMap<P = {}, D extends ST.ElementType = "button"> = {
  name: "MuiFab";
  defaultPropNames:
    | "color"
    | "disabled"
    | "disableFocusRipple"
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
    classes?: Partial<FabClasses>;

    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     * @default 'default'
     */
    color?: OverridableStringUnion<
      PropTypes.Color | "success" | "error" | "info" | "warning",
      FabPropsColorOverrides
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
     * If `true`, the ripple effect is disabled.
     */
    disableRipple?: boolean;

    /**
     * The URL to link to when the button is clicked.
     * If defined, an `a` element will be used as the root node.
     */
    href?: string;

    /**
     * The size of the component.
     * `small` is equivalent to the dense button styling.
     * @default 'large'
     */
    size?: OverridableStringUnion<
      "small" | "medium" | "large",
      FabPropsSizeOverrides
    >;

    /**
     * The variant to use.
     * @default 'circular'
     */
    variant?: OverridableStringUnion<
      "circular" | "extended",
      FabPropsVariantOverrides
    >;

    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
  };
} & ExtendButtonBaseTypeMap<{
  props: P & FabTypeMap["selfProps"];
  defaultComponent: D;
}>;

export type FabProps<
  D extends ST.ElementType = FabTypeMap["defaultComponent"],
  P = {}
> = ST.OverrideProps<FabTypeMap<P, D>, D>;

export default FabProps;
