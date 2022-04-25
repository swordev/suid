import composeClasses from "./composeClasses";
import useTheme from "./useTheme";
import { Theme } from "@suid/system/createTheme";
import {
  DefaultPropsOf,
  InPropsOf,
  PropsOf,
  OverridableComponent,
  OverridableTypeMap,
  SuidComponentType,
  SuidElement,
} from "@suid/types";
import {
  batch,
  createComputed,
  JSXElement,
  mergeProps,
  splitProps,
} from "solid-js";
import { createMutable } from "solid-js/store";

function createComponentFactory<
  C extends SuidComponentType,
  O = InPropsOf<C>
>() {
  type Props = PropsOf<C>;
  type InProps = InPropsOf<C>;
  return function <
    S extends Record<string, (string | false | undefined)[]>
  >(options: {
    name: NonNullable<C["name"]>;
    selfPropNames: Exclude<keyof C["selfProps"], "sx">[];
    propDefaults?: (data: {
      set: (props: Omit<DefaultPropsOf<C>, "children">) => InProps;
      theme: Theme;
      inProps: Props;
    }) => InProps;
    utilityClass?: (slot: string) => string;
    slotClasses?: (ownerState: O) => S;
    /**
     * @default true
     */
    autoCallUseClasses?: boolean;
  }) {
    function useClasses(ownerState: O) {
      const haveSlotClasses = !!options.slotClasses;

      const compose = () => {
        if (!options.slotClasses)
          throw new Error(`'slotClasses' option is not defined`);
        if (!options.utilityClass)
          throw new Error(`'utilityClass' option is not defined`);

        return composeClasses(
          options.slotClasses(ownerState),
          options.utilityClass,
          (ownerState as any)["classes"] ?? ""
        ) as { [K in keyof S]: string };
      };

      const classes: { [K in keyof S]: string } = createMutable({} as any);

      if (haveSlotClasses)
        createComputed(() => {
          const result = compose();
          batch(() => {
            for (const slot in result) classes[slot] = result[slot];
          });
        });

      return classes as Readonly<typeof classes>;
    }

    function useProps(input: {
      inProps: Props;
      propDefaults?: (data: {
        set: (props: InProps) => InProps;
        inProps: Props;
      }) => InProps;
    }) {
      const theme = useTheme();
      const set = (v: any) => v;
      const inProps = mergeProps(
        () =>
          options.propDefaults?.({
            set,
            theme,
            inProps: input.inProps ?? (inProps as any),
          }) ?? {},
        () => theme.components?.[options.name]?.defaultProps ?? {},
        input.inProps
      ) as InProps;
      const [props, otherProps] = splitProps(inProps, options.selfPropNames);
      return { allProps: inProps, props, otherProps };
    }

    function defineComponent(
      cb: (props: Props) => JSXElement
    ): C extends OverridableTypeMap ? OverridableComponent<C> : SuidElement<C> {
      cb.toString = () => `${options.name}-root`;
      return cb as any;
    }

    function component(
      cb: (data: {
        allProps: InProps;
        props: Pick<InProps, Exclude<keyof C["selfProps"], "sx">>;
        otherProps: Omit<InProps, Exclude<keyof C["selfProps"], "sx">>;
        classes: { [K in keyof S]: string };
      }) => JSXElement
    ): C extends OverridableTypeMap ? OverridableComponent<C> : SuidElement<C> {
      const Component = defineComponent(function Component(inProps) {
        const { allProps, otherProps, props } = useProps({
          inProps,
          propDefaults: options.propDefaults as any,
        });

        const classes =
          options.autoCallUseClasses ?? true
            ? useClasses(allProps as O)
            : ({} as any);

        return cb({
          allProps,
          otherProps,
          props,
          classes,
        });
      });
      Object.defineProperty(Component, "name", { value: cb.name });
      return Component;
    }

    return {
      name: options.name,
      selfPropNames: options.selfPropNames,
      component,
      useClasses,
    };
  };
}

export default createComponentFactory;
