import generateUtilityClass from "@suid/base/generateUtilityClass";
import generateUtilityClasses from "@suid/base/generateUtilityClasses";

export interface PopoverClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the Paper component. */
  paper: string;
}

export type PopoverClassKey = keyof PopoverClasses;

export function getPopoverUtilityClass(slot: string): string {
  return generateUtilityClass("MuiPopover", slot);
}

const popoverClasses: PopoverClasses = generateUtilityClasses("MuiPopover", [
  "root",
  "paper",
]);

export default popoverClasses;
