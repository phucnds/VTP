
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/src/app/APIDefine.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3NyYy9hcHAvQVBJRGVmaW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNWLElBQVksZUFNWDtBQU5ELFdBQVksZUFBZTtJQUN2QixzQ0FBbUIsQ0FBQTtJQUNuQixrQ0FBZSxDQUFBO0lBQ2Ysa0NBQWUsQ0FBQTtJQUNmLG9DQUFpQixDQUFBO0lBQ2pCLGdEQUE2QixDQUFBO0FBQ2pDLENBQUMsRUFOVyxlQUFlLEdBQWYsdUJBQWUsS0FBZix1QkFBZSxRQU0xQjtBQU9ELElBQU0sZUFBZSxHQUFHLFVBQUMsT0FBZSxFQUFFLEdBQVcsRUFBRSxlQUFnQztJQUNuRixzREFBc0Q7SUFDdEQsT0FBTyxFQUFFLE9BQU8sU0FBQSxFQUFFLEdBQUcsS0FBQSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxlQUFlLGlCQUFBLEVBQUUsQ0FBQTtBQUN2RCxDQUFDLENBQUE7QUFDRCxJQUFZLElBb0JYO0FBcEJELFdBQVksSUFBSTtJQUNaLGlDQUF5QixDQUFBO0lBQ3pCLG1DQUEyQixDQUFBO0lBQzNCLDZDQUFxQyxDQUFBO0lBQ3JDLG1EQUEyQyxDQUFBO0lBQzNDLG1DQUEyQixDQUFBO0lBQzNCLG1DQUEyQixDQUFBO0lBQzNCLHlDQUFpQyxDQUFBO0lBQ2pDLHFDQUE2QixDQUFBO0lBQzdCLCtDQUF1QyxDQUFBO0lBQ3ZDLHFEQUE2QyxDQUFBO0lBQzdDLCtDQUF1QyxDQUFBO0lBQ3ZDLCtDQUF1QyxDQUFBO0lBQ3ZDLDZDQUFxQyxDQUFBO0lBQ3JDLHVCQUFlLENBQUE7SUFDZixxQ0FBNkIsQ0FBQTtJQUM3Qiw2Q0FBcUMsQ0FBQTtJQUNyQyx5REFBaUQsQ0FBQTtJQUNqRCxxQ0FBNkIsQ0FBQTtJQUM3QixpREFBeUMsQ0FBQTtBQUM3QyxDQUFDLEVBcEJXLElBQUksR0FBSixZQUFJLEtBQUosWUFBSSxRQW9CZjtBQUVELElBQU0sU0FBUyxHQUFHO0lBQ2QsVUFBVSxFQUFFLGVBQWUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLGVBQWUsQ0FBQyxPQUFPLENBQUM7SUFDbEUsV0FBVyxFQUFFLGVBQWUsQ0FBQyxNQUFNLEVBQUUsYUFBYSxFQUFFLGVBQWUsQ0FBQyxPQUFPLENBQUM7SUFDNUUsZ0JBQWdCLEVBQUUsZUFBZSxDQUFDLE1BQU0sRUFBRSxrQkFBa0IsRUFBRSxlQUFlLENBQUMsT0FBTyxDQUFDO0lBQ3RGLG1CQUFtQixFQUFFLGVBQWUsQ0FBQyxNQUFNLEVBQUUscUJBQXFCLEVBQUUsZUFBZSxDQUFDLE9BQU8sQ0FBQztJQUM1RixXQUFXLEVBQUUsZUFBZSxDQUFDLE1BQU0sRUFBRSxvQkFBb0IsRUFBRSxlQUFlLENBQUMsT0FBTyxDQUFDO0lBQ25GLFdBQVcsRUFBRSxlQUFlLENBQUMsTUFBTSxFQUFFLGFBQWEsRUFBRSxlQUFlLENBQUMsT0FBTyxDQUFDO0lBQzVFLGNBQWMsRUFBRSxlQUFlLENBQUMsTUFBTSxFQUFFLGdCQUFnQixFQUFFLGVBQWUsQ0FBQyxPQUFPLENBQUM7SUFDbEYsWUFBWSxFQUFFLGVBQWUsQ0FBQyxNQUFNLEVBQUUsY0FBYyxFQUFFLGVBQWUsQ0FBQyxPQUFPLENBQUM7SUFDOUUsaUJBQWlCLEVBQUUsZUFBZSxDQUFDLE1BQU0sRUFBRSxvQkFBb0IsRUFBRSxlQUFlLENBQUMsT0FBTyxDQUFDO0lBQ3pGLG9CQUFvQixFQUFFLGVBQWUsQ0FBQyxNQUFNLEVBQUUsc0JBQXNCLEVBQUUsZUFBZSxDQUFDLE9BQU8sQ0FBQztJQUM5RixpQkFBaUIsRUFBRSxlQUFlLENBQUMsTUFBTSxFQUFFLG1CQUFtQixFQUFFLGVBQWUsQ0FBQyxPQUFPLENBQUM7SUFDeEYsaUJBQWlCLEVBQUUsZUFBZSxDQUFDLE1BQU0sRUFBRSxtQkFBbUIsRUFBRSxlQUFlLENBQUMsT0FBTyxDQUFDO0lBQ3hGLGdCQUFnQixFQUFFLGVBQWUsQ0FBQyxNQUFNLEVBQUUsa0JBQWtCLEVBQUUsZUFBZSxDQUFDLE9BQU8sQ0FBQztJQUN0RixLQUFLLEVBQUUsZUFBZSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsZUFBZSxDQUFDLE9BQU8sQ0FBQztJQUNoRSxZQUFZLEVBQUUsZUFBZSxDQUFDLE1BQU0sRUFBRSxjQUFjLEVBQUUsZUFBZSxDQUFDLE9BQU8sQ0FBQztJQUM5RSxnQkFBZ0IsRUFBRSxlQUFlLENBQUMsTUFBTSxFQUFFLGtCQUFrQixFQUFFLGVBQWUsQ0FBQyxPQUFPLENBQUM7SUFDdEYsc0JBQXNCLEVBQUUsZUFBZSxDQUFDLE1BQU0sRUFBRSx3QkFBd0IsRUFBRSxlQUFlLENBQUMsT0FBTyxDQUFDO0lBQ2xHLFlBQVksRUFBRSxlQUFlLENBQUMsTUFBTSxFQUFFLGNBQWMsRUFBRSxlQUFlLENBQUMsT0FBTyxDQUFDO0lBQzlFLGtCQUFrQixFQUFFLGVBQWUsQ0FBQyxNQUFNLEVBQUUsb0JBQW9CLEVBQUUsZUFBZSxDQUFDLE9BQU8sQ0FBQztDQUM3RixDQUFBO0FBQ0Qsa0JBQWUsU0FBUyxDQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibGV0IG4gPSAwO1xuZXhwb3J0IGVudW0gRXJyb3JIYW5kbGVUeXBlIHtcbiAgICBOT1RISU5HID0gXCJOT1RISU5HXCIsXG4gICAgQ0xPU0UgPSBcIkNMT1NFXCIsXG4gICAgUkVUUlkgPSBgUkVUUllgLFxuICAgIFJFTE9BRCA9IGBSRUxPQURgLFxuICAgIEJBQ0tfVE9fSE9NRSA9IGBCQUNLX1RPX0hPTUVgLFxufVxuZXhwb3J0IGludGVyZmFjZSBJQVBJSW50ZXJmYWNlIHtcbiAgICBzZXJ2aWNlOiBzdHJpbmcsXG4gICAgYXBpOiBzdHJpbmcsXG4gICAgY29kZTogbnVtYmVyLFxuICAgIGVycm9ySGFuZGxlVHlwZT86IEVycm9ySGFuZGxlVHlwZVxufVxuY29uc3QgY3JlYXRlQXBpRGVmaW5lID0gKHNlcnZpY2U6IHN0cmluZywgYXBpOiBzdHJpbmcsIGVycm9ySGFuZGxlVHlwZTogRXJyb3JIYW5kbGVUeXBlKSA9PiB7XG4gICAgLy8gcmV0dXJuIHsgZXJyb3JIYW5kbGVUeXBlOiBFcnJvckhhbmRsZVR5cGUuTk9USElORyB9XG4gICAgcmV0dXJuIHsgc2VydmljZSwgYXBpLCBjb2RlOiArK24sIGVycm9ySGFuZGxlVHlwZSB9XG59XG5leHBvcnQgZW51bSBhcGlzIHtcbiAgICBnZXRQcm9maWxlID0gJ2dldFByb2ZpbGUnLFxuICAgIGdldEJhbGFuY2VzID0gJ2dldEJhbGFuY2VzJyxcbiAgICBjbGFpbUxvZ2luUmV3YXJkID0gJ2NsYWltTG9naW5SZXdhcmQnLFxuICAgIGNsYWltTmV3VXNlclJld2FyZHMgPSAnY2xhaW1OZXdVc2VyUmV3YXJkcycsXG4gICAgYm9va1Jld2FyZHMgPSAnYm9va1Jld2FyZHMnLFxuICAgIGNsYWltUmV3YXJkID0gJ2NsYWltUmV3YXJkJyxcbiAgICBnZXRNaXNzaW9uTGlzdCA9ICdnZXRNaXNzaW9uTGlzdCcsXG4gICAgZXhjaGFuZ2VDb2luID0gJ2V4Y2hhbmdlQ29pbicsXG4gICAgY2hlY2tXZWVrbHlUaWNrZXQgPSAnY2hlY2tXZWVrbHlUaWNrZXQnLFxuICAgIGdldEFsbFJld2FyZHNIaXN0b3J5ID0gJ2dldEFsbFJld2FyZHNIaXN0b3J5JyxcbiAgICBnZXRUaWNrZXRzSGlzdG9yeSA9ICdnZXRUaWNrZXRzSGlzdG9yeScsXG4gICAgZ2V0Q29pbldpbm5lckxpc3QgPSAnZ2V0Q29pbldpbm5lckxpc3QnLFxuICAgIGhpdFNhdmVOb3dCdXR0b24gPSAnaGl0U2F2ZU5vd0J1dHRvbicsXG4gICAgdHJhY2sgPSAndHJhY2snLFxuICAgIHVzZXJJbnRlcmFjdCA9ICd1c2VySW50ZXJhY3QnLFxuICAgIGNoZWNrUmV3YXJkUG9wdXAgPSAnY2hlY2tSZXdhcmRQb3B1cCcsXG4gICAgZG9uZVNob3dpbmdSZXdhcmRQb3B1cCA9ICdkb25lU2hvd2luZ1Jld2FyZFBvcHVwJyxcbiAgICBnZXREZWVwbGlua3MgPSAnZ2V0RGVlcGxpbmtzJyxcbiAgICBnZXRMb2dpbk1pbGVzdG9uZXMgPSAnZ2V0TG9naW5NaWxlc3RvbmVzJyxcbn1cblxuY29uc3QgQVBJRGVmaW5lID0ge1xuICAgIGdldFByb2ZpbGU6IGNyZWF0ZUFwaURlZmluZShcImF1dGhcIiwgXCJtZVwiLCBFcnJvckhhbmRsZVR5cGUuTk9USElORyksIC8vIDAxXG4gICAgZ2V0QmFsYW5jZXM6IGNyZWF0ZUFwaURlZmluZShcImdhbWVcIiwgXCJnZXRCYWxhbmNlc1wiLCBFcnJvckhhbmRsZVR5cGUuTk9USElORyksIC8vIDAyXG4gICAgY2xhaW1Mb2dpblJld2FyZDogY3JlYXRlQXBpRGVmaW5lKFwiZ2FtZVwiLCBcImNsYWltTG9naW5SZXdhcmRcIiwgRXJyb3JIYW5kbGVUeXBlLk5PVEhJTkcpLCAvLyAwM1xuICAgIGNsYWltTmV3VXNlclJld2FyZHM6IGNyZWF0ZUFwaURlZmluZShcImdhbWVcIiwgXCJjbGFpbU5ld1VzZXJSZXdhcmRzXCIsIEVycm9ySGFuZGxlVHlwZS5OT1RISU5HKSwgLy8gMDRcbiAgICBib29rUmV3YXJkczogY3JlYXRlQXBpRGVmaW5lKFwiZ2FtZVwiLCBcImJvb2tBbmRDbGFpbVJld2FyZFwiLCBFcnJvckhhbmRsZVR5cGUuTk9USElORyksIC8vIDA1XG4gICAgY2xhaW1SZXdhcmQ6IGNyZWF0ZUFwaURlZmluZShcImdhbWVcIiwgXCJjbGFpbVJld2FyZFwiLCBFcnJvckhhbmRsZVR5cGUuTk9USElORyksIC8vIDA2XG4gICAgZ2V0TWlzc2lvbkxpc3Q6IGNyZWF0ZUFwaURlZmluZShcImdhbWVcIiwgXCJnZXRNaXNzaW9uTGlzdFwiLCBFcnJvckhhbmRsZVR5cGUuTk9USElORyksIC8vIDA3XG4gICAgZXhjaGFuZ2VDb2luOiBjcmVhdGVBcGlEZWZpbmUoXCJnYW1lXCIsIFwiZXhjaGFuZ2VDb2luXCIsIEVycm9ySGFuZGxlVHlwZS5OT1RISU5HKSwgLy8gMDhcbiAgICBjaGVja1dlZWtseVRpY2tldDogY3JlYXRlQXBpRGVmaW5lKFwiZ2FtZVwiLCBcImNoZWNrV2Vla2x5Vm91Y2hlclwiLCBFcnJvckhhbmRsZVR5cGUuTk9USElORyksIC8vIDA5XG4gICAgZ2V0QWxsUmV3YXJkc0hpc3Rvcnk6IGNyZWF0ZUFwaURlZmluZShcImdhbWVcIiwgXCJnZXRBbGxSZXdhcmRzSGlzdG9yeVwiLCBFcnJvckhhbmRsZVR5cGUuTk9USElORyksIC8vIDEwXG4gICAgZ2V0VGlja2V0c0hpc3Rvcnk6IGNyZWF0ZUFwaURlZmluZShcImdhbWVcIiwgXCJnZXRUaWNrZXRzSGlzdG9yeVwiLCBFcnJvckhhbmRsZVR5cGUuTk9USElORyksIC8vIDExXG4gICAgZ2V0Q29pbldpbm5lckxpc3Q6IGNyZWF0ZUFwaURlZmluZShcImdhbWVcIiwgXCJnZXRDb2luV2lubmVyTGlzdFwiLCBFcnJvckhhbmRsZVR5cGUuTk9USElORyksIC8vIDEyXG4gICAgaGl0U2F2ZU5vd0J1dHRvbjogY3JlYXRlQXBpRGVmaW5lKFwiZ2FtZVwiLCBcImhpdFNhdmVOb3dCdXR0b25cIiwgRXJyb3JIYW5kbGVUeXBlLk5PVEhJTkcpLCAvLyAxM1xuICAgIHRyYWNrOiBjcmVhdGVBcGlEZWZpbmUoXCJnYW1lXCIsIFwidHJhY2tcIiwgRXJyb3JIYW5kbGVUeXBlLk5PVEhJTkcpLCAvLyAxNFxuICAgIHVzZXJJbnRlcmFjdDogY3JlYXRlQXBpRGVmaW5lKFwiZ2FtZVwiLCBcInVzZXJJbnRlcmFjdFwiLCBFcnJvckhhbmRsZVR5cGUuTk9USElORyksIC8vIDE1XG4gICAgY2hlY2tSZXdhcmRQb3B1cDogY3JlYXRlQXBpRGVmaW5lKFwiZ2FtZVwiLCBcImNoZWNrUmV3YXJkUG9wdXBcIiwgRXJyb3JIYW5kbGVUeXBlLk5PVEhJTkcpLCAvLyAxNlxuICAgIGRvbmVTaG93aW5nUmV3YXJkUG9wdXA6IGNyZWF0ZUFwaURlZmluZShcImdhbWVcIiwgXCJkb25lU2hvd2luZ1Jld2FyZFBvcHVwXCIsIEVycm9ySGFuZGxlVHlwZS5OT1RISU5HKSwgLy8gMTdcbiAgICBnZXREZWVwbGlua3M6IGNyZWF0ZUFwaURlZmluZShcImdhbWVcIiwgXCJnZXREZWVwbGlua3NcIiwgRXJyb3JIYW5kbGVUeXBlLk5PVEhJTkcpLCAvLyAxOFxuICAgIGdldExvZ2luTWlsZXN0b25lczogY3JlYXRlQXBpRGVmaW5lKFwiZ2FtZVwiLCBcImdldExvZ2luTWlsZXN0b25lc1wiLCBFcnJvckhhbmRsZVR5cGUuTk9USElORyksIC8vIDE5XG59XG5leHBvcnQgZGVmYXVsdCBBUElEZWZpbmVcbiJdfQ==