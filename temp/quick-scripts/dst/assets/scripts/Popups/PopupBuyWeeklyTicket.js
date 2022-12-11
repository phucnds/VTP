
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Popups/PopupBuyWeeklyTicket.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd853aCmhnFGhYmF3NQNzpB/', 'PopupBuyWeeklyTicket');
// scripts/Popups/PopupBuyWeeklyTicket.ts

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
exports.PopupBuyWeeklyTicket = void 0;
var R = require("ramda");
var moment = require("moment");
var connect_1 = require("../src/app/connect");
var store_1 = require("../src/app/store");
var utils_1 = require("../src/common/utils");
var SliceApp_1 = require("../src/features/SliceApp");
var FrameMgr_1 = require("../common/FrameMgr");
var GameDefine_1 = require("../src/common/GameDefine");
var SoundMgr_1 = require("../common/SoundMgr");
var APIDefine_1 = require("../src/app/APIDefine");
var wsgw_1 = require("../src/app/wsgw");
var Popup_1 = require("./Popup");
var SliceWeeklyTicket_1 = require("../src/features/SliceWeeklyTicket");
var UserProfile_1 = require("../common/UserProfile");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopupBuyWeeklyTicket = /** @class */ (function (_super) {
    __extends(PopupBuyWeeklyTicket, _super);
    function PopupBuyWeeklyTicket() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btnContainer = null;
        _this.btnResult = null;
        _this.btnBuy = null;
        _this.btnClose = null;
        _this.title = null;
        _this.buyTicketContainer = null;
        _this.dayTxt1 = null;
        _this.dayTxt2 = null;
        _this.hourTxt1 = null;
        _this.hourTxt2 = null;
        _this.minuteTxt1 = null;
        _this.minuteTxt2 = null;
        _this.secondTxt1 = null;
        _this.secondTxt2 = null;
        _this.boughtTicketContainer = null;
        _this.duedate = null;
        _this.boughtTicketContainerCountdown = null;
        _this.rollPhaseCompletedTicketContainer = null;
        _this.rollPhaseCompletedNoTicketContainer = null;
        _this.eventEndedContainer = null;
        _this.notBuyTimeoutTicketContainer = null;
        _this.notBuyTimeoutTicketContainerDate = null;
        _this.time = 0;
        return _this;
    }
    PopupBuyWeeklyTicket.prototype.onLoad = function () {
        var _this = this;
        _super.prototype.onLoad.call(this);
        this.btnBuy.on(cc.Node.EventType.TOUCH_END, function () {
            if (!_this.btnBuy.getComponent(cc.Button).interactable)
                return;
            SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
            wsgw_1.default.userRequest(APIDefine_1.default.exchangeCoin, {}, function (e) {
                _this.activeBuyButton(false);
                _this.actions.popPopup();
                _this.actions.pushPopup(SliceApp_1.EAppPopups.PopupBuyWeeklyTicketSuccess);
                wsgw_1.default.userRequest(APIDefine_1.default.checkWeeklyTicket, {}, function (e) {
                    store_1.default.dispatch(SliceWeeklyTicket_1.syncWeeklyTicket({ bought: true }));
                }, console.error);
                UserProfile_1.userProfile.UpdateBalance();
            }, console.error);
        });
        this.btnResult.on(cc.Node.EventType.TOUCH_END, function () {
            SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
            _this.actions.popPopup();
            _this.actions.pushPage({ page: SliceApp_1.EAppPages.PageWeeklyPrizeHistory, effect: SliceApp_1.PAGE_SHOW_EFFECT.LEFT });
        });
        this.btnClose.on(cc.Node.EventType.TOUCH_END, function () {
            SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
            _this.actions.popPopup();
        });
    };
    PopupBuyWeeklyTicket.prototype.update = function (dt) {
        this.syncTime();
    };
    PopupBuyWeeklyTicket.prototype.activeBuyButton = function (enable) {
        this.btnBuy.getComponent(cc.Button).interactable = enable;
        this.btnBuy.getChildByName('Background').color = enable ? new cc.Color(255, 255, 255) : new cc.Color(221, 221, 221);
        this.btnBuy.getChildByName('Label').color = enable ? new cc.Color(255, 0, 0) : new cc.Color(134, 134, 134);
    };
    PopupBuyWeeklyTicket.prototype.onEnable = function () {
        _super.prototype.onEnable.call(this);
        var coin = R.view(R.lensPath(['user', 'coinBalance']))(this.props);
        if (coin < GameDefine_1.default.WEEKLY_EXCHANGE_AMOUNT) {
            this.activeBuyButton(false);
        }
        else {
            this.activeBuyButton(true);
        }
    };
    PopupBuyWeeklyTicket.prototype.disableAllContainer = function () {
        this.buyTicketContainer.active = false;
        this.boughtTicketContainer.active = false;
        this.rollPhaseCompletedTicketContainer.active = false;
        this.notBuyTimeoutTicketContainer.active = false;
        this.eventEndedContainer.active = false;
        this.rollPhaseCompletedNoTicketContainer.active = false;
    };
    PopupBuyWeeklyTicket.prototype.disableAllButtons = function () {
        this.btnResult.active = false;
        this.btnBuy.active = false;
        this.btnClose.active = false;
        this.btnContainer.active = true;
    };
    PopupBuyWeeklyTicket.prototype.syncTime = function () {
        if (Math.floor(new Date().valueOf() / 1000) === this.time) {
            return;
        }
        this.time = Math.floor(new Date().valueOf() / 1000);
        this.disableAllContainer();
        this.disableAllButtons();
        this.title.spriteFrame = FrameMgr_1.default.Instance.POPUP_TITLE_WEEKLY_TICKET;
        var eventRemainingSeconds = utils_1.getRemanningTime(new Date(GameDefine_1.default.EVENT_END_DATE)).second;
        if (eventRemainingSeconds < 0) {
            this.title.spriteFrame = FrameMgr_1.default.Instance.POPUP_TITLE_NOTI;
            this.eventEndedContainer.active = true;
            this.btnClose.active = true;
            return;
        }
        var buyPhaseDueDate = moment().endOf('isoWeek').startOf('day').add(19, "hours").add(50, 'minutes');
        var rollPhaseDueDate = moment().endOf('isoWeek').startOf('day').add(20, "hours");
        var _a = utils_1.getRemanningTime(new Date(buyPhaseDueDate.valueOf())), dayBuy = _a.day, hourBuy = _a.hour, minuteBuy = _a.minute, secondBuy = _a.second;
        var _b = utils_1.getRemanningTime(new Date(rollPhaseDueDate.valueOf())), dayRoll = _b.day, hourRoll = _b.hour, minuteRoll = _b.minute, secondRoll = _b.second;
        var isTicketBought = R.view(R.lensPath(['weeklyTicket', 'bought']), this.props);
        if (isTicketBought) { // Da mua ve
            if (secondRoll < 0) { // Da roll xong
                this.rollPhaseCompletedTicketContainer.active = true;
                this.btnResult.active = true;
                this.title.spriteFrame = FrameMgr_1.default.Instance.POPUP_TITLE_NOTI;
                return;
            }
            this.boughtTicketContainer.active = true;
            this.btnResult.active = true;
            this.duedate.string = '20h00 Chủ nhật ' + buyPhaseDueDate.format('DD/MM/YYYY');
            this.boughtTicketContainerCountdown.string = dayRoll.toString().padStart(2, '0') + " ng\u00E0y " + hourRoll.toString().padStart(2, '0') + " gi\u1EDD " + minuteRoll.toString().padStart(2, '0') + " ph\u00FAt " + secondRoll.toString().padStart(2, '0') + " gi\u00E2y";
            return;
        }
        else { // Chua mua ve
            if (secondRoll < 0) { // Da roll xong
                this.rollPhaseCompletedNoTicketContainer.active = true;
                this.btnResult.active = true;
                this.title.spriteFrame = FrameMgr_1.default.Instance.POPUP_TITLE_NOTI;
                return;
            }
            if (secondBuy < 0) { // Het buy phase
                this.notBuyTimeoutTicketContainer.active = true;
                this.btnClose.active = true;
                this.notBuyTimeoutTicketContainerDate.string = rollPhaseDueDate.format('DD/MM/YYYY');
                this.title.spriteFrame = FrameMgr_1.default.Instance.POPUP_TITLE_NOTI;
            }
            else { // Con buy phase
                this.buyTicketContainer.active = true;
                this.btnResult.active = true;
                this.btnBuy.active = true;
                this.dayTxt1.string = Math.floor(dayBuy / 10).toString();
                this.dayTxt2.string = (dayBuy % 10).toString();
                this.hourTxt1.string = Math.floor(hourBuy / 10).toString();
                this.hourTxt2.string = (hourBuy % 10).toString();
                this.minuteTxt1.string = Math.floor(minuteBuy / 10).toString();
                this.minuteTxt2.string = (minuteBuy % 10).toString();
                this.secondTxt1.string = Math.floor(secondBuy / 10).toString();
                this.secondTxt2.string = (secondBuy % 10).toString();
            }
            return;
        }
    };
    __decorate([
        property(cc.Node)
    ], PopupBuyWeeklyTicket.prototype, "btnContainer", void 0);
    __decorate([
        property(cc.Node)
    ], PopupBuyWeeklyTicket.prototype, "btnResult", void 0);
    __decorate([
        property(cc.Node)
    ], PopupBuyWeeklyTicket.prototype, "btnBuy", void 0);
    __decorate([
        property(cc.Node)
    ], PopupBuyWeeklyTicket.prototype, "btnClose", void 0);
    __decorate([
        property(cc.Sprite)
    ], PopupBuyWeeklyTicket.prototype, "title", void 0);
    __decorate([
        property(cc.Node)
    ], PopupBuyWeeklyTicket.prototype, "buyTicketContainer", void 0);
    __decorate([
        property(cc.Label)
    ], PopupBuyWeeklyTicket.prototype, "dayTxt1", void 0);
    __decorate([
        property(cc.Label)
    ], PopupBuyWeeklyTicket.prototype, "dayTxt2", void 0);
    __decorate([
        property(cc.Label)
    ], PopupBuyWeeklyTicket.prototype, "hourTxt1", void 0);
    __decorate([
        property(cc.Label)
    ], PopupBuyWeeklyTicket.prototype, "hourTxt2", void 0);
    __decorate([
        property(cc.Label)
    ], PopupBuyWeeklyTicket.prototype, "minuteTxt1", void 0);
    __decorate([
        property(cc.Label)
    ], PopupBuyWeeklyTicket.prototype, "minuteTxt2", void 0);
    __decorate([
        property(cc.Label)
    ], PopupBuyWeeklyTicket.prototype, "secondTxt1", void 0);
    __decorate([
        property(cc.Label)
    ], PopupBuyWeeklyTicket.prototype, "secondTxt2", void 0);
    __decorate([
        property(cc.Node)
    ], PopupBuyWeeklyTicket.prototype, "boughtTicketContainer", void 0);
    __decorate([
        property(cc.Label)
    ], PopupBuyWeeklyTicket.prototype, "duedate", void 0);
    __decorate([
        property(cc.Label)
    ], PopupBuyWeeklyTicket.prototype, "boughtTicketContainerCountdown", void 0);
    __decorate([
        property(cc.Node)
    ], PopupBuyWeeklyTicket.prototype, "rollPhaseCompletedTicketContainer", void 0);
    __decorate([
        property(cc.Node)
    ], PopupBuyWeeklyTicket.prototype, "rollPhaseCompletedNoTicketContainer", void 0);
    __decorate([
        property(cc.Node)
    ], PopupBuyWeeklyTicket.prototype, "eventEndedContainer", void 0);
    __decorate([
        property(cc.Node)
    ], PopupBuyWeeklyTicket.prototype, "notBuyTimeoutTicketContainer", void 0);
    __decorate([
        property(cc.Label)
    ], PopupBuyWeeklyTicket.prototype, "notBuyTimeoutTicketContainerDate", void 0);
    return PopupBuyWeeklyTicket;
}(Popup_1.default));
exports.PopupBuyWeeklyTicket = PopupBuyWeeklyTicket;
var mapStateToProps = function (state) { return ({
    weeklyTicket: state.weeklyTicket,
    user: state.user
}); };
var mapDispatchToAction = function (dispatch) { return ({
    pushPage: function (payload) {
        return dispatch(SliceApp_1.pushPage(payload));
    },
    popPage: function () { return dispatch(SliceApp_1.popPage()); },
    pushPopup: function (payload) { return dispatch(SliceApp_1.pushPopup(payload)); },
    popPopup: function () { return dispatch(SliceApp_1.popPopup()); },
}); };
exports.default = connect_1.default(mapStateToProps, mapDispatchToAction)(PopupBuyWeeklyTicket);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BvcHVwcy9Qb3B1cEJ1eVdlZWtseVRpY2tldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYseUJBQTJCO0FBQzNCLCtCQUFrQztBQUNsQyw4Q0FBeUM7QUFDekMsMENBQWlFO0FBQ2pFLDZDQUFzRTtBQUN0RSxxREFBNEk7QUFDNUksK0NBQTBDO0FBQzFDLHVEQUFrRDtBQUNsRCwrQ0FBMEM7QUFDMUMsa0RBQTZDO0FBQzdDLHdDQUFtQztBQUNuQyxpQ0FBNEI7QUFDNUIsdUVBQXFFO0FBQ3JFLHFEQUFvRDtBQUc5QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUEwQyx3Q0FBSztJQUEvQztRQUFBLHFFQXNNQztRQWpNVSxrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixXQUFLLEdBQWMsSUFBSSxDQUFDO1FBR3hCLHdCQUFrQixHQUFZLElBQUksQ0FBQztRQUVuQyxhQUFPLEdBQWEsSUFBSSxDQUFDO1FBRXpCLGFBQU8sR0FBYSxJQUFJLENBQUM7UUFFekIsY0FBUSxHQUFhLElBQUksQ0FBQztRQUUxQixjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRTFCLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRTVCLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRTVCLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRTVCLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRzVCLDJCQUFxQixHQUFZLElBQUksQ0FBQztRQUV0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Q3ZDLENBQUMsRUFOcUQsQ0FNckQsQ0FBQTtBQUNGLGtCQUFlLGlCQUFPLENBQUMsZUFBZSxFQUFFLG1CQUFtQixDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJztcbmltcG9ydCBtb21lbnQgPSByZXF1aXJlKFwibW9tZW50XCIpO1xuaW1wb3J0IGNvbm5lY3QgZnJvbSBcIi4uL3NyYy9hcHAvY29ubmVjdFwiO1xuaW1wb3J0IHN0b3JlLCB7IEFwcERpc3BhdGNoLCBSb290U3RhdGUgfSBmcm9tIFwiLi4vc3JjL2FwcC9zdG9yZVwiO1xuaW1wb3J0IHsgZ2V0UmVtYWluVGltZSwgZ2V0UmVtYW5uaW5nVGltZSB9IGZyb20gXCIuLi9zcmMvY29tbW9uL3V0aWxzXCI7XG5pbXBvcnQgeyBFQXBwUGFnZXMsIEVBcHBQb3B1cHMsIElQYWdlV2l0aEVmZmVjdCwgUEFHRV9TSE9XX0VGRkVDVCwgcG9wUGFnZSwgcG9wUG9wdXAsIHB1c2hQYWdlLCBwdXNoUG9wdXAgfSBmcm9tIFwiLi4vc3JjL2ZlYXR1cmVzL1NsaWNlQXBwXCI7XG5pbXBvcnQgRnJhbWVNZ3IgZnJvbSAnLi4vY29tbW9uL0ZyYW1lTWdyJztcbmltcG9ydCBHYW1lRGVmaW5lIGZyb20gJy4uL3NyYy9jb21tb24vR2FtZURlZmluZSc7XG5pbXBvcnQgU291bmRNZ3IgZnJvbSAnLi4vY29tbW9uL1NvdW5kTWdyJztcbmltcG9ydCBBUElEZWZpbmUgZnJvbSAnLi4vc3JjL2FwcC9BUElEZWZpbmUnO1xuaW1wb3J0IHdzZ3cgZnJvbSAnLi4vc3JjL2FwcC93c2d3JztcbmltcG9ydCBQb3B1cCBmcm9tICcuL1BvcHVwJztcbmltcG9ydCB7IHN5bmNXZWVrbHlUaWNrZXQgfSBmcm9tICcuLi9zcmMvZmVhdHVyZXMvU2xpY2VXZWVrbHlUaWNrZXQnO1xuaW1wb3J0IHsgdXNlclByb2ZpbGUgfSBmcm9tICcuLi9jb21tb24vVXNlclByb2ZpbGUnO1xuXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbmV4cG9ydCBjbGFzcyBQb3B1cEJ1eVdlZWtseVRpY2tldCBleHRlbmRzIFBvcHVwIHtcbiAgICBhY3Rpb25zOiBhbnk7XG4gICAgcHJvcHM6IFJvb3RTdGF0ZVxuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHVibGljIGJ0bkNvbnRhaW5lcjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHVibGljIGJ0blJlc3VsdDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHVibGljIGJ0bkJ1eTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHVibGljIGJ0bkNsb3NlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIHB1YmxpYyB0aXRsZTogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHB1YmxpYyBidXlUaWNrZXRDb250YWluZXI6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBwdWJsaWMgZGF5VHh0MTogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBwdWJsaWMgZGF5VHh0MjogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBwdWJsaWMgaG91clR4dDE6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgcHVibGljIGhvdXJUeHQyOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHB1YmxpYyBtaW51dGVUeHQxOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHB1YmxpYyBtaW51dGVUeHQyOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHB1YmxpYyBzZWNvbmRUeHQxOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHB1YmxpYyBzZWNvbmRUeHQyOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwdWJsaWMgYm91Z2h0VGlja2V0Q29udGFpbmVyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgcHVibGljIGR1ZWRhdGU6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgcHVibGljIGJvdWdodFRpY2tldENvbnRhaW5lckNvdW50ZG93bjogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHVibGljIHJvbGxQaGFzZUNvbXBsZXRlZFRpY2tldENvbnRhaW5lcjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHVibGljIHJvbGxQaGFzZUNvbXBsZXRlZE5vVGlja2V0Q29udGFpbmVyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwdWJsaWMgZXZlbnRFbmRlZENvbnRhaW5lcjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwdWJsaWMgbm90QnV5VGltZW91dFRpY2tldENvbnRhaW5lcjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHB1YmxpYyBub3RCdXlUaW1lb3V0VGlja2V0Q29udGFpbmVyRGF0ZTogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSB0aW1lID0gMDtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgc3VwZXIub25Mb2FkKCk7XG4gICAgICAgIHRoaXMuYnRuQnV5Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmJ0bkJ1eS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUpIHJldHVybjtcbiAgICAgICAgICAgIFNvdW5kTWdyLnBsYXlTZngoU291bmRNZ3IuSW5zdGFuY2UuU0ZYX0JVVFRPTik7XG4gICAgICAgICAgICB3c2d3LnVzZXJSZXF1ZXN0KEFQSURlZmluZS5leGNoYW5nZUNvaW4sIHt9LCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlQnV5QnV0dG9uKGZhbHNlKVxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9ucy5wb3BQb3B1cCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9ucy5wdXNoUG9wdXAoRUFwcFBvcHVwcy5Qb3B1cEJ1eVdlZWtseVRpY2tldFN1Y2Nlc3MpO1xuICAgICAgICAgICAgICAgIHdzZ3cudXNlclJlcXVlc3QoQVBJRGVmaW5lLmNoZWNrV2Vla2x5VGlja2V0LCB7fSwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goc3luY1dlZWtseVRpY2tldCh7IGJvdWdodDogdHJ1ZSB9KSlcbiAgICAgICAgICAgICAgICB9LCBjb25zb2xlLmVycm9yKTtcbiAgICAgICAgICAgICAgICB1c2VyUHJvZmlsZS5VcGRhdGVCYWxhbmNlKCk7XG4gICAgICAgICAgICB9LCBjb25zb2xlLmVycm9yKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5idG5SZXN1bHQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoKSA9PiB7XG4gICAgICAgICAgICBTb3VuZE1nci5wbGF5U2Z4KFNvdW5kTWdyLkluc3RhbmNlLlNGWF9CVVRUT04pO1xuICAgICAgICAgICAgdGhpcy5hY3Rpb25zLnBvcFBvcHVwKCk7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbnMucHVzaFBhZ2UoeyBwYWdlOiBFQXBwUGFnZXMuUGFnZVdlZWtseVByaXplSGlzdG9yeSwgZWZmZWN0OiBQQUdFX1NIT1dfRUZGRUNULkxFRlQgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYnRuQ2xvc2Uub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoKSA9PiB7XG4gICAgICAgICAgICBTb3VuZE1nci5wbGF5U2Z4KFNvdW5kTWdyLkluc3RhbmNlLlNGWF9CVVRUT04pO1xuICAgICAgICAgICAgdGhpcy5hY3Rpb25zLnBvcFBvcHVwKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLnN5bmNUaW1lKCk7XG4gICAgfVxuXG4gICAgYWN0aXZlQnV5QnV0dG9uKGVuYWJsZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmJ0bkJ1eS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBlbmFibGU7XG4gICAgICAgIHRoaXMuYnRuQnV5LmdldENoaWxkQnlOYW1lKCdCYWNrZ3JvdW5kJykuY29sb3IgPSBlbmFibGUgPyBuZXcgY2MuQ29sb3IoMjU1LCAyNTUsIDI1NSkgOiBuZXcgY2MuQ29sb3IoMjIxLCAyMjEsIDIyMSk7XG4gICAgICAgIHRoaXMuYnRuQnV5LmdldENoaWxkQnlOYW1lKCdMYWJlbCcpLmNvbG9yID0gZW5hYmxlID8gbmV3IGNjLkNvbG9yKDI1NSwgMCwgMCkgOiBuZXcgY2MuQ29sb3IoMTM0LCAxMzQsIDEzNCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uRW5hYmxlKCk6IHZvaWQge1xuICAgICAgICBzdXBlci5vbkVuYWJsZSgpO1xuICAgICAgICBjb25zdCBjb2luID0gUi52aWV3KFIubGVuc1BhdGgoWyd1c2VyJywgJ2NvaW5CYWxhbmNlJ10pKSh0aGlzLnByb3BzKTtcbiAgICAgICAgaWYgKGNvaW4gPCBHYW1lRGVmaW5lLldFRUtMWV9FWENIQU5HRV9BTU9VTlQpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlQnV5QnV0dG9uKGZhbHNlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVCdXlCdXR0b24odHJ1ZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRpc2FibGVBbGxDb250YWluZXIoKSB7XG4gICAgICAgIHRoaXMuYnV5VGlja2V0Q29udGFpbmVyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJvdWdodFRpY2tldENvbnRhaW5lci5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yb2xsUGhhc2VDb21wbGV0ZWRUaWNrZXRDb250YWluZXIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubm90QnV5VGltZW91dFRpY2tldENvbnRhaW5lci5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ldmVudEVuZGVkQ29udGFpbmVyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJvbGxQaGFzZUNvbXBsZXRlZE5vVGlja2V0Q29udGFpbmVyLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgICBkaXNhYmxlQWxsQnV0dG9ucygpIHtcbiAgICAgICAgdGhpcy5idG5SZXN1bHQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYnRuQnV5LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJ0bkNsb3NlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJ0bkNvbnRhaW5lci5hY3RpdmUgPSB0cnVlO1xuICAgIH1cblxuXG4gICAgc3luY1RpbWUoKSB7XG4gICAgICAgIGlmIChNYXRoLmZsb29yKG5ldyBEYXRlKCkudmFsdWVPZigpIC8gMTAwMCkgPT09IHRoaXMudGltZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50aW1lID0gTWF0aC5mbG9vcihuZXcgRGF0ZSgpLnZhbHVlT2YoKSAvIDEwMDApXG5cbiAgICAgICAgdGhpcy5kaXNhYmxlQWxsQ29udGFpbmVyKCk7XG4gICAgICAgIHRoaXMuZGlzYWJsZUFsbEJ1dHRvbnMoKTtcbiAgICAgICAgdGhpcy50aXRsZS5zcHJpdGVGcmFtZSA9IEZyYW1lTWdyLkluc3RhbmNlLlBPUFVQX1RJVExFX1dFRUtMWV9USUNLRVQ7XG4gICAgICAgIGNvbnN0IHsgc2Vjb25kOiBldmVudFJlbWFpbmluZ1NlY29uZHMgfSA9IGdldFJlbWFubmluZ1RpbWUobmV3IERhdGUoR2FtZURlZmluZS5FVkVOVF9FTkRfREFURSkpO1xuICAgICAgICBpZiAoZXZlbnRSZW1haW5pbmdTZWNvbmRzIDwgMCkge1xuICAgICAgICAgICAgdGhpcy50aXRsZS5zcHJpdGVGcmFtZSA9IEZyYW1lTWdyLkluc3RhbmNlLlBPUFVQX1RJVExFX05PVEk7XG4gICAgICAgICAgICB0aGlzLmV2ZW50RW5kZWRDb250YWluZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuYnRuQ2xvc2UuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGJ1eVBoYXNlRHVlRGF0ZSA9IG1vbWVudCgpLmVuZE9mKCdpc29XZWVrJykuc3RhcnRPZignZGF5JykuYWRkKDE5LCBcImhvdXJzXCIpLmFkZCg1MCwgJ21pbnV0ZXMnKTtcbiAgICAgICAgY29uc3Qgcm9sbFBoYXNlRHVlRGF0ZSA9IG1vbWVudCgpLmVuZE9mKCdpc29XZWVrJykuc3RhcnRPZignZGF5JykuYWRkKDIwLCBcImhvdXJzXCIpO1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBkYXk6IGRheUJ1eSwgaG91cjogaG91ckJ1eSwgbWludXRlOiBtaW51dGVCdXksIHNlY29uZDogc2Vjb25kQnV5XG4gICAgICAgIH0gPSBnZXRSZW1hbm5pbmdUaW1lKG5ldyBEYXRlKGJ1eVBoYXNlRHVlRGF0ZS52YWx1ZU9mKCkpKTtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgZGF5OiBkYXlSb2xsLCBob3VyOiBob3VyUm9sbCwgbWludXRlOiBtaW51dGVSb2xsLCBzZWNvbmQ6IHNlY29uZFJvbGxcbiAgICAgICAgfSA9IGdldFJlbWFubmluZ1RpbWUobmV3IERhdGUocm9sbFBoYXNlRHVlRGF0ZS52YWx1ZU9mKCkpKTtcblxuICAgICAgICBjb25zdCBpc1RpY2tldEJvdWdodCA9IFIudmlldyhSLmxlbnNQYXRoKFsnd2Vla2x5VGlja2V0JywgJ2JvdWdodCddKSwgdGhpcy5wcm9wcyk7XG5cbiAgICAgICAgaWYgKGlzVGlja2V0Qm91Z2h0KSB7IC8vIERhIG11YSB2ZVxuICAgICAgICAgICAgaWYgKHNlY29uZFJvbGwgPCAwKSB7IC8vIERhIHJvbGwgeG9uZ1xuICAgICAgICAgICAgICAgIHRoaXMucm9sbFBoYXNlQ29tcGxldGVkVGlja2V0Q29udGFpbmVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5idG5SZXN1bHQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnRpdGxlLnNwcml0ZUZyYW1lID0gRnJhbWVNZ3IuSW5zdGFuY2UuUE9QVVBfVElUTEVfTk9USTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuYm91Z2h0VGlja2V0Q29udGFpbmVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmJ0blJlc3VsdC5hY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgICAgICB0aGlzLmR1ZWRhdGUuc3RyaW5nID0gJzIwaDAwIENo4bunIG5o4bqtdCAnICsgYnV5UGhhc2VEdWVEYXRlLmZvcm1hdCgnREQvTU0vWVlZWScpO1xuICAgICAgICAgICAgdGhpcy5ib3VnaHRUaWNrZXRDb250YWluZXJDb3VudGRvd24uc3RyaW5nID0gYCR7ZGF5Um9sbC50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyl9IG5nw6B5ICR7aG91clJvbGwudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpfSBnaeG7nSAke21pbnV0ZVJvbGwudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpfSBwaMO6dCAke3NlY29uZFJvbGwudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpfSBnacOieWA7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHsvLyBDaHVhIG11YSB2ZVxuICAgICAgICAgICAgaWYgKHNlY29uZFJvbGwgPCAwKSB7IC8vIERhIHJvbGwgeG9uZ1xuICAgICAgICAgICAgICAgIHRoaXMucm9sbFBoYXNlQ29tcGxldGVkTm9UaWNrZXRDb250YWluZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmJ0blJlc3VsdC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMudGl0bGUuc3ByaXRlRnJhbWUgPSBGcmFtZU1nci5JbnN0YW5jZS5QT1BVUF9USVRMRV9OT1RJO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNlY29uZEJ1eSA8IDApIHsgLy8gSGV0IGJ1eSBwaGFzZVxuICAgICAgICAgICAgICAgIHRoaXMubm90QnV5VGltZW91dFRpY2tldENvbnRhaW5lci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuYnRuQ2xvc2UuYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHRoaXMubm90QnV5VGltZW91dFRpY2tldENvbnRhaW5lckRhdGUuc3RyaW5nID0gcm9sbFBoYXNlRHVlRGF0ZS5mb3JtYXQoJ0REL01NL1lZWVknKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRpdGxlLnNwcml0ZUZyYW1lID0gRnJhbWVNZ3IuSW5zdGFuY2UuUE9QVVBfVElUTEVfTk9USTtcbiAgICAgICAgICAgIH0gZWxzZSB7Ly8gQ29uIGJ1eSBwaGFzZVxuICAgICAgICAgICAgICAgIHRoaXMuYnV5VGlja2V0Q29udGFpbmVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5idG5SZXN1bHQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bkJ1eS5hY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5kYXlUeHQxLnN0cmluZyA9IE1hdGguZmxvb3IoZGF5QnV5IC8gMTApLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXlUeHQyLnN0cmluZyA9IChkYXlCdXkgJSAxMCkudG9TdHJpbmcoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuaG91clR4dDEuc3RyaW5nID0gTWF0aC5mbG9vcihob3VyQnV5IC8gMTApLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ob3VyVHh0Mi5zdHJpbmcgPSAoaG91ckJ1eSAlIDEwKS50b1N0cmluZygpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5taW51dGVUeHQxLnN0cmluZyA9IE1hdGguZmxvb3IobWludXRlQnV5IC8gMTApLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5taW51dGVUeHQyLnN0cmluZyA9IChtaW51dGVCdXkgJSAxMCkudG9TdHJpbmcoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2Vjb25kVHh0MS5zdHJpbmcgPSBNYXRoLmZsb29yKHNlY29uZEJ1eSAvIDEwKS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vjb25kVHh0Mi5zdHJpbmcgPSAoc2Vjb25kQnV5ICUgMTApLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBSb290U3RhdGUpID0+ICh7XG4gICAgd2Vla2x5VGlja2V0OiBzdGF0ZS53ZWVrbHlUaWNrZXQsXG4gICAgdXNlcjogc3RhdGUudXNlclxufSlcbmNvbnN0IG1hcERpc3BhdGNoVG9BY3Rpb24gPSAoZGlzcGF0Y2g6IEFwcERpc3BhdGNoKSA9PiAoe1xuICAgIHB1c2hQYWdlOiAocGF5bG9hZDogRUFwcFBhZ2VzIHwgSVBhZ2VXaXRoRWZmZWN0KSA9PlxuICAgICAgICBkaXNwYXRjaChwdXNoUGFnZShwYXlsb2FkKSksXG4gICAgcG9wUGFnZTogKCkgPT4gZGlzcGF0Y2gocG9wUGFnZSgpKSxcbiAgICBwdXNoUG9wdXA6IChwYXlsb2FkOiBFQXBwUG9wdXBzKSA9PiBkaXNwYXRjaChwdXNoUG9wdXAocGF5bG9hZCkpLFxuICAgIHBvcFBvcHVwOiAoKSA9PiBkaXNwYXRjaChwb3BQb3B1cCgpKSxcbn0pXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb0FjdGlvbikoUG9wdXBCdXlXZWVrbHlUaWNrZXQpXG4iXX0=