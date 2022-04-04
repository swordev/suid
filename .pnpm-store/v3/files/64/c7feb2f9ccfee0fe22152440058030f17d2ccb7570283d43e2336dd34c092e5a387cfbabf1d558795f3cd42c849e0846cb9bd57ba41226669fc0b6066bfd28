'use strict';
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
exports.patch = exports.minor = exports.newest = exports.latest = exports.list = exports.getPeerDependencies = exports.greatest = exports.defaultPrefix = exports.viewOne = exports.viewManyMemoized = exports.viewMany = exports.packageAuthorChanged = void 0;
const lodash_1 = __importDefault(require("lodash"));
const cint_1 = __importDefault(require("cint"));
const fs_1 = __importDefault(require("fs"));
const semver_1 = __importDefault(require("semver"));
const spawn_please_1 = __importDefault(require("spawn-please"));
const pacote_1 = __importDefault(require("pacote"));
const fast_memoize_1 = __importDefault(require("fast-memoize"));
const libnpmconfig_1 = __importDefault(require("libnpmconfig"));
const versionUtil = __importStar(require("../version-util"));
const logging_1 = require("../logging");
const filters_1 = require("./filters");
const TIME_FIELDS = ['modified', 'created'];
/** Reads the local npm config and normalizes keys for pacote. */
const readNpmConfig = () => {
    const npmConfigToPacoteMap = {
        cafile: (path) => {
            // load-cafile, based on github.com/npm/cli/blob/40c1b0f/src/config/load-cafile.js
            if (!path)
                return;
            const cadata = fs_1.default.readFileSync(path, 'utf8');
            const delim = '-----END CERTIFICATE-----';
            const output = cadata
                .split(delim)
                .filter(xs => !!xs.trim())
                .map(xs => `${xs.trimLeft()}${delim}`);
            return { ca: output };
        },
        maxsockets: 'maxSockets',
        'strict-ssl': 'strictSSL',
    };
    // config variables that need to be converted from strings to boolean values
    // store in lowercase since they are strictly for comparison purposes
    const booleanKeys = { strictssl: true };
    /** Parses a string to a boolean. */
    const stringToBoolean = (s) => s && s !== 'false' && s !== '0';
    // needed until pacote supports full npm config compatibility
    // See: https://github.com/zkat/pacote/issues/156
    const config = {};
    // libnpmconfig incorrectly (?) ignores NPM_CONFIG_USERCONFIG because it is always overridden by the default builtin.userconfig
    // set userconfig manually so that it is prioritized
    const builtinsWithUserConfig = {
        userconfig: process.env.npm_config_userconfig || process.env.NPM_CONFIG_USERCONFIG
    };
    libnpmconfig_1.default.read(null, builtinsWithUserConfig).forEach((value, key) => {
        // replace env ${VARS} in strings with the process.env value
        const normalizedValue = typeof value !== 'string' ? value
            // parse stringified booleans
            : key.replace(/-/g, '').toLowerCase() in booleanKeys ? stringToBoolean(value)
                : value.replace(/\${([^}]+)}/, (_, envVar) => process.env[envVar]);
        const { [key]: pacoteKey } = npmConfigToPacoteMap;
        if (lodash_1.default.isString(pacoteKey)) {
            config[pacoteKey] = normalizedValue;
        }
        else if (lodash_1.default.isFunction(pacoteKey)) {
            lodash_1.default.assign(config, pacoteKey(normalizedValue));
        }
        else {
            config[key.match(/^[a-z]/i) ? lodash_1.default.camelCase(key) : key] = normalizedValue;
        }
    });
    config.cache = false;
    return config;
};
const npmConfig = readNpmConfig();
/**
 * @typedef {object} CommandAndPackageName
 * @property {string} command
 * @property {string} packageName
 */
/**
 * Parse JSON and throw an informative error on failure.
 *
 * @param result Data to be parsed
 * @param data
 * @returns
 */
function parseJson(result, data) {
    let json;
    // use a try-catch instead of .catch to avoid re-catching upstream errors
    try {
        json = JSON.parse(result);
    }
    catch (err) {
        throw new Error(`Expected JSON from "${data.command}". This could be due to npm instability${data.packageName ? ` or problems with the ${data.packageName} package` : ''}.\n\n${result}`);
    }
    return json;
}
/**
 * Check if package author changed between current and upgraded version.
 *
 * @param packageName Name of the package
 * @param currentVersion Current version declaration (may be range)
 * @param upgradedVersion Upgraded version declaration (may be range)
 * @param npmConfigLocal Additional npm config variables that are merged into the system npm config
 * @returns A promise that fullfills with boolean value.
 */
async function packageAuthorChanged(packageName, currentVersion, upgradedVersion, options = {}, npmConfigLocal) {
    var _a, _b;
    const result = await pacote_1.default.packument(packageName, {
        ...npmConfigLocal,
        ...npmConfig,
        fullMetadata: true,
        ...options.registry ? { registry: options.registry, silent: true } : null,
    });
    if (result.versions) {
        const pkgVersions = Object.keys(result.versions);
        const current = semver_1.default.minSatisfying(pkgVersions, currentVersion);
        const upgraded = semver_1.default.maxSatisfying(pkgVersions, upgradedVersion);
        if (current && upgraded && result.versions[current]._npmUser && result.versions[upgraded]._npmUser) {
            const currentAuthor = (_a = result.versions[current]._npmUser) === null || _a === void 0 ? void 0 : _a.name;
            const latestAuthor = (_b = result.versions[upgraded]._npmUser) === null || _b === void 0 ? void 0 : _b.name;
            return !lodash_1.default.isEqual(currentAuthor, latestAuthor);
        }
    }
    return false;
}
exports.packageAuthorChanged = packageAuthorChanged;
/**
 * Returns an object of specified values retrieved by npm view.
 *
 * @param packageName   Name of the package
 * @param fields        Array of fields like versions, time, version
 * @param               currentVersion
 * @returns             Promised result
 */
async function viewMany(packageName, fields, currentVersion, { registry, timeout, retry } = {}, retryed = 0, npmConfigLocal) {
    if (currentVersion && (!semver_1.default.validRange(currentVersion) || versionUtil.isWildCard(currentVersion))) {
        return Promise.resolve({});
    }
    let result;
    try {
        result = await pacote_1.default.packument(packageName, {
            ...npmConfigLocal,
            ...npmConfig,
            fullMetadata: fields.includes('time'),
            ...registry ? { registry, silent: true } : null,
            timeout,
        });
    }
    catch (err) {
        if (retry && ++retryed <= retry) {
            console.error(`\nFetchError: Request ${packageName} info failed[${retryed} of ${retry}]: \n${err.message}.`);
            const packument = await viewMany(packageName, fields, currentVersion, { registry, timeout, retry }, retryed, npmConfigLocal);
            return packument;
        }
        throw err;
    }
    return fields.reduce((accum, field) => ({
        ...accum,
        [field]: field.startsWith('dist-tags.') && result.versions ?
            result.versions[lodash_1.default.get(result, field)] :
            result[field]
    }), {});
}
exports.viewMany = viewMany;
/** Memoize viewMany for --deep performance. */
exports.viewManyMemoized = (0, fast_memoize_1.default)(viewMany);
/**
 * Returns the value of one of the properties retrieved by npm view.
 *
 * @param packageName   Name of the package
 * @param field         Field such as "versions" or "dist-tags.latest" are parsed from the pacote result (https://www.npmjs.com/package/pacote#packument)
 * @param currentVersion
 * @returns            Promised result
 */
async function viewOne(packageName, field, currentVersion, options = {}, npmConfigLocal) {
    const result = await (0, exports.viewManyMemoized)(packageName, [field], currentVersion, options, 0, npmConfigLocal);
    return result && result[field];
}
exports.viewOne = viewOne;
/** Returns a composite predicate that filters out deprecated, prerelease, and node engine incompatibilies from version objects returns by pacote.packument. */
function filterPredicate(options) {
    return lodash_1.default.overEvery([
        o => (0, filters_1.allowDeprecatedOrIsNotDeprecated)(o, options),
        o => (0, filters_1.allowPreOrIsNotPre)(o, options),
        options.enginesNode ? o => (0, filters_1.satisfiesNodeEngine)(o, options.nodeEngineVersion) : null,
        options.peerDependencies ? o => (0, filters_1.satisfiesPeerDependencies)(o, options.peerDependencies) : null,
    ]);
}
/**
 * Spawn npm requires a different command on Windows.
 *
 * @param args
 * @param [npmOptions={}]
 * @param [spawnOptions={}]
 * @returns
 */
function spawnNpm(args, npmOptions = {}, spawnOptions = {}) {
    const cmd = process.platform === 'win32' ? 'npm.cmd' : 'npm';
    args = Array.isArray(args) ? args : [args];
    const fullArgs = args.concat(npmOptions.global ? '--global' : [], npmOptions.prefix ? `--prefix=${npmOptions.prefix}` : [], '--depth=0', '--json');
    return (0, spawn_please_1.default)(cmd, fullArgs, spawnOptions);
}
/**
 * Get platform-specific default prefix to pass on to npm.
 *
 * @param options
 * @param [options.global]
 * @param [options.prefix]
 * @returns
 */
async function defaultPrefix(options) {
    if (options.prefix) {
        return Promise.resolve(options.prefix);
    }
    const cmd = process.platform === 'win32' ? 'npm.cmd' : 'npm';
    let prefix;
    // catch spawn error which can occur on Windows
    // https://github.com/raineorshine/npm-check-updates/issues/703
    try {
        prefix = await (0, spawn_please_1.default)(cmd, ['config', 'get', 'prefix']);
    }
    catch (e) {
        const message = (e.message || e || '').toString();
        (0, logging_1.print)(options, 'Error executing `npm config get prefix`. Caught and ignored. Unsolved: https://github.com/raineorshine/npm-check-updates/issues/703. ERROR: ' + message, 'verbose', 'error');
    }
    // FIX: for ncu -g doesn't work on homebrew or windows #146
    // https://github.com/raineorshine/npm-check-updates/issues/146
    return options.global && prefix.match('Cellar') ? '/usr/local' :
        // Workaround: get prefix on windows for global packages
        // Only needed when using npm api directly
        process.platform === 'win32' && options.global && !process.env.prefix ?
            prefix ? prefix.trim() : `${process.env.AppData}\\npm` :
            undefined;
}
exports.defaultPrefix = defaultPrefix;
/**
 * @param packageName
 * @param currentVersion
 * @param options
 * @returns
 */
const greatest = async (packageName, currentVersion, options = {}) => {
    // known type based on 'versions'
    const versions = await viewOne(packageName, 'versions', currentVersion, options);
    return lodash_1.default.last(
    // eslint-disable-next-line fp/no-mutating-methods
    lodash_1.default.filter(versions, filterPredicate(options))
        .map(o => o.version)
        .sort(versionUtil.compareVersions)) || null;
};
exports.greatest = greatest;
/**
 * Requests the list of peer dependencies for a specific package version
 *
 * @param packageName
 * @param version
 * @returns Promised {packageName: version} collection
 */
const getPeerDependencies = async (packageName, version) => {
    const npmArgs = ['view', packageName + '@' + version, 'peerDependencies'];
    const result = await spawnNpm(npmArgs, {}, { rejectOnError: false });
    return result ? parseJson(result, { command: `${npmArgs.join(' ')} --json` }) : {};
};
exports.getPeerDependencies = getPeerDependencies;
/**
 * @param [options]
 * @param [options.cwd]
 * @param [options.global]
 * @param [options.prefix]
 * @returns
 */
const list = async (options = {}) => {
    const result = await spawnNpm('ls', options, {
        ...options.cwd ? { cwd: options.cwd } : null,
        rejectOnError: false
    });
    const json = parseJson(result, { command: `npm${process.platform === 'win32' ? '.cmd' : ''} ls --json${options.global ? ' --global' : ''}` });
    return cint_1.default.mapObject(json.dependencies, (name, info) => ({
        // unmet peer dependencies have a different structure
        [name]: info.version || (info.required && info.required.version)
    }));
};
exports.list = list;
/**
 * @param packageName
 * @param currentVersion
 * @param options
 * @returns
 */
const latest = async (packageName, currentVersion, options = {}) => {
    const latest = await viewOne(packageName, 'dist-tags.latest', currentVersion, {
        registry: options.registry,
        timeout: options.timeout,
        retry: options.retry,
    }); // known type based on dist-tags.latest
    // latest should not be deprecated
    // if latest exists and latest is not a prerelease version, return it
    // if latest exists and latest is a prerelease version and --pre is specified, return it
    // if latest exists and latest not satisfies min version of engines.node
    if (latest && filterPredicate(options)(latest))
        return latest.version;
    // if latest is a prerelease version and --pre is not specified
    // or latest is deprecated
    // find the next valid version
    // known type based on dist-tags.latest
    const versions = await viewOne(packageName, 'versions', currentVersion);
    const validVersions = lodash_1.default.filter(versions, filterPredicate(options));
    return lodash_1.default.last(validVersions.map(o => o.version)) || null;
};
exports.latest = latest;
/**
 * @param packageName
 * @param currentVersion
 * @param options
 * @returns
 */
const newest = async (packageName, currentVersion, options = {}) => {
    const result = await (0, exports.viewManyMemoized)(packageName, ['time', 'versions'], currentVersion, options);
    const versionsSatisfyingNodeEngine = lodash_1.default.filter(result.versions, version => (0, filters_1.satisfiesNodeEngine)(version, options.nodeEngineVersion))
        .map((o) => o.version);
    const versions = Object.keys(result.time || {}).reduce((accum, key) => accum.concat(TIME_FIELDS.includes(key) || versionsSatisfyingNodeEngine.includes(key) ? key : []), []);
    const versionsWithTime = lodash_1.default.pullAll(versions, TIME_FIELDS);
    return lodash_1.default.last(options.pre !== false
        ? versions :
        versionsWithTime.filter(version => !versionUtil.isPre(version))) || null;
};
exports.newest = newest;
/**
 * @param packageName
 * @param currentVersion
 * @param options
 * @returns
 */
const minor = async (packageName, currentVersion, options = {}) => {
    const versions = await viewOne(packageName, 'versions', currentVersion, options);
    return versionUtil.findGreatestByLevel(lodash_1.default.filter(versions, filterPredicate(options)).map(o => o.version), currentVersion, 'minor');
};
exports.minor = minor;
/**
 * @param packageName
 * @param currentVersion
 * @param options
 * @returns
 */
const patch = async (packageName, currentVersion, options = {}) => {
    const versions = await viewOne(packageName, 'versions', currentVersion, options);
    return versionUtil.findGreatestByLevel(lodash_1.default.filter(versions, filterPredicate(options)).map(o => o.version), currentVersion, 'patch');
};
exports.patch = patch;
exports.default = spawnNpm;
//# sourceMappingURL=npm.js.map