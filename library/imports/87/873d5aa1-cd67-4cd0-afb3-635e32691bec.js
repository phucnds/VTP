"use strict";
cc._RF.push(module, '873d5qhzWdM0K+zY14yaRvs', 'PopupNewUserReward');
// scripts/Popups/PopupNewUserReward.ts

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
var SliceDeeplinks_1 = require("../src/features/SliceDeeplinks");
var Helper_1 = require("../utils/Helper");
var Popup_1 = require("./Popup");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopupNewUserReward = /** @class */ (function (_super) {
    __extends(PopupNewUserReward, _super);
    function PopupNewUserReward() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btnUpdateInfo = null;
        _this.btnSpin = null;
        _this.ShellUserContainer = null;
        _this.ShellUserContainerDescription = null;
        _this.UserContainer = null;
        _this.UserContainerDescription = null;
        _this.coin = 0;
        _this.turn = 0;
        return _this;
        // nextAnim() {
        //     this.GreetingRewardContainer.active = true;
        //     this.GreetingRewardContainer.setPosition(cc.v3(cc.find('Canvas').width + 300, this.GreetingRewardContainer.position.y, this.GreetingRewardContainer.position.z))
        //     cc.tween(this.GreetingContainer)
        //         .set({ scale: 1 })
        //         .to(0.5, { position: cc.v3(this.GreetingContainer.position.x - cc.find('Canvas').width - 300, this.GreetingContainer.position.y, this.GreetingContainer.position.z) }, { easing: "smooth" })
        //         .call(() => this.GreetingContainer.active = false)
        //         .start();
        //     cc.tween(this.GreetingRewardContainer)
        //         .set({ scale: 1 })
        //         .to(0.5, { position: cc.v3(0, this.GreetingRewardContainer.position.y, this.GreetingRewardContainer.position.z) }, { easing: "smooth" })
        //         .call(() => this.GreetingContainer.active = false)
        //         .start();
        // }
        // protected onDisable(): void {
        //     wsgw.userRequest(APIDefine.claimLoginReward, {}, (e) => {
        //         userProfile.UpdateBalance();
        //         store.dispatch(syncLoginStreak(e));
        //         if (e.message) return;
        //         // store.dispatch(pushPopup(EAppPopups.PopupDailyLogin));
        //         // const { coin, turn, loginStreak } = e;
        //         // const popup = cc.find('Canvas/PopupManager/Shown Popups/PopupDailyLogin');
        //         // popup && popup.getComponent(PopupDailyLogin).init(coin, turn, loginStreak)
        //     }, console.error);
        // }
    }
    PopupNewUserReward.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        if (this.btnUpdateInfo) {
            Helper_1.default.registerButtonEvent(this.btnUpdateInfo, function () {
                SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
                store_1.default.dispatch(SliceApp_1.popPopup());
                window.location.href = store_1.default.getState().deeplinks.data[SliceDeeplinks_1.DeeplinkTypesToName[SliceDeeplinks_1.EDeeplinkTypes.XAC_THUC_THONG_TIN]];
            });
        }
        if (this.btnSpin) {
            Helper_1.default.registerButtonEvent(this.btnSpin, function () { return store_1.default.dispatch(SliceApp_1.popPopup()); });
        }
    };
    PopupNewUserReward.prototype.onEnable = function () {
        _super.prototype.onEnable.call(this);
        var verifiedUser = store_1.default.getState().user.verifiedUser;
        if (verifiedUser) {
            this.ShellUserContainer.active = false;
            this.UserContainer.active = true;
            this.btnUpdateInfo.active = false;
        }
    };
    PopupNewUserReward.prototype.init = function (coin, turn) {
        this.coin = Number(this.coin) + Number(coin);
        this.turn = Number(this.turn) + Number(turn);
        this.updateDescription();
    };
    PopupNewUserReward.prototype.updateDescription = function () {
        var hasBoth = this.coin > 0 && this.turn;
        var text = (this.coin ? this.coin + ' Xu' : '') + " " + (hasBoth && 'và') + " " + (this.turn ? this.turn + ' vé' : '');
        this.ShellUserContainerDescription.string = text;
        this.UserContainerDescription.string = text;
    };
    __decorate([
        property(cc.Node)
    ], PopupNewUserReward.prototype, "btnUpdateInfo", void 0);
    __decorate([
        property(cc.Node)
    ], PopupNewUserReward.prototype, "btnSpin", void 0);
    __decorate([
        property(cc.Node)
    ], PopupNewUserReward.prototype, "ShellUserContainer", void 0);
    __decorate([
        property(cc.Label)
    ], PopupNewUserReward.prototype, "ShellUserContainerDescription", void 0);
    __decorate([
        property(cc.Node)
    ], PopupNewUserReward.prototype, "UserContainer", void 0);
    __decorate([
        property(cc.Label)
    ], PopupNewUserReward.prototype, "UserContainerDescription", void 0);
    PopupNewUserReward = __decorate([
        ccclass
    ], PopupNewUserReward);
    return PopupNewUserReward;
}(Popup_1.default));
exports.default = PopupNewUserReward;

cc._RF.pop();