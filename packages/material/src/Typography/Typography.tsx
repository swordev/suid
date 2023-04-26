import { TypographyTypeMap } from ".";
import { Variant } from "../styles/createTypography";
import styled from "../styles/styled";
import capitalize from "../utils/capitalize";
import { getTypographyUtilityClass } from "./typographyClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import extendSxProp from "@suid/system/styleFunctionSx/extendSxProp";
import clsx from "clsx";
import { mergeProps, splitProps } from "solid-js";

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
})(({ theme, ownerState }) => ({
  margin: 0,
  color: ownerState.color,
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
}));

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
const colorTransformations: Record<string, string> = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main",
};

const transformDeprecatedColors = (
  color: string | undefined
): string | undefined => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return colorTransformations[color!] || color;
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
const Typography = $.defineComponent(function Typography(inProps) {
  const themeProps = $.useThemeProps({ props: inProps });

  const color = () => transformDeprecatedColors(themeProps.color);

  const props = extendSxProp(
    mergeProps(themeProps, {
      get color() {
        return color();
      },
    })
  );
  const [, other] = splitProps(props, [
    "align",
    "class",
    "component",
    "gutterBottom",
    "noWrap",
    "paragraph",
    "variant",
    "variantMapping",
  ]);

  const baseProps = mergeProps(
    {
      align: "inherit",
      gutterBottom: false,
      noWrap: false,
      paragraph: false,
      variant: "body1",
      variantMapping: defaultVariantMapping,
    },
    props
  );

  const ownerState: typeof props = mergeProps(props, {
    get align() {
      return baseProps.align;
    },
    get color() {
      return color();
    },
    get class() {
      return props.class;
    },
    get component() {
      return props.component;
    },
    get gutterBottom() {
      return baseProps.gutterBottom;
    },
    get noWrap() {
      return baseProps.noWrap;
    },
    get paragraph() {
      return baseProps.paragraph;
    },
    get variant() {
      return baseProps.variant;
    },
    get variantMapping() {
      return baseProps.variantMapping;
    },
  });

  const Component = () =>
    props.component ||
    (baseProps.paragraph
      ? "p"
      : baseProps.variantMapping[baseProps.variant] ||
        defaultVariantMapping[baseProps.variant]) ||
    "span";

  const classes = $.useClasses(ownerState);

  return (
    <TypographyRoot
      as={Component()}
      ownerState={ownerState}
      class={clsx(classes.root, props.class)}
      {...other}
    />
  );
});
export default Typography;
