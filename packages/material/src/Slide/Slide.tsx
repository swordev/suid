import { SlideTypeMap } from ".";
import useTheme from "../styles/useTheme";
import { reflow, getTransitionProps } from "../transitions/utils";
import Transition from "@suid/base/Transition";
import { TransitionContext } from "@suid/base/Transition/TransitionContext";
import createComponentFactory from "@suid/base/createComponentFactory";
import debounce from "@suid/utils/debounce";
import ownerWindow from "@suid/utils/ownerWindow";
import { children, createEffect, onCleanup, useContext } from "solid-js";

const $ = createComponentFactory<SlideTypeMap>()({
  name: "MuiSlide",
  selfPropNames: [
    "appear",
    "children",
    "container",
    "direction",
    "easing",
    "in",
    "timeout",
  ],
  propDefaults: ({ set }) => {
    const theme = useTheme();
    return set({
      appear: true,
      direction: "down",
      easing: {
        enter: theme.transitions.easing.easeOut,
        exit: theme.transitions.easing.sharp,
      },
      timeout: {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
      },
    });
  },
});

type Direction = "left" | "right" | "up" | "down";

// Translate the node so it can't be seen on the screen.
// Later, we're going to translate the node back to its original location with `none`.
function getTranslateValue(
  direction: Direction,
  node: HTMLElement,
  resolvedContainer?: Element
) {
  const rect = node.getBoundingClientRect();

  const containerRect =
    resolvedContainer && resolvedContainer.getBoundingClientRect();

  const containerWindow = ownerWindow(node);

  const computedStyle = containerWindow.getComputedStyle(node);
  const transform =
    computedStyle.getPropertyValue("-webkit-transform") ||
    computedStyle.getPropertyValue("transform");

  let offsetX = 0;
  let offsetY = 0;

  if (transform && transform !== "none" && typeof transform === "string") {
    const transformValues = transform.split("(")[1].split(")")[0].split(",");
    offsetX = parseInt(transformValues[4], 10);
    offsetY = parseInt(transformValues[5], 10);
  }

  if (direction === "left") {
    if (containerRect) {
      return `translateX(${containerRect.right + offsetX - rect.left}px)`;
    }

    return `translateX(${containerWindow.innerWidth + offsetX - rect.left}px)`;
  }

  if (direction === "right") {
    if (containerRect) {
      return `translateX(-${rect.right - containerRect.left - offsetX}px)`;
    }

    return `translateX(-${rect.left + rect.width - offsetX}px)`;
  }

  if (direction === "up") {
    if (containerRect) {
      return `translateY(${containerRect.bottom + offsetY - rect.top}px)`;
    }
    return `translateY(${containerWindow.innerHeight + offsetY - rect.top}px)`;
  }

  // direction === 'down'
  if (containerRect) {
    return `translateY(-${
      rect.top - containerRect.top + rect.height - offsetY
    }px)`;
  }
  return `translateY(-${rect.top + rect.height - offsetY}px)`;
}

function resolveContainer(
  containerPropProp: Element | (() => Element) | undefined
) {
  return typeof containerPropProp === "function"
    ? containerPropProp()
    : containerPropProp;
}

export function setTranslateValue(
  direction: Direction,
  node: HTMLElement,
  containerProp?: Element | (() => Element)
) {
  const resolvedContainer = resolveContainer(containerProp);
  const transform = getTranslateValue(direction, node, resolvedContainer);
  if (transform) {
    node.style.webkitTransform = transform;
    node.style.transform = transform;
  }
}

/**
 * The Slide transition is used by the [Drawer](https://mui.com/components/drawers/) component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 *
 * Demos:
 *
 * - [Dialogs](https://mui.com/components/dialogs/)
 * - [Transitions](https://mui.com/components/transitions/)
 *
 * API:
 *
 * - [Slide API](https://mui.com/api/slide/)
 * - inherits [Transition API](http://reactcommunity.org/react-transition-group/transition/#Transition-props)
 */

const Slide = $.component(function Slide({ props, otherProps }) {
  const theme = useTheme();
  const resolved = children(() => props.children) as () => HTMLElement;
  const context = useContext(TransitionContext);
  let destructors: (() => any)[] = [];

  createEffect<(() => any) | undefined>((prev) => {
    if (prev) {
      destructors = destructors.filter((v) => v !== prev);
      prev();
    }

    if (!props.in)
      setTranslateValue(props.direction, resolved(), props.container);

    // Skip configuration where the position is screen size invariant.
    if (props.in || props.direction === "down" || props.direction === "right") {
      return undefined;
    }

    const handleResize = debounce(() => {
      setTranslateValue(props.direction, resolved(), props.container);
    });

    const containerWindow = ownerWindow(resolved());
    containerWindow.addEventListener("resize", handleResize);
    return () => {
      handleResize.clear();
      containerWindow.removeEventListener("resize", handleResize);
    };
  });

  onCleanup(() => {
    for (const destructor of destructors) destructor();
  });

  return (
    <Transition
      in={props.in}
      appear={props.appear}
      timeout={props.timeout}
      {...otherProps}
      onEnter={() => {
        const node = resolved();
        setTranslateValue(props.direction, node, props.container);
        reflow(node);
        otherProps.onEnter?.();
        context?.onEnter?.();
      }}
      onEntering={() => {
        const node = resolved();

        const transitionProps = getTransitionProps(
          { timeout: props.timeout, style: {}, easing: props.easing },
          {
            mode: "enter",
          }
        );

        node.style.webkitTransition = theme.transitions.create(
          "-webkit-transform",
          {
            ...transitionProps,
          }
        );

        node.style.transition = theme.transitions.create("transform", {
          ...transitionProps,
        });

        node.style.webkitTransform = "none";
        node.style.transform = "none";
      }}
      onExit={() => {
        const node = resolved();
        const transitionProps = getTransitionProps(
          { timeout: props.timeout, style: {}, easing: props.easing },
          {
            mode: "exit",
          }
        );

        node.style.webkitTransition = theme.transitions.create(
          "-webkit-transform",
          transitionProps
        );
        node.style.transition = theme.transitions.create(
          "transform",
          transitionProps
        );

        setTranslateValue(props.direction, node, props.container);
        otherProps.onExit?.();
      }}
      onExited={() => {
        const node = resolved();
        // No need for transitions when the component is hidden
        node.style.webkitTransition = "";
        node.style.transition = "";

        otherProps.onExited?.();
        context?.onExited?.();
      }}
    >
      {(state) => {
        const element = resolved();
        if (state === "exited" && !props.in) {
          element.style.visibility = "hidden";
        } else {
          element.style.removeProperty("visibility");
        }
        return element;
      }}
    </Transition>
  );
});

export default Slide;
