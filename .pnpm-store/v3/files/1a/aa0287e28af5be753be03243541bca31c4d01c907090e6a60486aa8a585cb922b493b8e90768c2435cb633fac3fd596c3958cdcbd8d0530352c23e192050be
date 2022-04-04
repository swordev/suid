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
exports.getOwnerPerDependency = void 0;
const fs_1 = __importDefault(require("fs"));
const util_1 = require("util");
const cint = __importStar(require("cint"));
const lodash_1 = __importDefault(require("lodash"));
const chalk_1 = __importDefault(require("chalk"));
const json_parse_helpfulerror_1 = __importDefault(require("json-parse-helpfulerror"));
const semver_1 = require("semver");
const logging_1 = require("../logging");
const getCurrentDependencies_1 = __importDefault(require("./getCurrentDependencies"));
const getIgnoredUpgrades_1 = __importDefault(require("./getIgnoredUpgrades"));
const getPackageFileName_1 = __importDefault(require("./getPackageFileName"));
const getPackageManager_1 = __importDefault(require("./getPackageManager"));
const getPeerDependencies_1 = __importDefault(require("./getPeerDependencies"));
const programError_1 = __importDefault(require("./programError"));
const upgradePackageData_1 = __importDefault(require("./upgradePackageData"));
const upgradePackageDefinitions_1 = __importDefault(require("./upgradePackageDefinitions"));
const writePackageFile = (0, util_1.promisify)(fs_1.default.writeFile);
/** Recreate the options object sorted. */
function sortOptions(options) {
    // eslint-disable-next-line fp/no-mutating-methods
    return lodash_1.default.transform(Object.keys(options).sort(), (accum, key) => {
        accum[key] = options[key];
    }, {});
}
/**
 * Return a promise which resolves to object storing package owner changed status for each dependency.
 *
 * @param fromVersion current packages version.
 * @param toVersion target packages version.
 * @param options
 * @returns
 */
async function getOwnerPerDependency(fromVersion, toVersion, options) {
    const packageManager = (0, getPackageManager_1.default)(options.packageManager);
    return await Object.keys(toVersion).reduce(async (accum, dep) => {
        const from = fromVersion[dep] || null;
        const to = toVersion[dep] || null;
        const ownerChanged = await packageManager.packageAuthorChanged(dep, from, to, options);
        return {
            ...await accum,
            [dep]: ownerChanged,
        };
    }, {});
}
exports.getOwnerPerDependency = getOwnerPerDependency;
/** Checks local project dependencies for upgrades. */
async function runLocal(options, pkgData, pkgFile) {
    (0, logging_1.print)(options, '\nOptions:', 'verbose');
    (0, logging_1.print)(options, sortOptions(options), 'verbose');
    let pkg;
    const chalk = options.color ? new chalk_1.default.Instance({ level: 1 }) : chalk_1.default;
    try {
        if (!pkgData) {
            throw new Error('Missing pkgData: ' + pkgData);
        }
        else {
            pkg = json_parse_helpfulerror_1.default.parse(pkgData);
        }
    }
    catch (e) {
        (0, programError_1.default)(options, chalk.red(`Invalid package file${pkgFile ? `: ${pkgFile}` : ' from stdin'}. Error details:\n${e.message}`));
    }
    const current = (0, getCurrentDependencies_1.default)(pkg, options);
    (0, logging_1.print)(options, '\nCurrent:', 'verbose');
    (0, logging_1.print)(options, current, 'verbose');
    (0, logging_1.print)(options, `\nFetching ${options.target} versions`, 'verbose');
    if (options.enginesNode) {
        options.nodeEngineVersion = lodash_1.default.get(pkg, 'engines.node');
    }
    if (options.peer) {
        options.peerDependencies = (0, getPeerDependencies_1.default)(current, options);
    }
    const [upgraded, latest, upgradedPeerDependencies] = await (0, upgradePackageDefinitions_1.default)(current, options);
    if (options.peer) {
        (0, logging_1.print)(options, '\nupgradedPeerDependencies:', 'verbose');
        (0, logging_1.print)(options, upgradedPeerDependencies, 'verbose');
    }
    (0, logging_1.print)(options, '\nFetched:', 'verbose');
    (0, logging_1.print)(options, latest, 'verbose');
    (0, logging_1.print)(options, '\nUpgraded:', 'verbose');
    (0, logging_1.print)(options, upgraded, 'verbose');
    const { newPkgData, selectedNewDependencies } = await (0, upgradePackageData_1.default)(pkgData, current, upgraded, latest, options);
    const output = options.jsonAll ? json_parse_helpfulerror_1.default.parse(newPkgData) :
        options.jsonDeps ?
            lodash_1.default.pick(json_parse_helpfulerror_1.default.parse(newPkgData), 'dependencies', 'devDependencies', 'optionalDependencies') :
            selectedNewDependencies;
    // will be overwritten with the result of writePackageFile so that the return promise waits for the package file to be written
    let writePromise = Promise.resolve();
    // split the deps into satisfied and unsatisfied to display in two separate tables
    const deps = Object.keys(selectedNewDependencies);
    const satisfied = cint.toObject(deps, (dep) => ({
        [dep]: (0, semver_1.satisfies)(latest[dep], current[dep])
    }));
    const isSatisfied = lodash_1.default.propertyOf(satisfied);
    const filteredUpgraded = options.minimal ? cint.filterObject(selectedNewDependencies, (dep) => !isSatisfied(dep)) : selectedNewDependencies;
    const numUpgraded = Object.keys(filteredUpgraded).length;
    const ownersChangedDeps = (options.format || []).includes('ownerChanged')
        ? await getOwnerPerDependency(current, filteredUpgraded, options)
        : undefined;
    // print
    if (options.json && !options.deep) {
        // use the selectedNewDependencies dependencies data to generate new package data
        // INVARIANT: we don't need try-catch here because pkgData has already been parsed as valid JSON, and upgradePackageData simply does a find-and-replace on that
        (0, logging_1.printJson)(options, output);
    }
    else {
        (0, logging_1.printUpgrades)(options, {
            current,
            upgraded: filteredUpgraded,
            numUpgraded,
            total: Object.keys(upgraded).length,
            ownersChangedDeps
        });
        if (options.peer) {
            const ignoredUpdates = await (0, getIgnoredUpgrades_1.default)(current, upgraded, upgradedPeerDependencies, options);
            if (!lodash_1.default.isEmpty(ignoredUpdates)) {
                (0, logging_1.printIgnoredUpdates)(options, ignoredUpdates);
            }
        }
    }
    if (numUpgraded > 0) {
        // if there is a package file, write the new package data
        // otherwise, suggest ncu -u
        if (pkgFile) {
            if (options.upgrade) {
                // do not await until end
                writePromise = writePackageFile(pkgFile, newPkgData)
                    .then(() => {
                    (0, logging_1.print)(options, `\nRun ${chalk.cyan(options.packageManager === 'yarn' ? 'yarn install' : 'npm install')} to install new versions.\n`);
                });
            }
            else {
                (0, logging_1.print)(options, `\nRun ${chalk.cyan('ncu -u')} to upgrade ${(0, getPackageFileName_1.default)(options)}`);
            }
        }
        // if errorLevel is 2, exit with non-zero error code
        if (options.errorLevel === 2) {
            writePromise.then(() => {
                (0, programError_1.default)(options, '\nDependencies not up-to-date');
            });
        }
    }
    await writePromise;
    return output;
}
exports.default = runLocal;
//# sourceMappingURL=runLocal.js.map