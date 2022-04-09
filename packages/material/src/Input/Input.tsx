import InputBase from "../InputBase";
import {
  rootOverridesResolver as inputBaseRootOverridesResolver,
  inputOverridesResolver as inputBaseInputOverridesResolver,
  InputBaseRoot,
  InputBaseComponent as InputBaseInput,
  OwnerState as InputBaseOwnerState,
} from "../InputBase/InputBase";
import styled, { skipRootProps } from "../styles/styled";
import { InputTypeMap } from "./InputProps";
import inputClasses, { getInputUtilityClass } from "./inputClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import deepmerge from "@suid/utils/deepmerge";
import { createMemo, mergeProps } from "solid-js";

type OwnerState = InputBaseOwnerState & {
  disableUnderline: boolean;
};

const $ = createComponentFactory<InputTypeMap>()({
  name: "MuiInput",
  propDefaults: ({ set }) =>
    set({
      components: {},
      fullWidth: false,
      inputComponent: "input",
      multiline: false,
      type: "text",
    }),
  selfPropNames: ["classes", "disableUnderline"],
  utilityClass: getInputUtilityClass,
  slotClasses: (ownerState) => ({
    root: ["root", !ownerState.disableUnderline && "underline"],
    input: ["input"],
  }),
});

const InputRoot = styled(InputBaseRoot, {
  skipProps: skipRootProps.filter((v) => v !== "classes"),
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      ...inputBaseRootOverridesResolver(props as any, styles),
      !ownerState.disableUnderline && styles.underline,
    ];
  },
})<OwnerState>(({ theme, ownerState }) => {
  const light = theme.palette.mode === "light";
  const bottomLineColor = light
    ? "rgba(0, 0, 0, 0.42)"
    : "rgba(255, 255, 255, 0.7)";
  return {
    position: "relative",
    ...(ownerState.formControl && {
      "label + &": {
        marginTop: 16,
      },
    }),
    ...(!ownerState.disableUnderline && {
      "&:after": {
        borderBottom: `2px solid ${theme.palette[ownerState.color].main}`,
        left: 0,
        bottom: 0,
        // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
        content: '""',
        position: "absolute",
        right: 0,
        transform: "scaleX(0)",
        transition: theme.transitions.create("transform", {
          duration: theme.transitions.duration.shorter,
          easing: theme.transitions.easing.easeOut,
        }),
        pointerEvents: "none", // Transparent to the hover style.
      },
      [`&.${inputClasses.focused}:after`]: {
        transform: "scaleX(1)",
      },
      [`&.${inputClasses.error}:after`]: {
        borderBottomColor: theme.palette.error.main,
        transform: "scaleX(1)", // error is always underlined in red
      },
      "&:before": {
        borderBottom: `1px solid ${bottomLineColor}`,
        left: 0,
        bottom: 0,
        // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
        content: '"\\00a0"',
        position: "absolute",
        right: 0,
        transition: theme.transitions.create("border-bottom-color", {
          duration: theme.transitions.duration.shorter,
        }),
        pointerEvents: "none", // Transparent to the hover style.
      },
      [`&:hover:not(.${inputClasses.disabled}):before`]: {
        borderBottom: `2px solid ${theme.palette.text.primary}`,
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          borderBottom: `1px solid ${bottomLineColor}`,
        },
      },
      [`&.${inputClasses.disabled}:before`]: {
        borderBottomStyle: "dotted",
      },
    }),
  };
});

const InputInput = styled(InputBaseInput, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: inputBaseInputOverridesResolver as any,
})({});

const Input = $.component(function Input({ classes, otherProps, props }) {
  const componentsProps = createMemo(() => {
    const ownerState = { disableUnderline: props.disableUnderline };
    const inputComponentsProps = { root: { ownerState } };
    return otherProps.componentsProps
      ? deepmerge(otherProps.componentsProps, inputComponentsProps)
      : inputComponentsProps;
  });
  const allClasses = mergeProps(classes, () => props.classes || {});
  return (
    <InputBase
      {...otherProps}
      components={{
        Root: InputRoot,
        Input: InputInput,
        ...(otherProps.components || {}),
      }}
      componentsProps={componentsProps()}
      classes={allClasses}
    />
  );
});

export default Input;
