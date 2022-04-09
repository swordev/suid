import { FormControlState } from "../FormControl";
import formControlState from "../FormControl/formControlState";
import useFormControl from "../FormControl/useFormControl";
import { PaletteColorName } from "../styles/createPalette";
import styled from "../styles/styled";
import capitalize from "../utils/capitalize";
import { FormLabelTypeMap } from "./FormLabelProps";
import formLabelClasses, {
  getFormLabelUtilityClasses,
} from "./formLabelClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import { ComponentProps } from "@suid/types";
import clsx from "clsx";
import { mergeProps, Show } from "solid-js";

type OwnerState = ComponentProps<FormLabelTypeMap> &
  Pick<
    FormControlState,
    "disabled" | "error" | "filled" | "focused" | "required"
  > &
  Required<Pick<FormControlState, "color">>;

const $ = createComponentFactory<FormLabelTypeMap, OwnerState>()({
  name: "MuiFormLabel",
  propDefaults: ({ set }) =>
    set({
      component: "label",
    }),
  selfPropNames: [
    "children",
    "classes",
    "color",
    "disabled",
    "error",
    "filled",
    "focused",
    "required",
  ],
  autoCallUseClasses: false,
  utilityClass: getFormLabelUtilityClasses,
  slotClasses: (ownerState) => ({
    root: [
      "root",
      `color${capitalize(ownerState.color)}`,
      !!ownerState.disabled && "disabled",
      !!ownerState.error && "error",
      !!ownerState.filled && "filled",
      !!ownerState.focused && "focused",
      !!ownerState.required && "required",
    ],
    asterisk: ["asterisk", !!ownerState.error && "error"],
  }),
});

export const FormLabelRoot = styled("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: ({ ownerState }, styles) => {
    return {
      ...styles.root,
      ...(ownerState.color === "secondary" && styles.colorSecondary),
      ...(ownerState.filled && styles.filled),
    };
  },
})(({ theme, ownerState }) => ({
  color: theme.palette.text.secondary,
  ...theme.typography.body1,
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  [`&.${formLabelClasses.focused}`]: {
    color: theme.palette[ownerState.color as PaletteColorName].main,
  },
  [`&.${formLabelClasses.disabled}`]: {
    color: theme.palette.text.disabled,
  },
  [`&.${formLabelClasses.error}`]: {
    color: theme.palette.error.main,
  },
}));

const AsteriskComponent = styled("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (props, styles) => styles.asterisk,
})(({ theme }) => ({
  [`&.${formLabelClasses.error}`]: {
    color: theme.palette.error.main,
  },
}));

const FormLabel = $.component(function FormLabel({
  allProps,
  otherProps,
  props,
}) {
  const muiFormControl = useFormControl();
  const fcs = formControlState({
    props: allProps,
    muiFormControl,
    states: ["color", "required", "focused", "disabled", "error", "filled"],
  });

  const ownerState = mergeProps(allProps, () => ({
    color: fcs.color || "primary",
    disabled: fcs.disabled,
    error: fcs.error,
    filled: fcs.filled,
    focused: fcs.focused,
    required: fcs.required,
  }));

  const classes = $.useClasses(ownerState);

  return (
    <FormLabelRoot
      {...otherProps}
      as={otherProps.component}
      ownerState={ownerState}
      className={clsx(classes.root, otherProps.className)}
    >
      {props.children}
      <Show when={fcs.required}>
        <AsteriskComponent
          ownerState={ownerState}
          aria-hidden
          className={classes.asterisk}
        >
          &thinsp;{"*"}
        </AsteriskComponent>
      </Show>
    </FormLabelRoot>
  );
});

export default FormLabel;
