"use strict";
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