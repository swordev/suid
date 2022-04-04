import { Accessor } from "../..";
export declare const $RAW: unique symbol, $NODE: unique symbol, $NAME: unique symbol;
export declare type StoreNode = Record<PropertyKey, any>;
export declare namespace SolidStore {
    interface Unwrappable {
    }
}
export declare type NotWrappable = string | number | bigint | symbol | boolean | Function | null | undefined | SolidStore.Unwrappable[keyof SolidStore.Unwrappable];
export declare type Store<T> = DeepReadonly<T>;
export declare function isWrappable(obj: any): any;
export declare function unwrap<T extends StoreNode>(item: any, set?: Set<unknown>): T;
export declare function getDataNodes(target: StoreNode): any;
export declare function proxyDescriptor(target: StoreNode, property: PropertyKey): PropertyDescriptor | undefined;
export declare function ownKeys(target: StoreNode): (string | symbol)[];
export declare function createDataNode(): Accessor<void> & {
    $: () => void;
};
export declare function setProperty(state: StoreNode, property: PropertyKey, value: any): void;
export declare function updatePath(current: StoreNode, path: any[], traversed?: PropertyKey[]): void;
export declare type DeepReadonly<T> = 0 extends 1 & T ? T : T extends NotWrappable ? T : {
    readonly [K in keyof T]: T[K];
};
export declare type DeepMutable<T> = 0 extends 1 & T ? T : T extends NotWrappable ? T : {
    -readonly [K in keyof T]: T[K];
};
export declare type StorePathRange = {
    from?: number;
    to?: number;
    by?: number;
};
export declare type ArrayFilterFn<T> = (item: DeepReadonly<T>, index: number) => boolean;
export declare type StoreSetter<T, U extends PropertyKey[] = []> = ((prevState: DeepReadonly<T>, traversed: U) => T | Partial<T> | DeepReadonly<T> | Partial<DeepReadonly<T>> | void) | T | Partial<T> | DeepReadonly<T> | Partial<DeepReadonly<T>>;
export declare type Part<T, K extends KeyOf<T> = KeyOf<T>> = [K] extends [never] ? never : K | readonly K[] | ([T] extends [readonly unknown[]] ? ArrayFilterFn<T[number]> | StorePathRange : never);
declare type W<T> = Exclude<T, NotWrappable>;
declare type KeyOf<T> = number extends keyof T ? 0 extends 1 & T ? keyof T : [T] extends [readonly unknown[]] ? number : [T] extends [never] ? never : keyof T : keyof T;
declare type Rest<T, U extends PropertyKey[]> = [StoreSetter<T, U>] | (0 extends 1 & T ? [...Part<any>[], StoreSetter<any, PropertyKey[]>] : DistributeRest<W<T>, KeyOf<W<T>>, U>);
declare type DistributeRest<T, K, U extends PropertyKey[]> = [T] extends [never] ? never : K extends KeyOf<T> ? [Part<T, K>, ...Rest<T[K], [K, ...U]>] : never;
export interface SetStoreFunction<T> {
    <K1 extends KeyOf<W<T>>, K2 extends KeyOf<W<W<T>[K1]>>, K3 extends KeyOf<W<W<W<T>[K1]>[K2]>>, K4 extends KeyOf<W<W<W<W<T>[K1]>[K2]>[K3]>>, K5 extends KeyOf<W<W<W<W<W<T>[K1]>[K2]>[K3]>[K4]>>, K6 extends KeyOf<W<W<W<W<W<W<T>[K1]>[K2]>[K3]>[K4]>[K5]>>, K7 extends KeyOf<W<W<W<W<W<W<W<T>[K1]>[K2]>[K3]>[K4]>[K5]>[K6]>>>(k1: Part<W<T>, K1>, k2: Part<W<W<T>[K1]>, K2>, k3: Part<W<W<W<T>[K1]>[K2]>, K3>, k4: Part<W<W<W<W<T>[K1]>[K2]>[K3]>, K4>, k5: Part<W<W<W<W<W<T>[K1]>[K2]>[K3]>[K4]>, K5>, k6: Part<W<W<W<W<W<W<T>[K1]>[K2]>[K3]>[K4]>[K5]>, K6>, k7: Part<W<W<W<W<W<W<W<T>[K1]>[K2]>[K3]>[K4]>[K5]>[K6]>, K7>, ...rest: Rest<W<W<W<W<W<W<W<T>[K1]>[K2]>[K3]>[K4]>[K5]>[K6]>[K7], [K7, K6, K5, K4, K3, K2, K1]>): void;
    <K1 extends KeyOf<W<T>>, K2 extends KeyOf<W<W<T>[K1]>>, K3 extends KeyOf<W<W<W<T>[K1]>[K2]>>, K4 extends KeyOf<W<W<W<W<T>[K1]>[K2]>[K3]>>, K5 extends KeyOf<W<W<W<W<W<T>[K1]>[K2]>[K3]>[K4]>>, K6 extends KeyOf<W<W<W<W<W<W<T>[K1]>[K2]>[K3]>[K4]>[K5]>>>(k1: Part<W<T>, K1>, k2: Part<W<W<T>[K1]>, K2>, k3: Part<W<W<W<T>[K1]>[K2]>, K3>, k4: Part<W<W<W<W<T>[K1]>[K2]>[K3]>, K4>, k5: Part<W<W<W<W<W<T>[K1]>[K2]>[K3]>[K4]>, K5>, k6: Part<W<W<W<W<W<W<T>[K1]>[K2]>[K3]>[K4]>[K5]>, K6>, setter: StoreSetter<W<W<W<W<W<W<T>[K1]>[K2]>[K3]>[K4]>[K5]>[K6], [K6, K5, K4, K3, K2, K1]>): void;
    <K1 extends KeyOf<W<T>>, K2 extends KeyOf<W<W<T>[K1]>>, K3 extends KeyOf<W<W<W<T>[K1]>[K2]>>, K4 extends KeyOf<W<W<W<W<T>[K1]>[K2]>[K3]>>, K5 extends KeyOf<W<W<W<W<W<T>[K1]>[K2]>[K3]>[K4]>>>(k1: Part<W<T>, K1>, k2: Part<W<W<T>[K1]>, K2>, k3: Part<W<W<W<T>[K1]>[K2]>, K3>, k4: Part<W<W<W<W<T>[K1]>[K2]>[K3]>, K4>, k5: Part<W<W<W<W<W<T>[K1]>[K2]>[K3]>[K4]>, K5>, setter: StoreSetter<W<W<W<W<W<T>[K1]>[K2]>[K3]>[K4]>[K5], [K5, K4, K3, K2, K1]>): void;
    <K1 extends KeyOf<W<T>>, K2 extends KeyOf<W<W<T>[K1]>>, K3 extends KeyOf<W<W<W<T>[K1]>[K2]>>, K4 extends KeyOf<W<W<W<W<T>[K1]>[K2]>[K3]>>>(k1: Part<W<T>, K1>, k2: Part<W<W<T>[K1]>, K2>, k3: Part<W<W<W<T>[K1]>[K2]>, K3>, k4: Part<W<W<W<W<T>[K1]>[K2]>[K3]>, K4>, setter: StoreSetter<W<W<W<W<T>[K1]>[K2]>[K3]>[K4], [K4, K3, K2, K1]>): void;
    <K1 extends KeyOf<W<T>>, K2 extends KeyOf<W<W<T>[K1]>>, K3 extends KeyOf<W<W<W<T>[K1]>[K2]>>>(k1: Part<W<T>, K1>, k2: Part<W<W<T>[K1]>, K2>, k3: Part<W<W<W<T>[K1]>[K2]>, K3>, setter: StoreSetter<W<W<W<T>[K1]>[K2]>[K3], [K3, K2, K1]>): void;
    <K1 extends KeyOf<W<T>>, K2 extends KeyOf<W<W<T>[K1]>>>(k1: Part<W<T>, K1>, k2: Part<W<W<T>[K1]>, K2>, setter: StoreSetter<W<W<T>[K1]>[K2], [K2, K1]>): void;
    <K1 extends KeyOf<W<T>>>(k1: Part<W<T>, K1>, setter: StoreSetter<W<T>[K1], [K1]>): void;
    (setter: StoreSetter<T, []>): void;
}
/**
 * creates a reactive store that can be read through a proxy object and written with a setter function
 *
 * @description https://www.solidjs.com/docs/latest/api#createstore
 */
export declare function createStore<T extends StoreNode>(store: T | Store<T>, options?: {
    name?: string;
}): [get: Store<T>, set: SetStoreFunction<T>];
export {};
