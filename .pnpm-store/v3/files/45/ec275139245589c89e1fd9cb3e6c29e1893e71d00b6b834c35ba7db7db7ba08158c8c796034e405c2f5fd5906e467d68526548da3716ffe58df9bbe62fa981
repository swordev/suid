import type { LocationChange, LocationChangeSignal, RouterIntegration, RouterUtils } from "./types";
export declare function createIntegration(get: () => string | LocationChange, set: (next: LocationChange) => void, init?: (notify: (value?: string | LocationChange) => void) => () => void, utils?: Partial<RouterUtils>): RouterIntegration;
export declare function normalizeIntegration(integration: RouterIntegration | LocationChangeSignal | undefined): RouterIntegration;
export declare function staticIntegration(obj: LocationChange): RouterIntegration;
export declare function pathIntegration(): RouterIntegration;
export declare function hashIntegration(): RouterIntegration;
