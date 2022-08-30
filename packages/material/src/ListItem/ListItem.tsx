import ListContext, { useListContext } from "../List/ListContext";
import { listItemButtonClasses } from "../ListItemButton";
import ListItemSecondaryAction from "../ListItemSecondaryAction";
import styled from "../styles/styled";
import { ListItemTypeMap } from "./ListItemProps";
import listItemClasses, { getListItemUtilityClass } from "./listItemClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import isHostComponent from "@suid/base/utils/isHostComponent";
import { alpha } from "@suid/system";
import Dynamic from "@suid/system/Dynamic";
import createElementRef from "@suid/system/createElementRef";
import { ElementType } from "@suid/types";
import clsx from "clsx";
import { createEffect, mergeProps, Show, splitProps } from "solid-js";

const $ = createComponentFactory<ListItemTypeMap>()({
  name: "MuiListItem",
  selfPropNames: [
    "alignItems",
    "autoFocus",
    "children",
    "classes",
    "components",
    "componentsProps",
    "dense",
    "disableGutters",
    "disablePadding",
    "divider",
    "secondaryAction",
  ],
  propDefaults: ({ set }) =>
    set({
      component: "li",
      alignItems: "center",
      autoFocus: false,
      components: {},
      componentsProps: {},
      dense: false,
      disableGutters: false,
      disablePadding: false,
      divider: false,
    }),
  utilityClass: getListItemUtilityClass,
  slotClasses: (ownerState) => ({
    root: [
      "root",
      ownerState.dense && "dense",
      !ownerState.disableGutters && "gutters",
      !ownerState.disablePadding && "padding",
      ownerState.divider && "divider",
      ownerState.alignItems === "flex-start" && "alignItemsFlexStart",
    ],
    container: ["container"],
  }),
});

export const ListItemRoot = styled("div", {
  name: "MuiListItem",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      styles.root,
      ownerState.dense && styles.dense,
      ownerState.alignItems === "flex-start" && styles.alignItemsFlexStart,
      ownerState.divider && styles.divider,
      !ownerState.disableGutters && styles.gutters,
      !ownerState.disablePadding && styles.padding,
      ownerState.button && styles.button,
    ];
  },
})(({ theme, ownerState }) => ({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  width: "100%",
  boxSizing: "border-box",
  textAlign: "left",
  ...(!ownerState.disablePadding && {
    paddingTop: 8,
    paddingBottom: 8,
    ...(ownerState.dense && {
      paddingTop: 4,
      paddingBottom: 4,
    }),
    ...(!ownerState.disableGutters && {
      paddingLeft: 16,
      paddingRight: 16,
    }),
    ...(!!ownerState.secondaryAction && {
      // Add some space to avoid collision as `ListItemSecondaryAction`
      // is absolutely positioned.
      paddingRight: 48,
    }),
  }),
  ...(!!ownerState.secondaryAction && {
    [`& > .${listItemButtonClasses.root}`]: {
      paddingRight: 48,
    },
  }),
  [`&.${listItemClasses.focusVisible}`]: {
    backgroundColor: theme.palette.action.focus,
  },
  [`&.${listItemClasses.selected}`]: {
    backgroundColor: alpha(
      theme.palette.primary.main,
      theme.palette.action.selectedOpacity
    ),
    [`&.${listItemClasses.focusVisible}`]: {
      backgroundColor: alpha(
        theme.palette.primary.main,
        theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity
      ),
    },
  },
  [`&.${listItemClasses.disabled}`]: {
    opacity: theme.palette.action.disabledOpacity,
  },
  ...(ownerState.alignItems === "flex-start" && {
    alignItems: "flex-start",
  }),
  ...(ownerState.divider && {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundClip: "padding-box",
  }),
}));

/**
 * Uses an additional container component if `ListItemSecondaryAction` is the last child.
 *
 * Demos:
 *
 * - [Lists](https://mui.com/components/lists/)
 * - [Transfer List](https://mui.com/components/transfer-list/)
 *
 * API:
 *
 * - [ListItem API](https://mui.com/api/list-item/)
 */
const ListItem = $.component(function ListItem({
  allProps,
  classes,
  otherProps,
  props,
}) {
  const element = createElementRef(otherProps);
  const context = useListContext();
  const childContext = {
    get dense() {
      return props.dense || context.dense || false;
    },
    get alignItems() {
      return props.alignItems;
    },
    get disableGutters() {
      return props.disableGutters;
    },
  };

  createEffect(() => {
    if (props.autoFocus) {
      if (element.ref) {
        element.ref.focus();
      } else if (process.env.NODE_ENV !== "production") {
        console.error(
          "MUI: Unable to set focus to a ListItem whose component has not been rendered."
        );
      }
    }
  });

  const ownerState = mergeProps(allProps, {
    get dense() {
      return childContext.dense;
    },
  });

  const Root = () => (props.components.Root || ListItemRoot) as ElementType;
  const rootProps = () => props.componentsProps.root || {};
  const [, componentProps] = splitProps(
    mergeProps(
      {
        get class() {
          return clsx(classes.root, rootProps().class, otherProps.class);
        },
      },
      otherProps
    ),
    ["component", "ref"]
  );

  return (
    <ListContext.Provider value={childContext}>
      <Dynamic
        component={Root()}
        as={otherProps.component}
        ref={element}
        ownerState={ownerState}
        {...(!isHostComponent(Root()) && {
          ownerState: mergeProps(
            ownerState,
            () => (rootProps() as any).ownerState || {}
          ),
        })}
        {...componentProps}
      >
        {props.children}
        <Show when={!!props.secondaryAction}>
          <ListItemSecondaryAction>
            {props.secondaryAction}
          </ListItemSecondaryAction>
        </Show>
      </Dynamic>
    </ListContext.Provider>
  );
});

export default ListItem;
