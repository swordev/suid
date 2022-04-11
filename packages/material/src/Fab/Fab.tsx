import ButtonBase from "../ButtonBase";
import styled from "../styles/styled";
import capitalize from "../utils/capitalize";
import { FabTypeMap } from "./FabProps";
import fabClasses, { getFabUtilityClass } from "./fabClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import { InPropsOf } from "@suid/types";
import clsx from "clsx";

const $ = createComponentFactory<FabTypeMap>()({
  name: "MuiFab",
  propDefaults: ({ set }) =>
    set({
      color: "default",
      component: "button",
      disabled: false,
      disableFocusRipple: false,
      size: "large",
      variant: "circular",
    }),
  selfPropNames: [
    "children",
    "classes",
    "color",
    "disableFocusRipple",
    "disableRipple",
    "disabled",
    "href",
    "size",
    "variant",
  ],
  utilityClass: getFabUtilityClass,
  slotClasses: (ownerState) => ({
    root: [
      "root",
      ownerState.variant,
      `size${capitalize(ownerState.size)}`,
      ownerState.color === "inherit" ? "colorInherit" : ownerState.color,
    ],
  }),
});

const FabRoot = styled(ButtonBase, {
  name: "MuiFab",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      styles.root,
      styles[ownerState.variant],
      styles[`size${capitalize(ownerState.size)}`],
      ownerState.color === "inherit" && styles.colorInherit,
      styles[capitalize(ownerState.size)],
      styles[ownerState.color],
    ];
  },
})<InPropsOf<FabTypeMap>>(
  ({ theme, ownerState }) => ({
    ...theme.typography.button,
    minHeight: 36,
    transition: theme.transitions.create(
      ["background-color", "box-shadow", "border-color"],
      {
        duration: theme.transitions.duration.short,
      }
    ),
    borderRadius: "50%",
    padding: 0,
    minWidth: 0,
    width: 56,
    height: 56,
    boxShadow: theme.shadows[6],
    "&:active": {
      boxShadow: theme.shadows[12],
    },
    color: theme.palette.getContrastText(theme.palette.grey[300]),
    backgroundColor: theme.palette.grey[300],
    "&:hover": {
      backgroundColor: theme.palette.grey.A100,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: theme.palette.grey[300],
      },
      textDecoration: "none",
    },
    [`&.${fabClasses.focusVisible}`]: {
      boxShadow: theme.shadows[6],
    },
    [`&.${fabClasses.disabled}`]: {
      color: theme.palette.action.disabled,
      boxShadow: theme.shadows[0],
      backgroundColor: theme.palette.action.disabledBackground,
    },
    ...(ownerState.size === "small" && {
      width: 40,
      height: 40,
    }),
    ...(ownerState.size === "medium" && {
      width: 48,
      height: 48,
    }),
    ...(ownerState.variant === "extended" && {
      borderRadius: 48 / 2,
      padding: "0 16px",
      width: "auto",
      minHeight: "auto",
      minWidth: 48,
      height: 48,
    }),
    ...(ownerState.variant === "extended" &&
      ownerState.size === "small" && {
        width: "auto",
        padding: "0 8px",
        borderRadius: 34 / 2,
        minWidth: 34,
        height: 34,
      }),
    ...(ownerState.variant === "extended" &&
      ownerState.size === "medium" && {
        width: "auto",
        padding: "0 16px",
        borderRadius: 40 / 2,
        minWidth: 40,
        height: 40,
      }),
    ...(ownerState.color === "inherit" && {
      color: "inherit",
    }),
  }),
  ({ theme, ownerState }) => ({
    ...(ownerState.color !== "inherit" &&
      ownerState.color !== "default" &&
      theme.palette[ownerState.color] != null && {
        color: theme.palette[ownerState.color].contrastText,
        backgroundColor: theme.palette[ownerState.color].main,
        "&:hover": {
          backgroundColor: theme.palette[ownerState.color].dark,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: theme.palette[ownerState.color].main,
          },
        },
      }),
  })
);

/**
 *
 * Demos:
 *
 * - [Floating Action Button](https://mui.com/components/floating-action-button/)
 *
 * API:
 *
 * - [Fab API](https://mui.com/api/fab/)
 * - inherits [ButtonBase API](https://mui.com/api/button-base/)
 */
const Fab = $.component(function Fab({ allProps, classes, otherProps, props }) {
  return (
    <FabRoot
      className={clsx(classes.root, otherProps.className)}
      disabled={props.disabled}
      focusRipple={!props.disableFocusRipple}
      focusVisibleClassName={clsx(
        props.classes?.focusVisible,
        otherProps.focusVisibleClassName
      )}
      ownerState={allProps}
      {...otherProps}
    >
      {props.children}
    </FabRoot>
  );
});

export default Fab;
