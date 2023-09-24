import { TransitionProps } from "../transitions/transition";
import * as ST from "@suid/types";
import { JSXElement } from "solid-js";

export type GrowTypeMap<P = {}, D extends ST.ElementType = "div"> = {
  name: "MuiGrow";
  defaultPropNames: "appear" | "timeout";
  selfProps: {
    /**
     * Perform the enter transition when it first mounts if `in` is also `true`.
     * Set this to `false` to disable this behavior.
     * @default true
     */
    appear?: boolean;

    /**
     * A single child content element.
     */
    children: JSXElement;

    /**
     * The transition timing function.
     * You may specify a single easing or a object containing enter and exit values.
     */
    easing?: TransitionProps["easing"];

    /**
     * If `true`, the component will transition in.
     */
    in?: boolean;

    ref?: ST.Ref<unknown>;

    /**
     * The duration for the transition, in milliseconds.
     * You may specify a single timeout for all transitions, or individually with an object.
     *
     * Set to 'auto' to automatically calculate transition time based on height.
     * @default 'auto'
     */
    timeout?: TransitionProps["timeout"] | "auto";
  };
  props: P & GrowTypeMap["selfProps"] & Omit<TransitionProps, "timeout">;
  defaultComponent: D;
};

export type GrowProps<
  D extends ST.ElementType = GrowTypeMap["defaultComponent"],
  P = {},
> = ST.OverrideProps<GrowTypeMap<P, D>, D>;

export default GrowProps;
