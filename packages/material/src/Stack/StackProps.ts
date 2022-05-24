import { OverrideProps } from "../OverridableComponent";
import { Theme } from "../styles/createTheme";
import { ResponsiveStyleValue, SxProps, SystemProps } from "@suid/system";
import { ElementType } from "@suid/types";
import { JSXElement } from "solid-js";

export interface StackTypeMap<P = {}, D extends ElementType = "div"> {
  name: "MuiStack";
  defaultPropNames: "direction" | "spacing";
  selfProps: {
    /**
     * The content of the component.
     */
    children?: JSXElement;
    /**
     * Defines the `flex-direction` style property.
     * It is applied for all screen sizes.
     * @default 'column'
     */
    direction?: ResponsiveStyleValue<
      "row" | "row-reverse" | "column" | "column-reverse"
    >;
    /**
     * Defines the space between immediate children.
     * @default 0
     */
    spacing?: ResponsiveStyleValue<number | string>;
    /**
     * Add an element between each child.
     */
    divider?: JSXElement;
    /**
     * The system prop, which allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
  };
  props: P & SystemProps<Theme> & StackTypeMap["selfProps"];
  defaultComponent: D;
}

export type StackProps<
  D extends ElementType = StackTypeMap["defaultComponent"],
  P = {}
> = OverrideProps<StackTypeMap<P, D>, D>;

export default StackProps;
