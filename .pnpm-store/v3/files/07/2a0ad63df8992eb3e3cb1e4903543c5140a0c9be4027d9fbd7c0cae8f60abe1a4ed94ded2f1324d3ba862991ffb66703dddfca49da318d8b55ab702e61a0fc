import { GetVersion, Options, SpawnOptions, YarnOptions } from '../types';
/**
 * Spawn yarn requires a different command on Windows.
 *
 * @param args
 * @param [yarnOptions={}]
 * @param [spawnOptions={}]
 * @returns
 */
declare function spawnYarn(args: string | string[], yarnOptions?: YarnOptions, spawnOptions?: SpawnOptions): Promise<string>;
/**
 * Get platform-specific default prefix to pass on to yarn.
 *
 * @param options
 * @param [options.global]
 * @param [options.prefix]
 * @returns
 */
export declare function defaultPrefix(options: Options): Promise<any>;
/**
 * @param [options]
 * @param [options.cwd]
 * @param [options.global]
 * @param [options.prefix]
 * @returns
 */
export declare const list: (options?: Options, spawnOptions?: SpawnOptions | undefined) => Promise<Index<R>>;
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
export declare const greatest: GetVersion;
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
export default spawnYarn;
