import SxProps from "../sxProps";
import { systemPropNames, SystemProps } from "../systemProps";
import { mergeProps, splitProps } from "solid-js";

type SystemPropName = (typeof systemPropNames)[number];

export function splitSxProps<
  T extends SystemProps & {
    sx?: SxProps;
  },
>(props: T): [() => SxProps, Omit<T, SystemPropName>] {
  const [systemProps, sxProps, otherProps] = (splitProps as any)(
    props,
    systemPropNames,
    ["sx"]
  );
  const sx = () => {
    const sx = sxProps.sx;
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

  return [sx, otherProps];
}

export default function extendSxProp<
  T extends SystemProps & {
    sx?: SxProps;
  },
>(props: T): Omit<T, SystemPropName> & { sx?: SxProps } {
  const [sx, otherProps] = splitSxProps(props);
  return mergeProps(otherProps, {
    get sx() {
      return sx();
    },
  }) as any;
}
