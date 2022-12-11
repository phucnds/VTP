
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Popups/PopupNewUserReward.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BvcHVwcy9Qb3B1cE5ld1VzZXJSZXdhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsK0NBQTBDO0FBRzFDLDBDQUFxQztBQUdyQyxxREFBMkU7QUFDM0UsaUVBQXFGO0FBRXJGLDBDQUFxQztBQUNyQyxpQ0FBNEI7QUFHdEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBZ0Qsc0NBQUs7SUFBckQ7UUFBQSxxRUFxRkM7UUFuRlUsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFFOUIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUd4Qix3QkFBa0IsR0FBWSxJQUFJLENBQUM7UUFFbkMsbUNBQTZCLEdBQWEsSUFBSSxDQUFDO1FBRS9DLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBRTlCLDhCQUF3QixHQUFhLElBQUksQ0FBQztRQUV6QyxVQUFJLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLFVBQUksR0FBVyxDQUFDLENBQUM7O1FBeUN6QixlQUFlO1FBQ2Ysa0RBQWtEO1FBQ2xELHVLQUF1SztRQUN2Syx1Q0FBdUM7UUFDdkMsNkJBQTZCO1FBQzdCLHVNQUF1TTtRQUN2TSw2REFBNkQ7UUFDN0Qsb0JBQW9CO1FBRXBCLDZDQUE2QztRQUM3Qyw2QkFBNkI7UUFDN0IsbUpBQW1KO1FBQ25KLDZEQUE2RDtRQUM3RCxvQkFBb0I7UUFDcEIsSUFBSTtRQUVKLGdDQUFnQztRQUNoQyxnRUFBZ0U7UUFDaEUsdUNBQXVDO1FBQ3ZDLDhDQUE4QztRQUM5QyxpQ0FBaUM7UUFDakMsb0VBQW9FO1FBRXBFLG9EQUFvRDtRQUNwRCx3RkFBd0Y7UUFDeEYsd0ZBQXdG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SyxDQUFDO3dFQUM4QjtJQWJoQyxrQkFBa0I7UUFEdEMsT0FBTztPQUNhLGtCQUFrQixDQXFGdEM7SUFBRCx5QkFBQztDQXJGRCxBQXFGQyxDQXJGK0MsZUFBSyxHQXFGcEQ7a0JBckZvQixrQkFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IFNvdW5kTWdyIGZyb20gXCIuLi9jb21tb24vU291bmRNZ3JcIjtcbmltcG9ydCB7IHVzZXJQcm9maWxlIH0gZnJvbSBcIi4uL2NvbW1vbi9Vc2VyUHJvZmlsZVwiO1xuaW1wb3J0IEFQSURlZmluZSBmcm9tIFwiLi4vc3JjL2FwcC9BUElEZWZpbmVcIjtcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi4vc3JjL2FwcC9zdG9yZVwiO1xuaW1wb3J0IHdzZ3cgZnJvbSBcIi4uL3NyYy9hcHAvd3Nnd1wiO1xuaW1wb3J0IHsgdHJhY2tVc2VySW50ZXJhY3QgfSBmcm9tIFwiLi4vc3JjL2NvbW1vbi91dGlsc1wiO1xuaW1wb3J0IHsgRUFwcFBvcHVwcywgcG9wUG9wdXAsIHB1c2hQb3B1cCB9IGZyb20gXCIuLi9zcmMvZmVhdHVyZXMvU2xpY2VBcHBcIjtcbmltcG9ydCB7IERlZXBsaW5rVHlwZXNUb05hbWUsIEVEZWVwbGlua1R5cGVzIH0gZnJvbSBcIi4uL3NyYy9mZWF0dXJlcy9TbGljZURlZXBsaW5rc1wiO1xuaW1wb3J0IHsgc3luY0xvZ2luU3RyZWFrIH0gZnJvbSBcIi4uL3NyYy9mZWF0dXJlcy9TbGljZUxvZ2luXCI7XG5pbXBvcnQgSGVscGVyIGZyb20gXCIuLi91dGlscy9IZWxwZXJcIjtcbmltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cFwiO1xuaW1wb3J0IFBvcHVwRGFpbHlMb2dpbiBmcm9tIFwiLi9Qb3B1cERhaWx5TG9naW5cIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwTmV3VXNlclJld2FyZCBleHRlbmRzIFBvcHVwIHtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwdWJsaWMgYnRuVXBkYXRlSW5mbzogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHVibGljIGJ0blNwaW46IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHVibGljIFNoZWxsVXNlckNvbnRhaW5lcjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHB1YmxpYyBTaGVsbFVzZXJDb250YWluZXJEZXNjcmlwdGlvbjogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHB1YmxpYyBVc2VyQ29udGFpbmVyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgcHVibGljIFVzZXJDb250YWluZXJEZXNjcmlwdGlvbjogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBjb2luOiBOdW1iZXIgPSAwO1xuICAgIHByaXZhdGUgdHVybjogTnVtYmVyID0gMDtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgc3VwZXIub25Mb2FkKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuYnRuVXBkYXRlSW5mbykge1xuICAgICAgICAgICAgSGVscGVyLnJlZ2lzdGVyQnV0dG9uRXZlbnQodGhpcy5idG5VcGRhdGVJbmZvLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgU291bmRNZ3IucGxheVNmeChTb3VuZE1nci5JbnN0YW5jZS5TRlhfQlVUVE9OKTtcbiAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChwb3BQb3B1cCgpKVxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gc3RvcmUuZ2V0U3RhdGUoKS5kZWVwbGlua3MuZGF0YVtEZWVwbGlua1R5cGVzVG9OYW1lW0VEZWVwbGlua1R5cGVzLlhBQ19USFVDX1RIT05HX1RJTl1dO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYnRuU3Bpbikge1xuICAgICAgICAgICAgSGVscGVyLnJlZ2lzdGVyQnV0dG9uRXZlbnQodGhpcy5idG5TcGluLCAoKSA9PiBzdG9yZS5kaXNwYXRjaChwb3BQb3B1cCgpKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25FbmFibGUoKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLm9uRW5hYmxlKCk7XG4gICAgICAgIGNvbnN0IHZlcmlmaWVkVXNlciA9IHN0b3JlLmdldFN0YXRlKCkudXNlci52ZXJpZmllZFVzZXI7XG4gICAgICAgIGlmICh2ZXJpZmllZFVzZXIpIHtcbiAgICAgICAgICAgIHRoaXMuU2hlbGxVc2VyQ29udGFpbmVyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5Vc2VyQ29udGFpbmVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmJ0blVwZGF0ZUluZm8uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGluaXQoY29pbjogTnVtYmVyLCB0dXJuOiBOdW1iZXIpIHtcbiAgICAgICAgdGhpcy5jb2luID0gTnVtYmVyKHRoaXMuY29pbikgKyBOdW1iZXIoY29pbik7XG4gICAgICAgIHRoaXMudHVybiA9IE51bWJlcih0aGlzLnR1cm4pICsgTnVtYmVyKHR1cm4pO1xuICAgICAgICB0aGlzLnVwZGF0ZURlc2NyaXB0aW9uKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZURlc2NyaXB0aW9uKCkge1xuICAgICAgICBjb25zdCBoYXNCb3RoID0gdGhpcy5jb2luID4gMCAmJiB0aGlzLnR1cm47XG4gICAgICAgIGNvbnN0IHRleHQgPSBgJHt0aGlzLmNvaW4gPyB0aGlzLmNvaW4gKyAnIFh1JyA6ICcnfSAke2hhc0JvdGggJiYgJ3bDoCd9ICR7dGhpcy50dXJuID8gdGhpcy50dXJuICsgJyB2w6knIDogJyd9YDtcbiAgICAgICAgdGhpcy5TaGVsbFVzZXJDb250YWluZXJEZXNjcmlwdGlvbi5zdHJpbmcgPSB0ZXh0O1xuICAgICAgICB0aGlzLlVzZXJDb250YWluZXJEZXNjcmlwdGlvbi5zdHJpbmcgPSB0ZXh0O1xuICAgIH1cblxuICAgIC8vIG5leHRBbmltKCkge1xuICAgIC8vICAgICB0aGlzLkdyZWV0aW5nUmV3YXJkQ29udGFpbmVyLmFjdGl2ZSA9IHRydWU7XG4gICAgLy8gICAgIHRoaXMuR3JlZXRpbmdSZXdhcmRDb250YWluZXIuc2V0UG9zaXRpb24oY2MudjMoY2MuZmluZCgnQ2FudmFzJykud2lkdGggKyAzMDAsIHRoaXMuR3JlZXRpbmdSZXdhcmRDb250YWluZXIucG9zaXRpb24ueSwgdGhpcy5HcmVldGluZ1Jld2FyZENvbnRhaW5lci5wb3NpdGlvbi56KSlcbiAgICAvLyAgICAgY2MudHdlZW4odGhpcy5HcmVldGluZ0NvbnRhaW5lcilcbiAgICAvLyAgICAgICAgIC5zZXQoeyBzY2FsZTogMSB9KVxuICAgIC8vICAgICAgICAgLnRvKDAuNSwgeyBwb3NpdGlvbjogY2MudjModGhpcy5HcmVldGluZ0NvbnRhaW5lci5wb3NpdGlvbi54IC0gY2MuZmluZCgnQ2FudmFzJykud2lkdGggLSAzMDAsIHRoaXMuR3JlZXRpbmdDb250YWluZXIucG9zaXRpb24ueSwgdGhpcy5HcmVldGluZ0NvbnRhaW5lci5wb3NpdGlvbi56KSB9LCB7IGVhc2luZzogXCJzbW9vdGhcIiB9KVxuICAgIC8vICAgICAgICAgLmNhbGwoKCkgPT4gdGhpcy5HcmVldGluZ0NvbnRhaW5lci5hY3RpdmUgPSBmYWxzZSlcbiAgICAvLyAgICAgICAgIC5zdGFydCgpO1xuXG4gICAgLy8gICAgIGNjLnR3ZWVuKHRoaXMuR3JlZXRpbmdSZXdhcmRDb250YWluZXIpXG4gICAgLy8gICAgICAgICAuc2V0KHsgc2NhbGU6IDEgfSlcbiAgICAvLyAgICAgICAgIC50bygwLjUsIHsgcG9zaXRpb246IGNjLnYzKDAsIHRoaXMuR3JlZXRpbmdSZXdhcmRDb250YWluZXIucG9zaXRpb24ueSwgdGhpcy5HcmVldGluZ1Jld2FyZENvbnRhaW5lci5wb3NpdGlvbi56KSB9LCB7IGVhc2luZzogXCJzbW9vdGhcIiB9KVxuICAgIC8vICAgICAgICAgLmNhbGwoKCkgPT4gdGhpcy5HcmVldGluZ0NvbnRhaW5lci5hY3RpdmUgPSBmYWxzZSlcbiAgICAvLyAgICAgICAgIC5zdGFydCgpO1xuICAgIC8vIH1cblxuICAgIC8vIHByb3RlY3RlZCBvbkRpc2FibGUoKTogdm9pZCB7XG4gICAgLy8gICAgIHdzZ3cudXNlclJlcXVlc3QoQVBJRGVmaW5lLmNsYWltTG9naW5SZXdhcmQsIHt9LCAoZSkgPT4ge1xuICAgIC8vICAgICAgICAgdXNlclByb2ZpbGUuVXBkYXRlQmFsYW5jZSgpO1xuICAgIC8vICAgICAgICAgc3RvcmUuZGlzcGF0Y2goc3luY0xvZ2luU3RyZWFrKGUpKTtcbiAgICAvLyAgICAgICAgIGlmIChlLm1lc3NhZ2UpIHJldHVybjtcbiAgICAvLyAgICAgICAgIC8vIHN0b3JlLmRpc3BhdGNoKHB1c2hQb3B1cChFQXBwUG9wdXBzLlBvcHVwRGFpbHlMb2dpbikpO1xuXG4gICAgLy8gICAgICAgICAvLyBjb25zdCB7IGNvaW4sIHR1cm4sIGxvZ2luU3RyZWFrIH0gPSBlO1xuICAgIC8vICAgICAgICAgLy8gY29uc3QgcG9wdXAgPSBjYy5maW5kKCdDYW52YXMvUG9wdXBNYW5hZ2VyL1Nob3duIFBvcHVwcy9Qb3B1cERhaWx5TG9naW4nKTtcbiAgICAvLyAgICAgICAgIC8vIHBvcHVwICYmIHBvcHVwLmdldENvbXBvbmVudChQb3B1cERhaWx5TG9naW4pLmluaXQoY29pbiwgdHVybiwgbG9naW5TdHJlYWspXG4gICAgLy8gICAgIH0sIGNvbnNvbGUuZXJyb3IpO1xuICAgIC8vIH1cbn1cbiJdfQ==