import { Theme } from "./createTheme";
import { ResponsiveStyleValue } from "./styleFunctionSx";
import { StyledPropsBase } from "./styledProps";
import { SystemProps } from "./systemProps";

export type SxPropsBase<T = Theme> = Omit<
  StyledPropsBase,
  keyof SystemProps<T>
> &
  StyledPropsBase &
  SystemProps<Theme>;

export type SxCascade<Sx, T = Theme> =
  | {
      [K in keyof Sx]?:
        | ResponsiveStyleValue<Sx[K]>
        | ((theme: T) => ResponsiveStyleValue<Sx[K]>);
    }
  | {
      [K: string]: SxCascade<Sx, T>;
    };

export type SxPropsObject<T = Theme> = SxCascade<SxPropsBase<T>>;
export type SxProps<T = Theme> = SxPropsObject<T>[] | SxPropsObject<T>;

export default SxProps;
