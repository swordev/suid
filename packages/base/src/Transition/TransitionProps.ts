import { JSXElement } from "solid-js";

export type TransitionStatus = "entering" | "entered" | "exiting" | "exited";

export interface TransitionActions {
  appear?: boolean;
  enter?: boolean;
  exit?: boolean;
}

export interface TransitionProps extends TransitionActions {
  in?: boolean;
  mountOnEnter?: boolean;
  unmountOnExit?: boolean;
  timeout?: number | { appear?: number; enter?: number; exit?: number };
  addEndListener?: (node: HTMLElement, done: () => void) => void;
  onEnter?: () => void;
  onEntering?: () => void;
  onEntered?: () => void;
  onExit?: () => void;
  onExiting?: () => void;
  onExited?: () => void;
  children: (status: TransitionStatus) => JSXElement;
  ref?: HTMLElement | ((element: HTMLElement) => void);
}
