
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/src/common/Log.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3NyYy9jb21tb24vTG9nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUEwQjtBQUUxQixJQUFNLFFBQVEsR0FBRyxlQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7QUFJbEMsNEJBQVE7QUFIVixJQUFNLE1BQU0sR0FBRyxlQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7QUFJOUIsd0JBQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGVidWcgZnJvbSBcImRlYnVnXCI7XG5cbmNvbnN0IGFwcEVycm9yID0gZGVidWcoJ2FwcDplcnJvcicpO1xuY29uc3QgYXBwTG9nID0gZGVidWcoJ2FwcDpsb2cnKTtcblxuZXhwb3J0IHtcbiAgYXBwRXJyb3IsXG4gIGFwcExvZ1xufSJdfQ==