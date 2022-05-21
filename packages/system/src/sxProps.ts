import { Theme } from "./createTheme";
import { StyleCascade } from "./styleProps";
import { StyledPropsBase } from "./styledProps";
import { SystemProps } from "./systemProps";

export type SxPropsBase<T = Theme> = Omit<
  StyledPropsBase,
  keyof SystemProps<T>
> &
  StyledPropsBase &
  SystemProps<Theme>;

export type SxPropsObject<T = Theme> = StyleCascade<SxPropsBase<T>>;
export type SxProps<T = Theme> = SxPropsObject<T>[] | SxPropsObject<T>;

export default SxProps;
