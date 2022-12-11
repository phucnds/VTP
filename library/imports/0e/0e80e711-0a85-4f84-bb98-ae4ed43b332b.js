"use strict";
cc._RF.push(module, '0e80ecRCoVPhLuYrk7UOzMr', 'Popup');
// scripts/Popups/Popup.ts

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
var store_1 = require("../src/app/store");
var SliceApp_1 = require("../src/features/SliceApp");
var Helper_1 = require("../utils/Helper");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Popup = /** @class */ (function (_super) {
    __extends(Popup, _super);
    function Popup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btnBack = null;
        return _this;
    }
    Popup.prototype.onLoad = function () {
        if (this.btnBack) {
            Helper_1.default.registerButtonEvent(this.btnBack, function () { return store_1.default.dispatch(SliceApp_1.popPopup()); });
        }
    };
    __decorate([
        property(cc.Node)
    ], Popup.prototype, "btnBack", void 0);
    Popup = __decorate([
        ccclass
    ], Popup);
    return Popup;
}(cc.Component));
exports.default = Popup;

cc._RF.pop();