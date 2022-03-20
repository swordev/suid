import { OverrideProps } from "../OverridableComponent";
import { Theme } from "../styles";
import { PaperClasses } from "./paperClasses";
import SxProps from "@suid/system/sxProps";
import { ElementType, OverridableStringUnion } from "@suid/types";
import { JSXElement } from "solid-js";

export interface PaperPropsVariantOverrides {}

export interface PaperTypeMap<P = {}, D extends ElementType = "div"> {
  name: "MuiPaper";
  defaultPropNames: "elevation" | "square" | "variant";
  selfProps: {
    /**
     * The content of the component.
     */
    children?: JSXElement;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<PaperClasses>;
    /**
     * Shadow depth, corresponds to `dp` in the spec.
     * It accepts values between 0 and 24 inclusive.
     * @default 1
     */
    elevation?: number;
    /**
     * If `true`, rounded corners are disabled.
     * @default false
     */
    square?: boolean;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
    /**
     * The variant to use.
     * @default 'elevation'
     */
    variant?: OverridableStringUnion<
      "elevation" | "outlined",
      PaperPropsVariantOverrides
    >;
  };
  props: P & PaperTypeMap["selfProps"];
  defaultComponent: D;
}

export type PaperProps<
  D extends ElementType = PaperTypeMap["defaultComponent"],
  P = {}
> = OverrideProps<PaperTypeMap<P, D>, D>;

export default PaperProps;
