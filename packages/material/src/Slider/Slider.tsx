import clsx from "clsx";
import {
  SliderValueLabelUnstyled,
  sliderUnstyledClasses,
  getSliderUtilityClass,
} from "@suid/base/SliderUnstyled";
import SliderUnstyled from "@suid/base/SliderUnstyled";
import { alpha, lighten, darken } from "@suid/system";
import { slotShouldForwardProp } from "../styles/styled";
import styled from "../styles/styled";
import useTheme from "../styles/useTheme";
import shouldSpreadAdditionalProps from "@suid/utils/shouldSpreadAdditionalProps";
import capitalize from "@suid/utils/capitalize";
import createComponentFactory from "@suid/base/createComponentFactory";
import { SliderTypeMap } from ".";
import createRef from "@suid/system/createRef";
import generateUtilityClasses from "@suid/base/generateUtilityClasses";
import { splitProps, mergeProps } from "solid-js";

const $ = createComponentFactory<SliderTypeMap>()({
  name: "MuiSlider",
  selfPropNames: ["color", "classes", "size"],
});

export const sliderClasses = {
  ...sliderUnstyledClasses,
  ...generateUtilityClasses("MuiSlider", [
    "colorPrimary",
    "colorSecondary",
    "thumbColorPrimary",
    "thumbColorSecondary",
    "sizeSmall",
    "thumbSizeSmall",
  ]),
};

const SliderRoot = styled("span", {
  name: "MuiSlider",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    const marks =
      ownerState.marksProp === true && ownerState.step !== null
        ? [
            ...Array(
              Math.floor((ownerState.max - ownerState.min) / ownerState.step) +
                1
            ),
          ].map((_, index) => ({
            value: ownerState.min + ownerState.step * index,
          }))
        : ownerState.marksProp || [];

    const marked = marks.length > 0 && marks.some((mark) => mark.label);

    return [
      styles.root,
      styles[`color${capitalize(ownerState.color)}`],
      ownerState.size !== "medium" &&
        styles[`size${capitalize(ownerState.size)}`],
      marked && styles.marked,
      ownerState.orientation === "vertical" && styles.vertical,
      ownerState.track === "inverted" && styles.trackInverted,
      ownerState.track === false && styles.trackFalse,
    ];
  },
})(({ theme, ownerState }) => ({
  borderRadius: 12,
  boxSizing: "content-box",
  display: "inline-block",
  position: "relative",
  cursor: "pointer",
  touchAction: "none",
  color: theme.palette[ownerState.color].main,
  WebkitTapHighlightColor: "transparent",
  ...(ownerState.orientation === "horizontal" && {
    height: 4,
    width: "100%",
    padding: "13px 0",
    // The primary input mechanism of the device includes a pointing device of limited accuracy.
    "@media (pointer: coarse)": {
      // Reach 42px touch target, about ~8mm on screen.
      padding: "20px 0",
    },
    ...(ownerState.size === "small" && {
      height: 2,
    }),
    ...(ownerState.marked && {
      marginBottom: 20,
    }),
  }),
  ...(ownerState.orientation === "vertical" && {
    height: "100%",
    width: 4,
    padding: "0 13px",
    // The primary input mechanism of the device includes a pointing device of limited accuracy.
    "@media (pointer: coarse)": {
      // Reach 42px touch target, about ~8mm on screen.
      padding: "0 20px",
    },
    ...(ownerState.size === "small" && {
      width: 2,
    }),
    ...(ownerState.marked && {
      marginRight: 44,
    }),
  }),
  "@media print": {
    colorAdjust: "exact",
  },
  [`&.${sliderClasses.disabled}`]: {
    pointerEvents: "none",
    cursor: "default",
    color: theme.palette.grey[400],
  },
  [`&.${sliderClasses.dragging}`]: {
    [`& .${sliderClasses.thumb}, & .${sliderClasses.track}`]: {
      transition: "none",
    },
  },
}));
export { SliderRoot };

const SliderRail = styled("span", {
  name: "MuiSlider",
  slot: "Rail",
  overridesResolver: (props, styles) => styles.rail,
})(({ ownerState }) => ({
  display: "block",
  position: "absolute",
  borderRadius: "inherit",
  backgroundColor: "currentColor",
  opacity: 0.38,
  ...(ownerState.orientation === "horizontal" && {
    width: "100%",
    height: "inherit",
    top: "50%",
    transform: "translateY(-50%)",
  }),
  ...(ownerState.orientation === "vertical" && {
    height: "100%",
    width: "inherit",
    left: "50%",
    transform: "translateX(-50%)",
  }),
  ...(ownerState.track === "inverted" && {
    opacity: 1,
  }),
}));
export { SliderRail };

const SliderTrack = styled("span", {
  name: "MuiSlider",
  slot: "Track",
  overridesResolver: (props, styles) => styles.track,
})(({ theme, ownerState }) => {
  const color = // Same logic as the LinearProgress track color
    theme.palette.mode === "light"
      ? lighten(theme.palette[ownerState.color].main, 0.62)
      : darken(theme.palette[ownerState.color].main, 0.5);
  return {
    display: "block",
    position: "absolute",
    borderRadius: "inherit",
    border: "1px solid currentColor",
    backgroundColor: "currentColor",
    transition: theme.transitions.create(
      ["left", "width", "bottom", "height"],
      {
        duration: theme.transitions.duration.shortest,
      }
    ),
    ...(ownerState.size === "small" && {
      border: "none",
    }),
    ...(ownerState.orientation === "horizontal" && {
      height: "inherit",
      top: "50%",
      transform: "translateY(-50%)",
    }),
    ...(ownerState.orientation === "vertical" && {
      width: "inherit",
      left: "50%",
      transform: "translateX(-50%)",
    }),
    ...(ownerState.track === false && {
      display: "none",
    }),
    ...(ownerState.track === "inverted" && {
      backgroundColor: color,
      borderColor: color,
    }),
  };
});
export { SliderTrack };

const SliderThumb = styled("span", {
  name: "MuiSlider",
  slot: "Thumb",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;
    return [
      styles.thumb,
      styles[`thumbColor${capitalize(ownerState.color)}`],
      ownerState.size !== "medium" &&
        styles[`thumbSize${capitalize(ownerState.size)}`],
    ];
  },
})(({ theme, ownerState }) => ({
  position: "absolute",
  width: 20,
  height: 20,
  boxSizing: "border-box",
  borderRadius: "50%",
  outline: 0,
  backgroundColor: "currentColor",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: theme.transitions.create(["box-shadow", "left", "bottom"], {
    duration: theme.transitions.duration.shortest,
  }),
  ...(ownerState.size === "small" && {
    width: 12,
    height: 12,
  }),
  ...(ownerState.orientation === "horizontal" && {
    top: "50%",
    transform: "translate(-50%, -50%)",
  }),
  ...(ownerState.orientation === "vertical" && {
    left: "50%",
    transform: "translate(-50%, 50%)",
  }),
  "&:before": {
    position: "absolute",
    content: '""',
    borderRadius: "inherit",
    width: "100%",
    height: "100%",
    boxShadow: theme.shadows[2],
    ...(ownerState.size === "small" && {
      boxShadow: "none",
    }),
  },
  "&::after": {
    position: "absolute",
    content: '""',
    borderRadius: "50%",
    // 42px is the hit target
    width: 42,
    height: 42,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  [`&:hover, &.${sliderClasses.focusVisible}`]: {
    boxShadow: `0px 0px 0px 8px ${alpha(
      theme.palette[ownerState.color].main,
      0.16
    )}`,
    "@media (hover: none)": {
      boxShadow: "none",
    },
  },
  [`&.${sliderClasses.active}`]: {
    boxShadow: `0px 0px 0px 14px ${alpha(
      theme.palette[ownerState.color].main,
      0.16
    )}`,
  },
  [`&.${sliderClasses.disabled}`]: {
    "&:hover": {
      boxShadow: "none",
    },
  },
}));
export { SliderThumb };

const SliderValueLabel = styled(SliderValueLabelUnstyled, {
  name: "MuiSlider",
  slot: "ValueLabel",
  overridesResolver: (props, styles) => styles.valueLabel,
})(({ theme, ownerState }) => ({
  [`&.${sliderClasses.valueLabelOpen}`]: {
    transform: "translateY(-100%) scale(1)",
  },
  zIndex: 1,
  whiteSpace: "nowrap",
  ...theme.typography.body2,
  fontWeight: 500,
  transition: theme.transitions.create(["transform"], {
    duration: theme.transitions.duration.shortest,
  }),
  top: -10,
  transformOrigin: "bottom center",
  transform: "translateY(-100%) scale(0)",
  position: "absolute",
  backgroundColor: theme.palette.grey[600],
  borderRadius: 2,
  color: theme.palette.common.white,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0.25rem 0.75rem",
  ...(ownerState.size === "small" && {
    fontSize: theme.typography.pxToRem(12),
    padding: "0.25rem 0.5rem",
  }),
  "&:before": {
    position: "absolute",
    content: '""',
    width: 8,
    height: 8,
    bottom: 0,
    left: "50%",
    transform: "translate(-50%, 50%) rotate(45deg)",
    backgroundColor: "inherit",
  },
}));
export { SliderValueLabel };

const SliderMark = styled("span", {
  name: "MuiSlider",
  slot: "Mark",
  shouldForwardProp: (prop) =>
    slotShouldForwardProp(prop) && prop !== "markActive",
  overridesResolver: (props, styles) => styles.mark,
})(({ theme, ownerState, markActive }) => ({
  position: "absolute",
  width: 2,
  height: 2,
  borderRadius: 1,
  backgroundColor: "currentColor",
  ...(ownerState.orientation === "horizontal" && {
    top: "50%",
    transform: "translate(-1px, -50%)",
  }),
  ...(ownerState.orientation === "vertical" && {
    left: "50%",
    transform: "translate(-50%, 1px)",
  }),
  ...(markActive && {
    backgroundColor: theme.palette.background.paper,
    opacity: 0.8,
  }),
}));
export { SliderMark };

const SliderMarkLabel = styled("span", {
  name: "MuiSlider",
  slot: "MarkLabel",
  shouldForwardProp: (prop) =>
    slotShouldForwardProp(prop) && prop !== "markLabelActive",
  overridesResolver: (props, styles) => styles.markLabel,
})(({ theme, ownerState, markLabelActive }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  position: "absolute",
  whiteSpace: "nowrap",
  ...(ownerState.orientation === "horizontal" && {
    top: 30,
    transform: "translateX(-50%)",
    "@media (pointer: coarse)": {
      top: 40,
    },
  }),
  ...(ownerState.orientation === "vertical" && {
    left: 36,
    transform: "translateY(50%)",
    "@media (pointer: coarse)": {
      left: 44,
    },
  }),
  ...(markLabelActive && {
    color: theme.palette.text.primary,
  }),
}));
export { SliderMarkLabel };

const extendUtilityClasses = (ownerState) => {
  const { color, size, classes = {} } = ownerState;

  return {
    ...classes,
    root: clsx(
      classes.root,
      getSliderUtilityClass(`color${capitalize(color)}`),
      classes[`color${capitalize(color)}`],
      size && getSliderUtilityClass(`size${capitalize(size)}`),
      size && classes[`size${capitalize(size)}`]
    ),
    thumb: clsx(
      classes.thumb,
      getSliderUtilityClass(`thumbColor${capitalize(color)}`),
      classes[`thumbColor${capitalize(color)}`],
      size && getSliderUtilityClass(`thumbSize${capitalize(size)}`),
      size && classes[`thumbSize${capitalize(size)}`]
    ),
  };
};

/**
 *
 * Demos:
 *
 * - [Slider](https://mui.com/components/slider/)
 *
 * API:
 *
 * - [Slider API](https://mui.com/api/slider/)
 * - inherits [SliderUnstyled API](https://mui.com/api/slider-unstyled/)
 */
const Slider = $.defineComponent(function Slider(inputProps) {
  const ref = createRef(inputProps);
  const props = $.useThemeProps({ props: inputProps });

  const theme = useTheme();
  const isRtl = theme.direction === "rtl";

  const [, other] = splitProps(props, [
    "component",
    "components",
    "componentsProps",
    "color",
    "size",
  ]);

  const baseProps = mergeProps(
    {
      component: "span",
      components: {},
      componentsProps: {},
      color: "primary",
      size: "medium",
    },
    props
  );

  const ownerState = mergeProps(props, {
    get color() {
      return baseProps.color;
    },
    get size() {
      return baseProps.size;
    },
  });

  const classes = extendUtilityClasses(ownerState);

  return (
    <SliderUnstyled
      {...other}
      isRtl={isRtl}
      components={mergeProps(
        {
          Root: SliderRoot,
          Rail: SliderRail,
          Track: SliderTrack,
          Thumb: SliderThumb,
          ValueLabel: SliderValueLabel,
          Mark: SliderMark,
          MarkLabel: SliderMarkLabel,
        },
        () => baseProps.components
      )}
      componentsProps={mergeProps(() => baseProps.componentsProps, {
        get root() {
          return mergeProps(
            () => baseProps.componentsProps.root,
            () =>
              shouldSpreadAdditionalProps(baseProps.components.Root) && {
                as: baseProps.component,
                ownerState: {
                  ...baseProps.componentsProps.root?.ownerState,
                  color: baseProps.color,
                  size: baseProps.size,
                },
              }
          );
        },
        get thumb() {
          return mergeProps(
            () => baseProps.componentsProps.thumb,
            () =>
              shouldSpreadAdditionalProps(baseProps.components.Thumb) && {
                ownerState: {
                  ...baseProps.componentsProps.thumb?.ownerState,
                  color: baseProps.color,
                  size: baseProps.size,
                },
              }
          );
        },
        get track() {
          return mergeProps(
            () => baseProps.componentsProps.track,
            () =>
              shouldSpreadAdditionalProps(baseProps.components.Track) && {
                ownerState: {
                  ...baseProps.componentsProps.track?.ownerState,
                  color: baseProps.color,
                  size: baseProps.size,
                },
              }
          );
        },
        get valueLabel() {
          return mergeProps(
            () => baseProps.componentsProps.valueLabel,
            () =>
              shouldSpreadAdditionalProps(baseProps.components.ValueLabel) && {
                ownerState: {
                  ...baseProps.componentsProps.valueLabel?.ownerState,
                  color: baseProps.color,
                  size: baseProps.size,
                },
              }
          );
        },
      })}
      classes={classes}
      ref={ref}
    />
  );
});

export default Slider;
