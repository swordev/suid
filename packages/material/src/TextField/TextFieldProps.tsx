import { FilledInputProps } from "../FilledInput";
import { FormControlTypeMap } from "../FormControl";
import { FormHelperTextProps } from "../FormHelperText";
import { InputProps as StandardInputProps } from "../Input";
import { InputBaseProps } from "../InputBase";
import { InputLabelProps } from "../InputLabel";
import { OutlinedInputProps } from "../OutlinedInput";
//import { SelectProps } from "../Select";
import { Theme } from "../styles";
import { TextFieldClasses } from "./textFieldClasses";
import { SxProps } from "@suid/system";
import {
  ComponentProps,
  ElementType,
  OverridableStringUnion,
  OverrideProps,
  Ref,
} from "@suid/types";
import { JSXElement } from "solid-js";

export interface TextFieldPropsColorOverrides {}
export interface TextFieldPropsSizeOverrides {}

export interface StandardTextFieldProps {
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange?: StandardInputProps["onChange"];
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant?: "standard";
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](/api/filled-input/),
   * [`OutlinedInput`](/api/outlined-input/) or [`Input`](/api/input/)
   * component depending on the `variant` prop value.
   */
  InputProps?: Partial<StandardInputProps>;
}

export interface FilledTextFieldProps {
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange?: FilledInputProps["onChange"];
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: "filled";
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](/api/filled-input/),
   * [`OutlinedInput`](/api/outlined-input/) or [`Input`](/api/input/)
   * component depending on the `variant` prop value.
   */
  InputProps?: Partial<FilledInputProps>;
}

export interface OutlinedTextFieldProps {
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange?: OutlinedInputProps["onChange"];
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: "outlined";
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](/api/filled-input/),
   * [`OutlinedInput`](/api/outlined-input/) or [`Input`](/api/input/)
   * component depending on the `variant` prop value.
   */
  InputProps?: Partial<OutlinedInputProps>;
}

type TextFieldVariantsProps =
  | StandardTextFieldProps
  | FilledTextFieldProps
  | OutlinedTextFieldProps;

export interface TextFieldTypeMap<P = {}, D extends ElementType = "div"> {
  name: "MuiTextField";
  defaultPropNames: "variant" | "autoFocus" | "color" | "disabled" | "error";
  selfProps: {
    /**
     * This prop helps users to fill forms faster, especially on mobile devices.
     * The name can be confusing, as it's more like an autofill.
     * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
     */
    autoComplete?: string;
    /**
     * If `true`, the `input` element is focused during the first mount.
     * @default false
     */
    autoFocus?: boolean;
    /**
     * @ignore
     */
    children?: JSXElement;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<TextFieldClasses>;
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
      | "fullWidth"
      | "multiline"
      | "required"
      | "select",
      TextFieldPropsColorOverrides
    >;
    /**
     * The default value. Use when the component is not controlled.
     */
    defaultValue?: unknown;
    /**
     * If `true`, the component is disabled.
     * @default false
     */
    disabled?: boolean;
    /**
     * If `true`, the label is displayed in an error state.
     * @default false
     */
    error?: boolean;
    /**
     * Props applied to the [`FormHelperText`](/api/form-helper-text/) element.
     */
    FormHelperTextProps?: Partial<FormHelperTextProps>;
    /**
     * If `true`, the input will take up the full width of its container.
     * @default false
     */
    fullWidth?: boolean;
    /**
     * The helper text content.
     */
    helperText?: JSXElement;
    /**
     * The id of the `input` element.
     * Use this prop to make `label` and `helperText` accessible for screen readers.
     */
    id?: string;
    /**
     * Props applied to the [`InputLabel`](/api/input-label/) element.
     * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
     */
    InputLabelProps?: Partial<InputLabelProps>;
    /**
     * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
     */
    inputProps?: InputBaseProps["inputProps"];
    /**
     * Pass a ref to the `input` element.
     */
    inputRef?: Ref<HTMLInputElement>;
    /**
     * The label content.
     */
    label?: JSXElement;
    /**
     * If `true`, a `textarea` element is rendered instead of an input.
     * @default false
     */
    multiline?: boolean;
    /**
     * Name attribute of the `input` element.
     */
    name?: string;
    onBlur?: InputBaseProps["onBlur"];
    onFocus?: StandardInputProps["onFocus"];
    /**
     * The short hint displayed in the `input` before the user enters a value.
     */
    placeholder?: string;
    /**
     * If `true`, the label is displayed as required and the `input` element is required.
     * @default false
     */
    required?: boolean;
    /**
     * Number of rows to display when multiline option is set to true.
     */
    rows?: string | number;
    /**
     * Maximum number of rows to display when multiline option is set to true.
     */
    maxRows?: string | number;
    /**
     * Minimum number of rows to display when multiline option is set to true.
     */
    minRows?: string | number;
    /**
     * Render a [`Select`](/api/select/) element while passing the Input element to `Select` as `input` parameter.
     * If this option is set you must pass the options of the select as children.
     * @default false
     */
    select?: boolean;
    /**
     * Props applied to the [`Select`](/api/select/) element.
     */
    //SelectProps?: Partial<SelectProps>;
    /**
     * The size of the component.
     */
    size?: OverridableStringUnion<
      "small" | "medium",
      TextFieldPropsSizeOverrides
    >;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
    /**
     * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
     */
    type?: ComponentProps<"input">["type"];
    /**
     * The value of the `input` element, required for a controlled component.
     */
    value?: unknown;
  } & TextFieldVariantsProps;
  props: P & FormControlTypeMap["props"] & TextFieldTypeMap["selfProps"];
  defaultComponent: D;
}

export type TextFieldProps<
  D extends ElementType = TextFieldTypeMap["defaultComponent"],
  P = {}
> = OverrideProps<TextFieldTypeMap<P, D>, D>;

export default TextFieldProps;
