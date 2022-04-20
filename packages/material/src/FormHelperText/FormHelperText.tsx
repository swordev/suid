import { FormControlState } from "../FormControl";
import formControlState from "../FormControl/formControlState";
import useFormControl from "../FormControl/useFormControl";
import styled from "../styles/styled";
import capitalize from "../utils/capitalize";
import { FormHelperTextTypeMap } from "./FormHelperTextProps";
import formHelperTextClasses, {
  getFormHelperTextUtilityClasses,
} from "./formHelperTextClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import { PropsOf } from "@suid/types";
import clsx from "clsx";
import { children, mergeProps } from "solid-js";

type OwnerState = PropsOf<FormHelperTextTypeMap> &
  Pick<
    FormControlState,
    | "variant"
    | "size"
    | "disabled"
    | "error"
    | "filled"
    | "focused"
    | "required"
  > & {
    contained: boolean;
  };

const $ = createComponentFactory<FormHelperTextTypeMap, OwnerState>()({
  name: "MuiFormHelperText",
  propDefaults: ({ set }) =>
    set({
      component: "p",
    }),
  selfPropNames: [
    "children",
    "classes",
    "disabled",
    "error",
    "filled",
    "focused",
    "margin",
    "required",
    "variant",
  ],
  utilityClass: getFormHelperTextUtilityClasses,
  slotClasses: (ownerState) => ({
    root: [
      "root",
      !!ownerState.disabled && "disabled",
      !!ownerState.error && "error",
      !!ownerState.size && `size${capitalize(ownerState.size)}`,
      ownerState.contained && "contained",
      !!ownerState.focused && "focused",
      !!ownerState.filled && "filled",
      !!ownerState.required && "required",
    ],
  }),
});

const FormHelperTextRoot = styled("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      styles.root,
      ownerState.size && styles[`size${capitalize(ownerState.size)}`],
      ownerState.contained && styles.contained,
      ownerState.filled && styles.filled,
    ];
  },
})<OwnerState>(({ theme, ownerState }) => ({
  color: theme.palette.text.secondary,
  ...theme.typography.caption,
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${formHelperTextClasses.disabled}`]: {
    color: theme.palette.text.disabled,
  },
  [`&.${formHelperTextClasses.error}`]: {
    color: theme.palette.error.main,
  },
  ...(ownerState.size === "small" && {
    marginTop: 4,
  }),
  ...(ownerState.contained && {
    marginLeft: 14,
    marginRight: 14,
  }),
}));

const FormHelperText = $.component(function FormHelperText({
  allProps,
  classes,
  otherProps,
  props,
}) {
  const muiFormControl = useFormControl();
  const fcs = formControlState({
    props: allProps,
    muiFormControl,
    states: [
      "variant",
      "size",
      "disabled",
      "error",
      "filled",
      "focused",
      "required",
    ],
  });

  const ownerState = mergeProps(allProps, {
    get contained() {
      return fcs.variant === "filled" || fcs.variant === "outlined";
    },
    get variant() {
      return fcs.variant;
    },
    get size() {
      return fcs.size;
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

  const resolved = children(() => props.children);

  return (
    <FormHelperTextRoot
      {...otherProps}
      as={otherProps.component}
      ownerState={ownerState}
      className={clsx(classes.root, otherProps.className)}
    >
      {resolved() === " " ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        <span className="notranslate">&#8203;</span>
      ) : (
        resolved()
      )}
    </FormHelperTextRoot>
  );
});

export default FormHelperText;
