"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompts_1 = __importDefault(require("prompts"));
const semver_1 = require("semver");
const version_util_1 = require("../version-util");
/**
 * @returns String safe for use in `new RegExp()`
 */
function escapeRegexp(s) {
    return s.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'); // Thanks Stack Overflow!
}
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
async function upgradePackageData(pkgData, oldDependencies, newDependencies, newVersions, options = {}) {
    // copy newDependencies for mutation via interactive mode
    const selectedNewDependencies = { ...newDependencies };
    let newPkgData = pkgData;
    // eslint-disable-next-line fp/no-loops
    for (const dependency in newDependencies) {
        if (!options.minimal || !(0, semver_1.satisfies)(newVersions[dependency], oldDependencies[dependency])) {
            if (options.interactive) {
                const to = (0, version_util_1.colorizeDiff)(oldDependencies[dependency], newDependencies[dependency] || '');
                const response = await (0, prompts_1.default)({
                    type: 'confirm',
                    name: 'value',
                    message: `Do you want to upgrade: ${dependency} ${oldDependencies[dependency]} → ${to}?`,
                    initial: true,
                    onState: state => {
                        if (state.aborted) {
                            process.nextTick(() => process.exit(1));
                        }
                    }
                });
                if (!response.value) {
                    // continue loop to next dependency and skip updating newPkgData
                    delete selectedNewDependencies[dependency]; // eslint-disable-line fp/no-delete
                    continue;
                }
            }
            const expression = `"${dependency}"\\s*:\\s*"${escapeRegexp(`${oldDependencies[dependency]}"`)}`;
            const regExp = new RegExp(expression, 'g');
            newPkgData = newPkgData.replace(regExp, `"${dependency}": "${newDependencies[dependency]}"`);
        }
    }
    return { newPkgData, selectedNewDependencies };
}
exports.default = upgradePackageData;
//# sourceMappingURL=upgradePackageData.js.map