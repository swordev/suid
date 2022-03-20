import { BoxTypeMap as SysBoxTypeMap } from "@suid/system/Box";
import { ElementType, OverrideProps } from "@suid/types";

export interface BoxTypeMap<P = {}, D extends ElementType = "div"> {
  name: "MuiBox";
  selfProps: {};
  props: P & SysBoxTypeMap["props"] & BoxTypeMap["selfProps"];
  defaultComponent: D;
}

export type BoxProps<
  D extends ElementType = BoxTypeMap["defaultComponent"],
  P = {}
> = OverrideProps<BoxTypeMap<P, D>, D>;

export default BoxProps;
