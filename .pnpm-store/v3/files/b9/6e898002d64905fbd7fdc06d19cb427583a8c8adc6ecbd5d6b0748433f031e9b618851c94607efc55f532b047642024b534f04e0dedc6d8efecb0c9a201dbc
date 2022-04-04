"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const cint_1 = __importDefault(require("cint"));
const version_util_1 = require("../version-util");
/**
 *
 * @param dependencies A dependencies collection
 * @returns Returns whether the user prefers ^, ~, .*, or .x
 * (simply counts the greatest number of occurrences) or `null` if
 * given no dependencies.
 */
function getPreferredWildcard(dependencies) {
    // if there are no dependencies, return null.
    if (Object.keys(dependencies).length === 0) {
        return null;
    }
    // group the dependencies by wildcard
    const groups = lodash_1.default.groupBy(Object.values(dependencies), dep => version_util_1.WILDCARDS.find((wildcard) => dep && dep.includes(wildcard)));
    delete groups.undefined; // eslint-disable-line fp/no-delete
    // convert to an array of objects that can be sorted
    const arrOfGroups = cint_1.default.toArray(groups, (wildcard, instances) => ({
        wildcard,
        instances
    }));
    // reverse sort the groups so that the wildcard with the most appearances is at the head, then return it.
    const sorted = lodash_1.default.sortBy(arrOfGroups, wildcardObject => -wildcardObject.instances.length);
    return sorted.length > 0 ? sorted[0].wildcard : null;
}
exports.default = getPreferredWildcard;
//# sourceMappingURL=getPreferredWildcard.js.map