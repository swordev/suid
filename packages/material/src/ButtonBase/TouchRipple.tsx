import styled from "../styles/styled";
import Ripple from "./Ripple";
import { TouchRipplePropsTypeMap } from "./TouchRippleProps";
import touchRippleClasses from "./touchRippleClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import createElementRef from "@suid/system/createElementRef";
import clsx from "clsx";
import {
  createEffect,
  createSignal,
  mapArray,
  mergeProps,
  onCleanup,
} from "solid-js";
import { createMutable } from "solid-js/store";

const $ = createComponentFactory<TouchRipplePropsTypeMap>()({
  name: "MuiTouchRipple",
  selfPropNames: ["center", "classes", "ref"],
  propDefaults: ({ set }) =>
    set({
      center: false,
      classes: {},
    }),
});

//const DURATION = 10_000; //550;
const DURATION = 550;
export const DELAY_RIPPLE = 80;

export const TouchRippleRoot = styled("span", {
  name: "MuiTouchRipple",
  slot: "Root",
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit",
});

// This `styled()` function invokes keyframes. `styled-components` only supports keyframes
// in string templates. Do not convert these styles in JS object as it will break.
export const TouchRippleRipple = styled(Ripple, {
  name: "MuiTouchRipple",
  slot: "Ripple",
})(({ theme }) => ({
  position: "absolute",
  "@keyframes animation-enter-$id": {
    0: {
      transform: "scale(0)",
      opacity: 0.1,
    },
    100: {
      transform: "scale(1)",
      opacity: 0.3,
    },
  },
  "@keyframes animation-exit-$id": {
    0: {
      opacity: 1,
    },
    100: {
      opacity: 0,
    },
  },
  "@keyframes animation-pulsate-$id": {
    0: {
      transform: "scale(1)",
    },
    50: {
      transform: "scale(0.92)",
    },
    100: {
      transform: "scale(1)",
    },
  },
  [`&.${touchRippleClasses.rippleVisible}`]: {
    opacity: "0.3",
    transform: "scale(1)",
    animationName: `animation-enter-$id`,
    animationDuration: `${DURATION}ms`,
    animationTimingFunction: theme.transitions.easing.easeInOut,
  },
  [`&.${touchRippleClasses.ripplePulsate}`]: {
    animationDuration: `${theme.transitions.duration.shorter}ms`,
  },
  [`& .${touchRippleClasses.child}`]: {
    opacity: 1,
    display: "block",
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
  [`& .${touchRippleClasses.childLeaving}`]: {
    opacity: 0,
    animationName: `animation-exit-$id`,
    animationDuration: `${DURATION}ms`,
    animationTimingFunction: `${theme.transitions.easing.easeInOut}`,
  },
  [`& .${touchRippleClasses.childPulsate}`]: {
    position: "absolute",
    left: "0px",
    top: 0,
    animationName: `animation-pulsate-$id`,
    animationDuration: "2500ms",
    animationTimingFunction: `${theme.transitions.easing.easeInOut}`,
    animationIterationCount: "infinite",
    animationDelay: "200ms",
  },
}));

/**
 * @ignore - internal component.
 *
 * TODO v5: Make private
 */

const TouchRipple = $.component(function TouchRipple({ props, otherProps }) {
  let counter = 0;
  const [ripples, setRipples] = createSignal<
    {
      id: number;
      params: {
        pulsate: boolean;
        rippleX: number;
        rippleY: number;
        rippleSize: number;
        cb?: () => void;
      };
    }[]
  >([]);
  const inProps = createMutable<Record<number, boolean>>({});

  let rippleCallback: (() => void) | undefined;
  // Used to filter out mouse emulated events on mobile.
  let ignoringMouseDown = false;
  // We use a timer in order to only show the ripples for touch "click" like events.
  // We don't want to display the ripple for touch scroll events.
  let startTimer: any | undefined;
  // This is the hook called once the previous timeout is ready.
  let startTimerCommit: (() => void) | undefined;
  const container = createElementRef(otherProps as any);

  const activeIds: number[] = [];
  onCleanup(() => {
    if (startTimer) clearTimeout(startTimer);
  });

  createEffect(() => {
    ripples();
    if (rippleCallback) {
      rippleCallback();
      rippleCallback = undefined;
    }
  });

  const startCommit = (params: {
    pulsate: boolean;
    rippleX: number;
    rippleY: number;
    rippleSize: number;
    cb?: () => void;
  }) => {
    const id = counter++;
    activeIds.push(id);
    inProps[id] = true;
    setRipples((oldRipples) => [
      ...oldRipples,
      {
        id,
        params,
      },
    ]);
    rippleCallback = params.cb;
  };

  const start = (
    event: MouseEvent & Pick<TouchEvent, "touches">,
    options: {
      pulsate: boolean;
      center?: boolean;
    } = {
      pulsate: false,
      center: props.center,
    },
    cb?: () => void
  ) => {
    options = mergeProps(options, {
      center: options.center || options.pulsate,
    });

    if (event.type === "mousedown" && ignoringMouseDown) {
      ignoringMouseDown = false;
      return;
    }

    if (event.type === "touchstart") {
      ignoringMouseDown = true;
    }

    const rect = container.ref
      ? container.ref.getBoundingClientRect()
      : {
          width: 0,
          height: 0,
          left: 0,
          top: 0,
        };

    // Get the size of the ripple
    let rippleX: number;
    let rippleY: number;
    let rippleSize: number;

    if (
      options.center ||
      (event.clientX === 0 && event.clientY === 0) ||
      (!event.clientX && !event.touches)
    ) {
      rippleX = Math.round(rect.width / 2);
      rippleY = Math.round(rect.height / 2);
    } else {
      const { clientX, clientY } = event.touches ? event.touches[0] : event;
      rippleX = Math.round(clientX - rect.left);
      rippleY = Math.round(clientY - rect.top);
    }

    if (options.center) {
      rippleSize = Math.sqrt((2 * rect.width ** 2 + rect.height ** 2) / 3);

      // For some reason the animation is broken on Mobile Chrome if the size is even.
      if (rippleSize % 2 === 0) {
        rippleSize += 1;
      }
    } else {
      const sizeX =
        Math.max(
          Math.abs((container.ref ? container.ref.clientWidth : 0) - rippleX),
          rippleX
        ) *
          2 +
        2;
      const sizeY =
        Math.max(
          Math.abs((container.ref ? container.ref.clientHeight : 0) - rippleY),
          rippleY
        ) *
          2 +
        2;
      rippleSize = Math.sqrt(sizeX ** 2 + sizeY ** 2);
    }

    // Touche devices
    if (event.touches) {
      // check that this isn't another touchstart due to multitouch
      // otherwise we will only clear a single timer when unmounting while two
      // are running
      if (!startTimerCommit) {
        // Prepare the ripple effect.
        startTimerCommit = () => {
          startCommit({
            pulsate: options.pulsate,
            rippleX,
            rippleY,
            rippleSize,
            cb,
          });
        };
        // Delay the execution of the ripple effect.
        startTimer = setTimeout(() => {
          if (startTimerCommit) {
            startTimerCommit();
            startTimerCommit = undefined;
          }
        }, DELAY_RIPPLE); // We have to make a tradeoff with this value.
      }
    } else {
      startCommit({
        pulsate: options.pulsate,
        rippleX,
        rippleY,
        rippleSize,
        cb,
      });
    }
  };

  const pulsate = () => start({} as any, { pulsate: true });

  const stop = (event: Event, cb?: () => any) => {
    clearTimeout(startTimer);

    // The touch interaction occurs too quickly.
    // We still want to show ripple effect.
    if (event.type === "touchend" && startTimerCommit) {
      startTimerCommit();
      startTimerCommit = undefined;
      startTimer = setTimeout(() => {
        stop(event, cb);
      });
      return;
    }

    for (const id in inProps) inProps[id] = false;

    startTimerCommit = undefined;

    rippleCallback = cb;
  };

  const actions = {
    pulsate,
    start,
    stop,
  };

  if (typeof props.ref === "function") {
    props.ref(actions as any);
  }

  return (
    <TouchRippleRoot
      className={clsx(
        props.classes.root,
        touchRippleClasses.root,
        otherProps.className
      )}
      ref={container}
      {...otherProps}
    >
      {mapArray(ripples, (data) => (
        <TouchRippleRipple
          in={inProps[data.id]}
          onExited={() => {
            setRipples((oldRipples) =>
              oldRipples.filter((v) => v.id !== data.id)
            );
            delete inProps[data.id];
          }}
          classes={{
            ripple: clsx(props.classes.ripple, touchRippleClasses.ripple),
            rippleVisible: clsx(
              props.classes.rippleVisible,
              touchRippleClasses.rippleVisible
            ),
            ripplePulsate: clsx(
              props.classes.ripplePulsate,
              touchRippleClasses.ripplePulsate
            ),
            child: clsx(props.classes.child, touchRippleClasses.child),
            childLeaving: clsx(
              props.classes.childLeaving,
              touchRippleClasses.childLeaving
            ),
            childPulsate: clsx(
              props.classes.childPulsate,
              touchRippleClasses.childPulsate
            ),
          }}
          timeout={DURATION}
          pulsate={data.params.pulsate}
          rippleX={data.params.rippleX}
          rippleY={data.params.rippleY}
          rippleSize={data.params.rippleSize}
        />
      ))}
    </TouchRippleRoot>
  );
});

export default TouchRipple;
