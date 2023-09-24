import type { Theme } from "./createTheme";
import type { Breakpoint } from "./createTheme/createBreakpoints";
import type StyledProps from "./styledProps";

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
  styleFromPropValue: (value: any, breakpoint?: Breakpoint) => StyledProps
) {
  const theme = props.theme || ({} as Theme);

  if (Array.isArray(propValue)) {
    const themeBreakpoints = theme.breakpoints;
    return propValue.reduce((acc, item, index) => {
      acc = {
        ...acc,
        ...themeBreakpoints.up(
          themeBreakpoints.keys[index],
          styleFromPropValue(propValue[index])
        ),
      };
      return acc;
    }, {});
  }

  if (typeof propValue === "object") {
    const themeBreakpoints = theme.breakpoints;
    const keys = Object.keys(propValue) as Breakpoint[];
    return keys.reduce<StyledProps>((acc, breakpoint) => {
      // key is breakpoint
      if (
        Object.keys(themeBreakpoints.values || values).indexOf(breakpoint) !==
        -1
      ) {
        acc = {
          ...acc,
          ...themeBreakpoints.up(
            breakpoint,
            styleFromPropValue(propValue[breakpoint], breakpoint)
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

  return keys.reduce(
    (acc, breakpoint, i) => {
      if (Array.isArray(values)) {
        acc[breakpoint] =
          values[i] != null ? values[i] : values[previous as number];
        previous = i;
      } else if (typeof values === "number") {
        acc[breakpoint] = values;
      } else {
        acc[breakpoint] =
          values[breakpoint] != null
            ? values[breakpoint]
            : values[previous as K];
        previous = breakpoint;
      }
      return acc;
    },
    {} as { [k in K]: number }
  );
}
