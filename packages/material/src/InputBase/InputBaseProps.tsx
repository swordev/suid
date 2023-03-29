import { Theme } from "../styles";
import { InputBaseClasses } from "./inputBaseClasses";
import { SxProps } from "@suid/system";
import {
  OverridableStringUnion,
  ElementType,
  PropsOf,
  Ref,
  OverrideProps,
  FocusEventHandler,
  ChangeEventHandler,
  KeyboardEventHandler,
} from "@suid/types";
import { Component, JSX, JSXElement } from "solid-js";

export interface InputBasePropsSizeOverrides {}

export interface InputBasePropsColorOverrides {}

export interface InputBaseComponentsPropsOverrides {}

export interface InputBaseTypeMap<P = {}, D extends ElementType = "div"> {
  name: "MuiInputBase";
  defaultPropNames:
    | "components"
    | "componentsProps"
    | "disableInjectingGlobalStyles"
    | "fullWidth"
    | "inputComponent"
    | "inputProps"
    | "multiline"
    | "type";
  selfProps: {
    "aria-describedby"?: string;
    /**
     * This prop helps users to fill forms faster, especially on mobile devices.
     * The name can be confusing, as it's more like an autofill.
     * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
     */
    autoComplete?: string;
    /**
     * If `true`, the `input` element is focused during the first mount.
     */
    autoFocus?: boolean;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<InputBaseClasses>;
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
     */
    color?: OverridableStringUnion<
      "primary" | "secondary" | "error" | "info" | "success" | "warning",
      InputBasePropsColorOverrides
    >;
    /**
     * The components used for each slot inside the InputBase.
     * Either a string to use a HTML element or a component.
     * @default {}
     */
    components?: {
      Root?: ElementType;
      Input?: ElementType;
    };
    /**
     * The props used for each slot inside the Input.
     * @default {}
     */
    componentsProps?: {
      root?: JSX.HTMLAttributes<HTMLDivElement> &
        InputBaseComponentsPropsOverrides;
      input?: JSX.HTMLAttributes<HTMLInputElement> &
        InputBaseComponentsPropsOverrides;
    };
    /**
     * The default value. Use when the component is not controlled.
     */
    defaultValue?: unknown;
    /**
     * If `true`, the component is disabled.
     * The prop defaults to the value (`false`) inherited from the parent FormControl component.
     */
    disabled?: boolean;
    /**
     * If `true`, GlobalStyles for the auto-fill keyframes will not be injected/removed on mount/unmount. Make sure to inject them at the top of your application.
     * This option is intended to help with boosting the initial rendering performance if you are loading a big amount of Input components at once.
     * @default false
     */
    disableInjectingGlobalStyles?: boolean;
    /**
     * End `InputAdornment` for this component.
     */
    endAdornment?: JSXElement;
    /**
     * If `true`, the `input` will indicate an error.
     * The prop defaults to the value (`false`) inherited from the parent FormControl component.
     */
    error?: boolean;
    /**
     * If `true`, the `input` will take up the full width of its container.
     * @default false
     */
    fullWidth?: boolean;
    /**
     * The id of the `input` element.
     */
    id?: string;
    /**
     * The component used for the `input` element.
     * Either a string to use a HTML element or a component.
     * @default 'input'
     */
    inputComponent?: string | Component<any>;
    /**
     * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
     * @default {}
     */
    inputProps?: PropsOf<"input" | "textarea">;
    /**
     * Pass a ref to the `input` element.
     */
    inputRef?: Ref<HTMLInputElement | HTMLTextAreaElement>;
    /**
     * If `dense`, will adjust vertical spacing. This is normally obtained via context from
     * FormControl.
     * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
     */
    margin?: "dense" | "none";
    /**
     * If `true`, a `textarea` element is rendered.
     * @default false
     */
    multiline?: boolean;
    /**
     * Name attribute of the `input` element.
     */
    name?: string;
    /**
     * Callback fired when the `input` is blurred.
     *
     * Notice that the first argument (event) might be undefined.
     */
    onBlur?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    /**
     * Callback fired when the value is changed.
     *
     * @param {ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
     * You can pull out the new value by accessing `event.target.value` (string).
     */
    onChange?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
    onFocus?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    onKeyDown?: KeyboardEventHandler<HTMLTextAreaElement | HTMLInputElement>;
    onKeyUp?: KeyboardEventHandler<HTMLTextAreaElement | HTMLInputElement>;
    /**
     * The short hint displayed in the `input` before the user enters a value.
     */
    placeholder?: string;
    /**
     * It prevents the user from changing the value of the field
     * (not from interacting with the field).
     */
    readOnly?: boolean;
    /**
     * If `true`, the `input` element is required.
     * The prop defaults to the value (`false`) inherited from the parent FormControl component.
     */
    required?: boolean;
    renderSuffix?: (state: {
      disabled?: boolean;
      error?: boolean;
      filled?: boolean;
      focused?: boolean;
      margin?: "dense" | "none" | "normal";
      required?: boolean;
      startAdornment?: JSXElement;
    }) => JSXElement;
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
     * The size of the component.
     */
    size?: OverridableStringUnion<
      "small" | "medium",
      InputBasePropsSizeOverrides
    >;
    /**
     * Start `InputAdornment` for this component.
     */
    startAdornment?: JSXElement;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
    /**
     * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
     * @default 'text'
     */
    type?: string;
    /**
     * The value of the `input` element, required for a controlled component.
     */
    value?: unknown;
  };
  props: P & InputBaseTypeMap["selfProps"];
  defaultComponent: D;
}

export type InputBaseProps<
  D extends ElementType = InputBaseTypeMap["defaultComponent"],
  P = {}
> = OverrideProps<InputBaseTypeMap<P, D>, D>;

export default InputBaseProps;
