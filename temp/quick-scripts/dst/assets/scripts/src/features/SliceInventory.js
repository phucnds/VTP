
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/src/features/SliceInventory.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '79443t7AD1Ja4phZ8zUQyZ0', 'SliceInventory');
// scripts/src/features/SliceInventory.ts

"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetTickets = exports.syncTickets = exports.resetInventory = exports.syncInventory = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initInventoryState = {
    rewards: [],
    tickets: [],
};
var inventory = toolkit_1.createSlice({
    name: 'inventory',
    initialState: initInventoryState,
    reducers: {
        syncInventory: function (state, _a) {
            var payload = _a.payload;
            state.rewards = payload.items;
        },
        resetInventory: function (state, _a) {
            state.rewards = [];
        },
        syncTickets: function (state, _a) {
            var payload = _a.payload;
            state.tickets = payload.items;
        },
        resetTickets: function (state, _a) {
            state.tickets = [];
        }
    },
});
exports.syncInventory = (_a = inventory.actions, _a.syncInventory), exports.resetInventory = _a.resetInventory, exports.syncTickets = _a.syncTickets, exports.resetTickets = _a.resetTickets;
exports.default = inventory.reducer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3NyYy9mZWF0dXJlcy9TbGljZUludmVudG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsNENBQTZFO0FBUTdFLElBQU0sa0JBQWtCLEdBQW9CO0lBQzFDLE9BQU8sRUFBRSxFQUFFO0lBQ1gsT0FBTyxFQUFFLEVBQUU7Q0FDWixDQUFBO0FBQ0QsSUFBTSxTQUFTLEdBQUcscUJBQVcsQ0FBQztJQUM1QixJQUFJLEVBQUUsV0FBVztJQUNqQixZQUFZLEVBQUUsa0JBQWtCO0lBQ2hDLFFBQVEsRUFBRTtRQUNSLGFBQWEsWUFBQyxLQUFLLEVBQUUsRUFBVztnQkFBVCxPQUFPLGFBQUE7WUFDNUIsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQ2hDLENBQUM7UUFDRCxjQUFjLFlBQUMsS0FBSyxFQUFFLEVBQUc7WUFDdkIsS0FBSyxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDckIsQ0FBQztRQUNELFdBQVcsWUFBQyxLQUFLLEVBQUUsRUFBVztnQkFBVCxPQUFPLGFBQUE7WUFDMUIsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQ2hDLENBQUM7UUFDRCxZQUFZLFlBQUMsS0FBSyxFQUFFLEVBQUc7WUFDckIsS0FBSyxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDckIsQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBO0FBRUEsUUFBQSxhQUFhLElBREYsS0FLVCxTQUFTLENBQUMsT0FBTyxxQkFIbkIsUUFBQSxjQUFjLHNCQUNkLFFBQUEsV0FBVyxtQkFDWCxRQUFBLFlBQVksbUJBQ087QUFDckIsa0JBQWUsU0FBUyxDQUFDLE9BQU8sQ0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnO1xuaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24sIGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcbmltcG9ydCBFdmVudHMgZnJvbSAnLi4vLi4vY29tbW9uL0V2ZW50cydcbmltcG9ydCB7IElVc2VyUHJvZmlsZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9Vc2VyUHJvZmlsZSdcblxuZXhwb3J0IGludGVyZmFjZSBJSW52ZW50b3J5U3RhdGUge1xuICByZXdhcmRzOiBBcnJheTxSZWNvcmQ8YW55LCBhbnk+PixcbiAgdGlja2V0czogQXJyYXk8UmVjb3JkPGFueSwgYW55Pj4sXG59XG5jb25zdCBpbml0SW52ZW50b3J5U3RhdGU6IElJbnZlbnRvcnlTdGF0ZSA9IHtcbiAgcmV3YXJkczogW10sXG4gIHRpY2tldHM6IFtdLFxufVxuY29uc3QgaW52ZW50b3J5ID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiAnaW52ZW50b3J5JyxcbiAgaW5pdGlhbFN0YXRlOiBpbml0SW52ZW50b3J5U3RhdGUsXG4gIHJlZHVjZXJzOiB7XG4gICAgc3luY0ludmVudG9yeShzdGF0ZSwgeyBwYXlsb2FkIH0pIHtcbiAgICAgIHN0YXRlLnJld2FyZHMgPSBwYXlsb2FkLml0ZW1zO1xuICAgIH0sXG4gICAgcmVzZXRJbnZlbnRvcnkoc3RhdGUsIHsgfSkge1xuICAgICAgc3RhdGUucmV3YXJkcyA9IFtdO1xuICAgIH0sXG4gICAgc3luY1RpY2tldHMoc3RhdGUsIHsgcGF5bG9hZCB9KSB7XG4gICAgICBzdGF0ZS50aWNrZXRzID0gcGF5bG9hZC5pdGVtcztcbiAgICB9LFxuICAgIHJlc2V0VGlja2V0cyhzdGF0ZSwgeyB9KSB7XG4gICAgICBzdGF0ZS50aWNrZXRzID0gW107XG4gICAgfVxuICB9LFxufSlcbmV4cG9ydCBjb25zdCB7XG4gIHN5bmNJbnZlbnRvcnksXG4gIHJlc2V0SW52ZW50b3J5LFxuICBzeW5jVGlja2V0cyxcbiAgcmVzZXRUaWNrZXRzLFxufSA9IGludmVudG9yeS5hY3Rpb25zXG5leHBvcnQgZGVmYXVsdCBpbnZlbnRvcnkucmVkdWNlclxuIl19