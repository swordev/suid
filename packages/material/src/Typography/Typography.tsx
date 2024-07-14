import { useTheme } from "../styles";
import { Variant } from "../styles/createTypography";
import styled from "../styles/styled";
import capitalize from "../utils/capitalize";
import { TypographyTypeMap } from "./TypographyProps";
import { getTypographyUtilityClass } from "./typographyClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import { splitSxProps } from "@suid/system/styleFunctionSx/extendSxProp";
import { ElementType, InPropsOf } from "@suid/types";
import clsx from "clsx";
import { mergeProps, splitProps } from "solid-js";

type OwnerState = Pick<
  InPropsOf<TypographyTypeMap>,
  | "classes"
  | "color"
  | "variant"
  | "align"
  | "noWrap"
  | "gutterBottom"
  | "paragraph"
>;

const $ = createComponentFactory<TypographyTypeMap, OwnerState>()({
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
})<OwnerState>(({ theme, ownerState }) => ({
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
  const theme = useTheme();
  const themeProps = theme.components?.[$.name]?.defaultProps;
  const color = () =>
    transformDeprecatedColors(inProps.color ?? themeProps?.color)!;
  const [sx, props] = splitSxProps(
    mergeProps(
      {
        align: "inherit" as const,
        variant: "body1" as const,
        variantMapping: defaultVariantMapping,
      },
      themeProps,
      inProps,
      {
        get color() {
          return color();
        },
      }
    )
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

  const ownerState: OwnerState = {
    get classes() {
      return props.classes;
    },
    get align() {
      return props.align;
    },
    get color() {
      return color();
    },
    get gutterBottom() {
      return props.gutterBottom || false;
    },
    get noWrap() {
      return props.noWrap || false;
    },
    get paragraph() {
      return props.paragraph || false;
    },
    get variant() {
      return props.variant;
    },
  };

  const Component = (): ElementType =>
    props.component ||
    (props.paragraph
      ? "p"
      : (props.variantMapping[props.variant] as ElementType) ||
        defaultVariantMapping[props.variant]) ||
    "span";

  const classes = $.useClasses(ownerState);

  return (
    <TypographyRoot
      as={Component()}
      sx={sx()}
      ownerState={ownerState}
      class={clsx(classes.root, props.class)}
      {...other}
    />
  );
});
export default Typography;
