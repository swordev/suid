import { StyleProps } from "./createStylePropsFactory";
import { Theme } from "./createTheme";
import { StandardProperties, SvgProperties } from "csstype";

export type NativeStyleProps = StandardProperties & SvgProperties;
export type CSSProps = Omit<NativeStyleProps, keyof StyleProps> & StyleProps;
export type SxPropsObject =
  | {
      [K in keyof CSSProps]?: CSSProps[K];
    }
  | {
      [K: string]: SxPropsObject;
    };

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type SxProps<T = Theme> = SxPropsObject[] | SxPropsObject;

export default SxProps;
