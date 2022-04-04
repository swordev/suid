import type { JSX } from "../jsx";
export declare function enableHydration(): void;
export declare type PropsWithChildren<P = {}> = P & {
    children?: JSX.Element;
};
export declare type Component<P = {}> = (props: PropsWithChildren<P>) => JSX.Element;
/**
 * Takes the props of the passed component and returns its type
 *
 * @example
 * ComponentProps<typeof Portal> // { mount?: Node; useShadow?: boolean; children: JSX.Element }
 * ComponentProps<'div'> // JSX.HTMLAttributes<HTMLDivElement>
 */
export declare type ComponentProps<T extends keyof JSX.IntrinsicElements | Component<any>> = T extends Component<infer P> ? P : T extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[T] : {};
export declare function createComponent<T>(Comp: (props: T) => JSX.Element, props: T): JSX.Element;
declare type UnboxLazy<T> = T extends () => infer U ? U : T;
declare type BoxedTupleTypes<T extends any[]> = {
    [P in keyof T]: [UnboxLazy<T[P]>];
}[Exclude<keyof T, keyof any[]>];
declare type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
declare type UnboxIntersection<T> = T extends {
    0: infer U;
} ? U : never;
declare type MergeProps<T extends any[]> = UnboxIntersection<UnionToIntersection<BoxedTupleTypes<T>>>;
export declare function mergeProps<T extends any[]>(...sources: T): MergeProps<T>;
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
export declare function lazy<T extends Component<any>>(fn: () => Promise<{
    default: T;
}>): T & {
    preload: () => Promise<{
        default: T;
    }>;
};
export declare function createUniqueId(): string;
export {};
