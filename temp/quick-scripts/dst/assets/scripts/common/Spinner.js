
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/common/Spinner.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9bb946QoZVOMKPUS/9hPO3J', 'Spinner');
// scripts/common/Spinner.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Spinner = /** @class */ (function (_super) {
    __extends(Spinner, _super);
    function Spinner() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Speed = 10 * 60;
        return _this;
    }
    Spinner.prototype.update = function (dt) {
        this.node.angle = (this.node.angle - this.Speed * dt) % 360;
    };
    __decorate([
        property(cc.Integer)
    ], Spinner.prototype, "Speed", void 0);
    Spinner = __decorate([
        ccclass
    ], Spinner);
    return Spinner;
}(cc.Component));
exports.default = Spinner;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NvbW1vbi9TcGlubmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXFDLDJCQUFZO0lBQWpEO1FBQUEscUVBT0M7UUFMaUMsV0FBSyxHQUFXLEVBQUUsR0FBRyxFQUFFLENBQUM7O0lBSzFELENBQUM7SUFIRyx3QkFBTSxHQUFOLFVBQU8sRUFBVTtRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDaEUsQ0FBQztJQUpxQjtRQUFyQixRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzswQ0FBaUM7SUFGckMsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQU8zQjtJQUFELGNBQUM7Q0FQRCxBQU9DLENBUG9DLEVBQUUsQ0FBQyxTQUFTLEdBT2hEO2tCQVBvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwaW5uZXIgZXh0ZW5kcyBjYy5Db21wb25lbnRcbntcbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcikgcHJpdmF0ZSBTcGVlZDogbnVtYmVyID0gMTAgKiA2MDtcblxuICAgIHVwZGF0ZShkdDogbnVtYmVyKXtcbiAgICAgICAgdGhpcy5ub2RlLmFuZ2xlID0gKHRoaXMubm9kZS5hbmdsZSAtIHRoaXMuU3BlZWQgKiBkdCkgJSAzNjA7XG4gICAgfVxufVxuIl19