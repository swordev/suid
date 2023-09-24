import { OverrideProps } from "../OverridableComponent";
import { Theme } from "../styles";
import { BreadcrumbsClasses } from "./breadcrumbsClasses";
import { SxProps } from "@suid/system";
import { ElementType } from "@suid/types";
import { JSXElement } from "solid-js";

export interface BreadcrumbsTypeMap<P = {}, D extends ElementType = "nav"> {
  name: "MuiBreadcrumbs";
  defaultPropNames:
    | "expandText"
    | "itemsAfterCollapse"
    | "itemsBeforeCollapse"
    | "maxItems"
    | "separator";
  selfProps: {
    /**
     * The content of the component.
     */
    children?: JSXElement;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<BreadcrumbsClasses>;
    /**
     * Override the default label for the expand button.
     *
     * For localization purposes, you can use the provided [translations](/guides/localization/).
     * @default 'Show path'
     */
    expandText?: string;
    /**
     * If max items is exceeded, the number of items to show after the ellipsis.
     * @default 1
     */
    itemsAfterCollapse?: number;
    /**
     * If max items is exceeded, the number of items to show before the ellipsis.
     * @default 1
     */
    itemsBeforeCollapse?: number;
    /**
     * Specifies the maximum number of breadcrumbs to display. When there are more
     * than the maximum number, only the first `itemsBeforeCollapse` and last `itemsAfterCollapse`
     * will be shown, with an ellipsis in between.
     * @default 8
     */
    maxItems?: number;
    /**
     * Custom separator node.
     * @default '/'
     */
    separator?: JSXElement;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
  };
  props: P & BreadcrumbsTypeMap["selfProps"];
  defaultComponent: D;
}

export type BreadcrumbsProps<
  D extends ElementType = BreadcrumbsTypeMap["defaultComponent"],
  P = {},
> = OverrideProps<BreadcrumbsTypeMap<P, D>, D>;

export default BreadcrumbsProps;
