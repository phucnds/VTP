"use strict";
cc._RF.push(module, '83383pkm2RGS5qRktnIDB/a', 'Point');
// scripts/src/Path/Point.ts

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
var utils_1 = require("../common/utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Point = /** @class */ (function (_super) {
    __extends(Point, _super);
    function Point() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.forwardPoint = null;
        _this.backPoint = null;
        return _this;
    }
    Point.prototype.getForwardVector = function () {
        return utils_1.getWorldPosition(this.forwardPoint).sub(utils_1.getWorldPosition(this.node));
    };
    Point.prototype.getBackVector = function () {
        return utils_1.getWorldPosition(this.backPoint).sub(utils_1.getWorldPosition(this.node));
    };
    __decorate([
        property(cc.Node)
    ], Point.prototype, "forwardPoint", void 0);
    __decorate([
        property(cc.Node)
    ], Point.prototype, "backPoint", void 0);
    Point = __decorate([
        ccclass
    ], Point);
    return Point;
}(cc.Component));
exports.default = Point;

cc._RF.pop();