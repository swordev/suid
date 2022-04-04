"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cint_1 = __importDefault(require("cint"));
const version_util_1 = require("../version-util");
const getPackageManager_1 = __importDefault(require("./getPackageManager"));
const filterAndReject_1 = __importDefault(require("./filterAndReject"));
/**
 * @param [options]
 * @param options.cwd
 * @param options.filter
 * @param options.global
 * @param options.packageManager
 * @param options.prefix
 * @param options.reject
 */
async function getInstalledPackages(options = {}) {
    var _a, _b;
    const pkgInfoObj = await ((_b = (_a = (0, getPackageManager_1.default)(options.packageManager)).list) === null || _b === void 0 ? void 0 : _b.call(_a, { cwd: options.cwd, prefix: options.prefix, global: options.global }));
    if (!pkgInfoObj) {
        throw new Error('Unable to retrieve NPM package list');
    }
    // filter out undefined packages or those with a wildcard
    const filterFunction = (0, filterAndReject_1.default)(options.filter, options.reject, options.filterVersion, options.rejectVersion);
    return cint_1.default.filterObject(pkgInfoObj, (dep, version) => !!version && !(0, version_util_1.isWildPart)(version) && filterFunction(dep, version));
}
exports.default = getInstalledPackages;
//# sourceMappingURL=getInstalledPackages.js.map