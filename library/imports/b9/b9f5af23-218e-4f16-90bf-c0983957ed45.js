"use strict";
cc._RF.push(module, 'b9f5a8jIY5PFpC/wJg5V+1F', 'PopupKickOut');
// scripts/Popups/PopupKickOut.ts

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
var SliceDeeplinks_1 = require("../src/features/SliceDeeplinks");
var Popup_1 = require("./Popup");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopupKickOut = /** @class */ (function (_super) {
    __extends(PopupKickOut, _super);
    function PopupKickOut() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btnClose = null;
        _this.btnOk = null;
        return _this;
    }
    PopupKickOut.prototype.onLoad = function () {
        this.btnClose.on(cc.Node.EventType.TOUCH_END, function () {
            SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
            window.location.href = store_1.default.getState().deeplinks.data[SliceDeeplinks_1.DeeplinkTypesToName[SliceDeeplinks_1.EDeeplinkTypes.CLOSE_GAME]];
        });
        this.btnOk.on(cc.Node.EventType.TOUCH_END, function () {
            SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
            window.location.href = store_1.default.getState().deeplinks.data[SliceDeeplinks_1.DeeplinkTypesToName[SliceDeeplinks_1.EDeeplinkTypes.CLOSE_GAME]];
        });
    };
    __decorate([
        property(cc.Node)
    ], PopupKickOut.prototype, "btnClose", void 0);
    __decorate([
        property(cc.Node)
    ], PopupKickOut.prototype, "btnOk", void 0);
    PopupKickOut = __decorate([
        ccclass
    ], PopupKickOut);
    return PopupKickOut;
}(Popup_1.default));
exports.default = PopupKickOut;

cc._RF.pop();