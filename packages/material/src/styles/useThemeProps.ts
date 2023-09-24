import type { ComponentsTypes } from "./components-types";
import useBaseThemeProps, {
  ThemePropOptions as BaseThemePropOptions,
} from "@suid/base/useThemeProps";

export type ThemePropsName = keyof ComponentsTypes;
export type ThemePropsComponent<N extends ThemePropsName> = ComponentsTypes[N];

export type ThemePropOptions<
  N extends ThemePropsName,
  C = ThemePropsComponent<N>,
> = Omit<BaseThemePropOptions<C>, "name"> & {
  name: N;
};

export default function useThemeProps<
  N extends ThemePropsName,
  C = ThemePropsComponent<N>,
>(options: ThemePropOptions<N, C>) {
  return useBaseThemeProps<C>(options);
}
