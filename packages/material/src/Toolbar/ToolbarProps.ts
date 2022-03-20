import { Theme } from "..";
import { OverrideProps } from "../OverridableComponent";
import { ToolbarClasses } from "./toolbarClasses";
import { SxProps } from "@suid/system";
import { ElementType, OverridableStringUnion } from "@suid/types";
import { JSXElement } from "solid-js";

export interface ToolbarPropsVariantOverrides {}

export interface ToolbarTypeMap<P = {}, D extends ElementType = "div"> {
  name: "MuiToolbar";
  defaultPropNames: "disableGutters" | "variant";
  selfProps: {
    /**
     * The Toolbar children, usually a mixture of `IconButton`, `Button` and `Typography`.
     * The Toolbar is a flex container, allowing flex item properites to be used to lay out the children.
     */
    children?: JSXElement;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<ToolbarClasses>;
    /**
     * If `true`, disables gutter padding.
     * @default false
     */
    disableGutters?: boolean;
    /**
     * The variant to use.
     * @default 'regular'
     */
    variant?: OverridableStringUnion<
      "regular" | "dense",
      ToolbarPropsVariantOverrides
    >;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
  };
  props: P & ToolbarTypeMap["selfProps"];
  defaultComponent: D;
}

export type ToolbarProps<
  D extends ElementType = ToolbarTypeMap["defaultComponent"],
  P = {}
> = OverrideProps<ToolbarTypeMap<P, D>, D>;

export default ToolbarProps;
