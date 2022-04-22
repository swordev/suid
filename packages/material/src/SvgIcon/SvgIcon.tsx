import styled from "../styles/styled";
import SvgIconContext from "./SvgIconContext";
import { SvgIconTypeMap } from "./SvgIconProps";
import { getSvgIconUtilityClass } from "./svgIconClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import capitalize from "@suid/utils/capitalize";
import clsx from "clsx";
import { Show, useContext } from "solid-js";

const $ = createComponentFactory<SvgIconTypeMap>()({
  name: "MuiSvgIcon",
  selfPropNames: [
    "children",
    "classes",
    "color",
    "fontSize",
    "htmlColor",
    "inheritViewBox",
    "shapeRendering",
    "titleAccess",
    "viewBox",
  ],
  propDefaults: ({ set }) => {
    const context = useContext(SvgIconContext);
    return set({
      component: "svg",
      color: "inherit",
      fontSize: context?.fontSize ?? "medium",
      inheritViewBox: false,
      viewBox: "0 0 24 24",
    });
  },
  utilityClass: getSvgIconUtilityClass,
  slotClasses: (o) => ({
    root: [
      "root",
      o.color !== "inherit" && `color${capitalize(o.color)}`,
      `fontSize${capitalize(o.fontSize)}`,
    ],
  }),
});

const SvgIconRoot = styled("svg", {
  name: "MuiSvgIcon",
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
  display: "inline-block",
  fill: "currentColor",
  flexShrink: 0,
  transition: theme.transitions?.create?.("fill", {
    duration: theme.transitions?.duration?.shorter,
  }),
  fontSize: {
    inherit: "inherit",
    small: theme.typography?.pxToRem?.(20) || "1.25rem",
    medium: theme.typography?.pxToRem?.(24) || "1.5rem",
    large: theme.typography?.pxToRem?.(35) || "2.1875",
  }[ownerState.fontSize],
  // TODO v5 deprecate, v6 remove for sx
  color:
    theme.palette?.[ownerState.color as "primary"]?.main ??
    {
      action: theme.palette?.action?.active,
      disabled: theme.palette?.action?.disabled,
      inherit: undefined,
    }[ownerState.color as "inherit"],
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
 * - [SvgIcon API](https://mui.com/api/svg-icon/)
 */

const SvgIcon = $.component(function SvgIcon({
  allProps,
  props,
  otherProps,
  classes,
}) {
  return (
    <SvgIconRoot
      className={clsx(classes.root, otherProps.className)}
      ownerState={allProps}
      color={props.htmlColor}
      aria-hidden={props.titleAccess ? undefined : true}
      role={props.titleAccess ? "img" : undefined}
      viewBox={!props.inheritViewBox ? props.viewBox : undefined}
      {...{
        ["focusable" as any]: "false",
      }}
      {...otherProps}
    >
      {props.children}
      <Show when={!!props.titleAccess}>
        <title>{props.titleAccess}</title>
      </Show>
    </SvgIconRoot>
  );
});

export default SvgIcon;
