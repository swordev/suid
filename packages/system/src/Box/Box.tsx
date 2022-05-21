import { BoxSelfProps } from ".";
import Dynamic from "../Dynamic/Dynamic";
import createSxClass, { resolvedPropKey } from "../createSxClass";
import defineComponent from "../defineComponent";
import resolveSxProps from "../resolveSxProps";
import useTheme from "../useTheme";
import { BoxTypeMap } from "./BoxProps";
import { mergeProps, splitProps } from "solid-js";

export const boxSelfProps: (keyof BoxSelfProps)[] = ["sx", "theme"];

export const Box = defineComponent<BoxTypeMap>(function Box(inProps) {
  const allProps = mergeProps(
    {
      component: "div",
    },
    inProps
  );

  const [props, otherProps] = splitProps(allProps, boxSelfProps);

  const useInTheme = () => inProps.theme || useTheme();
  const forwardSx = () =>
    !!inProps.component && typeof inProps.component !== "string";

  const dynamicProps = mergeProps(otherProps, {
    get sx() {
      return forwardSx() ? inProps.sx : undefined;
    },
  });

  const sxClass = createSxClass(() => {
    const theme = useInTheme();
    const haveStyles = !!props.sx;
    if (!haveStyles || forwardSx()) return [];
    const objects = Array.isArray(props.sx)
      ? props.sx
      : props.sx
      ? [props.sx]
      : [];
    return objects.map((object) =>
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
