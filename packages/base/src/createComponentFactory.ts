import composeClasses from "./composeClasses";
import useBaseThemeProps, {
  PropDefaultsCb,
  ThemePropOptions,
} from "./useThemeProps";
import { componentTrap } from "@suid/system/inspect";
import {
  InPropsOf,
  PropsOf,
  OverridableComponent,
  OverridableTypeMap,
  SuidComponentType,
  SuidElement,
} from "@suid/types";
import { batch, createComputed, JSXElement, splitProps } from "solid-js";
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
    propDefaults?: PropDefaultsCb<C>;
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

    function splitInProps(allProps: InPropsOf<C>) {
      const [props, otherProps] = splitProps(allProps, options.selfPropNames);
      return { allProps, props, otherProps };
    }

    function useThemeProps(input: Omit<ThemePropOptions<C>, "name">) {
      return useBaseThemeProps({
        propDefaults: input.propDefaults || options.propDefaults,
        props: input.props,
        name: options.name,
      });
    }

    function useProps(props: PropsOf<C>) {
      const themeProps = useThemeProps({ props });
      return splitInProps(themeProps);
    }

    function defineComponent(
      cb: (props: Props) => JSXElement,
      styled = true
    ): C extends OverridableTypeMap ? OverridableComponent<C> : SuidElement<C> {
      cb = componentTrap(cb) as any;
      cb.toString = () => `.${options.name}-root`;
      if (styled) (cb as any).__styled = true;
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
        const { allProps, otherProps, props } = useProps(inProps);
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
      defineComponent,
      useClasses,
      useThemeProps,
      useProps,
      splitInProps,
    };
  };
}

export default createComponentFactory;
