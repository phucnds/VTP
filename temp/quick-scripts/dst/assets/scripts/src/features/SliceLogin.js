
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/src/features/SliceLogin.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0be56NXjuNCJquLvP+e6T97', 'SliceLogin');
// scripts/src/features/SliceLogin.ts

"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.syncLoginMilestones = exports.syncLoginStreak = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initLoginState = {
    loginStreak: 0,
    milestones: {},
};
var login = toolkit_1.createSlice({
    name: 'login',
    initialState: initLoginState,
    reducers: {
        syncLoginStreak: function (state, _a) {
            var payload = _a.payload;
            var loginStreak = payload.loginStreak;
            state.loginStreak = loginStreak;
        },
        syncLoginMilestones: function (state, _a) {
            var payload = _a.payload;
            state.milestones = payload;
        },
    },
});
exports.syncLoginStreak = (_a = login.actions, _a.syncLoginStreak), exports.syncLoginMilestones = _a.syncLoginMilestones;
exports.default = login.reducer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3NyYy9mZWF0dXJlcy9TbGljZUxvZ2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBNkU7QUFRN0UsSUFBTSxjQUFjLEdBQWdCO0lBQ2xDLFdBQVcsRUFBRSxDQUFDO0lBQ2QsVUFBVSxFQUFFLEVBQUU7Q0FDZixDQUFBO0FBQ0QsSUFBTSxLQUFLLEdBQUcscUJBQVcsQ0FBQztJQUN4QixJQUFJLEVBQUUsT0FBTztJQUNiLFlBQVksRUFBRSxjQUFjO0lBQzVCLFFBQVEsRUFBRTtRQUNSLGVBQWUsWUFBQyxLQUFLLEVBQUUsRUFBVztnQkFBVCxPQUFPLGFBQUE7WUFDdEIsSUFBQSxXQUFXLEdBQUssT0FBTyxZQUFaLENBQWE7WUFDaEMsS0FBSyxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDbEMsQ0FBQztRQUNELG1CQUFtQixZQUFDLEtBQUssRUFBRSxFQUFXO2dCQUFULE9BQU8sYUFBQTtZQUNsQyxLQUFLLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztRQUM3QixDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUE7QUFFQSxRQUFBLGVBQWUsSUFESixLQUdULEtBQUssQ0FBQyxPQUFPLHVCQURmLFFBQUEsbUJBQW1CLDBCQUNKO0FBQ2pCLGtCQUFlLEtBQUssQ0FBQyxPQUFPLENBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiwgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xuaW1wb3J0IEV2ZW50cyBmcm9tICcuLi8uLi9jb21tb24vRXZlbnRzJ1xuaW1wb3J0IHsgSVVzZXJQcm9maWxlIH0gZnJvbSAnLi4vLi4vY29tbW9uL1VzZXJQcm9maWxlJ1xuXG5leHBvcnQgaW50ZXJmYWNlIElMb2dpblN0YXRlIHtcbiAgbG9naW5TdHJlYWs6IG51bWJlcixcbiAgbWlsZXN0b25lczogUmVjb3JkPGFueSwgYW55Pixcbn1cbmNvbnN0IGluaXRMb2dpblN0YXRlOiBJTG9naW5TdGF0ZSA9IHtcbiAgbG9naW5TdHJlYWs6IDAsXG4gIG1pbGVzdG9uZXM6IHt9LFxufVxuY29uc3QgbG9naW4gPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6ICdsb2dpbicsXG4gIGluaXRpYWxTdGF0ZTogaW5pdExvZ2luU3RhdGUsXG4gIHJlZHVjZXJzOiB7XG4gICAgc3luY0xvZ2luU3RyZWFrKHN0YXRlLCB7IHBheWxvYWQgfSkge1xuICAgICAgY29uc3QgeyBsb2dpblN0cmVhayB9ID0gcGF5bG9hZDtcbiAgICAgIHN0YXRlLmxvZ2luU3RyZWFrID0gbG9naW5TdHJlYWs7XG4gICAgfSxcbiAgICBzeW5jTG9naW5NaWxlc3RvbmVzKHN0YXRlLCB7IHBheWxvYWQgfSkge1xuICAgICAgc3RhdGUubWlsZXN0b25lcyA9IHBheWxvYWQ7XG4gICAgfSxcbiAgfSxcbn0pXG5leHBvcnQgY29uc3Qge1xuICBzeW5jTG9naW5TdHJlYWssXG4gIHN5bmNMb2dpbk1pbGVzdG9uZXMsXG59ID0gbG9naW4uYWN0aW9uc1xuZXhwb3J0IGRlZmF1bHQgbG9naW4ucmVkdWNlclxuIl19