"use strict";
cc._RF.push(module, '2af42k1WypJMIZ/nsc3uFll', 'FrameMgr');
// scripts/common/FrameMgr.ts

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
var SingletonNode_1 = require("../utils/SingletonNode");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FrameMgr = /** @class */ (function (_super) {
    __extends(FrameMgr, _super);
    function FrameMgr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Login
        _this.LOGIN_LEVEL_1 = null;
        _this.LOGIN_LEVEL_2 = null;
        _this.LOGIN_LEVEL_3 = null;
        _this.LOGIN_LEVEL_4 = null;
        _this.LOGIN_LEVEL_5 = null;
        // Reward
        _this.REWARD_COIN = null;
        _this.REWARD_EMONEY = null;
        _this.REWARD_VOUCHER = null;
        _this.REWARD_TURN = null;
        // Buttons
        _this.BUTTON_GOLD_SELECTED = null;
        _this.BUTTON_GOLD = null;
        // Popup titles
        _this.POPUP_TITLE_SUCCESS = null;
        _this.POPUP_TITLE_FAILED = null;
        _this.POPUP_TITLE_NOTI = null;
        _this.POPUP_TITLE_WEEKLY_TICKET = null;
        // UI
        _this.ICON_SOUND = null;
        _this.ICON_SOUND_OFF = null;
        // Gifts
        _this.GIFT_FRAMES = [];
        return _this;
    }
    __decorate([
        property(cc.SpriteFrame)
    ], FrameMgr.prototype, "LOGIN_LEVEL_1", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], FrameMgr.prototype, "LOGIN_LEVEL_2", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], FrameMgr.prototype, "LOGIN_LEVEL_3", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], FrameMgr.prototype, "LOGIN_LEVEL_4", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], FrameMgr.prototype, "LOGIN_LEVEL_5", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], FrameMgr.prototype, "REWARD_COIN", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], FrameMgr.prototype, "REWARD_EMONEY", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], FrameMgr.prototype, "REWARD_VOUCHER", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], FrameMgr.prototype, "REWARD_TURN", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], FrameMgr.prototype, "BUTTON_GOLD_SELECTED", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], FrameMgr.prototype, "BUTTON_GOLD", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], FrameMgr.prototype, "POPUP_TITLE_SUCCESS", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], FrameMgr.prototype, "POPUP_TITLE_FAILED", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], FrameMgr.prototype, "POPUP_TITLE_NOTI", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], FrameMgr.prototype, "POPUP_TITLE_WEEKLY_TICKET", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], FrameMgr.prototype, "ICON_SOUND", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], FrameMgr.prototype, "ICON_SOUND_OFF", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], FrameMgr.prototype, "GIFT_FRAMES", void 0);
    FrameMgr = __decorate([
        ccclass
    ], FrameMgr);
    return FrameMgr;
}(SingletonNode_1.default()));
exports.default = FrameMgr;

cc._RF.pop();