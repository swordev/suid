import { ModalProps } from "../Modal";
import { PaperProps } from "../Paper";
import { SlideProps } from "../Slide";
import { Theme } from "../styles";
import { TransitionProps } from "../transitions/transition";
import { DrawerClasses } from "./drawerClasses";
import SxProps from "@suid/system/sxProps";
import { ElementType, OverrideProps } from "@suid/types";
import { JSXElement } from "solid-js";

export interface DrawerTypeMap<P = {}, D extends ElementType = "hr"> {
  name: "MuiDrawer";
  defaultPropNames:
    | "anchor"
    | "elevation"
    | "ModalProps"
    | "open"
    | "PaperProps"
    | "transitionDuration";
  selfProps: {
    /**
     * Side from which the drawer will appear.
     * @default 'left'
     */
    anchor?: "left" | "top" | "right" | "bottom";
    /**
     * The content of the component.
     */
    children?: JSXElement;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<DrawerClasses>;
    /**
     * The elevation of the drawer.
     * @default 16
     */
    elevation?: number;
    /**
     * Props applied to the [`Modal`](/api/modal/) element.
     * @default {}
     */
    ModalProps?: Partial<ModalProps>;
    /**
     * Callback fired when the component requests to be closed.
     *
     * @param {object} event The event source of the callback.
     */
    onClose?: ModalProps["onClose"];
    /**
     * If `true`, the component is shown.
     * @default false
     */
    open?: boolean;
    /**
     * Props applied to the [`Paper`](/api/paper/) element.
     * @default {}
     */
    PaperProps?: Partial<PaperProps>;
    /**
     * Props applied to the [`Slide`](/api/slide/) element.
     */
    SlideProps?: Partial<SlideProps>;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
    /**
     * The duration for the transition, in milliseconds.
     * You may specify a single timeout for all transitions, or individually with an object.
     * @default {
     *   enter: theme.transitions.duration.enteringScreen,
     *   exit: theme.transitions.duration.leavingScreen,
     * }
     */
    transitionDuration?: TransitionProps["timeout"];
    /**
     * The variant to use.
     * @default 'temporary'
     */
    variant?: "permanent" | "persistent" | "temporary";
  };
  props: P &
    Omit<ModalProps, "open" | "children" | "classes"> &
    DrawerTypeMap["selfProps"];
  defaultComponent: D;
}

export type DrawerProps<
  D extends ElementType = DrawerTypeMap["defaultComponent"],
  P = {},
> = OverrideProps<DrawerTypeMap<P, D>, D>;
