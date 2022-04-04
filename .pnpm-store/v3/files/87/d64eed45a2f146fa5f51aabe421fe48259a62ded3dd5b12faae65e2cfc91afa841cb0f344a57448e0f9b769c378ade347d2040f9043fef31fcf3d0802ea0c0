"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = exports.parsers = void 0;
const parser_babel_1 = require("prettier/parser-babel");
const isObject = (json) => json !== null && typeof json === 'object';
function sortObject(object, recursive) {
    if (Array.isArray(object) && recursive) {
        return object.map((entry) => {
            return sortObject(entry, recursive);
        });
    }
    else if (object !== null && typeof object === 'object' && !Array.isArray(object)) {
        const sortedJson = {};
        for (const key of Object.keys(object).sort()) {
            if (recursive && isObject(object[key])) {
                sortedJson[key] = sortObject(object[key], recursive);
            }
            else {
                sortedJson[key] = object[key];
            }
        }
        return sortedJson;
    }
    return object;
}
exports.parsers = {
    'json': Object.assign(Object.assign({}, parser_babel_1.parsers.json), { preprocess(text, options) {
            let preprocessedText = text;
            /* istanbul ignore next */
            if (parser_babel_1.parsers.json.preprocess) {
                preprocessedText = parser_babel_1.parsers.json.preprocess(text, options);
            }
            let json;
            try {
                json = JSON.parse(preprocessedText);
            }
            catch (_) {
                // skip invalid JSON; this is best handled by the regular JSON parser
                return text;
            }
            const recursive = options.jsonRecursiveSort;
            // Only objects are intended to be sorted by this plugin
            if (json === null || typeof json !== 'object' || (Array.isArray(json) && !recursive)) {
                return text;
            }
            const sortedJson = sortObject(json, recursive);
            return JSON.stringify(sortedJson, null, 2);
        } }),
};
// I get a TypeScript error if I just set the type to 'boolean'
// This fixes the error. I don't know why.
const type = 'boolean';
exports.options = {
    jsonRecursiveSort: {
        category: 'json-sort',
        default: false,
        description: 'Sort JSON files recursively, including any nested properties',
        since: '0.0.2',
        type,
    },
};
//# sourceMappingURL=index.js.map