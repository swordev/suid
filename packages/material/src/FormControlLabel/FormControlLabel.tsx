import { useFormControl } from "../FormControl";
import formControlState from "../FormControl/formControlState";
import Typography from "../Typography";
import styled from "../styles/styled";
import capitalize from "../utils/capitalize";
import FormControlLabelContext from "./FormControlLabelContext";
import { FormControlLabelTypeMap } from "./FormControlLabelProps";
import formControlLabelClasses, {
  getFormControlLabelUtilityClasses,
} from "./formControlLabelClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import { InPropsOf } from "@suid/types";
import clsx from "clsx";
import { createSignal, mergeProps, splitProps } from "solid-js";

type OwnerState = InPropsOf<FormControlLabelTypeMap> & {
  error?: boolean;
};

const $ = createComponentFactory<FormControlLabelTypeMap, OwnerState>()({
  name: "MuiFormControlLabel",
  propDefaults: ({ set }) =>
    set({
      componentsProps: {},
      labelPlacement: "end",
    }),
  selfPropNames: [
    "checked",
    "classes",
    "componentsProps",
    "control",
    "disableTypography",
    "disabled",
    "inputRef",
    "label",
    "labelPlacement",
    "name",
    "onChange",
    "value",
  ],
  autoCallUseClasses: false,
  utilityClass: getFormControlLabelUtilityClasses,
  slotClasses: (ownerState) => ({
    root: [
      "root",
      !!ownerState.disabled && "disabled",
      `labelPlacement${capitalize(ownerState.labelPlacement)}`,
      !!ownerState.error && "error",
    ],
    label: ["label", !!ownerState.disabled && "disabled"],
  }),
});

export const FormControlLabelRoot = styled("label", {
  name: "MuiFormControlLabel",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      { [`& .${formControlLabelClasses.label}`]: styles.label },
      styles.root,
      styles[`labelPlacement${capitalize(ownerState.labelPlacement)}`],
    ];
  },
})(({ theme, ownerState }) => ({
  display: "inline-flex",
  alignItems: "center",
  cursor: "pointer",
  // For correct alignment with the text.
  verticalAlign: "middle",
  WebkitTapHighlightColor: "transparent",
  marginLeft: -11,
  marginRight: 16, // used for row presentation of radio/checkbox
  [`&.${formControlLabelClasses.disabled}`]: {
    cursor: "default",
  },
  ...(ownerState.labelPlacement === "start" && {
    flexDirection: "row-reverse",
    marginLeft: 16, // used for row presentation of radio/checkbox
    marginRight: -11,
  }),
  ...(ownerState.labelPlacement === "top" && {
    flexDirection: "column-reverse",
    marginLeft: 16,
  }),
  ...(ownerState.labelPlacement === "bottom" && {
    flexDirection: "column",
    marginLeft: 16,
  }),
  [`& .${formControlLabelClasses.label}`]: {
    [`&.${formControlLabelClasses.disabled}`]: {
      color: theme.palette.text.disabled,
    },
  },
}));

/**
 * Drop-in replacement of the `Radio`, `Switch` and `Checkbox` component.
 * Use this component if you want to display an extra label.
 *
 * Demos:
 *
 * - [Checkboxes](https://mui.com/components/checkboxes/)
 * - [Radio Buttons](https://mui.com/components/radio-buttons/)
 * - [Switches](https://mui.com/components/switches/)
 *
 * API:
 *
 * - [FormControlLabel API](https://mui.com/api/form-control-label/)
 */
const FormControlLabel = $.component(function FormControlLabel({
  allProps,
  otherProps,
  props,
}) {
  const muiFormControl = useFormControl();
  const [partialContextProps] = splitProps(props, [
    "checked",
    "name",
    "onChange",
    "value",
    "inputRef",
    "disabled",
  ]);
  const [childDisabled, setChildDisabled] = createSignal(props.disabled);

  const contextProps = mergeProps(partialContextProps, {
    setDisabled: (state: boolean) => setChildDisabled(state),
  });

  const fcs = formControlState({
    props: allProps,
    muiFormControl,
    states: ["error"],
  });

  const ownerState = mergeProps(allProps, {
    get error() {
      return fcs.error;
    },
    get disabled() {
      return childDisabled();
    },
  });

  const classes = $.useClasses(ownerState);

  return (
    <FormControlLabelContext.Provider value={contextProps}>
      <FormControlLabelRoot
        {...otherProps}
        class={clsx(classes.root, otherProps.class)}
        ownerState={ownerState}
      >
        {props.control}
        {props.disableTypography ? (
          props.label
        ) : (
          <Typography
            component="span"
            class={classes.label}
            {...(props.componentsProps.typography
              ? props.componentsProps.typography
              : {})}
          >
            {props.label}
          </Typography>
        )}
      </FormControlLabelRoot>
    </FormControlLabelContext.Provider>
  );
});

export default FormControlLabel;
