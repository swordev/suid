import { Theme } from "..";
import { TypographyProps } from "../Typography";
import { ListItemTextClasses } from "./listItemTextClasses";
import { SxProps } from "@suid/system";
import { ElementType, OverrideProps } from "@suid/types";
import { JSXElement } from "solid-js";

export interface ListItemTextTypeMap<P = {}, D extends ElementType = "div"> {
  name: "MuiListItemText";
  defaultPropNames: "disableTypography" | "inset";
  selfProps: {
    /**
     * Alias for the `primary` prop.
     */
    children?: JSXElement;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<ListItemTextClasses>;
    /**
     * If `true`, the children won't be wrapped by a Typography component.
     * This can be useful to render an alternative Typography variant by wrapping
     * the `children` (or `primary`) text, and optional `secondary` text
     * with the Typography component.
     * @default false
     */
    disableTypography?: boolean;
    /**
     * If `true`, the children are indented.
     * This should be used if there is no left avatar or left icon.
     * @default false
     */
    inset?: boolean;
    /**
     * The main content element.
     */
    primary?: JSXElement;
    /**
     * These props will be forwarded to the primary typography component
     * (as long as disableTypography is not `true`).
     */
    primaryTypographyProps?: TypographyProps<
      "span",
      { component?: ElementType }
    >;
    /**
     * The secondary content element.
     */
    secondary?: JSXElement;
    /**
     * These props will be forwarded to the secondary typography component
     * (as long as disableTypography is not `true`).
     */
    secondaryTypographyProps?: TypographyProps<
      "p",
      { component?: ElementType }
    >;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
  };
  props: P & ListItemTextTypeMap["selfProps"];
  defaultComponent: D;
}

export type ListItemTextProps<
  D extends ElementType = ListItemTextTypeMap["defaultComponent"],
  P = {}
> = OverrideProps<ListItemTextTypeMap<P, D>, D>;

export default ListItemTextProps;
