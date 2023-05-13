import { ListItemTypeMap } from ".";
import ListContext from "../List/ListContext";
import { listItemButtonClasses } from "../ListItemButton";
import ListItemSecondaryAction from "../ListItemSecondaryAction";
import { useTheme } from "../styles";
import styled from "../styles/styled";
import { getListItemUtilityClass } from "./listItemClasses";
import listItemClasses from "./listItemClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import isHostComponent from "@suid/base/utils/isHostComponent";
import createElementRef from "@suid/system/createElementRef";
import { InPropsOf } from "@suid/types";
import clsx from "clsx";
import {
  useContext,
  mergeProps,
  splitProps,
  Show,
  createEffect,
} from "solid-js";

type OwnerState = Pick<
  InPropsOf<ListItemTypeMap>,
  | "dense"
  | "disableGutters"
  | "disablePadding"
  | "divider"
  | "alignItems"
  | "secondaryAction"
>;

const $ = createComponentFactory<ListItemTypeMap, OwnerState>()({
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
})<OwnerState>(({ theme, ownerState }) => ({
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
  const theme = useTheme();
  const baseProps = mergeProps(
    {
      alignItems: "center" as const,
      components: {} as NonNullable<typeof inProps.components>,
      componentsProps: {} as NonNullable<typeof inProps.componentsProps>,
    },
    theme.components?.[$.name]?.defaultProps,
    inProps
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

  const element = createElementRef(inProps);

  createEffect(() => {
    if (inProps.autoFocus) {
      if (element.ref) {
        element.ref.focus();
      } else if (process.env.NODE_ENV !== "production") {
        console.error(
          "MUI: Unable to set focus to a ListItem whose component has not been rendered."
        );
      }
    }
  });

  // [non-reactive root]
  const rootProps = baseProps.componentsProps.root;
  // [non-reactive root]
  const Root = baseProps.components.Root || ListItemRoot;
  const ownerState: OwnerState = mergeProps(
    {
      get alignItems() {
        return baseProps.alignItems;
      },
      get dense() {
        return childContext.dense;
      },
      get disableGutters() {
        return baseProps.disableGutters || false;
      },
      get disablePadding() {
        return baseProps.disablePadding || false;
      },
      get divider() {
        return baseProps.divider || false;
      },
    },
    isHostComponent(Root) ? undefined : (rootProps as any)?.ownerState
  );

  const classes = $.useClasses(ownerState);

  const [, other] = splitProps(inProps, [
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

  return (
    <ListContext.Provider value={childContext}>
      <ListItemRoot
        as={baseProps.component || "li"}
        {...rootProps}
        ref={element}
        ownerState={ownerState}
        class={clsx(classes.root, rootProps?.class, inProps.class)}
        {...(other as any)}
      >
        {inProps.children}
        <Show when={inProps.secondaryAction}>
          {(secondaryAction) => (
            <ListItemSecondaryAction>
              {secondaryAction()}
            </ListItemSecondaryAction>
          )}
        </Show>
      </ListItemRoot>
    </ListContext.Provider>
  );
});

export default ListItem;
