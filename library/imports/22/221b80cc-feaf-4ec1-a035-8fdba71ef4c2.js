"use strict";
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