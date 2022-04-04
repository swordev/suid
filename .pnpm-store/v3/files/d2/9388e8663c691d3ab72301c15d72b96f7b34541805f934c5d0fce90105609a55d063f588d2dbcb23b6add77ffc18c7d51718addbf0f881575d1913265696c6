"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const cint_1 = __importDefault(require("cint"));
const chalk_1 = __importDefault(require("chalk"));
const p_map_1 = __importDefault(require("p-map"));
const progress_1 = __importDefault(require("progress"));
const semver_utils_1 = require("semver-utils");
const constants_1 = require("../constants");
const getPackageManager_1 = __importDefault(require("./getPackageManager"));
const package_managers_1 = __importDefault(require("../package-managers"));
const version_util_1 = require("../version-util");
/**
 * Get the latest or greatest versions from the NPM repository based on the version target.
 *
 * @param packageMap   An object whose keys are package name and values are current versions. May include npm aliases, i.e. { "package": "npm:other-package@1.0.0" }
 * @param [options={}] Options. Default: { target: 'latest' }.
 * @returns Promised {packageName: version} collection
 */
async function queryVersions(packageMap, options = {}) {
    const target = options.target || 'latest';
    const packageList = Object.keys(packageMap);
    const packageManager = (0, getPackageManager_1.default)(options.packageManager);
    let bar;
    if (!options.json && options.loglevel !== 'silent' && options.loglevel !== 'verbose' && packageList.length > 0) {
        bar = new progress_1.default('[:bar] :current/:total :percent', { total: packageList.length, width: 20 });
        bar.render();
    }
    /**
     * Ignore 404 errors from getPackageVersion by having them return `null`
     * instead of rejecting.
     *
     * @param dep
     * @returns
     */
    async function getPackageVersionProtected(dep) {
        var _a;
        const npmAlias = (0, version_util_1.parseNpmAlias)(packageMap[dep]);
        const [name, version] = npmAlias || [dep, packageMap[dep]];
        const targetResult = typeof target === 'string' ? target : target(name, (0, semver_utils_1.parseRange)(version));
        let versionNew = null;
        // use gitTags package manager for git urls
        if ((0, version_util_1.isGithubUrl)(packageMap[dep])) {
            // override packageManager and getPackageVersion just for this dependency
            const packageManager = package_managers_1.default.gitTags;
            const getPackageVersion = packageManager[targetResult];
            if (!getPackageVersion) {
                const packageManagerSupportedVersionTargets = constants_1.supportedVersionTargets.filter(t => t in packageManager);
                return Promise.reject(new Error(`Unsupported target "${targetResult}" for github urls. Supported version targets are: ${packageManagerSupportedVersionTargets.join(', ')}`));
            }
            versionNew = await getPackageVersion(name, version, {
                ...options,
                // upgrade prereleases to newer prereleases by default
                pre: options.pre != null ? options.pre : (0, version_util_1.isPre)(version),
            });
        }
        else {
            // set the getPackageVersion function from options.target
            // TODO: Remove "as GetVersion" and fix types
            const getPackageVersion = packageManager[targetResult];
            if (!getPackageVersion) {
                const packageManagerSupportedVersionTargets = constants_1.supportedVersionTargets.filter(t => t in packageManager);
                return Promise.reject(new Error(`Unsupported target "${targetResult}" for ${options.packageManager || 'npm'}. Supported version targets are: ${packageManagerSupportedVersionTargets.join(', ')}`));
            }
            try {
                versionNew = await getPackageVersion(name, version, {
                    ...options,
                    // upgrade prereleases to newer prereleases by default
                    pre: options.pre != null ? options.pre : (0, version_util_1.isPre)(version),
                    retry: (_a = options.retry) !== null && _a !== void 0 ? _a : 2,
                });
                versionNew = npmAlias && versionNew ? (0, version_util_1.createNpmAlias)(name, versionNew) : versionNew;
            }
            catch (err) {
                const errorMessage = err ? (err.message || err).toString() : '';
                if (!errorMessage.match(/E404|ENOTFOUND|404 Not Found/i)) {
                    // print a hint about the --timeout option for network timeout errors
                    if (!process.env.NCU_TESTS && /(Response|network) timeout/i.test(errorMessage)) {
                        console.error('\n\n' + chalk_1.default.red('FetchError: Request Timeout. npm-registry-fetch defaults to 30000 (30 seconds). Try setting the --timeout option (in milliseconds) to override this.') + '\n');
                    }
                    throw err;
                }
            }
        }
        if (bar) {
            bar.tick();
        }
        return versionNew;
    }
    /**
     * Zip up the array of versions into to a nicer object keyed by package name.
     *
     * @param versionList
     * @returns
     */
    const zipVersions = (versionList) => cint_1.default.toObject(versionList, (version, i) => ({
        [packageList[i]]: version
    }));
    const versions = await (0, p_map_1.default)(packageList, getPackageVersionProtected, { concurrency: options.concurrency });
    return lodash_1.default.pickBy(zipVersions(versions), lodash_1.default.identity);
}
exports.default = queryVersions;
//# sourceMappingURL=queryVersions.js.map