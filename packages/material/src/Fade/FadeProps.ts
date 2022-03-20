import { TransitionProps } from "../transitions/transition";
import { RefProp } from "@suid/system/createRef";
import { JSXElement } from "solid-js";

export interface FadeTypeMap {
  name: "MuiFader";
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
    ref?: RefProp<HTMLElement>;
    /**
     * The duration for the transition, in milliseconds.
     * You may specify a single timeout for all transitions, or individually with an object.
     * @default {
     *   enter: theme.transitions.duration.enteringScreen,
     *   exit: theme.transitions.duration.leavingScreen,
     * }
     */
    timeout?: TransitionProps["timeout"];
  };
  props: Omit<TransitionProps, "children"> & FadeTypeMap["selfProps"];
}

export type FadeProps = FadeTypeMap["props"];

export default FadeProps;
