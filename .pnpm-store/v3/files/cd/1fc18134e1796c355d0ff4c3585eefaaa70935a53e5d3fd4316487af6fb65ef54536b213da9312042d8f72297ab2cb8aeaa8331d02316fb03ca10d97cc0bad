export declare type HydrationContext = {
    id: string;
    count: number;
};
declare type SharedConfig = {
    context?: HydrationContext;
    resources?: {
        [key: string]: any;
    };
    load?: (id: string) => Promise<any> | undefined;
    gather?: (key: string) => void;
    registry?: Map<string, Element>;
};
export declare const sharedConfig: SharedConfig;
export declare function setHydrateContext(context?: HydrationContext): void;
export declare function nextHydrateContext(): HydrationContext | undefined;
export {};
