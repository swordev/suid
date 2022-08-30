import { LinkTypeMap } from ".";
import Typography from "../Typography";
import styled from "../styles/styled";
import capitalize from "../utils/capitalize";
import linkClasses, { getLinkUtilityClass } from "./linkClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import { alpha } from "@suid/system";
import getThemeValue from "@suid/system/getThemeValue";
import { InPropsOf } from "@suid/types";
import useIsFocusVisible from "@suid/utils/useIsFocusVisible";
import clsx from "clsx";
import { createSignal, mergeProps } from "solid-js";

type OwnerState = InPropsOf<LinkTypeMap> & {
  focusVisible: boolean;
};

const $ = createComponentFactory<LinkTypeMap, OwnerState>()({
  name: "MuiLink",
  autoCallUseClasses: false,
  selfPropNames: [
    "TypographyClasses",
    "children",
    "classes",
    "color",
    "underline",
    "variant",
  ],
  propDefaults: ({ set }) =>
    set({
      color: "primary",
      component: "a",
      underline: "always",
      variant: "inherit",
    }),
  utilityClass: getLinkUtilityClass,
  slotClasses: (ownerState) => ({
    root: [
      "root",
      `underline${capitalize(ownerState.underline)}`,
      ownerState.component === "button" && "button",
      ownerState.focusVisible && "focusVisible",
    ],
  }),
});

const colorTransformations = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main",
};

const transformDeprecatedColors = (
  color: keyof typeof colorTransformations
) => {
  return colorTransformations[color] || color;
};

const LinkRoot = styled(Typography, {
  name: "MuiLink",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      styles.root,
      styles[`underline${capitalize(ownerState.underline)}`],
      ownerState.component === "button" && styles.button,
    ];
  },
})(({ theme, ownerState }) => {
  const color =
    getThemeValue(
      theme,
      "palette",
      transformDeprecatedColors(ownerState.color as any)
    ) || ownerState.color;
  return {
    ...(ownerState.underline === "none" && {
      textDecoration: "none",
    }),
    ...(ownerState.underline === "hover" && {
      textDecoration: "none",
      "&:hover": {
        textDecoration: "underline",
      },
    }),
    ...(ownerState.underline === "always" && {
      textDecoration: "underline",
      textDecorationColor: color !== "inherit" ? alpha(color, 0.4) : undefined,
      "&:hover": {
        textDecorationColor: "inherit",
      },
    }),
    // Same reset as ButtonBase.root
    ...(ownerState.component === "button" && {
      position: "relative",
      WebkitTapHighlightColor: "transparent",
      backgroundColor: "transparent", // Reset default value
      // We disable the focus ring for mouse, touch and keyboard users.
      outline: 0,
      border: 0,
      margin: 0, // Remove the margin in Safari
      borderRadius: 0,
      padding: 0, // Remove the padding in Firefox
      cursor: "pointer",
      userSelect: "none",
      verticalAlign: "middle",
      MozAppearance: "none", // Reset
      WebkitAppearance: "none", // Reset
      "&::-moz-focus-inner": {
        borderStyle: "none", // Remove Firefox dotted outline.
      },
      [`&.${linkClasses.focusVisible}`]: {
        outline: "auto",
      },
    }),
  };
});

/**
 *
 * Demos:
 *
 * - [Breadcrumbs](https://mui.com/components/breadcrumbs/)
 * - [Links](https://mui.com/components/links/)
 *
 * API:
 *
 * - [Link API](https://mui.com/api/link/)
 * - inherits [Typography API](https://mui.com/api/typography/)
 */
const Link = $.component(function Link({ allProps, otherProps, props }) {
  const visible = useIsFocusVisible();
  const [focusVisible, setFocusVisible] = createSignal(false);
  const ownerState = mergeProps(allProps, {
    get focusVisible() {
      return focusVisible();
    },
  });
  const classes = $.useClasses(ownerState);

  return (
    <LinkRoot<"a">
      class={clsx(classes.root, otherProps.class)}
      classes={props.TypographyClasses}
      color={props.color}
      onBlur={(event) => {
        visible.onBlur(event);
        if (visible.isFocusVisibleRef.current === false) {
          setFocusVisible(false);
        }
        if (typeof otherProps.onBlur === "function") {
          otherProps.onBlur(event);
        }
      }}
      onFocus={(event) => {
        visible.onFocus(event);
        if (visible.isFocusVisibleRef.current === true) {
          setFocusVisible(true);
        }
        if (typeof otherProps.onFocus === "function") {
          otherProps.onFocus(event);
        }
      }}
      ownerState={allProps}
      variant={props.variant}
      {...otherProps}
      component={otherProps.component as "a"}
    >
      {props.children}
    </LinkRoot>
  );
});

export default Link;
