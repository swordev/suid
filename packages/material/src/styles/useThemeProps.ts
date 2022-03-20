import * as ComponentTypes from "./components-types";
import useTheme from "./useTheme";
import { ComponentProps, ComponentInProps } from "@suid/types";
import { mergeProps } from "solid-js";

export type UseThemePropsName = keyof typeof ComponentTypes;
export type UseThemePropsComponent<N extends UseThemePropsName> =
  typeof ComponentTypes[N];
export type UseThemePropsOptions<
  N extends UseThemePropsName,
  C = UseThemePropsComponent<N>
> = {
  name: N;
  props: ComponentProps<C>;
  propDefaults?: (data: {
    set: (props: ComponentInProps<C>) => ComponentInProps<C>;
    inProps: ComponentProps<C>;
  }) => ComponentInProps<C>;
};

export default function useThemeProps<
  N extends UseThemePropsName,
  C = UseThemePropsComponent<N>
>(options: UseThemePropsOptions<N, C>) {
  const theme = useTheme();
  const set = (v: any) => v;
  const inProps = mergeProps(
    () => theme.components?.[options.name]?.defaultProps ?? {},
    () =>
      options.propDefaults?.({
        set,
        inProps: options.props ?? (inProps as any),
      }) ?? {},
    options.props
  ) as ComponentInProps<C>;
  return inProps;
}
