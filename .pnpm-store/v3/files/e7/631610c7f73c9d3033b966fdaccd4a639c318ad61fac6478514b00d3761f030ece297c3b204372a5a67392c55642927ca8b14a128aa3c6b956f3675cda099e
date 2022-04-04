import { Index, Maybe, Options, PackageFile, Version, VersionSpec } from '../types';
/**
 * Return a promise which resolves to object storing package owner changed status for each dependency.
 *
 * @param fromVersion current packages version.
 * @param toVersion target packages version.
 * @param options
 * @returns
 */
export declare function getOwnerPerDependency(fromVersion: Index<Version>, toVersion: Index<Version>, options: Options): Promise<Index<boolean>>;
/** Checks local project dependencies for upgrades. */
declare function runLocal(options: Options, pkgData?: Maybe<string>, pkgFile?: Maybe<string>): Promise<PackageFile | Index<VersionSpec>>;
export default runLocal;
