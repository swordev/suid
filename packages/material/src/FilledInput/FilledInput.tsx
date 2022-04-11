import InputBase from "../InputBase";
import {
  rootOverridesResolver as inputBaseRootOverridesResolver,
  inputOverridesResolver as inputBaseInputOverridesResolver,
  InputBaseRoot,
  InputBaseComponent as InputBaseInput,
} from "../InputBase/InputBase";
import { PaletteColorName } from "../styles/createPalette";
import styled from "../styles/styled";
import { FilledInputTypeMap } from "./FilledInputProps";
import filledInputClasses, {
  getFilledInputUtilityClass,
} from "./filledInputClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import { PropsOf } from "@suid/types";
import deepmerge from "@suid/utils/deepmerge";
import { createMemo, mergeProps } from "solid-js";

const $ = createComponentFactory<FilledInputTypeMap>()({
  name: "MuiFilledInput",
  propDefaults: ({ set }) =>
    set({
      components: {},
      fullWidth: false,
      inputComponent: "input",
      multiline: false,
      type: "text",
      hiddenLabel: false,
    }),
  selfPropNames: ["classes", "disableUnderline", "hiddenLabel"],
  utilityClass: getFilledInputUtilityClass,
  slotClasses: (ownerState) => ({
    root: ["root", !ownerState.disableUnderline && "underline"],
    input: ["input"],
  }),
});

const FilledInputRoot = styled(InputBaseRoot, {
  /*shouldForwardProp: (prop) =>
    rootShouldForwardProp(prop) || prop === "classes",*/
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;
    return [
      ...inputBaseRootOverridesResolver(props as any, styles),
      !ownerState.disableUnderline && styles.underline,
    ];
  },
})<PropsOf<FilledInputTypeMap>>(({ theme, ownerState }) => {
  const light = theme.palette.mode === "light";
  const bottomLineColor = light
    ? "rgba(0, 0, 0, 0.42)"
    : "rgba(255, 255, 255, 0.7)";
  const backgroundColor = light
    ? "rgba(0, 0, 0, 0.06)"
    : "rgba(255, 255, 255, 0.09)";
  return {
    position: "relative",
    backgroundColor,
    // [review] unitless
    borderTopLeftRadius: `${theme.shape.borderRadius}px`,
    borderTopRightRadius: `${theme.shape.borderRadius}px`,
    transition: theme.transitions.create("background-color", {
      duration: theme.transitions.duration.shorter,
      easing: theme.transitions.easing.easeOut,
    }),
    "&:hover": {
      backgroundColor: light
        ? "rgba(0, 0, 0, 0.09)"
        : "rgba(255, 255, 255, 0.13)",
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor,
      },
    },
    [`&.${filledInputClasses.focused}`]: {
      backgroundColor,
    },
    [`&.${filledInputClasses.disabled}`]: {
      backgroundColor: light
        ? "rgba(0, 0, 0, 0.12)"
        : "rgba(255, 255, 255, 0.12)",
    },
    ...(!ownerState.disableUnderline && {
      "&:after": {
        borderBottom: `2px solid ${
          theme.palette[ownerState.color as PaletteColorName].main
        }`,
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
      [`&.${filledInputClasses.focused}:after`]: {
        transform: "scaleX(1)",
      },
      [`&.${filledInputClasses.error}:after`]: {
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
      [`&:hover:not(.${filledInputClasses.disabled}):before`]: {
        borderBottom: `1px solid ${theme.palette.text.primary}`,
      },
      [`&.${filledInputClasses.disabled}:before`]: {
        borderBottomStyle: "dotted",
      },
    }),
    ...(ownerState.startAdornment && {
      paddingLeft: 12,
    }),
    ...(ownerState.endAdornment && {
      paddingRight: 12,
    }),
    ...(ownerState.multiline && {
      padding: "25px 12px 8px",
      ...(ownerState.size === "small" && {
        paddingTop: 21,
        paddingBottom: 4,
      }),
      ...(ownerState.hiddenLabel && {
        paddingTop: 16,
        paddingBottom: 17,
      }),
    }),
  };
});

const FilledInputInput = styled(InputBaseInput, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: inputBaseInputOverridesResolver as any,
})<PropsOf<FilledInputTypeMap>>(({ theme, ownerState }) => ({
  paddingTop: 25,
  paddingRight: 12,
  paddingBottom: 8,
  paddingLeft: 12,
  "&:-webkit-autofill": {
    WebkitBoxShadow:
      theme.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
    WebkitTextFillColor: theme.palette.mode === "light" ? null : "#fff",
    caretColor: theme.palette.mode === "light" ? null : "#fff",
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit",
  },
  ...(ownerState.size === "small" && {
    paddingTop: 21,
    paddingBottom: 4,
  }),
  ...(ownerState.hiddenLabel && {
    paddingTop: 16,
    paddingBottom: 17,
  }),
  ...(ownerState.multiline && {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
  }),
  ...(ownerState.startAdornment && {
    paddingLeft: 0,
  }),
  ...(ownerState.endAdornment && {
    paddingRight: 0,
  }),
  ...(ownerState.hiddenLabel &&
    ownerState.size === "small" && {
      paddingTop: 8,
      paddingBottom: 9,
    }),
}));

const FilledInput = $.component(function FilledInput({
  allProps,
  classes,
  otherProps,
  props,
}) {
  const componentProps = createMemo(() => {
    const filledInputComponentsProps = {
      root: { ownerState: allProps },
      input: { ownerState: allProps },
    };
    return otherProps.componentsProps
      ? deepmerge(otherProps.componentsProps, filledInputComponentsProps)
      : filledInputComponentsProps;
  });

  const allClasses = mergeProps(() => props.classes || {}, classes);

  return (
    <InputBase
      {...otherProps}
      components={{
        Root: FilledInputRoot,
        Input: FilledInputInput,
        ...(otherProps.components || {}),
      }}
      componentsProps={componentProps()}
      classes={allClasses}
    />
  );
});

export default FilledInput;
