export const easing = {
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
};

export const duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  standard: 300,
  complex: 375,
  enteringScreen: 225,
  leavingScreen: 195,
};

export type ThemeTransitionTimeout =
  | number
  | {
      appear?: number | undefined;
      enter?: number | undefined;
      exit?: number | undefined;
    };

export type ThemeTransitionsType = {
  getAutoHeightDuration(value: number): number;
  create(
    props: string | string[],
    options?: {
      easing?: string | ThemeTransitionsType["easing"];
      duration?: string | number;
      delay?: number | string;
    }
  ): string;
  easing: typeof easing;
  duration: typeof duration;
};

function formatMs(milliseconds: number) {
  return `${Math.round(milliseconds)}ms`;
}

function getAutoHeightDuration(height: number) {
  if (!height) {
    return 0;
  }
  const constant = height / 36;
  return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
}

export default function createTransitions(inputTransitions: {
  easing?: ThemeTransitionsType["easing"];
  duration?: ThemeTransitionsType["duration"];
}): ThemeTransitionsType {
  const mergedEasing = {
    ...easing,
    ...inputTransitions.easing,
  };

  const mergedDuration = {
    ...duration,
    ...inputTransitions.duration,
  };

  const create: ThemeTransitionsType["create"] = (
    props = ["all"],
    options = {}
  ) => {
    const {
      duration: durationOption = mergedDuration.standard,
      easing: easingOption = mergedEasing.easeInOut,
      delay = 0,
      ...other
    } = options;

    if (process.env.NODE_ENV !== "production") {
      const isString = (value: unknown) => typeof value === "string";
      // IE11 support, replace with Number.isNaN
      const isNumber = (value: unknown) => !isNaN(parseFloat(value as any));
      if (!isString(props) && !Array.isArray(props)) {
        console.error('MUI: Argument "props" must be a string or Array.');
      }

      if (!isNumber(durationOption) && !isString(durationOption)) {
        console.error(
          `MUI: Argument "duration" must be a number or a string but found ${durationOption}.`
        );
      }

      if (!isString(easingOption)) {
        console.error('MUI: Argument "easing" must be a string.');
      }

      if (!isNumber(delay) && !isString(delay)) {
        console.error('MUI: Argument "delay" must be a number or a string.');
      }

      if (Object.keys(other).length !== 0) {
        console.error(
          `MUI: Unrecognized argument(s) [${Object.keys(other).join(",")}].`
        );
      }
    }

    return (Array.isArray(props) ? props : [props])
      .map(
        (animatedProp) =>
          `${animatedProp} ${
            typeof durationOption === "string"
              ? durationOption
              : formatMs(durationOption as any)
          } ${easingOption} ${
            typeof delay === "string" ? delay : formatMs(delay)
          }`
      )
      .join(",");
  };

  return {
    getAutoHeightDuration,
    create,
    ...inputTransitions,
    easing: mergedEasing,
    duration: mergedDuration,
  };
}
