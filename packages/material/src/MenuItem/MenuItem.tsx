import { MenuItemTypeMap } from ".";
import ButtonBase from "../ButtonBase";
import { dividerClasses } from "../Divider";
import ListContext from "../List/ListContext";
import { listItemIconClasses } from "../ListItemIcon";
import { listItemTextClasses } from "../ListItemText";
import styled, { skipRootProps } from "../styles/styled";
import { getMenuItemUtilityClass } from "./menuItemClasses";
import menuItemClasses from "./menuItemClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import { alpha } from "@suid/system";
import createRef from "@suid/system/createRef";
import { createInspector } from "@suid/system/inspect";
import { InPropsOf } from "@suid/types";
import clsx from "clsx";
import {
  useContext,
  splitProps,
  mergeProps,
  createEffect,
  untrack,
} from "solid-js";

const $ = createComponentFactory<MenuItemTypeMap>()({
  name: "MuiMenuItem",
  selfPropNames: [
    "autoFocus",
    "classes",
    "dense",
    "disabled",
    "disableGutters",
    "divider",
    "selected",
  ],
  utilityClass: getMenuItemUtilityClass,
  slotClasses: (ownerState) => ({
    root: [
      "root",
      ownerState.dense && "dense",
      ownerState.disabled && "disabled",
      !ownerState.disableGutters && "gutters",
      ownerState.divider && "divider",
      ownerState.selected && "selected",
    ],
  }),
});

const MenuItemRoot = styled(ButtonBase, {
  skipProps: skipRootProps.filter((v) => v !== "classes"),
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      styles.root,
      ownerState.dense && styles.dense,
      ownerState.divider && styles.divider,
      !ownerState.disableGutters && styles.gutters,
    ];
  },
})<
  InPropsOf<MenuItemTypeMap> & {
    dense: boolean;
    divider: boolean;
    disableGutters: boolean;
  }
>(({ theme, ownerState }) => ({
  ...theme.typography.body1,
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  minHeight: 48,
  paddingTop: 6,
  paddingBottom: 6,
  boxSizing: "border-box",
  whiteSpace: "nowrap",
  ...(!ownerState.disableGutters && {
    paddingLeft: 16,
    paddingRight: 16,
  }),
  ...(ownerState.divider && {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundClip: "padding-box",
  }),
  "&:hover": {
    textDecoration: "none",
    backgroundColor: theme.palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent",
    },
  },
  [`&.${menuItemClasses.selected}`]: {
    backgroundColor: alpha(
      theme.palette.primary.main,
      theme.palette.action.selectedOpacity
    ),
    [`&.${menuItemClasses.focusVisible}`]: {
      backgroundColor: alpha(
        theme.palette.primary.main,
        theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity
      ),
    },
  },
  [`&.${menuItemClasses.selected}:hover`]: {
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
  [`&.${menuItemClasses.focusVisible}`]: {
    backgroundColor: theme.palette.action.focus,
  },
  [`&.${menuItemClasses.disabled}`]: {
    opacity: theme.palette.action.disabledOpacity,
  },
  [`& + .${dividerClasses.root}`]: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  [`& + .${dividerClasses.inset}`]: {
    marginLeft: 52,
  },
  [`& .${listItemTextClasses.root}`]: {
    marginTop: 0,
    marginBottom: 0,
  },
  [`& .${listItemTextClasses.inset}`]: {
    paddingLeft: 36,
  },
  [`& .${listItemIconClasses.root}`]: {
    minWidth: 36,
  },
  ...(!ownerState.dense && {
    [theme.breakpoints.up("sm")]: {
      minHeight: "auto",
    },
  }),
  ...(ownerState.dense && {
    minHeight: 32, // https://material.io/components/menus#specs > Dense
    paddingTop: 4,
    paddingBottom: 4,
    ...theme.typography.body2,
    [`& .${listItemIconClasses.root} svg`]: {
      fontSize: "1.25rem",
    },
  }),
}));

/**
 *
 * Demos:
 *
 * - [Menus](https://mui.com/components/menus/)
 *
 * API:
 *
 * - [MenuItem API](https://mui.com/api/menu-item/)
 * - inherits [ButtonBase API](https://mui.com/api/button-base/)
 */
const MenuItemComponent = $.defineComponent(function MenuItem(inProps) {
  const menuItemRef = createRef<HTMLElement>(inProps);
  const props = $.useThemeProps({ props: inProps });
  const [, other] = splitProps(props, [
    "autoFocus",
    "component",
    "dense",
    "divider",
    "disableGutters",
    "focusVisibleClassName",
    "role",
    "tabIndex",
  ]);

  const baseProps = mergeProps(
    {
      autoFocus: false,
      component: "li",
      dense: false,
      divider: false,
      disableGutters: false,
      role: "menuitem",
    },
    props
  );

  const context = useContext(ListContext);
  const childContext = {
    get dense() {
      return baseProps.dense || context.dense || false;
    },
    get disableGutters() {
      return baseProps.disableGutters;
    },
  };

  createEffect(() => {
    if (baseProps.autoFocus) {
      if (menuItemRef.current) {
        untrack(() => menuItemRef.current.focus());
      } else if (process.env.NODE_ENV !== "production") {
        console.error(
          "MUI: Unable to set focus to a MenuItem whose component has not been rendered."
        );
      }
    }
  });

  const ownerState = mergeProps(props, {
    get dense() {
      return childContext.dense;
    },
    get divider() {
      return baseProps.divider;
    },
    get disableGutters() {
      return baseProps.disableGutters;
    },
  });

  const classes = $.useClasses(props);
  const tabIndex = () => {
    if (!props.disabled) {
      return props.tabIndex !== undefined ? props.tabIndex : -1;
    }
  };

  const inspector = createInspector<any>(MenuItemComponent, inProps);

  const handleRef = (el: HTMLElement) => {
    menuItemRef(el);
    inspector(el);
  };

  return (
    <ListContext.Provider value={childContext}>
      <MenuItemRoot
        ref={handleRef}
        role={baseProps.role}
        tabIndex={tabIndex()}
        component={baseProps.component}
        focusVisibleClassName={clsx(
          ownerState.classes?.focusVisible,
          props.focusVisibleClassName
        )}
        {...other}
        ownerState={ownerState}
        classes={classes}
      />
    </ListContext.Provider>
  );
});
export default MenuItemComponent;
