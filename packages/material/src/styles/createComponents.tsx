import type * as ComponentsTypes from "./components-types";
import { DeepPartial, InferPropsType } from "@suid/types";
import merge from "@suid/utils/merge";

export type Components = ComponentsOptions & {};

export type ComponentName = keyof typeof ComponentsTypes;
export type PickThemeComponent<N extends ComponentName> =
  typeof ComponentsTypes[N];

export type PickThemeComponentProps<N extends ComponentName> = InferPropsType<
  PickThemeComponent<N>
>;

export type ComponentsOptions = {
  [C in keyof typeof ComponentsTypes]?: {
    defaultProps?: Partial<PickThemeComponentProps<C>>;
  };
};

export const componentsDefault = createComponentsOptions({});

export function createComponentsOptions(options: ComponentsOptions) {
  return options;
}

export function createComponents(
  data?: DeepPartial<ComponentsOptions>
): Components {
  const result: Components = {
    ...merge(
      {} as typeof componentsDefault,
      componentsDefault,
      data ?? ({} as typeof componentsDefault)
    ),
  };
  return result;
}
