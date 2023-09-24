import { OverrideProps } from "../OverridableComponent";
import { Theme } from "../styles";
import { GridClasses } from "./gridClasses";
import { Breakpoint, ResponsiveStyleValue, SystemProps } from "@suid/system";
import SxProps from "@suid/system/sxProps";
import { ElementType } from "@suid/types";
import { JSXElement } from "solid-js";

export type GridDirection = "row" | "row-reverse" | "column" | "column-reverse";

export type GridSpacing = number | string;

export type GridWrap = "nowrap" | "wrap" | "wrap-reverse";

export type GridSize = "auto" | number;

type BreakpoitProps = {
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for all the screen sizes with the lowest priority.
   * @default false
   */
  [K in Breakpoint]?: boolean | GridSize;
};

export interface GridTypeMap<P = {}, D extends ElementType = "div"> {
  name: "MuiGrid";
  defaultPropNames:
    | "columns"
    | "container"
    | "direction"
    | "item"
    | "lg"
    | "md"
    | "sm"
    | "spacing"
    | "wrap"
    | "xl"
    | "xs"
    | "zeroMinWidth"
    | "rowSpacing"
    | "columnSpacing";
  selfProps: {
    /**
     * The content of the component.
     */
    children?: JSXElement;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<GridClasses>;
    /**
     * The number of columns.
     * @default 12
     */
    columns?: ResponsiveStyleValue<number>;
    /**
     * Defines the horizontal space between the type `item` components.
     * It overrides the value of the `spacing` prop.
     */
    columnSpacing?: ResponsiveStyleValue<GridSpacing>;
    /**
     * If `true`, the component will have the flex *container* behavior.
     * You should be wrapping *items* with a *container*.
     * @default false
     */
    container?: boolean;
    /**
     * Defines the `flex-direction` style property.
     * It is applied for all screen sizes.
     * @default 'row'
     */
    direction?: ResponsiveStyleValue<GridDirection>;
    /**
     * If `true`, the component will have the flex *item* behavior.
     * You should be wrapping *items* with a *container*.
     * @default false
     */
    item?: boolean;
    /**
     * Defines the vertical space between the type `item` components.
     * It overrides the value of the `spacing` prop.
     */
    rowSpacing?: ResponsiveStyleValue<GridSpacing>;
    /**
     * Defines the space between the type `item` components.
     * It can only be used on a type `container` component.
     * @default 0
     */
    spacing?: ResponsiveStyleValue<GridSpacing>;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
    /**
     * Defines the `flex-wrap` style property.
     * It's applied for all screen sizes.
     * @default 'wrap'
     */
    wrap?: GridWrap;
    /**
     * If `true`, it sets `min-width: 0` on the item.
     * Refer to the limitations section of the documentation to better understand the use case.
     * @default false
     */
    zeroMinWidth?: boolean;
  } & BreakpoitProps;
  props: P & SystemProps<Theme> & GridTypeMap["selfProps"];
  defaultComponent: D;
}

export type GridProps<
  D extends ElementType = GridTypeMap["defaultComponent"],
  P = {},
> = OverrideProps<GridTypeMap<P, D>, D>;

export default GridProps;
