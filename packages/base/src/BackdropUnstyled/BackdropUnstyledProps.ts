import { BackdropUnstyledClasses } from "./backdropUnstyledClasses";
import {
  ElementType,
  OverridableComponent,
  OverridableTypeMap,
  OverrideProps,
} from "@suid/types";
import { JSX, JSXElement } from "solid-js";

export interface BackdropUnstyledComponentsPropsOverrides {}

export interface BackdropUnstyledTypeMap<
  P = {},
  D extends ElementType = "div"
> {
  name: "BackdropUnstyled";
  defaultPropNames: "components" | "componentsProps" | "invisible";
  selfProps: {
    /**
     * The content of the component.
     */
    children?: JSXElement;
    /**
     * The components used for each slot inside the Backdrop.
     * Either a string to use a HTML element or a component.
     * @default {}
     */
    components?: {
      Root?: ElementType;
    };
    /**
     * The props used for each slot inside the Backdrop.
     * @default {}
     */
    componentsProps?: {
      root?: JSX.HTMLAttributes<HTMLDivElement> &
        BackdropUnstyledComponentsPropsOverrides;
    };
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<BackdropUnstyledClasses>;
    /**
     * If `true`, the backdrop is invisible.
     * It can be used when rendering a popover or a custom select component.
     * @default false
     */
    invisible?: boolean;
  };
  props: P & BackdropUnstyledTypeMap["selfProps"];
  defaultComponent: D;
}

/**
 * Utility to create component types that inherit props from BackdropUnstyled.
 */
export interface ExtendBackdropUnstyledTypeMap<M extends OverridableTypeMap> {
  props: M["props"] & BackdropUnstyledTypeMap["props"];
  defaultComponent: M["defaultComponent"];
}

export type ExtendBackdropUnstyled<M extends OverridableTypeMap> =
  OverridableComponent<ExtendBackdropUnstyledTypeMap<M>>;

export type BackdropUnstyledProps<
  D extends ElementType = BackdropUnstyledTypeMap["defaultComponent"],
  P = {}
> = OverrideProps<BackdropUnstyledTypeMap<P, D>, D>;

export default BackdropUnstyledProps;
