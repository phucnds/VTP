"use strict";
cc._RF.push(module, '91e3fAn4OtE4Ko+rOuW/C/z', 'SliceError');
// scripts/src/features/SliceError.ts

"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshError = exports.pushError = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var APIDefine_1 = require("../app/APIDefine");
var initErrorState = {
    list: [],
    currentHandle: undefined
};
var error = toolkit_1.createSlice({
    name: 'error',
    initialState: initErrorState,
    reducers: {
        pushError: function (state, _a) {
            var payload = _a.payload;
            state.list.push(payload);
            var handleMax = state.list[0];
            handleMax = state.list.find(function (e) { return e.type == APIDefine_1.ErrorHandleType.RELOAD; });
            if (!handleMax)
                handleMax = state.list.find(function (e) { return e.type == APIDefine_1.ErrorHandleType.RETRY; });
            if (!handleMax)
                handleMax = state.list.find(function (e) { return e.type == APIDefine_1.ErrorHandleType.CLOSE; });
            if (!handleMax)
                handleMax = state.list.find(function (e) { return e.type == APIDefine_1.ErrorHandleType.BACK_TO_HOME; });
            state.currentHandle = handleMax;
        },
        refreshError: function (state) {
            state.list = [];
            state.currentHandle = undefined;
        }
    }
});
exports.pushError = (_a = error.actions, _a.pushError), exports.refreshError = _a.refreshError;
exports.default = error.reducer;

cc._RF.pop();