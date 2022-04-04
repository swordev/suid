import { Setter } from "./reactive";
import type { JSX } from "../jsx";
declare type PropsWithChildren<P> = P & {
    children?: JSX.Element;
};
export declare type Component<P = {}> = (props: PropsWithChildren<P>) => JSX.Element;
declare type PossiblyWrapped<T> = {
    [P in keyof T]: T[P] | (() => T[P]);
};
declare type SharedConfig = {
    context?: HydrationContext;
};
export declare const sharedConfig: SharedConfig;
export declare function createUniqueId(): string;
export declare function createComponent<T>(Comp: (props: T) => JSX.Element, props: PossiblyWrapped<T>): JSX.Element;
export declare function mergeProps<T, U>(source: T, source1: U): T & U;
export declare function mergeProps<T, U, V>(source: T, source1: U, source2: V): T & U & V;
export declare function mergeProps<T, U, V, W>(source: T, source1: U, source2: V, source3: W): T & U & V & W;
export declare function splitProps<T extends object, K1 extends keyof T>(props: T, ...keys: [K1[]]): [Pick<T, K1>, Omit<T, K1>];
export declare function splitProps<T extends object, K1 extends keyof T, K2 extends keyof T>(props: T, ...keys: [K1[], K2[]]): [Pick<T, K1>, Pick<T, K2>, Omit<T, K1 | K2>];
export declare function splitProps<T extends object, K1 extends keyof T, K2 extends keyof T, K3 extends keyof T>(props: T, ...keys: [K1[], K2[], K3[]]): [Pick<T, K1>, Pick<T, K2>, Pick<T, K3>, Omit<T, K1 | K2 | K3>];
export declare function splitProps<T extends object, K1 extends keyof T, K2 extends keyof T, K3 extends keyof T, K4 extends keyof T>(props: T, ...keys: [K1[], K2[], K3[], K4[]]): [Pick<T, K1>, Pick<T, K2>, Pick<T, K3>, Pick<T, K4>, Omit<T, K1 | K2 | K3 | K4>];
export declare function splitProps<T extends object, K1 extends keyof T, K2 extends keyof T, K3 extends keyof T, K4 extends keyof T, K5 extends keyof T>(props: T, ...keys: [K1[], K2[], K3[], K4[], K5[]]): [
    Pick<T, K1>,
    Pick<T, K2>,
    Pick<T, K3>,
    Pick<T, K4>,
    Pick<T, K5>,
    Omit<T, K1 | K2 | K3 | K4 | K5>
];
export declare function For<T>(props: {
    each: T[];
    fallback?: string;
    children: (item: T, index: () => number) => string;
}): string | {
    t: string;
};
export declare function Index<T>(props: {
    each: T[];
    fallback?: string;
    children: (item: () => T, index: number) => string;
}): string | {
    t: string;
};
export declare function Show<T>(props: {
    when: T | false;
    fallback?: string;
    children: string | ((item: T) => string);
}): string;
export declare function Switch(props: {
    fallback?: string;
    children: MatchProps<unknown> | MatchProps<unknown>[];
}): string;
declare type MatchProps<T> = {
    when: T | false;
    children: string | ((item: T) => string);
};
export declare function Match<T>(props: MatchProps<T>): MatchProps<T>;
export declare function resetErrorBoundaries(): void;
export declare function ErrorBoundary(props: {
    fallback: string | ((err: any, reset: () => void) => string);
    children: string;
}): any;
export interface Resource<T> {
    (): T | undefined;
    loading: boolean;
    error: any;
}
declare type SuspenseContextType = {
    resources: Map<string, {
        loading: boolean;
        error: any;
    }>;
    completed: () => void;
};
export declare type ResourceActions<T> = {
    mutate: Setter<T>;
    refetch: (info?: unknown) => void;
};
export declare type ResourceReturn<T> = [Resource<T>, ResourceActions<T>];
export declare type ResourceSource<S> = S | false | null | undefined | (() => S | false | null | undefined);
export declare type ResourceFetcher<S, T> = (k: S, info: ResourceFetcherInfo<T>) => T | Promise<T>;
export declare type ResourceFetcherInfo<T> = {
    value: T | undefined;
    refetching?: unknown;
};
export declare type ResourceOptions<T> = undefined extends T ? {
    initialValue?: T;
    name?: string;
    globalRefetch?: boolean;
    onHydrated?: <S, T>(k: S, info: ResourceFetcherInfo<T>) => void;
} : {
    initialValue: T;
    name?: string;
    globalRefetch?: boolean;
    onHydrated?: <S, T>(k: S, info: ResourceFetcherInfo<T>) => void;
};
export declare function createResource<T, S = true>(fetcher: ResourceFetcher<S, T>, options?: ResourceOptions<undefined>): ResourceReturn<T | undefined>;
export declare function createResource<T, S = true>(fetcher: ResourceFetcher<S, T>, options: ResourceOptions<T>): ResourceReturn<T>;
export declare function createResource<T, S>(source: ResourceSource<S>, fetcher: ResourceFetcher<S, T>, options?: ResourceOptions<undefined>): ResourceReturn<T | undefined>;
export declare function createResource<T, S>(source: ResourceSource<S>, fetcher: ResourceFetcher<S, T>, options: ResourceOptions<T>): ResourceReturn<T>;
export declare function refetchResources(info?: unknown): void;
export declare function lazy(fn: () => Promise<{
    default: any;
}>): (props: any) => string;
export declare function enableScheduling(): void;
export declare function enableHydration(): void;
export declare function startTransition(fn: () => any): void;
export declare function useTransition(): [() => boolean, (fn: () => any) => void];
declare type HydrationContext = {
    id: string;
    count: number;
    writeResource?: (id: string, v: Promise<any> | any, error?: boolean) => void;
    resources: Record<string, any>;
    suspense: Record<string, SuspenseContextType>;
    registerFragment: (v: string) => (v?: string, err?: any) => boolean;
    async?: boolean;
    streaming?: boolean;
    noHydrate: boolean;
};
export declare function SuspenseList(props: {
    children: string;
    revealOrder: "forwards" | "backwards" | "together";
    tail?: "collapsed" | "hidden";
}): string;
export declare function Suspense(props: {
    fallback?: string;
    children: string;
}): any;
export {};
