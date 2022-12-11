
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/src/features/SliceUser.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '770a8LloYBNLaxv6OQ31hdj', 'SliceUser');
// scripts/src/features/SliceUser.ts

"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.syncGlobalRank = exports.syncMonthRank = exports.syncDayRank = exports.syncStars = exports.syncCoins = exports.syncBalances = exports.syncDailyReward = exports.claimGreenCash = exports.exchangeGreenCash = exports.syncRegisterEvent = exports.selectAvatar = exports.syncProfile = exports.testUser = exports.initUserState = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
exports.initUserState = {
    userId: "",
    avatar: 'n/a',
    nickName: 'n/a',
    coinBalance: 0,
    accumulatedCoinBalance: 0,
    isLogged: false,
    isVip: false,
    credential: 'n/a',
    spinTicketBalance: 0,
    greenCashBalance: 0,
    isRedeemInviteCode: false,
    omsToken: '',
    wheelBalance: 0,
    gameEvents: [],
    claimGreenCash: undefined,
    starBalance: 0,
    dayPoint: 0,
    dayRank: 1,
    monthPoint: 0,
    monthRank: 1,
    globalPoint: 0,
    globalRank: 1,
    customerType: '',
    verifiedUser: false,
    isNewUser: false,
    customerSourceLinked: false,
};
var user = toolkit_1.createSlice({
    name: 'user',
    initialState: exports.initUserState,
    reducers: {
        testUser: function (state, _a) {
            var payload = _a.payload;
            state.nickName = payload;
        },
        syncDailyReward: function (state, _a) {
            var payload = _a.payload;
            state.dailyReward = payload;
        },
        selectAvatar: function (state, _a) {
            var payload = _a.payload;
            if (payload !== state.avatar) {
                // const msg = ELOMessage.get<MsgUpdateAvatar>(
                //     EMsgTypes.MSG_UPDATE_AVATAR
                // );
                // msg.url = Buffer.from(payload);
                // eloServices.send(msg);
                state.avatar = payload;
            }
        },
        syncProfile: function (state, _a) {
            var payload = _a.payload;
            return __assign(__assign(__assign({}, state), payload), { nickName: payload.nickName ? payload.nickName.replace(/^\+?(84|0)/g, '0') : '' });
        },
        syncBalances: function (state, _a) {
            var payload = _a.payload;
            return __assign(__assign({}, state), payload);
        },
        syncCoins: function (state, _a) {
            var payload = _a.payload;
            state.coinBalance = payload;
        },
        syncStars: function (state, _a) {
            var payload = _a.payload;
            state.starBalance = payload;
        },
        exchangeGreenCash: function (state, _a) {
            var payload = _a.payload;
            state.claimGreenCash = payload;
        },
        claimGreenCash: function (state) {
            state.claimGreenCash = undefined;
        },
        syncRegisterEvent: function (state, _a) {
            var payload = _a.payload;
            for (var _i = 0, payload_1 = payload; _i < payload_1.length; _i++) {
                var game = payload_1[_i];
                if (!state.gameEvents.includes(game))
                    state.gameEvents.push(game);
            }
        },
        syncDayRank: function (state, _a) {
            var payload = _a.payload;
            var point = payload.point, rank = payload.rank;
            state.dayRank = rank;
            state.dayPoint = point;
        },
        syncMonthRank: function (state, _a) {
            var payload = _a.payload;
            var point = payload.point, rank = payload.rank;
            state.monthRank = rank;
            state.monthPoint = point;
        },
        syncGlobalRank: function (state, _a) {
            var payload = _a.payload;
            var point = payload.point, rank = payload.rank;
            state.globalRank = rank;
            state.globalPoint = point;
        },
    }
});
exports.testUser = (_a = user.actions, _a.testUser), exports.syncProfile = _a.syncProfile, exports.selectAvatar = _a.selectAvatar, exports.syncRegisterEvent = _a.syncRegisterEvent, exports.exchangeGreenCash = _a.exchangeGreenCash, exports.claimGreenCash = _a.claimGreenCash, exports.syncDailyReward = _a.syncDailyReward, exports.syncBalances = _a.syncBalances, exports.syncCoins = _a.syncCoins, exports.syncStars = _a.syncStars, exports.syncDayRank = _a.syncDayRank, exports.syncMonthRank = _a.syncMonthRank, exports.syncGlobalRank = _a.syncGlobalRank;
exports.default = user.reducer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3NyYy9mZWF0dXJlcy9TbGljZVVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsNENBQThFO0FBNEJqRSxRQUFBLGFBQWEsR0FBZTtJQUNyQyxNQUFNLEVBQUUsRUFBRTtJQUNWLE1BQU0sRUFBRSxLQUFLO0lBQ2IsUUFBUSxFQUFFLEtBQUs7SUFDZixXQUFXLEVBQUUsQ0FBQztJQUNkLHNCQUFzQixFQUFFLENBQUM7SUFDekIsUUFBUSxFQUFFLEtBQUs7SUFDZixLQUFLLEVBQUUsS0FBSztJQUNaLFVBQVUsRUFBRSxLQUFLO0lBQ2pCLGlCQUFpQixFQUFFLENBQUM7SUFDcEIsZ0JBQWdCLEVBQUUsQ0FBQztJQUNuQixrQkFBa0IsRUFBRSxLQUFLO0lBQ3pCLFFBQVEsRUFBRSxFQUFFO0lBQ1osWUFBWSxFQUFFLENBQUM7SUFDZixVQUFVLEVBQUUsRUFBRTtJQUNkLGNBQWMsRUFBRSxTQUFTO0lBQ3pCLFdBQVcsRUFBRSxDQUFDO0lBQ2QsUUFBUSxFQUFFLENBQUM7SUFDWCxPQUFPLEVBQUUsQ0FBQztJQUNWLFVBQVUsRUFBRSxDQUFDO0lBQ2IsU0FBUyxFQUFFLENBQUM7SUFDWixXQUFXLEVBQUUsQ0FBQztJQUNkLFVBQVUsRUFBRSxDQUFDO0lBQ2IsWUFBWSxFQUFFLEVBQUU7SUFDaEIsWUFBWSxFQUFFLEtBQUs7SUFDbkIsU0FBUyxFQUFFLEtBQUs7SUFDaEIsb0JBQW9CLEVBQUUsS0FBSztDQUM5QixDQUFDO0FBQ0YsSUFBTSxJQUFJLEdBQUcscUJBQVcsQ0FBQztJQUNyQixJQUFJLEVBQUUsTUFBTTtJQUNaLFlBQVksRUFBRSxxQkFBYTtJQUMzQixRQUFRLEVBQUU7UUFDTixRQUFRLEVBQVIsVUFBUyxLQUFLLEVBQUUsRUFBa0M7Z0JBQWhDLE9BQU8sYUFBQTtZQUNyQixLQUFLLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUM3QixDQUFDO1FBQ0Qs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QUFXLEdBQUcsS0FBSyxDQUFDO1FBQzlCLENBQUM7S0FDSjtDQUNKLENBQUMsQ0FBQTtBQUVhLFFBQUEsUUFBUSxJQUFWLEtBSVQsSUFBSSxDQUFDLE9BQU8sZ0JBSlMsUUFBQSxXQUFXLG1CQUFFLFFBQUEsWUFBWSxvQkFDOUMsUUFBQSxpQkFBaUIseUJBQUUsUUFBQSxpQkFBaUIseUJBQUUsUUFBQSxjQUFjLHNCQUNwRCxRQUFBLGVBQWUsdUJBQUUsUUFBQSxZQUFZLG9CQUM3QixRQUFBLFNBQVMsaUJBQUUsUUFBQSxTQUFTLGlCQUFFLFFBQUEsV0FBVyxtQkFBRSxRQUFBLGFBQWEscUJBQUUsUUFBQSxjQUFjLHFCQUNuRDtBQUNqQixrQkFBZSxJQUFJLENBQUMsT0FBTyxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUxPTWVzc2FnZSwgTXNnVXBkYXRlQXZhdGFyIH0gZnJvbSBcIkBlbG9mdW4vZWxvLXNlcnZpY2VzLW15aWQtdjJcIjtcbmltcG9ydCB7IEVNc2dUeXBlcyB9IGZyb20gXCJAZWxvZnVuL2Vsby1zZXJ2aWNlcy1teWlkLXYyL0VNc2dUeXBlc1wiO1xuaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24sIGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmltcG9ydCBFdmVudHMgZnJvbSBcIi4uLy4uL2NvbW1vbi9FdmVudHNcIjtcbmltcG9ydCB7IEVVc2VyUHJvZmlsZUV2ZW50VHlwZXMsIElVc2VyUHJvZmlsZSwgdXNlclByb2ZpbGUgfSBmcm9tIFwiLi4vLi4vY29tbW9uL1VzZXJQcm9maWxlXCI7XG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4uL2FwcC9zdG9yZVwiO1xuaW1wb3J0IHsgQnVmZmVyIH0gZnJvbSAnYnVmZmVyLyc7XG5pbXBvcnQgd3NndyBmcm9tIFwiLi4vYXBwL3dzZ3dcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJRXhjaGFuZ2VHcmVlbkNhc2gge1xuICAgIG9sZENhc2g6IG51bWJlcixcbiAgICB2b3VjaGVyQ29kZTogc3RyaW5nLFxufVxuZXhwb3J0IGludGVyZmFjZSBJVXNlclN0YXRlIGV4dGVuZHMgSVVzZXJQcm9maWxlIHtcbiAgICBhY2N1bXVsYXRlZENvaW5CYWxhbmNlOiBudW1iZXI7XG4gICAgaXNMb2dnZWQ6IEJvb2xlYW47XG4gICAgZ2FtZUV2ZW50czogQXJyYXk8bnVtYmVyPixcbiAgICBjbGFpbUdyZWVuQ2FzaD86IElFeGNoYW5nZUdyZWVuQ2FzaCxcbiAgICBkYWlseVJld2FyZD86IGFueSxcbiAgICBkYXlQb2ludDogbnVtYmVyLFxuICAgIGRheVJhbms6IG51bWJlcixcbiAgICBtb250aFBvaW50OiBudW1iZXIsXG4gICAgbW9udGhSYW5rOiBudW1iZXIsXG4gICAgZ2xvYmFsUmFuazogbnVtYmVyLFxuICAgIGdsb2JhbFBvaW50OiBudW1iZXIsXG4gICAgY3VzdG9tZXJUeXBlOiBzdHJpbmcsXG4gICAgdmVyaWZpZWRVc2VyOiBib29sZWFuLFxuICAgIGlzTmV3VXNlcjogYm9vbGVhbixcbiAgICBjdXN0b21lclNvdXJjZUxpbmtlZDogYm9vbGVhbixcbn1cbmV4cG9ydCBjb25zdCBpbml0VXNlclN0YXRlOiBJVXNlclN0YXRlID0ge1xuICAgIHVzZXJJZDogXCJcIixcbiAgICBhdmF0YXI6ICduL2EnLFxuICAgIG5pY2tOYW1lOiAnbi9hJyxcbiAgICBjb2luQmFsYW5jZTogMCxcbiAgICBhY2N1bXVsYXRlZENvaW5CYWxhbmNlOiAwLFxuICAgIGlzTG9nZ2VkOiBmYWxzZSxcbiAgICBpc1ZpcDogZmFsc2UsXG4gICAgY3JlZGVudGlhbDogJ24vYScsXG4gICAgc3BpblRpY2tldEJhbGFuY2U6IDAsXG4gICAgZ3JlZW5DYXNoQmFsYW5jZTogMCxcbiAgICBpc1JlZGVlbUludml0ZUNvZGU6IGZhbHNlLFxuICAgIG9tc1Rva2VuOiAnJyxcbiAgICB3aGVlbEJhbGFuY2U6IDAsXG4gICAgZ2FtZUV2ZW50czogW10sXG4gICAgY2xhaW1HcmVlbkNhc2g6IHVuZGVmaW5lZCxcbiAgICBzdGFyQmFsYW5jZTogMCxcbiAgICBkYXlQb2ludDogMCxcbiAgICBkYXlSYW5rOiAxLFxuICAgIG1vbnRoUG9pbnQ6IDAsXG4gICAgbW9udGhSYW5rOiAxLFxuICAgIGdsb2JhbFBvaW50OiAwLFxuICAgIGdsb2JhbFJhbms6IDEsXG4gICAgY3VzdG9tZXJUeXBlOiAnJyxcbiAgICB2ZXJpZmllZFVzZXI6IGZhbHNlLFxuICAgIGlzTmV3VXNlcjogZmFsc2UsXG4gICAgY3VzdG9tZXJTb3VyY2VMaW5rZWQ6IGZhbHNlLFxufTtcbmNvbnN0IHVzZXIgPSBjcmVhdGVTbGljZSh7XG4gICAgbmFtZTogJ3VzZXInLFxuICAgIGluaXRpYWxTdGF0ZTogaW5pdFVzZXJTdGF0ZSxcbiAgICByZWR1Y2Vyczoge1xuICAgICAgICB0ZXN0VXNlcihzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248c3RyaW5nPikge1xuICAgICAgICAgICAgc3RhdGUubmlja05hbWUgPSBwYXlsb2FkO1xuICAgICAgICB9LFxuICAgICAgICBzeW5jRGFpbHlSZXdhcmQoc3RhdGUsIHsgcGF5bG9hZCB9KSB7XG4gICAgICAgICAgICBzdGF0ZS5kYWlseVJld2FyZCA9IHBheWxvYWRcbiAgICAgICAgfSxcbiAgICAgICAgc2VsZWN0QXZhdGFyKHN0YXRlLCB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjxzdHJpbmc+KSB7XG4gICAgICAgICAgICBpZiAocGF5bG9hZCAhPT0gc3RhdGUuYXZhdGFyKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc3QgbXNnID0gRUxPTWVzc2FnZS5nZXQ8TXNnVXBkYXRlQXZhdGFyPihcbiAgICAgICAgICAgICAgICAvLyAgICAgRU1zZ1R5cGVzLk1TR19VUERBVEVfQVZBVEFSXG4gICAgICAgICAgICAgICAgLy8gKTtcbiAgICAgICAgICAgICAgICAvLyBtc2cudXJsID0gQnVmZmVyLmZyb20ocGF5bG9hZCk7XG4gICAgICAgICAgICAgICAgLy8gZWxvU2VydmljZXMuc2VuZChtc2cpO1xuICAgICAgICAgICAgICAgIHN0YXRlLmF2YXRhciA9IHBheWxvYWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc3luY1Byb2ZpbGUoc3RhdGUsIHsgcGF5bG9hZCB9OiBQYXlsb2FkQWN0aW9uPGFueT4pIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgLi4ucGF5bG9hZCxcbiAgICAgICAgICAgICAgICBuaWNrTmFtZTogcGF5bG9hZC5uaWNrTmFtZSA/IHBheWxvYWQubmlja05hbWUucmVwbGFjZSgvXlxcKz8oODR8MCkvZywgJzAnKSA6ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHN5bmNCYWxhbmNlcyhzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248eyBjb2luQmFsYW5jZTogbnVtYmVyLCBzcGluVGlja2V0QmFsYW5jZTogbnVtYmVyIH0+KSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIC4uLnBheWxvYWQsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHN5bmNDb2lucyhzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248bnVtYmVyPikge1xuICAgICAgICAgICAgc3RhdGUuY29pbkJhbGFuY2UgPSBwYXlsb2FkXG4gICAgICAgIH0sXG4gICAgICAgIHN5bmNTdGFycyhzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248bnVtYmVyPikge1xuICAgICAgICAgICAgc3RhdGUuc3RhckJhbGFuY2UgPSBwYXlsb2FkXG4gICAgICAgIH0sXG4gICAgICAgIGV4Y2hhbmdlR3JlZW5DYXNoKHN0YXRlLCB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjxJRXhjaGFuZ2VHcmVlbkNhc2g+KSB7XG4gICAgICAgICAgICBzdGF0ZS5jbGFpbUdyZWVuQ2FzaCA9IHBheWxvYWRcbiAgICAgICAgfSxcbiAgICAgICAgY2xhaW1HcmVlbkNhc2goc3RhdGUpIHtcbiAgICAgICAgICAgIHN0YXRlLmNsYWltR3JlZW5DYXNoID0gdW5kZWZpbmVkXG4gICAgICAgIH0sXG4gICAgICAgIHN5bmNSZWdpc3RlckV2ZW50KHN0YXRlLCB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjxBcnJheTxudW1iZXI+Pikge1xuICAgICAgICAgICAgZm9yIChsZXQgZ2FtZSBvZiBwYXlsb2FkKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzdGF0ZS5nYW1lRXZlbnRzLmluY2x1ZGVzKGdhbWUpKSBzdGF0ZS5nYW1lRXZlbnRzLnB1c2goZ2FtZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc3luY0RheVJhbmsoc3RhdGUsIHsgcGF5bG9hZCB9OiBQYXlsb2FkQWN0aW9uPHsgcmFuazogbnVtYmVyLCBwb2ludDogbnVtYmVyIH0+KSB7XG4gICAgICAgICAgICBjb25zdCB7IHBvaW50LCByYW5rIH0gPSBwYXlsb2FkXG4gICAgICAgICAgICBzdGF0ZS5kYXlSYW5rID0gcmFuaztcbiAgICAgICAgICAgIHN0YXRlLmRheVBvaW50ID0gcG9pbnQ7XG4gICAgICAgIH0sXG4gICAgICAgIHN5bmNNb250aFJhbmsoc3RhdGUsIHsgcGF5bG9hZCB9OiBQYXlsb2FkQWN0aW9uPHsgcmFuazogbnVtYmVyLCBwb2ludDogbnVtYmVyIH0+KSB7XG4gICAgICAgICAgICBjb25zdCB7IHBvaW50LCByYW5rIH0gPSBwYXlsb2FkXG4gICAgICAgICAgICBzdGF0ZS5tb250aFJhbmsgPSByYW5rO1xuICAgICAgICAgICAgc3RhdGUubW9udGhQb2ludCA9IHBvaW50O1xuICAgICAgICB9LFxuICAgICAgICBzeW5jR2xvYmFsUmFuayhzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248eyByYW5rOiBudW1iZXIsIHBvaW50OiBudW1iZXIgfT4pIHtcbiAgICAgICAgICAgIGNvbnN0IHsgcG9pbnQsIHJhbmsgfSA9IHBheWxvYWRcbiAgICAgICAgICAgIHN0YXRlLmdsb2JhbFJhbmsgPSByYW5rO1xuICAgICAgICAgICAgc3RhdGUuZ2xvYmFsUG9pbnQgPSBwb2ludDtcbiAgICAgICAgfSxcbiAgICB9XG59KVxuXG5leHBvcnQgY29uc3QgeyB0ZXN0VXNlciwgc3luY1Byb2ZpbGUsIHNlbGVjdEF2YXRhcixcbiAgICBzeW5jUmVnaXN0ZXJFdmVudCwgZXhjaGFuZ2VHcmVlbkNhc2gsIGNsYWltR3JlZW5DYXNoLFxuICAgIHN5bmNEYWlseVJld2FyZCwgc3luY0JhbGFuY2VzLFxuICAgIHN5bmNDb2lucywgc3luY1N0YXJzLCBzeW5jRGF5UmFuaywgc3luY01vbnRoUmFuaywgc3luY0dsb2JhbFJhbmtcbn0gPSB1c2VyLmFjdGlvbnM7XG5leHBvcnQgZGVmYXVsdCB1c2VyLnJlZHVjZXI7Il19