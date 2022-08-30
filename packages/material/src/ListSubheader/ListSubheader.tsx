import { ListSubheaderTypeMap } from ".";
import styled from "../styles/styled";
import capitalize from "../utils/capitalize";
import { getListSubheaderUtilityClass } from "./listSubheaderClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import clsx from "clsx";

const $ = createComponentFactory<ListSubheaderTypeMap>()({
  name: "MuiListSubheader",
  selfPropNames: [
    "children",
    "classes",
    "color",
    "disableGutters",
    "disableSticky",
    "inset",
  ],
  propDefaults: ({ set }) =>
    set({
      color: "default",
      component: "li",
      disableGutters: false,
      disableSticky: false,
      inset: false,
    }),
  utilityClass: getListSubheaderUtilityClass,
  slotClasses: (ownerState) => ({
    root: [
      "root",
      ownerState.color !== "default" && `color${capitalize(ownerState.color)}`,
      !ownerState.disableGutters && "gutters",
      ownerState.inset && "inset",
      !ownerState.disableSticky && "sticky",
    ],
  }),
});

const ListSubheaderRoot = styled("li", {
  name: "MuiListSubheader",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      styles.root,
      ownerState.color !== "default" &&
        styles[`color${capitalize(ownerState.color)}`],
      !ownerState.disableGutters && styles.gutters,
      ownerState.inset && styles.inset,
      !ownerState.disableSticky && styles.sticky,
    ];
  },
})(({ theme, ownerState }) => ({
  boxSizing: "border-box",
  lineHeight: "48px",
  listStyle: "none",
  color: theme.palette.text.secondary,
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: theme.typography.pxToRem(14),
  ...(ownerState.color === "primary" && {
    color: theme.palette.primary.main,
  }),
  ...(ownerState.color === "inherit" && {
    color: "inherit",
  }),
  ...(!ownerState.disableGutters && {
    paddingLeft: 16,
    paddingRight: 16,
  }),
  ...(ownerState.inset && {
    paddingLeft: 72,
  }),
  ...(!ownerState.disableSticky && {
    position: "sticky",
    top: 0,
    zIndex: 1,
    backgroundColor: theme.palette.background.paper,
  }),
}));

/**
 *
 * Demos:
 *
 * - [Lists](https://mui.com/components/lists/)
 *
 * API:
 *
 * - [ListSubheader API](https://mui.com/api/list-subheader/)
 */

const ListSubheader = $.component(function ListSubheader({
  allProps,
  classes,
  otherProps,
  props,
}) {
  return (
    <ListSubheaderRoot
      {...otherProps}
      class={clsx(classes.root, otherProps.class)}
      ownerState={allProps}
    >
      {props.children}
    </ListSubheaderRoot>
  );
});

export default ListSubheader;
