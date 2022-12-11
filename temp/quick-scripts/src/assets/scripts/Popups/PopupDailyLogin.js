"use strict";
cc._RF.push(module, '7e68dTQ45pEqIz2zc+8VAx2', 'PopupDailyLogin');
// scripts/Popups/PopupDailyLogin.ts

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
var store_1 = require("../src/app/store");
var common_1 = require("../src/common/common");
var SliceApp_1 = require("../src/features/SliceApp");
var Helper_1 = require("../utils/Helper");
var Popup_1 = require("./Popup");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopupDailyLogin = /** @class */ (function (_super) {
    __extends(PopupDailyLogin, _super);
    function PopupDailyLogin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btnBack2 = null;
        _this.btnSpin = null;
        _this.coinAndTicketTxtPlaceholder = '';
        _this.descriptionTxtPlaceholder = '';
        _this.coinAndTicketTxt = null;
        _this.descriptionTxt = null;
        return _this;
    }
    PopupDailyLogin.prototype.onLoad = function () {
        if (this.btnBack2) {
            Helper_1.default.registerButtonEvent(this.btnBack2, function () { return store_1.default.dispatch(SliceApp_1.popPopup()); });
        }
        if (this.btnSpin) {
            Helper_1.default.registerButtonEvent(this.btnSpin, function () { return store_1.default.dispatch(SliceApp_1.popPopup()); });
        }
    };
    PopupDailyLogin.prototype.init = function (coin, ticket, loginStreak) {
        this.coinAndTicketTxt.string = this.coinAndTicketTxtPlaceholder.replace('%s1', coin.toString()).replace('%s2', ticket.toString());
        this.descriptionTxt.string = this.descriptionTxtPlaceholder.replace('%s1', loginStreak.toString()).split('\\n').join('\n').replace('%dump', loginStreak > 1 ? ' liên tiếp' : '');
    };
    PopupDailyLogin.prototype.onDisable = function () {
        common_1.checkRewardPopup();
    };
    __decorate([
        property(cc.Node)
    ], PopupDailyLogin.prototype, "btnBack2", void 0);
    __decorate([
        property(cc.Node)
    ], PopupDailyLogin.prototype, "btnSpin", void 0);
    __decorate([
        property(String)
    ], PopupDailyLogin.prototype, "coinAndTicketTxtPlaceholder", void 0);
    __decorate([
        property(String)
    ], PopupDailyLogin.prototype, "descriptionTxtPlaceholder", void 0);
    __decorate([
        property(cc.RichText)
    ], PopupDailyLogin.prototype, "coinAndTicketTxt", void 0);
    __decorate([
        property(cc.RichText)
    ], PopupDailyLogin.prototype, "descriptionTxt", void 0);
    PopupDailyLogin = __decorate([
        ccclass
    ], PopupDailyLogin);
    return PopupDailyLogin;
}(Popup_1.default));
exports.default = PopupDailyLogin;

cc._RF.pop();