"use strict";
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