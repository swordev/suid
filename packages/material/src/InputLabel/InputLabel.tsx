import { FormControlState } from "../FormControl";
import formControlState from "../FormControl/formControlState";
import useFormControl from "../FormControl/useFormControl";
import FormLabel, { formLabelClasses } from "../FormLabel";
import styled, { skipRootProps } from "../styles/styled";
import { InputLabelTypeMap } from "./InputLabelProps";
import { getInputLabelUtilityClasses } from "./inputLabelClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import { PropsOf } from "@suid/types";
import { mergeProps, splitProps } from "solid-js";

type OwnerState = PropsOf<InputLabelTypeMap> &
  Pick<FormControlState, "size" | "variant" | "required"> & {
    formControl?: FormControlState;
    shrink?: boolean;
  };

const $ = createComponentFactory<InputLabelTypeMap, OwnerState>()({
  name: "MuiInputLabel",
  propDefaults: ({ set }) =>
    set({
      disableAnimation: false,
    }),
  selfPropNames: [
    "children",
    "classes",
    "color",
    "disableAnimation",
    "disabled",
    "error",
    "focused",
    "margin",
    "required",
    "shrink",
    "variant",
  ],
  autoCallUseClasses: false,
  utilityClass: getInputLabelUtilityClasses,
  slotClasses: (ownerState) => ({
    root: [
      "root",
      !!ownerState.formControl && "formControl",
      !ownerState.disableAnimation && "animated",
      !!ownerState.shrink && "shrink",
      ownerState.size === "small" && "sizeSmall",
      !!ownerState.variant && ownerState.variant,
    ],
    asterisk: [!!ownerState.required && "asterisk"],
  }),
});

const InputLabelRoot = styled(FormLabel, {
  skipProps: skipRootProps.filter((v) => v !== "classes"),
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;
    return [
      { [`& .${formLabelClasses.asterisk}`]: styles.asterisk },
      styles.root,
      ownerState.formControl && styles.formControl,
      ownerState.size === "small" && styles.sizeSmall,
      ownerState.shrink && styles.shrink,
      !ownerState.disableAnimation && styles.animated,
      styles[ownerState.variant],
    ];
  },
})<OwnerState>(({ theme, ownerState }) => ({
  display: "block",
  transformOrigin: "top left",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "100%",
  ...(ownerState.formControl && {
    position: "absolute",
    left: 0,
    top: 0,
    // slight alteration to spec spacing to match visual spec result
    transform: "translate(0, 20px) scale(1)",
  }),
  ...(ownerState.size === "small" && {
    // Compensation for the `Input.inputSizeSmall` style.
    transform: "translate(0, 17px) scale(1)",
  }),
  ...(ownerState.shrink && {
    transform: "translate(0, -1.5px) scale(0.75)",
    transformOrigin: "top left",
    maxWidth: "133%",
  }),
  ...(!ownerState.disableAnimation && {
    transition: theme.transitions.create(["color", "transform", "max-width"], {
      duration: theme.transitions.duration.shorter,
      easing: theme.transitions.easing.easeOut,
    }),
  }),
  ...(ownerState.variant === "filled" && {
    // Chrome's autofill feature gives the input field a yellow background.
    // Since the input field is behind the label in the HTML tree,
    // the input field is drawn last and hides the label with an opaque background color.
    // zIndex: 1 will raise the label above opaque background-colors of input.
    zIndex: 1,
    pointerEvents: "none",
    transform: "translate(12px, 16px) scale(1)",
    maxWidth: "calc(100% - 24px)",
    ...(ownerState.size === "small" && {
      transform: "translate(12px, 13px) scale(1)",
    }),
    ...(ownerState.shrink && {
      userSelect: "none",
      pointerEvents: "auto",
      transform: "translate(12px, 7px) scale(0.75)",
      maxWidth: "calc(133% - 24px)",
      ...(ownerState.size === "small" && {
        transform: "translate(12px, 4px) scale(0.75)",
      }),
    }),
  }),
  ...(ownerState.variant === "outlined" && {
    // see comment above on filled.zIndex
    zIndex: 1,
    pointerEvents: "none",
    transform: "translate(14px, 16px) scale(1)",
    maxWidth: "calc(100% - 24px)",
    ...(ownerState.size === "small" && {
      transform: "translate(14px, 9px) scale(1)",
    }),
    ...(ownerState.shrink && {
      userSelect: "none",
      pointerEvents: "auto",
      maxWidth: "calc(133% - 24px)",
      transform: "translate(14px, -9px) scale(0.75)",
    }),
  }),
}));

/**
 *
 * Demos:
 *
 * - [Text Fields](https://mui.com/components/text-fields/)
 *
 * API:
 *
 * - [InputLabel API](https://mui.com/api/input-label/)
 * - inherits [FormLabel API](https://mui.com/api/form-label/)
 */

const InputLabel = $.component(function InputLabel({ allProps, props }) {
  const muiFormControl = useFormControl();

  const [, baseProps] = splitProps(allProps, [
    "disableAnimation",
    "margin",
    "shrink",
    "variant",
  ]);

  const shrink = () => {
    let shrink = props.shrink;
    if (typeof shrink === "undefined" && muiFormControl) {
      shrink =
        muiFormControl.filled ||
        muiFormControl.focused ||
        muiFormControl.adornedStart;
    }
    return shrink;
  };

  const fcs = formControlState({
    props: allProps,
    muiFormControl,
    states: ["size", "variant", "required"],
  });

  const ownerState = mergeProps(allProps, () => ({
    formControl: muiFormControl,
    shrink: shrink(),
    size: fcs.size,
    variant: fcs.variant,
    required: fcs.required,
  }));

  const classes = $.useClasses(ownerState);

  const allClasses = mergeProps(classes, () => props.classes || {});

  return (
    <InputLabelRoot
      {...baseProps}
      data-shrink={shrink()}
      ownerState={ownerState}
      classes={allClasses}
    />
  );
});

export default InputLabel;
