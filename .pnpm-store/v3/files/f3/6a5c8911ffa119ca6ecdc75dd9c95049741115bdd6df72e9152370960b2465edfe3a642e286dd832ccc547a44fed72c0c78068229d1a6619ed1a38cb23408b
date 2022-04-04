"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upgradePackageDefinitions = void 0;
const lodash_1 = __importDefault(require("lodash"));
const semver_1 = require("semver");
const getPeerDependenciesFromRegistry_1 = __importDefault(require("./getPeerDependenciesFromRegistry"));
const queryVersions_1 = __importDefault(require("./queryVersions"));
const upgradeDependencies_1 = __importDefault(require("./upgradeDependencies"));
/**
 * Returns an 3-tuple of upgradedDependencies, their latest versions and the resulting peer dependencies.
 *
 * @param currentDependencies
 * @param options
 * @returns
 */
async function upgradePackageDefinitions(currentDependencies, options) {
    const latestVersions = await (0, queryVersions_1.default)(currentDependencies, options);
    const upgradedDependencies = (0, upgradeDependencies_1.default)(currentDependencies, latestVersions, {
        removeRange: options.removeRange
    });
    const filteredUpgradedDependencies = lodash_1.default.pickBy(upgradedDependencies, (v, dep) => {
        return !options.jsonUpgraded || !options.minimal || !(0, semver_1.satisfies)(latestVersions[dep], currentDependencies[dep]);
    });
    if (options.peer && !lodash_1.default.isEmpty(filteredUpgradedDependencies)) {
        const upgradedPeerDependencies = await (0, getPeerDependenciesFromRegistry_1.default)(filteredUpgradedDependencies, options);
        const peerDependencies = { ...options.peerDependencies, ...upgradedPeerDependencies };
        if (!lodash_1.default.isEqual(options.peerDependencies, peerDependencies)) {
            const [newUpgradedDependencies, newLatestVersions, newPeerDependencies] = await upgradePackageDefinitions({ ...currentDependencies, ...filteredUpgradedDependencies }, { ...options, peerDependencies, loglevel: 'silent' });
            return [
                { ...filteredUpgradedDependencies, ...newUpgradedDependencies },
                { ...latestVersions, ...newLatestVersions },
                newPeerDependencies
            ];
        }
    }
    return [filteredUpgradedDependencies, latestVersions, options.peerDependencies];
}
exports.upgradePackageDefinitions = upgradePackageDefinitions;
exports.default = upgradePackageDefinitions;
//# sourceMappingURL=upgradePackageDefinitions.js.map