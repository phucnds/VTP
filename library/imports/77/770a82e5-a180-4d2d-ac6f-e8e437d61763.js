"use strict";
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