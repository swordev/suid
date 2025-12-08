import { ButtonBaseTypeMap } from "../ButtonBase/ButtonBaseProps";
import { AccordionSummaryClasses } from "./accordionSummaryClasses";
import { OverrideProps, ElementType } from "@suid/types";
import { JSXElement } from "solid-js";

export interface AccordionSummaryOwnProps {
  /**
   * The content of the component.
   */
  children?: JSXElement;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<AccordionSummaryClasses>;
  /**
   * The icon to display as the expand indicator.
   */
  expandIcon?: JSXElement;
}

export interface AccordionSummaryTypeMap<
  P = {},
  D extends ElementType = "div",
> {
  name: "MuiAccordionSummary";
  defaultPropNames: never;
  selfProps: AccordionSummaryOwnProps;
  props: P &
    AccordionSummaryOwnProps &
    Omit<ButtonBaseTypeMap["props"], "component">;
  defaultComponent: D;
}

export type AccordionSummaryProps<
  D extends ElementType = AccordionSummaryTypeMap["defaultComponent"],
  P = {},
> = OverrideProps<AccordionSummaryTypeMap<P, D>, D>;
