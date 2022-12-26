import FilledInput from "../FilledInput";
import FormControl from "../FormControl";
import FormHelperText from "../FormHelperText";
import Input from "../Input";
import InputLabel from "../InputLabel";
import OutlinedInput, { OutlinedInputProps } from "../OutlinedInput";
import styled from "../styles/styled";
import { TextFieldTypeMap } from "./TextFieldProps";
// import Select from "../Select";
import { getTextFieldUtilityClass } from "./textFieldClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import Dynamic from "@suid/system/Dynamic";
import createUniqueId from "@suid/utils/createUniqueId";
import clsx from "clsx";
import { createEffect, createMemo } from "solid-js";

const $ = createComponentFactory<TextFieldTypeMap>()({
  name: "MuiTextField",
  propDefaults: ({ set }) =>
    set({
      autoFocus: false,
      color: "primary",
      disabled: false,
      error: false,
      fullWidth: false,
      multiline: false,
      required: false,
      select: false,
      variant: "outlined",
    }),
  selfPropNames: [
    "FormHelperTextProps",
    "InputLabelProps",
    "InputProps",
    "autoComplete",
    "autoFocus",
    "children",
    "classes",
    "color",
    "defaultValue",
    "disabled",
    "error",
    "fullWidth",
    "helperText",
    "id",
    "inputProps",
    "inputRef",
    "label",
    "maxRows",
    "minRows",
    "multiline",
    "name",
    "onBlur",
    "onChange",
    "onFocus",
    "placeholder",
    "required",
    "rows",
    "select",
    "size",
    "type",
    "value",
    "variant",
  ],
  utilityClass: getTextFieldUtilityClass,
  slotClasses: () => ({ root: ["root"] }),
});

const variantComponent = {
  standard: Input,
  filled: FilledInput,
  outlined: OutlinedInput,
};

const TextFieldRoot = styled(FormControl, {
  name: "MuiTextField",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root,
})({});

/**
 * The `TextField` is a convenience wrapper for the most common cases (80%).
 * It cannot be all things to all people, otherwise the API would grow out of control.
 *
 * ## Advanced Configuration
 *
 * It's important to understand that the text field is a simple abstraction
 * on top of the following components:
 *
 * *   [FormControl](https://mui.com/api/form-control/)
 * *   [InputLabel](https://mui.com/api/input-label/)
 * *   [FilledInput](https://mui.com/api/filled-input/)
 * *   [OutlinedInput](https://mui.com/api/outlined-input/)
 * *   [Input](https://mui.com/api/input/)
 * *   [FormHelperText](https://mui.com/api/form-helper-text/)
 *
 * If you wish to alter the props applied to the `input` element, you can do so as follows:
 *
 * ```jsx
 * const inputProps = {
 *   step: 300,
 * };
 *
 * return <TextField id="time" type="time" inputProps={inputProps} />;
 * ```
 *
 * For advanced cases, please look at the source of TextField by clicking on the
 * "Edit this page" button above. Consider either:
 *
 * *   using the upper case props for passing values directly to the components
 * *   using the underlying components directly as shown in the demos
 *
 * Demos:
 *
 * - [Autocomplete](https://mui.com/components/autocomplete/)
 * - [Pickers](https://mui.com/components/pickers/)
 * - [Text Fields](https://mui.com/components/text-fields/)
 *
 * API:
 *
 * - [TextField API](https://mui.com/api/text-field/)
 * - inherits [FormControl API](https://mui.com/api/form-control/)
 */
const TextField = $.component(function TextField({
  allProps,
  classes,
  otherProps,
  props,
}) {
  if (process.env.NODE_ENV !== "production") {
    createEffect(() => {
      if (props.select && !props.children) {
        console.error(
          "MUI: `children` must be passed when using the `TextField` component with `select`."
        );
      }
    });
  }

  const InputMore = createMemo(() => {
    const InputMore: OutlinedInputProps = {};

    if (props.variant === "outlined") {
      if (
        props.InputLabelProps &&
        typeof props.InputLabelProps.shrink !== "undefined"
      ) {
        InputMore.notched = props.InputLabelProps.shrink;
      }
      InputMore.label = props.label;
    }
    /*if (props.select) {
    // unset defaults from textbox inputs
    if (!props.SelectProps || !props.SelectProps.native) {
      InputMore.id = undefined;
    }
    InputMore["aria-describedby"] = undefined;
  }*/
    return InputMore;
  });

  const id = createUniqueId(() => props.id);
  const helperTextId = () =>
    props.helperText && id() ? `${id()}-helper-text` : undefined;
  const inputLabelId = () =>
    props.label && id() ? `${id()}-label` : undefined;
  const InputComponent = () => variantComponent[props.variant];
  const InputElement = () => (
    <Dynamic
      $component={InputComponent()}
      aria-describedby={helperTextId()}
      autoComplete={props.autoComplete}
      autoFocus={props.autoFocus}
      defaultValue={props.defaultValue}
      fullWidth={props.fullWidth}
      multiline={props.multiline}
      name={props.name}
      rows={props.rows}
      maxRows={props.maxRows}
      minRows={props.minRows}
      type={props.type}
      value={props.value}
      id={id()}
      inputRef={props.inputRef as any}
      onBlur={props.onBlur}
      onChange={props.onChange}
      onFocus={props.onFocus}
      placeholder={props.placeholder}
      inputProps={props.inputProps}
      size={props.size}
      {...InputMore()}
      {...(props.InputProps || {})}
    />
  );

  const label = () => {
    const label = props.label;

    return (
      label != null &&
      label !== "" && (
        <InputLabel
          for={id()}
          id={inputLabelId()}
          {...(props.InputLabelProps || {})}
        >
          {label}
        </InputLabel>
      )
    );
  };

  const helperText = () => {
    const helperText = props.helperText;
    if (helperText)
      return (
        <FormHelperText
          id={helperTextId()}
          {...(props.FormHelperTextProps || {})}
        >
          {helperText}
        </FormHelperText>
      );
  };

  return (
    <TextFieldRoot
      class={clsx(classes.root, otherProps.class)}
      disabled={props.disabled}
      error={props.error}
      fullWidth={props.fullWidth}
      required={props.required}
      color={props.color}
      variant={props.variant}
      ownerState={allProps}
      {...otherProps}
    >
      {label()}
      {InputElement()}
      {/*props.select ? (
        <Select
          aria-describedby={helperTextId}
          id={id}
          labelId={inputLabelId}
          value={props.value}
          input={InputElement}
          {...props.SelectProps || {}}
        >
          {props.children}
        </Select>
      ) : (
        InputElement
      )*/}
      {helperText()}
    </TextFieldRoot>
  );
});

export default TextField;
