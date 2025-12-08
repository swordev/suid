import { CollapseClasses } from "./collapseClasses";
import { OverrideProps } from "@suid/types";
import { ElementType } from "@suid/types";
import { JSXElement } from "solid-js";

export interface CollapseOwnProps<
  ElementType extends HTMLElement = HTMLDivElement,
> {
  /**
   * The content node to be collapsed.
   */
  children?: JSXElement;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<CollapseClasses>;
  /**
   * The width (horizontal) or height (vertical) of the container when collapsed.
   * @default '0px'
   */
  collapsedSize?: string | number;
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing?: { enter?: string; exit?: string } | string;
  /**
   * If `true`, the component will transition in.
   */
  in?: boolean;
  /**
   * The transition orientation.
   * @default 'vertical'
   */
  orientation?: "horizontal" | "vertical";
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default duration.standard
   */
  timeout?:
    | "auto"
    | number
    | { appear?: number; enter?: number; exit?: number };
  /**
   * Add a custom transition end trigger.
   */
  addEndListener?: (node: ElementType, done: () => void) => void;
  /**
   * Callback fired before the component enters.
   */
  onEnter?: () => void;
  /**
   * Callback fired when the component has entered.
   */
  onEntered?: () => void;
  /**
   * Callback fired when the component is entering.
   */
  onEntering?: () => void;
  /**
   * Callback fired before the component exits.
   */
  onExit?: () => void;
  /**
   * Callback fired when the component has exited.
   */
  onExited?: () => void;
  /**
   * Callback fired when the component is exiting.
   */
  onExiting?: () => void;
}

export interface CollapseTypeMap<P = {}, D extends ElementType = "div"> {
  name: "MuiCollapse";
  defaultPropNames: "collapsedSize" | "orientation" | "timeout";
  selfProps: CollapseOwnProps;
  props: P & CollapseOwnProps;
  defaultComponent: D;
}

export type CollapseProps<
  D extends ElementType = CollapseTypeMap["defaultComponent"],
  P = {},
> = OverrideProps<CollapseTypeMap<P, D>, D>;
