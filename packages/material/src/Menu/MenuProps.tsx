import { MenuListProps } from "../MenuList";
import { PopoverProps } from "../Popover";
import { Theme } from "../styles";
import { TransitionProps } from "../transitions/transition";
import { MenuClasses } from "./menuClasses";
import { ModalUnstyledOnClose } from "@suid/base/ModalUnstyled";
import { SxProps } from "@suid/system";
import * as ST from "@suid/types";
import { JSXElement } from "solid-js";

export type MenuTypeMap<P = {}, D extends ST.ElementType = "div"> = {
  name: "MuiMenu";
  defaultPropNames:
    | "autoFocus"
    | "disableAutoFocusItem"
    | "MenuListProps"
    | "transitionDuration"
    | "TransitionProps"
    | "variant";
  selfProps: {
    /**
     * An HTML element, or a function that returns one.
     * It's used to set the position of the menu.
     */
    anchorEl?: PopoverProps["anchorEl"];

    /**
     * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
     * children are not focusable. If you set this prop to `false` focus will be placed
     * on the parent modal container. This has severe accessibility implications
     * and should only be considered if you manage focus otherwise.
     * @default true
     */
    autoFocus?: boolean;

    /**
     * Menu contents, normally `MenuItem`s.
     */
    children?: JSXElement;

    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<MenuClasses>;

    /**
     * When opening the menu will not focus the active item but the `[role="menu"]`
     * unless `autoFocus` is also set to `false`. Not using the default means not
     * following WAI-ARIA authoring practices. Please be considerate about possible
     * accessibility implications.
     * @default false
     */
    disableAutoFocusItem?: boolean;

    /**
     * Props applied to the [`MenuList`](/api/menu-list/) element.
     * @default {}
     */
    MenuListProps?: Partial<MenuListProps>;

    /**
     * Callback fired when the component requests to be closed.
     *
     * @param {object} event The event source of the callback.
     * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
     */
    onClose?: ModalUnstyledOnClose<
      "escapeKeyDown" | "backdropClick" | "tabKeyDown"
    >;

    /**
     * If `true`, the component is shown.
     */
    open: boolean;

    /**
     * `classes` prop applied to the [`Popover`](/api/popover/) element.
     */
    PopoverClasses?: PopoverProps["classes"];

    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;

    /**
     * The length of the transition in `ms`, or 'auto'
     * @default 'auto'
     */
    transitionDuration?: TransitionProps["timeout"] | "auto";

    /**
     * Props applied to the transition element.
     * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition/) component.
     * @default {}
     */
    TransitionProps?: TransitionProps;

    /**
     * The variant to use. Use `menu` to prevent selected items from impacting the initial focus.
     * @default 'selectedMenu'
     */
    variant?: "menu" | "selectedMenu";
  };
  props: P & MenuTypeMap["selfProps"] & PopoverProps;
  defaultComponent: D;
};

export type MenuProps<
  D extends ST.ElementType = MenuTypeMap["defaultComponent"],
  P = {},
> = ST.OverrideProps<MenuTypeMap<P, D>, D>;

export default MenuProps;
