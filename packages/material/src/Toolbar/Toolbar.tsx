import { ToolbarTypeMap } from ".";
import styled from "../styles/styled";
import { getToolbarUtilityClass } from "./toolbarClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import clsx from "clsx";

const $ = createComponentFactory<ToolbarTypeMap>()({
  name: "MuiToolbar",
  selfPropNames: ["children", "classes", "disableGutters", "variant"],
  propDefaults: ({ set }) =>
    set({
      component: "div",
      disableGutters: false,
      variant: "regular",
    }),
  utilityClass: getToolbarUtilityClass,
  slotClasses: (ownerState) => ({
    root: ["root", !ownerState.disableGutters && "gutters", ownerState.variant],
  }),
});

const ToolbarRoot = styled("div", {
  name: "MuiToolbar",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      styles.root,
      !ownerState.disableGutters && styles.gutters,
      styles[ownerState.variant],
    ];
  },
})(
  ({ theme, ownerState }) => ({
    position: "relative",
    display: "flex",
    alignItems: "center",
    ...(!ownerState.disableGutters && {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
      },
    }),
    ...(ownerState.variant === "dense" && {
      minHeight: 48,
    }),
  }),
  ({ theme, ownerState }) =>
    ownerState.variant === "regular" && theme.mixins.toolbar
);

/**
 *
 * Demos:
 *
 * - [App Bar](https://mui.com/components/app-bar/)
 *
 * API:
 *
 * - [Toolbar API](https://mui.com/api/toolbar/)
 */
const Toolbar = $.component(function Toolbar({
  allProps,
  props,
  classes,
  otherProps,
}) {
  return (
    <ToolbarRoot
      {...otherProps}
      as={otherProps.component}
      class={clsx(classes.root, otherProps.class)}
      ownerState={allProps}
    >
      {props.children}
    </ToolbarRoot>
  );
});

export default Toolbar;
