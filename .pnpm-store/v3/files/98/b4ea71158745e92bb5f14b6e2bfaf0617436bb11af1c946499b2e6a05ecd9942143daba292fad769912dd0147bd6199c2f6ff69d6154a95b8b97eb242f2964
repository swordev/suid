"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const chalk_1 = __importDefault(require("chalk"));
const logging_1 = require("../logging");
const getInstalledPackages_1 = __importDefault(require("./getInstalledPackages"));
const upgradePackageDefinitions_1 = __importDefault(require("./upgradePackageDefinitions"));
/** Checks global dependencies for upgrades. */
async function runGlobal(options) {
    const chalk = options.color ? new chalk_1.default.Instance({ level: 1 }) : chalk_1.default;
    (0, logging_1.print)(options, 'Getting installed packages', 'verbose');
    const globalPackages = await (0, getInstalledPackages_1.default)(lodash_1.default.pick(options, ['cwd', 'filter', 'filterVersion', 'global', 'packageManager', 'prefix', 'reject', 'rejectVersion']));
    (0, logging_1.print)(options, 'globalPackages', 'silly');
    (0, logging_1.print)(options, globalPackages, 'silly');
    (0, logging_1.print)(options, '', 'silly');
    (0, logging_1.print)(options, `Fetching ${options.target} versions`, 'verbose');
    const [upgraded, latest] = await (0, upgradePackageDefinitions_1.default)(globalPackages, options);
    (0, logging_1.print)(options, latest, 'silly');
    const upgradedPackageNames = Object.keys(upgraded);
    (0, logging_1.printUpgrades)(options, {
        current: globalPackages,
        upgraded,
        // since an interactive upgrade of globals is not available, the numUpgraded is always all
        numUpgraded: upgradedPackageNames.length,
        total: upgradedPackageNames.length,
    });
    const instruction = upgraded
        ? upgradedPackageNames.map(pkg => pkg + '@' + upgraded[pkg]).join(' ')
        : '[package]';
    if (options.json) {
        // since global packages do not have a package.json, return the upgraded deps directly (no version range replacements)
        (0, logging_1.printJson)(options, upgraded);
    }
    else if (instruction.length) {
        const upgradeCmd = options.packageManager === 'yarn' ? 'yarn global upgrade' : 'npm -g install';
        (0, logging_1.print)(options, '\n' + chalk.cyan('ncu') + ' itself cannot upgrade global packages. Run the following to upgrade all global packages: \n\n' + chalk.cyan(`${upgradeCmd} ` + instruction) + '\n');
    }
    // if errorLevel is 2, exit with non-zero error code
    if (options.cli && options.errorLevel === 2 && upgradedPackageNames.length > 0) {
        process.exit(1);
    }
    return upgraded;
}
exports.default = runGlobal;
//# sourceMappingURL=runGlobal.js.map