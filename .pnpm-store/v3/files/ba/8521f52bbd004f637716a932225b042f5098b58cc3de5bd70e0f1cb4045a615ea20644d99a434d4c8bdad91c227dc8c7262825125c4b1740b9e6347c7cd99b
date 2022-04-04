"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// maps package managers to package file names
const packageFileNames = {
    npm: 'package.json',
    yarn: 'package.json',
};
/**
 * Gets the name of the package file based on --packageFile or --packageManager.
 */
function getPackageFileName(options) {
    return options.packageFile ? options.packageFile :
        packageFileNames[options.packageManager] || packageFileNames.npm;
}
exports.default = getPackageFileName;
//# sourceMappingURL=getPackageFileName.js.map