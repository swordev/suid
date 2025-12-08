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
  transition: theme.transitions.create("height"),
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

          el.style[size] = collapsedSize;
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

          el.style.transition = theme.transitions.create(size, transitionProps);
          el.style[size] = `${wrapperSize}px`;

          props.onEntering?.();

          const done = () => {
            el.style[size] = "auto";
            setState("entered");
            props.onEntered?.();
          };

          if (props.timeout === "auto") {
            const transitionDuration =
              theme.transitions.getAutoHeightDuration(wrapperSize);
            el.addEventListener("transitionend", done, { once: true });
            setTimeout(done, transitionDuration);
          } else {
            const duration =
              typeof props.timeout === "number"
                ? props.timeout
                : (props.timeout as any)?.enter ||
                  theme.transitions.duration.standard;
            el.addEventListener("transitionend", done, { once: true });
            setTimeout(done, duration);
          }
        } else {
          // Exiting
          setState("exiting");
          props.onExit?.();

          const wrapperSize = getWrapperSize();
          el.style[size] = `${wrapperSize}px`;
          reflow(el);

          const transitionProps = getTransitionProps(
            {
              style: otherProps.style as any,
              timeout: props.timeout === "auto" ? 0 : props.timeout,
              easing: props.easing,
            },
            { mode: "exit" }
          );

          el.style.transition = theme.transitions.create(size, transitionProps);
          el.style[size] = collapsedSize;

          props.onExiting?.();

          const done = () => {
            setState("exited");
            props.onExited?.();
          };

          if (props.timeout === "auto") {
            const transitionDuration =
              theme.transitions.getAutoHeightDuration(wrapperSize);
            el.addEventListener("transitionend", done, { once: true });
            setTimeout(done, transitionDuration);
          } else {
            const duration =
              typeof props.timeout === "number"
                ? props.timeout
                : (props.timeout as any)?.exit ||
                  theme.transitions.duration.standard;
            el.addEventListener("transitionend", done, { once: true });
            setTimeout(done, duration);
          }
        }
      },
      { defer: true }
    )
  );

  onMount(() => {
    const el = element.ref;
    if (el && props.in) {
      el.style[size] = "auto";
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
