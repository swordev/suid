import styled from "../styles/styled";
import { DividerTypeMap } from "./DividerProps";
import { getDividerUtilityClass } from "./dividerClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import { alpha } from "@suid/system";
import clsx from "clsx";
import { Show } from "solid-js";

const $ = createComponentFactory<DividerTypeMap>()({
  name: "MuiDivider",
  selfPropNames: [
    "absolute",
    "children",
    "classes",
    "flexItem",
    "light",
    "orientation",
    "textAlign",
    "variant",
  ],
  propDefaults: ({ set, inProps }) =>
    set({
      absolute: false,
      get component() {
        return inProps.children ? "div" : "hr";
      },
      flexItem: false,
      light: false,
      orientation: "horizontal",
      get role() {
        return inProps.component !== "hr" ? "separator" : undefined;
      },
      textAlign: "center",
      variant: "fullWidth",
    }),
  utilityClass: getDividerUtilityClass,
  slotClasses: (o) => ({
    root: [
      "root",
      o.absolute && "absolute",
      o.variant,
      o.light && "light",
      o.orientation === "vertical" && "vertical",
      o.flexItem && "flexItem",
      !!o.children && "withChildren",
      !!o.children && o.orientation === "vertical" && "withChildrenVertical",
      o.textAlign === "right" &&
        o.orientation !== "vertical" &&
        "textAlignRight",
      o.textAlign === "left" && o.orientation !== "vertical" && "textAlignLeft",
    ],
    wrapper: ["wrapper", o.orientation === "vertical" && "wrapperVertical"],
  }),
});

const DividerRoot = styled("div", {
  name: "MuiDivider",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      styles.root,
      ownerState.absolute && styles.absolute,
      styles[ownerState.variant],
      ownerState.light && styles.light,
      ownerState.orientation === "vertical" && styles.vertical,
      ownerState.flexItem && styles.flexItem,
      ownerState.children && styles.withChildren,
      ownerState.children &&
        ownerState.orientation === "vertical" &&
        styles.withChildrenVertical,
      ownerState.textAlign === "right" &&
        ownerState.orientation !== "vertical" &&
        styles.textAlignRight,
      ownerState.textAlign === "left" &&
        ownerState.orientation !== "vertical" &&
        styles.textAlignLeft,
    ];
  },
})(
  ({ theme, ownerState }) => ({
    margin: 0, // Reset browser default style.
    flexShrink: 0,
    borderWidth: 0,
    borderStyle: "solid",
    borderColor: theme.palette.divider,
    borderBottomWidth: "thin",
    ...(ownerState.absolute && {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
    }),
    ...(ownerState.light && {
      borderColor: alpha(theme.palette.divider, 0.08),
    }),
    ...(ownerState.variant === "inset" && {
      marginLeft: 72,
    }),
    ...(ownerState.variant === "middle" &&
      ownerState.orientation === "horizontal" && {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
      }),
    ...(ownerState.variant === "middle" &&
      ownerState.orientation === "vertical" && {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
      }),
    ...(ownerState.orientation === "vertical" && {
      height: "100%",
      borderBottomWidth: 0,
      borderRightWidth: "thin",
    }),
    ...(ownerState.flexItem && {
      alignSelf: "stretch",
      height: "auto",
    }),
  }),
  ({ theme, ownerState }) => ({
    ...(ownerState.children && {
      display: "flex",
      whiteSpace: "nowrap",
      textAlign: "center",
      border: 0,
      "&::before, &::after": {
        position: "relative",
        width: "100%",
        borderTop: `thin solid ${theme.palette.divider}`,
        top: "50%",
        content: '""',
        transform: "translateY(50%)",
      },
    }),
  }),
  ({ theme, ownerState }) => ({
    ...(ownerState.children &&
      ownerState.orientation === "vertical" && {
        flexDirection: "column",
        "&::before, &::after": {
          height: "100%",
          top: "0%",
          left: "50%",
          borderTop: 0,
          borderLeft: `thin solid ${theme.palette.divider}`,
          transform: "translateX(0%)",
        },
      }),
  }),
  ({ ownerState }) => ({
    ...(ownerState.textAlign === "right" &&
      ownerState.orientation !== "vertical" && {
        "&::before": {
          width: "90%",
        },
        "&::after": {
          width: "10%",
        },
      }),
    ...(ownerState.textAlign === "left" &&
      ownerState.orientation !== "vertical" && {
        "&::before": {
          width: "10%",
        },
        "&::after": {
          width: "90%",
        },
      }),
  })
);

const DividerWrapper = styled("span", {
  name: "MuiDivider",
  slot: "Wrapper",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      styles.wrapper,
      ownerState.orientation === "vertical" && styles.wrapperVertical,
    ];
  },
})(({ theme, ownerState }) => ({
  display: "inline-block",
  paddingLeft: `calc(${theme.spacing(1)} * 1.2)`,
  paddingRight: `calc(${theme.spacing(1)} * 1.2)`,
  ...(ownerState.orientation === "vertical" && {
    paddingTop: `calc(${theme.spacing(1)} * 1.2)`,
    paddingBottom: `calc(${theme.spacing(1)} * 1.2)`,
  }),
}));

/**
 *
 * Demos:
 *
 * - [Dividers](https://mui.com/components/dividers/)
 * - [Lists](https://mui.com/components/lists/)
 *
 * API:
 *
 * - [Divider API](https://mui.com/api/divider/)
 */

const Divider = $.component(function Divider({
  allProps,
  otherProps,
  classes,
}) {
  return (
    <DividerRoot
      role={allProps.role}
      {...otherProps}
      ownerState={allProps}
      class={clsx(classes.root, allProps.class)}
    >
      <Show when={allProps.children}>
        <DividerWrapper class={classes.wrapper} ownerState={allProps}>
          {allProps.children}
        </DividerWrapper>
      </Show>
    </DividerRoot>
  );
});

export default Divider;
