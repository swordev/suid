import { SuidComponentType } from ".";
import { ComponentPropsWithRef, ElementType } from "./solid";
import { JSX } from "solid-js";

export {};

/**
 * Remove properties `K` from `T`.
 * Distributive for union types.
 *
 * @internal
 */
export type DistributiveOmit<T, K extends keyof any> = T extends any
  ? Omit<T, K>
  : never;

/**
 * Generate a set of string literal types with the given default record `T` and
 * override record `U`.
 *
 * If the property value was `true`, the property key will be added to the
 * string union.
 *
 * @internal
 */
export type OverridableStringUnion<
  T extends string | number,
  U = {}
> = GenerateStringUnion<Overwrite<Record<T, true>, U>>;

/**
 * Like `T & U`, but using the value types from `U` where their properties overlap.
 *
 * @internal
 */
export type Overwrite<T, U> = DistributiveOmit<T, keyof U> & U;

type GenerateStringUnion<T> = Extract<
  {
    [Key in keyof T]: true extends T[Key] ? Key : never;
  }[keyof T],
  string
>;

/**
 * A component whose root component can be controlled via a `component` prop.
 *
 * Adjusts valid props based on the type of `component`.
 */
export interface OverridableComponent<M extends OverridableTypeMap> {
  <C extends ElementType>(
    props: {
      /**
       * The component used for the root node.
       * Either a string to use a HTML element or a component.
       */
      component: C;
    } & OverrideProps<M, C>
  ): JSX.Element;
  (props: DefaultComponentProps<M>): JSX.Element;
  __suid: string;
}

/**
 * Props of the component if `component={Component}` is used.
 */
export type OverrideProps<
  M extends OverridableTypeMap,
  C extends ElementType
> = BaseProps<M> &
  DistributiveOmit<ComponentPropsWithRef<C>, keyof BaseProps<M>>;

/**
 * Props if `component={Component}` is NOT used.
 */
export type DefaultComponentProps<M> = M extends OverridableTypeMap
  ? BaseProps<M> &
      DistributiveOmit<
        ComponentPropsWithRef<M["defaultComponent"]>,
        keyof BaseProps<M>
      >
  : M extends SuidComponentType
  ? BaseProps<M>
  : never;

/**
 * Props defined on the component.
 */
export type BaseProps<M extends SuidComponentType> = M["props"] & CommonProps;
export interface CommonProps {
  class?: string;
  as?: ElementType;
}

export interface OverridableTypeMap extends SuidComponentType {
  defaultComponent: ElementType;
}
