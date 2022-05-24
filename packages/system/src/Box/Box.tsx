import { BoxSelfProps } from ".";
import Dynamic from "../Dynamic/Dynamic";
import createSxClass, { resolvedPropKey } from "../createSxClass";
import defineComponent from "../defineComponent";
import resolveSxProps from "../resolveSxProps";
import extendSxProp from "../styleFunctionSx/extendSxProp";
import { SxPropsObject } from "../sxProps";
import useTheme from "../useTheme";
import { BoxTypeMap } from "./BoxProps";
import toArray from "@suid/utils/toArray";
import { mergeProps, splitProps } from "solid-js";

export const disableSystemPropsKey = "__disableSystemProps";
export const boxSelfProps: (keyof BoxSelfProps)[] = [
  "sx",
  "theme",
  disableSystemPropsKey as never,
];

export const Box = defineComponent<BoxTypeMap>(function Box(inProps) {
  const disableSystemProps = (inProps as never)[disableSystemPropsKey];
  if (!disableSystemProps) inProps = extendSxProp(inProps);
  const [props, otherProps] = splitProps(inProps, boxSelfProps);

  const useInTheme = () => inProps.theme || useTheme();
  const forwardSx = () =>
    !!inProps.component && typeof inProps.component !== "string";

  const dynamicProps = mergeProps(otherProps, {
    get component() {
      return otherProps.component || "div";
    },
    get sx() {
      return forwardSx() ? inProps.sx : undefined;
    },
  });

  const sxClass = createSxClass(() => {
    const theme = useInTheme();
    const haveStyles = !disableSystemProps || !!props.sx;
    if (!haveStyles || forwardSx()) return [];
    return toArray<SxPropsObject>(props.sx).map((object) =>
      (object as never)[resolvedPropKey]
        ? object
        : resolveSxProps(object, theme)
    );
  });

  const className = () => {
    const className = otherProps.className;
    const sxClassValue = sxClass();
    if (sxClassValue?.length) {
      return className ? `${className} ${sxClassValue}` : sxClassValue;
    } else {
      return className;
    }
  };

  return <Dynamic {...dynamicProps} className={className()} />;
});

export default Box;
