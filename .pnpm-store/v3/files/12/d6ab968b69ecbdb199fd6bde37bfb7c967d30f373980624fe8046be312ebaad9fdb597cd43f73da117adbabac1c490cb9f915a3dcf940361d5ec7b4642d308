"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const util_1 = require("util");
const chalk_1 = __importDefault(require("chalk"));
const find_up_1 = __importDefault(require("find-up"));
const get_stdin_1 = __importDefault(require("get-stdin"));
const getPackageFileName_1 = __importDefault(require("./getPackageFileName"));
const programError_1 = __importDefault(require("./programError"));
const logging_1 = require("../logging");
// time to wait for stdin before printing a warning
const stdinWarningTime = 5000;
const readPackageFile = lodash_1.default.partialRight((0, util_1.promisify)(fs_1.default.readFile), 'utf8');
/**
 * Finds the package file and data.
 *
 * Searches as follows:
 * --packageData flag
 * --packageFile flag
 * --stdin
 * --findUp
 *
 * @returns Promise<PkgInfo>
 */
async function findPackage(options) {
    let pkgData;
    let pkgFile = null;
    let stdinTimer;
    const chalk = options.color ? new chalk_1.default.Instance({ level: 1 }) : chalk_1.default;
    (0, logging_1.print)(options, 'Running in local mode', 'verbose');
    (0, logging_1.print)(options, 'Finding package file data', 'verbose');
    const pkgFileName = (0, getPackageFileName_1.default)(options);
    /** Reads the contents of a package file. */
    function getPackageDataFromFile(pkgFile, pkgFileName) {
        // exit if no pkgFile to read from fs
        if (pkgFile != null) {
            const relPathToPackage = path_1.default.resolve(pkgFile);
            (0, logging_1.print)(options, `${options.upgrade ? 'Upgrading' : 'Checking'} ${relPathToPackage}`);
        }
        else {
            (0, programError_1.default)(options, `${chalk.red(`No ${pkgFileName}`)}\n\nPlease add a ${pkgFileName} to the current directory, specify the ${chalk.cyan('--packageFile')} or ${chalk.cyan('--packageData')} options, or pipe a ${pkgFileName} to stdin.`);
        }
        return readPackageFile(pkgFile);
    }
    // get the package data from the various input possibilities
    if (options.packageData) {
        pkgFile = null;
        pkgData = Promise.resolve(options.packageData);
    }
    else if (options.packageFile) {
        pkgFile = options.packageFile;
        pkgData = getPackageDataFromFile(pkgFile, pkgFileName);
    }
    else if (!process.stdin.isTTY) {
        (0, logging_1.print)(options, 'Waiting for package data on stdin', 'verbose');
        // warn the user after a while if still waiting for stdin
        // this is a way to mitigate #136 where Windows unexpectedly waits for stdin
        stdinTimer = setTimeout(() => {
            console.log(`Hmmmmm... this is taking a long time. Your console is telling me to wait for input \non stdin, but maybe that is not what you want.\nTry ${chalk.cyan('winpty ncu.cmd')}, or specify a package file explicitly with ${chalk.cyan('--packageFile package.json')}. \nSee https://github.com/raineorshine/npm-check-updates/issues/136#issuecomment-155721102`);
        }, stdinWarningTime);
        // get data from stdin
        // trim stdin to account for \r\n
        // clear the warning timer once stdin returns
        const stdinData = await (0, get_stdin_1.default)();
        const data = stdinData.trim().length > 0 ? stdinData : null;
        clearTimeout(stdinTimer);
        // if no stdin content fall back to searching for package.json from pwd and up to root
        pkgFile = data || !pkgFileName ? null : find_up_1.default.sync(pkgFileName);
        pkgData = data || getPackageDataFromFile(await pkgFile, pkgFileName);
    }
    else {
        // find the closest package starting from the current working directory and going up to the root
        pkgFile = pkgFileName ? find_up_1.default.sync(pkgFileName) : null;
        pkgData = getPackageDataFromFile(pkgFile, pkgFileName);
    }
    return Promise.all([pkgData, pkgFile]);
}
exports.default = findPackage;
//# sourceMappingURL=findPackage.js.map