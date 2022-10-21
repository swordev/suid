import { OverrideProps } from "../OverridableComponent";
import { Theme } from "../styles";
import { ListSubheaderClasses } from "./listSubheaderClasses";
import { SxProps } from "@suid/system";
import { ElementType } from "@suid/types";
import { JSXElement } from "solid-js";

export interface ListSubheaderTypeMap<P = {}, D extends ElementType = "li"> {
  name: "MuiListSubheader";
  defaultPropNames: "color" | "disableGutters" | "disableSticky" | "inset";
  selfProps: {
    /**
     * The content of the component.
     */
    children?: JSXElement;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<ListSubheaderClasses>;
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     * @default 'default'
     */
    color?: "default" | "primary" | "inherit";
    /**
     * If `true`, the List Subheader will not have gutters.
     * @default false
     */
    disableGutters?: boolean;
    /**
     * If `true`, the List Subheader will not stick to the top during scroll.
     * @default false
     */
    disableSticky?: boolean;
    /**
     * If `true`, the List Subheader is indented.
     * @default false
     */
    inset?: boolean;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
  };
  props: P & ListSubheaderTypeMap["selfProps"];
  defaultComponent: D;
}

export type ListSubheaderProps<
  D extends ElementType = ListSubheaderTypeMap["defaultComponent"],
  P = {}
> = OverrideProps<ListSubheaderTypeMap<P, D>, D>;

export default ListSubheaderProps;
