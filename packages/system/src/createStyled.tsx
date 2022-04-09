import { SxProps } from ".";
import Box, { BoxTypeMap } from "./Box";
import createSxMemo from "./createSxMemo";
import type { Theme } from "./createTheme/createTheme";
import resolveStyleProps from "./resolveStyleProps";
import { SxPropsObject } from "./sxProps";
import useTheme from "./useTheme";
import {
  ElementType,
  OverridableComponent,
  OverridableInProps,
  ComponentProps,
} from "@suid/types";
import clsx from "clsx";
import { createMemo, Accessor } from "solid-js";
import {
  ComponentProps as _ComponentProps,
  JSX,
  splitProps,
  Show,
} from "solid-js";

export interface StyledProps<T, O> {
  ownerState: O;
  theme: T;
  sx?: SxProps<T>;
  as?: ElementType;
}

type Style<T extends Theme<any>, P, O> =
  | ((props: StyledProps<T, O> & { props: P }) => false | SxPropsObject)
  | false
  | SxPropsObject;

type StyledOptions<N extends string> = {
  name?: N;
  slot?: string;
  skipSx?: boolean;
  skipProps?: string[];
  overridesResolver?: (
    props: Record<string, any>,
    styles: Record<string, any>
  ) => string[];
};

export const skipProps: (keyof StyledProps<any, any>)[] = [
  "ownerState",
  "theme",
  "sx",
  "as",
];

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
            ? ComponentProps<M3>
            : ComponentProps<C>
          : ComponentProps<C>,
        O
      >[]
    ) {
      return function (inProps: _ComponentProps<C> & StyledProps<T, O>) {
        const theme = config?.onUseTheme
          ? config.onUseTheme()
          : (useTheme() as T);
        const [, otherProps] = splitProps(
          inProps,
          options.skipProps ?? skipProps
        );
        const inStyles = createSxMemo(
          className ?? "css",
          () =>
            styles
              .map((v) => {
                let object: SxPropsObject | false | undefined;
                if (typeof v === "function") {
                  object = v({
                    ownerState: inProps["ownerState"],
                    theme,
                    sx: inProps.sx,
                    as: inProps.as,
                    props: inProps as any,
                  });
                } else if (v) {
                  object = v;
                }
                if (object) return resolveStyleProps(object, theme);
              })
              .filter((v) => !!v) as SxPropsObject[]
        ) as Accessor<SxPropsObject[]>;

        const inSx = createMemo(() =>
          !options.skipSx && inProps.sx
            ? Array.isArray(inProps.sx)
              ? inProps.sx
              : [inProps.sx]
            : []
        );

        const sx = createMemo(() => [...inStyles(), ...inSx()]);
        return (
          <Show
            when={typeof Component === "string"}
            fallback={
              <Component
                {...otherProps}
                component={inProps.as}
                sx={sx()}
                className={clsx([inProps.className, className])}
                ownerState={inProps.ownerState}
              />
            }
          >
            <Box
              component={inProps.as || Component}
              {...otherProps}
              sx={sx()}
              className={clsx([inProps.className, className])}
            />
          </Show>
        );
      } as C extends OverridableComponent<infer M>
        ? OverridableComponent<{
            defaultComponent: M["defaultComponent"];
            props: M["props"] & { ownerState?: O };
          }>
        : C extends keyof JSX.IntrinsicElements
        ? OverridableComponent<BoxTypeMap<{ ownerState?: O }, C>>
        : (props: ComponentProps<C> & { ownerState?: O }) => JSX.Element;
    };
  };
}
export default createStyled;
