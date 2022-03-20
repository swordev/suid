import { ButtonBaseTypeMap } from "../ButtonBase";
import { OverrideProps } from "../OverridableComponent";
import { Theme } from "../styles";
import { ListItemButtonClasses } from "./listItemButtonClasses";
import { SxProps } from "@suid/system";
import { ElementType } from "@suid/types";
import { JSXElement } from "solid-js";

export type ListItemButtonTypeMap<P = {}, D extends ElementType = "div"> = {
  name: "MuiListItemButton";
  defaultPropNames:
    | "alignItems"
    | "autoFocus"
    | "dense"
    | "disabled"
    | "disableGutters"
    | "divider"
    | "selected";
  selfProps: {
    /**
     * Defines the `align-items` style property.
     * @default 'center'
     */
    alignItems?: "flex-start" | "center";
    /**
     * If `true`, the list item is focused during the first mount.
     * Focus will also be triggered if the value changes from false to true.
     * @default false
     */
    autoFocus?: boolean;
    /**
     * The content of the component if a `ListItemSecondaryAction` is used it must
     * be the last child.
     */
    children?: JSXElement;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<ListItemButtonClasses>;
    /**
     * If `true`, compact vertical padding designed for keyboard and mouse input is used.
     * The prop defaults to the value inherited from the parent List component.
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
     * If `true`, a 1px light border is added to the bottom of the list item.
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
  props: P &
    Omit<ButtonBaseTypeMap["props"], "classes"> &
    ListItemButtonTypeMap["selfProps"];
  defaultComponent: D;
};

export type ListItemButtonProps<
  D extends ElementType = ListItemButtonTypeMap["defaultComponent"],
  P = {}
> = OverrideProps<ListItemButtonTypeMap<P, D>, D>;

export default ListItemButtonProps;
