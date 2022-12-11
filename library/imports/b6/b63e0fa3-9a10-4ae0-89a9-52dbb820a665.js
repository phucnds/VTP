"use strict";
cc._RF.push(module, 'b63e0+jmhBK4ImpUtu4IKZl', 'PopupBuyWeeklyTicketSuccess');
// scripts/Popups/PopupBuyWeeklyTicketSuccess.ts

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
var moment = require("moment");
var SoundMgr_1 = require("../common/SoundMgr");
var store_1 = require("../src/app/store");
var SliceApp_1 = require("../src/features/SliceApp");
var Popup_1 = require("./Popup");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopupBuyWeeklyTicketSuccess = /** @class */ (function (_super) {
    __extends(PopupBuyWeeklyTicketSuccess, _super);
    function PopupBuyWeeklyTicketSuccess() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.descriptionPlaceHolder = '<color=#7F2E2E>Hãy đón xem kết quả vào lúc <b>20:00\nChủ nhật</b> tuần này\n<b>%s</b> bạn nhé</color>';
        _this.btnClose = null;
        _this.descriptionTxt = null;
        return _this;
    }
    PopupBuyWeeklyTicketSuccess.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.btnClose.on(cc.Node.EventType.TOUCH_END, function () {
            SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
            store_1.default.dispatch(SliceApp_1.popPopup());
        });
    };
    PopupBuyWeeklyTicketSuccess.prototype.onEnable = function () {
        _super.prototype.onEnable.call(this);
        this.updateDescription();
    };
    PopupBuyWeeklyTicketSuccess.prototype.updateDescription = function () {
        var rollPhaseDueDate = moment().endOf('isoWeek').startOf('day').add(20, "hours");
        this.descriptionTxt.string = this.descriptionPlaceHolder.replace('%s', rollPhaseDueDate.format('DD/MM/YYYY'));
    };
    __decorate([
        property(String)
    ], PopupBuyWeeklyTicketSuccess.prototype, "descriptionPlaceHolder", void 0);
    __decorate([
        property(cc.Node)
    ], PopupBuyWeeklyTicketSuccess.prototype, "btnClose", void 0);
    __decorate([
        property(cc.RichText)
    ], PopupBuyWeeklyTicketSuccess.prototype, "descriptionTxt", void 0);
    PopupBuyWeeklyTicketSuccess = __decorate([
        ccclass
    ], PopupBuyWeeklyTicketSuccess);
    return PopupBuyWeeklyTicketSuccess;
}(Popup_1.default));
exports.default = PopupBuyWeeklyTicketSuccess;

cc._RF.pop();