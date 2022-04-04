"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const package_managers_1 = __importDefault(require("../package-managers"));
/**
 * Initialize the version manager with the given package manager.
 *
 * @param packageManagerNameOrObject
 * @param packageManagerNameOrObject.global
 * @param packageManagerNameOrObject.packageManager
 * @returns
 */
function getPackageManager(packageManagerNameOrObject) {
    /** Get one of the preset package managers or throw an error if there is no match. */
    function getPresetPackageManager(packageManagerName) {
        if (!(packageManagerName in package_managers_1.default)) {
            throw new Error(`Invalid package manager: ${packageManagerName}`);
        }
        const key = packageManagerName;
        return package_managers_1.default[key];
    }
    return !packageManagerNameOrObject ? package_managers_1.default.npm : // default to npm
        // use present package manager if name is specified
        typeof packageManagerNameOrObject === 'string' ? getPresetPackageManager(packageManagerNameOrObject) :
            // use provided package manager object otherwise
            packageManagerNameOrObject;
}
exports.default = getPackageManager;
//# sourceMappingURL=getPackageManager.js.map