import { GetVersion, Index, Options, NpmOptions, Packument, Version, VersionSpec } from '../types';
/**
 * Check if package author changed between current and upgraded version.
 *
 * @param packageName Name of the package
 * @param currentVersion Current version declaration (may be range)
 * @param upgradedVersion Upgraded version declaration (may be range)
 * @param npmConfigLocal Additional npm config variables that are merged into the system npm config
 * @returns A promise that fullfills with boolean value.
 */
export declare function packageAuthorChanged(packageName: string, currentVersion: VersionSpec, upgradedVersion: VersionSpec, options?: Options, npmConfigLocal?: Index<string | boolean>): Promise<boolean>;
/**
 * Returns an object of specified values retrieved by npm view.
 *
 * @param packageName   Name of the package
 * @param fields        Array of fields like versions, time, version
 * @param               currentVersion
 * @returns             Promised result
 */
export declare function viewMany(packageName: string, fields: string[], currentVersion: Version, { registry, timeout, retry }?: {
    registry?: string;
    timeout?: number;
    retry?: number;
}, retryed?: number, npmConfigLocal?: Index<string | boolean>): Promise<Packument>;
/** Memoize viewMany for --deep performance. */
export declare const viewManyMemoized: typeof viewMany;
/**
 * Returns the value of one of the properties retrieved by npm view.
 *
 * @param packageName   Name of the package
 * @param field         Field such as "versions" or "dist-tags.latest" are parsed from the pacote result (https://www.npmjs.com/package/pacote#packument)
 * @param currentVersion
 * @returns            Promised result
 */
export declare function viewOne(packageName: string, field: string, currentVersion: Version, options?: Options, npmConfigLocal?: Index<string | boolean>): Promise<string | boolean | Index<string> | {
    node: string;
} | Packument[] | undefined>;
/**
 * Spawn npm requires a different command on Windows.
 *
 * @param args
 * @param [npmOptions={}]
 * @param [spawnOptions={}]
 * @returns
 */
declare function spawnNpm(args: string | string[], npmOptions?: NpmOptions, spawnOptions?: {}): any;
/**
 * Get platform-specific default prefix to pass on to npm.
 *
 * @param options
 * @param [options.global]
 * @param [options.prefix]
 * @returns
 */
export declare function defaultPrefix(options: Options): Promise<string | undefined>;
/**
 * @param packageName
 * @param currentVersion
 * @param options
 * @returns
 */
export declare const greatest: GetVersion;
/**
 * Requests the list of peer dependencies for a specific package version
 *
 * @param packageName
 * @param version
 * @returns Promised {packageName: version} collection
 */
export declare const getPeerDependencies: (packageName: string, version: Version) => Promise<Index<Version>>;
/**
 * @param [options]
 * @param [options.cwd]
 * @param [options.global]
 * @param [options.prefix]
 * @returns
 */
export declare const list: (options?: Options) => Promise<Index<R>>;
/**
 * @param packageName
 * @param currentVersion
 * @param options
 * @returns
 */
export declare const latest: GetVersion;
/**
 * @param packageName
 * @param currentVersion
 * @param options
 * @returns
 */
export declare const newest: GetVersion;
/**
 * @param packageName
 * @param currentVersion
 * @param options
 * @returns
 */
export declare const minor: GetVersion;
/**
 * @param packageName
 * @param currentVersion
 * @param options
 * @returns
 */
export declare const patch: GetVersion;
export default spawnNpm;
