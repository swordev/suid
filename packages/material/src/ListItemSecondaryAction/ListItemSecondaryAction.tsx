import { useListContext } from "../List/ListContext";
import styled from "../styles/styled";
import { ListItemSecondaryActionTypeMap } from "./ListItemSecondaryActionProps";
import { getListItemSecondaryActionClassesUtilityClass } from "./listItemSecondaryActionClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import { ComponentInProps } from "@suid/types";
import clsx from "clsx";
import { mergeProps } from "solid-js";

type OwnerState = ComponentInProps<ListItemSecondaryActionTypeMap> & {
  disableGutters: boolean;
};

const $ = createComponentFactory<ListItemSecondaryActionTypeMap, OwnerState>()({
  name: "MuiListItemSecondaryAction",
  selfPropNames: ["alignItems", "children", "classes"],
  propDefaults: ({ set }) => set({}),
  autoCallUseClasses: false,
  utilityClass: getListItemSecondaryActionClassesUtilityClass,
  slotClasses: (ownerState) => ({
    root: ["root", ownerState.disableGutters && "disableGutters"],
  }),
});

const ListItemSecondaryActionRoot = styled("div", {
  name: "MuiListItemSecondaryAction",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [styles.root, ownerState.disableGutters && styles.disableGutters];
  },
})<OwnerState>(({ ownerState }) => ({
  position: "absolute",
  right: 16,
  top: "50%",
  transform: "translateY(-50%)",
  ...(ownerState.disableGutters && {
    right: 0,
  }),
}));

/**
 * Must be used as the last child of ListItem to function properly.
 *
 * Demos:
 *
 * - [Lists](https://mui.com/components/lists/)
 *
 * API:
 *
 * - [ListItemSecondaryAction API](https://mui.com/api/list-item-secondary-action/)
 */
const ListItemSecondaryAction = $.component(function ListItemSecondaryAction({
  allProps,
  otherProps,
  props,
}) {
  const context = useListContext();
  const ownerState = mergeProps(
    () => ({ disableGutters: !!context.disableGutters }),
    allProps
  );
  const classes = $.useClasses(ownerState);

  return (
    <ListItemSecondaryActionRoot
      {...otherProps}
      className={clsx(classes.root, otherProps.className)}
      ownerState={ownerState}
    >
      {props.children}
    </ListItemSecondaryActionRoot>
  );
});

export default ListItemSecondaryAction;
