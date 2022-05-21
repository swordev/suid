import { Theme } from "./createTheme";
import getThemeValue from "./getThemeValue";
import { StyledPropsBase } from "./styledProps";

const dirMap = {
  x: ["Left", "Right"],
  y: ["Top", "Bottom"],
};

type OnValue = (name: string, value: any, theme: Theme) => any;

type PropReturn<V> = (
  value: Exclude<V, undefined>,
  theme: Theme
) => Record<string, any>;

function asPx(value: unknown) {
  return typeof value === "number" ? `${value}px` : value;
}

function customProp<V>(name: string, onValue: OnValue): PropReturn<V> {
  return (value, theme) => onValue(name, value, theme);
}

function prop<N extends keyof StyledPropsBase>(
  name: N,
  onValue?: OnValue
): PropReturn<StyledPropsBase[N]> {
  return onValue
    ? (value, theme) => ({
        [name]: onValue(name, value, theme),
      })
    : (value) => ({ [name]: value });
}

function pxProp<N extends keyof StyledPropsBase>(name: N) {
  return prop(name, (name, value) => asPx(value));
}

function mProp<V>(name: string, suffix: string[], onValue?: OnValue) {
  const names = suffix.map((v) => `${name}${v}`);
  return onValue
    ? (value: V, theme: Theme) =>
        names.reduce((result, name) => {
          result[name] = onValue(name, value, theme);
          return result;
        }, {} as Record<string, any>)
    : (value: V) =>
        names.reduce((result, name) => {
          result[name] = value;
          return result;
        }, {} as Record<string, any>);
}

function createSystemProps() {
  return {
    ...createSystemPositionProps(),
    ...createSystemPaletteProps(),
    ...createSystemSizingProps(),
    ...createSystemBorderProps(),
    ...createSystemSpacingProps(),
    ...createSystemTypographyProps(),
  };
}

export function createSystemPositionProps() {
  return {
    position: prop("position"),
    zIndex: prop(
      "zIndex",
      (name, value, theme) => theme.zIndex?.[name] ?? value
    ),
    top: pxProp("top"),
    right: pxProp("right"),
    bottom: pxProp("bottom"),
    left: pxProp("left"),
  };
}

export function createSystemPaletteProps() {
  const paletteValue: OnValue = (name, value, theme) =>
    getThemeValue(theme, "palette", value);
  return {
    color: prop("color", paletteValue),
    bgcolor: prop("backgroundColor", paletteValue),
    backgroundColor: prop("backgroundColor", paletteValue),
  };
}

export function createSystemSizingProps() {
  const onValue: OnValue = (name, value, theme) => {
    if (name === "maxWidth") {
      value = theme.breakpoints.values[name as "xs"] ?? value;
    }
    if (typeof value === "number") {
      value = value > 0 && value <= 1 ? `${value * 100}%` : `${value}px`;
    }
    return value;
  };
  return {
    width: prop("width", onValue),
    maxWidth: prop("maxWidth", onValue),
    minWidth: prop("minWidth", onValue),
    height: prop("height", onValue),
    maxHeight: prop("maxHeight", onValue),
    minHeight: prop("minHeight", onValue),
    boxSizing: prop("boxSizing", onValue),
  };
}

export function createSystemBorderProps() {
  const borderValue: OnValue = (name, value) =>
    typeof value === "number" ? `${value}px solid` : value;
  const paletteValue: OnValue = (name, value, theme) =>
    getThemeValue(theme, "palette", value);
  return {
    border: prop("border", borderValue),
    borderTop: prop("borderTop", borderValue),
    borderRight: prop("borderRight", borderValue),
    borderBottom: prop("borderBottom", borderValue),
    borderLeft: prop("borderLeft", borderValue),
    borderColor: prop("borderColor", paletteValue),
    borderTopColor: prop("borderTopColor", paletteValue),
    borderRightColor: prop("borderRightColor", paletteValue),
    borderBottomColor: prop("borderBottomColor", paletteValue),
    borderLeftColor: prop("borderLeftColor", paletteValue),
    borderRadius: prop("borderRadius", (name, value, theme) =>
      typeof value === "number"
        ? `${theme.shape.borderRadius * value}px`
        : value
    ),
  };
}

export function createSystemTypographyProps() {
  const typographyValue: OnValue = (name, value, theme) =>
    getThemeValue(theme, "typography", value);

  return {
    typography: customProp<string>("typography", (name, value, theme) =>
      getThemeValue(theme, "typography", value)
    ),
    fontFamily: prop("fontFamily", typographyValue),
    fontSize: prop("fontSize", (name, value, theme) =>
      asPx(typographyValue(name, value, theme))
    ),
    fontStyle: prop("fontStyle", typographyValue),
    fontWeight: prop("fontWeight", typographyValue),
    letterSpacing: pxProp("letterSpacing"),
    lineHeight: prop("lineHeight"),
    textAlign: prop("textAlign"),
    textTransform: prop("textTransform"),
  };
}

export function createSystemSpacingProps() {
  const spacing: OnValue = (name, value, theme) => theme.spacing(value);
  const m = "margin";
  const p = "padding";
  return {
    m: prop(m, spacing),
    mt: prop("marginTop", spacing),
    mr: prop("marginRight", spacing),
    mb: prop("marginBottom", spacing),
    ml: prop("marginLeft", spacing),
    mx: mProp(m, dirMap["x"], spacing),
    my: mProp(m, dirMap["y"], spacing),
    margin: prop(m, spacing),
    marginTop: prop("marginTop", spacing),
    marginRight: prop("marginRight", spacing),
    marginBottom: prop("marginBottom", spacing),
    marginLeft: prop("marginLeft", spacing),
    marginX: mProp(m, dirMap["x"], spacing),
    marginY: mProp(m, dirMap["y"], spacing),
    marginInline: mProp(m, ["Inline", "InlineStart"], spacing),
    marginInlineStart: prop("marginInlineStart", spacing),
    marginInlineEnd: prop("marginInlineEnd", spacing),
    marginBlock: mProp(m, ["BlockStart", "BlockEnd"], spacing),
    marginBlockStart: prop("marginBlockStart", spacing),
    marginBlockEnd: prop("marginBlockEnd", spacing),
    p: prop(p, spacing),
    pt: prop("paddingTop", spacing),
    pr: prop("paddingRight", spacing),
    pb: prop("paddingBottom", spacing),
    pl: prop("paddingLeft", spacing),
    px: mProp(p, dirMap["x"], spacing),
    py: mProp(p, dirMap["y"], spacing),
    padding: prop(p, spacing),
    paddingTop: prop("paddingTop", spacing),
    paddingRight: prop("paddingRight", spacing),
    paddingBottom: prop("paddingBottom", spacing),
    paddingLeft: prop("paddingLeft", spacing),
    paddingX: mProp(p, dirMap["x"], spacing),
    paddingY: mProp(p, dirMap["y"], spacing),
    paddingInline: mProp(p, ["Inline", "InlineStart"], spacing),
    paddingInlineStart: prop("paddingInlineStart", spacing),
    paddingInlineEnd: prop("paddingInlineEnd", spacing),
    paddingBlock: mProp(p, ["BlockStart", "BlockEnd"], spacing),
    paddingBlockStart: prop("paddingBlockStart", spacing),
    paddingBlockEnd: prop("paddingBlockEnd", spacing),
  };
}

export default createSystemProps;
