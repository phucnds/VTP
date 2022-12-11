
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/src/features/SliceReward.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7796e3OQyBLwqlZrNo7nLkJ', 'SliceReward');
// scripts/src/features/SliceReward.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.syncReward = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initRewardState = {
    spinReward: null,
};
var reward = toolkit_1.createSlice({
    name: 'reward',
    initialState: initRewardState,
    reducers: {
        syncReward: function (state, _a) {
            var payload = _a.payload;
            state.spinReward = payload;
        },
    },
});
exports.syncReward = reward.actions.syncReward;
exports.default = reward.reducer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3NyYy9mZWF0dXJlcy9TbGljZVJld2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBNkU7QUFZN0UsSUFBTSxlQUFlLEdBQWlCO0lBQ3BDLFVBQVUsRUFBRSxJQUFJO0NBQ2pCLENBQUE7QUFDRCxJQUFNLE1BQU0sR0FBRyxxQkFBVyxDQUFDO0lBQ3pCLElBQUksRUFBRSxRQUFRO0lBQ2QsWUFBWSxFQUFFLGVBQWU7SUFDN0IsUUFBUSxFQUFFO1FBQ1IsVUFBVSxZQUFDLEtBQUssRUFBRSxFQUFXO2dCQUFULE9BQU8sYUFBQTtZQUN6QixLQUFLLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztRQUM3QixDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUE7QUFFQSxRQUFBLFVBQVUsR0FDUixNQUFNLENBQUMsT0FBTyxZQUFBO0FBQ2xCLGtCQUFlLE1BQU0sQ0FBQyxPQUFPLENBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiwgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xuaW1wb3J0IEV2ZW50cyBmcm9tICcuLi8uLi9jb21tb24vRXZlbnRzJ1xuaW1wb3J0IHsgSVVzZXJQcm9maWxlIH0gZnJvbSAnLi4vLi4vY29tbW9uL1VzZXJQcm9maWxlJ1xuXG5leHBvcnQgaW50ZXJmYWNlIElSZXdhcmQge1xuICB0eXBlOiBzdHJpbmcsXG4gIGFtb3VudDogbnVtYmVyLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElSZXdhcmRTdGF0ZSB7XG4gIHNwaW5SZXdhcmQ6IElSZXdhcmQsXG59XG5jb25zdCBpbml0UmV3YXJkU3RhdGU6IElSZXdhcmRTdGF0ZSA9IHtcbiAgc3BpblJld2FyZDogbnVsbCxcbn1cbmNvbnN0IHJld2FyZCA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogJ3Jld2FyZCcsXG4gIGluaXRpYWxTdGF0ZTogaW5pdFJld2FyZFN0YXRlLFxuICByZWR1Y2Vyczoge1xuICAgIHN5bmNSZXdhcmQoc3RhdGUsIHsgcGF5bG9hZCB9KSB7XG4gICAgICBzdGF0ZS5zcGluUmV3YXJkID0gcGF5bG9hZDtcbiAgICB9LFxuICB9LFxufSlcbmV4cG9ydCBjb25zdCB7XG4gIHN5bmNSZXdhcmRcbn0gPSByZXdhcmQuYWN0aW9uc1xuZXhwb3J0IGRlZmF1bHQgcmV3YXJkLnJlZHVjZXJcbiJdfQ==