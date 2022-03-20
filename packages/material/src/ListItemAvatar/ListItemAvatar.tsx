import { useListContext } from "../List/ListContext";
import styled from "../styles/styled";
import { ListItemAvatarTypeMap } from "./ListItemAvatarProps";
import { getListItemAvatarUtilityClass } from "./listItemAvatarClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import clsx from "clsx";
import { mergeProps } from "solid-js";

const $ = createComponentFactory<ListItemAvatarTypeMap>()({
  name: "MuiListItemAvatar",
  selfPropNames: ["alignItems", "children", "classes"],
  propDefaults: ({ set }) =>
    set({
      component: "div",
    }),
  utilityClass: getListItemAvatarUtilityClass,
  slotClasses: (ownerState) => ({
    root: [
      "root",
      ownerState.alignItems === "flex-start" && "alignItemsFlexStart",
    ],
  }),
});

const ListItemAvatarRoot = styled("div", {
  name: "MuiListItemAvatar",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      styles.root,
      ownerState.alignItems === "flex-start" && styles.alignItemsFlexStart,
    ];
  },
})(({ ownerState }) => ({
  minWidth: 56,
  flexShrink: 0,
  ...(ownerState.alignItems === "flex-start" && {
    marginTop: 8,
  }),
}));

/**
 * A simple wrapper to apply `List` styles to an `Avatar`.
 *
 * Demos:
 *
 * - [Lists](https://mui.com/components/lists/)
 *
 * API:
 *
 * - [ListItemAvatar API](https://mui.com/api/list-item-avatar/)
 */
const ListItemAvatar = $.component(function ListItemAvatar({
  allProps,
  classes,
  otherProps,
}) {
  const context = useListContext();
  const ownerState = mergeProps({ alignItems: context.alignItems }, allProps);

  return (
    <ListItemAvatarRoot
      {...otherProps}
      ownerState={ownerState}
      className={clsx(classes.root, otherProps.className)}
    />
  );
});

export default ListItemAvatar;
