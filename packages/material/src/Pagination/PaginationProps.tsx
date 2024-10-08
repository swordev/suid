import { Theme } from "../styles";
import {
  UsePaginationItem,
  UsePaginationProps,
} from "../usePagination/usePagination";
import { PaginationClasses } from "./paginationClasses";
import { SxProps } from "@suid/system";
import { OverridableStringUnion } from "@suid/types";
import * as ST from "@suid/types";
import { JSXElement } from "solid-js";

export interface PaginationRenderItemParams extends UsePaginationItem {
  color: PaginationProps["color"];
  shape: PaginationProps["shape"];
  size: PaginationProps["size"];
  variant: PaginationProps["variant"];
}

export interface PaginationPropsVariantOverrides {}

export interface PaginationPropsSizeOverrides {}

export interface PaginationPropsColorOverrides {}
export type PaginationTypeMap<P = {}, D extends ST.ElementType = "div"> = {
  name: "MuiPagination";
  defaultPropNames: "color" | "renderItem" | "shape" | "size" | "variant";
  selfProps: {
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<PaginationClasses>;

    /**
     * The active color.
     * @default 'standard'
     */
    color?: OverridableStringUnion<
      "primary" | "secondary" | "standard",
      PaginationPropsColorOverrides
    >;

    /**
     * Accepts a function which returns a string value that provides a user-friendly name for the current page.
     * This is important for screen reader users.
     *
     * For localization purposes, you can use the provided [translations](/guides/localization/).
     * @param {string} type The link or button type to format ('page' | 'first' | 'last' | 'next' | 'previous'). Defaults to 'page'.
     * @param {number} page The page number to format.
     * @param {bool} selected If true, the current page is selected.
     * @returns {string}
     */
    getItemAriaLabel?: (
      type: "page" | "first" | "last" | "next" | "previous",
      page: number,
      selected: boolean
    ) => string;

    /**
     * Render the item.
     * @param {PaginationRenderItemParams} params The props to spread on a PaginationItem.
     * @returns {ReactNode}
     * @default (item) => <PaginationItem {...item} />
     */
    renderItem?: (params: PaginationRenderItemParams) => JSXElement;

    /**
     * The shape of the pagination items.
     * @default 'circular'
     */
    shape?: "circular" | "rounded";

    /**
     * The size of the component.
     * @default 'medium'
     */
    size?: OverridableStringUnion<
      "small" | "medium" | "large",
      PaginationPropsSizeOverrides
    >;

    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;

    /**
     * The variant to use.
     * @default 'text'
     */
    variant?: OverridableStringUnion<
      "text" | "outlined",
      PaginationPropsVariantOverrides
    >;
  };
  props: P &
    PaginationTypeMap["selfProps"] &
    UsePaginationProps &
    Omit<ST.PropsOf<"abbr">, "children" | "onChange">;
  defaultComponent: D;
};

export type PaginationProps<
  D extends ST.ElementType = PaginationTypeMap["defaultComponent"],
  P = {},
> = ST.OverrideProps<PaginationTypeMap<P, D>, D>;

export default PaginationProps;
