import SwitchBase from "../internal/SwitchBase";
import styled from "../styles/styled";
import capitalize from "../utils/capitalize";
import { SwitchTypeMap } from "./SwitchProps";
import switchClasses, { getSwitchUtilityClass } from "./switchClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import { alpha, darken, lighten } from "@suid/system";
import clsx from "clsx";
import { mergeProps, splitProps } from "solid-js";

const $ = createComponentFactory<SwitchTypeMap>()({
  name: "MuiSwitch",
  selfPropNames: [
    "checkedIcon",
    "classes",
    "color",
    "disabled",
    "icon",
    "size",
    "value",
  ],
  propDefaults: ({ set }) =>
    set({
      color: "primary",
      size: "medium",
    }),
  utilityClass: getSwitchUtilityClass,
  slotClasses: (ownerState) => ({
    root: [
      "root",
      !!ownerState.edge && `edge${capitalize(ownerState.edge)}`,
      `size${capitalize(ownerState.size)}`,
    ],
    switchBase: [
      "switchBase",
      `color${capitalize(ownerState.color)}`,
      !!ownerState.checked && "checked",
      !!ownerState.disabled && "disabled",
    ],
    thumb: ["thumb"],
    track: ["track"],
    input: ["input"],
  }),
});

const SwitchRoot = styled("span", {
  name: "MuiSwitch",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      styles.root,
      ownerState.edge && styles[`edge${capitalize(ownerState.edge)}`],
      styles[`size${capitalize(ownerState.size)}`],
    ];
  },
})(({ ownerState }) => ({
  display: "inline-flex",
  width: 34 + 12 * 2,
  height: 14 + 12 * 2,
  overflow: "hidden",
  padding: 12,
  boxSizing: "border-box",
  position: "relative",
  flexShrink: 0,
  zIndex: 0, // Reset the stacking context.
  verticalAlign: "middle", // For correct alignment with the text.
  "@media print": {
    colorAdjust: "exact",
  },
  ...(ownerState.edge === "start" && {
    marginLeft: -8,
  }),
  ...(ownerState.edge === "end" && {
    marginRight: -8,
  }),
  ...(ownerState.size === "small" && {
    width: 40,
    height: 24,
    padding: 7,
    [`& .${switchClasses.thumb}`]: {
      width: 16,
      height: 16,
    },
    [`& .${switchClasses.switchBase}`]: {
      padding: 4,
      [`&.${switchClasses.checked}`]: {
        transform: "translateX(16px)",
      },
    },
  }),
}));

const SwitchSwitchBase = styled(SwitchBase, {
  name: "MuiSwitch",
  slot: "SwitchBase",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      styles.switchBase,
      { [`& .${switchClasses.input}`]: styles.input },
      ownerState.color !== "default" &&
        styles[`color${capitalize(ownerState.color)}`],
    ];
  },
})(
  ({ theme }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1, // Render above the focus ripple.
    color:
      theme.palette.mode === "light"
        ? theme.palette.common.white
        : theme.palette.grey[300],
    transition: theme.transitions.create(["left", "transform"], {
      duration: theme.transitions.duration.shortest,
    }),
    [`&.${switchClasses.checked}`]: {
      transform: "translateX(20px)",
    },
    [`&.${switchClasses.disabled}`]: {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    [`&.${switchClasses.checked} + .${switchClasses.track}`]: {
      opacity: 0.5,
    },
    [`&.${switchClasses.disabled} + .${switchClasses.track}`]: {
      opacity: theme.palette.mode === "light" ? 0.12 : 0.2,
    },
    [`& .${switchClasses.input}`]: {
      left: "-100%",
      width: "300%",
    },
  }),
  ({ theme, ownerState }) => ({
    "&:hover": {
      backgroundColor: alpha(
        theme.palette.action.active,
        theme.palette.action.hoverOpacity
      ),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent",
      },
    },
    ...(ownerState.color !== "default" && {
      [`&.${switchClasses.checked}`]: {
        color: theme.palette[ownerState.color].main,
        "&:hover": {
          backgroundColor: alpha(
            theme.palette[ownerState.color].main,
            theme.palette.action.hoverOpacity
          ),
          "@media (hover: none)": {
            backgroundColor: "transparent",
          },
        },
        [`&.${switchClasses.disabled}`]: {
          color:
            theme.palette.mode === "light"
              ? lighten(theme.palette[ownerState.color].main, 0.62)
              : darken(theme.palette[ownerState.color].main, 0.55),
        },
      },
      [`&.${switchClasses.checked} + .${switchClasses.track}`]: {
        backgroundColor: theme.palette[ownerState.color].main,
      },
    }),
  })
);

const SwitchTrack = styled("span", {
  name: "MuiSwitch",
  slot: "Track",
  overridesResolver: (props, styles) => styles.track,
})(({ theme }) => ({
  height: "100%",
  width: "100%",
  borderRadius: 14 / 2,
  zIndex: -1,
  transition: theme.transitions.create(["opacity", "background-color"], {
    duration: theme.transitions.duration.shortest,
  }),
  backgroundColor:
    theme.palette.mode === "light"
      ? theme.palette.common.black
      : theme.palette.common.white,
  opacity: theme.palette.mode === "light" ? 0.38 : 0.3,
}));

const SwitchThumb = styled("span", {
  name: "MuiSwitch",
  slot: "Thumb",
  overridesResolver: (props, styles) => styles.thumb,
})(({ theme }) => ({
  boxShadow: theme.shadows[1],
  backgroundColor: "currentColor",
  width: 20,
  height: 20,
  borderRadius: "50%",
}));

/**
 *
 * Demos:
 *
 * - [Switches](https://mui.com/components/switches/)
 * - [Transfer List](https://mui.com/components/transfer-list/)
 *
 * API:
 *
 * - [Switch API](https://mui.com/api/switch/)
 * - inherits [IconButton API](https://mui.com/api/icon-button/)
 */
const Switch = $.component(function Switch({
  allProps,
  props,
  classes,
  otherProps,
}) {
  const icon = () => (
    <SwitchThumb class={classes.thumb} ownerState={allProps} />
  );
  const allClasses = mergeProps(classes, {
    get root() {
      return classes.switchBase;
    },
  });

  const [, otherPropsWithoutSx] = splitProps(otherProps, ["sx"]);

  const baseProps = mergeProps(otherPropsWithoutSx, {
    get checkedIcon() {
      return props.checkedIcon || icon;
    },
    get disabled() {
      return props.disabled;
    },
    get icon() {
      return props.icon || icon;
    },
    get value() {
      return props.value;
    },
  });

  return (
    <SwitchRoot
      class={clsx(classes.root, otherProps.class)}
      sx={otherProps.sx}
      ownerState={allProps}
    >
      <SwitchSwitchBase
        type="checkbox"
        ownerState={allProps}
        {...baseProps}
        classes={allClasses}
      />
      <SwitchTrack class={classes.track} ownerState={allProps} />
    </SwitchRoot>
  );
});

export default Switch;
