"use strict";
cc._RF.push(module, '52a96e8z4JBlLxhfwv64e/v', 'SliceQuests');
// scripts/src/features/SliceQuests.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.syncQuests = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initQuestsState = {
    data: [],
};
var quest = toolkit_1.createSlice({
    name: 'quest',
    initialState: initQuestsState,
    reducers: {
        syncQuests: function (state, _a) {
            var payload = _a.payload;
            state.data = payload;
        },
    },
});
exports.syncQuests = quest.actions.syncQuests;
exports.default = quest.reducer;

cc._RF.pop();