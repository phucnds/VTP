
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/src/app/rootReducer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '221b8DM/q9OwaA1j9unHvTC', 'rootReducer');
// scripts/src/app/rootReducer.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var toolkit_1 = require("@reduxjs/toolkit");
var SliceApp_1 = require("../features/SliceApp");
var SliceLogin_1 = require("../features/SliceLogin");
var SliceUser_1 = require("../features/SliceUser");
var SliceQuests_1 = require("../features/SliceQuests");
var SliceDeeplinks_1 = require("../features/SliceDeeplinks");
var SliceReward_1 = require("../features/SliceReward");
var SliceWeeklyTicket_1 = require("../features/SliceWeeklyTicket");
var SliceError_1 = require("../features/SliceError");
var SliceInventory_1 = require("../features/SliceInventory");
var SliceWeeklyPrizeHistory_1 = require("../features/SliceWeeklyPrizeHistory");
var rootReducer = toolkit_1.combineReducers({
    app: SliceApp_1.default,
    login: SliceLogin_1.default,
    user: SliceUser_1.default,
    quests: SliceQuests_1.default,
    deeplinks: SliceDeeplinks_1.default,
    reward: SliceReward_1.default,
    weeklyTicket: SliceWeeklyTicket_1.default,
    error: SliceError_1.default,
    inventory: SliceInventory_1.default,
    weeklyPrizeHistory: SliceWeeklyPrizeHistory_1.default,
});
exports.default = rootReducer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3NyYy9hcHAvcm9vdFJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBa0Q7QUFDbEQsaURBQTZDO0FBQzdDLHFEQUFpRDtBQUNqRCxtREFBK0M7QUFDL0MsdURBQW1EO0FBQ25ELDZEQUF3RDtBQUN4RCx1REFBbUQ7QUFDbkQsbUVBQStEO0FBQy9ELHFEQUFpRDtBQUNqRCw2REFBeUQ7QUFDekQsK0VBQTJFO0FBRTNFLElBQU0sV0FBVyxHQUFHLHlCQUFlLENBQUM7SUFDaEMsR0FBRyxFQUFFLGtCQUFVO0lBQ2YsS0FBSyxFQUFFLG9CQUFZO0lBQ25CLElBQUksRUFBRSxtQkFBVztJQUNqQixNQUFNLEVBQUUscUJBQWE7SUFDckIsU0FBUyxFQUFFLHdCQUFlO0lBQzFCLE1BQU0sRUFBRSxxQkFBYTtJQUNyQixZQUFZLEVBQUUsMkJBQW1CO0lBQ2pDLEtBQUssRUFBRSxvQkFBWTtJQUNuQixTQUFTLEVBQUUsd0JBQWdCO0lBQzNCLGtCQUFrQixFQUFFLGlDQUF5QjtDQUNoRCxDQUFDLENBQUE7QUFDRixrQkFBZSxXQUFXLENBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xuaW1wb3J0IGFwcFJlZHVjZXIgZnJvbSAnLi4vZmVhdHVyZXMvU2xpY2VBcHAnXG5pbXBvcnQgbG9naW5SZWR1Y2VyIGZyb20gJy4uL2ZlYXR1cmVzL1NsaWNlTG9naW4nXG5pbXBvcnQgdXNlclJlZHVjZXIgZnJvbSAnLi4vZmVhdHVyZXMvU2xpY2VVc2VyJ1xuaW1wb3J0IHF1ZXN0c1JlZHVjZXIgZnJvbSAnLi4vZmVhdHVyZXMvU2xpY2VRdWVzdHMnXG5pbXBvcnQgZGVlcGxpbmtSZWR1Y2VyIGZyb20gJy4uL2ZlYXR1cmVzL1NsaWNlRGVlcGxpbmtzJ1xuaW1wb3J0IHJld2FyZFJlZHVjZXIgZnJvbSAnLi4vZmVhdHVyZXMvU2xpY2VSZXdhcmQnXG5pbXBvcnQgd2Vla2x5VGlja2V0UmVkdWNlciBmcm9tICcuLi9mZWF0dXJlcy9TbGljZVdlZWtseVRpY2tldCdcbmltcG9ydCBlcnJvclJlZHVjZXIgZnJvbSAnLi4vZmVhdHVyZXMvU2xpY2VFcnJvcidcbmltcG9ydCBpbnZlbnRvcnlSZWR1Y2VyIGZyb20gJy4uL2ZlYXR1cmVzL1NsaWNlSW52ZW50b3J5J1xuaW1wb3J0IHdlZWtseVByaXplSGlzdG9yeVJlZHVjZXIgZnJvbSAnLi4vZmVhdHVyZXMvU2xpY2VXZWVrbHlQcml6ZUhpc3RvcnknXG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICBhcHA6IGFwcFJlZHVjZXIsXG4gICAgbG9naW46IGxvZ2luUmVkdWNlcixcbiAgICB1c2VyOiB1c2VyUmVkdWNlcixcbiAgICBxdWVzdHM6IHF1ZXN0c1JlZHVjZXIsXG4gICAgZGVlcGxpbmtzOiBkZWVwbGlua1JlZHVjZXIsXG4gICAgcmV3YXJkOiByZXdhcmRSZWR1Y2VyLFxuICAgIHdlZWtseVRpY2tldDogd2Vla2x5VGlja2V0UmVkdWNlcixcbiAgICBlcnJvcjogZXJyb3JSZWR1Y2VyLFxuICAgIGludmVudG9yeTogaW52ZW50b3J5UmVkdWNlcixcbiAgICB3ZWVrbHlQcml6ZUhpc3Rvcnk6IHdlZWtseVByaXplSGlzdG9yeVJlZHVjZXIsXG59KVxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXJcbiJdfQ==