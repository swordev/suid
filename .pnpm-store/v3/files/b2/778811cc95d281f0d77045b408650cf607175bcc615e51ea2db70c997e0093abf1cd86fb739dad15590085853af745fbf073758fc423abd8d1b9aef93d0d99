"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const url_1 = require("url");
const hosted_git_info_1 = __importDefault(require("hosted-git-info"));
// extract the defaultBranchPath so it can be stripped in the final output
const defaultBranchPath = (_b = (_a = hosted_git_info_1.default.fromUrl('user/repo')) === null || _a === void 0 ? void 0 : _a.browse('').match(/(\/tree\/[a-z]+)/)) === null || _b === void 0 ? void 0 : _b[0];
const regexDefaultBranchPath = new RegExp(`${defaultBranchPath}$`);
/** Gets the repo url of an installed package. */
function getPackageRepo(packageName) {
    let nodeModulePaths = require.resolve.paths(packageName);
    const localNodeModules = path_1.default.join(process.cwd(), 'node_modules');
    nodeModulePaths = [localNodeModules].concat(nodeModulePaths || []);
    for (const basePath of nodeModulePaths) { // eslint-disable-line fp/no-loops
        const packageJsonPath = path_1.default.join(basePath, packageName, 'package.json');
        if (fs_1.default.existsSync(packageJsonPath)) {
            try {
                const packageJson = JSON.parse(fs_1.default.readFileSync(packageJsonPath, 'utf-8'));
                return packageJson.repository;
            }
            catch (e) { }
        }
    }
    return null;
}
/** Remove the default branch path from a git url. */
const cleanRepoUrl = (url) => url.replace(/\/$/, '').replace(regexDefaultBranchPath, '');
/**
 * @param packageName A package name as listed in package.json's dependencies list
 * @param packageJson Optional param to specify a object representation of a package.json file instead of loading from node_modules
 * @returns A valid url to the root of the package's source or null if a url could not be determined
 */
function getRepoUrl(packageName, packageJson) {
    var _a;
    const repositoryMetadata = !packageJson ? getPackageRepo(packageName)
        : packageJson.repository ? packageJson.repository
            : null;
    if (!repositoryMetadata)
        return null;
    let gitURL;
    let directory = '';
    // It may be a string instead of an object
    if (typeof repositoryMetadata === 'string') {
        gitURL = repositoryMetadata;
        try {
            // It may already be a valid Repo URL
            const url = new url_1.URL(gitURL);
            // Some packages put a full URL in this field although it's not spec compliant. Let's detect that and use it if present
            if (['github.com', 'gitlab.com', 'bitbucket.org'].includes(url.hostname) && url.protocol === 'https:') {
                return gitURL;
            }
        }
        catch (e) { }
    }
    else if (typeof repositoryMetadata.url === 'string') {
        gitURL = repositoryMetadata.url;
        if (typeof repositoryMetadata.directory === 'string') {
            directory = repositoryMetadata.directory;
        }
    }
    if (typeof gitURL === 'string' && typeof directory === 'string') {
        const hostedGitURL = (_a = hosted_git_info_1.default.fromUrl(gitURL)) === null || _a === void 0 ? void 0 : _a.browse(directory);
        if (hostedGitURL !== undefined) {
            return cleanRepoUrl(hostedGitURL);
        }
    }
    return null;
}
exports.default = getRepoUrl;
//# sourceMappingURL=getRepoUrl.js.map