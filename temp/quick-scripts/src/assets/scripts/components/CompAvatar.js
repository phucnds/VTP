"use strict";
cc._RF.push(module, 'ac8d5c2SmpNW4WusNFTJTD8', 'CompAvatar');
// scripts/components/CompAvatar.ts

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
var utils_1 = require("../src/common/utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode;
var CompAvatar = /** @class */ (function (_super) {
    __extends(CompAvatar, _super);
    function CompAvatar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.customSize = 0;
        _this.avatarURL = "";
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    CompAvatar.prototype.start = function () {
        if (this.customSize > 0) {
            this.changeSize();
        }
    };
    CompAvatar.prototype.changeSize = function () {
        this.node.setScale(this.customSize / this.node.width);
    };
    CompAvatar.prototype.onEnable = function () {
        var avatar = cc.find("avt", this.node) || cc.find("Mask/avt", this.node);
        avatar && avatar.setContentSize(80, 80);
    };
    CompAvatar.prototype.updateAvatar = function (url, isDebug) {
        if (isDebug === void 0) { isDebug = false; }
        // url = "https://elo-games.elofun.com/avatars/+(119).png"
        if (typeof url == "string") {
            if (url != this.avatarURL && url.startsWith("http")) {
                this.avatarURL = utils_1.getCDN(url);
                var avatar_1 = cc.find("avt", this.node) || cc.find("Mask/avt", this.node);
                var avtSprite_1 = avatar_1.getComponent(cc.Sprite);
                if (avatar_1 && avtSprite_1) {
                    cc.assetManager.loadRemote(utils_1.getCDN(url), function (err, tex) {
                        if (avatar_1 && !err) {
                            avatar_1.setScale(1);
                            avtSprite_1.spriteFrame = err ? null : new cc.SpriteFrame(tex);
                            avatar_1.setContentSize(80, 80);
                        }
                        else {
                            console.error(err);
                        }
                    });
                }
            }
        }
        else {
            var avatar_2 = cc.find("avt", this.node) || cc.find("Mask/avt", this.node);
            var avtSprite = avatar_2.getComponent(cc.Sprite);
            if (avatar_2 && avtSprite) {
                avtSprite.spriteFrame = url;
                setTimeout(function () {
                    avatar_2.setContentSize(80, 80);
                }, 200);
            }
        }
    };
    CompAvatar.prototype.activeOpponentAvatar = function (isActive) {
        var avatar = cc.find("avt", this.node) || cc.find("Mask/avt", this.node);
        var question = cc.find("icon-question", this.node) || cc.find("Mask/icon-question", this.node);
        avatar.active = isActive;
        if (question)
            question.active = !isActive;
    };
    CompAvatar.prototype.getAvtURL = function () {
        return this.avatarURL;
    };
    __decorate([
        property(Number)
    ], CompAvatar.prototype, "customSize", void 0);
    CompAvatar = __decorate([
        ccclass // <= remove it if using connect
        ,
        executeInEditMode
    ], CompAvatar);
    return CompAvatar;
}(cc.Component));
exports.default = CompAvatar;

cc._RF.pop();