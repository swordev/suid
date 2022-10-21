import { Theme } from "../styles";
import { ListItemSecondaryActionClasses } from "./listItemSecondaryActionClasses";
import { SxProps } from "@suid/system";
import { ElementType, OverrideProps } from "@suid/types";
import { JSXElement } from "solid-js";

export interface ListItemSecondaryActionTypeMap<
  P = {},
  D extends ElementType = "div"
> {
  name: "MuiListItemSecondaryAction";
  selfProps: {
    /**
     * The content of the component, normally an `Avatar`.
     */
    children?: JSXElement;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<ListItemSecondaryActionClasses>;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
    alignItems?: string;
  };
  props: P & ListItemSecondaryActionTypeMap["selfProps"];
  defaultComponent: D;
}

export type ListItemSecondaryActionProps<
  D extends ElementType = ListItemSecondaryActionTypeMap["defaultComponent"],
  P = {}
> = OverrideProps<ListItemSecondaryActionTypeMap<P, D>, D>;

export default ListItemSecondaryActionProps;
