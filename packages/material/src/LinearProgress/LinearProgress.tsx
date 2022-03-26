import { Theme } from "../styles";
import { PaletteColorName } from "../styles/createPalette";
import styled from "../styles/styled";
import useTheme from "../styles/useTheme";
import capitalize from "../utils/capitalize";
import { LinearProgressTypeMap } from "./LinearProgressProps";
import { getLinearProgressUtilityClass } from "./linearProgressClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import { darken, lighten } from "@suid/system/colorManipulator";
import createElementRef from "@suid/system/createElementRef";
import { ComponentInProps } from "@suid/types";
import { randomString } from "@suid/utils/crypto";
import clsx from "clsx";
import { createEffect, createSignal, JSX, Show } from "solid-js";

const $ = createComponentFactory<LinearProgressTypeMap>()({
  name: "MuiLinearProgress",
  propDefaults: ({ set }) =>
    set({
      color: "primary",
      variant: "indeterminate",
    }),
  selfPropNames: ["classes", "color", "value", "valueBuffer", "variant"],
  utilityClass: getLinearProgressUtilityClass,
  slotClasses: (ownerState) => ({
    root: ["root", `color${capitalize(ownerState.color)}`, ownerState.variant],
    dashed: ["dashed", `dashedColor${capitalize(ownerState.color)}`],
    bar1: [
      "bar",
      `barColor${capitalize(ownerState.color)}`,
      (ownerState.variant === "indeterminate" ||
        ownerState.variant === "query") &&
        "bar1Indeterminate",
      ownerState.variant === "determinate" && "bar1Determinate",
      ownerState.variant === "buffer" && "bar1Buffer",
    ],
    bar2: [
      "bar",
      ownerState.variant !== "buffer" &&
        `barColor${capitalize(ownerState.color)}`,
      ownerState.variant === "buffer" && `color${capitalize(ownerState.color)}`,
      (ownerState.variant === "indeterminate" ||
        ownerState.variant === "query") &&
        "bar2Indeterminate",
      ownerState.variant === "buffer" && "bar2Buffer",
    ],
  }),
});

const TRANSITION_DURATION = 4; // seconds
const animationId = randomString();

const getColorShade = (theme: Theme, color: PaletteColorName | "inherit") => {
  if (color === "inherit") {
    return "currentColor";
  }
  return theme.palette.mode === "light"
    ? lighten(theme.palette[color].main, 0.62)
    : darken(theme.palette[color].main, 0.5);
};

const LinearProgressRoot = styled("span", {
  name: "MuiLinearProgress",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      styles.root,
      styles[`color${capitalize(ownerState.color)}`],
      styles[ownerState.variant],
    ];
  },
})<ComponentInProps<LinearProgressTypeMap>>(({ ownerState, theme }) => ({
  position: "relative",
  overflow: "hidden",
  display: "block",
  height: 4,
  zIndex: 0, // Fix Safari's bug during composition of different paint.
  "@media print": {
    colorAdjust: "exact",
  },
  backgroundColor: getColorShade(theme, ownerState.color),
  ...(ownerState.color === "inherit" &&
    ownerState.variant !== "buffer" && {
      backgroundColor: "none",
      "&::before": {
        content: '""',
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "currentColor",
        opacity: 0.3,
      },
    }),
  ...(ownerState.variant === "buffer" && { backgroundColor: "transparent" }),
  ...(ownerState.variant === "query" && { transform: "rotate(180deg)" }),
}));

const LinearProgressDashed = styled("span", {
  name: "MuiLinearProgress",
  slot: "Dashed",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      styles.dashed,
      styles[`dashedColor${capitalize(ownerState.color)}`],
    ];
  },
})<ComponentInProps<LinearProgressTypeMap>>(
  ({ ownerState, theme }) => {
    const backgroundColor = getColorShade(theme, ownerState.color);

    return {
      position: "absolute",
      marginTop: 0,
      height: "100%",
      width: "100%",
      ...(ownerState.color === "inherit" && {
        opacity: 0.3,
      }),
      backgroundImage: `radial-gradient(${backgroundColor} 0%, ${backgroundColor} 16%, transparent 42%)`,
      backgroundSize: "10px 10px",
      backgroundPosition: "0 -23px",
    };
  },
  {
    [`@keyframes buffer-${animationId}`]: {
      0: {
        opacity: 1,
        backgroundPosition: "0 -23px",
      },

      60: {
        opacity: 0,
        backgroundPosition: "0 -23px",
      },

      100: {
        opacity: 1,
        backgroundPosition: "-200px -23px",
      },
    },
    animation: `buffer-${animationId} 3s infinite linear`,
  }
);

const LinearProgressBar1 = styled("span", {
  name: "MuiLinearProgress",
  slot: "Bar1",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      styles.bar,
      styles[`barColor${capitalize(ownerState.color)}`],
      (ownerState.variant === "indeterminate" ||
        ownerState.variant === "query") &&
        styles.bar1Indeterminate,
      ownerState.variant === "determinate" && styles.bar1Determinate,
      ownerState.variant === "buffer" && styles.bar1Buffer,
    ];
  },
})<ComponentInProps<LinearProgressTypeMap>>(
  ({ ownerState, theme }) => ({
    width: "100%",
    position: "absolute",
    left: 0,
    bottom: 0,
    top: 0,
    transition: "transform 0.2s linear",
    transformOrigin: "left",
    backgroundColor:
      ownerState.color === "inherit"
        ? "currentColor"
        : theme.palette[ownerState.color].main,
    ...(ownerState.variant === "determinate" && {
      transition: `transform .${TRANSITION_DURATION}s linear`,
    }),
    ...(ownerState.variant === "buffer" && {
      zIndex: 1,
      transition: `transform .${TRANSITION_DURATION}s linear`,
    }),
  }),
  ({ ownerState }) =>
    (ownerState.variant === "indeterminate" ||
      ownerState.variant === "query") && {
      [`@keyframes indeterminate1-${animationId}`]: {
        0: {
          left: "-35%",
          right: "100%",
        },

        60: {
          left: "100%",
          right: "-90%",
        },

        100: {
          left: "100%",
          right: "-90%",
        },
      },
      width: "auto",
      animation: `indeterminate1-${animationId} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`,
    }
);

const LinearProgressBar2 = styled("span", {
  name: "MuiLinearProgress",
  slot: "Bar2",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      styles.bar,
      styles[`barColor${capitalize(ownerState.color)}`],
      (ownerState.variant === "indeterminate" ||
        ownerState.variant === "query") &&
        styles.bar2Indeterminate,
      ownerState.variant === "buffer" && styles.bar2Buffer,
    ];
  },
})<ComponentInProps<LinearProgressTypeMap>>(
  ({ ownerState, theme }) => ({
    width: "100%",
    position: "absolute",
    left: 0,
    bottom: 0,
    top: 0,
    transition: "transform 0.2s linear",
    transformOrigin: "left",
    ...(ownerState.variant !== "buffer" && {
      backgroundColor:
        ownerState.color === "inherit"
          ? "currentColor"
          : theme.palette[ownerState.color].main,
    }),
    ...(ownerState.color === "inherit" && {
      opacity: 0.3,
    }),
    ...(ownerState.variant === "buffer" && {
      backgroundColor: getColorShade(theme, ownerState.color),
      transition: `transform .${TRANSITION_DURATION}s linear`,
    }),
  }),
  ({ ownerState }) =>
    (ownerState.variant === "indeterminate" ||
      ownerState.variant === "query") && {
      [`@keyframes indeterminate2-${animationId}`]: {
        0: {
          left: "-200%",
          right: "100%",
        },
        60: {
          left: "107%",
          right: "-8%",
        },
        100: {
          left: "107%",
          right: "-8%",
        },
      },
      width: "auto",
      animation: `indeterminate2-${animationId} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`,
    }
);

/**
 * ## ARIA
 *
 * If the progress bar is describing the loading progress of a particular region of a page,
 * you should use `aria-describedby` to point to the progress bar, and set the `aria-busy`
 * attribute to `true` on that region until it has finished loading.
 *
 * Demos:
 *
 * - [Progress](https://mui.com/components/progress/)
 *
 * API:
 *
 * - [LinearProgress API](https://mui.com/api/linear-progress/)
 */
const LinearProgress = $.component(function LinearProgress({
  allProps,
  classes,
  otherProps,
  props,
}) {
  const theme = useTheme();
  const element = createElementRef<HTMLDivElement>(otherProps);
  const [bar1Style, setBar1Style] = createSignal<JSX.CSSProperties>({});
  const [bar2Style, setBar2Style] = createSignal<JSX.CSSProperties>({});

  createEffect(() => {
    if (props.variant === "determinate" || props.variant === "buffer") {
      if (props.value !== undefined) {
        element.ref.ariaValueNow = Math.round(props.value).toString();
        element.ref.ariaValueMin = "0";
        element.ref.ariaValueMax = "100";
        let transform = props.value - 100;
        if (theme.direction === "rtl") {
          transform = -transform;
        }
        setBar1Style({ transform: `translateX(${transform}%)` });
      } else if (process.env.NODE_ENV !== "production") {
        console.error(
          "MUI: You need to provide a value prop " +
            "when using the determinate or buffer variant of LinearProgress ."
        );
      }
    }
  });

  createEffect(() => {
    if (props.variant === "buffer") {
      if (props.valueBuffer !== undefined) {
        let transform = (props.valueBuffer || 0) - 100;
        if (theme.direction === "rtl") {
          transform = -transform;
        }
        setBar2Style({ transform: `translateX(${transform}%)` });
      } else if (process.env.NODE_ENV !== "production") {
        console.error(
          "MUI: You need to provide a valueBuffer prop " +
            "when using the buffer variant of LinearProgress."
        );
      }
    }
  });

  return (
    <LinearProgressRoot
      role="progressbar"
      {...otherProps}
      ref={element}
      className={clsx(classes.root, otherProps.className)}
      ownerState={allProps}
    >
      <Show when={props.variant === "buffer"}>
        <LinearProgressDashed
          className={classes.dashed}
          ownerState={allProps}
        />
      </Show>
      <LinearProgressBar1
        className={classes.bar1}
        ownerState={allProps}
        style={bar1Style()}
      />
      <Show when={props.variant !== "determinate"}>
        <LinearProgressBar2
          className={classes.bar2}
          ownerState={allProps}
          style={bar2Style()}
        />
      </Show>
    </LinearProgressRoot>
  );
});

export default LinearProgress;
