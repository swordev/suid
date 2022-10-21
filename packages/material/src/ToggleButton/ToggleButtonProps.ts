import { ButtonBaseTypeMap } from "../ButtonBase";
import { OverrideProps } from "../OverridableComponent";
import { Theme } from "../styles";
import { ToggleButtonClasses } from "./toggleButtonClasses";
import { SxProps } from "@suid/system";
import { ElementType, EventParam, OverridableStringUnion } from "@suid/types";
import { JSXElement } from "solid-js";

export interface ToggleButtonPropsSizeOverrides {}

export interface ToggleButtonPropsColorOverrides {}

export type ToggleButtonTypeMap<P = {}, D extends ElementType = "button"> = {
  name: "MuiToggleButton";
  defaultPropNames:
    | "color"
    | "disabled"
    | "disableFocusRipple"
    | "fullWidth"
    | "size";
  selfProps: {
    /**
     * The content of the component.
     */
    children?: JSXElement;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<ToggleButtonClasses>;
    /**
     * The color of the button when it is in an active state.
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
      ToggleButtonPropsColorOverrides
    >;
    /**
     * If `true`, the component is disabled.
     * @default false
     */
    disabled?: boolean;
    /**
     * If `true`, the  keyboard focus ripple is disabled.
     * @default false
     */
    disableFocusRipple?: boolean;
    /**
     * If `true`, the button will take up the full width of its container.
     * @default false
     */
    fullWidth?: boolean;
    /**
     * Callback fired when the state changes.
     *
     * @param {EventParam<HTMLElement, MouseEvent>} event The event source of the callback.
     * @param {any} value of the selected button.
     */
    onChange?: (event: EventParam<HTMLElement, MouseEvent>, value: any) => void;
    /**
     * Callback fired when the button is clicked.
     *
     * @param {EventParam<HTMLElement, MouseEvent>} event The event source of the callback.
     * @param {any} value of the selected button.
     */
    onClick?: (event: EventParam<HTMLElement, MouseEvent>, value: any) => void;
    /**
     * If `true`, the button is rendered in an active state.
     */
    selected?: boolean;
    /**
     * The size of the component.
     * The prop defaults to the value inherited from the parent ToggleButtonGroup component.
     * @default 'medium'
     */
    size?: OverridableStringUnion<
      "small" | "medium" | "large",
      ToggleButtonPropsSizeOverrides
    >;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
    /**
     * The value to associate with the button when selected in a
     * ToggleButtonGroup.
     */
    value: NonNullable<unknown>;
  };
  props: P &
    ToggleButtonTypeMap["selfProps"] &
    Omit<ButtonBaseTypeMap["props"], "classes">;
  defaultComponent: D;
};

export type ToggleButtonProps<
  D extends ElementType = ToggleButtonTypeMap["defaultComponent"],
  P = {}
> = OverrideProps<ToggleButtonTypeMap<P, D>, D>;
