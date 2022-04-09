import { JSX } from "solid-js";

export type EventParam<T = HTMLElement, E extends Event = Event> = E & {
  currentTarget: T;
  target: Element;
};

type EH<T, E extends Event> = JSX.EventHandler<T, E>;

export type AnimationEventHandler<T = Element> = EH<T, AnimationEvent>;
export type ChangeEventHandler<T = Element> = EH<T, KeyboardEvent>;
export type ClipboardEventHandler<T = Element> = EH<T, ClipboardEvent>;
export type CompositionEventHandler<T = Element> = EH<T, CompositionEvent>;
export type DragEventHandler<T = Element> = EH<T, DragEvent>;
export type FocusEventHandler<T = Element> = EH<T, FocusEvent>;
export type InputEventHandler<T = Element> = EH<T, InputEvent>;
export type KeyboardEventHandler<T = Element> = EH<T, KeyboardEvent>;
export type MouseEventHandler<T = Element> = EH<T, MouseEvent>;
export type PointerEventHandler<T = Element> = EH<T, PointerEvent>;
export type TouchEventHandler<T = Element> = EH<T, TouchEvent>;
export type TransitionEventHandler<T = Element> = EH<T, TransitionEvent>;
export type UIEventHandler<T = Element> = EH<T, UIEvent>;
export type WheelEventHandler<T = Element> = EH<T, WheelEvent>;

export {};
