import { Theme } from "../styles";
import { ListItemIconClasses } from "./listItemIconClasses";
import { SxProps } from "@suid/system";
import { ElementType, OverrideProps } from "@suid/types";
import { JSXElement } from "solid-js";

export interface ListItemIconTypeMap<P = {}, D extends ElementType = "div"> {
  name: "MuiListItemIcon";
  selfProps: {
    /**
     * The content of the component, normally an `Avatar`.
     */
    children?: JSXElement;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<ListItemIconClasses>;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
    alignItems?: string;
  };
  props: P & ListItemIconTypeMap["selfProps"];
  defaultComponent: D;
}

export type ListItemIconProps<
  D extends ElementType = ListItemIconTypeMap["defaultComponent"],
  P = {}
> = OverrideProps<ListItemIconTypeMap<P, D>, D>;

export default ListItemIconProps;
