
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Popups/PopupBuyWeeklyTicketSuccess.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BvcHVwcy9Qb3B1cEJ1eVdlZWtseVRpY2tldFN1Y2Nlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsK0JBQWtDO0FBQ2xDLCtDQUEwQztBQUMxQywwQ0FBcUM7QUFFckMscURBQW9EO0FBRXBELGlDQUE0QjtBQUd0QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5RCwrQ0FBSztJQUE5RDtRQUFBLHFFQXlCQztRQXZCVSw0QkFBc0IsR0FBVyx1R0FBdUcsQ0FBQztRQUV6SSxjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLG9CQUFjLEdBQWdCLElBQUksQ0FBQzs7SUFtQjlDLENBQUM7SUFqQkcsNENBQU0sR0FBTjtRQUNJLGlCQUFNLE1BQU0sV0FBRSxDQUFBO1FBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFO1lBQzFDLGtCQUFRLENBQUMsT0FBTyxDQUFDLGtCQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQy9DLGVBQUssQ0FBQyxRQUFRLENBQUMsbUJBQVEsRUFBRSxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRVMsOENBQVEsR0FBbEI7UUFDSSxpQkFBTSxRQUFRLFdBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsdURBQWlCLEdBQWpCO1FBQ0ksSUFBTSxnQkFBZ0IsR0FBRyxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDbkYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDbEgsQ0FBQztJQXRCRDtRQURDLFFBQVEsQ0FBQyxNQUFNLENBQUM7K0VBQytIO0lBRWhKO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aUVBQ2M7SUFFaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzt1RUFDb0I7SUFOekIsMkJBQTJCO1FBRC9DLE9BQU87T0FDYSwyQkFBMkIsQ0F5Qi9DO0lBQUQsa0NBQUM7Q0F6QkQsQUF5QkMsQ0F6QndELGVBQUssR0F5QjdEO2tCQXpCb0IsMkJBQTJCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBtb21lbnQgPSByZXF1aXJlKFwibW9tZW50XCIpO1xuaW1wb3J0IFNvdW5kTWdyIGZyb20gXCIuLi9jb21tb24vU291bmRNZ3JcIjtcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi4vc3JjL2FwcC9zdG9yZVwiO1xuaW1wb3J0IHsgZ2V0UmVtYW5uaW5nVGltZSB9IGZyb20gXCIuLi9zcmMvY29tbW9uL3V0aWxzXCI7XG5pbXBvcnQgeyBwb3BQb3B1cCB9IGZyb20gXCIuLi9zcmMvZmVhdHVyZXMvU2xpY2VBcHBcIjtcbmltcG9ydCBIZWxwZXIgZnJvbSBcIi4uL3V0aWxzL0hlbHBlclwiO1xuaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwXCI7XG5cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwQnV5V2Vla2x5VGlja2V0U3VjY2VzcyBleHRlbmRzIFBvcHVwIHtcbiAgICBAcHJvcGVydHkoU3RyaW5nKVxuICAgIHB1YmxpYyBkZXNjcmlwdGlvblBsYWNlSG9sZGVyOiBTdHJpbmcgPSAnPGNvbG9yPSM3RjJFMkU+SMOjeSDEkcOzbiB4ZW0ga+G6v3QgcXXhuqMgdsOgbyBsw7pjIDxiPjIwOjAwXFxuQ2jhu6cgbmjhuq10PC9iPiB0deG6p24gbsOgeVxcbjxiPiVzPC9iPiBi4bqhbiBuaMOpPC9jb2xvcj4nO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHB1YmxpYyBidG5DbG9zZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlJpY2hUZXh0KVxuICAgIHB1YmxpYyBkZXNjcmlwdGlvblR4dDogY2MuUmljaFRleHQgPSBudWxsO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBzdXBlci5vbkxvYWQoKVxuICAgICAgICB0aGlzLmJ0bkNsb3NlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgKCkgPT4ge1xuICAgICAgICAgICAgU291bmRNZ3IucGxheVNmeChTb3VuZE1nci5JbnN0YW5jZS5TRlhfQlVUVE9OKTtcbiAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHBvcFBvcHVwKCkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25FbmFibGUoKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLm9uRW5hYmxlKCk7XG4gICAgICAgIHRoaXMudXBkYXRlRGVzY3JpcHRpb24oKTtcbiAgICB9XG5cbiAgICB1cGRhdGVEZXNjcmlwdGlvbigpIHtcbiAgICAgICAgY29uc3Qgcm9sbFBoYXNlRHVlRGF0ZSA9IG1vbWVudCgpLmVuZE9mKCdpc29XZWVrJykuc3RhcnRPZignZGF5JykuYWRkKDIwLCBcImhvdXJzXCIpO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uVHh0LnN0cmluZyA9IHRoaXMuZGVzY3JpcHRpb25QbGFjZUhvbGRlci5yZXBsYWNlKCclcycsIHJvbGxQaGFzZUR1ZURhdGUuZm9ybWF0KCdERC9NTS9ZWVlZJykpO1xuICAgIH1cbn1cbiJdfQ==