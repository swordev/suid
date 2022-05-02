import { GrowTypeMap } from ".";
import useTheme from "../styles/useTheme";
import { reflow, getTransitionProps } from "../transitions/utils";
import Transition, { TransitionStatus } from "@suid/base/Transition";
import createComponentFactory from "@suid/base/createComponentFactory";
import { NativeStyleProps } from "@suid/system/sxProps";
import { children, onCleanup } from "solid-js";

const $ = createComponentFactory<GrowTypeMap>()({
  name: "MuiGrow",
  propDefaults: ({ set }) =>
    set({
      appear: true,
      timeout: "auto",
    }),
  selfPropNames: ["appear", "children", "easing", "in", "ref", "timeout"],
});

function getScale(value: number) {
  return `scale(${value}, ${value ** 2})`;
}

const styles: { [name in TransitionStatus]?: NativeStyleProps } = {
  entering: {
    opacity: 1,
    transform: getScale(1),
  },
  entered: {
    opacity: 1,
    transform: "none",
  },
};

/**
 * The Grow transition is used by the [Tooltip](/components/tooltips/) and
 * [Popover](/components/popover/) components.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */
const Grow = $.component(function Grow({ props, otherProps }) {
  const autoTimeout = { current: undefined as undefined | number };
  const theme = useTheme();
  const resolved = children(() => props.children) as () => HTMLElement;

  let timer: ReturnType<typeof globalThis.setTimeout> | undefined;
  onCleanup(() => timer && clearTimeout(timer));

  return (
    <Transition
      {...otherProps}
      appear={props.appear}
      in={props.in}
      onEnter={() => {
        const node = resolved();
        reflow(node); // So the animation always start from the start.

        const {
          duration: transitionDuration,
          delay,
          easing: transitionTimingFunction,
        } = getTransitionProps(
          {
            style: otherProps.style,
            timeout: props.timeout,
            easing: props.easing,
          },
          {
            mode: "enter",
          }
        );

        let duration: string | number;
        if (props.timeout === "auto") {
          duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
          autoTimeout.current = duration;
        } else {
          duration = transitionDuration;
        }

        node.style.transition = [
          theme.transitions.create("opacity", {
            duration,
            delay,
          }),
          theme.transitions.create("transform", {
            duration: Number(duration) * 0.666,
            delay,
            easing: transitionTimingFunction,
          }),
        ].join(",");

        otherProps.onEnter?.();
      }}
      onExit={() => {
        const node = resolved();
        const {
          duration: transitionDuration,
          delay,
          easing: transitionTimingFunction,
        } = getTransitionProps(
          {
            style: otherProps.style,
            timeout: props.timeout,
            easing: props.easing,
          },
          {
            mode: "exit",
          }
        );

        let duration: string | number;
        if (props.timeout === "auto") {
          duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
          autoTimeout.current = duration;
        } else {
          duration = transitionDuration;
        }

        node.style.transition = [
          theme.transitions.create("opacity", {
            duration,
            delay,
          }),
          theme.transitions.create("transform", {
            duration: Number(duration) * 0.666,
            delay: delay || Number(duration) * 0.333,
            easing: transitionTimingFunction,
          }),
        ].join(",");

        node.style.opacity = "0";
        node.style.transform = getScale(0.75);

        otherProps.onExit?.();
      }}
      addEndListener={(next) => {
        if (props.timeout === "auto") {
          timer = setTimeout(next, autoTimeout.current || 0);
        }
        if (otherProps.addEndListener) {
          otherProps.addEndListener(next);
        }
      }}
      timeout={props.timeout === "auto" ? undefined : props.timeout}
    >
      {(state) => {
        const element = resolved();
        element.style.opacity = "0";
        element.style.transform = getScale(0.75);

        if (state === "exited" && !props.in) {
          element.style.visibility = "hidden";
        } else {
          element.style.removeProperty("visibility");
        }

        const style: NativeStyleProps = {
          ...(styles[state] || {}),
          ...(otherProps.style || {}),
        };

        for (const name in style) {
          const value = style[name as keyof NativeStyleProps] as any;
          if (value === undefined) {
            element.style.removeProperty(name);
          } else {
            element.style[name as any] = value;
          }
        }

        return element;
      }}
    </Transition>
  );
});

export default Grow;
