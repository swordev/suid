import useTheme from "../styles/useTheme";
import { getTransitionProps } from "../transitions/utils";
import { reflow } from "./../transitions/utils";
import { FadeTypeMap } from "./FadeProps";
import Transition, { resolveTransitionTimeout } from "@suid/base/Transition";
import { TransitionContext } from "@suid/base/Transition/TransitionContext";
import createComponentFactory from "@suid/base/createComponentFactory";
import createElementRef from "@suid/system/createElementRef";
import { children, createMemo, useContext } from "solid-js";

const $ = createComponentFactory<FadeTypeMap>()({
  name: "MuiFader",
  selfPropNames: ["appear", "children", "easing", "in", "timeout"],
  propDefaults: ({ set }) => {
    const theme = useTheme();
    return set({
      appear: true,
      timeout: {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
      },
    });
  },
});

export const fadeSelfPropNames = $.selfPropNames;

/**
 * The Fade transition is used by the [Modal](https://mui.com/components/modal/) component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 *
 * Demos:
 *
 * - [Transitions](https://mui.com/components/transitions/)
 *
 * API:
 *
 * - [Fade API](https://mui.com/api/fade/)
 * - inherits [Transition API](http://reactcommunity.org/react-transition-group/transition/#Transition-props)
 */
const Fade = $.component(function Fade({ props, otherProps }) {
  const theme = useTheme();
  const element = createElementRef(props);
  const timeout = createMemo(() => resolveTransitionTimeout(props.timeout));
  const c = children(() => props.children) as () => HTMLElement;
  const context = useContext(TransitionContext);

  return (
    <Transition
      in={props.in ?? context?.in}
      appear={props.appear}
      timeout={props.timeout}
      {...otherProps}
      ref={element}
      onEnter={() => {
        const e = c();
        reflow(e);
        const transitionProps = getTransitionProps(
          { style: otherProps.style, timeout: timeout(), easing: props.easing },
          {
            mode: "enter",
          }
        );
        e.style.transition = theme.transitions.create(
          "opacity",
          transitionProps
        );

        otherProps.onEnter?.();
        context?.onEnter?.();
      }}
      onExit={() => {
        const e = c();
        const transitionProps = getTransitionProps(
          {
            style: otherProps.style,
            timeout: timeout(),
            easing: props.easing,
          },
          {
            mode: "enter",
          }
        );
        e.style.transition = theme.transitions.create(
          "opacity",
          transitionProps
        );
        otherProps.onExit?.();
      }}
      onExited={() => {
        otherProps.onExited?.();
        context?.onExited?.();
      }}
    >
      {(state) => {
        const element = c();
        if (state === "exited" && !props.in) {
          element.style.visibility = "hidden";
        } else {
          element.style.removeProperty("visibility");
        }
        if (state === "entering" || state === "entered") {
          element.style.opacity = "1";
        } else {
          element.style.opacity = "0";
        }
        return element;
      }}
    </Transition>
  );
});

export default Fade;
