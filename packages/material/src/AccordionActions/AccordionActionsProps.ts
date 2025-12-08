import { AccordionActionsClasses } from "./accordionActionsClasses";
import { OverrideProps, ElementType } from "@suid/types";
import { JSXElement } from "solid-js";

export interface AccordionActionsOwnProps {
  /**
   * The content of the component.
   */
  children?: JSXElement;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<AccordionActionsClasses>;
  /**
   * If `true`, the actions do not have additional margin.
   * @default false
   */
  disableSpacing?: boolean;
}

export interface AccordionActionsTypeMap<
  P = {},
  D extends ElementType = "div",
> {
  name: "MuiAccordionActions";
  defaultPropNames: "disableSpacing";
  selfProps: AccordionActionsOwnProps;
  props: P & AccordionActionsOwnProps;
  defaultComponent: D;
}

export type AccordionActionsProps<
  D extends ElementType = AccordionActionsTypeMap["defaultComponent"],
  P = {},
> = OverrideProps<AccordionActionsTypeMap<P, D>, D>;
