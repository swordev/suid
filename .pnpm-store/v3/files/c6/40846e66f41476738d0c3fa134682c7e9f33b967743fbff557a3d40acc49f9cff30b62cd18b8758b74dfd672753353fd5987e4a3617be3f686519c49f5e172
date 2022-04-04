import { Index, Options, Version, VersionSpec } from '../types';
/**
 * Upgrade the dependency declarations in the package data.
 *
 * @param pkgData The package.json data, as utf8 text
 * @param oldDependencies Old dependencies {package: range}
 * @param newDependencies New dependencies {package: range}
 * @param newVersions New versions {package: version}
 * @param [options={}]
 * @returns The updated package data, as utf8 text
 * @description Side Effect: prompts
 */
declare function upgradePackageData(pkgData: string, oldDependencies: Index<VersionSpec>, newDependencies: Index<VersionSpec>, newVersions: Index<Version>, options?: Options): Promise<{
    newPkgData: string;
    selectedNewDependencies: {
        [x: string]: string;
    };
}>;
export default upgradePackageData;
