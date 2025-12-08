import { generateUtilityClass, generateUtilityClasses } from "@suid/base";

export interface AccordionClasses {
  /** Styles applied to the root element. */
  root: string;
  /** State class applied to the root element if `rounded={true}`. */
  rounded: string;
  /** State class applied to the root element if `expanded={true}`. */
  expanded: string;
  /** State class applied to the root element if `disabled={true}`. */
  disabled: string;
  /** State class applied to the root element unless `disableGutters={true}`. */
  gutters: string;
  /** Styles applied to the region element, the container of the children. */
  region: string;
  /** Styles applied to the heading element. */
  heading: string;
}

export type AccordionClassKey = keyof AccordionClasses;

export function getAccordionUtilityClass(slot: string): string {
  return generateUtilityClass("MuiAccordion", slot);
}

const accordionClasses: AccordionClasses = generateUtilityClasses(
  "MuiAccordion",
  ["root", "rounded", "expanded", "disabled", "gutters", "region", "heading"]
);

export default accordionClasses;
