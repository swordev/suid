import { Theme } from "./createTheme";

const dirMap = {
  t: ["Top"],
  r: ["Right"],
  b: ["Bottom"],
  l: ["Left"],
  x: ["Left", "Right"],
  y: ["Top", "Bottom"],
};

type StylePropsConfig = ReturnType<typeof createStylePropsFactory>;

export type StyleProps = {
  [K in keyof StylePropsConfig]?: Parameters<StylePropsConfig[K]>[0];
};

export type PropsOptions = {
  onValue?: (name: string, value: any, theme: Theme) => any;
};

export type Dir = keyof typeof dirMap;

function numberProp(
  name: string,
  suffix: string[],
  options: PropsOptions = {},
  valueSuffix?: string
) {
  const names = suffix.length ? suffix.map((v) => `${name}${v}`) : [name];
  return (value: string | number, theme: Theme) => {
    return names.reduce((result, name) => {
      value = options.onValue ? options.onValue(name, value, theme) : value;
      if (typeof value === "number")
        value = valueSuffix ? `${value}${valueSuffix}` : value;
      result[name] = value;
      return result;
    }, {} as Record<string, any>);
  };
}

function pxProp(name: string, suffix: string[], options: PropsOptions = {}) {
  return numberProp(name, suffix, options, "px");
}

function prop<V>(name: string, options: PropsOptions = {}) {
  return (value: V, theme: Theme) => {
    return {
      [name]: options.onValue ? options.onValue(name, value, theme) : value,
    } as Record<string, any>;
  };
}

export function createStylePropsFactory(
  options: {
    position?: PropsOptions;
    palette?: PropsOptions;
    sizing?: PropsOptions;
    border?: PropsOptions;
    spacing?: PropsOptions;
    typography?: PropsOptions;
  } = {}
) {
  return {
    ...createStylePositionProps(options.position),
    ...createStylePaletteProps(options.palette),
    ...createStyleSizingProps(options.sizing),
    ...createStyleBorderProps(options.border),
    ...createStyleSpacingProps(options.spacing),
    ...createStyleTypographyProps(options.typography),
  };
}

export function createStylePositionProps(options: PropsOptions = {}) {
  return {
    zIndex: numberProp("zIndex", [], options),
    top: pxProp("top", [], options),
    right: pxProp("right", [], options),
    bottom: pxProp("bottom", [], options),
    left: pxProp("left", [], options),
  };
}

export function createStylePaletteProps(options: PropsOptions = {}) {
  return {
    color: prop<string>("color", options),
    bgcolor: prop<string>("backgroundColor", options),
    backgroundColor: prop<string>("backgroundColor", options),
  };
}

export function createStyleSizingProps(options: PropsOptions = {}) {
  return {
    width: pxProp("width", [], options),
    maxWidth: pxProp("maxWidth", [], options),
    minWidth: pxProp("minWidth", [], options),
    height: pxProp("height", [], options),
    maxHeight: pxProp("maxHeight", [], options),
    minHeight: pxProp("minHeight", [], options),
    boxSizing: pxProp("boxSizing", [], options),
  };
}

export function createStyleBorderProps(options: PropsOptions = {}) {
  const b = "border";
  return {
    border: pxProp(b, [], options),
    borderTop: pxProp(b, dirMap["t"], options),
    borderRight: pxProp(b, dirMap["r"], options),
    borderBottom: pxProp(b, dirMap["b"], options),
    borderLeft: pxProp(b, dirMap["l"], options),
    borderColor: prop<string>("borderColor", options),
    borderTopColor: prop<string>("borderTopColor", options),
    borderRightColor: prop<string>("borderRightColor", options),
    borderBottomColor: prop<string>("borderBottomColor", options),
    borderLeftColor: prop<string>("borderLeftColor", options),
    borderRadius: pxProp(b, ["Radius"], options),
  };
}

export function createStyleTypographyProps(options: PropsOptions = {}) {
  return {
    typography: prop<string>("typography", options),
    fontFamily: prop<string>("fontFamily", options),
    fontSize: pxProp("fontSize", [], options),
    fontStyle: prop<string>("fontStyle", options),
    fontWeight: prop<string | number>("fontWeight", options),
    letterSpacing: pxProp("letterSpacing", [], options),
    lineHeight: prop<number | string>("lineHeight", options),
    textAlign: prop<string>("textAlign", options),
    textTransform: prop<string>("textTransform", options),
  };
}

export function createStyleSpacingProps(options: PropsOptions = {}) {
  const m = "margin";
  const p = "padding";
  return {
    m: pxProp(m, [], options),
    mt: pxProp(m, dirMap["t"], options),
    mr: pxProp(m, dirMap["r"], options),
    mb: pxProp(m, dirMap["b"], options),
    ml: pxProp(m, dirMap["l"], options),
    mx: pxProp(m, dirMap["x"], options),
    my: pxProp(m, dirMap["y"], options),
    margin: pxProp(m, [], options),
    marginTop: pxProp(m, dirMap["t"], options),
    marginRight: pxProp(m, dirMap["r"], options),
    marginBottom: pxProp(m, dirMap["b"], options),
    marginLeft: pxProp(m, dirMap["l"], options),
    marginX: pxProp(m, dirMap["x"], options),
    marginY: pxProp(m, dirMap["y"], options),
    marginInline: pxProp(m, ["Inline", "InlineStart"], options),
    marginInlineStart: pxProp(m, ["InlineStart"], options),
    marginInlineEnd: pxProp(m, ["InlineEnd"], options),
    marginBlock: pxProp(m, ["BlockStart", "BlockEnd"], options),
    marginBlockStart: pxProp(m, ["BlockStart"], options),
    marginBlockEnd: pxProp(m, ["BlockEnd"], options),
    p: pxProp(p, [], options),
    pt: pxProp(p, dirMap["t"], options),
    pr: pxProp(p, dirMap["r"], options),
    pb: pxProp(p, dirMap["b"], options),
    pl: pxProp(p, dirMap["l"], options),
    px: pxProp(p, dirMap["x"], options),
    py: pxProp(p, dirMap["y"], options),
    padding: pxProp(p, [], options),
    paddingTop: pxProp(p, dirMap["t"], options),
    paddingRight: pxProp(p, dirMap["r"], options),
    paddingBottom: pxProp(p, dirMap["b"], options),
    paddingLeft: pxProp(p, dirMap["l"], options),
    paddingX: pxProp(p, dirMap["x"], options),
    paddingY: pxProp(p, dirMap["y"], options),
    paddingInline: pxProp(p, ["Inline", "InlineStart"], options),
    paddingInlineStart: pxProp(p, ["InlineStart"], options),
    paddingInlineEnd: pxProp(p, ["InlineEnd"], options),
    paddingBlock: pxProp(p, ["BlockStart", "BlockEnd"], options),
    paddingBlockStart: pxProp(p, ["BlockStart"], options),
    paddingBlockEnd: pxProp(p, ["BlockEnd"], options),
  };
}

export default createStylePropsFactory;
