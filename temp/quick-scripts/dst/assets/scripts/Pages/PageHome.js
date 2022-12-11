
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Pages/PageHome.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BhZ2VzL1BhZ2VIb21lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtsRiwrQ0FBMEM7QUFDMUMseUNBQW9EO0FBQ3BELHFEQUFpRTtBQUdqRSxrREFBNkM7QUFDN0MsOENBQXlDO0FBQ3pDLDBDQUFpRTtBQUNqRSx3Q0FBbUM7QUFFbkMscURBQWtJO0FBQ2xJLHlEQUFrRjtBQUVsRiwwQ0FBcUM7QUFDckMsK0JBQTBCO0FBQzFCLDJEQUF5RDtBQUV6RCx1RUFBcUU7QUFDckUsNkRBQXdEO0FBS3hELCtDQUF3RDtBQUN4RCxtRUFBOEQ7QUFDOUQsaUVBQStEO0FBRS9ELCtDQUEwQztBQUVwQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUE4Qiw0QkFBSTtJQUFsQztRQUFBLHFFQStKQztRQTNKVSxvQkFBYyxHQUFZLElBQUksQ0FBQztRQUVuQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBQ3pCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFDekIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBQ3RCLGFBQU8sR0FBWSxJQUFJLENBQUM7O0lBb0ovQyxDQUFDO0lBbEpHLG1DQUFnQixHQUFoQixVQUFpQixXQUFXLEVBQUUsV0FBVyxFQUFFLFFBQThCLEVBQUUsSUFBMEIsRUFBRSxLQUFVO1FBQWpILGlCQWtCQztRQWxCMEMseUJBQUEsRUFBQSx5QkFBNkIsQ0FBQztRQUFFLHFCQUFBLEVBQUEscUJBQXlCLENBQUM7UUFBRSxzQkFBQSxFQUFBLFVBQVU7UUFDN0csSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFF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Ly8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7IENvbnNvbGUgfSBmcm9tIFwiY29uc29sZVwiO1xuaW1wb3J0IExvYWRpbmdDb3ZlciBmcm9tIFwiLi4vY29tbW9uL0xvYWRpbmdDb3ZlclwiO1xuaW1wb3J0IFNvdW5kTWdyIGZyb20gXCIuLi9jb21tb24vU291bmRNZ3JcIjtcbmltcG9ydCBUb3BVSSwgeyBFQXBwVG9wVUlzIH0gZnJvbSBcIi4uL2NvbW1vbi9Ub3BVSVwiO1xuaW1wb3J0IHsgdXNlclByb2ZpbGUsIFVzZXJQcm9maWxlIH0gZnJvbSBcIi4uL2NvbW1vbi9Vc2VyUHJvZmlsZVwiO1xuaW1wb3J0IHsgQ29tcFF1ZXN0c0NvbnRhaW5lciB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbXBRdWVzdHNDb250YWluZXJcIjtcbmltcG9ydCBQb3B1cE1hbmFnZXIgZnJvbSBcIi4uL1BvcHVwcy9Qb3B1cE1hbmFnZXJcIjtcbmltcG9ydCBBUElEZWZpbmUgZnJvbSBcIi4uL3NyYy9hcHAvQVBJRGVmaW5lXCI7XG5pbXBvcnQgY29ubmVjdCBmcm9tIFwiLi4vc3JjL2FwcC9jb25uZWN0XCI7XG5pbXBvcnQgc3RvcmUsIHsgUm9vdFN0YXRlLCBBcHBEaXNwYXRjaCB9IGZyb20gXCIuLi9zcmMvYXBwL3N0b3JlXCI7XG5pbXBvcnQgd3NndyBmcm9tIFwiLi4vc3JjL2FwcC93c2d3XCI7XG5pbXBvcnQgR2FtZURlZmluZSBmcm9tIFwiLi4vc3JjL2NvbW1vbi9HYW1lRGVmaW5lXCI7XG5pbXBvcnQgeyBFQXBwUGFnZXMsIElQYWdlV2l0aEVmZmVjdCwgcHVzaFBhZ2UsIHBvcFBhZ2UsIEVBcHBQb3B1cHMsIHB1c2hQb3B1cCwgUEFHRV9TSE9XX0VGRkVDVCB9IGZyb20gXCIuLi9zcmMvZmVhdHVyZXMvU2xpY2VBcHBcIjtcbmltcG9ydCB7IHN5bmNMb2dpbk1pbGVzdG9uZXMsIHN5bmNMb2dpblN0cmVhayB9IGZyb20gXCIuLi9zcmMvZmVhdHVyZXMvU2xpY2VMb2dpblwiO1xuaW1wb3J0IHsgTG9naW5Qcm9ncmVzc0JhciB9IGZyb20gXCIuLi9zcmMvZ2FtZS9Mb2dpblByb2dyZXNzQmFyXCI7XG5pbXBvcnQgSGVscGVyIGZyb20gXCIuLi91dGlscy9IZWxwZXJcIjtcbmltcG9ydCBQYWdlIGZyb20gXCIuL1BhZ2VcIjtcbmltcG9ydCB7IHN5bmNRdWVzdHMgfSBmcm9tICcuLi9zcmMvZmVhdHVyZXMvU2xpY2VRdWVzdHMnO1xuaW1wb3J0IHsgc3luY1Jld2FyZCB9IGZyb20gJy4uL3NyYy9mZWF0dXJlcy9TbGljZVJld2FyZCc7XG5pbXBvcnQgeyBzeW5jV2Vla2x5VGlja2V0IH0gZnJvbSAnLi4vc3JjL2ZlYXR1cmVzL1NsaWNlV2Vla2x5VGlja2V0JztcbmltcG9ydCBQb3B1cERhaWx5TG9naW4gZnJvbSAnLi4vUG9wdXBzL1BvcHVwRGFpbHlMb2dpbic7XG5pbXBvcnQgTWFjaGluZUxpZ2h0RlggZnJvbSAnLi4vc3JjL2dhbWUvTWFjaGluZUxpZ2h0RlgnO1xuaW1wb3J0IFRyYWNraW5nRGVmaW5lIGZyb20gJy4uL3NyYy9jb21tb24vVHJhY2tpbmdEZWZpbmUnO1xuaW1wb3J0IHsgdHJhY2tVc2VySW50ZXJhY3QgfSBmcm9tICcuLi9zcmMvY29tbW9uL3V0aWxzJztcbmltcG9ydCBSZXdhcmRQb3B1cHNNZ3IgZnJvbSAnLi4vc3JjL2dhbWUvUmV3YXJkUG9wdXBzTWdyJztcbmltcG9ydCB7IGNoZWNrUmV3YXJkUG9wdXAgfSBmcm9tICcuLi9zcmMvY29tbW9uL2NvbW1vbic7XG5pbXBvcnQgUG9wdXBOZXdVc2VyUmV3YXJkIGZyb20gJy4uL1BvcHVwcy9Qb3B1cE5ld1VzZXJSZXdhcmQnO1xuaW1wb3J0IHsgc3luY0RlZXBsaW5rcyB9IGZyb20gJy4uL3NyYy9mZWF0dXJlcy9TbGljZURlZXBsaW5rcyc7XG5pbXBvcnQgeyBQYWdlUnVsZXMgfSBmcm9tICcuL1BhZ2VSdWxlcyc7XG5pbXBvcnQgR2FtZU1nciBmcm9tICcuLi9zcmMvZ2FtZS9HYW1lTWdyJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuZXhwb3J0IGNsYXNzIFBhZ2VIb21lIGV4dGVuZHMgUGFnZSB7XG4gICAgYWN0aW9uczogYW55O1xuICAgIHByb3BzOiBhbnlcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwdWJsaWMgYnRuTGVhZGVyYm9hcmQ6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpIGJ0blJ1bGVzOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSkgYnRuT3JkZXI6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKSBidG5TaGFyZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSkgYmdEYXk6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKSBiZ05pZ2h0OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIGNsYWltTG9naW5SZXdhcmQobmV3VXNlckNvaW4sIG5ld1VzZXJUdXJuLCBpbml0RnVuYzogRnVuY3Rpb24gPSAoKSA9PiB7IH0sIGZhaWw6IEZ1bmN0aW9uID0gKCkgPT4geyB9LCByZXRyeSA9IDQ1KSB7XG4gICAgICAgIGlmIChyZXRyeSA8IDApIHtcbiAgICAgICAgICAgIC8vIHRoaXMuYWN0aW9ucy5wdXNoUG9wdXAoRUFwcFBvcHVwcy5Qb3B1cEVycm9yUmVsb2FkKTtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHdzZ3cudXNlclJlcXVlc3QoQVBJRGVmaW5lLmNsYWltTG9naW5SZXdhcmQsIHt9LCAoZSkgPT4ge1xuICAgICAgICAgICAgdXNlclByb2ZpbGUuVXBkYXRlQmFsYW5jZSgpO1xuICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goc3luY0xvZ2luU3RyZWFrKGUpKTtcbiAgICAgICAgICAgIGlmIChlLm1lc3NhZ2UpIHJldHVybjtcblxuICAgICAgICAgICAgY29uc3QgeyBjb2luOiBsb2dpbkNvaW4sIHR1cm46IGxvZ2luVHVybiwgbG9naW5TdHJlYWsgfSA9IGU7XG4gICAgICAgICAgICBpbml0RnVuYyhuZXdVc2VyQ29pbiArIGxvZ2luQ29pbiwgbmV3VXNlclR1cm4gKyBsb2dpblR1cm4sIGxvZ2luU3RyZWFrKVxuICAgICAgICB9LCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUuc3RhdHVzID09PSA0MDkpIHJldHVybjtcbiAgICAgICAgICAgIGZhaWwoKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jbGFpbUxvZ2luUmV3YXJkKG5ld1VzZXJDb2luLCBuZXdVc2VyVHVybiwgaW5pdEZ1bmMsIGZhaWwsIHJldHJ5IC0gMSksIDEwMDApO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIEdhbWVNZ3IuSW5zdGFuY2UuaW5pdCgpO1xuXG4gICAgICAgIHVzZXJQcm9maWxlLlVwZGF0ZVByb2ZpbGUodHJ1ZSwgKCkgPT4ge1xuICAgICAgICAgICAgd3Nndy51c2VyUmVxdWVzdChBUElEZWZpbmUuY2xhaW1OZXdVc2VyUmV3YXJkcywge30sIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgdXNlclByb2ZpbGUuVXBkYXRlQmFsYW5jZSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgY29pbjogbmV3VXNlckNvaW4sIHR1cm46IG5ld1VzZXJUdXJuIH0gPSBlO1xuICAgICAgICAgICAgICAgIHRoaXMuY2xhaW1Mb2dpblJld2FyZChuZXdVc2VyQ29pbiwgbmV3VXNlclR1cm4sIChjb2luLCB0dXJuKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9ucy5wdXNoUG9wdXAoRUFwcFBvcHVwcy5Qb3B1cE5ld1VzZXJSZXdhcmQpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3B1cCA9IGNjLmZpbmQoJ0NhbnZhcy9Qb3B1cE1hbmFnZXIvU2hvd24gUG9wdXBzL1BvcHVwTmV3VXNlclJld2FyZCcpO1xuICAgICAgICAgICAgICAgICAgICBwb3B1cCAmJiBwb3B1cC5nZXRDb21wb25lbnQoUG9wdXBOZXdVc2VyUmV3YXJkKS5pbml0KGNvaW4sIHR1cm4pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5wcm9wcy51c2VyLmlzTmV3VXNlcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsYWltTG9naW5SZXdhcmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIChjb2luLCB0dXJuLCBsb2dpblN0cmVhaykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9ucy5wdXNoUG9wdXAoRUFwcFBvcHVwcy5Qb3B1cERhaWx5TG9naW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvcHVwID0gY2MuZmluZCgnQ2FudmFzL1BvcHVwTWFuYWdlci9TaG93biBQb3B1cHMvUG9wdXBEYWlseUxvZ2luJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXAgJiYgcG9wdXAuZ2V0Q29tcG9uZW50KFBvcHVwRGFpbHlMb2dpbikuaW5pdChjb2luLCB0dXJuLCBsb2dpblN0cmVhayk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuYWN0aW9ucy5wdXNoUG9wdXAoRUFwcFBvcHVwcy5Qb3B1cEVycm9yUmVsb2FkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgd3Nndy51c2VyUmVxdWVzdChBUElEZWZpbmUuZ2V0TWlzc2lvbkxpc3QsIHt9LCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHN5bmNRdWVzdHMoZSkpO1xuICAgICAgICAgICAgfSwgY29uc29sZS5lcnJvcik7XG4gICAgICAgICAgICB3c2d3LnVzZXJSZXF1ZXN0KEFQSURlZmluZS5nZXREZWVwbGlua3MsIHt9LCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHN5bmNEZWVwbGlua3MoZSkpO1xuICAgICAgICAgICAgfSwgY29uc29sZS5lcnJvcik7XG4gICAgICAgICAgICB3c2d3LnVzZXJSZXF1ZXN0KEFQSURlZmluZS5nZXRMb2dpbk1pbGVzdG9uZXMsIHt9LCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHN5bmNMb2dpbk1pbGVzdG9uZXMoZS5taWxlc3RvbmVzKSk7XG4gICAgICAgICAgICB9LCBjb25zb2xlLmVycm9yKTtcbiAgICAgICAgICAgIHdzZ3cudXNlclJlcXVlc3QoQVBJRGVmaW5lLmNoZWNrV2Vla2x5VGlja2V0LCB7fSwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChzeW5jV2Vla2x5VGlja2V0KHsgYm91Z2h0OiB0cnVlIH0pKVxuICAgICAgICAgICAgfSwgY29uc29sZS5lcnJvcik7XG4gICAgICAgICAgICBjaGVja1Jld2FyZFBvcHVwKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIFNvdW5kTWdyLnBsYXlNdXNpYyhTb3VuZE1nci5JbnN0YW5jZS5CR00pO1xuXG4gICAgICAgIHRoaXMuaW5pdEJ1dHRvbnMoKTtcblxuICAgICAgICB0aGlzLmJ0blJ1bGVzLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9ucy5wdXNoUGFnZShFQXBwUGFnZXMuUGFnZVJ1bGVzKTtcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmJ0bk9yZGVyLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbk9yZGVyLmJpbmQodGhpcykpXG4gICAgICAgIHRoaXMuYnRuU2hhcmUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uU2hhcmUuYmluZCh0aGlzKSlcblxuICAgICAgICB0aGlzLnNldEJnKClcbiAgICAgICAgdGhpcy5zY2hlZHVsZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QmcoKTtcbiAgICAgICAgfSwgNSk7XG4gICAgfVxuXG4gICAgb25PcmRlcigpIHtcbiAgICAgICAgaWYgKCg8YW55PndpbmRvdykuUmVhY3ROYXRpdmVXZWJWaWV3KSB7XG4gICAgICAgICAgICAoPGFueT53aW5kb3cpLlJlYWN0TmF0aXZlV2ViVmlldy5wb3N0TWVzc2FnZSgnT05fQ1JFQVRFX09SREVSJywgJyonKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKCdPTl9DUkVBVEVfT1JERVInLCAnKicpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblNoYXJlKCkge1xuICAgICAgICBpZiAoKDxhbnk+d2luZG93KS5SZWFjdE5hdGl2ZVdlYlZpZXcpIHtcbiAgICAgICAgICAgICg8YW55PndpbmRvdykuUmVhY3ROYXRpdmVXZWJWaWV3LnBvc3RNZXNzYWdlKCdPTl9TSEFSRV9HQU1FJywgJyonKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKCdPTl9TSEFSRV9HQU1FJywgJyonKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5pdEJ1dHRvbnMoKSB7XG4gICAgICAgIEhlbHBlci5yZWdpc3RlckJ1dHRvbkV2ZW50KHRoaXMuYnRuTGVhZGVyYm9hcmQsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9ucy5wdXNoUG9wdXAoRUFwcFBvcHVwcy5Qb3B1cExlYWRlcmJvYXJkKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHVwZGF0ZUJhbGFuY2Uoc3BpbkJhbGFuY2U6IG51bWJlciwgY29pbkJhbGFuY2U6IG51bWJlcikge1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHN1cGVyLmluaXQoKTtcbiAgICAgICAgVG9wVUkuSW5zdGFuY2Uuc2hvdyhFQXBwVG9wVUlzLkNvbXBIZWFkZXIsIHRydWUsIHRydWUpXG5cbiAgICAgICAgdXNlclByb2ZpbGUuVXBkYXRlQmFsYW5jZSgpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25EaXNhYmxlKCk6IHZvaWQge1xuICAgICAgICBUb3BVSS5JbnN0YW5jZS5zaG93KEVBcHBUb3BVSXMuQ29tcEhlYWRlclNpbXBsZSwgdHJ1ZSwgdHJ1ZSlcbiAgICB9XG5cbiAgICBvblN0YXRlQ2hhbmdlKCkge1xuICAgIH1cblxuICAgIHNldEJnKCl7XG4gICAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBsZXQgaG91ciA9IGQuZ2V0SG91cnMoKTtcblxuICAgICAgICBpZihob3VyID49IDYgJiYgaG91ciA8IDE4KXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGF5XCIpXG4gICAgICAgICAgICB0aGlzLmJnRGF5LmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgIHRoaXMuYmdOaWdodC5hY3RpdmUgPSBmYWxzZVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTmlnaHRcIilcbiAgICAgICAgICAgIHRoaXMuYmdEYXkuYWN0aXZlID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMuYmdOaWdodC5hY3RpdmUgPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBcbiAgICB9XG5cblxuXG4gICAgXG59XG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gKHtcbiAgICB1c2VyOiBzdGF0ZS51c2VyXG59KVxuY29uc3QgbWFwRGlzcGF0Y2hUb0FjdGlvbiA9IChkaXNwYXRjaDogQXBwRGlzcGF0Y2gpID0+ICh7XG4gICAgcHVzaFBhZ2U6IChwYXlsb2FkOiBFQXBwUGFnZXMgfCBJUGFnZVdpdGhFZmZlY3QpID0+XG4gICAgICAgIGRpc3BhdGNoKHB1c2hQYWdlKHBheWxvYWQpKSxcbiAgICBwb3BQYWdlOiAoKSA9PiBkaXNwYXRjaChwb3BQYWdlKCkpLFxuICAgIHB1c2hQb3B1cDogKHBheWxvYWQ6IEVBcHBQb3B1cHMpID0+IGRpc3BhdGNoKHB1c2hQb3B1cChwYXlsb2FkKSksXG59KVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9BY3Rpb24pKFBhZ2VIb21lKSJdfQ==