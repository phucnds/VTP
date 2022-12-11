"use strict";
cc._RF.push(module, '37754UIhsdEF6O/bF8Hxg96', 'APIDefine');
// scripts/src/app/APIDefine.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apis = exports.ErrorHandleType = void 0;
var n = 0;
var ErrorHandleType;
(function (ErrorHandleType) {
    ErrorHandleType["NOTHING"] = "NOTHING";
    ErrorHandleType["CLOSE"] = "CLOSE";
    ErrorHandleType["RETRY"] = "RETRY";
    ErrorHandleType["RELOAD"] = "RELOAD";
    ErrorHandleType["BACK_TO_HOME"] = "BACK_TO_HOME";
})(ErrorHandleType = exports.ErrorHandleType || (exports.ErrorHandleType = {}));
var createApiDefine = function (service, api, errorHandleType) {
    // return { errorHandleType: ErrorHandleType.NOTHING }
    return { service: service, api: api, code: ++n, errorHandleType: errorHandleType };
};
var apis;
(function (apis) {
    apis["getProfile"] = "getProfile";
    apis["getBalances"] = "getBalances";
    apis["claimLoginReward"] = "claimLoginReward";
    apis["claimNewUserRewards"] = "claimNewUserRewards";
    apis["bookRewards"] = "bookRewards";
    apis["claimReward"] = "claimReward";
    apis["getMissionList"] = "getMissionList";
    apis["exchangeCoin"] = "exchangeCoin";
    apis["checkWeeklyTicket"] = "checkWeeklyTicket";
    apis["getAllRewardsHistory"] = "getAllRewardsHistory";
    apis["getTicketsHistory"] = "getTicketsHistory";
    apis["getCoinWinnerList"] = "getCoinWinnerList";
    apis["hitSaveNowButton"] = "hitSaveNowButton";
    apis["track"] = "track";
    apis["userInteract"] = "userInteract";
    apis["checkRewardPopup"] = "checkRewardPopup";
    apis["doneShowingRewardPopup"] = "doneShowingRewardPopup";
    apis["getDeeplinks"] = "getDeeplinks";
    apis["getLoginMilestones"] = "getLoginMilestones";
})(apis = exports.apis || (exports.apis = {}));
var APIDefine = {
    getProfile: createApiDefine("auth", "me", ErrorHandleType.NOTHING),
    getBalances: createApiDefine("game", "getBalances", ErrorHandleType.NOTHING),
    claimLoginReward: createApiDefine("game", "claimLoginReward", ErrorHandleType.NOTHING),
    claimNewUserRewards: createApiDefine("game", "claimNewUserRewards", ErrorHandleType.NOTHING),
    bookRewards: createApiDefine("game", "bookAndClaimReward", ErrorHandleType.NOTHING),
    claimReward: createApiDefine("game", "claimReward", ErrorHandleType.NOTHING),
    getMissionList: createApiDefine("game", "getMissionList", ErrorHandleType.NOTHING),
    exchangeCoin: createApiDefine("game", "exchangeCoin", ErrorHandleType.NOTHING),
    checkWeeklyTicket: createApiDefine("game", "checkWeeklyVoucher", ErrorHandleType.NOTHING),
    getAllRewardsHistory: createApiDefine("game", "getAllRewardsHistory", ErrorHandleType.NOTHING),
    getTicketsHistory: createApiDefine("game", "getTicketsHistory", ErrorHandleType.NOTHING),
    getCoinWinnerList: createApiDefine("game", "getCoinWinnerList", ErrorHandleType.NOTHING),
    hitSaveNowButton: createApiDefine("game", "hitSaveNowButton", ErrorHandleType.NOTHING),
    track: createApiDefine("game", "track", ErrorHandleType.NOTHING),
    userInteract: createApiDefine("game", "userInteract", ErrorHandleType.NOTHING),
    checkRewardPopup: createApiDefine("game", "checkRewardPopup", ErrorHandleType.NOTHING),
    doneShowingRewardPopup: createApiDefine("game", "doneShowingRewardPopup", ErrorHandleType.NOTHING),
    getDeeplinks: createApiDefine("game", "getDeeplinks", ErrorHandleType.NOTHING),
    getLoginMilestones: createApiDefine("game", "getLoginMilestones", ErrorHandleType.NOTHING),
};
exports.default = APIDefine;

cc._RF.pop();