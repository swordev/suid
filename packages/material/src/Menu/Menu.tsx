import { MenuTypeMap } from ".";
import MenuList from "../MenuList";
import Paper from "../Paper";
import Popover from "../Popover";
import { skipRootProps } from "../styles/styled";
import styled from "../styles/styled";
import useTheme from "../styles/useTheme";
import { getMenuUtilityClass } from "./menuClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import createRef from "@suid/system/createRef";
import { inspectChildren, isComponentObject } from "@suid/system/inspect";
import clsx from "clsx";
import { splitProps, mergeProps } from "solid-js";

const $ = createComponentFactory<MenuTypeMap>()({
  name: "MuiMenu",
  selfPropNames: [
    "anchorEl",
    "autoFocus",
    "children",
    "classes",
    "disableAutoFocusItem",
    "MenuListProps",
    "onClose",
    "open",
    "PopoverClasses",
    "transitionDuration",
    "TransitionProps",
    "variant",
  ],
  utilityClass: getMenuUtilityClass,
  slotClasses: () => ({
    root: ["root"],
    paper: ["paper"],
    list: ["list"],
  }),
});

const RTL_ORIGIN = {
  vertical: "top",
  horizontal: "right",
} as const;

const LTR_ORIGIN = {
  vertical: "top",
  horizontal: "left",
} as const;

const MenuRoot = styled(Popover, {
  skipProps: skipRootProps.filter((v) => v !== "classes"),
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root,
})({});

const MenuPaper = styled(Paper, {
  name: "MuiMenu",
  slot: "Paper",
  overridesResolver: (props, styles) => styles.paper,
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tapable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
});

const MenuMenuList = styled(MenuList, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (props, styles) => styles.list,
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
});

const Menu = $.defineComponent(function Menu(inProps) {
  const ref = createRef(inProps);
  const props = $.useThemeProps({ props: inProps });

  const [, other] = splitProps(props, [
    "autoFocus",
    "children",
    "disableAutoFocusItem",
    "MenuListProps",
    "onClose",
    "open",
    "PaperProps",
    "PopoverClasses",
    "transitionDuration",
    "TransitionProps",
    "variant",
  ]);

  const baseProps = mergeProps(
    {
      autoFocus: true,
      disableAutoFocusItem: false,
      MenuListProps: {} as NonNullable<typeof props.MenuListProps>,
      PaperProps: {} as NonNullable<typeof props.PaperProps>,
      transitionDuration: "auto",
      variant: "selectedMenu",
    } as const,
    props
  );

  const [, TransitionProps] = splitProps(
    mergeProps(() => props.TransitionProps || {}),
    ["onEntering"]
  );

  const theme = useTheme();
  const isRtl = () => theme.direction === "rtl";

  const ownerState = mergeProps(baseProps, {
    TransitionProps: TransitionProps,
  });

  const classes = $.useClasses(ownerState);

  const autoFocusItem = () =>
    baseProps.autoFocus && !baseProps.disableAutoFocusItem && props.open;

  /*const menuListActionsRef = null;*/

  const handleEntering = () => {
    /*
    // [pending]
    if (menuListActionsRef.current) {
      menuListActionsRef.current.adjustStyleForScrollbar(element, theme);
    }*/

    if (props.TransitionProps?.onEntering) {
      props.TransitionProps?.onEntering();
    }
  };

  const handleListKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Tab") {
      event.preventDefault();

      if (props.onClose) {
        props.onClose(event, "tabKeyDown");
      }
    }
  };
  /**
   * the index of the item should receive focus
   * in a `variant="selectedMenu"` it's the first `selected` item
   * otherwise it's the very first item.
   */
  const children = inspectChildren(() => props.children);

  /**
   * the index of the item should receive focus
   * in a `variant="selectedMenu"` it's the first `selected` item
   * otherwise it's the very first item.
   */
  const activeItemIndex = () => {
    let result = -1;
    let index = 0;
    // since we inject focus related props into children we have to do a lookahead
    // to check if there is a `selected` item. We're looking for the last `selected`
    // item and use the first valid item as a fallback
    for (const child of children()) {
      if (isComponentObject(child)) {
        if (!child.props.disabled) {
          if (baseProps.variant === "selectedMenu" && child.props.selected) {
            result = index;
          } else if (result === -1) {
            result = index;
          }
        }
      }
      index++;
    }
    return result;
  };

  const PaperProps = mergeProps(
    { component: MenuPaper },
    () => baseProps.PaperProps,
    {
      classes: mergeProps(() => baseProps.PaperProps.classes, {
        get root() {
          return classes.paper;
        },
      }),
    }
  );

  const transitionProps = mergeProps(
    { onEntering: handleEntering },
    TransitionProps
  );

  return (
    <MenuRoot
      classes={props.PopoverClasses}
      onClose={props.onClose}
      anchorOrigin={{
        vertical: "bottom",
        get horizontal() {
          return isRtl() ? "right" : "left";
        },
      }}
      transformOrigin={isRtl() ? RTL_ORIGIN : LTR_ORIGIN}
      PaperProps={PaperProps}
      class={classes.root}
      open={props.open}
      ref={ref}
      transitionDuration={baseProps.transitionDuration}
      TransitionProps={transitionProps}
      // [mui-issue]
      ownerState={ownerState as any}
      {...other}
    >
      <MenuMenuList
        onKeyDown={handleListKeyDown}
        // [private]
        //actions={menuListActionsRef}
        autoFocus={
          baseProps.autoFocus &&
          (activeItemIndex() === -1 || baseProps.disableAutoFocusItem)
        }
        autoFocusItem={autoFocusItem()}
        variant={baseProps.variant}
        {...baseProps.MenuListProps}
        class={clsx(classes.list, baseProps.MenuListProps.class)}
      >
        {children() as any}
      </MenuMenuList>
    </MenuRoot>
  );
});

export default Menu;
