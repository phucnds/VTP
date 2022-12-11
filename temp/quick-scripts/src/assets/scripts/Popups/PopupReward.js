"use strict";
cc._RF.push(module, 'c39c6nKHApM9KpskQ7Votrc', 'PopupReward');
// scripts/Popups/PopupReward.ts

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
exports.PopupReward = exports.typeToUnit = void 0;
var R = require("ramda");
var FrameMgr_1 = require("../common/FrameMgr");
var SoundMgr_1 = require("../common/SoundMgr");
var PageHome_1 = require("../Pages/PageHome");
var connect_1 = require("../src/app/connect");
var store_1 = require("../src/app/store");
var utils_1 = require("../src/common/utils");
var SliceApp_1 = require("../src/features/SliceApp");
var SliceDeeplinks_1 = require("../src/features/SliceDeeplinks");
var Popup_1 = require("./Popup");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
exports.typeToUnit = {
    COIN: ' xu',
    VOUCHER: 'đ',
    EMONEY: 'đ',
    TURN: ' vé',
};
var PopupReward = /** @class */ (function (_super) {
    __extends(PopupReward, _super);
    function PopupReward() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rewardSprite = null;
        _this.confetti = null;
        _this.amountTxt = null;
        _this.voucherTxt = null;
        _this.btnSpinMore = null;
        _this.btnInventory = null;
        _this.btnUpdateInfo = null;
        _this.btnBack2 = null;
        _this.container = null;
        _this.updateInfoContainer = null;
        return _this;
    }
    PopupReward.prototype.start = function () { };
    PopupReward.prototype.onLoad = function () {
        var _this = this;
        this.btnSpinMore.on(cc.Node.EventType.TOUCH_END, function () {
            SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
            _this.actions.popPopup();
            _this.actions.pushPage({ page: SliceApp_1.EAppPages.PageHome, effect: SliceApp_1.PAGE_SHOW_EFFECT.LEFT });
            PageHome_1.PageHome.Instance.pressButtonPlay();
        });
        this.btnInventory.on(cc.Node.EventType.TOUCH_END, function () {
            SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
            _this.actions.popPopup();
            _this.actions.pushPage({ page: SliceApp_1.EAppPages.PageInventory, effect: SliceApp_1.PAGE_SHOW_EFFECT.LEFT });
        });
        this.btnUpdateInfo.on(cc.Node.EventType.TOUCH_END, function () {
            SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
            store_1.default.dispatch(SliceApp_1.popPopup());
            _this.actions.pushPage({ page: SliceApp_1.EAppPages.PageHome, effect: SliceApp_1.PAGE_SHOW_EFFECT.LEFT });
            window.location.href = store_1.default.getState().deeplinks.data[SliceDeeplinks_1.DeeplinkTypesToName[SliceDeeplinks_1.EDeeplinkTypes.XAC_THUC_THONG_TIN]];
        });
        this.btnBack2.on(cc.Node.EventType.TOUCH_END, function () {
            SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
            store_1.default.dispatch(SliceApp_1.popPopup());
        });
    };
    PopupReward.prototype.onEnded = function () {
    };
    PopupReward.prototype.onEnable = function () {
        _super.prototype.onEnable.call(this);
        var _a = R.view(R.lensPath(['reward', 'spinReward']))(this.props) || {}, type = _a.type, amount = _a.amount;
        this.rewardSprite.spriteFrame = FrameMgr_1.default.Instance["REWARD_" + type.toUpperCase()];
        this.amountTxt.string = utils_1.convertToCurrency(amount) + exports.typeToUnit[type];
        this.voucherTxt.node.active = type === 'VOUCHER';
        this.confetti.children.forEach(function (fx) {
            fx.getComponent(sp.Skeleton).animation = 'animation';
        });
        var verifiedUser = store_1.default.getState().user.verifiedUser;
        if (verifiedUser) {
            this.updateInfoContainer.active = false;
            this.container.setPosition(this.container.position.x, -200, this.container.position.z);
        }
        else {
            this.updateInfoContainer.active = true;
            this.container.setPosition(this.container.position.x, 0, this.container.position.z);
        }
    };
    PopupReward.prototype.onDisable = function () { };
    __decorate([
        property(cc.Sprite)
    ], PopupReward.prototype, "rewardSprite", void 0);
    __decorate([
        property(cc.Node)
    ], PopupReward.prototype, "confetti", void 0);
    __decorate([
        property(cc.Label)
    ], PopupReward.prototype, "amountTxt", void 0);
    __decorate([
        property(cc.Label)
    ], PopupReward.prototype, "voucherTxt", void 0);
    __decorate([
        property(cc.Node)
    ], PopupReward.prototype, "btnSpinMore", void 0);
    __decorate([
        property(cc.Node)
    ], PopupReward.prototype, "btnInventory", void 0);
    __decorate([
        property(cc.Node)
    ], PopupReward.prototype, "btnUpdateInfo", void 0);
    __decorate([
        property(cc.Node)
    ], PopupReward.prototype, "btnBack2", void 0);
    __decorate([
        property(cc.Node)
    ], PopupReward.prototype, "container", void 0);
    __decorate([
        property(cc.Node)
    ], PopupReward.prototype, "updateInfoContainer", void 0);
    return PopupReward;
}(Popup_1.default));
exports.PopupReward = PopupReward;
var mapStateToProps = function (state) { return ({
    reward: state.reward,
    quests: state.quests,
}); };
var mapDispatchToAction = function (dispatch) { return ({
    pushPage: function (payload) {
        return dispatch(SliceApp_1.pushPage(payload));
    },
    popPopup: function () { return dispatch(SliceApp_1.popPopup()); },
    pushPopup: function (payload) { return dispatch(SliceApp_1.pushPopup(payload)); },
}); };
exports.default = connect_1.default(mapStateToProps, mapDispatchToAction)(PopupReward);

cc._RF.pop();