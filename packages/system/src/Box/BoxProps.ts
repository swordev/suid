import type { DynamicSelfProps } from "../Dynamic";
import { Theme } from "../createTheme";
import SxProps from "../sxProps";
import { SystemProps } from "../systemProps";
import type { ElementType, OverrideProps } from "@suid/types";

export interface BoxSelfProps {
  sx?: SxProps;
  theme?: Theme;
}

export interface BoxTypeMap<P = {}, D extends ElementType = "div"> {
  props: P & DynamicSelfProps & SystemProps<Theme> & BoxSelfProps;
  defaultComponent: D;
}

export type BoxProps<
  D extends ElementType = BoxTypeMap["defaultComponent"],
  P = {}
> = OverrideProps<BoxTypeMap<P, D>, D>;
