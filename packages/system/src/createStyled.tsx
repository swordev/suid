import { createDynamicComponent } from "./Dynamic";
import createStyle from "./createStyle";
import type { Theme } from "./createTheme/createTheme";
import resolveStyledProps from "./resolveStyledProps";
import resolveSxProps from "./resolveSxProps";
import { StyledProps } from "./styledProps";
import { SxProps, SxPropsObject } from "./sxProps";
import useTheme from "./useTheme";
import {
  ElementType,
  OverridableComponent,
  OverridableInProps,
  PropsOf,
} from "@suid/types";
import { randomString } from "@suid/utils";
import clsx from "clsx";
import { Component, createMemo, mergeProps } from "solid-js";
import { ComponentProps as _ComponentProps, JSX, splitProps } from "solid-js";

export interface ComponentProps<T, O> {
  ownerState: O;
  theme: T;
  sx?: SxProps<T>;
  as?: ElementType;
}

type Style<T extends Theme<any>, P, O> =
  | ((props: ComponentProps<T, O> & { props: P }) => false | StyledProps)
  | false
  | StyledProps;

export type StyledOptions<N extends string> = {
  name?: N;
  slot?: string;
  skipSx?: boolean;
  skipProps?: string[];
  overridesResolver?: (
    props: Record<string, any>,
    styles: Record<string, any>
  ) => (string | false | Record<string, any>)[];
};

export type StyledComponent<C, O = unknown> = (
  props: PropsOf<C> & Partial<ComponentProps<Theme, O>>
) => JSX.Element;

export function redefine<C, O, T extends ElementType>(
  component: StyledComponent<C, O>,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ..._types: T[]
): StyledComponent<T, O> {
  return component as any;
}

export const skipProps: (keyof ComponentProps<any, any>)[] = [
  "ownerState",
  "theme",
  "sx",
  "as",
];

function resolveStyles<T extends Theme<any>, P, O>(
  useTheme: () => T,
  className: string,
  styles: Style<T, P, O>[],
  inProps: ComponentProps<T, O>
) {
  return createMemo(() => {
    const theme = useTheme();
    const ownerState = inProps.ownerState;
    return styles.reduce((result, style) => {
      let styledProps: StyledProps | false | undefined;
      if (typeof style === "function") {
        styledProps = style({
          ownerState,
          theme,
          get sx() {
            return inProps.sx;
          },
          get as() {
            return inProps.as;
          },
          props: inProps as never as P,
        });
      } else if (style) {
        styledProps = style;
      }
      if (styledProps)
        result.push({
          ["name" as never]: className,
          ...resolveStyledProps(styledProps),
        });
      return result;
    }, [] as StyledProps[]);
  });
}

function isStyledComponent(input: unknown): input is Component {
  return typeof input === "function" && "__styled" in input && !!input.__styled;
}

function createStyled<
  T extends Theme<any>,
  CM extends Record<string, any> = {}
>(config?: { onUseTheme?: () => T }) {
  return function styled<C extends ElementType, N extends string = string>(
    Component: C,
    options: StyledOptions<N> = {}
  ) {
    let className: string | undefined;

    if (options.name) {
      const slot = options.slot || "Root";
      className = `${options.name}-${
        slot.slice(0, 1).toLowerCase() + slot.slice(1)
      }`;
    } else {
      className = `styled-${randomString()}`;
    }
    const isComponentStyled = isStyledComponent(Component);

    return function <
      O = N extends keyof CM
        ? CM[N] extends OverridableComponent<infer M2>
          ? OverridableInProps<M2>
          : unknown
        : C extends OverridableComponent<infer M>
        ? OverridableInProps<M>
        : unknown
    >(
      ...styles: Style<
        T,
        N extends keyof CM
          ? CM[N] extends OverridableComponent<infer M3>
            ? PropsOf<M3>
            : PropsOf<C>
          : PropsOf<C>,
        O
      >[]
    ): C extends OverridableComponent<infer M>
      ? OverridableComponent<{
          defaultComponent: M["defaultComponent"];
          props: M["props"] & { ownerState?: O };
        }>
      : StyledComponent<C, O> {
      function StyledComponent(
        inProps: _ComponentProps<C> & ComponentProps<T, O>
      ) {
        const $useTheme = () =>
          inProps.theme ??
          (config?.onUseTheme ? config.onUseTheme() : (useTheme() as T));

        const [, otherProps] = splitProps(
          inProps,
          options.skipProps ?? skipProps
        );

        const inStyles = resolveStyles(
          $useTheme,
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          options.name ? className! : "css",
          styles,
          inProps
        );

        const inSx = () => {
          const sx = inProps.sx;
          return (sx ? (Array.isArray(sx) ? sx : [sx]) : []) as SxPropsObject[];
        };

        const $component = () => {
          if (isComponentStyled) return Component;
          const as = inProps.as;
          return as ? as : Component;
        };

        const is$ComponentStyled = isComponentStyled
          ? () => true
          : createMemo(() => isStyledComponent($component()));

        const sx = () => {
          const theme = $useTheme();
          return [
            ...inStyles().map((v) => ({ ...v, __resolved: true })),
            ...(options.skipSx
              ? []
              : inSx().map((sx) =>
                  (sx as any).__resolved ? sx : resolveSxProps(sx, theme)
                )),
          ];
        };

        const styleClassName = createStyle(() =>
          is$ComponentStyled() ? undefined : sx()
        );

        return createDynamicComponent(
          $component,
          mergeProps(otherProps, {
            get children() {
              return (otherProps as any).children;
            },
            // [review] This property must be omitted on each component individually.
            get component() {
              return is$ComponentStyled()
                ? (otherProps as any).component
                : null;
            },
            get as() {
              return isComponentStyled ? inProps.as : undefined;
            },
            get sx() {
              return is$ComponentStyled() ? sx() : undefined;
            },
            get ownerState() {
              return is$ComponentStyled() ? inProps.ownerState : undefined;
            },
            get class() {
              return clsx([
                ...new Set([inProps.class, className, styleClassName()]),
              ]);
            },
          })
        );
      }

      (StyledComponent as any)["__styled"] = true;
      if (className) StyledComponent.toString = () => `.${className}`;

      return StyledComponent as any;
    };
  };
}

export default createStyled;
