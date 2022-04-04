"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const cint_1 = __importDefault(require("cint"));
const semver_utils_1 = require("semver-utils");
const versionUtil = __importStar(require("../version-util"));
const getPreferredWildcard_1 = __importDefault(require("./getPreferredWildcard"));
const isUpgradeable_1 = __importDefault(require("./isUpgradeable"));
/**
 * Upgrade a dependencies collection based on latest available versions. Supports npm aliases.
 *
 * @param currentDependencies current dependencies collection object
 * @param latestVersions latest available versions collection object
 * @param [options={}]
 * @returns upgraded dependency collection object
 */
function upgradeDependencies(currentDependencies, latestVersions, options = {}) {
    // filter out dependencies with empty values
    currentDependencies = cint_1.default.filterObject(currentDependencies, (key, value) => !!value);
    // get the preferred wildcard and bind it to upgradeDependencyDeclaration
    const wildcard = (0, getPreferredWildcard_1.default)(currentDependencies) || versionUtil.DEFAULT_WILDCARD;
    /** Upgrades a single dependency. */
    const upgradeDep = (current, latest) => versionUtil.upgradeDependencyDeclaration(current, latest, {
        wildcard,
        removeRange: options.removeRange
    });
    return (0, lodash_1.default)(currentDependencies)
        // only include packages for which a latest version was fetched
        .pickBy((current, packageName) => packageName in latestVersions)
        // unpack npm alias and git urls
        .mapValues((current, packageName) => {
        const latest = latestVersions[packageName];
        let currentParsed = null;
        let latestParsed = null;
        // parse npm alias
        if (versionUtil.isNpmAlias(current)) {
            currentParsed = versionUtil.parseNpmAlias(current)[1];
            latestParsed = versionUtil.parseNpmAlias(latest)[1];
        }
        // "branch" is also used for tags (refers to everything after the hash character)
        if (versionUtil.isGithubUrl(current)) {
            const currentTag = versionUtil.getGithubUrlTag(current);
            const [currentSemver] = (0, semver_utils_1.parseRange)(currentTag);
            currentParsed = versionUtil.stringify(currentSemver);
            const latestTag = versionUtil.getGithubUrlTag(latest);
            const [latestSemver] = (0, semver_utils_1.parseRange)(latestTag);
            latestParsed = versionUtil.stringify(latestSemver);
        }
        return { current, currentParsed, latest, latestParsed };
    })
        // pick the packages that are upgradeable
        .pickBy(({ current, currentParsed, latest, latestParsed }) => (0, isUpgradeable_1.default)(currentParsed || current, latestParsed || latest))
        // pack embedded versions: npm aliases and git urls
        .mapValues(({ current, currentParsed, latest, latestParsed }) => {
        const upgraded = upgradeDep(currentParsed || current, latestParsed || latest);
        return versionUtil.isNpmAlias(current) ? versionUtil.upgradeNpmAlias(current, upgraded)
            : versionUtil.isGithubUrl(current) ? versionUtil.upgradeGithubUrl(current, upgraded)
                : upgraded;
    })
        // TODO: type
        .value();
}
exports.default = upgradeDependencies;
//# sourceMappingURL=upgradeDependencies.js.map