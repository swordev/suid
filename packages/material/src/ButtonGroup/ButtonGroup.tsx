import { ButtonGroupTypeMap } from ".";
import styled from "../styles/styled";
import capitalize from "../utils/capitalize";
import ButtonGroupContext from "./ButtonGroupContext";
import buttonGroupClasses, {
  getButtonGroupUtilityClass,
} from "./buttonGroupClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import { alpha } from "@suid/system";
import clsx from "clsx";
import { createMemo } from "solid-js";

const $ = createComponentFactory<ButtonGroupTypeMap>()({
  name: "MuiButtonGroup",
  selfPropNames: [
    "children",
    "classes",
    "color",
    "disableElevation",
    "disableFocusRipple",
    "disableRipple",
    "disabled",
    "fullWidth",
    "orientation",
    "size",
    "variant",
  ],
  propDefaults: ({ set }) =>
    set({
      color: "primary",
      component: "div",
      disabled: false,
      disableElevation: false,
      disableFocusRipple: false,
      disableRipple: false,
      fullWidth: false,
      orientation: "horizontal",
      size: "medium",
      variant: "outlined",
    }),
  utilityClass: getButtonGroupUtilityClass,
  slotClasses: (ownerState) => ({
    root: [
      "root",
      ownerState.variant,
      ownerState.orientation === "vertical" && "vertical",
      ownerState.fullWidth && "fullWidth",
      ownerState.disableElevation && "disableElevation",
    ],
    grouped: [
      "grouped",
      `grouped${capitalize(ownerState.orientation)}`,
      `grouped${capitalize(ownerState.variant)}`,
      `grouped${capitalize(ownerState.variant)}${capitalize(
        ownerState.orientation
      )}`,
      `grouped${capitalize(ownerState.variant)}${capitalize(ownerState.color)}`,
      ownerState.disabled && "disabled",
    ],
  }),
});

const ButtonGroupRoot = styled("div", {
  name: "MuiButtonGroup",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      { [`& .${buttonGroupClasses.grouped}`]: styles.grouped },
      {
        [`& .${buttonGroupClasses.grouped}`]:
          styles[`grouped${capitalize(ownerState.orientation)}`],
      },
      {
        [`& .${buttonGroupClasses.grouped}`]:
          styles[`grouped${capitalize(ownerState.variant)}`],
      },
      {
        [`& .${buttonGroupClasses.grouped}`]:
          styles[
            `grouped${capitalize(ownerState.variant)}${capitalize(
              ownerState.orientation
            )}`
          ],
      },
      {
        [`& .${buttonGroupClasses.grouped}`]:
          styles[
            `grouped${capitalize(ownerState.variant)}${capitalize(
              ownerState.color
            )}`
          ],
      },
      styles.root,
      styles[ownerState.variant],
      ownerState.disableElevation === true && styles.disableElevation,
      ownerState.fullWidth && styles.fullWidth,
      ownerState.orientation === "vertical" && styles.vertical,
    ];
  },
})(({ theme, ownerState }) => ({
  display: "inline-flex",
  borderRadius: theme.shape.borderRadius,
  ...(ownerState.variant === "contained" && {
    boxShadow: theme.shadows[2],
  }),
  ...(ownerState.disableElevation && {
    boxShadow: "none",
  }),
  ...(ownerState.fullWidth && {
    width: "100%",
  }),
  ...(ownerState.orientation === "vertical" && {
    flexDirection: "column",
  }),
  [`& .${buttonGroupClasses.grouped}`]: {
    minWidth: 40,
    "&:not(:first-of-type)": {
      ...(ownerState.orientation === "horizontal" && {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
      }),
      ...(ownerState.orientation === "vertical" && {
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
      }),
      ...(ownerState.variant === "outlined" &&
        ownerState.orientation === "horizontal" && {
          marginLeft: -1,
        }),
      ...(ownerState.variant === "outlined" &&
        ownerState.orientation === "vertical" && {
          marginTop: -1,
        }),
    },
    "&:not(:last-of-type)": {
      ...(ownerState.orientation === "horizontal" && {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
      }),
      ...(ownerState.orientation === "vertical" && {
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
      }),
      ...(ownerState.variant === "text" &&
        ownerState.orientation === "horizontal" && {
          borderRight: `1px solid ${
            theme.palette.mode === "light"
              ? "rgba(0, 0, 0, 0.23)"
              : "rgba(255, 255, 255, 0.23)"
          }`,
        }),
      ...(ownerState.variant === "text" &&
        ownerState.orientation === "vertical" && {
          borderBottom: `1px solid ${
            theme.palette.mode === "light"
              ? "rgba(0, 0, 0, 0.23)"
              : "rgba(255, 255, 255, 0.23)"
          }`,
        }),
      ...(ownerState.variant === "text" &&
        ownerState.color !== "inherit" && {
          borderColor: alpha(theme.palette[ownerState.color].main, 0.5),
        }),
      ...(ownerState.variant === "outlined" &&
        ownerState.orientation === "horizontal" && {
          borderRightColor: "transparent",
        }),
      ...(ownerState.variant === "outlined" &&
        ownerState.orientation === "vertical" && {
          borderBottomColor: "transparent",
        }),
      ...(ownerState.variant === "contained" &&
        ownerState.orientation === "horizontal" && {
          borderRight: `1px solid ${theme.palette.grey[400]}`,
          [`&.${buttonGroupClasses.disabled}`]: {
            borderRight: `1px solid ${theme.palette.action.disabled}`,
          },
        }),
      ...(ownerState.variant === "contained" &&
        ownerState.orientation === "vertical" && {
          borderBottom: `1px solid ${theme.palette.grey[400]}`,
          [`&.${buttonGroupClasses.disabled}`]: {
            borderBottom: `1px solid ${theme.palette.action.disabled}`,
          },
        }),
      ...(ownerState.variant === "contained" &&
        ownerState.color !== "inherit" && {
          borderColor: theme.palette[ownerState.color].dark,
        }),
      "&:hover": {
        ...(ownerState.variant === "outlined" &&
          ownerState.orientation === "horizontal" && {
            borderRightColor: "currentColor",
          }),
        ...(ownerState.variant === "outlined" &&
          ownerState.orientation === "vertical" && {
            borderBottomColor: "currentColor",
          }),
      },
    },
    "&:hover": {
      ...(ownerState.variant === "contained" && {
        boxShadow: "none",
      }),
    },
    ...(ownerState.variant === "contained" && {
      boxShadow: "none",
    }),
  },
}));

/**
 *
 * Demos:
 *
 * - [Button Group](https://mui.com/components/button-group/)
 *
 * API:
 *
 * - [ButtonGroup API](https://mui.com/api/button-group/)
 */
const ButtonGroup = $.component(function ButtonGroup({
  allProps,
  classes,
  otherProps,
  props,
}) {
  const context = createMemo(() => ({
    className: classes.grouped,
    color: props.color,
    disabled: props.disabled,
    disableElevation: props.disableElevation,
    disableFocusRipple: props.disableFocusRipple,
    disableRipple: props.disableRipple,
    fullWidth: props.fullWidth,
    size: props.size,
    variant: props.variant,
  }));

  return (
    <ButtonGroupRoot
      as={otherProps.component}
      role="group"
      className={clsx(classes.root, otherProps.className)}
      ownerState={allProps}
      {...otherProps}
    >
      <ButtonGroupContext.Provider value={context()}>
        {props.children}
      </ButtonGroupContext.Provider>
    </ButtonGroupRoot>
  );
});

export default ButtonGroup;
