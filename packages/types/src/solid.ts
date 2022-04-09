/**
 * @source https://github.com/DefinitelyTyped/DefinitelyTyped/blob/3198434bf6a22f1a541e065ff54564a9a72aff69/types/react/index.d.ts
 */
import { JSX, Component, ComponentProps } from "solid-js";

export {};

export type ElementType = Component<any> | keyof JSX.IntrinsicElements;

export type Ref<T> = ((ref: T) => void) | null;

export interface RefAttributes<T> {
  ref?: Ref<T> | undefined;
}

/** Ensures that the props do not include ref at all */
export type PropsWithoutRef<P> =
  // Pick would not be sufficient for this. We'd like to avoid unnecessary mapping and need a distributive conditional to support unions.
  // see: https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types
  // https://github.com/Microsoft/TypeScript/issues/28339
  P extends any
    ? "ref" extends keyof P
      ? Pick<P, Exclude<keyof P, "ref">>
      : P
    : P;

/** Ensures that the props do not include string ref, which cannot be forwarded */
export type PropsWithRef<P> =
  // Just "P extends { ref?: infer R }" looks sufficient, but R will infer as {} if P is {}.
  "ref" extends keyof P
    ? P extends { ref?: infer R | undefined }
      ? string extends R
        ? PropsWithoutRef<P> & { ref?: Exclude<R, string> | undefined }
        : P
      : P
    : P;

export type ComponentPropsWithRef<T extends ElementType> = PropsWithRef<
  ComponentProps<T>
>;

export type JSXElementConstructor<P> = (props: P) => JSX.Element | null;
