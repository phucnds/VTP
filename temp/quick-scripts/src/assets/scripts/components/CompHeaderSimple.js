"use strict";
cc._RF.push(module, 'ef16f5/4KFEJIXt2zjoZbLp', 'CompHeaderSimple');
// scripts/components/CompHeaderSimple.ts

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
var store_1 = require("../src/app/store");
var SliceApp_1 = require("../src/features/SliceApp");
var Helper_1 = require("../utils/Helper");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode;
var CompHeaderSimple = /** @class */ (function (_super) {
    __extends(CompHeaderSimple, _super);
    function CompHeaderSimple() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btnBack = null;
        return _this;
    }
    CompHeaderSimple.prototype.onLoad = function () {
        Helper_1.default.registerButtonEvent(this.btnBack, function () { return store_1.default.dispatch(SliceApp_1.popPage()); });
    };
    __decorate([
        property(cc.Node)
    ], CompHeaderSimple.prototype, "btnBack", void 0);
    CompHeaderSimple = __decorate([
        ccclass
    ], CompHeaderSimple);
    return CompHeaderSimple;
}(cc.Component));
exports.default = CompHeaderSimple;

cc._RF.pop();