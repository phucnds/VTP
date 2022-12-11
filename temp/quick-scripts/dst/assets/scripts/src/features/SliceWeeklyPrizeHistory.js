
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/src/features/SliceWeeklyPrizeHistory.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9ece2829K1NkpaqoHvTADoc', 'SliceWeeklyPrizeHistory');
// scripts/src/features/SliceWeeklyPrizeHistory.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.syncWeeklyPrizeHistory = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initWeeklyPrizeHistoryState = {
    data: [],
};
var weeklyPrizeHistory = toolkit_1.createSlice({
    name: 'weeklyPrizeHistory',
    initialState: initWeeklyPrizeHistoryState,
    reducers: {
        syncWeeklyPrizeHistory: function (state, _a) {
            var payload = _a.payload;
            state.data = payload.items;
        },
    },
});
exports.syncWeeklyPrizeHistory = weeklyPrizeHistory.actions.syncWeeklyPrizeHistory;
exports.default = weeklyPrizeHistory.reducer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3NyYy9mZWF0dXJlcy9TbGljZVdlZWtseVByaXplSGlzdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBNkU7QUFPN0UsSUFBTSwyQkFBMkIsR0FBNkI7SUFDNUQsSUFBSSxFQUFFLEVBQUU7Q0FDVCxDQUFBO0FBQ0QsSUFBTSxrQkFBa0IsR0FBRyxxQkFBVyxDQUFDO0lBQ3JDLElBQUksRUFBRSxvQkFBb0I7SUFDMUIsWUFBWSxFQUFFLDJCQUEyQjtJQUN6QyxRQUFRLEVBQUU7UUFDUixzQkFBc0IsWUFBQyxLQUFLLEVBQUUsRUFBVztnQkFBVCxPQUFPLGFBQUE7WUFDckMsS0FBSyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQzdCLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQTtBQUVBLFFBQUEsc0JBQXNCLEdBQ3BCLGtCQUFrQixDQUFDLE9BQU8sd0JBQUE7QUFDOUIsa0JBQWUsa0JBQWtCLENBQUMsT0FBTyxDQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24sIGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcbmltcG9ydCBFdmVudHMgZnJvbSAnLi4vLi4vY29tbW9uL0V2ZW50cydcbmltcG9ydCB7IElVc2VyUHJvZmlsZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9Vc2VyUHJvZmlsZSdcblxuZXhwb3J0IGludGVyZmFjZSBJV2Vla2x5UHJpemVIaXN0b3J5U3RhdGUge1xuICBkYXRhOiBBcnJheTxSZWNvcmQ8YW55LCBhbnk+Pixcbn1cbmNvbnN0IGluaXRXZWVrbHlQcml6ZUhpc3RvcnlTdGF0ZTogSVdlZWtseVByaXplSGlzdG9yeVN0YXRlID0ge1xuICBkYXRhOiBbXSxcbn1cbmNvbnN0IHdlZWtseVByaXplSGlzdG9yeSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogJ3dlZWtseVByaXplSGlzdG9yeScsXG4gIGluaXRpYWxTdGF0ZTogaW5pdFdlZWtseVByaXplSGlzdG9yeVN0YXRlLFxuICByZWR1Y2Vyczoge1xuICAgIHN5bmNXZWVrbHlQcml6ZUhpc3Rvcnkoc3RhdGUsIHsgcGF5bG9hZCB9KSB7XG4gICAgICBzdGF0ZS5kYXRhID0gcGF5bG9hZC5pdGVtcztcbiAgICB9LFxuICB9LFxufSlcbmV4cG9ydCBjb25zdCB7XG4gIHN5bmNXZWVrbHlQcml6ZUhpc3Rvcnlcbn0gPSB3ZWVrbHlQcml6ZUhpc3RvcnkuYWN0aW9uc1xuZXhwb3J0IGRlZmF1bHQgd2Vla2x5UHJpemVIaXN0b3J5LnJlZHVjZXJcbiJdfQ==