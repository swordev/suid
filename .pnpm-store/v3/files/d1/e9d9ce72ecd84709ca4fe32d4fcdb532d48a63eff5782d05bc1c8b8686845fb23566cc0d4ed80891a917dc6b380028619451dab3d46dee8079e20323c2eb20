"use strict";
/**
 * Loggin functions.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.printIgnoredUpdates = exports.printUpgrades = exports.printJson = exports.print = void 0;
const cli_table_1 = __importDefault(require("cli-table"));
const chalk_1 = __importDefault(require("chalk"));
const version_util_1 = require("./version-util");
const getRepoUrl_1 = __importDefault(require("./lib/getRepoUrl"));
// maps string levels to numeric levels
const logLevels = {
    silent: 0,
    error: 1,
    minimal: 2,
    warn: 3,
    info: 4,
    verbose: 5,
    silly: 6
};
/**
 * Prints a message if it is included within options.loglevel.
 *
 * @param options    Command line options. These will be compared to the loglevel parameter to determine if the message gets printed.
 * @param message    The message to print
 * @param loglevel   silent|error|warn|info|verbose|silly
 * @param method     The console method to call. Default: 'log'.
 */
function print(options, message, loglevel = null, method = 'log') {
    // not in json mode
    // not silent
    // not at a loglevel under minimum specified
    if (!options.json && options.loglevel !== 'silent' && (loglevel == null || logLevels[options.loglevel] >= logLevels[loglevel])) {
        console[method](message);
    }
}
exports.print = print;
/** Pretty print a JSON object. */
function printJson(options, object) {
    if (options.loglevel !== 'silent') {
        console.log(JSON.stringify(object, null, 2));
    }
}
exports.printJson = printJson;
/** Create a table with the appropriate columns and alignment to render dependency upgrades. */
function createDependencyTable() {
    return new cli_table_1.default({
        colAligns: ['left', 'right', 'right', 'right', 'left', 'left'],
        chars: {
            top: '',
            'top-mid': '',
            'top-left': '',
            'top-right': '',
            bottom: '',
            'bottom-mid': '',
            'bottom-left': '',
            'bottom-right': '',
            left: '',
            'left-mid': '',
            mid: '',
            'mid-mid': '',
            right: '',
            'right-mid': '',
            middle: ''
        }
    });
}
/**
 * Extract just the version number from a package.json dep
 *
 * @param dep Raw dependency, could be version / npm: string / Git url
 */
function getVersion(dep) {
    return (0, version_util_1.isGithubUrl)(dep) ? (0, version_util_1.getGithubUrlTag)(dep)
        : (0, version_util_1.isNpmAlias)(dep) ? (0, version_util_1.parseNpmAlias)(dep)[1]
            : dep;
}
/**
 * @param args
 * @param args.from
 * @param args.to
 * @param args.ownersChangedDeps
 * @param args.format Array of strings from the --format CLI arg
 */
function toDependencyTable({ from: fromDeps, to: toDeps, ownersChangedDeps, format }) {
    const table = createDependencyTable();
    const rows = Object.keys(toDeps).map(dep => {
        const from = fromDeps[dep] || '';
        const toRaw = toDeps[dep] || '';
        const to = getVersion(toRaw);
        const ownerChanged = ownersChangedDeps
            ? dep in ownersChangedDeps
                ? ownersChangedDeps[dep] ? '*owner changed*' : ''
                : '*unknown*'
            : '';
        const toColorized = (0, version_util_1.colorizeDiff)(getVersion(from), to);
        const repoUrl = (format === null || format === void 0 ? void 0 : format.includes('repo'))
            ? (0, getRepoUrl_1.default)(dep) || ''
            : '';
        return [dep, from, '→', toColorized, ownerChanged, repoUrl];
    });
    rows.forEach(row => table.push(row)); // eslint-disable-line fp/no-mutating-methods
    return table;
}
/**
 * @param options - Options from the configuration
 * @param args - The arguments passed to the function.
 * @param args.current - The current packages.
 * @param args.upgraded - The packages that should be upgraded.
 * @param args.numUpgraded - The number of upgraded packages
 * @param args.total - The total number of all possible upgrades
 * @param args.ownersChangedDeps - Boolean flag per dependency which announces if package owner changed.
 */
function printUpgrades(options, { current, latest, upgraded, numUpgraded, total, ownersChangedDeps }) {
    const chalk = options.color ? new chalk_1.default.Instance({ level: 1 }) : chalk_1.default;
    print(options, '');
    // print everything is up-to-date
    const smiley = chalk.green.bold(':)');
    const target = typeof options.target === 'string' ? options.target : 'target';
    if (numUpgraded === 0 && total === 0) {
        if (Object.keys(current).length === 0) {
            print(options, 'No dependencies.');
        }
        else if (latest && Object.keys(latest).length === 0) {
            print(options, `No package versions were returned. This is likely a problem with your installed ${options.packageManager}, the npm registry, or your Internet connection. Make sure ${chalk.cyan('npx pacote packument ncu-test-v2')} is working before reporting an issue.`);
        }
        else if (options.global) {
            print(options, `All global packages are up-to-date ${smiley}`);
        }
        else {
            print(options, `All dependencies match the ${target} package versions ${smiley}`);
        }
    }
    else if (numUpgraded === 0 && total > 0) {
        print(options, `All dependencies match the desired package versions ${smiley}`);
    }
    // print table
    if (numUpgraded > 0) {
        const table = toDependencyTable({
            from: current,
            to: upgraded,
            ownersChangedDeps,
            format: options.format,
        });
        print(options, table.toString());
    }
}
exports.printUpgrades = printUpgrades;
/** Print updates that were ignored due to incompatible peer dependencies. */
function printIgnoredUpdates(options, ignoredUpdates) {
    print(options, `\nIgnored incompatible updates (peer dependencies):\n`);
    const table = createDependencyTable();
    const rows = Object.entries(ignoredUpdates).map(([pkgName, { from, to, reason }]) => {
        const strReason = 'reason: ' + Object.entries(reason)
            .map(([pkgReason, requirement]) => pkgReason + ' requires ' + requirement)
            .join(', ');
        return [pkgName, from, '→', (0, version_util_1.colorizeDiff)(from, to), strReason];
    });
    rows.forEach(row => table.push(row)); // eslint-disable-line fp/no-mutating-methods
    print(options, table.toString());
}
exports.printIgnoredUpdates = printIgnoredUpdates;
//# sourceMappingURL=logging.js.map