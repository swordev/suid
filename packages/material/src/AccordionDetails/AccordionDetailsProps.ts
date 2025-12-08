import { AccordionDetailsClasses } from "./accordionDetailsClasses";
import { OverrideProps, ElementType } from "@suid/types";
import { JSXElement } from "solid-js";

export interface AccordionDetailsOwnProps {
  /**
   * The content of the component.
   */
  children?: JSXElement;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<AccordionDetailsClasses>;
}

export interface AccordionDetailsTypeMap<
  P = {},
  D extends ElementType = "div",
> {
  name: "MuiAccordionDetails";
  defaultPropNames: never;
  selfProps: AccordionDetailsOwnProps;
  props: P & AccordionDetailsOwnProps;
  defaultComponent: D;
}

export type AccordionDetailsProps<
  D extends ElementType = AccordionDetailsTypeMap["defaultComponent"],
  P = {},
> = OverrideProps<AccordionDetailsTypeMap<P, D>, D>;
