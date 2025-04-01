import StyledProps from "@suid/system/styledProps";
import { DeepPartial } from "@suid/types";
import merge from "@suid/utils/merge";

export type ThemeTypographyType = TypographyOptions & {
  pxToRem: (px: number) => string;
};

export type TypographyVariants = {
  h1: StyledProps;
  h2: StyledProps;
  h3: StyledProps;
  h4: StyledProps;
  h5: StyledProps;
  h6: StyledProps;
  subtitle1: StyledProps;
  subtitle2: StyledProps;
  body1: StyledProps;
  body2: StyledProps;
  button: StyledProps;
  caption: StyledProps;
  overline: StyledProps;
};

export type Variant = keyof TypographyVariants;

export interface TypographyOptions extends TypographyVariants {
  fontFamily: string;
  fontSize: number;
  htmlFontSize: number;
  fontWeightLight: number;
  fontWeightRegular: number;
  fontWeightMedium: number;
  fontWeightBold: number;
}

const fontWeight = {
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700,
};

export const typographyDefaults = createTypographyOptions({
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontSize: 14,
  htmlFontSize: 16,
  h1: {},
  h2: {},
  h3: {},
  h4: {},
  h5: {},
  h6: {},
  subtitle1: {},
  subtitle2: {},
  body1: {},
  body2: {},
  button: {},
  caption: {},
  overline: {},
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
});

export function createTypographyOptions(options: TypographyOptions) {
  return options;
}
function round(value: number) {
  return Math.round(value * 1e5) / 1e5;
}

export function makeVariant(
  base: Pick<ThemeTypographyType, "pxToRem" | "fontFamily">,
  fontWeight: number,
  size: number,
  lineHeight: number,
  letterSpacing: number,
  casing?: boolean
) {
  return {
    fontFamily: base.fontFamily,
    fontWeight,
    fontSize: base.pxToRem(size),
    lineHeight: `${lineHeight}`,
    letterSpacing: `${round(letterSpacing / size)}em`,
    ...(casing ? { textTransform: "uppercase" } : {}),
  } as StyledProps;
}

export function createTypography(
  options: DeepPartial<TypographyOptions> = {}
): ThemeTypographyType {
  const base: Pick<
    ThemeTypographyType,
    "fontFamily" | "fontSize" | "htmlFontSize" | "pxToRem"
  > = {
    fontFamily: options.fontFamily ?? typographyDefaults.fontFamily,
    fontSize: options.fontSize ?? typographyDefaults.fontSize,
    htmlFontSize: options?.htmlFontSize ?? typographyDefaults.htmlFontSize,
    pxToRem: (size) => {
      const coef = base.fontSize / 14;
      return `${(size / base.htmlFontSize) * coef}rem`;
    },
  };

  return merge(
    typographyDefaults as ThemeTypographyType,
    base as ThemeTypographyType,
    {
      h1: makeVariant(base, fontWeight.light, 96, 1.167, -1.5),
      h2: makeVariant(base, fontWeight.light, 60, 1.2, -0.5),
      h3: makeVariant(base, fontWeight.regular, 48, 1.167, 0),
      h4: makeVariant(base, fontWeight.regular, 34, 1.235, 0.25),
      h5: makeVariant(base, fontWeight.regular, 24, 1.334, 0),
      h6: makeVariant(base, fontWeight.medium, 20, 1.6, 0.15),
      subtitle1: makeVariant(base, fontWeight.regular, 16, 1.75, 0.15),
      subtitle2: makeVariant(base, fontWeight.medium, 14, 1.57, 0.1),
      body1: makeVariant(base, fontWeight.regular, 16, 1.5, 0.15),
      body2: makeVariant(base, fontWeight.regular, 14, 1.43, 0.15),
      button: makeVariant(base, fontWeight.medium, 14, 1.75, 0.4, true),
      caption: makeVariant(base, fontWeight.regular, 12, 1.66, 0.4),
      overline: makeVariant(base, fontWeight.regular, 12, 2.66, 1, true),
    },
    options
  );
}
