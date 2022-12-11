"use strict";
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