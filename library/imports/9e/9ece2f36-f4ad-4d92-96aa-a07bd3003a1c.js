"use strict";
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