import { CircularProgressTypeMap } from ".";
import styled from "../styles/styled";
import capitalize from "../utils/capitalize";
import { getCircularProgressUtilityClass } from "./circularProgressClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import SxProps from "@suid/system/sxProps";
import { ComponentProps } from "@suid/types";
import { randomString } from "@suid/utils/crypto";
import clsx from "clsx";
import { createMemo } from "solid-js";

const $ = createComponentFactory<CircularProgressTypeMap>()({
  name: "MuiCircularProgress",
  propDefaults: ({ set }) =>
    set({
      color: "primary",
      disableShrink: false,
      size: 40,
      thickness: 3.6,
      value: 0,
      variant: "indeterminate",
    }),
  selfPropNames: [
    "classes",
    "color",
    "disableShrink",
    "size",
    "thickness",
    "value",
    "variant",
  ],
  utilityClass: getCircularProgressUtilityClass,
  slotClasses: (ownerState) => ({
    root: ["root", ownerState.variant, `color${capitalize(ownerState.color)}`],
    svg: ["svg"],
    circle: [
      "circle",
      `circle${capitalize(ownerState.variant)}`,
      ownerState.disableShrink && "circleDisableShrink",
    ],
  }),
});

const SIZE = 44;
// [review] keyframe must have a static name
const animationId = randomString();

const CircularProgressRoot = styled("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      styles.root,
      styles[ownerState.variant],
      styles[`color${capitalize(ownerState.color)}`],
    ];
  },
})(
  ({ ownerState, theme }) => ({
    display: "inline-block",
    ...(ownerState.variant === "determinate" && {
      transition: theme.transitions.create("transform"),
    }),
    ...(ownerState.color !== "inherit" && {
      color: theme.palette[ownerState.color].main,
    }),
  }),
  ({ ownerState }) =>
    ownerState.variant === "indeterminate" && {
      [`@keyframes circular-rotate-${animationId}`]: {
        0: {
          transform: "rotate(0deg)",
        },
        100: {
          transform: "rotate(360deg)",
        },
      },
      animation: `circular-rotate-${animationId} 1.4s linear infinite`,
    }
);

const CircularProgressSVG = styled("svg", {
  name: "MuiCircularProgress",
  slot: "Svg",
  overridesResolver: (props, styles) => styles.svg,
})({
  display: "block", // Keeps the progress centered
});

const CircularProgressCircle = styled("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      styles.circle,
      styles[`circle${capitalize(ownerState.variant)}`],
      ownerState.disableShrink && styles.circleDisableShrink,
    ];
  },
})(
  ({ ownerState, theme }) => ({
    stroke: "currentColor",
    // Use butt to follow the specification, by chance, it's already the default CSS value.
    // strokeLinecap: 'butt',
    ...(ownerState.variant === "determinate" && {
      transition: theme.transitions.create("stroke-dashoffset"),
    }),
    ...(ownerState.variant === "indeterminate" && {
      // Some default value that looks fine waiting for the animation to kicks in.
      strokeDasharray: "80px, 200px",
      strokeDashoffset: 0, // Add the unit to fix a Edge 16 and below bug.
    }),
  }),
  ({ ownerState }) =>
    ownerState.variant === "indeterminate" &&
    !ownerState.disableShrink && {
      [`@keyframes circular-dash-${animationId}`]: {
        0: {
          strokeDasharray: "1px, 200px",
          strokeDashoffset: 0,
        },
        50: {
          strokeDasharray: "100px, 200px",
          strokeDashoffset: "-15px",
        },
        100: {
          strokeDasharray: "100px, 200px",
          strokeDashoffset: "-125px",
        },
      },
      animation: `circular-dash-${animationId} 1.4s ease-in-out infinite`,
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
 * - [CircularProgress API](https://mui.com/api/circular-progress/)
 */
const CircularProgress = $.component(function CircularProgress({
  allProps,
  classes,
  otherProps,
  props,
}) {
  const circleStyle = createMemo(() => {
    if (props.variant !== "determinate") return {};
    const circumference = 2 * Math.PI * ((SIZE - props.thickness) / 2);
    return {
      strokeDasharray: circumference.toFixed(3),
      strokeDashoffset: `${(
        ((100 - props.value) / 100) *
        circumference
      ).toFixed(3)}px`,
    } as SxProps;
  });
  const rootStyle = createMemo(() => {
    if (props.variant !== "determinate") return {};
    return {
      transform: "rotate(-90deg)",
    } as SxProps;
  });
  const rootProps = createMemo(() => {
    if (props.variant !== "determinate") return {};
    return {
      "aria-valuenow": Math.round(props.value),
    } as ComponentProps<CircularProgressTypeMap>;
  });

  return (
    <CircularProgressRoot
      className={clsx(classes.root, otherProps.className)}
      sx={{
        width: props.size,
        height: props.size,
        ...rootStyle(),
      }}
      ownerState={allProps}
      role="progressbar"
      {...rootProps()}
      {...otherProps}
    >
      <CircularProgressSVG
        className={classes.svg}
        ownerState={allProps}
        viewBox={`${SIZE / 2} ${SIZE / 2} ${SIZE} ${SIZE}`}
      >
        <CircularProgressCircle
          className={classes.circle}
          sx={circleStyle()}
          ownerState={allProps}
          cx={SIZE}
          cy={SIZE}
          r={(SIZE - props.thickness) / 2}
          fill="none"
          stroke-width={props.thickness}
        />
      </CircularProgressSVG>
    </CircularProgressRoot>
  );
});

export default CircularProgress;
