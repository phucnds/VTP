"use strict";
cc._RF.push(module, '63b66HLFvRD2pPEWCMwEzyE', 'RewardPopupsMgr');
// scripts/src/game/RewardPopupsMgr.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.RewardPopupsMgr = exports.ETopupType = void 0;
var R = require("ramda");
var UserProfile_1 = require("../../common/UserProfile");
var CompQuestsContainer_1 = require("../../components/CompQuestsContainer");
var PopupBuyTurnSuccess_1 = require("../../Popups/PopupBuyTurnSuccess");
var PopupCompleteQuest_1 = require("../../Popups/PopupCompleteQuest");
var SingletonNode_1 = require("../../utils/SingletonNode");
var APIDefine_1 = require("../app/APIDefine");
var connect_1 = require("../app/connect");
var store_1 = require("../app/store");
var wsgw_1 = require("../app/wsgw");
var common_1 = require("../common/common");
var SliceApp_1 = require("../features/SliceApp");
var SliceQuests_1 = require("../features/SliceQuests");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ETopupType;
(function (ETopupType) {
    ETopupType["MO_GAME"] = "MO_GAME";
    ETopupType["MO_GAME_LAN_DAU"] = "MO_GAME_LAN_DAU";
    ETopupType["DOI_DIEM_VT_PLUS"] = "DOI_DIEM_VT_PLUS";
    ETopupType["MUA_LUOT"] = "MUA_LUOT";
    ETopupType["PHAN_THUONG_TRONG_GAME"] = "PHAN_THUONG_TRONG_GAME";
    ETopupType["KHAC"] = "KHAC";
    ETopupType["WEEKLY_REWARD"] = "WEEKLY_REWARD";
})(ETopupType = exports.ETopupType || (exports.ETopupType = {}));
var RewardPopupsMgr = /** @class */ (function (_super) {
    __extends(RewardPopupsMgr, _super);
    function RewardPopupsMgr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RewardPopupsMgr.prototype.setData = function (data) {
        this.rewardPopups = data;
    };
    RewardPopupsMgr.prototype.onLoad = function () {
        var _this = this;
        _super.prototype.onLoad.call(this);
        wsgw_1.default.subscribeCompleteMission(function (data) {
            var type = data.type, msisdn = data.msisdn;
            if (type === CompQuestsContainer_1.Missions.CHIA_SE_GAME.toString())
                return;
            if (msisdn !== _this.props.user.msisdn)
                return;
            setTimeout(function () {
                UserProfile_1.userProfile.UpdateProfile(true, function () {
                    wsgw_1.default.userRequest(APIDefine_1.default.getMissionList, {}, function (e) {
                        store_1.default.dispatch(SliceQuests_1.syncQuests(e));
                    }, console.error);
                    common_1.checkRewardPopup();
                    UserProfile_1.userProfile.UpdateBalance();
                });
            }, 1000);
        });
        wsgw_1.default.subscribeBuyTurn(function (data) {
            var msisdn = data.msisdn;
            if (msisdn !== _this.props.user.msisdn)
                return;
            setTimeout(function () {
                wsgw_1.default.userRequest(APIDefine_1.default.getMissionList, {}, function (e) {
                    store_1.default.dispatch(SliceQuests_1.syncQuests(e));
                }, console.error);
                common_1.checkRewardPopup();
                UserProfile_1.userProfile.UpdateBalance();
            }, 1000);
        });
    };
    RewardPopupsMgr.prototype.showPopup = function () {
        var item = R.last(this.rewardPopups);
        if (!item)
            return;
        this.rewardPopups = R.dropLast(1, this.rewardPopups);
        var _a = item.data, turn = _a.turn, coin = _a.coin, type = item.type;
        if (type === ETopupType.DOI_DIEM_VT_PLUS || type === ETopupType.MUA_LUOT) {
            store_1.default.dispatch(SliceApp_1.pushPopup(SliceApp_1.EAppPopups.PopupBuyTurnSuccess));
            var popup = cc.find('Canvas/PopupManager/Shown Popups/PopupBuyTurnSuccess');
            popup && popup.getComponent(PopupBuyTurnSuccess_1.default).init(turn);
        }
        else if (type === ETopupType.WEEKLY_REWARD) {
            store_1.default.dispatch(SliceApp_1.pushPopup(SliceApp_1.EAppPopups.PopupWeeklyWinner));
        }
        else {
            store_1.default.dispatch(SliceApp_1.pushPopup(SliceApp_1.EAppPopups.PopupCompleteQuest));
            var popup = cc.find('Canvas/PopupManager/Shown Popups/PopupCompleteQuest');
            popup && popup.getComponent(PopupCompleteQuest_1.default).init(turn, coin);
        }
    };
    return RewardPopupsMgr;
}(SingletonNode_1.default()));
exports.RewardPopupsMgr = RewardPopupsMgr;
var mapStateToProps = function (state) { return ({
    user: state.user
}); };
var mapDispatchToAction = function (dispatch) { return ({
    pushPage: function (payload) {
        return dispatch(SliceApp_1.pushPage(payload));
    },
    popPage: function () { return dispatch(SliceApp_1.popPage()); },
    pushPopup: function (payload) { return dispatch(SliceApp_1.pushPopup(payload)); },
}); };
exports.default = connect_1.default(mapStateToProps, mapDispatchToAction)(RewardPopupsMgr);

cc._RF.pop();