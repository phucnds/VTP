"use strict";
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