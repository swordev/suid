import { PortalProps } from "../Portal";
import {
  Instance,
  VirtualElement,
  Options,
  OptionsGeneric,
} from "@popperjs/core";
import { RefProp } from "@suid/system/createRef";
import { ElementType, OverrideProps } from "@suid/types";
import { JSXElement } from "solid-js";

export type PopperPlacementType = Options["placement"];

export type TransitionProps = {
  in: boolean;
  onEnter: () => void;
  onExited: () => void;
};

export interface PopperUnstyledTypeMap<P = {}, D extends ElementType = "div"> {
  name: "MuiPopperUnstyled";
  defaultPropNames:
    | "direction"
    | "disablePortal"
    | "keepMounted"
    | "placement"
    | "popperOptions"
    | "transition";
  selfProps: {
    ref?: RefProp<HTMLDivElement>;
    /**
     * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
     * or a function that returns either.
     * It's used to set the position of the popper.
     * The return value will passed as the reference object of the Popper instance.
     */
    anchorEl?: null | VirtualElement | (() => VirtualElement);
    /**
     * Popper render function or node.
     */
    children?:
      | JSXElement
      | ((props: {
          placement: PopperPlacementType;
          TransitionProps?: TransitionProps;
        }) => JSXElement);
    /**
     * An HTML element or function that returns one.
     * The `container` will have the portal children appended to it.
     *
     * By default, it uses the body of the top-level document object,
     * so it's simply `document.body` most of the time.
     */
    container?: PortalProps["container"];
    /**
     * Direction of the text.
     * @default 'ltr'
     */
    direction?: "ltr" | "rtl";
    /**
     * The `children` will be under the DOM hierarchy of the parent component.
     * @default false
     */
    disablePortal?: PortalProps["disablePortal"];
    /**
     * Always keep the children in the DOM.
     * This prop can be useful in SEO situation or
     * when you want to maximize the responsiveness of the Popper.
     * @default false
     */
    keepMounted?: boolean;
    /**
     * Popper.js is based on a "plugin-like" architecture,
     * most of its features are fully encapsulated "modifiers".
     *
     * A modifier is a function that is called each time Popper.js needs to
     * compute the position of the popper.
     * For this reason, modifiers should be very performant to avoid bottlenecks.
     * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
     */
    modifiers?: Options["modifiers"];
    /**
     * If `true`, the component is shown.
     */
    open: boolean;
    /**
     * Popper placement.
     * @default 'bottom'
     */
    placement?: PopperPlacementType;
    /**
     * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
     * @default {}
     */
    popperOptions?: Partial<OptionsGeneric<any>>;
    /**
     * A ref that points to the used popper instance.
     */
    popperRef?: RefProp<Instance>;
    /**
     * Help supporting a react-transition-group/Transition component.
     * @default false
     */
    transition?: boolean;
  };
  props: P & PopperUnstyledTypeMap["selfProps"];
  defaultComponent: D;
}

export type PopperUnstyledProps<
  D extends ElementType = PopperUnstyledTypeMap["defaultComponent"],
  P = {}
> = OverrideProps<PopperUnstyledTypeMap<P, D>, D>;

export default PopperUnstyledProps;
