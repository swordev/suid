import { Theme } from "..";
import { ModalProps } from "../Modal";
import { PaperProps } from "../Paper";
import { TransitionProps } from "../transitions/transition";
import { DialogClasses } from "./dialogClasses";
import { SxProps, Breakpoint } from "@suid/system";
import * as ST from "@suid/types";
import { JSXElement, Component } from "solid-js";

export type DialogTypeMap<P = {}, D extends ST.ElementType = "div"> = {
  name: "MuiDialog";
  defaultPropNames:
    | "disableEscapeKeyDown"
    | "fullScreen"
    | "fullWidth"
    | "maxWidth"
    | "PaperComponent"
    | "PaperProps"
    | "scroll"
    | "TransitionComponent"
    | "transitionDuration";
  selfProps: {
    /**
     * The id(s) of the element(s) that describe the dialog.
     */
    "aria-describedby"?: string;

    /**
     * The id(s) of the element(s) that label the dialog.
     */
    "aria-labelledby"?: string;

    /**
     * Dialog children, usually the included sub-components.
     */
    children?: JSXElement;

    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<DialogClasses>;

    /**
     * If `true`, hitting escape will not fire the `onClose` callback.
     * @default false
     */
    disableEscapeKeyDown?: boolean;

    /**
     * If `true`, the dialog is full-screen.
     * @default false
     */
    fullScreen?: boolean;

    /**
     * If `true`, the dialog stretches to `maxWidth`.
     *
     * Notice that the dialog width grow is limited by the default margin.
     * @default false
     */
    fullWidth?: boolean;

    /**
     * Determine the max-width of the dialog.
     * The dialog width grows with the size of the screen.
     * Set to `false` to disable `maxWidth`.
     * @default 'sm'
     */
    maxWidth?: Breakpoint | false;

    /**
     * Callback fired when the backdrop is clicked.
     */
    onBackdropClick?: ModalProps["onBackdropClick"];

    /**
     * Callback fired when the component requests to be closed.
     *
     * @param {object} event The event source of the callback.
     * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
     */
    onClose?: ModalProps["onClose"];

    /**
     * If `true`, the component is shown.
     */
    open: ModalProps["open"];

    /**
     * The component used to render the body of the dialog.
     * @default Paper
     */
    PaperComponent?: Component<PaperProps>;

    /**
     * Props applied to the [`Paper`](/api/paper/) element.
     * @default {}
     */
    PaperProps?: Partial<PaperProps>;

    /**
     * Determine the container for scrolling the dialog.
     * @default 'paper'
     */
    scroll?: "body" | "paper";

    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;

    /**
     * The component used for the transition.
     * [Follow this guide](/components/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
     * @default Fade
     */
    TransitionComponent?: Component<TransitionProps & { children: JSXElement }>;

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
     * Props applied to the transition element.
     * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition/) component.
     */
    TransitionProps?: TransitionProps;
  };
  props: P & DialogTypeMap["selfProps"] & Omit<ModalProps, "children">;
  defaultComponent: D;
};

export type DialogProps<
  D extends ST.ElementType = DialogTypeMap["defaultComponent"],
  P = {},
> = ST.OverrideProps<DialogTypeMap<P, D>, D>;

export default DialogProps;
