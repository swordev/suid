import { SxPropsObject } from "../sxProps";
import renderMediaQuery from "@suid/css/renderMediaQuery";
import { OverridableStringUnion } from "@suid/types";
import { DeepPartial } from "@suid/types";

export interface BreakpointOverrides {}

export type Breakpoint = OverridableStringUnion<
  "xs" | "sm" | "md" | "lg" | "xl",
  BreakpointOverrides
>;

export type MediaQueryType<T> = {
  (value: T | number, props?: never): string;
  (
    value: T | number,
    props?: SxPropsObject
  ): {
    [K in string as `@media${string}`]: SxPropsObject;
  };
};

export interface Breakpoints<T extends string> extends BreakpointsOptions<T> {
  readonly up: MediaQueryType<T>;
  readonly down: MediaQueryType<T>;
  readonly between: MediaQueryType<[T, T]>;
  readonly resolve: (value: T | number) => number;
}

export type BreakpointsOptions<T extends string> = {
  columns: number;
  keys: T[];
  values: { [name in T]: number };
  unit: string;
};

export const breakpointsDefault = createBreakpointsOptions<Breakpoint>({
  columns: 12,
  keys: ["xs", "sm", "md", "lg", "xl"],
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
  unit: "px",
});

export function createBreakpointsOptions<T extends string>(
  options: BreakpointsOptions<T>
) {
  return options;
}

export function createBreakpoints<T extends string>(
  options?: DeepPartial<BreakpointsOptions<T>>
) {
  const result: Breakpoints<T> = {
    ...breakpointsDefault,
    ...((options ?? {}) as any),
    up: (value, css) => {
      const key = renderMediaQuery("up", result.resolve(value));
      return (css ? { [key]: css } : key) as any;
    },
    down: (value, css) => {
      const key = renderMediaQuery("down", result.resolve(value));
      return (css ? { [key]: css } : key) as any;
    },
    between: (value, css) => {
      const key = renderMediaQuery("between", [
        result.resolve((value as [T, T])[0]),
        result.resolve((value as [T, T])[1]),
      ]);
      return (css ? { [key]: css } : key) as any;
    },
    resolve: (value) =>
      typeof value === "number" ? value : result.values[value],
  };
  return result;
}

export default createBreakpoints;
