import { Index, PackageFile, RunOptions, VersionSpec } from './types';
/** Main entry point.
 *
 * @returns Promise<
 * PackageFile                    Default returns upgraded package file.
 * | Index<VersionSpec>    --jsonUpgraded returns only upgraded dependencies.
 * | void                         --global upgrade returns void.
 * >
 */
export declare function run(runOptions?: RunOptions, { cli }?: {
    cli?: boolean;
}): Promise<PackageFile | Index<VersionSpec> | void>;
export default run;
