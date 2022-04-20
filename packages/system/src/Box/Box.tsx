import { BoxSelfProps } from ".";
import Dynamic from "../Dynamic/Dynamic";
import createSxClass from "../createSxClass";
import defineComponent from "../defineComponent";
import resolveStyleProps from "../resolveStyleProps";
import { SxPropsObject } from "../sxProps";
import sxPropsFactory from "../sxPropsFactory";
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
  const theme = useTheme();
  const forwardSx = () =>
    !!inProps.component && typeof inProps.component !== "string";
  const dynamicProps = mergeProps(otherProps, {
    get sx() {
      return forwardSx() ? inProps.sx : undefined;
    },
  });

  const sxClass = createSxClass(() => {
    if (!props.sx || forwardSx()) return [];
    const sxArray = Array.isArray(props.sx) ? props.sx : [props.sx];
    const result = sxArray.map(
      (object: SxPropsObject & { resolved?: boolean }) => {
        if (object.resolved) {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { resolved, ...restObject } = object;
          return restObject;
        } else {
          return resolveStyleProps(
            object,
            props.theme || theme,
            sxPropsFactory
          );
        }
      }
    );
    return result;
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
