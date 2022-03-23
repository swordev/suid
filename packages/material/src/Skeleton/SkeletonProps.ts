import { Theme } from "..";
import { OverrideProps } from "../OverridableComponent";
import { SkeletonClasses } from "./skeletonClasses";
import { SxProps } from "@suid/system";
import { ElementType, OverridableStringUnion } from "@suid/types";
import { JSXElement } from "solid-js";

export interface SkeletonPropsVariantOverrides {}

export interface SkeletonTypeMap<P = {}, D extends ElementType = "span"> {
  name: "MuiSkeleton";
  defaultPropNames: "animation" | "variant";
  selfProps: {
    /**
     * The animation.
     * If `false` the animation effect is disabled.
     * @default 'pulse'
     */
    animation?: "pulse" | "wave" | false;
    /**
     * Optional children to infer width and height from.
     */
    children?: JSXElement;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<SkeletonClasses>;
    /**
     * Height of the skeleton.
     * Useful when you don't want to adapt the skeleton to a text element but for instance a card.
     */
    height?: number | string;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
    /**
     * The type of content that will be rendered.
     * @default 'text'
     */
    variant?: OverridableStringUnion<
      "text" | "rectangular" | "circular",
      SkeletonPropsVariantOverrides
    >;
    /**
     * Width of the skeleton.
     * Useful when the skeleton is inside an inline element with no width of its own.
     */
    width?: number | string;
  };
  props: P & SkeletonTypeMap["selfProps"];
  defaultComponent: D;
}

export type SkeletonProps<
  D extends ElementType = SkeletonTypeMap["defaultComponent"],
  P = {}
> = OverrideProps<SkeletonTypeMap<P, D>, D>;

export default SkeletonProps;
