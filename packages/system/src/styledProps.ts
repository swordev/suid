import { StyleCascade } from "./styleProps";
import {
  StandardProperties,
  SvgProperties,
  VendorLonghandProperties,
} from "csstype";

export type StyledPropsBase = StandardProperties<string | number> &
  SvgProperties<string | number> &
  VendorLonghandProperties<string | number>;

export type StyledProps = StyleCascade<StyledPropsBase>;

export {};
export default StyledProps;
