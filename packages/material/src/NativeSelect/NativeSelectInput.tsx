import { Theme } from "../styles";
import styled, { skipRootProps } from "../styles/styled";
import capitalize from "../utils/capitalize";
import { getNativeSelectUtilityClasses } from "./nativeSelectClasses";
import nativeSelectClasses from "./nativeSelectClasses";
import composeClasses from "@suid/base/composeClasses";
import { SxProps } from "@suid/system";
import createRef from "@suid/system/createRef";
import { SxPropsObject } from "@suid/system/sxProps";
import * as ST from "@suid/types";
import clsx from "clsx";
import { splitProps, mergeProps, Show } from "solid-js";

export interface NativeSelectInputProps extends ST.PropsOf<"select"> {
  disabled?: boolean;
  IconComponent: ST.ElementType;
  inputRef?: ST.Ref<HTMLSelectElement>;
  variant?: "standard" | "outlined" | "filled";
  sx?: SxProps<Theme>;
}

const useUtilityClasses = (
  ownerState: NativeSelectInputProps & {
    open?: boolean;
    classes?: Record<string, string>;
  }
) => {
  const slots = {
    select: [
      "select",
      ownerState.variant,
      ownerState.disabled && "disabled",
      ownerState.multiple && "multiple",
    ],
    icon: [
      "icon",
      ownerState.variant && `icon${capitalize(ownerState.variant)}`,
      ownerState.open && "iconOpen",
      ownerState.disabled && "disabled",
    ],
  };

  return composeClasses(
    slots,
    getNativeSelectUtilityClasses,
    ownerState.classes
  );
};

export const nativeSelectSelectStyles: (data: {
  ownerState: any;
  theme: Theme;
}) => SxPropsObject<Theme> = ({ ownerState, theme }) => ({
  MozAppearance: "none", // Reset
  WebkitAppearance: "none", // Reset
  // When interacting quickly, the text can end up selected.
  // Native select can't be selected either.
  userSelect: "none",
  borderRadius: 0, // Reset
  cursor: "pointer",
  "&:focus": {
    // Show that it's not an text input
    backgroundColor:
      theme.palette.mode === "light"
        ? "rgba(0, 0, 0, 0.05)"
        : "rgba(255, 255, 255, 0.05)",
    borderRadius: 0, // Reset Chrome style
  },
  // Remove IE11 arrow
  "&::-ms-expand": {
    display: "none",
  },
  [`&.${nativeSelectClasses.disabled}`]: {
    cursor: "default",
  },
  "&[multiple]": {
    height: "auto",
  },
  "&:not([multiple]) option, &:not([multiple]) optgroup": {
    backgroundColor: theme.palette.background.paper,
  },
  // Bump specificity to allow extending custom inputs
  "&&&": {
    paddingRight: 24,
    minWidth: 16, // So it doesn't collapse.
  },
  ...(ownerState.variant === "filled" && {
    "&&&": {
      paddingRight: 32,
    },
  }),
  ...(ownerState.variant === "outlined" && {
    borderRadius: theme.shape.borderRadius,
    "&:focus": {
      borderRadius: theme.shape.borderRadius, // Reset the reset for Chrome style
    },
    "&&&": {
      paddingRight: 32,
    },
  }),
});

const NativeSelectSelect = styled("select", {
  name: "MuiNativeSelect",
  slot: "Select",
  skipProps: skipRootProps,
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      styles.select,
      styles[ownerState.variant],
      { [`&.${nativeSelectClasses.multiple}`]: styles.multiple },
    ];
  },
})(nativeSelectSelectStyles);

export const nativeSelectIconStyles: (data: {
  ownerState: any;
  theme: Theme;
}) => SxPropsObject<Theme> = ({ ownerState, theme }) => ({
  // We use a position absolute over a flexbox in order to forward the pointer events
  // to the input and to support wrapping tags..
  position: "absolute",
  right: 0,
  top: "calc(50% - .5em)", // Center vertically, height is 1em
  pointerEvents: "none", // Don't block pointer events on the select under the icon.
  color: theme.palette.action.active,
  [`&.${nativeSelectClasses.disabled}`]: {
    color: theme.palette.action.disabled,
  },
  ...(ownerState.open && {
    transform: "rotate(180deg)",
  }),
  ...(ownerState.variant === "filled" && {
    right: 7,
  }),
  ...(ownerState.variant === "outlined" && {
    right: 7,
  }),
});

const NativeSelectIcon = styled("svg", {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;
    return [
      styles.icon,
      ownerState.variant && styles[`icon${capitalize(ownerState.variant)}`],
      ownerState.open && styles.iconOpen,
    ];
  },
})(nativeSelectIconStyles);

/**
 * @ignore - internal component.
 */
const NativeSelectInput = function NativeSelectInput(
  props: NativeSelectInputProps
) {
  const ref = createRef(props);

  const [, other] = splitProps(props, [
    "class",
    "disabled",
    "IconComponent",
    "inputRef",
    "variant",
  ]);

  const baseProps = mergeProps({ variant: "standard" as const }, props);

  const ownerState = mergeProps(props, {
    get disabled() {
      return props.disabled;
    },
    get variant() {
      return baseProps.variant;
    },
  });

  const classes = useUtilityClasses(ownerState);
  return (
    <>
      <NativeSelectSelect
        ownerState={ownerState}
        class={clsx(classes.select, props.class)}
        disabled={props.disabled}
        ref={props.inputRef || ref}
        {...other}
      />
      <Show when={!props.multiple}>
        <NativeSelectIcon
          as={props.IconComponent}
          ownerState={ownerState}
          class={classes.icon}
        />
      </Show>
    </>
  );
};
export default NativeSelectInput;
