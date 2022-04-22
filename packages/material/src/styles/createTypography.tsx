import { NativeStyleProps, CSSProps } from "@suid/system/sxProps";
import { DeepPartial } from "@suid/types";
import merge from "@suid/utils/merge";

export type ThemeTypographyType = TypographyOptions & {
  pxToRem: (px: number) => string;
};

export type TypographyVariants = {
  h1: CSSProps;
  h2: CSSProps;
  h3: CSSProps;
  h4: CSSProps;
  h5: CSSProps;
  h6: CSSProps;
  subtitle1: CSSProps;
  subtitle2: CSSProps;
  body1: CSSProps;
  body2: CSSProps;
  button: CSSProps;
  caption: CSSProps;
  overline: CSSProps;
};

export type Variant = keyof TypographyVariants;

export type TypographyOptions = {
  fontFamily: string;
  fontSize: number;
  htmlFontSize: number;
  fontWeightLight: number;
  fontWeightRegular: number;
  fontWeightMedium: number;
  fontWeightBold: number;
} & TypographyVariants;

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
  store: Pick<ThemeTypographyType, "pxToRem" | "fontFamily">,
  fontWeight: number,
  size: number,
  lineHeight: number,
  letterSpacing: number,
  casing?: boolean
) {
  return {
    fontFamily: store.fontFamily,
    fontWeight,
    fontSize: store.pxToRem(size),
    lineHeight: `${lineHeight}`,
    letterSpacing: `${round(letterSpacing / size)}em`,
    ...(casing ? { textTransform: "uppercase" } : {}),
  } as NativeStyleProps;
}

export function createTypography(
  options?: DeepPartial<TypographyOptions>
): ThemeTypographyType {
  const result = merge(
    {},
    typographyDefaults,
    {
      pxToRem: (size) => {
        const coef = result.fontSize / 14;
        return `${(size / result.htmlFontSize) * coef}rem`;
      },
    } as ThemeTypographyType,
    options ?? ({} as any)
  ) as ThemeTypographyType;

  const variants = merge(
    {
      h1: makeVariant(result, fontWeight.light, 96, 1.167, -1.5),
      h2: makeVariant(result, fontWeight.light, 60, 1.2, -0.5),
      h3: makeVariant(result, fontWeight.regular, 48, 1.167, 0),
      h4: makeVariant(result, fontWeight.regular, 34, 1.235, 0.25),
      h5: makeVariant(result, fontWeight.regular, 24, 1.334, 0),
      h6: makeVariant(result, fontWeight.medium, 20, 1.6, 0.15),
      subtitle1: makeVariant(result, fontWeight.regular, 16, 1.75, 0.15),
      subtitle2: makeVariant(result, fontWeight.medium, 14, 1.57, 0.1),
      body1: makeVariant(result, fontWeight.regular, 16, 1.5, 0.15),
      body2: makeVariant(result, fontWeight.regular, 14, 1.43, 0.15),
      button: makeVariant(result, fontWeight.medium, 14, 1.75, 0.4, true),
      caption: makeVariant(result, fontWeight.regular, 12, 1.66, 0.4),
      overline: makeVariant(result, fontWeight.regular, 12, 2.66, 1, true),
    },
    {
      h1: typographyDefaults.h1 ?? {},
      h2: typographyDefaults.h2 ?? {},
      h3: typographyDefaults.h3 ?? {},
      h4: typographyDefaults.h4 ?? {},
      h5: typographyDefaults.h5 ?? {},
      h6: typographyDefaults.h6 ?? {},
      subtitle1: typographyDefaults.subtitle1 ?? {},
      subtitle2: typographyDefaults.subtitle2 ?? {},
      body1: typographyDefaults.body1 ?? {},
      body2: typographyDefaults.body2 ?? {},
      button: typographyDefaults.button ?? {},
      caption: typographyDefaults.caption ?? {},
      overline: typographyDefaults.overline ?? {},
    }
  );

  merge(result, variants);

  return result;
}
