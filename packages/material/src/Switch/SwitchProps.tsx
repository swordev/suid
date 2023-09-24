import { OverrideProps } from "../OverridableComponent";
import SwitchBaseProps from "../internal/SwitchBaseProps";
import { Theme } from "../styles";
import { SwitchClasses } from "./switchClasses";
import { SxProps } from "@suid/system";
import { ElementType, OverridableStringUnion } from "@suid/types";
import { JSXElement } from "solid-js";

export interface SwitchPropsSizeOverrides {}
export interface SwitchPropsColorOverrides {}

export interface SwitchTypeMap<P = {}, D extends ElementType = "div"> {
  name: "MuiSwitch";
  defaultPropNames: "color" | "size";
  selfProps: {
    /**
     * The icon to display when the component is checked.
     */
    checkedIcon?: JSXElement;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<SwitchClasses>;
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
      SwitchPropsColorOverrides
    >;
    /**
     * If `true`, the component is disabled.
     */
    disabled?: boolean;
    /**
     * The icon to display when the component is unchecked.
     */
    icon?: JSXElement;
    /**
     * The size of the component.
     * `small` is equivalent to the dense switch styling.
     * @default 'medium'
     */
    size?: OverridableStringUnion<"small" | "medium", SwitchPropsSizeOverrides>;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
    /**
     * The value of the component. The DOM API casts this to a string.
     * The browser uses "on" as the default value.
     */
    value?: unknown;
  };
  props: P &
    SwitchTypeMap["selfProps"] &
    Omit<SwitchBaseProps, "checkedIcon" | "color" | "icon">;
  defaultComponent: D;
}

export type SwitchProps<
  D extends ElementType = SwitchTypeMap["defaultComponent"],
  P = {},
> = OverrideProps<SwitchTypeMap<P, D>, D>;

export default SwitchProps;
