import useTheme from "./useTheme";
import { DoRequired } from "@suid/types";
import { mergeProps } from "solid-js";
import { Component, ComponentProps } from "solid-js";

function makeUseThemeProps<
  M extends Record<string, Component> = Record<string, Component>
>() {
  return function useThemeProps<
    N extends keyof M,
    D extends keyof ComponentProps<M[N]>
  >(
    name: N,
    props: ComponentProps<M[N]>,
    propDefaults?: {
      [K in D]?: ComponentProps<M[N]>[K];
    }
  ) {
    return mergeProps(
      useTheme().components?.[name]?.defaultProps ?? {},
      propDefaults ?? {},
      props ?? {}
    ) as DoRequired<ComponentProps<M[N]>, D>;
  };
}
export default makeUseThemeProps;
