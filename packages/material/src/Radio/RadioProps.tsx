import SwitchBaseProps from "../internal/SwitchBaseProps";
import { Theme } from "../styles";
import { RadioClasses } from "./radioClasses";
import { SxProps } from "@suid/system";
import { OverridableStringUnion, OverrideProps } from "@suid/types";
import * as ST from "@suid/types";
import { JSXElement } from "solid-js";

export interface RadioPropsSizeOverrides {}

export interface RadioPropsColorOverrides {}
export type RadioTypeMap<P = {}, D extends ST.ElementType = "div"> = {
  name: "MuiRadio";
  defaultPropNames: "checkedIcon" | "color" | "icon" | "size";
  selfProps: {
    /**
     * The icon to display when the component is checked.
     * @default <RadioButtonIcon checked />
     */
    checkedIcon?: JSXElement | (() => JSXElement);

    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<RadioClasses>;

    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     * @default 'primary'
     */
    color?: OverridableStringUnion<
      | "primary"
      | "secondary"
      | "error"
      | "info"
      | "success"
      | "warning"
      | "default",
      RadioPropsColorOverrides
    >;

    /**
     * If `true`, the component is disabled.
     */
    disabled?: boolean;

    /**
     * The icon to display when the component is unchecked.
     * @default <RadioButtonIcon />
     */
    icon?: JSXElement | (() => JSXElement);

    /**
     * The size of the component.
     * `small` is equivalent to the dense radio styling.
     * @default 'medium'
     */
    size?: OverridableStringUnion<"small" | "medium", RadioPropsSizeOverrides>;

    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
  };
  props: P &
    RadioTypeMap["selfProps"] &
    Omit<SwitchBaseProps, "checkedIcon" | "color" | "icon" | "type">;
  defaultComponent: D;
};

export type RadioProps<
  D extends ST.ElementType = RadioTypeMap["defaultComponent"],
  P = {}
> = OverrideProps<RadioTypeMap<P, D>, D>;

export default RadioProps;
