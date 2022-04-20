import { useListContext } from "../List/ListContext";
import styled from "../styles/styled";
import { ListItemIconTypeMap } from "./ListItemIconProps";
import { getListItemIconUtilityClass } from "./listItemIconClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import clsx from "clsx";
import { mergeProps } from "solid-js";

const $ = createComponentFactory<ListItemIconTypeMap>()({
  name: "MuiListItemIcon",
  selfPropNames: ["alignItems", "children", "classes"],
  propDefaults: ({ set }) =>
    set({
      component: "div",
    }),
  utilityClass: getListItemIconUtilityClass,
  slotClasses: (ownerState) => ({
    root: [
      "root",
      ownerState.alignItems === "flex-start" && "alignItemsFlexStart",
    ],
  }),
});

const ListItemIconRoot = styled("div", {
  name: "MuiListItemIcon",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      styles.root,
      ownerState.alignItems === "flex-start" && styles.alignItemsFlexStart,
    ];
  },
})(({ theme, ownerState }) => ({
  minWidth: 56,
  color: theme.palette.action.active,
  flexShrink: 0,
  display: "inline-flex",
  ...(ownerState.alignItems === "flex-start" && {
    marginTop: 8,
  }),
}));

/**
 * A simple wrapper to apply `List` styles to an `Icon` or `SvgIcon`.
 *
 * Demos:
 *
 * - [Lists](https://mui.com/components/lists/)
 *
 * API:
 *
 * - [ListItemIcon API](https://mui.com/api/list-item-icon/)
 */
const ListItemIcon = $.component(function ListItemIcon({
  allProps,
  classes,
  otherProps,
  props,
}) {
  const context = useListContext();
  const ownerState = mergeProps(
    {
      get alignItems() {
        return context.alignItems;
      },
    },
    allProps
  );
  return (
    <ListItemIconRoot
      {...otherProps}
      className={clsx(classes.root, otherProps.className)}
      ownerState={ownerState}
    >
      {props.children}
    </ListItemIconRoot>
  );
});

export default ListItemIcon;
