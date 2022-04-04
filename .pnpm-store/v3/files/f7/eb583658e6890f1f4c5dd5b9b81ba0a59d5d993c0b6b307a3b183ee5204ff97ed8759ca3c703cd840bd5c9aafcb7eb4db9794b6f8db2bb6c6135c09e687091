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
exports.patch = exports.minor = exports.greatest = exports.newest = exports.latest = exports.list = exports.defaultPrefix = void 0;
// eslint-disable-next-line fp/no-events
const events_1 = require("events");
const lodash_1 = __importDefault(require("lodash"));
const cint_1 = __importDefault(require("cint"));
const fs_1 = __importDefault(require("fs"));
const jsonlines_1 = __importDefault(require("jsonlines"));
const fast_memoize_1 = __importDefault(require("fast-memoize"));
const spawn_please_1 = __importDefault(require("spawn-please"));
const yaml_1 = __importDefault(require("yaml"));
const versionUtil = __importStar(require("../version-util"));
const npm_1 = require("./npm");
const filters_1 = require("./filters");
const TIME_FIELDS = ['modified', 'created'];
// If private registry auth is specified in npmScopes in .yarnrc.yml, read them in and convert them to npm config variables.
// Define as a memoized function to efficiently call existsSync and readFileSync only once, and only if yarn is being used.
// https://github.com/raineorshine/npm-check-updates/issues/1036
const npmConfigFromYarn = (0, fast_memoize_1.default)(() => {
    /** Safely interpolates a string as a template string. */
    const interpolate = (s, data) => s.replace(/\$\{([^:-]+)(?:(:)?-([^}]*))?\}/g, (match, key, name, fallbackOnEmpty, fallback) => data[key] || (fallbackOnEmpty ? fallback : ''));
    const npmConfig = {};
    const yarnrcLocalExists = fs_1.default.existsSync('.yarnrc.yml');
    const yarnrcUserExists = fs_1.default.existsSync('~/.yarnrc.yml');
    const yarnrcLocal = yarnrcLocalExists ? fs_1.default.readFileSync('.yarnrc.yml', 'utf-8') : '';
    const yarnrcUser = yarnrcUserExists ? fs_1.default.readFileSync('~/.yarnrc.yml', 'utf-8') : '';
    const yarnConfigLocal = yaml_1.default.parse(yarnrcLocal);
    const yarnConfigUser = yaml_1.default.parse(yarnrcUser);
    /** Reads an auth token from a yarn config, interpolates it, and sets it on the npm config. */
    const setNpmAuthToken = ([dep, scopedConfig]) => {
        if (scopedConfig.npmAuthToken) {
            // get registry server from this config or a previous config (assumes setNpmRegistry has already been called on all npm scopes)
            const registryServer = scopedConfig.npmRegistryServer || npmConfig[`@${dep}:registry`];
            // interpolate environment variable fallback
            // https://yarnpkg.com/configuration/yarnrc
            if (registryServer) {
                npmConfig[`${registryServer.replace(/^https?:/, '')}/:_authToken`] = interpolate(scopedConfig.npmAuthToken, process.env);
            }
        }
    };
    /** Reads a registry from a yarn config. interpolates it, and sets it on the npm config. */
    const setNpmRegistry = ([dep, scopedConfig]) => {
        if (scopedConfig.npmRegistryServer) {
            npmConfig[`@${dep}:registry`] = scopedConfig.npmRegistryServer;
        }
    };
    // set registry for all npm scopes
    Object.entries((yarnConfigUser === null || yarnConfigUser === void 0 ? void 0 : yarnConfigUser.npmScopes) || {}).forEach(setNpmRegistry);
    Object.entries((yarnConfigLocal === null || yarnConfigLocal === void 0 ? void 0 : yarnConfigLocal.npmScopes) || {}).forEach(setNpmRegistry);
    // set auth token after npm registry, since auth token syntax uses regitry
    Object.entries((yarnConfigUser === null || yarnConfigUser === void 0 ? void 0 : yarnConfigUser.npmScopes) || {}).forEach(setNpmAuthToken);
    Object.entries((yarnConfigLocal === null || yarnConfigLocal === void 0 ? void 0 : yarnConfigLocal.npmScopes) || {}).forEach(setNpmAuthToken);
    return npmConfig;
});
/**
 * Parse JSON lines and throw an informative error on failure.
 *
 * @param result    Output from `yarn list --json` to be parsed
 */
async function parseJsonLines(result) {
    const dependencies = {};
    const parser = jsonlines_1.default.parse();
    parser.on('data', d => {
        // only parse info data
        // ignore error info, e.g. "Visit https://yarnpkg.com/en/docs/cli/list for documentation about this command."
        if (d.type === 'info' && !d.data.match(/^Visit/)) {
            // parse package name and version number from info data, e.g. "nodemon@2.0.4" has binaries
            const [, pkgName, pkgVersion] = d.data.match(/"(@?.*)@(.*)"/) || [];
            dependencies[pkgName] = {
                version: pkgVersion,
                from: pkgName,
            };
        }
        else if (d.type === 'error') {
            throw new Error(d.data);
        }
    });
    parser.write(result);
    parser.end();
    await (0, events_1.once)(parser, 'end');
    return { dependencies };
}
/** Returns a composite predicate that filters out deprecated, prerelease, and node engine incompatibilies from version objects returns by pacote.packument. */
function filterPredicate(options) {
    return lodash_1.default.overEvery([
        o => (0, filters_1.allowDeprecatedOrIsNotDeprecated)(o, options),
        o => (0, filters_1.allowPreOrIsNotPre)(o, options),
        options.enginesNode ? o => (0, filters_1.satisfiesNodeEngine)(o, options.nodeEngineVersion) : null,
    ]);
}
/**
 * Spawn yarn requires a different command on Windows.
 *
 * @param args
 * @param [yarnOptions={}]
 * @param [spawnOptions={}]
 * @returns
 */
async function spawnYarn(args, yarnOptions = {}, spawnOptions) {
    const cmd = process.platform === 'win32' ? 'yarn.cmd' : 'yarn';
    const fullArgs = [
        ...yarnOptions.global ? 'global' : [],
        ...Array.isArray(args) ? args : [args],
        '--depth=0',
        ...yarnOptions.prefix ? `--prefix=${yarnOptions.prefix}` : [],
        '--json',
        '--no-progress'
    ];
    return (0, spawn_please_1.default)(cmd, fullArgs, spawnOptions);
}
/**
 * Get platform-specific default prefix to pass on to yarn.
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
    const cmd = process.platform === 'win32' ? 'yarn.cmd' : 'yarn';
    const prefix = await (0, spawn_please_1.default)(cmd, ['global', 'dir'])
        // yarn 2.0 does not support yarn global
        // catch error to prevent process from crashing
        // https://github.com/raineorshine/npm-check-updates/issues/873
        .catch(() => { });
    // FIX: for ncu -g doesn't work on homebrew or windows #146
    // https://github.com/raineorshine/npm-check-updates/issues/146
    return options.global && prefix && prefix.match('Cellar')
        ? '/usr/local'
        // Workaround: get prefix on windows for global packages
        // Only needed when using npm api directly
        : process.platform === 'win32' && options.global && !process.env.prefix ?
            prefix ? prefix.trim() : `${process.env.LOCALAPPDATA}\\Yarn\\Data\\global` :
            null;
}
exports.defaultPrefix = defaultPrefix;
/**
 * @param [options]
 * @param [options.cwd]
 * @param [options.global]
 * @param [options.prefix]
 * @returns
 */
const list = async (options = {}, spawnOptions) => {
    const jsonLines = await spawnYarn('list', options, {
        ...options.cwd ? { cwd: options.cwd } : {},
        ...spawnOptions,
    });
    const json = await parseJsonLines(jsonLines);
    return cint_1.default.mapObject(json.dependencies, (name, info) => ({
        // unmet peer dependencies have a different structure
        [name]: info.version || (info.required && info.required.version),
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
    const latest = await (0, npm_1.viewOne)(packageName, 'dist-tags.latest', currentVersion, {
        registry: options.registry,
        timeout: options.timeout,
        retry: options.retry,
    }, npmConfigFromYarn()); // known type based on dist-tags.latest
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
    const versions = await (0, npm_1.viewOne)(packageName, 'versions', currentVersion, {
        registry: options.registry,
        timeout: options.timeout,
        retry: options.retry,
    }, npmConfigFromYarn());
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
    const result = await (0, npm_1.viewManyMemoized)(packageName, ['time', 'versions'], currentVersion, options, 0, npmConfigFromYarn());
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
const greatest = async (packageName, currentVersion, options = {}) => {
    const versions = await (0, npm_1.viewOne)(packageName, 'versions', currentVersion, options, npmConfigFromYarn());
    return lodash_1.default.last(
    // eslint-disable-next-line fp/no-mutating-methods
    lodash_1.default.filter(versions, filterPredicate(options))
        .map(o => o.version)
        .sort(versionUtil.compareVersions)) || null;
};
exports.greatest = greatest;
/**
 * @param packageName
 * @param currentVersion
 * @param options
 * @returns
 */
const minor = async (packageName, currentVersion, options = {}) => {
    const versions = await (0, npm_1.viewOne)(packageName, 'versions', currentVersion, options, npmConfigFromYarn());
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
    const versions = await (0, npm_1.viewOne)(packageName, 'versions', currentVersion, options, npmConfigFromYarn());
    return versionUtil.findGreatestByLevel(lodash_1.default.filter(versions, filterPredicate(options)).map(o => o.version), currentVersion, 'patch');
};
exports.patch = patch;
exports.default = spawnYarn;
//# sourceMappingURL=yarn.js.map