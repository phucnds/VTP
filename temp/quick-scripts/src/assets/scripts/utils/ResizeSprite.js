"use strict";
cc._RF.push(module, '587f36r5NVHLayjQ28r6gPT', 'ResizeSprite');
// scripts/utils/ResizeSprite.ts

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
var ResizeSpriteModes = cc.Enum({
    WIDTH: 0,
    HEIGHT: 1,
    BOTH: 2,
});
var ResizeSprite = /** @class */ (function (_super) {
    __extends(ResizeSprite, _super);
    function ResizeSprite() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.MatchMode = 0;
        _this.UseUpdateMethod = false;
        return _this;
    }
    ResizeSprite.prototype.onLoad = function () {
        this.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
        this.mInitWidth = this.node.width;
        this.mInitHeight = this.node.height;
        var rect = this.getComponent(cc.Sprite).spriteFrame.getRect();
        this.mInitSpriteWidth = rect.width;
        this.mInitSpriteHeight = rect.height;
    };
    ResizeSprite.prototype.onEnable = function () {
        this.resize();
    };
    ResizeSprite.prototype.update = function (dt) {
        if (this.UseUpdateMethod) {
            this.resize();
        }
    };
    ResizeSprite.prototype.resize = function () {
        if (!this.getComponent(cc.Sprite).spriteFrame) {
            return;
        }
        var rect = this.getComponent(cc.Sprite).spriteFrame.getRect();
        var width = this.mInitWidth;
        var height = this.mInitHeight;
        switch (this.MatchMode) {
            case ResizeSpriteModes.WIDTH:
                width = this.mInitWidth;
                height = width * (rect.height / rect.width);
                if (height > this.mInitSpriteHeight) {
                    height = this.mInitSpriteHeight;
                    width = height * (rect.width / rect.height);
                }
                break;
            case ResizeSpriteModes.HEIGHT:
                height = this.mInitHeight;
                width = height * (rect.width / rect.height);
                if (width > this.mInitSpriteWidth) {
                    width = this.mInitSpriteWidth;
                    height = width * (rect.height / rect.width);
                }
                break;
            case ResizeSpriteModes.BOTH:
                break;
        }
        this.node.width = width;
        this.node.height = height;
    };
    __decorate([
        property({ type: ResizeSpriteModes })
    ], ResizeSprite.prototype, "MatchMode", void 0);
    __decorate([
        property(cc.Boolean)
    ], ResizeSprite.prototype, "UseUpdateMethod", void 0);
    ResizeSprite = __decorate([
        ccclass
    ], ResizeSprite);
    return ResizeSprite;
}(cc.Component));
exports.default = ResizeSprite;

cc._RF.pop();