import StyleProps from "@suid/system/styleProps";

export const reflow = (node: Element) => node.scrollTop;

interface ComponentProps {
  easing: string | { enter?: string; exit?: string } | undefined;
  style:
    | Pick<
        StyleProps,
        "transitionDuration" | "transitionTimingFunction" | "transitionDelay"
      >
    | undefined;
  timeout: number | "auto" | { enter?: number; exit?: number };
}

interface Options {
  mode: "enter" | "exit";
}

interface TransitionProps {
  duration: string | number;
  easing: string | undefined;
  delay: string | undefined;
}

export function getTransitionProps(
  props: ComponentProps,
  options: Options
): TransitionProps {
  const { timeout, easing, style = {} } = props;

  return {
    duration:
      style.transitionDuration ??
      (typeof timeout === "number"
        ? timeout
        : typeof timeout === "string"
          ? 0
          : timeout[options.mode] || 0),
    easing:
      style.transitionTimingFunction ??
      (typeof easing === "object" ? easing[options.mode] : easing),
    delay: style.transitionDelay,
  };
}
