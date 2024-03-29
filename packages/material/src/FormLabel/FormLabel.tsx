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
import { PropsOf } from "@suid/types";
import clsx from "clsx";
import { mergeProps, Show } from "solid-js";

type OwnerState = PropsOf<FormLabelTypeMap> &
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

  const ownerState = mergeProps(allProps, {
    get color() {
      return fcs.color || "primary";
    },
    get disabled() {
      return fcs.disabled;
    },
    get error() {
      return fcs.error;
    },
    get filled() {
      return fcs.filled;
    },
    get focused() {
      return fcs.focused;
    },
    get required() {
      return fcs.required;
    },
  });

  const classes = $.useClasses(ownerState);

  return (
    <FormLabelRoot
      {...otherProps}
      as={otherProps.component}
      ownerState={ownerState}
      class={clsx(classes.root, otherProps.class)}
    >
      {props.children}
      <Show when={fcs.required}>
        <AsteriskComponent
          ownerState={ownerState}
          aria-hidden
          class={classes.asterisk}
        >
          &thinsp;{"*"}
        </AsteriskComponent>
      </Show>
    </FormLabelRoot>
  );
});

export default FormLabel;
