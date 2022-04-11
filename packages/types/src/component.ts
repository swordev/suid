import { OverridableTypeMap } from ".";
import { DoRequired } from "./misc";
import { DefaultComponentProps, OverridableComponent } from "./overridable";
import { ElementType } from "./solid";
import { ComponentProps as _ComponentProps, JSX } from "solid-js";

export {};

export interface SuidComponentType {
  props: {};
  name?: string;
  selfProps?: {};
  defaultPropNames?: string;
}

export interface SuidElement<M extends SuidComponentType> {
  (props: DefaultComponentProps<M>): JSX.Element;
}

export type InferPropsType<T> = T extends (props: infer PropsType) => any
  ? PropsType
  : T extends keyof JSX.IntrinsicElements
  ? JSX.IntrinsicElements[T]
  : never;

export type PropsOf<T> = T extends OverridableTypeMap
  ? DefaultComponentProps<T> & { component?: ElementType }
  : T extends SuidComponentType
  ? DefaultComponentProps<T>
  : T extends SuidElement<infer C1>
  ? DefaultComponentProps<C1>
  : T extends OverridableComponent<infer C2>
  ? DefaultComponentProps<C2> & { component?: ElementType }
  : T extends ElementType
  ? _ComponentProps<T>
  : unknown;

export type InPropsOf<T> = T extends OverridableTypeMap | SuidComponentType
  ? OverridableInProps<T>
  : T extends SuidElement<infer C1> | OverridableComponent<infer C1>
  ? OverridableInProps<C1>
  : T extends ElementType
  ? _ComponentProps<T>
  : unknown;

export type DefaultPropsOf<T> = T extends OverridableTypeMap | SuidComponentType
  ? OverridableDefaultProps<T>
  : T extends SuidElement<infer C1> | OverridableComponent<infer C1>
  ? OverridableDefaultProps<C1>
  : T extends ElementType
  ? _ComponentProps<T>
  : unknown;

export type OverridableDefaultProps<T> = DoRequired<
  Partial<
    DefaultComponentProps<T> &
      (T extends OverridableTypeMap ? { component: ElementType } : {})
  >,
  T extends { defaultPropNames: keyof DefaultComponentProps<T> }
    ? T["defaultPropNames"]
    : never
>;

export type OverridableInProps<T> = DoRequired<
  DefaultComponentProps<T> &
    (T extends OverridableTypeMap ? { component: ElementType } : {}),
  T extends { defaultPropNames: keyof DefaultComponentProps<T> }
    ? T["defaultPropNames"]
    : never
>;
