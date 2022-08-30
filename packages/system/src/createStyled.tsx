import Box, { BoxTypeMap, disableSystemPropsKey } from "./Box";
import type { Theme } from "./createTheme/createTheme";
import resolveStyledProps from "./resolveStyledProps";
import { StyledProps } from "./styledProps";
import { SxProps } from "./sxProps";
import useTheme from "./useTheme";
import {
  ElementType,
  OverridableComponent,
  OverridableInProps,
  PropsOf,
} from "@suid/types";
import clsx from "clsx";
import { createMemo } from "solid-js";
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

type StyledOptions<N extends string> = {
  name?: N;
  slot?: string;
  skipSx?: boolean;
  skipProps?: string[];
  overridesResolver?: (
    props: Record<string, any>,
    styles: Record<string, any>
  ) => (string | false)[];
};

export const skipProps: (keyof ComponentProps<any, any>)[] = [
  "ownerState",
  "theme",
  "sx",
  "as",
];

function resolveStyles<T extends Theme<any>, P, O>(
  theme: T,
  className: string,
  styles: Style<T, P, O>[],
  inProps: ComponentProps<T, O>
) {
  return createMemo(() =>
    styles.reduce((result, style) => {
      let styledProps: StyledProps | false | undefined;
      if (typeof style === "function") {
        styledProps = style({
          ownerState: inProps.ownerState,
          theme,
          sx: inProps.sx,
          as: inProps.as,
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
    }, [] as StyledProps[])
  );
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
    }

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
    ) {
      return function (inProps: _ComponentProps<C> & ComponentProps<T, O>) {
        const theme = config?.onUseTheme
          ? config.onUseTheme()
          : (useTheme() as T);

        const [, otherProps] = splitProps(
          inProps,
          options.skipProps ?? skipProps
        );

        const inStyles = resolveStyles(
          theme,
          className || "css",
          styles,
          inProps
        );

        const inSx = createMemo(() =>
          !options.skipSx && inProps.sx
            ? Array.isArray(inProps.sx)
              ? inProps.sx
              : [inProps.sx]
            : []
        );

        const sx = () => [...inStyles(), ...inSx()];

        if (typeof Component === "string") {
          return (
            <Box
              {...otherProps}
              component={inProps.as || inProps.component || Component}
              sx={sx()}
              theme={theme}
              class={clsx([inProps.class, className])}
              {...{
                [disableSystemPropsKey]: true,
              }}
            />
          );
        }

        return (
          <Component
            {...otherProps}
            component={inProps.as}
            sx={sx()}
            theme={theme}
            class={clsx([inProps.class, className])}
            ownerState={inProps.ownerState}
          />
        );
      } as C extends OverridableComponent<infer M>
        ? OverridableComponent<{
            defaultComponent: M["defaultComponent"];
            props: M["props"] & { ownerState?: O };
          }>
        : C extends keyof JSX.IntrinsicElements
        ? OverridableComponent<BoxTypeMap<{ ownerState?: O }, C>>
        : (props: PropsOf<C> & { ownerState?: O }) => JSX.Element;
    };
  };
}
export default createStyled;
