import { IconTypeMap } from ".";
import styled from "../styles/styled";
import capitalize from "../utils/capitalize";
import { getIconUtilityClass } from "./iconClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import clsx from "clsx";

const $ = createComponentFactory<IconTypeMap>()({
  name: "MuiIcon",
  selfPropNames: ["baseClassName", "children", "classes", "color", "fontSize"],
  propDefaults: ({ set }) =>
    set({
      baseClassName: "material-icons",
      color: "inherit",
      component: "span",
      fontSize: "medium",
    }),
  utilityClass: getIconUtilityClass,
  slotClasses: (ownerState) => ({
    root: [
      "root",
      ownerState.color !== "inherit" && `color${capitalize(ownerState.color)}`,
      `fontSize${capitalize(ownerState.fontSize)}`,
    ],
  }),
});

const IconRoot = styled("span", {
  name: "MuiIcon",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      styles.root,
      ownerState.color !== "inherit" &&
        styles[`color${capitalize(ownerState.color)}`],
      styles[`fontSize${capitalize(ownerState.fontSize)}`],
    ];
  },
})(({ theme, ownerState }) => ({
  userSelect: "none",
  width: "1em",
  height: "1em",
  // Chrome fix for https://bugs.chromium.org/p/chromium/issues/detail?id=820541
  // To remove at some point.
  overflow: "hidden",
  display: "inline-block", // allow overflow hidden to take action
  textAlign: "center", // support non-square icon
  flexShrink: 0,
  fontSize: {
    inherit: "inherit",
    small: theme.typography.pxToRem(20),
    medium: theme.typography.pxToRem(24),
    large: theme.typography.pxToRem(36),
  }[ownerState.fontSize],
  // TODO v5 deprecate, v6 remove for sx
  color: {
    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main,
    info: theme.palette.info.main,
    success: theme.palette.success.main,
    warning: theme.palette.warning.main,
    action: theme.palette.action.active,
    error: theme.palette.error.main,
    disabled: theme.palette.action.disabled,
    inherit: undefined,
  }[ownerState.color],
}));

/**
 *
 * Demos:
 *
 * - [Icons](https://mui.com/components/icons/)
 * - [Material Icons](https://mui.com/components/material-icons/)
 *
 * API:
 *
 * - [Icon API](https://mui.com/api/icon/)
 */
const Icon = $.component(function Icon({
  allProps,
  classes,
  otherProps,
  props,
}) {
  return (
    <IconRoot
      class={clsx(
        props.baseClassName,
        // Prevent the translation of the text content.
        // The font relies on the exact text content to render the icon.
        "notranslate",
        classes.root,
        otherProps.class
      )}
      ownerState={allProps}
      aria-hidden
      {...otherProps}
    />
  );
});

export default Icon;
