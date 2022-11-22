import { ExtendListTypeMap } from "../List";
import * as ST from "@suid/types";
import { JSXElement } from "solid-js";

export type MenuListClassKey = keyof NonNullable<
  MenuListTypeMap["props"]["classes"]
>;
export type MenuListTypeMap<P = {}, D extends ST.ElementType = "ul"> = {
  name: "MuiMenuList";
  defaultPropNames:
    | "autoFocus"
    | "autoFocusItem"
    | "disabledItemsFocusable"
    | "disableListWrap"
    | "variant";
  selfProps: {
    /**
     * If `true`, will focus the `[role="menu"]` container and move into tab order.
     * @default false
     */
    autoFocus?: boolean;

    /**
     * If `true`, will focus the first menuitem if `variant="menu"` or selected item
     * if `variant="selectedMenu"`.
     * @default false
     */
    autoFocusItem?: boolean;

    /**
     * MenuList contents, normally `MenuItem`s.
     */
    children?: JSXElement;

    /**
     * If `true`, will allow focus on disabled items.
     * @default false
     */
    disabledItemsFocusable?: boolean;

    /**
     * If `true`, the menu items will not wrap focus.
     * @default false
     */
    disableListWrap?: boolean;

    /**
     * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
     * and the vertical alignment relative to the anchor element.
     * @default 'selectedMenu'
     */
    variant?: "menu" | "selectedMenu";
  };
} & ExtendListTypeMap<{
  props: P & MenuListTypeMap["selfProps"];
  defaultComponent: D;
}>;

export type MenuListProps<
  D extends ST.ElementType = MenuListTypeMap["defaultComponent"],
  P = {}
> = ST.OverrideProps<MenuListTypeMap<P, D>, D>;

export default MenuListProps;
