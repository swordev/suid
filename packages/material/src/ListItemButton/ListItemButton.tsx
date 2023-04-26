import ButtonBase from "../ButtonBase";
import ListContext, { useListContext } from "../List/ListContext";
import styled, { skipRootProps } from "../styles/styled";
import { ListItemButtonTypeMap } from "./ListItemButtonProps";
import listItemButtonClasses, {
  getListItemButtonUtilityClass,
} from "./listItemButtonClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import { alpha } from "@suid/system";
import createElementRef from "@suid/system/createElementRef";
import clsx from "clsx";
import { createEffect, mergeProps, splitProps } from "solid-js";

const $ = createComponentFactory<ListItemButtonTypeMap>()({
  name: "MuiListItemButton",
  selfPropNames: [
    "alignItems",
    "autoFocus",
    "children",
    "classes",
    "dense",
    "disableGutters",
    "disabled",
    "divider",
    "selected",
  ],
  propDefaults: ({ set }) =>
    set({
      alignItems: "center",
      autoFocus: false,
      component: "div",
      dense: false,
      disableGutters: false,
      divider: false,
      selected: false,
      disabled: false,
    }),
  utilityClass: getListItemButtonUtilityClass,
  slotClasses: (ownerState) => ({
    root: [
      "root",
      ownerState.dense && "dense",
      !ownerState.disableGutters && "gutters",
      ownerState.divider && "divider",
      ownerState.disabled && "disabled",
      ownerState.alignItems === "flex-start" && "alignItemsFlexStart",
      ownerState.selected && "selected",
    ],
  }),
});

const ListItemButtonRoot = styled(ButtonBase, {
  skipProps: skipRootProps.filter((v) => v !== "classes"),
  name: "MuiListItemButton",
  slot: "Root",
  overridesResolver: (props, styles) => {
    return [
      styles.root,
      props.ownerState.dense && styles.dense,
      props.ownerState.alignItems === "flex-start" &&
        styles.alignItemsFlexStart,
      props.ownerState.divider && styles.divider,
      !props.ownerState.disableGutters && styles.gutters,
    ];
  },
})(({ theme, ownerState }) => ({
  display: "flex",
  flexGrow: 1,
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  boxSizing: "border-box",
  textAlign: "left",
  paddingTop: 8,
  paddingBottom: 8,
  transition: theme.transitions.create("background-color", {
    duration: theme.transitions.duration.shortest,
  }),
  "&:hover": {
    textDecoration: "none",
    backgroundColor: theme.palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent",
    },
  },
  [`&.${listItemButtonClasses.selected}`]: {
    backgroundColor: alpha(
      theme.palette.primary.main,
      theme.palette.action.selectedOpacity
    ),
    [`&.${listItemButtonClasses.focusVisible}`]: {
      backgroundColor: alpha(
        theme.palette.primary.main,
        theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity
      ),
    },
  },
  [`&.${listItemButtonClasses.selected}:hover`]: {
    backgroundColor: alpha(
      theme.palette.primary.main,
      theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity
    ),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: alpha(
        theme.palette.primary.main,
        theme.palette.action.selectedOpacity
      ),
    },
  },
  [`&.${listItemButtonClasses.focusVisible}`]: {
    backgroundColor: theme.palette.action.focus,
  },
  [`&.${listItemButtonClasses.disabled}`]: {
    opacity: theme.palette.action.disabledOpacity,
  },
  ...(ownerState.divider && {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundClip: "padding-box",
  }),
  ...(ownerState.alignItems === "flex-start" && {
    alignItems: "flex-start",
  }),
  ...(!ownerState.disableGutters && {
    paddingLeft: 16,
    paddingRight: 16,
  }),
  ...(ownerState.dense && {
    paddingTop: 4,
    paddingBottom: 4,
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
 * - [ListItemButton API](https://mui.com/api/list-item-button/)
 * - inherits [ButtonBase API](https://mui.com/api/button-base/)
 */

const ListItemButton = $.defineComponent(function ListItemButton(inProps) {
  const element = createElementRef(inProps);
  const props = $.useThemeProps({ props: inProps });
  const [, other] = splitProps(props, [
    "alignItems",
    "autoFocus",
    "component",
    "children",
    "dense",
    "disableGutters",
    "divider",
    "focusVisibleClassName",
    "selected",
  ]);

  const baseProps = mergeProps(
    {
      alignItems: "center",
      autoFocus: false,
      component: "div",
      dense: false,
      disableGutters: false,
      divider: false,
      selected: false,
    },
    props
  );

  const context = useListContext();
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

  createEffect(() => {
    if (props.autoFocus) {
      if (element.ref) {
        element.ref.focus();
      } else if (process.env.NODE_ENV !== "production") {
        console.error(
          "MUI: Unable to set focus to a ListItemButton whose component has not been rendered."
        );
      }
    }
  });

  const ownerState = mergeProps(props, {
    get alignItems() {
      return baseProps.alignItems;
    },
    get dense() {
      return childContext.dense;
    },
    get disableGutters() {
      return baseProps.disableGutters;
    },
    get divider() {
      return baseProps.divider;
    },
    get selected() {
      return baseProps.selected;
    },
  });

  const classes = $.useClasses(ownerState);

  return (
    <ListContext.Provider value={childContext}>
      <ListItemButtonRoot
        ref={element}
        component={baseProps.component}
        focusVisibleClassName={clsx(
          props.classes?.focusVisible,
          props.focusVisibleClassName
        )}
        ownerState={ownerState}
        {...other}
        classes={classes}
      >
        {props.children}
      </ListItemButtonRoot>
    </ListContext.Provider>
  );
});

export default ListItemButton;
