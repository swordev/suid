import * as ComponentTypes from "./components-types";
import useBaseThemeProps, {
  ThemePropOptions as BaseThemePropOptions,
} from "@suid/base/useThemeProps";

export type ThemePropsName = keyof typeof ComponentTypes;
export type ThemePropsComponent<N extends ThemePropsName> =
  typeof ComponentTypes[N];

export type ThemePropOptions<
  N extends ThemePropsName,
  C = ThemePropsComponent<N>
> = Omit<BaseThemePropOptions<C>, "name"> & {
  name: N;
};

export default function useThemeProps<
  N extends ThemePropsName,
  C = ThemePropsComponent<N>
>(options: ThemePropOptions<N, C>) {
  return useBaseThemeProps<C>(options);
}
