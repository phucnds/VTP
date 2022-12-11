"use strict";
cc._RF.push(module, '5efa34rLMBL6Z7zYO5/5lDg', 'LoadingCover');
// scripts/common/LoadingCover.ts

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
var SingletonNode_1 = require("../utils/SingletonNode");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LoadingCover = /** @class */ (function (_super) {
    __extends(LoadingCover, _super);
    function LoadingCover() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Container = null;
        return _this;
    }
    LoadingCover.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.hide();
    };
    LoadingCover.prototype.show = function () {
        this.Container.active = true;
    };
    LoadingCover.prototype.hide = function () {
        this.Container.active = false;
    };
    __decorate([
        property(cc.Node)
    ], LoadingCover.prototype, "Container", void 0);
    LoadingCover = __decorate([
        ccclass
    ], LoadingCover);
    return LoadingCover;
}(SingletonNode_1.default()));
exports.default = LoadingCover;

cc._RF.pop();