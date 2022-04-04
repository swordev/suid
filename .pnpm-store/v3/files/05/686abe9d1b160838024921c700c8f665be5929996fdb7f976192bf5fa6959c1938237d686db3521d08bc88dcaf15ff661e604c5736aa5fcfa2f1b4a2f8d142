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
const cint_1 = __importDefault(require("cint"));
const semver = __importStar(require("semver"));
const filterAndReject_1 = __importDefault(require("./filterAndReject"));
/** Returns true if spec1 is greater than spec2, ignoring invalid version ranges. */
const isGreaterThanSafe = (spec1, spec2) => 
// not a valid range to compare (e.g. github url)
semver.validRange(spec1) &&
    semver.validRange(spec2) &&
    // otherwise return true if spec2 is smaller than spec1
    semver.gt(semver.minVersion(spec1), semver.minVersion(spec2));
/**
 * Get the current dependencies from the package file.
 *
 * @param [pkgData={}] Object with dependencies, devDependencies, peerDependencies, optionalDependencies, and/or bundleDependencies properties
 * @param [options={}]
 * @param options.dep
 * @param options.filter
 * @param options.reject
 * @returns Promised {packageName: version} collection
 */
function getCurrentDependencies(pkgData = {}, options = {}) {
    const depOptions = options.dep
        ? (options.dep || '').split(',')
        : ['dev', 'optional', 'peer', 'prod', 'bundle'];
    // map the dependency section option to a full dependency section name
    const depSections = depOptions.map(short => (short === 'prod' ? 'dependencies' : short + 'Dependencies'));
    // get all dependencies from the selected sections
    // if a dependency appears in more than one section, take the lowest version number
    const allDependencies = depSections.reduce((accum, depSection) => {
        return {
            ...accum,
            ...cint_1.default.filterObject(pkgData[depSection], (dep, spec) => !isGreaterThanSafe(spec, accum[dep]))
        };
    }, {});
    // filter & reject dependencies and versions
    const filteredDependencies = cint_1.default.filterObject(allDependencies, (0, filterAndReject_1.default)(options.filter || null, options.reject || null, options.filterVersion || null, options.rejectVersion || null));
    return filteredDependencies;
}
exports.default = getCurrentDependencies;
//# sourceMappingURL=getCurrentDependencies.js.map