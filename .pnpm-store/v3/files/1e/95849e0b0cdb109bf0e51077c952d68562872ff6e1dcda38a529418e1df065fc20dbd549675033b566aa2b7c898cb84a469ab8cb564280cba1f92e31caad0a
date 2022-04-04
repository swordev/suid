"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logging_1 = require("../logging");
/** Print an error. Exit the process if in CLI mode. */
function programError(options, message) {
    if (options.cli) {
        (0, logging_1.print)(options, message, null, 'error');
        process.exit(1);
    }
    else {
        throw new Error(message);
    }
}
exports.default = programError;
//# sourceMappingURL=programError.js.map