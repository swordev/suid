export { createRoot, createSignal, createEffect, createRenderEffect, createComputed, createReaction, createDeferred, createSelector, createMemo, createResource, onMount, onCleanup, onError, untrack, batch, on, enableScheduling, enableExternalSource, startTransition, useTransition, refetchResources, createContext, useContext, children, getListener, getOwner, runWithOwner, equalFn, $DEVCOMP, $PROXY } from "./reactive/signal";
export type { Accessor, Setter, Signal, Resource, ResourceReturn, ResourceFetcher, ResourceFetcherInfo, Context, ReturnTypes } from "./reactive/signal";
export * from "./reactive/observable";
export * from "./reactive/scheduler";
export * from "./reactive/array";
export * from "./render";
import type { JSX } from "./jsx";
declare type JSXElement = JSX.Element;
export type { JSXElement, JSX };
import { writeSignal, serializeGraph, registerGraph, hashValue } from "./reactive/signal";
declare let DEV: {
    writeSignal: typeof writeSignal;
    serializeGraph: typeof serializeGraph;
    registerGraph: typeof registerGraph;
    hashValue: typeof hashValue;
};
export { DEV };
declare global {
    var Solid$$: boolean;
}
