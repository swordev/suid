import { InPropsOf, PropsOf } from "@suid/types";
import { mergeProps } from "solid-js";

export default function useProps<CM>(options: {
  props: PropsOf<CM>;
  propDefaults?: (data: {
    set: (props: Omit<InPropsOf<CM>, "children">) => InPropsOf<CM>;
    inProps: PropsOf<CM>;
  }) => InPropsOf<CM>;
}) {
  const set = (v: any) => v;
  const inProps = mergeProps(
    () =>
      options.propDefaults?.({
        set,
        inProps: options.props ?? (inProps as any),
      }) ?? {},
    options.props
  ) as InPropsOf<CM>;
  return inProps;
}
