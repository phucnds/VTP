"use strict";
cc._RF.push(module, '8ba3d+Bn6NI76jJhS1uJSSp', 'LocalizedFrame');
// scripts/utils/LocalizedFrame.ts

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
var Events_1 = require("../common/Events");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LocalizedFrame = /** @class */ (function (_super) {
    __extends(LocalizedFrame, _super);
    function LocalizedFrame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.EN = null;
        _this.MY = null;
        _this.MU = null;
        return _this;
    }
    LocalizedFrame.prototype.onLoad = function () {
        Events_1.default.registerEvent(Events_1.default.EventLanguageChanged, this.localize.bind(this));
        this.mDefaultFrame = this.node.getComponent(cc.Sprite).spriteFrame;
    };
    LocalizedFrame.prototype.onEnable = function () {
        this.localize();
    };
    LocalizedFrame.prototype.localize = function () {
        this.node.getComponent(cc.Sprite).spriteFrame = this[window.language.toUpperCase()] || this.mDefaultFrame;
    };
    __decorate([
        property(cc.SpriteFrame)
    ], LocalizedFrame.prototype, "EN", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], LocalizedFrame.prototype, "MY", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], LocalizedFrame.prototype, "MU", void 0);
    LocalizedFrame = __decorate([
        ccclass
    ], LocalizedFrame);
    return LocalizedFrame;
}(cc.Component));
exports.default = LocalizedFrame;

cc._RF.pop();