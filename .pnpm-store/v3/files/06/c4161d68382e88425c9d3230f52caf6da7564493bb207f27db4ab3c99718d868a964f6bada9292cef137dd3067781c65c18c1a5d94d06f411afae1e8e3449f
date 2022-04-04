import type { Params, PathMatch, Route, SetParams } from "./types";
export declare function resolvePath(base: string, path: string, from?: string): string | undefined;
export declare function invariant<T>(value: T | null | undefined, message: string): T;
export declare function joinPaths(from: string, to: string): string;
export declare function extractSearchParams(url: URL): Params;
export declare function createMatcher(path: string, partial?: boolean): (location: string) => PathMatch | null;
export declare function scoreRoute(route: Route): number;
export declare function createMemoObject<T extends Record<string | symbol, unknown>>(fn: () => T): T;
export declare function mergeSearchString(search: string, params: SetParams): string;
