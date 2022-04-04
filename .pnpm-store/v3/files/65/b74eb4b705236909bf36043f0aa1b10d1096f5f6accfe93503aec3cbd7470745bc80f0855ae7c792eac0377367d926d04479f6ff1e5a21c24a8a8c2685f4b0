import { DeepMutable } from "./store";
export declare type ReconcileOptions = {
    key?: string | null;
    merge?: boolean;
};
export declare function reconcile<T extends U, U>(value: T, options?: ReconcileOptions): (state: U) => T;
export declare function produce<T>(fn: (state: DeepMutable<T>) => void): (state: T) => T;
