
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Popups/PopupReward.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BvcHVwcy9Qb3B1cFJld2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYseUJBQTBCO0FBQzFCLCtDQUEwQztBQUMxQywrQ0FBMEM7QUFFMUMsOENBQTZDO0FBQzdDLDhDQUF5QztBQUN6QywwQ0FBaUU7QUFDakUsNkNBQXdEO0FBQ3hELHFEQUFtSTtBQUNuSSxpRUFBcUY7QUFDckYsaUNBQTRCO0FBRXRCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRS9CLFFBQUEsVUFBVSxHQUFHO0lBQ3RCLElBQUksRUFBRSxLQUFLO0lBQ1gsT0FBTyxFQUFFLEdBQUc7SUFDWixNQUFNLEVBQUUsR0FBRztJQUNYLElBQUksRUFBRSxLQUFLO0NBQ2QsQ0FBQTtBQUNEO0lBQWlDLCtCQUFLO0lBQXRDO1FBQUEscUVBNkVDO1FBeEVVLGtCQUFZLEdBQWMsSUFBSSxDQUFDO1FBRS9CLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsZUFBUyxHQUFhLElBQUksQ0FBQztRQUUzQixnQkFBVSxHQUFhLElBQUksQ0FBQztRQUc1QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUU5QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIseUJBQW1CLEdBQVksSUFBSSxDQUFDOztJQXFEL0MsQ0FBQztJQW5ERywyQkFBSyxHQUFMLGNBQVUsQ0FBQztJQUVYLDRCQUFNLEdBQU47UUFBQSxpQkF3QkM7UUF2QkcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFO1lBQzdDLGtCQUFRLENBQUMsT0FBTyxDQUFDLGtCQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQy9DLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDeEIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsb0JBQVMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLDJCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7WUFDbkYsbUJBQVEsQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUU7WUFDOUMsa0JBQVEsQ0FBQyxPQUFPLENBQUMsa0JBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDL0MsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN4QixLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxvQkFBUyxDQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUUsMkJBQWdCLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUM1RixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRTtZQUMvQyxrQkFBUSxDQUFDLE9BQU8sQ0FBQyxrQkFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMvQyxlQUFLLENBQUMsUUFBUSxDQUFDLG1CQUFRLEVBQUUsQ0FBQyxDQUFBO1lBQzFCLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLG9CQUFTLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSwyQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ25GLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLGVBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLG9DQUFtQixDQUFDLCtCQUFjLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1FBQ25ILENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFO1lBQzFDLGtCQUFRLENBQUMsT0FBTyxDQUFDLGtCQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQy9DLGVBQUssQ0FBQyxRQUFRLENBQUMsbUJBQVEsRUFBRSxDQUFDLENBQUE7UUFDOUIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsNkJBQU8sR0FBUDtJQUNBLENBQUM7SUFDRCw4QkFBUSxHQUFSO1FBQ0ksaUJBQU0sUUFBUSxXQUFFLENBQUM7UUFDWCxJQUFBLEtBQW1CLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBL0UsSUFBSSxVQUFBLEVBQUUsTUFBTSxZQUFtRSxDQUFBO1FBQ3ZGLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxHQUFHLGtCQUFRLENBQUMsUUFBUSxDQUFDLFlBQVUsSUFBSSxDQUFDLFdBQVcsRUFBSSxDQUFDLENBQUM7UUFDbEYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcseUJBQWlCLENBQUMsTUFBTSxDQUFDLEdBQUcsa0JBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNwRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxLQUFLLFNBQVMsQ0FBQTtRQUVoRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxFQUFFO1lBQzlCLEVBQUUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUE7UUFDeEQsQ0FBQyxDQUFDLENBQUE7UUFFRixJQUFNLFlBQVksR0FBRyxlQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUN4RCxJQUFJLFlBQVksRUFBRTtZQUNkLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtTQUN6RjthQUFNO1lBQ0gsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDdkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtTQUN0RjtJQUNMLENBQUM7SUFDRCwrQkFBUyxHQUFULGNBQWMsQ0FBQztJQXZFZjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3FEQUNrQjtJQUV0QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNjO0lBRWhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7a0RBQ2U7SUFFbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzttREFDZ0I7SUFHbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvREFDaUI7SUFFbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztxREFDa0I7SUFFcEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztzREFDbUI7SUFFckM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDYztJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNlO0lBRWpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NERBQ3lCO0lBcUQvQyxrQkFBQztDQTdFRCxBQTZFQyxDQTdFZ0MsZUFBSyxHQTZFckM7QUE3RVksa0NBQVc7QUE4RXhCLElBQU0sZUFBZSxHQUFHLFVBQUMsS0FBZ0IsSUFBSyxPQUFBLENBQUM7SUFDM0MsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO0lBQ3BCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtDQUN2QixDQUFDLEVBSDRDLENBRzVDLENBQUE7QUFDRixJQUFNLG1CQUFtQixHQUFHLFVBQUMsUUFBcUIsSUFBSyxPQUFBLENBQUM7SUFDcEQsUUFBUSxFQUFFLFVBQUMsT0FBb0M7UUFDM0MsT0FBQSxRQUFRLENBQUMsbUJBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUEzQixDQUEyQjtJQUMvQixRQUFRLEVBQUUsY0FBTSxPQUFBLFFBQVEsQ0FBQyxtQkFBUSxFQUFFLENBQUMsRUFBcEIsQ0FBb0I7SUFDcEMsU0FBUyxFQUFFLFVBQUMsT0FBbUIsSUFBSyxPQUFBLFFBQVEsQ0FBQyxvQkFBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQTVCLENBQTRCO0NBQ25FLENBQUMsRUFMcUQsQ0FLckQsQ0FBQTtBQUNGLGtCQUFlLGlCQUFPLENBQUMsZUFBZSxFQUFFLG1CQUFtQixDQUFDLENBQUMsV0FBVyxDQUFDLENBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCBGcmFtZU1nciBmcm9tIFwiLi4vY29tbW9uL0ZyYW1lTWdyXCI7XG5pbXBvcnQgU291bmRNZ3IgZnJvbSBcIi4uL2NvbW1vbi9Tb3VuZE1nclwiO1xuaW1wb3J0IHsgTWlzc2lvbnMgfSBmcm9tICcuLi9jb21wb25lbnRzL0NvbXBRdWVzdHNDb250YWluZXInO1xuaW1wb3J0IHsgUGFnZUhvbWUgfSBmcm9tICcuLi9QYWdlcy9QYWdlSG9tZSc7XG5pbXBvcnQgY29ubmVjdCBmcm9tIFwiLi4vc3JjL2FwcC9jb25uZWN0XCI7XG5pbXBvcnQgc3RvcmUsIHsgUm9vdFN0YXRlLCBBcHBEaXNwYXRjaCB9IGZyb20gXCIuLi9zcmMvYXBwL3N0b3JlXCI7XG5pbXBvcnQgeyBjb252ZXJ0VG9DdXJyZW5jeSB9IGZyb20gJy4uL3NyYy9jb21tb24vdXRpbHMnO1xuaW1wb3J0IHsgRUFwcFBhZ2VzLCBJUGFnZVdpdGhFZmZlY3QsIHB1c2hQYWdlLCBwb3BQb3B1cCwgRUFwcFBvcHVwcywgcHVzaFBvcHVwLCBQQUdFX1NIT1dfRUZGRUNUIH0gZnJvbSBcIi4uL3NyYy9mZWF0dXJlcy9TbGljZUFwcFwiO1xuaW1wb3J0IHsgRGVlcGxpbmtUeXBlc1RvTmFtZSwgRURlZXBsaW5rVHlwZXMgfSBmcm9tICcuLi9zcmMvZmVhdHVyZXMvU2xpY2VEZWVwbGlua3MnO1xuaW1wb3J0IFBvcHVwIGZyb20gJy4vUG9wdXAnO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5leHBvcnQgY29uc3QgdHlwZVRvVW5pdCA9IHtcbiAgICBDT0lOOiAnIHh1JyxcbiAgICBWT1VDSEVSOiAnxJEnLFxuICAgIEVNT05FWTogJ8SRJyxcbiAgICBUVVJOOiAnIHbDqScsXG59XG5leHBvcnQgY2xhc3MgUG9wdXBSZXdhcmQgZXh0ZW5kcyBQb3B1cCB7XG4gICAgYWN0aW9uczogYW55XG4gICAgcHJvcHM6IGFueVxuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBwdWJsaWMgcmV3YXJkU3ByaXRlOiBjYy5TcHJpdGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHB1YmxpYyBjb25mZXR0aTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHB1YmxpYyBhbW91bnRUeHQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgcHVibGljIHZvdWNoZXJUeHQ6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHB1YmxpYyBidG5TcGluTW9yZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHVibGljIGJ0bkludmVudG9yeTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHVibGljIGJ0blVwZGF0ZUluZm86IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHB1YmxpYyBidG5CYWNrMjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHVibGljIGNvbnRhaW5lcjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHVibGljIHVwZGF0ZUluZm9Db250YWluZXI6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgc3RhcnQoKSB7IH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5idG5TcGluTW9yZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsICgpID0+IHtcbiAgICAgICAgICAgIFNvdW5kTWdyLnBsYXlTZngoU291bmRNZ3IuSW5zdGFuY2UuU0ZYX0JVVFRPTik7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbnMucG9wUG9wdXAoKTtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9ucy5wdXNoUGFnZSh7IHBhZ2U6IEVBcHBQYWdlcy5QYWdlSG9tZSwgZWZmZWN0OiBQQUdFX1NIT1dfRUZGRUNULkxFRlQgfSk7XG4gICAgICAgICAgICBQYWdlSG9tZS5JbnN0YW5jZS5wcmVzc0J1dHRvblBsYXkoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYnRuSW52ZW50b3J5Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgKCkgPT4ge1xuICAgICAgICAgICAgU291bmRNZ3IucGxheVNmeChTb3VuZE1nci5JbnN0YW5jZS5TRlhfQlVUVE9OKTtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9ucy5wb3BQb3B1cCgpO1xuICAgICAgICAgICAgdGhpcy5hY3Rpb25zLnB1c2hQYWdlKHsgcGFnZTogRUFwcFBhZ2VzLlBhZ2VJbnZlbnRvcnksIGVmZmVjdDogUEFHRV9TSE9XX0VGRkVDVC5MRUZUIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmJ0blVwZGF0ZUluZm8ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoKSA9PiB7XG4gICAgICAgICAgICBTb3VuZE1nci5wbGF5U2Z4KFNvdW5kTWdyLkluc3RhbmNlLlNGWF9CVVRUT04pO1xuICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2gocG9wUG9wdXAoKSlcbiAgICAgICAgICAgIHRoaXMuYWN0aW9ucy5wdXNoUGFnZSh7IHBhZ2U6IEVBcHBQYWdlcy5QYWdlSG9tZSwgZWZmZWN0OiBQQUdFX1NIT1dfRUZGRUNULkxFRlQgfSk7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHN0b3JlLmdldFN0YXRlKCkuZGVlcGxpbmtzLmRhdGFbRGVlcGxpbmtUeXBlc1RvTmFtZVtFRGVlcGxpbmtUeXBlcy5YQUNfVEhVQ19USE9OR19USU5dXTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5idG5CYWNrMi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsICgpID0+IHtcbiAgICAgICAgICAgIFNvdW5kTWdyLnBsYXlTZngoU291bmRNZ3IuSW5zdGFuY2UuU0ZYX0JVVFRPTik7XG4gICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChwb3BQb3B1cCgpKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkVuZGVkKCkge1xuICAgIH1cbiAgICBvbkVuYWJsZSgpIHtcbiAgICAgICAgc3VwZXIub25FbmFibGUoKTtcbiAgICAgICAgY29uc3QgeyB0eXBlLCBhbW91bnQgfSA9IFIudmlldyhSLmxlbnNQYXRoKFsncmV3YXJkJywgJ3NwaW5SZXdhcmQnXSkpKHRoaXMucHJvcHMpIHx8IHt9XG4gICAgICAgIHRoaXMucmV3YXJkU3ByaXRlLnNwcml0ZUZyYW1lID0gRnJhbWVNZ3IuSW5zdGFuY2VbYFJFV0FSRF8ke3R5cGUudG9VcHBlckNhc2UoKX1gXTtcbiAgICAgICAgdGhpcy5hbW91bnRUeHQuc3RyaW5nID0gY29udmVydFRvQ3VycmVuY3koYW1vdW50KSArIHR5cGVUb1VuaXRbdHlwZV1cbiAgICAgICAgdGhpcy52b3VjaGVyVHh0Lm5vZGUuYWN0aXZlID0gdHlwZSA9PT0gJ1ZPVUNIRVInXG5cbiAgICAgICAgdGhpcy5jb25mZXR0aS5jaGlsZHJlbi5mb3JFYWNoKChmeCkgPT4ge1xuICAgICAgICAgICAgZnguZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5hbmltYXRpb24gPSAnYW5pbWF0aW9uJ1xuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHZlcmlmaWVkVXNlciA9IHN0b3JlLmdldFN0YXRlKCkudXNlci52ZXJpZmllZFVzZXI7XG4gICAgICAgIGlmICh2ZXJpZmllZFVzZXIpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlSW5mb0NvbnRhaW5lci5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnNldFBvc2l0aW9uKHRoaXMuY29udGFpbmVyLnBvc2l0aW9uLngsIC0yMDAsIHRoaXMuY29udGFpbmVyLnBvc2l0aW9uLnopXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUluZm9Db250YWluZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnNldFBvc2l0aW9uKHRoaXMuY29udGFpbmVyLnBvc2l0aW9uLngsIDAsIHRoaXMuY29udGFpbmVyLnBvc2l0aW9uLnopXG4gICAgICAgIH1cbiAgICB9XG4gICAgb25EaXNhYmxlKCkgeyB9XG59XG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gKHtcbiAgICByZXdhcmQ6IHN0YXRlLnJld2FyZCxcbiAgICBxdWVzdHM6IHN0YXRlLnF1ZXN0cyxcbn0pXG5jb25zdCBtYXBEaXNwYXRjaFRvQWN0aW9uID0gKGRpc3BhdGNoOiBBcHBEaXNwYXRjaCkgPT4gKHtcbiAgICBwdXNoUGFnZTogKHBheWxvYWQ6IEVBcHBQYWdlcyB8IElQYWdlV2l0aEVmZmVjdCkgPT5cbiAgICAgICAgZGlzcGF0Y2gocHVzaFBhZ2UocGF5bG9hZCkpLFxuICAgIHBvcFBvcHVwOiAoKSA9PiBkaXNwYXRjaChwb3BQb3B1cCgpKSxcbiAgICBwdXNoUG9wdXA6IChwYXlsb2FkOiBFQXBwUG9wdXBzKSA9PiBkaXNwYXRjaChwdXNoUG9wdXAocGF5bG9hZCkpLFxufSlcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvQWN0aW9uKShQb3B1cFJld2FyZCkiXX0=