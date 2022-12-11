"use strict";
cc._RF.push(module, '08afatYL6tE45e2jLXjB7HM', 'PopupDailySpinCapping');
// scripts/Popups/PopupDailySpinCapping.ts

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
var Popup_1 = require("./Popup");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopupDailySpinCapping = /** @class */ (function (_super) {
    __extends(PopupDailySpinCapping, _super);
    function PopupDailySpinCapping() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btnClose2 = null;
        return _this;
    }
    PopupDailySpinCapping.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.btnClose2.on(cc.Node.EventType.TOUCH_END, function () {
            SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
            store_1.default.dispatch(SliceApp_1.popPopup());
        });
    };
    __decorate([
        property(cc.Node)
    ], PopupDailySpinCapping.prototype, "btnClose2", void 0);
    PopupDailySpinCapping = __decorate([
        ccclass
    ], PopupDailySpinCapping);
    return PopupDailySpinCapping;
}(Popup_1.default));
exports.default = PopupDailySpinCapping;

cc._RF.pop();