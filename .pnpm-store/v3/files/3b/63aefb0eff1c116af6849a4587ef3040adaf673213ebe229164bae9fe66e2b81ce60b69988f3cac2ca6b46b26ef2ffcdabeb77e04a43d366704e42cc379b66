import { Accessor, Setter } from "./signal";
export declare type ObservableObserver<T> = ((v: T) => void) | {
    next: (v: T) => void;
    error?: (v: any) => void;
    complete?: (v: boolean) => void;
};
/**
 * creates a simple observable from a signal's accessor to be used with the `from` operator of observable libraries like e.g. rxjs
 * ```typescript
 * import { from } from "rxjs";
 * const [s, set] = createSignal(0);
 * const obsv$ = from(observable(s));
 * obsv$.subscribe((v) => console.log(v));
 * ```
 * description https://www.solidjs.com/docs/latest/api#observable
 */
export declare function observable<T>(input: Accessor<T>): {
    [x: number]: () => any;
    subscribe(observer: ObservableObserver<T>): {
        unsubscribe(): void;
    };
};
export declare function from<T>(producer: ((setter: Setter<T>) => () => void) | {
    subscribe: (fn: (v: T) => void) => (() => void) | {
        unsubscribe: () => void;
    };
}): Accessor<T>;
