
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/utils/LocalizedFrame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3V0aWxzL0xvY2FsaXplZEZyYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFzQztBQUVoQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQW9CQztRQWxCNkIsUUFBRSxHQUFtQixJQUFJLENBQUM7UUFDMUIsUUFBRSxHQUFtQixJQUFJLENBQUM7UUFDMUIsUUFBRSxHQUFtQixJQUFJLENBQUM7O0lBZ0J4RCxDQUFDO0lBWkcsK0JBQU0sR0FBTjtRQUNJLGdCQUFNLENBQUMsYUFBYSxDQUFDLGdCQUFNLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUM7SUFDdkUsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVPLGlDQUFRLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDOUcsQ0FBQztJQWpCeUI7UUFBekIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7OENBQTJCO0lBQzFCO1FBQXpCLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOzhDQUEyQjtJQUMxQjtRQUF6QixRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzs4Q0FBMkI7SUFKbkMsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQW9CbEM7SUFBRCxxQkFBQztDQXBCRCxBQW9CQyxDQXBCMkMsRUFBRSxDQUFDLFNBQVMsR0FvQnZEO2tCQXBCb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFdmVudHMgZnJvbSBcIi4uL2NvbW1vbi9FdmVudHNcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvY2FsaXplZEZyYW1lIGV4dGVuZHMgY2MuQ29tcG9uZW50IFxue1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSkgRU46IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpIE1ZOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKSBNVTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBtRGVmYXVsdEZyYW1lOiBjYy5TcHJpdGVGcmFtZTtcblxuICAgIG9uTG9hZCgpe1xuICAgICAgICBFdmVudHMucmVnaXN0ZXJFdmVudChFdmVudHMuRXZlbnRMYW5ndWFnZUNoYW5nZWQsIHRoaXMubG9jYWxpemUuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMubURlZmF1bHRGcmFtZSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZTtcbiAgICB9XG4gICAgXG4gICAgb25FbmFibGUoKXtcbiAgICAgICAgdGhpcy5sb2NhbGl6ZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgbG9jYWxpemUoKXtcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpc1t3aW5kb3cubGFuZ3VhZ2UudG9VcHBlckNhc2UoKV0gfHwgdGhpcy5tRGVmYXVsdEZyYW1lO1xuICAgIH1cbn1cbiJdfQ==