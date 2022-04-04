"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const fs_1 = __importDefault(require("fs"));
const chalk_1 = __importDefault(require("chalk"));
const cli_options_1 = __importDefault(require("../cli-options"));
const constants_1 = require("../constants");
const programError_1 = __importDefault(require("./programError"));
const getPackageFileName_1 = __importDefault(require("./getPackageFileName"));
const logging_1 = require("../logging");
/** Initializes, validates, sets defaults, and consolidates program options. */
function initOptions(runOptions, { cli } = {}) {
    const chalk = runOptions.color ? new chalk_1.default.Instance({ level: 1 }) : chalk_1.default;
    // if not executed on the command-line (i.e. executed as a node module), set the defaults
    if (!cli) {
        // set cli defaults since they are not set by commander in this case
        const cliDefaults = cli_options_1.default.reduce((acc, curr) => ({
            ...acc,
            ...curr.default != null ? { [curr.long]: curr.default } : null,
        }), {});
        // set default options that are specific to module usage
        const moduleDefaults = {
            jsonUpgraded: true,
            silent: runOptions.silent || runOptions.loglevel === undefined,
            args: []
        };
        runOptions = { ...cliDefaults, ...moduleDefaults, ...runOptions };
    }
    // convert packageData to string to convert RunOptions to Options
    const options = {
        ...runOptions,
        ...runOptions.packageData && typeof runOptions.packageData !== 'string' ? { packageData: JSON.stringify(runOptions.packageData, null, 2) } : null,
    };
    const loglevel = options.silent ? 'silent' : options.loglevel;
    const json = Object.keys(options)
        .filter(option => option.startsWith('json'))
        .some(lodash_1.default.propertyOf(options));
    if (!json && loglevel !== 'silent' && options.rcConfigPath && !options.doctor) {
        (0, logging_1.print)(options, `Using config file ${options.rcConfigPath}`);
    }
    // warn about deprecated options
    const deprecatedOptions = cli_options_1.default.filter(({ long, deprecated }) => deprecated && options[long]);
    if (deprecatedOptions.length > 0) {
        deprecatedOptions.forEach(({ long, description }) => {
            const deprecationMessage = `--${long}: ${description}`;
            (0, logging_1.print)(options, chalk.yellow(deprecationMessage), 'warn');
        });
        (0, logging_1.print)(options, '', 'warn');
    }
    // disallow combination of --target, --greatest, or --newest
    if (options.target && options.greatest) {
        (0, programError_1.default)(options, chalk.red('Cannot specify both --target and --greatest. --greatest is an alias for "--target greatest".'));
    }
    else if (options.target && options.newest) {
        (0, programError_1.default)(options, chalk.red('Cannot specify both --target and --newest. --newest is an alias for "--target newest".'));
    }
    else if (options.greatest && options.newest) {
        (0, programError_1.default)(options, chalk.red('Cannot specify both --greatest and --newest. --greatest is an alias for "--target greatest" and --newest is an alias for "--target newest".'));
    }
    // disallow non-matching filter and args
    else if (options.filter && (options.args || []).length > 0 && options.filter !== options.args.join(' ')) {
        (0, programError_1.default)(options, chalk.red('Cannot specify a filter using both --filter and args. Did you forget to quote an argument?') + '\nSee: https://github.com/raineorshine/npm-check-updates/issues/759#issuecomment-723587297');
    }
    else if (options.packageFile && options.deep) {
        (0, programError_1.default)(options, chalk.red(`Cannot specify both --packageFile and --deep. --deep is an alias for --packageFile '${constants_1.deepPatternPrefix}package.json'`));
    }
    const target = options.newest ? 'newest'
        : options.greatest ? 'greatest'
            : options.target || options.semverLevel || 'latest';
    const autoPre = target === 'newest' || target === 'greatest';
    const format = [
        ...options.format || [],
        ...options.ownerChanged ? ['ownerChanged'] : []
    ];
    // autodetect yarn
    const files = fs_1.default.readdirSync(options.cwd || '.');
    const autoYarn = !options.packageManager && !options.global && files.includes('yarn.lock') && !files.includes('package-lock.json');
    if (autoYarn) {
        (0, logging_1.print)(options, 'Using yarn');
    }
    return {
        ...options,
        ...options.deep ? { packageFile: `${constants_1.deepPatternPrefix}${(0, getPackageFileName_1.default)(options)}` } : null,
        ...(options.args || []).length > 0 ? { filter: options.args.join(' ') } : null,
        ...format.length > 0 ? { format } : null,
        // add shortcut for any keys that start with 'json'
        json,
        // convert silent option to loglevel silent
        loglevel,
        minimal: options.minimal === undefined ? false : options.minimal,
        // default to false, except when newest or greatest are set
        ...options.pre != null || autoPre
            ? { pre: options.pre != null ? !!options.pre : autoPre }
            : null,
        target,
        // imply upgrade in interactive mode when json is not specified as the output
        ...options.interactive && options.upgrade === undefined ? { upgrade: !json } : null,
        ...!options.packageManager && { packageManager: autoYarn ? 'yarn' : 'npm' },
    };
}
exports.default = initOptions;
//# sourceMappingURL=initOptions.js.map