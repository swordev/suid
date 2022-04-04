"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upgradeGithubUrl = exports.upgradeDependencyDeclaration = exports.getGithubUrlTag = exports.isGithubUrl = exports.upgradeNpmAlias = exports.isNpmAlias = exports.parseNpmAlias = exports.createNpmAlias = exports.v = exports.fixPseudoVersion = exports.isPre = exports.findGreatestByLevel = exports.compareVersions = exports.colorizeDiff = exports.isWildPart = exports.isWildCard = exports.addWildCard = exports.setPrecision = exports.getPrecision = exports.stringify = exports.precisionAdd = exports.numParts = exports.WILDCARDS = exports.DEFAULT_WILDCARD = void 0;
const lodash_1 = __importDefault(require("lodash"));
const util_1 = __importDefault(require("util"));
const semver_utils_1 = __importDefault(require("semver-utils"));
const chalk_1 = __importDefault(require("chalk"));
const cint_1 = __importDefault(require("cint"));
const semver_1 = __importDefault(require("semver"));
const parse_github_url_1 = __importDefault(require("parse-github-url"));
const VERSION_BASE_PARTS = ['major', 'minor', 'patch'];
const VERSION_ADDED_PARTS = ['release', 'build'];
const VERSION_PARTS = [...VERSION_BASE_PARTS, ...VERSION_ADDED_PARTS];
const VERSION_PART_DELIM = {
    major: '',
    minor: '.',
    patch: '.',
    release: '-',
    build: '+'
};
exports.DEFAULT_WILDCARD = '^';
exports.WILDCARDS = ['^', '~', '.*', '.x'];
const WILDCARDS_PURE = ['^', '~', '^*', '*', 'x', 'x.x', 'x.x.x'];
const WILDCARD_PURE_REGEX = new RegExp(`^(${WILDCARDS_PURE.join('|')
    .replace(/\^/g, '\\^')
    .replace(/\*/g, '\\*')})$`);
/** Matches an npm alias version declaration. */
const NPM_ALIAS_REGEX = /^npm:(.*)@(.*)/;
/**
 * @param version
 * @returns The number of parts in the version
 */
function numParts(version) {
    const [semver] = semver_utils_1.default.parseRange(version);
    if (!semver) {
        throw new Error(util_1.default.format('semverutils.parseRange returned null when trying to parse "%s". This is probably a problem with the "semver-utils" dependency. Please report an issue at https://github.com/raineorshine/npm-check-updates/issues.', version));
    }
    return lodash_1.default.intersection(VERSION_PARTS, Object.keys(semver)).length;
}
exports.numParts = numParts;
/**
 * Increases or decreases the a precision by the given amount, e.g. major+1 -> minor
 *
 * @param precision
 * @param n
 * @returns
 */
function precisionAdd(precision, n) {
    if (n === 0)
        return precision;
    const index = VERSION_BASE_PARTS.includes(precision) ? VERSION_BASE_PARTS.indexOf(precision) + n :
        VERSION_ADDED_PARTS.includes(precision) ? VERSION_BASE_PARTS.length + n :
            null;
    if (index === null || !VERSION_PARTS[index]) {
        throw new Error(`Invalid precision: ${precision}`);
    }
    return VERSION_PARTS[index];
}
exports.precisionAdd = precisionAdd;
/**
 * Joins the major, minor, patch, release, and build parts (controlled by an
 * optional precision arg) of a semver object into a dot-delimited string.
 *
 * @param semver
 * @param [precision]
 * @returns
 */
function stringify(semver, precision) {
    // get a list of the parts up until (and including) the given precision
    // or all of them, if no precision is specified
    const parts = precision ? VERSION_PARTS.slice(0, VERSION_PARTS.indexOf(precision) + 1) : VERSION_PARTS;
    // pair each part with its delimiter and join together
    return parts
        .filter(part => (precision && VERSION_BASE_PARTS.includes(precision)) || semver[part])
        .map(part => VERSION_PART_DELIM[part] + (semver[part] || '0'))
        .join('');
}
exports.stringify = stringify;
/**
 * Gets how precise this version number is (major, minor, patch, release, or build)
 *
 * @param version
 * @returns
 */
function getPrecision(version) {
    const [semver] = semver_utils_1.default.parseRange(version);
    // expects VERSION_PARTS to be in correct order
    // eslint-disable-next-line fp/no-mutating-methods
    return VERSION_PARTS.slice().reverse().find(lodash_1.default.propertyOf(semver));
}
exports.getPrecision = getPrecision;
/**
 * Sets the precision of a (loose) semver to the specified level: major, minor, etc.
 *
 * @param version
 * @param [precision]
 * @returns
 */
function setPrecision(version, precision) {
    const [semver] = semver_utils_1.default.parseRange(version);
    return stringify(semver, precision);
}
exports.setPrecision = setPrecision;
/**
 * Adds a given wildcard (^,~,.*,.x) to a version number. Adds ^ and ~ to the
 * beginning. Replaces everything after the major version number with .* or .x
 *
 * @param version
 * @param wildcard
 * @returns
 */
function addWildCard(version, wildcard) {
    return wildcard === '^' || wildcard === '~' ?
        wildcard + version :
        setPrecision(version, 'major') + wildcard;
}
exports.addWildCard = addWildCard;
/**
 * Returns true if the given string is one of the wild cards.
 *
 * @param version
 * @returns
 */
function isWildCard(version) {
    return WILDCARD_PURE_REGEX.test(version);
}
exports.isWildCard = isWildCard;
/**
 * Returns true if the given digit is a wildcard for a part of a version.
 *
 * @param versionPart
 * @returns
 */
function isWildPart(versionPartValue) {
    return versionPartValue === '*' || versionPartValue === 'x';
}
exports.isWildPart = isWildPart;
/**
 * Colorize the parts of a version string (to) that are different than
 * another (from). Assumes that the two verson strings are in the same format.
 *
 * @param from
 * @param to
 * @returns
 */
function colorizeDiff(from, to) {
    let leadingWildcard = '';
    // separate out leading ^ or ~
    if (/^[~^]/.test(to) && to[0] === from[0]) {
        leadingWildcard = to[0];
        to = to.slice(1);
        from = from.slice(1);
    }
    // split into parts
    const partsToColor = to.split('.');
    const partsToCompare = from.split('.');
    let i = partsToColor.findIndex((part, i) => part !== partsToCompare[i]);
    i = i >= 0 ? i : partsToColor.length;
    // major = red (or any change before 1.0.0)
    // minor = cyan
    // patch = green
    const color = i === 0 || partsToColor[0] === '0' ? 'red' :
        i === 1 ? 'cyan' :
            'green';
    // if we are colorizing only part of the word, add a dot in the middle
    const middot = i > 0 && i < partsToColor.length ? '.' : '';
    return leadingWildcard +
        partsToColor.slice(0, i).join('.') +
        middot +
        chalk_1.default[color](partsToColor.slice(i).join('.'));
}
exports.colorizeDiff = colorizeDiff;
/** Comparator used to sort semver versions */
function compareVersions(a, b) {
    return semver_1.default.gt(a, b) ? 1 : a === b ? 0 : -1;
}
exports.compareVersions = compareVersions;
/**
 * Finds the greatest version at the given level (minor|patch).
 *
 * @param versions  Unsorted array of all available versions
 * @param current   Current version or range
 * @param level     major|minor
 * @returns         String representation of the suggested version.
 */
function findGreatestByLevel(versions, current, level) {
    if (!semver_1.default.validRange(current)) {
        return null;
    }
    const cur = semver_1.default.minVersion(current);
    const versionsSorted = [...versions] // eslint-disable-line fp/no-mutating-methods
        .sort(compareVersions)
        .filter(v => {
        const parsed = semver_1.default.parse(v);
        return parsed &&
            (level === 'major' || parsed.major === (cur === null || cur === void 0 ? void 0 : cur.major)) &&
            (level === 'major' || level === 'minor' || parsed.minor === (cur === null || cur === void 0 ? void 0 : cur.minor));
    });
    return lodash_1.default.last(versionsSorted) || null;
}
exports.findGreatestByLevel = findGreatestByLevel;
/**
 * @param version
 * @returns True if the version is any kind of prerelease: alpha, beta, rc, pre
 */
function isPre(version) {
    return getPrecision(version) === 'release';
}
exports.isPre = isPre;
/** Checks if a string is a simple version in the format "v1". */
const isMissingMinorAndPatch = (s) => /^[vV]?\d+$/.test(s);
/** Checks if a version string is missing its match component, e.g. "1.0". */
const isMissingPatch = (s) => /^[vV]?\d+\.\d+$/.test(s);
/** Removes a leading 'v' or 'V' from a pseudo version.. */
const fixLeadingV = (s) => s.replace(/^[vV]/, '');
/** Converts a pseudo version that is missing its minor and patch components into a valid semver version. NOOP for valid semver versions. */
const fixMissingMinorAndPatch = (s) => isMissingMinorAndPatch(s) ? s + '.0.0' : s;
/** Converts a pseudo version that is missing its patch component into a valid semver version. NOOP for valid semver versions. */
const fixMissingPatch = (s) => isMissingPatch(s) ? s + '.0' : s;
/** Converts a pseudo version into a valid semver version. NOOP for valid semver versions. */
exports.fixPseudoVersion = lodash_1.default.flow(fixLeadingV, fixMissingMinorAndPatch, fixMissingPatch);
/**
 * Returns 'v' if the string starts with a v, otherwise returns empty string.
 *
 * @param str
 * @returns
 */
function v(str) {
    return str && (str[0] === 'v' || str[1] === 'v') ? 'v' : '';
}
exports.v = v;
/**
 * Constructs an npm alias from the name and version of the actual package.
 *
 * @param name Name of the actual package.
 * @param version Version of the actual package.
 * @returns    "npm:package@x.y.z"
 * @example    createNpmAlias('chalk', '2.0.0') -> 'npm:chalk@2.0.0'
 */
const createNpmAlias = (name, version) => `npm:${name}@${version}`;
exports.createNpmAlias = createNpmAlias;
/**
 * Parses an npm alias into a [name, version] 2-tuple.
 *
 * @returns  [name, version] or null if the input is not an npm alias
 * @example  'npm:chalk@1.0.0' -> ['chalk', '1.0.0']
 */
const parseNpmAlias = (alias) => {
    const match = alias && alias.match && alias.match(NPM_ALIAS_REGEX);
    return match && match.slice(1);
};
exports.parseNpmAlias = parseNpmAlias;
/**
 * Returns true if a version declaration is an npm alias.
 */
const isNpmAlias = (declaration) => declaration && !!declaration.match(NPM_ALIAS_REGEX);
exports.isNpmAlias = isNpmAlias;
/**
 * Replaces the version number embedded in an npm alias.
 */
const upgradeNpmAlias = (declaration, upgraded) => {
    const npmAlias = (0, exports.parseNpmAlias)(declaration);
    if (!npmAlias)
        return null;
    return (0, exports.createNpmAlias)(npmAlias[0], upgraded);
};
exports.upgradeNpmAlias = upgradeNpmAlias;
/**
 * Returns true if a version declaration is a Github URL with a valid semver version.
 */
const isGithubUrl = (declaration) => {
    if (!declaration)
        return false;
    const parsed = (0, parse_github_url_1.default)(declaration);
    if (!parsed || !parsed.branch)
        return false;
    const version = decodeURIComponent(parsed.branch)
        .replace(/^semver:/, '');
    return !!semver_1.default.validRange(version);
};
exports.isGithubUrl = isGithubUrl;
/**
 * Returns the embedded tag in a Github URL.
 */
const getGithubUrlTag = (declaration) => {
    if (!declaration)
        return null;
    const parsed = (0, parse_github_url_1.default)(declaration);
    if (!parsed || !parsed.branch)
        return null;
    const version = decodeURIComponent(parsed.branch)
        .replace(/^semver:/, '');
    return parsed && parsed.branch && semver_1.default.validRange(version) ? version : null;
};
exports.getGithubUrlTag = getGithubUrlTag;
/**
 * Upgrade an existing dependency declaration to satisfy the latest version.
 *
 * @param declaration Current version declaration (e.g. "1.2.x")
 * @param latestVersion Latest version (e.g "1.3.2")
 * @param [options={}]
 * @returns The upgraded dependency declaration (e.g. "1.3.x")
 */
function upgradeDependencyDeclaration(declaration, latestVersion, options = {}) {
    options.wildcard = options.wildcard || exports.DEFAULT_WILDCARD;
    if (!latestVersion) {
        return declaration;
    }
    // parse the latestVersion
    // return original declaration if latestSemver is invalid
    const [latestSemver] = semver_utils_1.default.parseRange(latestVersion);
    if (!latestSemver) {
        return declaration;
    }
    // return global wildcards immediately
    if (options.removeRange) {
        return latestVersion;
    }
    else if (isWildCard(declaration)) {
        return declaration;
    }
    // parse the declaration
    // if multiple ranges, use the semver with the least number of parts
    const parsedRange = (0, lodash_1.default)(semver_utils_1.default.parseRange(declaration))
        // semver-utils includes empty entries for the || and - operators. We can remove them completely
        .reject({ operator: '||' })
        .reject({ operator: '-' })
        .sortBy(lodash_1.default.ary(lodash_1.default.flow(stringify, numParts), 1))
        .value();
    const [declaredSemver] = parsedRange;
    /**
     * Chooses version parts between the declared version and the latest.
     * Base parts (major, minor, patch) are only included if they are in the original declaration.
     * Added parts (release, build) are always included. They are only present if we are checking --greatest versions
     * anyway.
     */
    function chooseVersion(part) {
        return (isWildPart(declaredSemver[part]) ? declaredSemver[part] :
            VERSION_BASE_PARTS.includes(part) && declaredSemver[part] ? latestSemver[part] :
                VERSION_ADDED_PARTS.includes(part) ? latestSemver[part] :
                    null)
            || null;
    }
    // create a new semver object with major, minor, patch, build, and release parts
    const newSemver = cint_1.default.toObject(VERSION_PARTS, (part) => ({
        [part]: chooseVersion(part)
    }));
    const newSemverString = stringify(newSemver);
    const version = v(declaredSemver.semver) + newSemverString;
    // determine the operator
    // do not compact, because [undefined, '<'] must be differentiated from ['<']
    const uniqueOperators = (0, lodash_1.default)(parsedRange)
        .map(range => range.operator)
        .uniq()
        .value();
    const operator = uniqueOperators[0] || '';
    const hasWildCard = exports.WILDCARDS.some(wildcard => newSemverString.includes(wildcard));
    const isLessThanOrEqual = uniqueOperators[0] === '<' || uniqueOperators[0] === '<=';
    const isGreaterThan = uniqueOperators[0] === '>';
    const isMixed = uniqueOperators.length > 1;
    // convert versions with </<= or mixed operators into the preferred wildcard
    // only do so if the new version does not already contain a wildcard
    return !hasWildCard && (isLessThanOrEqual || isMixed) ?
        addWildCard(version, options.wildcard) :
        // convert > to >= since there are likely no available versions > latest
        // https://github.com/raineorshine/npm-check-updates/issues/957
        (isGreaterThan ? '>=' : operator) + version;
}
exports.upgradeDependencyDeclaration = upgradeDependencyDeclaration;
/** Reverts a valid semver version to a pseudo version that is missing its minor and patch components. NOOP If the original version was a valid semver version. */
const revertMissingMinorAndPatch = lodash_1.default.curry((current, latest) => isMissingMinorAndPatch(current)
    ? latest.slice(0, latest.length - '.0.0'.length)
    : latest);
/** Reverts a valid semver version to a pseudo version that is missing its patch components. NOOP If the original version was a valid semver version. */
const revertMissingPatch = lodash_1.default.curry((current, latest) => isMissingPatch(current)
    ? latest.slice(0, latest.length - '.0'.length)
    : latest);
/** Reverts a valid semver version to a pseudo version with a leading 'v'. NOOP If the original version was a valid semver version. */
const revertLeadingV = lodash_1.default.curry((current, latest) => v(current)
    ? v(current) + latest
    : latest);
/** Reverts a valid semver version to a pseudo version. NOOP If the original version was a valid semver version. */
const revertPseudoVersion = (current, latest) => lodash_1.default.flow(revertLeadingV(current), revertMissingMinorAndPatch(current), revertMissingPatch(current))(latest);
/**
 * Replaces the version number embedded in a Github URL.
 */
const upgradeGithubUrl = (declaration, upgraded) => {
    // convert upgraded to a proper semver version if it is a pseudo version, otherwise revertPseudoVersion will return an empty string
    const upgradedNormalized = (0, exports.fixPseudoVersion)(upgraded);
    const parsedUrl = (0, parse_github_url_1.default)(declaration);
    if (!parsedUrl)
        return declaration;
    const tag = decodeURIComponent(parsedUrl.branch)
        .replace(/^semver:/, '');
    return declaration.replace(tag, upgradeDependencyDeclaration(tag, revertPseudoVersion(tag, upgradedNormalized)));
};
exports.upgradeGithubUrl = upgradeGithubUrl;
//# sourceMappingURL=version-util.js.map