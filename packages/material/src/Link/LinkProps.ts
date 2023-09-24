import { OverrideProps } from "../OverridableComponent";
import { TypographyProps } from "../Typography";
import { Theme } from "../styles";
import { LinkClasses } from "./linkClasses";
import { SxProps } from "@suid/system";
import { ElementType } from "@suid/types";
import { JSXElement } from "solid-js";

export interface LinkTypeMap<P = {}, D extends ElementType = "a"> {
  name: "MuiLink";
  defaultPropNames: "color" | "underline" | "variant";
  selfProps: {
    /**
     * The content of the component.
     */
    children?: JSXElement;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<LinkClasses>;
    /**
     * The color of the link.
     * @default 'primary'
     */
    color?: TypographyProps["color"];
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
    /**
     * `classes` prop applied to the [`Typography`](/api/typography/) element.
     */
    TypographyClasses?: TypographyProps["classes"];
    /**
     * Controls when the link should have an underline.
     * @default 'always'
     */
    underline?: "none" | "hover" | "always";
    /**
     * Applies the theme typography styles.
     * @default 'inherit'
     */
    variant?: TypographyProps["variant"];
  };
  props: P & LinkTypeMap["selfProps"];
  defaultComponent: D;
}

export type LinkProps<
  D extends ElementType = LinkTypeMap["defaultComponent"],
  P = {},
> = OverrideProps<LinkTypeMap<P, D>, D>;

export default LinkProps;
