import { TransitionProps } from "../transitions/transition";
import { JSXElement } from "solid-js";

export interface SlideTypeMap {
  name: "MuiSlide";
  defaultPropNames: "appear" | "direction" | "easing" | "timeout";
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
     * An HTML element, or a function that returns one.
     * It's used to set the container the Slide is transitioning from.
     */
    container?: Element | (() => Element);
    /**
     * Direction the child node will enter from.
     * @default 'down'
     */
    direction?: "left" | "right" | "up" | "down";
    /**
     * The transition timing function.
     * You may specify a single easing or a object containing enter and exit values.
     * @default {
     *   enter: theme.transitions.easing.easeOut,
     *   exit: theme.transitions.easing.sharp,
     * }
     */
    easing?: TransitionProps["easing"];
    /**
     * If `true`, the component will transition in.
     */
    in?: TransitionProps["in"];
    //ref?: React.Ref<unknown>;
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
  props: TransitionProps & SlideTypeMap["selfProps"];
}

export type SlideProps = SlideTypeMap["props"];

export default SlideProps;
