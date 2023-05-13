import { OverrideProps } from "../OverridableComponent";
import { Theme } from "../styles";
import { ListItemClasses } from "./listItemClasses";
import { SxProps } from "@suid/system";
import { ElementType } from "@suid/types";
import { ComponentProps, JSXElement } from "solid-js";

export interface ListItemComponentsPropsOverrides {}

export interface ListItemTypeMap<P = {}, D extends ElementType = "li"> {
  name: "MuiListItem";
  defaultPropNames:
    | "alignItems"
    | "autoFocus"
    | "dense"
    | "disableGutters"
    | "disablePadding"
    | "divider"
    | "components"
    | "componentsProps";
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
     * @deprecated checkout [ListItemButton](/api/list-item-button/) instead
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
    classes?: Partial<ListItemClasses>;
    /**
     * If `true`, compact vertical padding designed for keyboard and mouse input is used.
     * The prop defaults to the value inherited from the parent List component.
     * @default false
     */
    dense?: boolean;
    /**
     * If `true`, the left and right padding is removed.
     * @default false
     */
    disableGutters?: boolean;
    /**
     * If `true`, all padding is removed.
     * @default false
     */
    disablePadding?: boolean;
    /**
     * If `true`, a 1px light border is added to the bottom of the list item.
     * @default false
     */
    divider?: boolean;
    /**
     * The element to display at the end of ListItem.
     */
    secondaryAction?: JSXElement;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
    /**
     * The components used for each slot inside the InputBase.
     * Either a string to use a HTML element or a component.
     * @default {}
     * (non-reactive root)
     */
    components?: {
      /**
       * (non-reactive root)
       */
      Root?: ElementType;
    };
    /**
     * The props used for each slot inside the Input.
     * @default {}
     * (non-reactive root)
     */
    componentsProps?: {
      /**
       * (non-reactive root)
       */
      root?: ComponentProps<"div"> & ListItemComponentsPropsOverrides;
    };
  };
  props: P & ListItemTypeMap["selfProps"];
  defaultComponent: D;
}

export type ListItemProps<
  D extends ElementType = ListItemTypeMap["defaultComponent"],
  P = {}
> = OverrideProps<ListItemTypeMap<P, D>, D>;

export default ListItemProps;
