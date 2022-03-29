import composeClasses from "./composeClasses";
import { Theme } from "@suid/system/createTheme";
import useTheme from "@suid/system/useTheme";
import {
  ComponentDefaultProps,
  ComponentInProps,
  ComponentProps,
  OverridableComponent,
  OverridableTypeMap,
  SuidComponentType,
  SuidElement,
} from "@suid/types";
import { createEffect, JSXElement, mergeProps, splitProps } from "solid-js";
import { createMutable } from "solid-js/store";

function createComponentFactory<
  C extends SuidComponentType,
  O = ComponentInProps<C>
>() {
  type Props = ComponentProps<C>;
  type InProps = ComponentInProps<C>;
  return function <S extends Record<string, (string | false)[]>>(options: {
    name: NonNullable<C["name"]>;
    selfPropNames: Exclude<keyof C["selfProps"], "sx">[];
    propDefaults?: (data: {
      set: (props: Omit<ComponentDefaultProps<C>, "children">) => InProps;
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

      const classes: { [K in keyof S]: string } = createMutable(
        haveSlotClasses ? compose() : ({} as any)
      );

      if (haveSlotClasses)
        createEffect(() => {
          const result = compose();
          for (const slot in result) classes[slot] = result[slot];
        });

      return classes;
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
