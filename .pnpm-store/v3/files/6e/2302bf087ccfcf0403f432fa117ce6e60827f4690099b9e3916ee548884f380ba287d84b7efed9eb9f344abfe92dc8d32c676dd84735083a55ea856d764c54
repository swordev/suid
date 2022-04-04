/** Fetches package metadata from Github tags. */
import { Options, VersionSpec, VersionLevel } from '../types';
/** Return the highest non-prerelease numbered tag on a remote Git URL. */
export declare const latest: (name: string, declaration: VersionSpec, options: Options) => Promise<string | null>;
/** Return the highest numbered tag on a remote Git URL. */
export declare const greatest: (name: string, declaration: VersionSpec, options: Options) => Promise<string | null>;
/** Returns a function that returns the highest version at the given level. */
export declare const greatestLevel: (level: VersionLevel) => (name: string, declaration: VersionSpec, options?: Options) => Promise<string | null>;
export declare const minor: (name: string, declaration: VersionSpec, options?: Options) => Promise<string | null>;
export declare const patch: (name: string, declaration: VersionSpec, options?: Options) => Promise<string | null>;
export declare const newest: (name: string, declaration: VersionSpec, options: Options) => Promise<string | null>;
