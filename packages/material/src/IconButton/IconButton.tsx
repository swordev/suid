import { IconButtonTypeMap } from ".";
import ButtonBase from "../ButtonBase";
import styled from "../styles/styled";
import capitalize from "../utils/capitalize";
import iconButtonClasses, {
  getIconButtonUtilityClass,
} from "./iconButtonClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import { alpha } from "@suid/system";
import clsx from "clsx";

const $ = createComponentFactory<IconButtonTypeMap>()({
  name: "MuiIconButton",
  selfPropNames: [
    "children",
    "classes",
    "color",
    "disableFocusRipple",
    "disabled",
    "edge",
    "size",
  ],
  propDefaults: ({ set }) =>
    set({
      edge: false,
      color: "default",
      disabled: false,
      disableFocusRipple: false,
      size: "medium",
    }),
  utilityClass: getIconButtonUtilityClass,
  slotClasses: (ownerState) => ({
    root: [
      "root",
      ownerState.disabled && "disabled",
      ownerState.color !== "default" && `color${capitalize(ownerState.color)}`,
      ownerState.edge && `edge${capitalize(ownerState.edge)}`,
      `size${capitalize(ownerState.size)}`,
    ],
  }),
});

const IconButtonRoot = styled(ButtonBase, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      styles.root,
      ownerState.color !== "default" &&
        styles[`color${capitalize(ownerState.color)}`],
      ownerState.edge && styles[`edge${capitalize(ownerState.edge)}`],
      styles[`size${capitalize(ownerState.size)}`],
    ];
  },
})(
  ({ theme, ownerState }) => ({
    textAlign: "center",
    flex: "0 0 auto",
    fontSize: theme.typography.pxToRem(24),
    padding: 8,
    borderRadius: "50%",
    overflow: "visible", // Explicitly set the default value to solve a bug on IE11.
    color: theme.palette.action.active,
    transition: theme.transitions.create("background-color", {
      duration: theme.transitions.duration.shortest,
    }),
    ...(!ownerState.disableRipple && {
      "&:hover": {
        backgroundColor: alpha(
          theme.palette.action.active,
          theme.palette.action.hoverOpacity
        ),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent",
        },
      },
    }),
    ...(ownerState.edge === "start" && {
      marginLeft: ownerState.size === "small" ? -3 : -12,
    }),
    ...(ownerState.edge === "end" && {
      marginRight: ownerState.size === "small" ? -3 : -12,
    }),
  }),
  ({ theme, ownerState }) => ({
    ...(ownerState.color === "inherit" && {
      color: "inherit",
    }),
    ...(ownerState.color !== "inherit" &&
      ownerState.color !== "default" && {
        color: theme.palette[ownerState.color].main,
        ...(!ownerState.disableRipple && {
          "&:hover": {
            backgroundColor: alpha(
              theme.palette[ownerState.color].main,
              theme.palette.action.hoverOpacity
            ),
            // Reset on touch devices, it doesn't add specificity
            "@media (hover: none)": {
              backgroundColor: "transparent",
            },
          },
        }),
      }),
    ...(ownerState.size === "small" && {
      padding: 5,
      fontSize: theme.typography.pxToRem(18),
    }),
    ...(ownerState.size === "large" && {
      padding: 12,
      fontSize: theme.typography.pxToRem(28),
    }),
    [`&.${iconButtonClasses.disabled}`]: {
      backgroundColor: "transparent",
      color: theme.palette.action.disabled,
    },
  })
);

/**
 * Refer to the [Icons](https://mui.com/components/icons/) section of the documentation
 * regarding the available icon options.
 *
 * Demos:
 *
 * - [Buttons](https://mui.com/components/buttons/)
 *
 * API:
 *
 * - [IconButton API](https://mui.com/api/icon-button/)
 * - inherits [ButtonBase API](https://mui.com/api/button-base/)
 */
const IconButton = $.component(function IconButton({
  allProps,
  classes,
  otherProps,
  props,
}) {
  return (
    <IconButtonRoot
      className={clsx(classes.root, otherProps.className)}
      centerRipple
      focusRipple={!props.disableFocusRipple}
      disabled={props.disabled}
      ownerState={allProps}
      {...otherProps}
    >
      {props.children}
    </IconButtonRoot>
  );
});

export default IconButton;
