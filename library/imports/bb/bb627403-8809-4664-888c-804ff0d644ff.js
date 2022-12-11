"use strict";
cc._RF.push(module, 'bb627QDiAlGZIiMgE/w1kT/', 'CompInventoryItem');
// scripts/components/CompInventoryItem.ts

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
var moment = require("moment");
var FrameMgr_1 = require("../common/FrameMgr");
var SoundMgr_1 = require("../common/SoundMgr");
var PopupReward_1 = require("../Popups/PopupReward");
var store_1 = require("../src/app/store");
var utils_1 = require("../src/common/utils");
var SliceApp_1 = require("../src/features/SliceApp");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode;
var CompInventoryItem = /** @class */ (function (_super) {
    __extends(CompInventoryItem, _super);
    function CompInventoryItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.image = null;
        _this.indexTxt = null;
        _this.nameTxt = null;
        _this.descriptionTxt = null;
        _this.dateTxt = null;
        return _this;
    }
    CompInventoryItem.prototype.init = function (type, index, value, timestampz) {
        var sign = value > 0 ? '+' : '';
        var name = type === 'VOUCHER' ? 'Voucher' : value ? sign + utils_1.convertToCurrency(value) + PopupReward_1.typeToUnit[type] : '';
        this.indexTxt.string = index.toString();
        this.nameTxt.string = name;
        this.descriptionTxt.string = "n\u1EA1p \u0111i\u1EC7n tho\u1EA1i\n" + utils_1.convertToCurrency(value) + "\u0111";
        this.descriptionTxt.node.active = type === 'VOUCHER';
        this.dateTxt.string = moment(timestampz).format('HH:mm:ss-DD/MM/YYYY').replace('-', '\n');
        this.image.spriteFrame = FrameMgr_1.default.Instance["REWARD_" + type];
        if (type === 'VOUCHER') {
            this.node.on(cc.Node.EventType.TOUCH_END, function () {
                SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
                store_1.default.dispatch(SliceApp_1.pushPopup(SliceApp_1.EAppPopups.PopupGoToVoucher));
            });
        }
    };
    __decorate([
        property(cc.Sprite)
    ], CompInventoryItem.prototype, "image", void 0);
    __decorate([
        property(cc.Label)
    ], CompInventoryItem.prototype, "indexTxt", void 0);
    __decorate([
        property(cc.Label)
    ], CompInventoryItem.prototype, "nameTxt", void 0);
    __decorate([
        property(cc.Label)
    ], CompInventoryItem.prototype, "descriptionTxt", void 0);
    __decorate([
        property(cc.Label)
    ], CompInventoryItem.prototype, "dateTxt", void 0);
    CompInventoryItem = __decorate([
        ccclass
    ], CompInventoryItem);
    return CompInventoryItem;
}(cc.Component));
exports.default = CompInventoryItem;

cc._RF.pop();