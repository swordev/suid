import { TouchRippleClasses } from "./touchRippleClasses";

export interface StartActionOptions {
  pulsate?: boolean;
  center?: boolean;
}

export interface TouchRippleActions {
  start: (
    event?: Event,
    options?: StartActionOptions,
    callback?: () => void
  ) => void;
  pulsate: (event?: Event) => void;
  stop: (event?: Event, callback?: () => void) => void;
}

export interface TouchRipplePropsTypeMap {
  name: "MuiTouchRipple";
  defaultPropNames: "center" | "classes";
  selfProps: {
    center?: boolean;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<TouchRippleClasses>;
    ref?: (actions: TouchRippleActions) => void;
  };
  props: TouchRipplePropsTypeMap["selfProps"];
}

export type TouchRippleProps = TouchRipplePropsTypeMap["props"];
