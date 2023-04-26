import { ListItemTypeMap } from ".";
import ListContext from "../List/ListContext";
import { listItemButtonClasses } from "../ListItemButton";
import ListItemSecondaryAction from "../ListItemSecondaryAction";
import styled from "../styles/styled";
import { getListItemUtilityClass } from "./listItemClasses";
import listItemClasses from "./listItemClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import isHostComponent from "@suid/base/utils/isHostComponent";
import { Dynamic } from "@suid/system/Dynamic";
import createElementRef from "@suid/system/createElementRef";
import clsx from "clsx";
import {
  useContext,
  splitProps,
  mergeProps,
  Show,
  createEffect,
} from "solid-js";

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
const ListItem = $.defineComponent(function ListItem(inProps) {
  const props = $.useThemeProps({ props: inProps });
  const [, other] = splitProps(props, [
    "alignItems",
    "autoFocus",
    "children",
    "class",
    "component",
    "components",
    "componentsProps",
    "dense",
    "disableGutters",
    "disablePadding",
    "divider",
    "secondaryAction",
  ]);

  const baseProps = mergeProps(
    {
      alignItems: "center",
      autoFocus: false,
      components: {} as NonNullable<typeof props.components>,
      componentsProps: {} as NonNullable<typeof props.componentsProps>,
      dense: false,
      disableGutters: false,
      disablePadding: false,
      divider: false,
      selected: false,
    },
    props
  );

  const context = useContext(ListContext);

  const childContext = {
    get dense() {
      return baseProps.dense || context.dense || false;
    },
    get alignItems() {
      return baseProps.alignItems;
    },
    get disableGutters() {
      return baseProps.disableGutters;
    },
  };

  const element = createElementRef(props);

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

  const Root = () => baseProps.components.Root || ListItemRoot;
  const rootProps = () => baseProps.componentsProps.root || {};
  const ownerState = mergeProps(
    props,
    {
      get alignItems() {
        return baseProps.alignItems;
      },
      get autoFocus() {
        return baseProps.autoFocus;
      },
      get dense() {
        return childContext.dense;
      },
      get disableGutters() {
        return baseProps.disableGutters;
      },
      get disablePadding() {
        return baseProps.disablePadding;
      },
      get divider() {
        return baseProps.divider;
      },
      get selected() {
        return baseProps.selected;
      },
    },
    () => (isHostComponent(Root()) ? {} : (rootProps() as any).ownerState || {})
  );

  const classes = $.useClasses(ownerState);

  return (
    <ListContext.Provider value={childContext}>
      <Dynamic
        $component={Root()}
        {...rootProps}
        as={props.component || "li"}
        ref={element}
        ownerState={ownerState}
        class={clsx(classes.root, rootProps().class, props.class)}
        {...other}
      >
        {props.children}
        <Show when={props.secondaryAction}>
          {(secondaryAction) => (
            <ListItemSecondaryAction>
              {secondaryAction()}
            </ListItemSecondaryAction>
          )}
        </Show>
      </Dynamic>
    </ListContext.Provider>
  );
});

export default ListItem;
