import { Theme } from "../styles";
import { CardActionsClasses } from "./cardActionsClasses";
import { SxProps } from "@suid/system";
import { ElementType, OverrideProps } from "@suid/types";
import { JSXElement } from "solid-js";

export interface CardActionsTypeMap<P = {}, D extends ElementType = "div"> {
  name: "MuiActions";
  defaultPropNames: "disableSpacing";
  selfProps: {
    /**
     * The content of the component.
     */
    children?: JSXElement;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<CardActionsClasses>;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
    /**
     * If `true`, the actions do not have additional margin.
     * @default false
     */
    disableSpacing?: boolean;
  };
  props: P & CardActionsTypeMap["selfProps"];
  defaultComponent: D;
}

export type CardActionsProps<
  D extends ElementType = CardActionsTypeMap["defaultComponent"],
  P = {}
> = OverrideProps<CardActionsTypeMap<P, D>, D>;

export default CardActionsProps;
