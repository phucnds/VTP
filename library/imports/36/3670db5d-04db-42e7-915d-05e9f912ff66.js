"use strict";
cc._RF.push(module, '3670dtdBNtC55FdBen5Ev9m', 'PopupBuyTurnSuccess');
// scripts/Popups/PopupBuyTurnSuccess.ts

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
var SoundMgr_1 = require("../common/SoundMgr");
var store_1 = require("../src/app/store");
var SliceApp_1 = require("../src/features/SliceApp");
var RewardPopupsMgr_1 = require("../src/game/RewardPopupsMgr");
var Popup_1 = require("./Popup");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopupBuyTurnSuccess = /** @class */ (function (_super) {
    __extends(PopupBuyTurnSuccess, _super);
    function PopupBuyTurnSuccess() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.amountTxt = null;
        _this.btnClose = null;
        _this.btnSpin = null;
        return _this;
    }
    PopupBuyTurnSuccess.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.btnClose.on(cc.Node.EventType.TOUCH_END, function () {
            SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
            store_1.default.dispatch(SliceApp_1.popPopup());
            store_1.default.dispatch(SliceApp_1.pushPage({ page: SliceApp_1.EAppPages.PageHome, effect: SliceApp_1.PAGE_SHOW_EFFECT.LEFT }));
        });
        this.btnSpin.on(cc.Node.EventType.TOUCH_END, function () {
            SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
            store_1.default.dispatch(SliceApp_1.popPopup());
            store_1.default.dispatch(SliceApp_1.pushPage({ page: SliceApp_1.EAppPages.PageHome, effect: SliceApp_1.PAGE_SHOW_EFFECT.LEFT }));
        });
    };
    PopupBuyTurnSuccess.prototype.init = function (turn) {
        this.amountTxt.string = turn + " V\u00E9";
    };
    PopupBuyTurnSuccess.prototype.onDisable = function () {
        RewardPopupsMgr_1.RewardPopupsMgr.Instance.showPopup();
    };
    __decorate([
        property(cc.Label)
    ], PopupBuyTurnSuccess.prototype, "amountTxt", void 0);
    __decorate([
        property(cc.Node)
    ], PopupBuyTurnSuccess.prototype, "btnClose", void 0);
    __decorate([
        property(cc.Node)
    ], PopupBuyTurnSuccess.prototype, "btnSpin", void 0);
    PopupBuyTurnSuccess = __decorate([
        ccclass
    ], PopupBuyTurnSuccess);
    return PopupBuyTurnSuccess;
}(Popup_1.default));
exports.default = PopupBuyTurnSuccess;

cc._RF.pop();