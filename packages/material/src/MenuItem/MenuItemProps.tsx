import { ExtendButtonBaseTypeMap } from "../ButtonBase";
import { Theme } from "../styles";
import { MenuItemClasses } from "./menuItemClasses";
import { SxProps } from "@suid/system";
import * as ST from "@suid/types";

export type MenuItemTypeMap<P = {}, D extends ST.ElementType = "li"> = {
  name: "MuiMenuItem";
  defaultPropNames:
    | "autoFocus"
    | "dense"
    | "disabled"
    | "disableGutters"
    | "divider"
    | "selected";
  selfProps: {
    /**
     * If `true`, the list item is focused during the first mount.
     * Focus will also be triggered if the value changes from false to true.
     * @default false
     */
    autoFocus?: boolean;

    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<MenuItemClasses>;

    /**
     * If `true`, compact vertical padding designed for keyboard and mouse input is used.
     * The prop defaults to the value inherited from the parent Menu component.
     * @default false
     */
    dense?: boolean;

    /**
     * If `true`, the component is disabled.
     * @default false
     */
    disabled?: boolean;

    /**
     * If `true`, the left and right padding is removed.
     * @default false
     */
    disableGutters?: boolean;

    /**
     * If `true`, a 1px light border is added to the bottom of the menu item.
     * @default false
     */
    divider?: boolean;

    /**
     * Use to apply selected styling.
     * @default false
     */
    selected?: boolean;

    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
  };
} & ExtendButtonBaseTypeMap<{
  props: P & MenuItemTypeMap["selfProps"];
  defaultComponent: D;
}>;

export type MenuItemProps<
  D extends ST.ElementType = MenuItemTypeMap["defaultComponent"],
  P = {},
> = ST.OverrideProps<MenuItemTypeMap<P, D>, D>;

export default MenuItemProps;
