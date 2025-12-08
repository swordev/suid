import styled from "../styles/styled";
import useTheme from "../styles/useTheme";
import { reflow, getTransitionProps } from "../transitions/utils";
import { CollapseTypeMap } from "./CollapseProps";
import { getCollapseUtilityClass } from "./collapseClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import createElementRef from "@suid/system/createElementRef";
import clsx from "clsx";
import { children, createEffect, createSignal, on, onMount } from "solid-js";

const $ = createComponentFactory<CollapseTypeMap>()({
  name: "MuiCollapse",
  selfPropNames: [
    "addEndListener",
    "children",
    "classes",
    "collapsedSize",
    "easing",
    "in",
    "onEnter",
    "onEntered",
    "onEntering",
    "onExit",
    "onExited",
    "onExiting",
    "orientation",
    "timeout",
  ],
  propDefaults: ({ set }) => {
    const theme = useTheme();
    return set({
      collapsedSize: "0px",
      orientation: "vertical",
      get timeout() {
        return theme.transitions.duration.standard;
      },
    });
  },
  utilityClass: getCollapseUtilityClass,
  autoCallUseClasses: false,
});

const CollapseRoot = styled("div", {
  name: "MuiCollapse",
  slot: "Root",
})(({ theme }) => ({
  height: 0,
  overflow: "hidden",
}));

const CollapseWrapper = styled("div", {
  name: "MuiCollapse",
  slot: "Wrapper",
})({
  display: "flex",
  width: "100%",
});

const CollapseWrapperInner = styled("div", {
  name: "MuiCollapse",
  slot: "WrapperInner",
})({
  width: "100%",
});

/**
 * The Collapse transition is used by the Vertical Stepper StepContent component.
 * It uses react-transition-group internally.
 *
 * Demos:
 *
 * - [Card](https://mui.com/components/cards/)
 * - [Lists](https://mui.com/components/lists/)
 * - [Transitions](https://mui.com/components/transitions/)
 *
 * API:
 *
 * - [Collapse API](https://mui.com/api/collapse/)
 */
const Collapse = $.component(function Collapse({
  allProps,
  props,
  otherProps,
  classes,
}) {
  const theme = useTheme();
  const element = createElementRef<HTMLDivElement>(otherProps);
  const wrapperRef = createElementRef<HTMLDivElement>();
  const c = children(() => props.children) as unknown as () => HTMLElement[];

  const collapsedSize =
    typeof props.collapsedSize === "number"
      ? `${props.collapsedSize}px`
      : props.collapsedSize;
  const isHorizontal = props.orientation === "horizontal";
  const size = isHorizontal ? "width" : "height";

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [state, setState] = createSignal<
    "entering" | "entered" | "exiting" | "exited"
  >(props.in ? "entered" : "exited");

  const getWrapperSize = () => {
    return wrapperRef.ref?.[isHorizontal ? "clientWidth" : "clientHeight"] || 0;
  };

  createEffect(
    on(
      () => props.in,
      (inProp) => {
        const el = element.ref;
        if (!el) return;

        if (inProp) {
          // Entering
          setState("entering");
          props.onEnter?.();

          // Set initial collapsed state
          el.style[size] = collapsedSize;
          el.style.overflow = "hidden";

          // Force reflow to ensure initial state is applied
          reflow(el);

          const wrapperSize = getWrapperSize();
          const transitionProps = getTransitionProps(
            {
              style: otherProps.style as any,
              timeout: props.timeout === "auto" ? 0 : props.timeout,
              easing: props.easing,
            },
            { mode: "enter" }
          );

          // Calculate duration
          let duration: number;
          if (props.timeout === "auto") {
            duration = theme.transitions.getAutoHeightDuration(wrapperSize);
            el.style.transitionDuration = `${duration}ms`;
          } else {
            duration =
              typeof props.timeout === "number"
                ? props.timeout
                : (props.timeout as any)?.enter ||
                  theme.transitions.duration.standard;
            el.style.transitionDuration =
              typeof transitionProps.duration === "string"
                ? transitionProps.duration
                : `${transitionProps.duration}ms`;
          }

          el.style.transitionTimingFunction = transitionProps.easing || "";

          // Start transition to expanded size
          el.style[size] = `${wrapperSize}px`;

          props.onEntering?.();

          const done = () => {
            el.style[size] = "auto";
            el.style.overflow = "visible";
            setState("entered");
            props.onEntered?.();
          };

          el.addEventListener("transitionend", done, { once: true });
          setTimeout(done, duration);
        } else {
          // Exiting
          setState("exiting");
          props.onExit?.();

          const wrapperSize = getWrapperSize();

          // If height is 'auto', we need to set it to a specific value first
          if (el.style[size] === "auto" || el.style[size] === "") {
            el.style[size] = `${wrapperSize}px`;
          }

          el.style.overflow = "hidden";

          // Force reflow to ensure the size is set before transition
          reflow(el);

          const transitionProps = getTransitionProps(
            {
              style: otherProps.style as any,
              timeout: props.timeout === "auto" ? 0 : props.timeout,
              easing: props.easing,
            },
            { mode: "exit" }
          );

          // Calculate duration
          let duration: number;
          if (props.timeout === "auto") {
            duration = theme.transitions.getAutoHeightDuration(wrapperSize);
            el.style.transitionDuration = `${duration}ms`;
          } else {
            duration =
              typeof props.timeout === "number"
                ? props.timeout
                : (props.timeout as any)?.exit ||
                  theme.transitions.duration.standard;
            el.style.transitionDuration =
              typeof transitionProps.duration === "string"
                ? transitionProps.duration
                : `${transitionProps.duration}ms`;
          }

          el.style.transitionTimingFunction = transitionProps.easing || "";

          // Start transition to collapsed size
          el.style[size] = collapsedSize;

          props.onExiting?.();

          const done = () => {
            setState("exited");
            props.onExited?.();
          };

          el.addEventListener("transitionend", done, { once: true });
          setTimeout(done, duration);
        }
      },
      { defer: true }
    )
  );

  onMount(() => {
    const el = element.ref;
    if (!el) return;

    if (props.in) {
      el.style[size] = "auto";
      el.style.overflow = "visible";
    } else {
      el.style[size] = collapsedSize;
      el.style.overflow = "hidden";
    }
  });

  // Keep the element in sync with the state after transitions complete
  createEffect(() => {
    const el = element.ref;
    const currentState = state();
    if (!el) return;

    if (currentState === "entered") {
      el.style[size] = "auto";
      el.style.overflow = "visible";
    } else if (currentState === "exited") {
      el.style[size] = collapsedSize;
      el.style.overflow = "hidden";
    }
  });

  return (
    <CollapseRoot
      {...otherProps}
      ref={element}
      class={clsx(classes.root, allProps.class)}
    >
      <CollapseWrapper ref={wrapperRef} class={classes.wrapper}>
        <CollapseWrapperInner class={classes.wrapperInner}>
          {c()}
        </CollapseWrapperInner>
      </CollapseWrapper>
    </CollapseRoot>
  );
});

export default Collapse;
