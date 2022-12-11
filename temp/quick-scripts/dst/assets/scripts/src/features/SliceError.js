
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/src/features/SliceError.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3NyYy9mZWF0dXJlcy9TbGljZUVycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBOEQ7QUFDOUQsOENBQWtFO0FBV2xFLElBQU0sY0FBYyxHQUFnQjtJQUNoQyxJQUFJLEVBQUUsRUFBRTtJQUNSLGFBQWEsRUFBRSxTQUFTO0NBQzNCLENBQUM7QUFDRixJQUFNLEtBQUssR0FBRyxxQkFBVyxDQUFDO0lBQ3RCLElBQUksRUFBRSxPQUFPO0lBQ2IsWUFBWSxFQUFFLGNBQWM7SUFDNUIsUUFBUSxFQUFFO1FBQ04sU0FBUyxFQUFULFVBQVUsS0FBSyxFQUFFLEVBQXVDO2dCQUFyQyxPQUFPLGFBQUE7WUFDdEIsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDekIsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUM3QixTQUFTLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxJQUFJLDJCQUFlLENBQUMsTUFBTSxFQUFoQyxDQUFnQyxDQUFDLENBQUE7WUFDbEUsSUFBSSxDQUFDLFNBQVM7Z0JBQUUsU0FBUyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksSUFBSSwyQkFBZSxDQUFDLEtBQUssRUFBL0IsQ0FBK0IsQ0FBQyxDQUFBO1lBQ2pGLElBQUksQ0FBQyxTQUFTO2dCQUFFLFNBQVMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLElBQUksMkJBQWUsQ0FBQyxLQUFLLEVBQS9CLENBQStCLENBQUMsQ0FBQTtZQUNqRixJQUFJLENBQUMsU0FBUztnQkFBRSxTQUFTLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxJQUFJLDJCQUFlLENBQUMsWUFBWSxFQUF0QyxDQUFzQyxDQUFDLENBQUE7WUFDeEYsS0FBSyxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUE7UUFDbkMsQ0FBQztRQUNELFlBQVksWUFBQyxLQUFLO1lBQ2QsS0FBSyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUE7WUFDZixLQUFLLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQTtRQUNuQyxDQUFDO0tBQ0o7Q0FDSixDQUFDLENBQUE7QUFFYSxRQUFBLFNBQVMsSUFBWCxLQUE4QixLQUFLLENBQUMsT0FBTyxpQkFBOUIsUUFBQSxZQUFZLG1CQUFtQjtBQUV6RCxrQkFBZSxLQUFLLENBQUMsT0FBTyxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IHsgRXJyb3JIYW5kbGVUeXBlLCBJQVBJSW50ZXJmYWNlIH0gZnJvbSBcIi4uL2FwcC9BUElEZWZpbmVcIjtcbmV4cG9ydCBpbnRlcmZhY2UgSUVycm9ySGFubGUge1xuICAgIHR5cGU6IEVycm9ySGFuZGxlVHlwZSxcbiAgICBlcnJvckNvZGU6IHN0cmluZyxcbiAgICBhcGk6IElBUElJbnRlcmZhY2UsXG59XG5leHBvcnQgaW50ZXJmYWNlIElFcnJvclN0YXRlIHtcbiAgICBsaXN0OiBJRXJyb3JIYW5sZVtdLFxuICAgIGN1cnJlbnRIYW5kbGU6IElFcnJvckhhbmxlLFxufVxuXG5jb25zdCBpbml0RXJyb3JTdGF0ZTogSUVycm9yU3RhdGUgPSB7XG4gICAgbGlzdDogW10sXG4gICAgY3VycmVudEhhbmRsZTogdW5kZWZpbmVkXG59O1xuY29uc3QgZXJyb3IgPSBjcmVhdGVTbGljZSh7XG4gICAgbmFtZTogJ2Vycm9yJyxcbiAgICBpbml0aWFsU3RhdGU6IGluaXRFcnJvclN0YXRlLFxuICAgIHJlZHVjZXJzOiB7XG4gICAgICAgIHB1c2hFcnJvcihzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248SUVycm9ySGFubGU+KSB7XG4gICAgICAgICAgICBzdGF0ZS5saXN0LnB1c2gocGF5bG9hZCk7XG4gICAgICAgICAgICBsZXQgaGFuZGxlTWF4ID0gc3RhdGUubGlzdFswXVxuICAgICAgICAgICAgaGFuZGxlTWF4ID0gc3RhdGUubGlzdC5maW5kKGUgPT4gZS50eXBlID09IEVycm9ySGFuZGxlVHlwZS5SRUxPQUQpXG4gICAgICAgICAgICBpZiAoIWhhbmRsZU1heCkgaGFuZGxlTWF4ID0gc3RhdGUubGlzdC5maW5kKGUgPT4gZS50eXBlID09IEVycm9ySGFuZGxlVHlwZS5SRVRSWSlcbiAgICAgICAgICAgIGlmICghaGFuZGxlTWF4KSBoYW5kbGVNYXggPSBzdGF0ZS5saXN0LmZpbmQoZSA9PiBlLnR5cGUgPT0gRXJyb3JIYW5kbGVUeXBlLkNMT1NFKVxuICAgICAgICAgICAgaWYgKCFoYW5kbGVNYXgpIGhhbmRsZU1heCA9IHN0YXRlLmxpc3QuZmluZChlID0+IGUudHlwZSA9PSBFcnJvckhhbmRsZVR5cGUuQkFDS19UT19IT01FKVxuICAgICAgICAgICAgc3RhdGUuY3VycmVudEhhbmRsZSA9IGhhbmRsZU1heFxuICAgICAgICB9LFxuICAgICAgICByZWZyZXNoRXJyb3Ioc3RhdGUpIHtcbiAgICAgICAgICAgIHN0YXRlLmxpc3QgPSBbXVxuICAgICAgICAgICAgc3RhdGUuY3VycmVudEhhbmRsZSA9IHVuZGVmaW5lZFxuICAgICAgICB9XG4gICAgfVxufSlcblxuZXhwb3J0IGNvbnN0IHsgcHVzaEVycm9yLCByZWZyZXNoRXJyb3IgfSA9IGVycm9yLmFjdGlvbnM7XG5cbmV4cG9ydCBkZWZhdWx0IGVycm9yLnJlZHVjZXI7Il19