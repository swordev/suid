"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const os_1 = __importDefault(require("os"));
const path_1 = __importDefault(require("path"));
const globby_1 = __importDefault(require("globby"));
const lodash_1 = __importDefault(require("lodash"));
const chalk_1 = __importDefault(require("chalk"));
const package_managers_1 = __importDefault(require("./package-managers"));
const constants_1 = require("./constants");
const logging_1 = require("./logging");
const findPackage_1 = __importDefault(require("./lib/findPackage"));
const doctor_1 = __importDefault(require("./lib/doctor"));
const getNcuRc_1 = __importDefault(require("./lib/getNcuRc"));
const getPackageFileName_1 = __importDefault(require("./lib/getPackageFileName"));
const mergeOptions_1 = __importDefault(require("./lib/mergeOptions"));
const initOptions_1 = __importDefault(require("./lib/initOptions"));
const programError_1 = __importDefault(require("./lib/programError"));
const runGlobal_1 = __importDefault(require("./lib/runGlobal"));
const runLocal_1 = __importDefault(require("./lib/runLocal"));
// exit with non-zero error code when there is an unhandled promise rejection
process.on('unhandledRejection', err => {
    throw err;
});
/** Main entry point.
 *
 * @returns Promise<
 * PackageFile                    Default returns upgraded package file.
 * | Index<VersionSpec>    --jsonUpgraded returns only upgraded dependencies.
 * | void                         --global upgrade returns void.
 * >
 */
async function run(runOptions = {}, { cli } = {}) {
    const chalk = runOptions.color ? new chalk_1.default.Instance({ level: 1 }) : chalk_1.default;
    const options = (0, initOptions_1.default)(runOptions, { cli });
    (0, logging_1.print)(options, 'Initializing', 'verbose');
    if (options.packageManager === 'npm' && !options.prefix) {
        options.prefix = await package_managers_1.default.npm.defaultPrefix(options);
    }
    if (options.packageManager === 'yarn' && !options.prefix) {
        options.prefix = await package_managers_1.default.yarn.defaultPrefix(options);
    }
    let timeout;
    let timeoutPromise = new Promise(() => null);
    if (options.timeout) {
        const timeoutMs = lodash_1.default.isString(options.timeout)
            ? Number.parseInt(options.timeout, 10)
            : options.timeout;
        timeoutPromise = new Promise((resolve, reject) => {
            timeout = setTimeout(() => {
                // must catch the error and reject explicitly since we are in a setTimeout
                const error = `Exceeded global timeout of ${timeoutMs}ms`;
                reject(error);
                try {
                    (0, programError_1.default)(options, chalk.red(error));
                }
                catch (e) { /* noop */ }
            }, timeoutMs);
        });
    }
    /** Runs the dependency upgrades. Loads the ncurc, finds the package file, and handles --deep. */
    async function runUpgrades() {
        const defaultPackageFilename = (0, getPackageFileName_1.default)(options);
        const pkgs = globby_1.default.sync(options.cwd
            ? path_1.default.resolve(options.cwd.replace(/^~/, os_1.default.homedir()), defaultPackageFilename)
                .replace(/\\/g, '/') // convert Windows path to *nix path for globby
            : defaultPackageFilename, {
            ignore: ['**/node_modules/**']
        });
        options.deep = options.deep || pkgs.length > 1;
        let analysis;
        if (options.global) {
            const analysis = await (0, runGlobal_1.default)(options);
            clearTimeout(timeout);
            return analysis;
        }
        else if (options.deep) {
            analysis = await pkgs.reduce(async (previousPromise, packageFile) => {
                const packages = await previousPromise;
                // copy object to prevent share .ncurc options between different packageFile, to prevent unpredictable behavior
                const rcResult = (0, getNcuRc_1.default)({ packageFile });
                let rcConfig = rcResult && rcResult.config ? rcResult.config : {};
                if (options.mergeConfig && Object.keys(rcConfig).length) {
                    // Merge config options.
                    rcConfig = (0, mergeOptions_1.default)(options, rcConfig);
                }
                const pkgOptions = {
                    ...options,
                    ...rcConfig,
                    packageFile,
                };
                const [pkgData, pkgFile] = await (0, findPackage_1.default)(pkgOptions);
                return {
                    ...packages,
                    // index by relative path if cwd was specified
                    [pkgOptions.cwd
                        ? path_1.default.relative(path_1.default.resolve(pkgOptions.cwd), pkgFile)
                            // convert Windows path to *nix path for consistency
                            .replace(/\\/g, '/')
                        : pkgFile]: await (0, runLocal_1.default)(pkgOptions, pkgData, pkgFile)
                };
            }, Promise.resolve({}));
            if (options.json) {
                (0, logging_1.printJson)(options, analysis);
            }
        }
        else {
            // Mutate packageFile when glob patern finds only single package
            if (pkgs.length === 1 && pkgs[0] !== defaultPackageFilename) {
                options.packageFile = pkgs[0];
            }
            const [pkgData, pkgFile] = await (0, findPackage_1.default)(options);
            analysis = await (0, runLocal_1.default)(options, pkgData, pkgFile);
        }
        clearTimeout(timeout);
        return analysis;
    }
    // doctor mode
    if (options.doctor) {
        // execute with -u
        if (options.upgrade) {
            // we have to pass run directly since it would be a circular require if doctor included this file
            return Promise.race([timeoutPromise, (0, doctor_1.default)(run, options)]);
        }
        // print help otherwise
        else {
            (0, logging_1.print)(options, constants_1.doctorHelpText, 'warn');
        }
    }
    // normal mode
    else {
        return Promise.race([timeoutPromise, runUpgrades()]);
    }
}
exports.run = run;
exports.default = run;
//# sourceMappingURL=index.js.map