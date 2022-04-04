"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const json_parse_helpfulerror_1 = __importDefault(require("json-parse-helpfulerror"));
const logging_1 = require("../logging");
const getCurrentDependencies_1 = __importDefault(require("./getCurrentDependencies"));
/** Get peer dependencies from installed packages */
function getPeerDependencies(current, options) {
    const basePath = options.cwd || './';
    return Object.keys(current).reduce((accum, pkgName) => {
        const path = basePath + 'node_modules/' + pkgName + '/package.json';
        let peers = {};
        try {
            const pkgData = fs_1.default.readFileSync(path, 'utf-8');
            const pkg = json_parse_helpfulerror_1.default.parse(pkgData);
            peers = (0, getCurrentDependencies_1.default)(pkg, { ...options, dep: 'peer' });
        }
        catch (e) {
            (0, logging_1.print)(options, 'Could not read peer dependencies for package ' + pkgName + '. Is this package installed?', 'warn');
        }
        return { ...accum, [pkgName]: peers };
    }, {});
}
exports.default = getPeerDependencies;
//# sourceMappingURL=getPeerDependencies.js.map