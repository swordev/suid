import { Index, Options, PackageFile, VersionSpec } from '../types';
declare type Run = (options?: Options) => Promise<PackageFile | Index<VersionSpec> | void>;
/** Iteratively installs upgrades and runs tests to identify breaking upgrades. */
declare const doctor: (run: Run, options: Options) => Promise<void>;
export default doctor;
