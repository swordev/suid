import { OverrideProps } from "../OverridableComponent";
import { Theme } from "../styles";
import { ContainerClasses } from "./containerClasses";
import { SxProps } from "@suid/system";
import { Breakpoint } from "@suid/system/createTheme/createBreakpoints";
import { ElementType } from "@suid/types";
import { JSXElement } from "solid-js";

export interface ContainerTypeMap<P = {}, D extends ElementType = "div"> {
  name: "MuiContainer";
  defaultPropNames: "disableGutters" | "fixed" | "maxWidth";
  selfProps: {
    children?: JSXElement;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<ContainerClasses>;
    /**
     * If `true`, the left and right padding is removed.
     * @default false
     */
    disableGutters?: boolean;
    /**
     * Set the max-width to match the min-width of the current breakpoint.
     * This is useful if you'd prefer to design for a fixed set of sizes
     * instead of trying to accommodate a fully fluid viewport.
     * It's fluid by default.
     * @default false
     */
    fixed?: boolean;
    /**
     * Determine the max-width of the container.
     * The container width grows with the size of the screen.
     * Set to `false` to disable `maxWidth`.
     * @default 'lg'
     */
    maxWidth?: Breakpoint | false;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
  };
  props: P & ContainerTypeMap["selfProps"];
  defaultComponent: D;
}

export type ContainerProps<
  D extends ElementType = ContainerTypeMap["defaultComponent"],
  P = {},
> = OverrideProps<ContainerTypeMap<P, D>, D>;

export default ContainerProps;
