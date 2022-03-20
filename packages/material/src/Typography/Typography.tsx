import { TypographyTypeMap } from ".";
import { Variant } from "../styles/createTypography";
import styled from "../styles/styled";
import capitalize from "../utils/capitalize";
import { getTypographyUtilityClass } from "./typographyClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import getThemeValue from "@suid/system/getThemeValue";
import clsx from "clsx";
import { createMemo } from "solid-js";

const $ = createComponentFactory<TypographyTypeMap>()({
  name: "MuiTypography",
  selfPropNames: [
    "align",
    "children",
    "classes",
    "gutterBottom",
    "noWrap",
    "paragraph",
    "variant",
    "variantMapping",
  ],
  propDefaults: ({ set }) =>
    set({
      align: "inherit",
      gutterBottom: false,
      noWrap: false,
      paragraph: false,
      variant: "body1",
      variantMapping: {},
    }),
  utilityClass: getTypographyUtilityClass,
  slotClasses: (ownerState) => ({
    root: [
      "root",
      ownerState.variant,
      ownerState.align !== "inherit" && `align${capitalize(ownerState.align)}`,
      ownerState.gutterBottom && "gutterBottom",
      ownerState.noWrap && "noWrap",
      ownerState.paragraph && "paragraph",
    ],
  }),
});

export const TypographyRoot = styled("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      styles.root,
      ownerState.variant && styles[ownerState.variant],
      ownerState.align !== "inherit" &&
        styles[`align${capitalize(ownerState.align)}`],
      ownerState.noWrap && styles.noWrap,
      ownerState.gutterBottom && styles.gutterBottom,
      ownerState.paragraph && styles.paragraph,
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
    margin: 0,
    color,
    ...(ownerState.variant && theme.typography[ownerState.variant as Variant]),
    ...(ownerState.align !== "inherit" && {
      textAlign: ownerState.align,
    }),
    ...(ownerState.noWrap && {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    }),
    ...(ownerState.gutterBottom && {
      marginBottom: "0.35em",
    }),
    ...(ownerState.paragraph && {
      marginBottom: 16,
    }),
  };
});

const defaultVariantMapping: Record<Variant | "inherit", string> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p",
} as any;

// TODO v6: deprecate these color values in v5.x and remove the transformation in v6
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

/**
 *
 * Demos:
 *
 * - [Breadcrumbs](https://mui.com/components/breadcrumbs/)
 * - [Typography](https://mui.com/components/typography/)
 *
 * API:
 *
 * - [Typography API](https://mui.com/api/typography/)
 */
const Typography = $.component(function Typography({
  allProps,
  classes,
  otherProps,
  props,
}) {
  const Component = createMemo(
    () =>
      otherProps.component ||
      (props.paragraph
        ? "p"
        : props.variantMapping[props.variant] ||
          defaultVariantMapping[props.variant]) ||
      "span"
  );

  return (
    <TypographyRoot
      {...otherProps}
      component={Component()}
      ownerState={allProps}
      className={clsx(classes.root, otherProps.className)}
    >
      {props.children}
    </TypographyRoot>
  );
});

export default Typography;
