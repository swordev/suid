import { Shadows } from "../styles/createShadows";
import styled from "../styles/styled";
import useTheme from "../styles/useTheme";
import { PaperTypeMap } from "./PaperProps";
import { getPaperUtilityClass } from "./paperClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import { alpha } from "@suid/system";
import clsx from "clsx";

const $ = createComponentFactory<PaperTypeMap>()({
  name: "MuiPaper",
  selfPropNames: ["children", "classes", "elevation", "square", "variant"],
  propDefaults: ({ set }) =>
    set({
      component: "div",
      elevation: 1,
      square: false,
      variant: "elevation",
    }),
  utilityClass: getPaperUtilityClass,
  slotClasses: (o) => ({
    root: [
      "root",
      o.variant,
      !o.square && "rounded",
      o.variant === "elevation" && `elevation${o.elevation}`,
    ],
  }),
});

// Inspired by https://github.com/material-components/material-components-ios/blob/bca36107405594d5b7b16265a5b0ed698f85a5ee/components/Elevation/src/UIColor%2BMaterialElevation.m#L61
const getOverlayAlpha = (elevation: number) => {
  let alphaValue;
  if (elevation < 1) {
    alphaValue = 5.11916 * elevation ** 2;
  } else {
    alphaValue = 4.5 * Math.log(elevation + 1) + 2;
  }
  return Number((alphaValue / 100).toFixed(2));
};

const PaperRoot = styled("div", {
  name: "MuiPaper",
  slot: "Root",
})(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  transition: theme.transitions.create("box-shadow"),
  ...(!ownerState.square && {
    borderRadius: theme.shape.borderRadius,
  }),
  ...(ownerState.variant === "outlined" && {
    border: `1px solid ${theme.palette.divider}`,
  }),
  ...(ownerState.variant === "elevation" && {
    boxShadow:
      theme.shadows[ownerState.elevation as keyof typeof theme.shadows],
    ...(theme.palette.mode === "dark" && {
      backgroundImage: `linear-gradient(${alpha(
        "#fff",
        getOverlayAlpha(ownerState.elevation)
      )}, ${alpha("#fff", getOverlayAlpha(ownerState.elevation))})`,
    }),
  }),
}));

/**
 *
 * Demos:
 *
 * - [Cards](https://mui.com/components/cards/)
 * - [Paper](https://mui.com/components/paper/)
 *
 * API:
 *
 * - [Paper API](https://mui.com/api/paper/)
 */

const Paper = $.component(function Paper({
  allProps,
  props,
  otherProps,
  classes,
}) {
  if ((globalThis as any).ENV !== "production") {
    const theme = useTheme();
    if (theme.shadows[props.elevation as keyof Shadows] === undefined) {
      console.error(
        [
          `MUI: The elevation provided <Paper elevation={${props.elevation}}> is not available in the theme.`,
          `Please make sure that \`theme.shadows[${props.elevation}]\` is defined.`,
        ].join("\n")
      );
    }
  }

  return (
    <PaperRoot
      {...otherProps}
      ownerState={allProps}
      className={clsx(classes.root, allProps.className)}
    >
      {props.children}
    </PaperRoot>
  );
});

export default Paper;
