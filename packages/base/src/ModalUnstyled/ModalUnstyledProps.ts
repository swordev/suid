import { BackdropUnstyledProps } from "../BackdropUnstyled";
import { PortalProps } from "../Portal";
import { ModalUnstyledClasses } from "./modalUnstyledClasses";
import {
  ElementType,
  OverridableComponent,
  OverridableTypeMap,
  OverrideProps,
} from "@suid/types";
import { JSXElement } from "solid-js";
import { JSX } from "solid-js/jsx-runtime";

export interface ModalUnstyledComponentsPropsOverrides {}

export type ModalUnstyledOnClose<R> = {
  bivarianceHack(event: {}, reason: R): void;
}["bivarianceHack"];

export interface ModalUnstyledTypeMap<P = {}, D extends ElementType = "div"> {
  name: "ModalUnstyled";
  defaultPropNames:
    | "components"
    | "componentsProps"
    | "disableAutoFocus"
    | "disableEnforceFocus"
    | "disableEscapeKeyDown"
    | "disablePortal"
    | "disableRestoreFocus"
    | "disableScrollLock"
    | "hideBackdrop"
    | "keepMounted";
  selfProps: {
    /**
     * A backdrop component. This prop enables custom backdrop rendering.
     */
    BackdropComponent?: ElementType;
    /**
     * Props applied to the [`BackdropUnstyled`](/api/backdrop-unstyled/) element.
     */
    BackdropProps?: Partial<BackdropUnstyledProps>;
    /**
     * A single child content element.
     */
    children: JSXElement;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<ModalUnstyledClasses>;
    /**
     * When set to true the Modal waits until a nested Transition is completed before closing.
     * @default false
     */
    closeAfterTransition?: boolean;
    /**
     * The components used for each slot inside the Modal.
     * Either a string to use a HTML element or a component.
     * @default {}
     */
    components?: {
      Root?: ElementType;
    };
    /**
     * The props used for each slot inside the Modal.
     * @default {}
     */
    componentsProps?: {
      root?: JSX.HTMLAttributes<HTMLDivElement> &
        ModalUnstyledComponentsPropsOverrides;
    };
    /**
     * An HTML element or function that returns one.
     * The `container` will have the portal children appended to it.
     *
     * By default, it uses the body of the top-level document object,
     * so it's simply `document.body` most of the time.
     */
    container?: PortalProps["container"];
    /**
     * If `true`, the modal will not automatically shift focus to itself when it opens, and
     * replace it to the last focused element when it closes.
     * This also works correctly with any modal children that have the `disableAutoFocus` prop.
     *
     * Generally this should never be set to `true` as it makes the modal less
     * accessible to assistive technologies, like screen readers.
     * @default false
     */
    disableAutoFocus?: boolean;
    /**
     * If `true`, the modal will not prevent focus from leaving the modal while open.
     *
     * Generally this should never be set to `true` as it makes the modal less
     * accessible to assistive technologies, like screen readers.
     * @default false
     */
    disableEnforceFocus?: boolean;
    /**
     * If `true`, hitting escape will not fire the `onClose` callback.
     * @default false
     */
    disableEscapeKeyDown?: boolean;
    /**
     * The `children` will be under the DOM hierarchy of the parent component.
     * @default false
     */
    disablePortal?: PortalProps["disablePortal"];
    /**
     * If `true`, the modal will not restore focus to previously focused element once
     * modal is hidden or unmounted.
     * @default false
     */
    disableRestoreFocus?: boolean;
    /**
     * Disable the scroll lock behavior.
     * @default false
     */
    disableScrollLock?: boolean;
    /**
     * If `true`, the backdrop is not rendered.
     * @default false
     */
    hideBackdrop?: boolean;
    /**
     * Always keep the children in the DOM.
     * This prop can be useful in SEO situation or
     * when you want to maximize the responsiveness of the Modal.
     * @default false
     */
    keepMounted?: boolean;
    /**
     * Callback fired when the backdrop is clicked.
     */
    onBackdropClick?: JSX.EventHandler<HTMLElement, MouseEvent>;
    /**
     * Callback fired when the component requests to be closed.
     * The `reason` parameter can optionally be used to control the response to `onClose`.
     *
     * @param {object} event The event source of the callback.
     * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
     */
    onClose?: ModalUnstyledOnClose<"backdropClick" | "escapeKeyDown">;
    /**
     * If `true`, the component is shown.
     */
    open: boolean;
    transition?: boolean;
  };
  props: P & ModalUnstyledTypeMap["selfProps"];
  defaultComponent: D;
}

/**
 * Utility to create component types that inherit props from ModalUnstyled.
 */
export interface ExtendModalUnstyledTypeMap<M extends OverridableTypeMap> {
  props: M["props"] & ModalUnstyledTypeMap["props"];
  defaultComponent: M["defaultComponent"];
}

export type ExtendModalUnstyled<M extends OverridableTypeMap> =
  OverridableComponent<ExtendModalUnstyledTypeMap<M>>;

export type ModalUnstyledProps<
  D extends ElementType = ModalUnstyledTypeMap["defaultComponent"],
  P = {},
> = OverrideProps<ModalUnstyledTypeMap<P, D>, D>;
