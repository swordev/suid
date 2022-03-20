import { Theme } from "..";
import { OverrideProps } from "../OverridableComponent";
import { DividerClasses } from "./dividerClasses";
import SxProps from "@suid/system/sxProps";
import { ElementType, OverridableStringUnion } from "@suid/types";
import { JSXElement } from "solid-js";

export interface DividerPropsVariantOverrides {}

export interface DividerTypeMap<P = {}, D extends ElementType = "hr"> {
  name: "MuiDivider";
  defaultPropNames:
    | "absolute"
    | "flexItem"
    | "light"
    | "orientation"
    | "textAlign"
    | "variant";
  selfProps: {
    /**
     * Absolutely position the element.
     * @default false
     */
    absolute?: boolean;
    /**
     * The content of the component.
     */
    children?: JSXElement;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<DividerClasses>;
    /**
     * If `true`, a vertical divider will have the correct height when used in flex container.
     * (By default, a vertical divider will have a calculated height of `0px` if it is the child of a flex container.)
     * @default false
     */
    flexItem?: boolean;
    /**
     * If `true`, the divider will have a lighter color.
     * @default false
     */
    light?: boolean;
    /**
     * The component orientation.
     * @default 'horizontal'
     */
    orientation?: "horizontal" | "vertical";
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
    /**
     * The text alignment.
     * @default 'center'
     */
    textAlign?: "center" | "right" | "left";
    /**
     * The variant to use.
     * @default 'fullWidth'
     */
    variant?: OverridableStringUnion<
      "fullWidth" | "inset" | "middle",
      DividerPropsVariantOverrides
    >;
  };
  props: P & DividerTypeMap["selfProps"];
  defaultComponent: D;
}

export type DividerProps<
  D extends ElementType = DividerTypeMap["defaultComponent"],
  P = {}
> = OverrideProps<DividerTypeMap<P, D>, D>;

export default DividerProps;
