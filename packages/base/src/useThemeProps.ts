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

export default function useThemeProps<C>(
  options: ThemePropOptions<C>
): InPropsOf<C> {
  const props = [];
  const propDefaults =
    typeof options.propDefaults === "function"
      ? (options.propDefaults as PropDefaultsCb<C>)({
          set: (v: any) => v,
          inProps: options.props,
        })
      : options.propDefaults;
  const theme = useTheme();
  const themeProps = theme.components?.[options.name]?.defaultProps;
  if (propDefaults) props.push(propDefaults);
  if (themeProps) props.push(themeProps);
  if (!props.length) return options.props as any;
  return mergeProps(...[...props, options.props]) as any;
}
