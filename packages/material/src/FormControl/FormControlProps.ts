import { OverrideProps } from "../OverridableComponent";
import { Theme } from "../styles";
import { FormControlClasses } from "./formControlClasses";
import { SxProps } from "@suid/system";
import { ElementType, OverridableStringUnion } from "@suid/types";
import { JSXElement } from "solid-js";

export interface FormControlPropsSizeOverrides {}
export interface FormControlPropsColorOverrides {}

export interface FormControlTypeMap<P = {}, D extends ElementType = "div"> {
  name: "MuiFormControl";
  defaultPropNames:
    | "color"
    | "disabled"
    | "error"
    | "fullWidth"
    | "margin"
    | "required"
    | "hiddenLabel"
    | "size"
    | "variant";
  selfProps: {
    /**
     * The content of the component.
     */
    children?: JSXElement;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<FormControlClasses>;
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     * @default 'primary'
     */
    color?: OverridableStringUnion<
      "primary" | "secondary" | "error" | "info" | "success" | "warning",
      FormControlPropsColorOverrides
    >;
    /**
     * If `true`, the label, input and helper text should be displayed in a disabled state.
     * @default false
     */
    disabled?: boolean;
    /**
     * If `true`, the label is displayed in an error state.
     * @default false
     */
    error?: boolean;
    /**
     * If `true`, the component will take up the full width of its container.
     * @default false
     */
    fullWidth?: boolean;
    /**
     * If `true`, the component is displayed in focused state.
     */
    focused?: boolean;
    /**
     * If `true`, the label is hidden.
     * This is used to increase density for a `FilledInput`.
     * Be sure to add `aria-label` to the `input` element.
     * @default false
     */
    hiddenLabel?: boolean;
    /**
     * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
     * @default 'none'
     */
    margin?: "dense" | "normal" | "none";
    /**
     * If `true`, the label will indicate that the `input` is required.
     * @default false
     */
    required?: boolean;
    /**
     * The size of the component.
     * @default 'medium'
     */
    size?: OverridableStringUnion<
      "small" | "medium",
      FormControlPropsSizeOverrides
    >;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
    /**
     * The variant to use.
     * @default 'outlined'
     */
    variant?: "standard" | "outlined" | "filled";
  };
  props: P & FormControlTypeMap["selfProps"];
  defaultComponent: D;
}

export type FormControlProps<
  D extends ElementType = FormControlTypeMap["defaultComponent"],
  P = {}
> = OverrideProps<FormControlTypeMap<P, D>, D>;

export default FormControlProps;
