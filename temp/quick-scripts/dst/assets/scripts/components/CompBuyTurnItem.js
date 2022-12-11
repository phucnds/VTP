
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/components/CompBuyTurnItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dd0d7g/L6pGb5S7n6QMCRmT', 'CompBuyTurnItem');
// scripts/components/CompBuyTurnItem.ts

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
var GameDefine_1 = require("../src/common/GameDefine");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode;
var CompBuyTurnItem = /** @class */ (function (_super) {
    __extends(CompBuyTurnItem, _super);
    function CompBuyTurnItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.descipritionTxt = null;
        _this.selectedFX = null;
        return _this;
    }
    CompBuyTurnItem.prototype.init = function (ticketNum, price, unit) {
        this.descipritionTxt.string = ticketNum + " = " + price + unit;
    };
    CompBuyTurnItem.prototype.setActive = function (isActive) {
        this.selectedFX.active = isActive;
        this.descipritionTxt.node.color = isActive ? GameDefine_1.default.COLOR_RED : GameDefine_1.default.COLOR_BROWN;
    };
    __decorate([
        property(cc.Label)
    ], CompBuyTurnItem.prototype, "descipritionTxt", void 0);
    __decorate([
        property(cc.Node)
    ], CompBuyTurnItem.prototype, "selectedFX", void 0);
    CompBuyTurnItem = __decorate([
        ccclass
    ], CompBuyTurnItem);
    return CompBuyTurnItem;
}(cc.Component));
exports.default = CompBuyTurnItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvQ29tcEJ1eVR1cm5JdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHVEQUFrRDtBQUU1QyxJQUFBLEtBQTJDLEVBQUUsQ0FBQyxVQUFVLEVBQXRELE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLGlCQUFpQix1QkFBa0IsQ0FBQztBQUcvRDtJQUE2QyxtQ0FBWTtJQUF6RDtRQUFBLHFFQWNDO1FBWlUscUJBQWUsR0FBYSxJQUFJLENBQUM7UUFFakMsZ0JBQVUsR0FBWSxJQUFJLENBQUM7O0lBVXRDLENBQUM7SUFSRyw4QkFBSSxHQUFKLFVBQUssU0FBaUIsRUFBRSxLQUFhLEVBQUUsSUFBWTtRQUMvQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBTSxTQUFTLFdBQU0sS0FBSyxHQUFHLElBQU0sQ0FBQztJQUNuRSxDQUFDO0lBRUQsbUNBQVMsR0FBVCxVQUFVLFFBQWlCO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztRQUNsQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxvQkFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsb0JBQVUsQ0FBQyxXQUFXLENBQUM7SUFDL0YsQ0FBQztJQVhEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NERBQ3FCO0lBRXhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7dURBQ2dCO0lBSmpCLGVBQWU7UUFEbkMsT0FBTztPQUNhLGVBQWUsQ0FjbkM7SUFBRCxzQkFBQztDQWRELEFBY0MsQ0FkNEMsRUFBRSxDQUFDLFNBQVMsR0FjeEQ7a0JBZG9CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU291bmRNZ3IgZnJvbSAnLi4vY29tbW9uL1NvdW5kTWdyJztcbmltcG9ydCBHYW1lRGVmaW5lIGZyb20gJy4uL3NyYy9jb21tb24vR2FtZURlZmluZSc7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHksIGV4ZWN1dGVJbkVkaXRNb2RlIH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcEJ1eVR1cm5JdGVtIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgcHVibGljIGRlc2NpcHJpdGlvblR4dDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHB1YmxpYyBzZWxlY3RlZEZYOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIGluaXQodGlja2V0TnVtOiBudW1iZXIsIHByaWNlOiBudW1iZXIsIHVuaXQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLmRlc2NpcHJpdGlvblR4dC5zdHJpbmcgPSBgJHt0aWNrZXROdW19ID0gJHtwcmljZX0ke3VuaXR9YDtcbiAgICB9XG5cbiAgICBzZXRBY3RpdmUoaXNBY3RpdmU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEZYLmFjdGl2ZSA9IGlzQWN0aXZlO1xuICAgICAgICB0aGlzLmRlc2NpcHJpdGlvblR4dC5ub2RlLmNvbG9yID0gaXNBY3RpdmUgPyBHYW1lRGVmaW5lLkNPTE9SX1JFRCA6IEdhbWVEZWZpbmUuQ09MT1JfQlJPV047XG4gICAgfVxufVxuIl19