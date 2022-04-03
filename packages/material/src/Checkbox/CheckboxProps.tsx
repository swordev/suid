import { Theme } from "..";
import { SwitchBaseProps } from "../internal/SwitchBaseProps";
import { CheckboxClasses } from "./checkboxClasses";
import { SxProps } from "@suid/system";
import { RefProp } from "@suid/system/createRef";
import { ElementType, OverridableStringUnion } from "@suid/types";
import { JSXElement } from "solid-js";

export interface CheckboxPropsSizeOverrides {}

export interface CheckboxPropsColorOverrides {}

export interface CheckboxTypeMap<P = {}, D extends ElementType = "div"> {
  name: "MuiCheckbox";
  defaultPropNames:
    | "checkedIcon"
    | "color"
    | "icon"
    | "indeterminate"
    | "indeterminateIcon"
    | "size";
  selfProps: {
    /**
     * If `true`, the component is checked.
     */
    checked?: SwitchBaseProps["checked"];
    /**
     * The icon to display when the component is checked.
     * @default <CheckBoxIcon />
     */
    checkedIcon?: JSXElement;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<CheckboxClasses>;
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
      CheckboxPropsColorOverrides
    >;
    /**
     * If `true`, the component is disabled.
     */
    disabled?: SwitchBaseProps["disabled"];
    /**
     * If `true`, the ripple effect is disabled.
     */
    disableRipple?: SwitchBaseProps["disableRipple"];
    /**
     * The icon to display when the component is unchecked.
     * @default <CheckBoxOutlineBlankIcon />
     */
    icon?: JSXElement;
    /**
     * The id of the `input` element.
     */
    id?: SwitchBaseProps["id"];
    /**
     * If `true`, the component appears indeterminate.
     * This does not set the native input element to indeterminate due
     * to inconsistent behavior across browsers.
     * However, we set a `data-indeterminate` attribute on the `input`.
     * @default false
     */
    indeterminate?: boolean;
    /**
     * The icon to display when the component is indeterminate.
     * @default <IndeterminateCheckBoxIcon />
     */
    indeterminateIcon?: JSXElement;
    /**
     * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
     */
    inputProps?: SwitchBaseProps["inputProps"];
    /**
     * Pass a ref to the `input` element.
     */
    inputRef?: RefProp<HTMLInputElement>;
    /**
     * Callback fired when the state is changed.
     *
     * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
     * You can pull out the new checked state by accessing `event.target.checked` (boolean).
     */
    onChange?: SwitchBaseProps["onChange"];
    /**
     * If `true`, the `input` element is required.
     */
    required?: SwitchBaseProps["required"];
    /**
     * The size of the component.
     * `small` is equivalent to the dense checkbox styling.
     * @default 'medium'
     */
    size?: OverridableStringUnion<
      "small" | "medium",
      CheckboxPropsSizeOverrides
    >;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
    /**
     * The value of the component. The DOM API casts this to a string.
     * The browser uses "on" as the default value.
     */
    value?: SwitchBaseProps["value"];
  };
  props: P &
    CheckboxTypeMap["selfProps"] &
    Omit<SwitchBaseProps, "checkedIcon" | "color" | "icon" | "type">;
  defaultComponent: D;
}
