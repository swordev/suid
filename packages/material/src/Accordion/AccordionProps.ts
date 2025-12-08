import { PaperProps } from "../Paper/PaperProps";
import { AccordionClasses } from "./accordionClasses";
import { OverrideProps, ElementType, ChangeEventHandler } from "@suid/types";
import { JSXElement } from "solid-js";

export interface AccordionOwnProps {
  /**
   * The content of the component.
   */
  children: JSXElement;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<AccordionClasses>;
  /**
   * If `true`, expands the accordion by default.
   * @default false
   */
  defaultExpanded?: boolean;
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * If `true`, it removes the margin between two expanded accordion items and the increase of height.
   * @default false
   */
  disableGutters?: boolean;
  /**
   * If `true`, expands the accordion, otherwise collapse it.
   * Setting this prop enables control over the accordion.
   */
  expanded?: boolean;
  /**
   * Callback fired when the expand/collapse state is changed.
   *
   * @param {React.SyntheticEvent} event The event source of the callback. **Warning**: This is a generic event not a change event.
   * @param {boolean} expanded The `expanded` state of the accordion.
   */
  onChange?: ChangeEventHandler<HTMLDivElement, boolean>;
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square?: boolean;
}

export interface AccordionTypeMap<P = {}, D extends ElementType = "div"> {
  name: "MuiAccordion";
  defaultPropNames:
    | "defaultExpanded"
    | "disabled"
    | "disableGutters"
    | "square";
  selfProps: AccordionOwnProps;
  props: P & AccordionOwnProps & Omit<PaperProps, "component" | "onChange">;
  defaultComponent: D;
}

export type AccordionProps<
  D extends ElementType = AccordionTypeMap["defaultComponent"],
  P = {},
> = OverrideProps<AccordionTypeMap<P, D>, D>;
