
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Popups/PopupBuyTurnSuccess.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3670dtdBNtC55FdBen5Ev9m', 'PopupBuyTurnSuccess');
// scripts/Popups/PopupBuyTurnSuccess.ts

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
var RewardPopupsMgr_1 = require("../src/game/RewardPopupsMgr");
var Popup_1 = require("./Popup");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopupBuyTurnSuccess = /** @class */ (function (_super) {
    __extends(PopupBuyTurnSuccess, _super);
    function PopupBuyTurnSuccess() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.amountTxt = null;
        _this.btnClose = null;
        _this.btnSpin = null;
        return _this;
    }
    PopupBuyTurnSuccess.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.btnClose.on(cc.Node.EventType.TOUCH_END, function () {
            SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
            store_1.default.dispatch(SliceApp_1.popPopup());
            store_1.default.dispatch(SliceApp_1.pushPage({ page: SliceApp_1.EAppPages.PageHome, effect: SliceApp_1.PAGE_SHOW_EFFECT.LEFT }));
        });
        this.btnSpin.on(cc.Node.EventType.TOUCH_END, function () {
            SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
            store_1.default.dispatch(SliceApp_1.popPopup());
            store_1.default.dispatch(SliceApp_1.pushPage({ page: SliceApp_1.EAppPages.PageHome, effect: SliceApp_1.PAGE_SHOW_EFFECT.LEFT }));
        });
    };
    PopupBuyTurnSuccess.prototype.init = function (turn) {
        this.amountTxt.string = turn + " V\u00E9";
    };
    PopupBuyTurnSuccess.prototype.onDisable = function () {
        RewardPopupsMgr_1.RewardPopupsMgr.Instance.showPopup();
    };
    __decorate([
        property(cc.Label)
    ], PopupBuyTurnSuccess.prototype, "amountTxt", void 0);
    __decorate([
        property(cc.Node)
    ], PopupBuyTurnSuccess.prototype, "btnClose", void 0);
    __decorate([
        property(cc.Node)
    ], PopupBuyTurnSuccess.prototype, "btnSpin", void 0);
    PopupBuyTurnSuccess = __decorate([
        ccclass
    ], PopupBuyTurnSuccess);
    return PopupBuyTurnSuccess;
}(Popup_1.default));
exports.default = PopupBuyTurnSuccess;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BvcHVwcy9Qb3B1cEJ1eVR1cm5TdWNjZXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLCtDQUEwQztBQUMxQywwQ0FBcUM7QUFDckMscURBQXVHO0FBQ3ZHLCtEQUE4RDtBQUU5RCxpQ0FBNEI7QUFHdEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBaUQsdUNBQUs7SUFBdEQ7UUFBQSxxRUE4QkM7UUE1QkcsZUFBUyxHQUFhLElBQUksQ0FBQztRQUUzQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGFBQU8sR0FBWSxJQUFJLENBQUM7O0lBd0I1QixDQUFDO0lBdEJHLG9DQUFNLEdBQU47UUFDSSxpQkFBTSxNQUFNLFdBQUUsQ0FBQztRQUVmLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRTtZQUMxQyxrQkFBUSxDQUFDLE9BQU8sQ0FBQyxrQkFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMvQyxlQUFLLENBQUMsUUFBUSxDQUFDLG1CQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQzNCLGVBQUssQ0FBQyxRQUFRLENBQUMsbUJBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxvQkFBUyxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsMkJBQWdCLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFGLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFO1lBQ3pDLGtCQUFRLENBQUMsT0FBTyxDQUFDLGtCQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQy9DLGVBQUssQ0FBQyxRQUFRLENBQUMsbUJBQVEsRUFBRSxDQUFDLENBQUM7WUFDM0IsZUFBSyxDQUFDLFFBQVEsQ0FBQyxtQkFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLG9CQUFTLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSwyQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUYsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sa0NBQUksR0FBWCxVQUFZLElBQVk7UUFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQU0sSUFBSSxhQUFLLENBQUM7SUFDekMsQ0FBQztJQUVTLHVDQUFTLEdBQW5CO1FBQ0ksaUNBQWUsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDekMsQ0FBQztJQTNCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzBEQUNRO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eURBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt3REFDTTtJQU5QLG1CQUFtQjtRQUR2QyxPQUFPO09BQ2EsbUJBQW1CLENBOEJ2QztJQUFELDBCQUFDO0NBOUJELEFBOEJDLENBOUJnRCxlQUFLLEdBOEJyRDtrQkE5Qm9CLG1CQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgU291bmRNZ3IgZnJvbSBcIi4uL2NvbW1vbi9Tb3VuZE1nclwiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCIuLi9zcmMvYXBwL3N0b3JlXCI7XG5pbXBvcnQgeyBFQXBwUGFnZXMsIEVBcHBQb3B1cHMsIFBBR0VfU0hPV19FRkZFQ1QsIHBvcFBvcHVwLCBwdXNoUGFnZSB9IGZyb20gXCIuLi9zcmMvZmVhdHVyZXMvU2xpY2VBcHBcIjtcbmltcG9ydCB7IFJld2FyZFBvcHVwc01nciB9IGZyb20gXCIuLi9zcmMvZ2FtZS9SZXdhcmRQb3B1cHNNZ3JcIjtcbmltcG9ydCBIZWxwZXIgZnJvbSBcIi4uL3V0aWxzL0hlbHBlclwiO1xuaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwXCI7XG5cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwQnV5VHVyblN1Y2Nlc3MgZXh0ZW5kcyBQb3B1cCB7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGFtb3VudFR4dDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJ0bkNsb3NlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBidG5TcGluOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgc3VwZXIub25Mb2FkKCk7XG5cbiAgICAgICAgdGhpcy5idG5DbG9zZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsICgpID0+IHtcbiAgICAgICAgICAgIFNvdW5kTWdyLnBsYXlTZngoU291bmRNZ3IuSW5zdGFuY2UuU0ZYX0JVVFRPTik7XG4gICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChwb3BQb3B1cCgpKTtcbiAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHB1c2hQYWdlKHsgcGFnZTogRUFwcFBhZ2VzLlBhZ2VIb21lLCBlZmZlY3Q6IFBBR0VfU0hPV19FRkZFQ1QuTEVGVCB9KSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmJ0blNwaW4ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoKSA9PiB7XG4gICAgICAgICAgICBTb3VuZE1nci5wbGF5U2Z4KFNvdW5kTWdyLkluc3RhbmNlLlNGWF9CVVRUT04pO1xuICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2gocG9wUG9wdXAoKSk7XG4gICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChwdXNoUGFnZSh7IHBhZ2U6IEVBcHBQYWdlcy5QYWdlSG9tZSwgZWZmZWN0OiBQQUdFX1NIT1dfRUZGRUNULkxFRlQgfSkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5pdCh0dXJuOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5hbW91bnRUeHQuc3RyaW5nID0gYCR7dHVybn0gVsOpYDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25EaXNhYmxlKCk6IHZvaWQge1xuICAgICAgICBSZXdhcmRQb3B1cHNNZ3IuSW5zdGFuY2Uuc2hvd1BvcHVwKCk7XG4gICAgfVxufVxuIl19