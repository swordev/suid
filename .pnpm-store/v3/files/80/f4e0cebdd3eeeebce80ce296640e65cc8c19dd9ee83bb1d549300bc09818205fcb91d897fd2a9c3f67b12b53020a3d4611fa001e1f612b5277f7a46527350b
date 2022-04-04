"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const lodash_1 = __importDefault(require("lodash"));
const rc_config_loader_1 = require("rc-config-loader");
/**
 * Loads the .ncurc config file.
 *
 * @param [cfg]
 * @param [cfg.configFileName=.ncurc]
 * @param [cfg.configFilePath]
 * @param [cfg.packageFile]
 * @returns
 */
function getNcuRc({ configFileName, configFilePath, packageFile } = {}) {
    const result = (0, rc_config_loader_1.rcFile)('ncurc', {
        configFileName: configFileName || '.ncurc',
        defaultExtension: ['.json', '.yml', '.js'],
        cwd: configFilePath ||
            (packageFile ? path_1.default.dirname(packageFile) : undefined)
    });
    // flatten config object into command line arguments to be read by commander
    const args = result ?
        lodash_1.default.flatten(lodash_1.default.map(result.config, (value, name) => value === true ? [`--${name}`] : [`--${name}`, value])) : [];
    return result ? { ...result, args } : null;
}
exports.default = getNcuRc;
//# sourceMappingURL=getNcuRc.js.map