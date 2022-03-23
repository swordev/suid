import { SkeletonTypeMap } from ".";
import { getUnit, toUnitless } from "../styles/cssUtils";
import styled from "../styles/styled";
import { getSkeletonUtilityClass } from "./skeletonClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import { alpha } from "@suid/system/colorManipulator";
import { ComponentInProps } from "@suid/types";
import clsx from "clsx";
import { createMemo, mergeProps } from "solid-js";

type OwnerState = ComponentInProps<SkeletonTypeMap> & {
  hasChildren: boolean;
};

const $ = createComponentFactory<SkeletonTypeMap, OwnerState>()({
  name: "MuiSkeleton",
  selfPropNames: [
    "animation",
    "children",
    "classes",
    "height",
    "variant",
    "width",
  ],
  propDefaults: ({ set }) =>
    set({
      animation: "pulse",
      component: "span",
      variant: "text",
    }),
  utilityClass: getSkeletonUtilityClass,
  slotClasses: (ownerState) => ({
    root: [
      "root",
      ownerState.variant,
      ownerState.animation,
      ownerState.hasChildren && "withChildren",
      ownerState.hasChildren && !ownerState.width && "fitContent",
      ownerState.hasChildren && !ownerState.height && "heightAuto",
    ],
  }),
});

const SkeletonRoot = styled("span", {
  name: "MuiSkeleton",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      styles.root,
      styles[ownerState.variant],
      ownerState.animation !== false && styles[ownerState.animation],
      ownerState.hasChildren && styles.withChildren,
      ownerState.hasChildren && !ownerState.width && styles.fitContent,
      ownerState.hasChildren && !ownerState.height && styles.heightAuto,
    ];
  },
})<OwnerState>(
  ({ theme, ownerState }) => {
    const radiusUnit = getUnit(theme.shape.borderRadius) || "px";
    const radiusValue = toUnitless(theme.shape.borderRadius);

    return {
      display: "block",
      // Create a "on paper" color with sufficient contrast retaining the color
      backgroundColor: alpha(
        theme.palette.text.primary,
        theme.palette.mode === "light" ? 0.11 : 0.13
      ),
      height: "1.2em",
      ...(ownerState.variant === "text" && {
        marginTop: 0,
        marginBottom: 0,
        height: "auto",
        transformOrigin: "0 55%",
        transform: "scale(1, 0.60)",
        borderRadius: `${radiusValue}${radiusUnit}/${
          Math.round((radiusValue / 0.6) * 10) / 10
        }${radiusUnit}`,
        "&:empty:before": {
          content: '"\\00a0"',
        },
      }),
      ...(ownerState.variant === "circular" && {
        borderRadius: "50%",
      }),
      ...(ownerState.hasChildren && {
        "& > *": {
          visibility: "hidden",
        },
      }),
      ...(ownerState.hasChildren &&
        !ownerState.width && {
          maxWidth: "fit-content",
        }),
      ...(ownerState.hasChildren &&
        !ownerState.height && {
          height: "auto",
        }),
    };
  },
  ({ ownerState }) =>
    ownerState.animation === "pulse" && {
      "@keyframes pulse-animation-$id": {
        0: {
          opacity: 1,
        },
        50: {
          opacity: 0.4,
        },

        100: {
          opacity: 1,
        },
      },
      animation: "pulse-animation-$id 1.5s ease-in-out 0.5s infinite",
    },
  ({ ownerState, theme }) =>
    ownerState.animation === "wave" && {
      position: "relative",
      overflow: "hidden",
      "@keyframes wave-animation-$id": {
        0: {
          transform: "translateX(-100%)",
        },
        50: {
          // +0.5s of delay between each loop
          transform: "translateX(100%)",
        },
        100: {
          transform: "translateX(100%)",
        },
      },
      // Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196
      "-webkit-mask-image": "-webkit-radial-gradient(white, black);",
      "&::after": {
        animation: "wave-animation-$id 1.6s linear 0.5s infinite",
        background: `linear-gradient(90deg, transparent, ${theme.palette.action.hover}, transparent)`,
        content: "",
        position: "absolute",
        // Avoid flash during server-side hydration
        transform: "translateX(-100%)",
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
      },
    }
);

/**
 *
 * Demos:
 *
 * - [Skeleton](https://mui.com/components/skeleton/)
 *
 * API:
 *
 * - [Skeleton API](https://mui.com/api/skeleton/)
 */

const Skeleton = $.component(function Skeleton({
  allProps,
  classes,
  otherProps,
  props,
}) {
  const hasChildren = createMemo(() =>
    typeof props.children === "undefined"
      ? false
      : Array.isArray(props.children)
      ? !!props.children.length
      : true
  );

  const ownerState = mergeProps(allProps, () => ({
    hasChildren: hasChildren(),
  }));

  return (
    <SkeletonRoot
      {...otherProps}
      className={clsx(classes.root, otherProps.className)}
      ownerState={ownerState}
      sx={{
        width: props.width,
        height: props.height,
        ...(otherProps.sx || {}),
      }}
    />
  );
});

export default Skeleton;
