import { Theme } from "../styles";
import { ToggleButtonGroupClasses } from "./toggleButtonGroupClasses";
import { SxProps } from "@suid/system";
import {
  ElementType,
  EventParam,
  OverridableStringUnion,
  OverrideProps,
} from "@suid/types";
import { JSXElement } from "solid-js";

export interface ToggleButtonGroupPropsSizeOverrides {}

export interface ToggleButtonGroupPropsColorOverrides {}

export type ToggleButtonGroupTypeMap<
  P = {},
  D extends ElementType = "div",
  V = any
> = {
  name: "MuiToggleButtonGroup";
  defaultPropNames:
    | "color"
    | "exclusive"
    | "disabled"
    | "fullWidth"
    | "orientation"
    | "size";
  selfProps: {
    /**
     * The content of the component.
     */
    children?: JSXElement;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<ToggleButtonGroupClasses>;
    /**
     * The color of a button when it is selected.
     * @default 'standard'
     */
    color?: OverridableStringUnion<
      | "standard"
      | "primary"
      | "secondary"
      | "error"
      | "info"
      | "success"
      | "warning",
      ToggleButtonGroupPropsColorOverrides
    >;
    /**
     * If `true`, only allow one of the child ToggleButton values to be selected.
     * @default false
     */
    exclusive?: boolean;
    /**
     * If `true`, the component is disabled. This implies that all ToggleButton children will be disabled.
     * @default false
     */
    disabled?: boolean;
    /**
     * If `true`, the button group will take up the full width of its container.
     * @default false
     */
    fullWidth?: boolean;
    /**
     * Callback fired when the value changes.
     *
     * @param {EventParam<HTMLElement, MouseEvent>} event The event source of the callback.
     * @param {any} value of the selected buttons. When `exclusive` is true
     * this is a single value; when false an array of selected values. If no value
     * is selected and `exclusive` is true the value is null; when false an empty array.
     */
    onChange?: (event: EventParam<HTMLElement, MouseEvent>, value: V) => void;
    /**
     * The component orientation (layout flow direction).
     * @default 'horizontal'
     */
    orientation?: "horizontal" | "vertical";
    /**
     * The size of the component.
     * @default 'medium'
     */
    size?: OverridableStringUnion<
      "small" | "medium" | "large",
      ToggleButtonGroupPropsSizeOverrides
    >;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
    /**
     * The currently selected value within the group or an array of selected
     * values when `exclusive` is false.
     *
     * The value must have reference equality with the option in order to be selected.
     */
    value?: V;
  };
  props: P & ToggleButtonGroupTypeMap["selfProps"];
  defaultComponent: D;
};

export type ToggleButtonGroupProps<
  D extends ElementType = ToggleButtonGroupTypeMap["defaultComponent"],
  P = {},
  V = unknown
> = OverrideProps<ToggleButtonGroupTypeMap<P, D, V>, D>;
