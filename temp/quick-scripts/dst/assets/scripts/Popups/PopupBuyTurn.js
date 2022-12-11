
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Popups/PopupBuyTurn.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '21a5eFlhTJKDYM2KSF+j4e4', 'PopupBuyTurn');
// scripts/Popups/PopupBuyTurn.ts

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
exports.PopupBuyTurn = void 0;
var SoundMgr_1 = require("../common/SoundMgr");
var connect_1 = require("../src/app/connect");
var store_1 = require("../src/app/store");
var SliceApp_1 = require("../src/features/SliceApp");
var SliceDeeplinks_1 = require("../src/features/SliceDeeplinks");
var Popup_1 = require("./Popup");
var PopupUpdateInfo_1 = require("./PopupUpdateInfo");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopupBuyTurn = /** @class */ (function (_super) {
    __extends(PopupBuyTurn, _super);
    function PopupBuyTurn() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.placeHolder = '';
        _this.amountTxt = null;
        _this.btnConfirm = null;
        return _this;
    }
    PopupBuyTurn.prototype.onLoad = function () {
        var _this = this;
        _super.prototype.onLoad.call(this);
        this.btnConfirm.on(cc.Node.EventType.TOUCH_END, function () {
            SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
            var verifiedUser = store_1.default.getState().user.verifiedUser;
            if (verifiedUser) {
                var data = { transAmount: _this.price, turnNumber: _this.amount, content: "\u0110\u1ED5i " + _this.amount + " v\u00E9 Chi\u1EBFc m\u00E1y th\u1EA7n k\u1EF3" };
                window.location.href = _this.props.deeplinks.data[SliceDeeplinks_1.DeeplinkTypesToName[SliceDeeplinks_1.EDeeplinkTypes.BUY_TURN]] + "?data=" + JSON.stringify(data);
                _this.actions.popPopup();
            }
            else {
                _this.actions.popPopup();
                _this.actions.pushPopup(SliceApp_1.EAppPopups.PopupUpdateInfo);
                var popup = cc.find('Canvas/PopupManager/Shown Popups/PopupUpdateInfo');
                popup && popup.getComponent(PopupUpdateInfo_1.default).init(_this.amount, _this.price);
            }
        });
    };
    PopupBuyTurn.prototype.init = function (amount, price, valAmount, valPrice) {
        this.amount = valAmount;
        this.price = valPrice;
        this.amountTxt.string = this.placeHolder.replace('%s1', amount).replace('%s2', price);
    };
    __decorate([
        property(String)
    ], PopupBuyTurn.prototype, "placeHolder", void 0);
    __decorate([
        property(cc.Label)
    ], PopupBuyTurn.prototype, "amountTxt", void 0);
    __decorate([
        property(cc.Node)
    ], PopupBuyTurn.prototype, "btnConfirm", void 0);
    return PopupBuyTurn;
}(Popup_1.default));
exports.PopupBuyTurn = PopupBuyTurn;
var mapStateToProps = function (state) { return ({
    reward: state.reward,
    quests: state.quests,
    deeplinks: state.deeplinks,
}); };
var mapDispatchToAction = function (dispatch) { return ({
    pushPage: function (payload) {
        return dispatch(SliceApp_1.pushPage(payload));
    },
    popPopup: function () { return dispatch(SliceApp_1.popPopup()); },
    pushPopup: function (payload) { return dispatch(SliceApp_1.pushPopup(payload)); },
}); };
exports.default = connect_1.default(mapStateToProps, mapDispatchToAction)(PopupBuyTurn);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BvcHVwcy9Qb3B1cEJ1eVR1cm4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR2xGLCtDQUEwQztBQUUxQyw4Q0FBeUM7QUFDekMsMENBQWlFO0FBQ2pFLHFEQUFpSDtBQUNqSCxpRUFBcUY7QUFFckYsaUNBQTRCO0FBQzVCLHFEQUFnRDtBQUcxQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUFrQyxnQ0FBSztJQUF2QztRQUFBLHFFQXdDQztRQW5DRyxpQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUd6QixlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRTNCLGdCQUFVLEdBQVksSUFBSSxDQUFDOztJQThCL0IsQ0FBQztJQXpCRyw2QkFBTSxHQUFOO1FBQUEsaUJBa0JDO1FBakJHLGlCQUFNLE1BQU0sV0FBRSxDQUFDO1FBRWYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFO1lBQzVDLGtCQUFRLENBQUMsT0FBTyxDQUFDLGtCQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBRS9DLElBQU0sWUFBWSxHQUFHLGVBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ3hELElBQUksWUFBWSxFQUFFO2dCQUNkLElBQU0sSUFBSSxHQUFHLEVBQUUsV0FBVyxFQUFFLEtBQUksQ0FBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLEtBQUksQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLG1CQUFPLEtBQUksQ0FBQyxNQUFNLG1EQUF1QixFQUFFLENBQUM7Z0JBQ3RILE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFNLEtBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxvQ0FBbUIsQ0FBQywrQkFBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNqSSxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQzNCO2lCQUFNO2dCQUNILEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3hCLEtBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLHFCQUFVLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBQ25ELElBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0RBQWtELENBQUMsQ0FBQztnQkFDMUUsS0FBSyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMseUJBQWUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsTUFBTSxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUM5RTtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLDJCQUFJLEdBQVgsVUFBWSxNQUFjLEVBQUUsS0FBYSxFQUFFLFNBQWlCLEVBQUUsUUFBZ0I7UUFDMUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDMUYsQ0FBQztJQWxDRDtRQURDLFFBQVEsQ0FBQyxNQUFNLENBQUM7cURBQ1E7SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzttREFDUTtJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNTO0lBOEIvQixtQkFBQztDQXhDRCxBQXdDQyxDQXhDaUMsZUFBSyxHQXdDdEM7QUF4Q1ksb0NBQVk7QUEwQ3pCLElBQU0sZUFBZSxHQUFHLFVBQUMsS0FBZ0IsSUFBSyxPQUFBLENBQUM7SUFDM0MsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO0lBQ3BCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtJQUNwQixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7Q0FDN0IsQ0FBQyxFQUo0QyxDQUk1QyxDQUFBO0FBQ0YsSUFBTSxtQkFBbUIsR0FBRyxVQUFDLFFBQXFCLElBQUssT0FBQSxDQUFDO0lBQ3BELFFBQVEsRUFBRSxVQUFDLE9BQW9DO1FBQzNDLE9BQUEsUUFBUSxDQUFDLG1CQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFBM0IsQ0FBMkI7SUFDL0IsUUFBUSxFQUFFLGNBQU0sT0FBQSxRQUFRLENBQUMsbUJBQVEsRUFBRSxDQUFDLEVBQXBCLENBQW9CO0lBQ3BDLFNBQVMsRUFBRSxVQUFDLE9BQW1CLElBQUssT0FBQSxRQUFRLENBQUMsb0JBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUE1QixDQUE0QjtDQUNuRSxDQUFDLEVBTHFELENBS3JELENBQUE7QUFDRixrQkFBZSxpQkFBTyxDQUFDLGVBQWUsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgU291bmRNZ3IgZnJvbSBcIi4uL2NvbW1vbi9Tb3VuZE1nclwiO1xuaW1wb3J0IHsgTWlzc2lvbnMgfSBmcm9tICcuLi9jb21wb25lbnRzL0NvbXBRdWVzdHNDb250YWluZXInO1xuaW1wb3J0IGNvbm5lY3QgZnJvbSBcIi4uL3NyYy9hcHAvY29ubmVjdFwiO1xuaW1wb3J0IHN0b3JlLCB7IEFwcERpc3BhdGNoLCBSb290U3RhdGUgfSBmcm9tIFwiLi4vc3JjL2FwcC9zdG9yZVwiO1xuaW1wb3J0IHsgRUFwcFBhZ2VzLCBFQXBwUG9wdXBzLCBJUGFnZVdpdGhFZmZlY3QsIHBvcFBvcHVwLCBwdXNoUGFnZSwgcHVzaFBvcHVwIH0gZnJvbSBcIi4uL3NyYy9mZWF0dXJlcy9TbGljZUFwcFwiO1xuaW1wb3J0IHsgRGVlcGxpbmtUeXBlc1RvTmFtZSwgRURlZXBsaW5rVHlwZXMgfSBmcm9tICcuLi9zcmMvZmVhdHVyZXMvU2xpY2VEZWVwbGlua3MnO1xuaW1wb3J0IEhlbHBlciBmcm9tIFwiLi4vdXRpbHMvSGVscGVyXCI7XG5pbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXBcIjtcbmltcG9ydCBQb3B1cFVwZGF0ZUluZm8gZnJvbSAnLi9Qb3B1cFVwZGF0ZUluZm8nO1xuXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbmV4cG9ydCBjbGFzcyBQb3B1cEJ1eVR1cm4gZXh0ZW5kcyBQb3B1cCB7XG4gICAgYWN0aW9uczogYW55XG4gICAgcHJvcHM6IGFueVxuXG4gICAgQHByb3BlcnR5KFN0cmluZylcbiAgICBwbGFjZUhvbGRlcjogU3RyaW5nID0gJyc7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgYW1vdW50VHh0OiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYnRuQ29uZmlybTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBwcml2YXRlIGFtb3VudDtcbiAgICBwcml2YXRlIHByaWNlO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBzdXBlci5vbkxvYWQoKTtcblxuICAgICAgICB0aGlzLmJ0bkNvbmZpcm0ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoKSA9PiB7XG4gICAgICAgICAgICBTb3VuZE1nci5wbGF5U2Z4KFNvdW5kTWdyLkluc3RhbmNlLlNGWF9CVVRUT04pO1xuXG4gICAgICAgICAgICBjb25zdCB2ZXJpZmllZFVzZXIgPSBzdG9yZS5nZXRTdGF0ZSgpLnVzZXIudmVyaWZpZWRVc2VyO1xuICAgICAgICAgICAgaWYgKHZlcmlmaWVkVXNlcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7IHRyYW5zQW1vdW50OiB0aGlzLnByaWNlLCB0dXJuTnVtYmVyOiB0aGlzLmFtb3VudCwgY29udGVudDogYMSQ4buVaSAke3RoaXMuYW1vdW50fSB2w6kgQ2hp4bq/YyBtw6F5IHRo4bqnbiBr4buzYCB9O1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYCR7dGhpcy5wcm9wcy5kZWVwbGlua3MuZGF0YVtEZWVwbGlua1R5cGVzVG9OYW1lW0VEZWVwbGlua1R5cGVzLkJVWV9UVVJOXV19P2RhdGE9YCArIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9ucy5wb3BQb3B1cCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbnMucG9wUG9wdXAoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbnMucHVzaFBvcHVwKEVBcHBQb3B1cHMuUG9wdXBVcGRhdGVJbmZvKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwb3B1cCA9IGNjLmZpbmQoJ0NhbnZhcy9Qb3B1cE1hbmFnZXIvU2hvd24gUG9wdXBzL1BvcHVwVXBkYXRlSW5mbycpO1xuICAgICAgICAgICAgICAgIHBvcHVwICYmIHBvcHVwLmdldENvbXBvbmVudChQb3B1cFVwZGF0ZUluZm8pLmluaXQodGhpcy5hbW91bnQsIHRoaXMucHJpY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5pdChhbW91bnQ6IHN0cmluZywgcHJpY2U6IHN0cmluZywgdmFsQW1vdW50OiBudW1iZXIsIHZhbFByaWNlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5hbW91bnQgPSB2YWxBbW91bnQ7XG4gICAgICAgIHRoaXMucHJpY2UgPSB2YWxQcmljZTtcbiAgICAgICAgdGhpcy5hbW91bnRUeHQuc3RyaW5nID0gdGhpcy5wbGFjZUhvbGRlci5yZXBsYWNlKCclczEnLCBhbW91bnQpLnJlcGxhY2UoJyVzMicsIHByaWNlKTtcbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogUm9vdFN0YXRlKSA9PiAoe1xuICAgIHJld2FyZDogc3RhdGUucmV3YXJkLFxuICAgIHF1ZXN0czogc3RhdGUucXVlc3RzLFxuICAgIGRlZXBsaW5rczogc3RhdGUuZGVlcGxpbmtzLFxufSlcbmNvbnN0IG1hcERpc3BhdGNoVG9BY3Rpb24gPSAoZGlzcGF0Y2g6IEFwcERpc3BhdGNoKSA9PiAoe1xuICAgIHB1c2hQYWdlOiAocGF5bG9hZDogRUFwcFBhZ2VzIHwgSVBhZ2VXaXRoRWZmZWN0KSA9PlxuICAgICAgICBkaXNwYXRjaChwdXNoUGFnZShwYXlsb2FkKSksXG4gICAgcG9wUG9wdXA6ICgpID0+IGRpc3BhdGNoKHBvcFBvcHVwKCkpLFxuICAgIHB1c2hQb3B1cDogKHBheWxvYWQ6IEVBcHBQb3B1cHMpID0+IGRpc3BhdGNoKHB1c2hQb3B1cChwYXlsb2FkKSksXG59KVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9BY3Rpb24pKFBvcHVwQnV5VHVybilcbiJdfQ==