import { FormControlTypeMap } from ".";
import styled from "../styles/styled";
import capitalize from "../utils/capitalize";
import FormControlContext from "./FormControlContext";
import { getFormControlUtilityClasses } from "./formControlClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import clsx from "clsx";
import { createEffect, createSignal } from "solid-js";

const $ = createComponentFactory<FormControlTypeMap>()({
  name: "MuiFormControl",
  selfPropNames: [
    "children",
    "classes",
    "color",
    "disabled",
    "error",
    "focused",
    "fullWidth",
    "hiddenLabel",
    "margin",
    "required",
    "size",
    "variant",
  ],
  propDefaults: ({ set }) =>
    set({
      color: "primary",
      component: "div",
      disabled: false,
      error: false,
      fullWidth: false,
      hiddenLabel: false,
      margin: "none",
      required: false,
      size: "medium",
      variant: "outlined",
    }),
  utilityClass: getFormControlUtilityClasses,
  slotClasses: (ownerState) => ({
    root: [
      "root",
      ownerState.margin !== "none" && `margin${capitalize(ownerState.margin)}`,
      ownerState.fullWidth && "fullWidth",
    ],
  }),
});

const FormControlRoot = styled("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: ({ ownerState }, styles) => {
    return {
      ...styles.root,
      ...styles[`margin${capitalize(ownerState.margin)}`],
      ...(ownerState.fullWidth && styles.fullWidth),
    };
  },
})(({ ownerState }) => ({
  display: "inline-flex",
  flexDirection: "column",
  position: "relative",
  // Reset fieldset default style.
  minWidth: 0,
  padding: 0,
  margin: 0,
  border: 0,
  verticalAlign: "top", // Fix alignment issue on Safari.
  ...(ownerState.margin === "normal" && {
    marginTop: 16,
    marginBottom: 8,
  }),
  ...(ownerState.margin === "dense" && {
    marginTop: 8,
    marginBottom: 4,
  }),
  ...(ownerState.fullWidth && {
    width: "100%",
  }),
}));

/**
 * Provides context such as filled/focused/error/required for form inputs.
 * Relying on the context provides high flexibility and ensures that the state always stays
 * consistent across the children of the `FormControl`.
 * This context is used by the following components:
 *
 * *   FormLabel
 * *   FormHelperText
 * *   Input
 * *   InputLabel
 *
 * You can find one composition example below and more going to [the demos](https://mui.com/components/text-fields/#components).
 *
 * ```jsx
 * <FormControl>
 *   <InputLabel for="my-input">Email address</InputLabel>
 *   <Input id="my-input" aria-describedby="my-helper-text" />
 *   <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
 * </FormControl>
 * ```
 *
 * ⚠️ Only one `InputBase` can be used within a FormControl because it create visual inconsistencies.
 * For instance, only one input can be focused at the same time, the state shouldn't be shared.
 *
 * Demos:
 *
 * - [Checkboxes](https://mui.com/components/checkboxes/)
 * - [Radio Buttons](https://mui.com/components/radio-buttons/)
 * - [Switches](https://mui.com/components/switches/)
 * - [Text Fields](https://mui.com/components/text-fields/)
 *
 * API:
 *
 * - [FormControl API](https://mui.com/api/form-control/)
 */
const FormControl = $.component(function FormControl({
  allProps,
  classes,
  otherProps,
  props,
}) {
  const [adornedStart, setAdornedStart] = createSignal(false);
  const [filled, setFilled] = createSignal(false);
  const [focusedState, setFocused] = createSignal(false);

  createEffect(() => {
    if (props.disabled && focusedState()) setFocused(false);
  });

  const focused = () =>
    props.focused !== undefined && !props.disabled
      ? props.focused
      : focusedState();

  let registerEffect: undefined | (() => void);
  if (process.env.NODE_ENV !== "production") {
    const registeredInput = { ref: false };
    registerEffect = () => {
      if (registeredInput.ref) {
        console.error(
          [
            "MUI: There are multiple `InputBase` components inside a FormControl.",
            "This creates visual inconsistencies, only use one `InputBase`.",
          ].join("\n")
        );
      }
      registeredInput.ref = true;
    };
  }

  return (
    <FormControlContext.Provider
      value={{
        get adornedStart() {
          return adornedStart();
        },
        setAdornedStart,
        get margin() {
          return props.margin;
        },
        get color() {
          return props.color;
        },
        get disabled() {
          return props.disabled;
        },
        get error() {
          return props.error;
        },
        get filled() {
          return filled();
        },
        get focused() {
          return focused();
        },
        get fullWidth() {
          return props.fullWidth;
        },
        get hiddenLabel() {
          return props.hiddenLabel;
        },
        get size() {
          return props.size;
        },
        onBlur: () => {
          setFocused(false);
        },
        onEmpty: () => {
          setFilled(false);
        },
        onFilled: () => {
          setFilled(true);
        },
        onFocus: () => {
          setFocused(true);
        },
        registerEffect,
        get required() {
          return props.required;
        },
        get variant() {
          return props.variant;
        },
      }}
    >
      <FormControlRoot
        {...otherProps}
        ownerState={allProps}
        class={clsx(classes.root, otherProps.class)}
      >
        {props.children}
      </FormControlRoot>
    </FormControlContext.Provider>
  );
});

export default FormControl;
