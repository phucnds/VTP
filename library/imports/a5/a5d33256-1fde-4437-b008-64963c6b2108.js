"use strict";
cc._RF.push(module, 'a5d33JWH95EN7AIZJY8ayEI', 'CompQuest');
// scripts/components/CompQuest.ts

"use strict";
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
var SoundMgr_1 = require("../common/SoundMgr");
var APIDefine_1 = require("../src/app/APIDefine");
var store_1 = require("../src/app/store");
var wsgw_1 = require("../src/app/wsgw");
var TrackingDefine_1 = require("../src/common/TrackingDefine");
var CompQuestsContainer_1 = require("./CompQuestsContainer");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode;
var CompQuest = /** @class */ (function (_super) {
    __extends(CompQuest, _super);
    function CompQuest() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.progress = null;
        _this.nameTxt = null;
        _this.descriptionTxt = null;
        _this.ticketTxt = null;
        _this.coinTxt = null;
        _this.btnDoit = null;
        _this.btnTxt = null;
        _this.completedTxt = null;
        _this.rewardTurnContainer = null;
        _this.rewardCoinContainer = null;
        return _this;
    }
    CompQuest.prototype.init = function (progress, max, name, description, coin, turn, deeplink, btnCB, questCode) {
        if (btnCB === void 0) { btnCB = null; }
        var verifiedUser = store_1.default.getState().user.verifiedUser;
        if (verifiedUser && questCode == CompQuestsContainer_1.Missions.XAC_THUC_THONG_TIN.toString()) {
            if (progress >= max) {
                this.node.active = true;
            }
            else {
                this.node.active = false;
            }
        }
        var customerSourceLinked = store_1.default.getState().user.customerSourceLinked;
        if (customerSourceLinked && questCode == CompQuestsContainer_1.Missions.LIEN_KET_THE.toString()) {
            if (progress >= max) {
                this.node.active = true;
            }
            else {
                this.node.active = false;
            }
        }
        this.progress.string = (progress || '0') + " / " + (max || '0');
        this.nameTxt.string = name || '-';
        this.descriptionTxt.string = description ? description.split('\\n').join('\n') : '-';
        this.ticketTxt.string = turn ? turn.toString() : '0';
        this.coinTxt.string = coin ? coin.toString() : '0';
        this.btnTxt.string = CompQuestsContainer_1.MissionsButtonText[questCode] || 'Tham gia';
        this.rewardCoinContainer.active = coin > 0;
        this.rewardTurnContainer.active = turn > 0;
        if (progress >= max) {
            this.btnDoit.getComponent(cc.Button).interactable = false;
            this.btnDoit.active = false;
            this.completedTxt.node.active = true;
        }
        else {
            this.btnDoit.getComponent(cc.Button).interactable = true;
            this.btnDoit.active = true;
            this.completedTxt.node.active = false;
        }
        if (!btnCB && deeplink) {
            this.btnDoit.on(cc.Node.EventType.TOUCH_END, function () {
                SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
                window.location.href = deeplink;
                wsgw_1.default.userRequest(APIDefine_1.default.track, {
                    eventName: TrackingDefine_1.default.TrackingEvents.CLICK_ON_MISSION,
                    data: questCode
                }, function (e) { console.log("TRACKING - " + questCode); }, console.error);
            });
            return;
        }
        if (btnCB) {
            this.btnDoit.on(cc.Node.EventType.TOUCH_END, function () {
                SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
                btnCB(deeplink);
                wsgw_1.default.userRequest(APIDefine_1.default.track, {
                    eventName: TrackingDefine_1.default.TrackingEvents.CLICK_ON_MISSION,
                    data: questCode
                }, function (e) { console.log("TRACKING - " + questCode); }, console.error);
            });
            return;
        }
    };
    __decorate([
        property(cc.Label)
    ], CompQuest.prototype, "progress", void 0);
    __decorate([
        property(cc.Label)
    ], CompQuest.prototype, "nameTxt", void 0);
    __decorate([
        property(cc.Label)
    ], CompQuest.prototype, "descriptionTxt", void 0);
    __decorate([
        property(cc.Label)
    ], CompQuest.prototype, "ticketTxt", void 0);
    __decorate([
        property(cc.Label)
    ], CompQuest.prototype, "coinTxt", void 0);
    __decorate([
        property(cc.Node)
    ], CompQuest.prototype, "btnDoit", void 0);
    __decorate([
        property(cc.Label)
    ], CompQuest.prototype, "btnTxt", void 0);
    __decorate([
        property(cc.Label)
    ], CompQuest.prototype, "completedTxt", void 0);
    __decorate([
        property(cc.Node)
    ], CompQuest.prototype, "rewardTurnContainer", void 0);
    __decorate([
        property(cc.Node)
    ], CompQuest.prototype, "rewardCoinContainer", void 0);
    CompQuest = __decorate([
        ccclass
    ], CompQuest);
    return CompQuest;
}(cc.Component));
exports.default = CompQuest;

cc._RF.pop();