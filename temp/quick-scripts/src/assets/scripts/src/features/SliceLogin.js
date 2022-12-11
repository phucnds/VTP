"use strict";
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