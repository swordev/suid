import {
  StandardProperties,
  SvgProperties,
  VendorLonghandProperties,
} from "csstype";

export type StyleProps = StandardProperties &
  SvgProperties &
  VendorLonghandProperties;

export type StyleCascade<T> =
  | {
      [K in keyof T]?: T[K];
    }
  | {
      [K: string]: StyleCascade<T>;
    };

export {};
export default StyleProps;
