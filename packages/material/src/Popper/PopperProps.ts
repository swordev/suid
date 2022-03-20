import { PopperUnstyledTypeMap } from "@suid/base/PopperUnstyled";
import { ElementType, OverrideProps } from "@suid/types";

export interface PopperTypeMap<
  P = {},
  D extends ElementType = PopperUnstyledTypeMap["defaultComponent"]
> {
  name: "MuiPopper";
  selfProps: {};
  props: P &
    Omit<PopperUnstyledTypeMap["selfProps"], "direction"> &
    PopperTypeMap["selfProps"];
  defaultComponent: D;
}

export type PopperProps<
  D extends ElementType = PopperTypeMap["defaultComponent"],
  P = {}
> = OverrideProps<PopperTypeMap<P, D>, D>;

export default PopperProps;
