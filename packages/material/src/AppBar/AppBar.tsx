import { AppBarTypeMap } from ".";
import Paper from "../Paper";
import styled from "../styles/styled";
import capitalize from "../utils/capitalize";
import { getAppBarUtilityClass } from "./appBarClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import { InPropsOf } from "@suid/types";
import clsx from "clsx";

const $ = createComponentFactory<AppBarTypeMap>()({
  name: "MuiAppBar",
  selfPropNames: ["classes", "color", "enableColorOnDark", "position"],
  utilityClass: getAppBarUtilityClass,
  propDefaults: ({ set }) =>
    set({
      component: "header",
      color: "primary",
      enableColorOnDark: false,
      position: "fixed",
    }),
  slotClasses: (ownerState) => ({
    root: [
      "root",
      `color${capitalize(ownerState.color)}`,
      `position${capitalize(ownerState.position)}`,
    ],
  }),
});

const AppBarRoot = styled(Paper, {
  name: "MuiAppBar",
  slot: "Root",
  overridesResolver: (props, styles) => {
    return [
      styles.root,
      styles[`position${capitalize(props.ownerState.position)}`],
      styles[`color${capitalize(props.ownerState.color)}`],
    ];
  },
})<InPropsOf<AppBarTypeMap>>(({ theme, ownerState }) => {
  const backgroundColorDefault =
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[900];

  return {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    boxSizing: "border-box", // Prevent padding issue with the Modal and fixed positioned AppBar.
    flexShrink: 0,
    ...(ownerState.position === "fixed" && {
      position: "fixed",
      zIndex: theme.zIndex.appBar,
      top: 0,
      left: "auto",
      right: 0,
      "@media print": {
        // Prevent the app bar to be visible on each printed page.
        position: "absolute",
      },
    }),
    ...(ownerState.position === "absolute" && {
      position: "absolute",
      zIndex: theme.zIndex.appBar,
      top: 0,
      left: "auto",
      right: 0,
    }),
    ...(ownerState.position === "sticky" && {
      // ⚠️ sticky is not supported by IE11.
      position: "sticky",
      zIndex: theme.zIndex.appBar,
      top: 0,
      left: "auto",
      right: 0,
    }),
    ...(ownerState.position === "static" && {
      position: "static",
    }),
    ...(ownerState.position === "relative" && {
      position: "relative",
    }),
    ...(ownerState.color === "default" && {
      backgroundColor: backgroundColorDefault,
      color: theme.palette.getContrastText(backgroundColorDefault),
    }),
    ...(ownerState.color &&
      ownerState.color !== "default" &&
      ownerState.color !== "inherit" &&
      ownerState.color !== "transparent" && {
        backgroundColor: theme.palette[ownerState.color].main,
        color: theme.palette[ownerState.color].contrastText,
      }),
    ...(ownerState.color === "inherit" && {
      color: "inherit",
    }),
    ...(theme.palette.mode === "dark" &&
      !ownerState.enableColorOnDark && {
        backgroundColor: undefined,
        color: undefined,
      }),
    ...(ownerState.color === "transparent" && {
      backgroundColor: "transparent",
      color: "inherit",
      ...(theme.palette.mode === "dark" && {
        backgroundImage: "none",
      }),
    }),
  };
});

/**
 *
 * Demos:
 *
 * - [App Bar](https://mui.com/components/app-bar/)
 *
 * API:
 *
 * - [AppBar API](https://mui.com/api/app-bar/)
 * - inherits [Paper API](https://mui.com/api/paper/)
 */

const AppBar = $.component(function AppBar({
  allProps,
  classes,
  props,
  otherProps,
}) {
  return (
    <AppBarRoot
      square
      ownerState={allProps}
      elevation={4}
      className={clsx(
        classes.root,
        {
          "mui-fixed": props.position === "fixed", // Useful for the Dialog
        },
        otherProps.className
      )}
      {...otherProps}
    />
  );
});

export default AppBar;
