import formControlState from "../FormControl/formControlState";
import useFormControl from "../FormControl/useFormControl";
import InputBase, {
  rootOverridesResolver as inputBaseRootOverridesResolver,
  inputOverridesResolver as inputBaseInputOverridesResolver,
  InputBaseRoot,
  InputBaseComponent as InputBaseInput,
} from "../InputBase/InputBase";
import { PaletteColorName } from "../styles/createPalette";
import styled, { skipRootProps } from "../styles/styled";
import NotchedOutline from "./NotchedOutline";
import { OutlinedInputTypeMap } from "./OutlinedInputProps";
import outlinedInputClasses, {
  getOutlinedInputUtilityClass,
} from "./outlinedInputClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import { createMemo, mergeProps } from "solid-js";

const $ = createComponentFactory<OutlinedInputTypeMap>()({
  name: "MuiOutlinedInput",
  propDefaults: ({ set }) =>
    set({
      components: {},
      fullWidth: false,
      inputComponent: "input",
      multiline: false,
      type: "text",
    }),
  selfPropNames: ["classes", "label", "notched"],
  utilityClass: getOutlinedInputUtilityClass,
  slotClasses: () => ({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"],
  }),
});

const OutlinedInputRoot = styled(InputBaseRoot, {
  skipProps: skipRootProps.filter((v) => v !== "classes"),
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: inputBaseRootOverridesResolver as any,
})(({ theme, ownerState }) => {
  const borderColor =
    theme.palette.mode === "light"
      ? "rgba(0, 0, 0, 0.23)"
      : "rgba(255, 255, 255, 0.23)";
  return {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
      borderColor: theme.palette.text.primary,
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
        borderColor,
      },
    },
    [`&.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]:
      {
        // [review] ownerState.color is not required by MUI
        borderColor: theme.palette[ownerState.color as PaletteColorName].main,
        borderWidth: 2,
      },
    [`&.${outlinedInputClasses.error} .${outlinedInputClasses.notchedOutline}`]:
      {
        borderColor: theme.palette.error.main,
      },
    [`&.${outlinedInputClasses.disabled} .${outlinedInputClasses.notchedOutline}`]:
      {
        borderColor: theme.palette.action.disabled,
      },
    ...(ownerState.startAdornment && {
      paddingLeft: 14,
    }),
    ...(ownerState.endAdornment && {
      paddingRight: 14,
    }),
    ...(ownerState.multiline && {
      padding: "16.5px 14px",
      ...(ownerState.size === "small" && {
        padding: "8.5px 14px",
      }),
    }),
  };
});

const NotchedOutlineRoot = styled(NotchedOutline, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline",
  overridesResolver: (props, styles) => styles.notchedOutline,
})(({ theme }) => ({
  borderColor:
    theme.palette.mode === "light"
      ? "rgba(0, 0, 0, 0.23)"
      : "rgba(255, 255, 255, 0.23)",
}));

const OutlinedInputInput = styled(InputBaseInput, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: inputBaseInputOverridesResolver as any,
})(({ theme, ownerState }) => ({
  padding: "16.5px 14px",
  "&:-webkit-autofill": {
    WebkitBoxShadow:
      theme.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
    WebkitTextFillColor: theme.palette.mode === "light" ? null : "#fff",
    caretColor: theme.palette.mode === "light" ? null : "#fff",
    borderRadius: "inherit",
  },
  ...(ownerState.size === "small" && {
    padding: "8.5px 14px",
  }),
  ...(ownerState.multiline && {
    padding: 0,
  }),
  ...(ownerState.startAdornment && {
    paddingLeft: 0,
  }),
  ...(ownerState.endAdornment && {
    paddingRight: 0,
  }),
}));

const OutlinedInput = $.component(function OutlinedInput({
  allProps,
  classes,
  otherProps,
  props,
}) {
  const muiFormControl = useFormControl();
  const fcs = formControlState({
    props: allProps,
    muiFormControl,
    states: ["required"],
  });

  const label = createMemo(() => {
    const label = props.label;
    return label != null && label !== "" && fcs.required ? (
      <>
        {label}
        &nbsp;{"*"}
      </>
    ) : (
      label
    );
  });

  const allClasses = mergeProps(classes, () => props.classes || {}, {
    notchedOutline: null,
  });

  return (
    <InputBase
      renderSuffix={(state) => (
        <NotchedOutlineRoot
          class={classes.notchedOutline}
          label={label()}
          notched={
            typeof props.notched !== "undefined"
              ? props.notched
              : Boolean(state.startAdornment || state.filled || state.focused)
          }
        />
      )}
      {...otherProps}
      components={{
        Root: OutlinedInputRoot,
        Input: OutlinedInputInput,
        ...(otherProps.components || {}),
      }}
      classes={allClasses}
    />
  );
});

export default OutlinedInput;
