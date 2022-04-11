import formControlState from "../FormControl/formControlState";
import useFormControl from "../FormControl/useFormControl";
import styled from "../styles/styled";
import { FormGroupTypeMap } from "./FormGroupProps";
import { getFormGroupUtilityClass } from "./formGroupClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import { InPropsOf } from "@suid/types";
import clsx from "clsx";
import { mergeProps } from "solid-js";

type OwnerState = InPropsOf<FormGroupTypeMap> & {
  error?: boolean;
};

const $ = createComponentFactory<FormGroupTypeMap, OwnerState>()({
  name: "MuiFormGroup",
  propDefaults: ({ set }) =>
    set({
      row: false,
    }),
  selfPropNames: ["children", "classes", "row"],
  utilityClass: getFormGroupUtilityClass,
  slotClasses: (ownerState) => ({
    root: ["root", ownerState.row && "row", !!ownerState.error && "error"],
  }),
});

const FormGroupRoot = styled("div", {
  name: "MuiFormGroup",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [styles.root, ownerState.row && styles.row];
  },
})(({ ownerState }) => ({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  ...(ownerState.row && {
    flexDirection: "row",
  }),
}));

/**
 * `FormGroup` wraps controls such as `Checkbox` and `Switch`.
 * It provides compact row layout.
 * For the `Radio`, you should be using the `RadioGroup` component instead of this one.
 *
 * Demos:
 *
 * - [Checkboxes](https://mui.com/components/checkboxes/)
 * - [Switches](https://mui.com/components/switches/)
 *
 * API:
 *
 * - [FormGroup API](https://mui.com/api/form-group/)
 */
const FormGroup = $.component(function FormGroup({
  allProps,
  classes,
  otherProps,
}) {
  const muiFormControl = useFormControl();
  const fcs = formControlState({
    props: allProps,
    muiFormControl,
    states: ["error"],
  });

  const ownerState = mergeProps(allProps, () => ({
    error: fcs.error,
  }));

  return (
    <FormGroupRoot
      {...otherProps}
      className={clsx(classes.root, otherProps.className)}
      ownerState={ownerState}
    />
  );
});

export default FormGroup;
