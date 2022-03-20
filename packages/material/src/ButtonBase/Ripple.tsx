import Box from "../Box";
import { RipplePropsTypeMap } from "./RippleProps";
import createComponentFactory from "@suid/base/createComponentFactory";
import clsx from "clsx";
import { createEffect, createMemo, createSignal, onCleanup } from "solid-js";

const $ = createComponentFactory<RipplePropsTypeMap>()({
  name: "MuiRipple",
  selfPropNames: [
    "className",
    "classes",
    "pulsate",
    "rippleX",
    "rippleY",
    "rippleSize",
    "in",
    "onExited",
    "timeout",
  ],
  propDefaults: ({ set }) =>
    set({
      pulsate: false,
      classes: {},
    }),
});

/**
 * @ignore - internal component.
 */
const Ripple = $.component(function Ripple({ props, otherProps }) {
  const [leaving, setLeaving] = createSignal(false);

  const rippleClassName = createMemo(() =>
    clsx(
      props.className,
      props.classes.ripple,
      props.classes.rippleVisible,
      props.classes.ripplePulsate && {
        [props.classes.ripplePulsate]: props.pulsate,
      }
    )
  );
  const rippleStyles = createMemo(() => ({
    width: `${props.rippleSize}px`,
    height: `${props.rippleSize}px`,
    top: `${-(props.rippleSize / 2) + props.rippleY}px`,
    left: `${-(props.rippleSize / 2) + props.rippleX}px`,
  }));

  const childClassName = createMemo(() =>
    clsx(
      props.classes.child,
      props.classes.childLeaving && {
        [props.classes.childLeaving]: leaving(),
      },
      props.classes.childPulsate && {
        [props.classes.childPulsate]: props.pulsate,
      }
    )
  );

  createEffect(() => {
    if (!props.in && !leaving()) {
      setLeaving(true);
    }
  });

  let timeoutId: number | undefined;

  createEffect(() => {
    if (!props.in && props.onExited) {
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(props.onExited, props.timeout);
    }
  });

  onCleanup(() => clearTimeout(timeoutId));

  return (
    <Box
      component="span"
      className={rippleClassName()}
      style={rippleStyles()}
      sx={otherProps.sx}
    >
      <span className={childClassName()} />
    </Box>
  );
});

export default Ripple;
