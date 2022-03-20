import { ComponentInProps, ComponentProps } from "@suid/types";
import { mergeProps } from "solid-js";

export default function useProps<CM>(options: {
  props: ComponentProps<CM>;
  propDefaults?: (data: {
    set: (
      props: Omit<ComponentInProps<CM>, "children">
    ) => ComponentInProps<CM>;
    inProps: ComponentProps<CM>;
  }) => ComponentInProps<CM>;
}) {
  const set = (v: any) => v;
  const inProps = mergeProps(
    () =>
      options.propDefaults?.({
        set,
        inProps: options.props ?? (inProps as any),
      }) ?? {},
    options.props
  ) as ComponentInProps<CM>;
  return inProps;
}
