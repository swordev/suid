#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const lodash_1 = __importDefault(require("lodash"));
const update_notifier_1 = __importDefault(require("update-notifier"));
const index_1 = __importDefault(require("../index"));
const package_json_1 = __importDefault(require("../../package.json"));
const cli_options_1 = __importDefault(require("../cli-options"));
const getNcuRc_1 = __importDefault(require("../lib/getNcuRc"));
// check if a new version of ncu is available and print an update notification
const notifier = (0, update_notifier_1.default)({ pkg: package_json_1.default });
if (notifier.update && notifier.update.latest !== package_json_1.default.version) {
    notifier.notify({ defer: false, isGlobal: true });
}
// manually detect option-specific help
// https://github.com/raineorshine/npm-check-updates/issues/787
const rawArgs = process.argv.slice(2);
if (rawArgs.includes('--help') && rawArgs.length > 1) {
    const nonHelpArgs = rawArgs.filter(arg => arg !== '--help');
    nonHelpArgs.forEach(arg => {
        const option = cli_options_1.default.find(({ long }) => `--${long}` === arg);
        if (option) {
            console.log(`Usage: ncu --${option.long}`);
            if (option.short) {
                console.log(`       ncu -${option.short}`);
            }
            if (option.default !== undefined && !(Array.isArray(option.default) && option.default.length === 0)) {
                console.log(`Default: ${option.default}`);
            }
            if (option.help) {
                console.log(`\n${option.help}`);
            }
            else if (option.description) {
                console.log(`\n${option.description}`);
            }
        }
        else {
            console.log(`Unknown option: ${arg}`);
        }
    });
    if (rawArgs.length - nonHelpArgs.length > 1) {
        console.log('Would you like some help with your help?');
    }
    process.exit(0);
}
// start commander program
commander_1.program
    .description('[filter] is a list or regex of package names to check (all others will be ignored).')
    .usage('[options] [filter]');
// add cli options
cli_options_1.default.forEach(({ long, short, arg, description, default: defaultValue, parse }) => 
// handle 3rd/4th argument polymorphism
commander_1.program.option(`${short ? `-${short}, ` : ''}--${long}${arg ? ` <${arg}>` : ''}`, description, parse || defaultValue, parse ? defaultValue : undefined));
// set version option at the end
commander_1.program.version(package_json_1.default.version);
commander_1.program.parse(process.argv);
let programOpts = commander_1.program.opts();
const { configFileName, configFilePath, packageFile, mergeConfig } = programOpts;
// load .ncurc
// Do not load when global option is set
// Do not load when tests are running (an be overridden if configFilePath is set explicitly, or --mergeConfig option specified)
const rcResult = !programOpts.global && (!process.env.NCU_TESTS || configFilePath || mergeConfig)
    ? (0, getNcuRc_1.default)({ configFileName, configFilePath, packageFile })
    : null;
// combine command line arguments with config file arguments
const combinedArguments = rcResult
    ? [
        ...process.argv.slice(0, 2),
        ...rcResult.args,
        ...process.argv.slice(2),
    ]
    : process.argv;
commander_1.program.parse(combinedArguments);
programOpts = commander_1.program.opts();
// filter out undefined program options and combine cli options with config file options
const options = {
    ...rcResult && Object.keys(rcResult.config).length > 0
        ? { rcConfigPath: rcResult.filePath }
        : null,
    ...lodash_1.default.pickBy(commander_1.program.opts(), value => value !== undefined),
    args: commander_1.program.args,
    ...programOpts.filter ? { filter: programOpts.filter } : null,
};
// NOTE: Options handling and defaults go in initOptions in index.js
(0, index_1.default)(options, { cli: true });
//# sourceMappingURL=cli.js.map