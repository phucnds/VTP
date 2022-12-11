"use strict";
cc._RF.push(module, '21612+qnyZPXJYH7s6W2Kjq', 'Log');
// scripts/src/common/Log.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appLog = exports.appError = void 0;
var debug_1 = require("debug");
var appError = debug_1.default('app:error');
exports.appError = appError;
var appLog = debug_1.default('app:log');
exports.appLog = appLog;

cc._RF.pop();