import { Theme } from "..";
import { OverridableComponent, OverrideProps } from "../OverridableComponent";
import { ListClasses } from "./listClasses";
import { SxProps } from "@suid/system";
import { ElementType, OverridableTypeMap } from "@suid/types";
import { JSXElement } from "solid-js";

export interface ListTypeMap<P = {}, D extends ElementType = "ul"> {
  name: "MuiList";
  defaultPropNames: "dense" | "disablePadding";
  selfProps: {
    /**
     * The content of the component.
     */
    children?: JSXElement;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<ListClasses>;
    /**
     * If `true`, compact vertical padding designed for keyboard and mouse input is used for
     * the list and list items.
     * The prop is available to descendant components as the `dense` context.
     * @default false
     */
    dense?: boolean;
    /**
     * If `true`, vertical padding is removed from the list.
     * @default false
     */
    disablePadding?: boolean;
    /**
     * The content of the subheader, normally `ListSubheader`.
     */
    subheader?: JSXElement;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
  };
  props: P & ListTypeMap["selfProps"];
  defaultComponent: D;
}

/**
 * utility to create component types that inherit props from List.
 */
export interface ExtendListTypeMap<M extends OverridableTypeMap> {
  props: M["props"] & ListTypeMap["props"];
  defaultComponent: M["defaultComponent"];
}

export type ExtendList<M extends OverridableTypeMap> = OverridableComponent<
  ExtendListTypeMap<M>
>;

export type ListProps<
  D extends ElementType = ListTypeMap["defaultComponent"],
  P = {}
> = OverrideProps<ListTypeMap<P, D>, D>;

export default ListProps;
