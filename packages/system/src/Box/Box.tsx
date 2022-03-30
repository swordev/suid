import { BoxSelfProps } from ".";
import Dynamic from "../Dynamic/Dynamic";
import createClassListEffect from "../createClassListEffect";
import createElementRef from "../createElementRef";
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
  const element = createElementRef(otherProps);
  const theme = useTheme();

  const sxClass = createSxClass(() => {
    if (!props.sx) return [];
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

  createClassListEffect(element, () =>
    [...(otherProps.className?.split(" ") || []), sxClass()].reduce(
      (result, name) => {
        if (name?.length) result[name] = true;
        return result;
      },
      {} as Record<string, boolean>
    )
  );

  return <Dynamic {...otherProps} ref={element} />;
});

export default Box;
