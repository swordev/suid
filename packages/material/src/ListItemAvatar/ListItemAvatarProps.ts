import { Theme } from "../styles";
import { ListItemAvatarClasses } from "./listItemAvatarClasses";
import { SxProps } from "@suid/system";
import { ElementType, OverrideProps } from "@suid/types";
import { JSXElement } from "solid-js";

export interface ListItemAvatarTypeMap<P = {}, D extends ElementType = "div"> {
  name: "MuiListItemAvatar";
  selfProps: {
    /**
     * The content of the component, normally an `Avatar`.
     */
    children?: JSXElement;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<ListItemAvatarClasses>;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
    alignItems?: string;
  };
  props: P & ListItemAvatarTypeMap["selfProps"];
  defaultComponent: D;
}

export type ListItemAvatarProps<
  D extends ElementType = ListItemAvatarTypeMap["defaultComponent"],
  P = {},
> = OverrideProps<ListItemAvatarTypeMap<P, D>, D>;

export default ListItemAvatarProps;
