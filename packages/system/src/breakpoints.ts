import { Theme } from "./createTheme";
import { Breakpoint } from "./createTheme/createBreakpoints";
import { CSSProps, SxPropsObject } from "./sxProps";

export type BreakpointValueType<T extends string> = {
  [K in T]?: number | boolean | "auto";
};

export type ColumnsType<T extends string, V = any> =
  | {
      [K in T]?: V;
    }
  | V
  | V[];

export type ThemeBreakpointBase<K extends string> = {
  [key in K]?: boolean | number;
};

// The breakpoint **start** at this value.
// For instance with the first breakpoint xs: [xs, sm[.
export const values = {
  xs: 0, // phone
  sm: 600, // tablets
  md: 900, // small laptop
  lg: 1200, // desktop
  xl: 1536, // large screens
};

export function handleBreakpoints(
  props: {
    theme: Theme;
  },
  propValue: any[],
  styleFromPropValue: (value: any, breakpoint?: Breakpoint) => SxPropsObject
) {
  const theme = props.theme || ({} as Theme);

  if (Array.isArray(propValue)) {
    const themeBreakpoints = theme.breakpoints;
    return propValue.reduce((acc, item, index) => {
      acc = {
        ...acc,
        ...themeBreakpoints.up(
          themeBreakpoints.keys[index],
          styleFromPropValue(propValue[index]) as SxPropsObject
        ),
      };
      return acc;
    }, {});
  }

  if (typeof propValue === "object") {
    const themeBreakpoints = theme.breakpoints;
    const keys = Object.keys(propValue) as Breakpoint[];
    return keys.reduce<SxPropsObject>((acc, breakpoint) => {
      // key is breakpoint
      if (
        Object.keys(themeBreakpoints.values || values).indexOf(breakpoint) !==
        -1
      ) {
        acc = {
          ...acc,
          ...themeBreakpoints.up(
            breakpoint,
            styleFromPropValue(
              propValue[breakpoint],
              breakpoint
            ) as SxPropsObject
          ),
        };
      } else {
        const cssKey = breakpoint;
        (acc as any)[cssKey] = propValue[cssKey];
      }
      return acc;
    }, {});
  }

  const output = styleFromPropValue(propValue);

  return output;
}

export function getOffset(val: number | string) {
  const parse = parseFloat(val.toString());
  return `${parse}${String(val).replace(String(parse), "") || "px"}`;
}

export function computeBreakpointsBase<K extends string>(
  values: ColumnsType<K>,
  breakpoints: Record<K, number>
) {
  const base: ThemeBreakpointBase<K> = {};
  // fixed value
  if (typeof values !== "object") {
    return base;
  }
  const breakpointsKeys = Object.keys(breakpoints) as K[];
  if (Array.isArray(values)) {
    breakpointsKeys.forEach((breakpoint, i) => {
      if (i < values.length) {
        base[breakpoint] = true;
      }
    });
  } else {
    breakpointsKeys.forEach((breakpoint) => {
      if (values[breakpoint] != null) {
        base[breakpoint] = true;
      }
    });
  }
  return base;
}

export function resolveBreakpointValues<K extends string>(data: {
  values: ColumnsType<K>;
  breakpoints?: Record<K, number>;
  base?: ThemeBreakpointBase<K>;
}) {
  const values = data.values;
  const base =
    data.base ||
    computeBreakpointsBase(
      values,
      data.breakpoints || ({} as Record<K, number>)
    );
  const keys = Object.keys(base) as K[];

  if (keys.length === 0) {
    return data.values;
  }

  let previous: number | K | undefined;

  return keys.reduce((acc, breakpoint, i) => {
    if (Array.isArray(values)) {
      acc[breakpoint] =
        values[i] != null ? values[i] : values[previous as number];
      previous = i;
    } else if (typeof values === "number") {
      acc[breakpoint] = values;
    } else {
      acc[breakpoint] =
        values[breakpoint] != null ? values[breakpoint] : values[previous as K];
      previous = breakpoint;
    }
    return acc;
  }, {} as { [k in K]: number });
}

export function generateColStyle(theme: Theme, props: Record<string, any>) {
  let size: number | boolean | "auto";
  const breakpoints = Object.keys(
    theme.breakpoints.values
  ) as (keyof typeof props)[];
  return breakpoints.reduce((globalStyles, breakpoint) => {
    // Use side effect over immutability for better performance.
    let styles: SxPropsObject = {};
    if (props[breakpoint]) {
      size = props[breakpoint] as any;
    }
    if (!size) {
      return globalStyles;
    }

    if (size === true) {
      // For the auto layouting
      styles = {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: "100%",
      };
    } else if (size === "auto") {
      styles = {
        flexBasis: "auto",
        flexGrow: 0,
        flexShrink: 0,
        maxWidth: "none",
        width: "auto",
      };
    } else {
      const columnsBreakpointValues = resolveBreakpointValues({
        values: props.columns,
        breakpoints: theme.breakpoints.values,
      });

      const columnValue =
        typeof columnsBreakpointValues === "object"
          ? columnsBreakpointValues[
              breakpoint as keyof typeof columnsBreakpointValues
            ]
          : columnsBreakpointValues;

      if (columnValue === undefined || columnValue === null) {
        return globalStyles;
      }
      // Keep 7 significant numbers.
      const width = `${Math.round((size / columnValue) * 10e7) / 10e5}%`;
      const more: CSSProps = {};

      if (
        props.container &&
        props.item &&
        typeof props.columnSpacing === "number" &&
        props.columnSpacing !== 0
      ) {
        const themeSpacing = theme.spacing(props.columnSpacing);
        if (themeSpacing !== "0px") {
          more.flexBasis = more.maxWidth = `calc(${width} + ${getOffset(
            themeSpacing
          )})`;
        }
      }

      // Close to the bootstrap implementation:
      // https://github.com/twbs/bootstrap/blob/8fccaa2439e97ec72a4b7dc42ccc1f649790adb0/scss/mixins/_grid.scss#L41
      styles = {
        flexBasis: width,
        flexGrow: 0,
        maxWidth: width,
        ...more,
      };
    }

    // No need for a media query for the first size.
    if (
      theme.breakpoints.values[
        breakpoint as keyof typeof theme.breakpoints.values
      ] === 0
    ) {
      Object.assign(globalStyles, styles);
    } else {
      globalStyles = {
        ...globalStyles,
        ...theme.breakpoints.up(breakpoint as any, styles as SxPropsObject),
      };
    }
    return globalStyles;
  }, {});
}
