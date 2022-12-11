"use strict";
cc._RF.push(module, '0dc94PtcAxDqIpfsW+wfnpF', 'PageHome');
// scripts/Pages/PageHome.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageHome = void 0;
var SoundMgr_1 = require("../common/SoundMgr");
var TopUI_1 = require("../common/TopUI");
var UserProfile_1 = require("../common/UserProfile");
var APIDefine_1 = require("../src/app/APIDefine");
var connect_1 = require("../src/app/connect");
var store_1 = require("../src/app/store");
var wsgw_1 = require("../src/app/wsgw");
var SliceApp_1 = require("../src/features/SliceApp");
var SliceLogin_1 = require("../src/features/SliceLogin");
var Helper_1 = require("../utils/Helper");
var Page_1 = require("./Page");
var SliceQuests_1 = require("../src/features/SliceQuests");
var SliceWeeklyTicket_1 = require("../src/features/SliceWeeklyTicket");
var PopupDailyLogin_1 = require("../Popups/PopupDailyLogin");
var common_1 = require("../src/common/common");
var PopupNewUserReward_1 = require("../Popups/PopupNewUserReward");
var SliceDeeplinks_1 = require("../src/features/SliceDeeplinks");
var GameMgr_1 = require("../src/game/GameMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PageHome = /** @class */ (function (_super) {
    __extends(PageHome, _super);
    function PageHome() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btnLeaderboard = null;
        _this.btnRules = null;
        _this.btnOrder = null;
        _this.btnShare = null;
        _this.bgDay = null;
        _this.bgNight = null;
        return _this;
    }
    PageHome.prototype.claimLoginReward = function (newUserCoin, newUserTurn, initFunc, fail, retry) {
        var _this = this;
        if (initFunc === void 0) { initFunc = function () { }; }
        if (fail === void 0) { fail = function () { }; }
        if (retry === void 0) { retry = 45; }
        if (retry < 0) {
            // this.actions.pushPopup(EAppPopups.PopupErrorReload);
            return;
        }
        wsgw_1.default.userRequest(APIDefine_1.default.claimLoginReward, {}, function (e) {
            UserProfile_1.userProfile.UpdateBalance();
            store_1.default.dispatch(SliceLogin_1.syncLoginStreak(e));
            if (e.message)
                return;
            var loginCoin = e.coin, loginTurn = e.turn, loginStreak = e.loginStreak;
            initFunc(newUserCoin + loginCoin, newUserTurn + loginTurn, loginStreak);
        }, function (e) {
            if (e.status === 409)
                return;
            fail();
            setTimeout(function () { return _this.claimLoginReward(newUserCoin, newUserTurn, initFunc, fail, retry - 1); }, 1000);
            console.error(e);
        });
    };
    PageHome.prototype.onLoad = function () {
        var _this = this;
        GameMgr_1.default.Instance.init();
        UserProfile_1.userProfile.UpdateProfile(true, function () {
            wsgw_1.default.userRequest(APIDefine_1.default.claimNewUserRewards, {}, function (e) {
                UserProfile_1.userProfile.UpdateBalance();
                var newUserCoin = e.coin, newUserTurn = e.turn;
                _this.claimLoginReward(newUserCoin, newUserTurn, function (coin, turn) {
                    _this.actions.pushPopup(SliceApp_1.EAppPopups.PopupNewUserReward);
                    var popup = cc.find('Canvas/PopupManager/Shown Popups/PopupNewUserReward');
                    popup && popup.getComponent(PopupNewUserReward_1.default).init(coin, turn);
                });
            }, function () {
                if (!_this.props.user.isNewUser) {
                    _this.claimLoginReward(0, 0, function (coin, turn, loginStreak) {
                        _this.actions.pushPopup(SliceApp_1.EAppPopups.PopupDailyLogin);
                        var popup = cc.find('Canvas/PopupManager/Shown Popups/PopupDailyLogin');
                        popup && popup.getComponent(PopupDailyLogin_1.default).init(coin, turn, loginStreak);
                    });
                }
                else {
                    // this.actions.pushPopup(EAppPopups.PopupErrorReload);
                }
            });
            wsgw_1.default.userRequest(APIDefine_1.default.getMissionList, {}, function (e) {
                store_1.default.dispatch(SliceQuests_1.syncQuests(e));
            }, console.error);
            wsgw_1.default.userRequest(APIDefine_1.default.getDeeplinks, {}, function (e) {
                store_1.default.dispatch(SliceDeeplinks_1.syncDeeplinks(e));
            }, console.error);
            wsgw_1.default.userRequest(APIDefine_1.default.getLoginMilestones, {}, function (e) {
                store_1.default.dispatch(SliceLogin_1.syncLoginMilestones(e.milestones));
            }, console.error);
            wsgw_1.default.userRequest(APIDefine_1.default.checkWeeklyTicket, {}, function (e) {
                store_1.default.dispatch(SliceWeeklyTicket_1.syncWeeklyTicket({ bought: true }));
            }, console.error);
            common_1.checkRewardPopup();
        });
        SoundMgr_1.default.playMusic(SoundMgr_1.default.Instance.BGM);
        this.initButtons();
        this.btnRules.on(cc.Node.EventType.TOUCH_END, function (e) {
            _this.actions.pushPage(SliceApp_1.EAppPages.PageRules);
        });
        this.btnOrder.on(cc.Node.EventType.TOUCH_END, this.onOrder.bind(this));
        this.btnShare.on(cc.Node.EventType.TOUCH_END, this.onShare.bind(this));
        this.setBg();
        this.schedule(function () {
            this.setBg();
        }, 5);
    };
    PageHome.prototype.onOrder = function () {
        if (window.ReactNativeWebView) {
            window.ReactNativeWebView.postMessage('ON_CREATE_ORDER', '*');
        }
        else {
            window.postMessage('ON_CREATE_ORDER', '*');
        }
    };
    PageHome.prototype.onShare = function () {
        if (window.ReactNativeWebView) {
            window.ReactNativeWebView.postMessage('ON_SHARE_GAME', '*');
        }
        else {
            window.postMessage('ON_SHARE_GAME', '*');
        }
    };
    PageHome.prototype.initButtons = function () {
        var _this = this;
        Helper_1.default.registerButtonEvent(this.btnLeaderboard, function () {
            _this.actions.pushPopup(SliceApp_1.EAppPopups.PopupLeaderboard);
        });
    };
    PageHome.prototype.start = function () {
    };
    PageHome.prototype.update = function (dt) {
    };
    PageHome.prototype.updateBalance = function (spinBalance, coinBalance) {
    };
    PageHome.prototype.init = function () {
        _super.prototype.init.call(this);
        TopUI_1.default.Instance.show(TopUI_1.EAppTopUIs.CompHeader, true, true);
        UserProfile_1.userProfile.UpdateBalance();
    };
    PageHome.prototype.onDisable = function () {
        TopUI_1.default.Instance.show(TopUI_1.EAppTopUIs.CompHeaderSimple, true, true);
    };
    PageHome.prototype.onStateChange = function () {
    };
    PageHome.prototype.setBg = function () {
        var d = new Date();
        var hour = d.getHours();
        if (hour >= 6 && hour < 18) {
            console.log("Day");
            this.bgDay.active = true;
            this.bgNight.active = false;
        }
        else {
            console.log("Night");
            this.bgDay.active = false;
            this.bgNight.active = true;
        }
    };
    __decorate([
        property(cc.Node)
    ], PageHome.prototype, "btnLeaderboard", void 0);
    __decorate([
        property(cc.Node)
    ], PageHome.prototype, "btnRules", void 0);
    __decorate([
        property(cc.Node)
    ], PageHome.prototype, "btnOrder", void 0);
    __decorate([
        property(cc.Node)
    ], PageHome.prototype, "btnShare", void 0);
    __decorate([
        property(cc.Node)
    ], PageHome.prototype, "bgDay", void 0);
    __decorate([
        property(cc.Node)
    ], PageHome.prototype, "bgNight", void 0);
    return PageHome;
}(Page_1.default));
exports.PageHome = PageHome;
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
exports.default = connect_1.default(mapStateToProps, mapDispatchToAction)(PageHome);

cc._RF.pop();