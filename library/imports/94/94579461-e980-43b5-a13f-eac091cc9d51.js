"use strict";
cc._RF.push(module, '94579Rh6YBDtaE/6sCRzJ1R', 'PopupOutOfTicket');
// scripts/Popups/PopupOutOfTicket.ts

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
var CompQuestsContainer_1 = require("../components/CompQuestsContainer");
var store_1 = require("../src/app/store");
var SliceApp_1 = require("../src/features/SliceApp");
var Popup_1 = require("./Popup");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopupOutOfTicket = /** @class */ (function (_super) {
    __extends(PopupOutOfTicket, _super);
    function PopupOutOfTicket() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btnQuest = null;
        _this.btnBuy = null;
        return _this;
    }
    PopupOutOfTicket.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.btnQuest.on(cc.Node.EventType.TOUCH_END, function () {
            SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
            store_1.default.dispatch(SliceApp_1.popPopup());
            CompQuestsContainer_1.CompQuestsContainer.Instance.Open();
        });
        this.btnBuy.on(cc.Node.EventType.TOUCH_END, function () {
            SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
            store_1.default.dispatch(SliceApp_1.popPopup());
            store_1.default.dispatch(SliceApp_1.pushPage({ page: SliceApp_1.EAppPages.PageBuyTurn, effect: SliceApp_1.PAGE_SHOW_EFFECT.LEFT }));
        });
    };
    __decorate([
        property(cc.Node)
    ], PopupOutOfTicket.prototype, "btnQuest", void 0);
    __decorate([
        property(cc.Node)
    ], PopupOutOfTicket.prototype, "btnBuy", void 0);
    PopupOutOfTicket = __decorate([
        ccclass
    ], PopupOutOfTicket);
    return PopupOutOfTicket;
}(Popup_1.default));
exports.default = PopupOutOfTicket;

cc._RF.pop();