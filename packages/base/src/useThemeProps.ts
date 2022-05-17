import useTheme from "./useTheme";
import { PropsOf, InPropsOf, DefaultPropsOf } from "@suid/types";
import { mergeProps } from "solid-js";

export type ThemePropOptions<C> = {
  name: string;
  props: PropsOf<C>;
  propDefaults?: DefaultPropsOf<C> | PropDefaultsCb<C>;
};

export type PropDefaultsCb<C> = (data: {
  set: (props: Omit<DefaultPropsOf<C>, "children">) => InPropsOf<C>;
  inProps: PropsOf<C>;
}) => InPropsOf<C>;

export default function useThemeProps<C>(options: ThemePropOptions<C>) {
  const theme = useTheme();
  const set = (v: any) => v;
  const propDefaults =
    typeof options.propDefaults === "function"
      ? (options.propDefaults as PropDefaultsCb<C>)({
          set,
          inProps: options.props,
        })
      : options.propDefaults;
  return mergeProps(
    ...[
      ...(propDefaults ? [propDefaults] : []),
      () => theme.components?.[options.name]?.defaultProps || {},
      options.props,
    ]
  ) as InPropsOf<C>;
}
