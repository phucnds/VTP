"use strict";
cc._RF.push(module, '48739fIQZhC3oO2pZdy/1iB', 'SliceWeeklyTicket');
// scripts/src/features/SliceWeeklyTicket.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.syncWeeklyTicket = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initWeeklyTicketState = {
    bought: false,
};
var weeklyTicket = toolkit_1.createSlice({
    name: 'weeklyTicket',
    initialState: initWeeklyTicketState,
    reducers: {
        syncWeeklyTicket: function (state, _a) {
            var payload = _a.payload;
            var bought = payload.bought;
            state.bought = bought;
        },
    },
});
exports.syncWeeklyTicket = weeklyTicket.actions.syncWeeklyTicket;
exports.default = weeklyTicket.reducer;

cc._RF.pop();