import SxProps from "../sxProps";
import { systemPropNames, SystemProps } from "../systemProps";
import { mergeProps, splitProps } from "solid-js";

export default function extendSxProp<
  T extends SystemProps & {
    sx?: SxProps;
  }
>(props: T) {
  const [systemProps, otherProps] = splitProps(props, systemPropNames);

  const sx = () => {
    const sx = props.sx;
    if (sx) {
      if (Array.isArray(sx)) {
        return [systemProps, ...sx];
      } else {
        return mergeProps(systemProps, sx);
      }
    } else {
      return systemProps;
    }
  };

  return mergeProps(otherProps, {
    get sx() {
      return sx();
    },
  }) as T;
}
