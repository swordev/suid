import { Theme } from "../styles";
import { UsePaginationItem } from "../usePagination/usePagination";
import { PaginationItemClasses } from "./paginationItemClasses";
import { SxProps } from "@suid/system";
import { OverridableStringUnion } from "@suid/types";
import * as ST from "@suid/types";
import { JSXElement } from "solid-js";

export interface PaginationItemPropsVariantOverrides {}

export interface PaginationItemPropsSizeOverrides {}

export interface PaginationItemPropsColorOverrides {}
export type PaginationItemTypeMap<P = {}, D extends ST.ElementType = "div"> = {
  name: "MuiPaginationItem";
  defaultPropNames:
    | "color"
    | "components"
    | "disabled"
    | "selected"
    | "shape"
    | "size"
    | "type"
    | "variant";
  selfProps: {
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<PaginationItemClasses>;

    /**
     * The active color.
     * @default 'standard'
     */
    color?: OverridableStringUnion<
      "standard" | "primary" | "secondary",
      PaginationItemPropsColorOverrides
    >;

    /**
     * The components used for first, last, next & previous item type
     * @default {
     *   first: FirstPageIcon,
     *   last: LastPageIcon,
     *   next: NavigateNextIcon,
     *   previous: NavigateBeforeIcon,
     * }
     */
    components?: {
      first?: ST.ElementType;
      last?: ST.ElementType;
      next?: ST.ElementType;
      previous?: ST.ElementType;
    };

    /**
     * If `true`, the component is disabled.
     * @default false
     */
    disabled?: boolean;

    /**
     * The current page number.
     */
    page?: JSXElement;

    /**
     * If `true` the pagination item is selected.
     * @default false
     */
    selected?: boolean;

    /**
     * The shape of the pagination item.
     * @default 'circular'
     */
    shape?: "circular" | "rounded";

    /**
     * The size of the component.
     * @default 'medium'
     */
    size?: OverridableStringUnion<
      "small" | "medium" | "large",
      PaginationItemPropsSizeOverrides
    >;

    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;

    /**
     * The type of pagination item.
     * @default 'page'
     */
    type?: UsePaginationItem["type"];

    /**
     * The variant to use.
     * @default 'text'
     */
    variant?: OverridableStringUnion<
      "text" | "outlined",
      PaginationItemPropsVariantOverrides
    >;
  };
  props: P & PaginationItemTypeMap["selfProps"];
  defaultComponent: D;
};

export type PaginationItemProps<
  D extends ST.ElementType = PaginationItemTypeMap["defaultComponent"],
  P = {},
> = ST.OverrideProps<PaginationItemTypeMap<P, D>, D>;

export default PaginationItemProps;
