
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Popups/PopupCompleteQuest.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '871edHZjdpFUZdyy3DvbNzg', 'PopupCompleteQuest');
// scripts/Popups/PopupCompleteQuest.ts

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
var PopupCompleteQuest = /** @class */ (function (_super) {
    __extends(PopupCompleteQuest, _super);
    function PopupCompleteQuest() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.amountTxt = null;
        _this.btnSpin = null;
        return _this;
    }
    PopupCompleteQuest.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.btnSpin.on(cc.Node.EventType.TOUCH_END, function () {
            SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
            store_1.default.dispatch(SliceApp_1.popPopup());
            store_1.default.dispatch(SliceApp_1.pushPage({ page: SliceApp_1.EAppPages.PageHome, effect: SliceApp_1.PAGE_SHOW_EFFECT.LEFT }));
        });
    };
    PopupCompleteQuest.prototype.init = function (turn, coin) {
        this.amountTxt.string = "<color=#7F2E2E>\u0110\u00E3 nh\u1EADn \u0111\u01B0\u1EE3c " + (coin ? coin + ' xu và ' : '') + (turn ? turn + ' vé\nquay thưởng' : '') + "</color>";
    };
    PopupCompleteQuest.prototype.onDisable = function () {
        RewardPopupsMgr_1.RewardPopupsMgr.Instance.showPopup();
    };
    __decorate([
        property(cc.RichText)
    ], PopupCompleteQuest.prototype, "amountTxt", void 0);
    __decorate([
        property(cc.Node)
    ], PopupCompleteQuest.prototype, "btnSpin", void 0);
    PopupCompleteQuest = __decorate([
        ccclass
    ], PopupCompleteQuest);
    return PopupCompleteQuest;
}(Popup_1.default));
exports.default = PopupCompleteQuest;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BvcHVwcy9Qb3B1cENvbXBsZXRlUXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsK0NBQTBDO0FBQzFDLDBDQUFxQztBQUNyQyxxREFBdUc7QUFDdkcsK0RBQThEO0FBRTlELGlDQUE0QjtBQUd0QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFnRCxzQ0FBSztJQUFyRDtRQUFBLHFFQXVCQztRQXJCRyxlQUFTLEdBQWdCLElBQUksQ0FBQztRQUU5QixhQUFPLEdBQVksSUFBSSxDQUFDOztJQW1CNUIsQ0FBQztJQWpCRyxtQ0FBTSxHQUFOO1FBQ0ksaUJBQU0sTUFBTSxXQUFFLENBQUM7UUFFZixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUU7WUFDekMsa0JBQVEsQ0FBQyxPQUFPLENBQUMsa0JBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDL0MsZUFBSyxDQUFDLFFBQVEsQ0FBQyxtQkFBUSxFQUFFLENBQUMsQ0FBQTtZQUMxQixlQUFLLENBQUMsUUFBUSxDQUFDLG1CQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsb0JBQVMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLDJCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxRixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxpQ0FBSSxHQUFYLFVBQVksSUFBWSxFQUFFLElBQVk7UUFDbEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsZ0VBQStCLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxFQUFFLGNBQVUsQ0FBQztJQUMxSSxDQUFDO0lBRVMsc0NBQVMsR0FBbkI7UUFDSSxpQ0FBZSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBcEJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7eURBQ1E7SUFFOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1REFDTTtJQUpQLGtCQUFrQjtRQUR0QyxPQUFPO09BQ2Esa0JBQWtCLENBdUJ0QztJQUFELHlCQUFDO0NBdkJELEFBdUJDLENBdkIrQyxlQUFLLEdBdUJwRDtrQkF2Qm9CLGtCQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgU291bmRNZ3IgZnJvbSBcIi4uL2NvbW1vbi9Tb3VuZE1nclwiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCIuLi9zcmMvYXBwL3N0b3JlXCI7XG5pbXBvcnQgeyBFQXBwUGFnZXMsIEVBcHBQb3B1cHMsIFBBR0VfU0hPV19FRkZFQ1QsIHBvcFBvcHVwLCBwdXNoUGFnZSB9IGZyb20gXCIuLi9zcmMvZmVhdHVyZXMvU2xpY2VBcHBcIjtcbmltcG9ydCB7IFJld2FyZFBvcHVwc01nciB9IGZyb20gXCIuLi9zcmMvZ2FtZS9SZXdhcmRQb3B1cHNNZ3JcIjtcbmltcG9ydCBIZWxwZXIgZnJvbSBcIi4uL3V0aWxzL0hlbHBlclwiO1xuaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwXCI7XG5cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwQ29tcGxldGVRdWVzdCBleHRlbmRzIFBvcHVwIHtcbiAgICBAcHJvcGVydHkoY2MuUmljaFRleHQpXG4gICAgYW1vdW50VHh0OiBjYy5SaWNoVGV4dCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYnRuU3BpbjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHN1cGVyLm9uTG9hZCgpO1xuXG4gICAgICAgIHRoaXMuYnRuU3Bpbi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsICgpID0+IHtcbiAgICAgICAgICAgIFNvdW5kTWdyLnBsYXlTZngoU291bmRNZ3IuSW5zdGFuY2UuU0ZYX0JVVFRPTik7XG4gICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChwb3BQb3B1cCgpKVxuICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2gocHVzaFBhZ2UoeyBwYWdlOiBFQXBwUGFnZXMuUGFnZUhvbWUsIGVmZmVjdDogUEFHRV9TSE9XX0VGRkVDVC5MRUZUIH0pKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGluaXQodHVybjogbnVtYmVyLCBjb2luOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5hbW91bnRUeHQuc3RyaW5nID0gYDxjb2xvcj0jN0YyRTJFPsSQw6Mgbmjhuq1uIMSRxrDhu6NjICR7Y29pbiA/IGNvaW4gKyAnIHh1IHbDoCAnIDogJyd9JHt0dXJuID8gdHVybiArICcgdsOpXFxucXVheSB0aMaw4bufbmcnIDogJyd9PC9jb2xvcj5gO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkRpc2FibGUoKTogdm9pZCB7XG4gICAgICAgIFJld2FyZFBvcHVwc01nci5JbnN0YW5jZS5zaG93UG9wdXAoKTtcbiAgICB9XG59XG4iXX0=