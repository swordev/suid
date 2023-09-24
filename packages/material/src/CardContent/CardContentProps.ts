import { OverrideProps } from "../OverridableComponent";
import { Theme } from "../styles";
import { CardContentClasses } from "./cardContentClasses";
import { SxProps } from "@suid/system";
import { ElementType } from "@suid/types";
import { JSXElement } from "solid-js";

export interface CardContentTypeMap<P = {}, D extends ElementType = "div"> {
  name: "MuiContent";
  selfProps: {
    /**
     * The content of the component.
     */
    children?: JSXElement;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<CardContentClasses>;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
  };
  props: P & CardContentTypeMap["selfProps"];
  defaultComponent: D;
}

export type CardContentProps<
  D extends ElementType = CardContentTypeMap["defaultComponent"],
  P = {},
> = OverrideProps<CardContentTypeMap<P, D>, D>;

export default CardContentProps;
