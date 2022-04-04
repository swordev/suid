import { hydrate as hydrateCore } from "./client";
import { Component, JSX, Accessor } from "../..";
export * from "./client";
export { For, Show, Suspense, SuspenseList, Switch, Match, Index, ErrorBoundary, mergeProps } from "../..";
export * from "./server-mock";
export declare const isServer = false;
export declare const hydrate: typeof hydrateCore;
/**
 * renders components somewhere else in the DOM
 *
 * Useful for inserting modals and tooltips outside of an cropping layout. If no mount point is given, the portal is inserted in document.body; it is wrapped in a `<div>` unless the target is document.head or `isSVG` is true. setting `useShadow` to true places the element in a shadow root to isolate styles.
 *
 * @description https://www.solidjs.com/docs/latest/api#%3Cportal%3E
 */
export declare function Portal(props: {
    mount?: Node;
    useShadow?: boolean;
    isSVG?: boolean;
    children: JSX.Element;
}): Text;
declare type DynamicProps<T> = T & {
    children?: any;
    component?: Component<T> | string | keyof JSX.IntrinsicElements;
};
/**
 * renders an arbitrary custom or native component and passes the other props
 * ```typescript
 * <Dynamic component={multiline() ? 'textarea' : 'input'} value={value()} />
 * ```
 * @description https://www.solidjs.com/docs/latest/api#%3Cdynamic%3E
 */
export declare function Dynamic<T>(props: DynamicProps<T>): Accessor<JSX.Element>;
