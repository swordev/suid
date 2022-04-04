"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIgnoredUpgrades = void 0;
const semver_1 = require("semver");
const upgradePackageDefinitions_1 = __importDefault(require("./upgradePackageDefinitions"));
/** Get all upgrades that are ignored due to incompatible peer dependencies. */
async function getIgnoredUpgrades(current, upgraded, upgradedPeerDependencies, options = {}) {
    const [upgradedLatestVersions, latestVersions] = await (0, upgradePackageDefinitions_1.default)(current, { ...options, peer: false, peerDependencies: undefined, loglevel: 'silent' });
    return Object.entries(upgradedLatestVersions)
        .filter(([pkgName, newVersion]) => upgraded[pkgName] !== newVersion)
        .reduce((accum, [pkgName, newVersion]) => ({
        ...accum,
        [pkgName]: {
            from: current[pkgName],
            to: newVersion,
            reason: Object.entries(upgradedPeerDependencies)
                .filter(([, peers]) => peers[pkgName] !== undefined && !(0, semver_1.satisfies)(latestVersions[pkgName], peers[pkgName]))
                .reduce((accumReason, [peerPkg, peers]) => ({ ...accumReason, [peerPkg]: peers[pkgName] }), {})
        }
    }), {});
}
exports.getIgnoredUpgrades = getIgnoredUpgrades;
exports.default = getIgnoredUpgrades;
//# sourceMappingURL=getIgnoredUpgrades.js.map