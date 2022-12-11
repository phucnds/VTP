
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/components/CompAvatar.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvQ29tcEF2YXRhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBNkM7QUFFdkMsSUFBQSxLQUEyQyxFQUFFLENBQUMsVUFBVSxFQUF0RCxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxpQkFBaUIsdUJBQWtCLENBQUM7QUFJL0Q7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUE2RUM7UUExRXFCLGdCQUFVLEdBQVcsQ0FBQyxDQUFBO1FBQ2hDLGVBQVMsR0FBVyxFQUFFLENBQUM7O1FBd0UvQixpQkFBaUI7SUFDckIsQ0FBQztJQXhFRyxlQUFlO0lBRWYsMEJBQUssR0FBTDtRQUVJLElBQUksSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLEVBQ3ZCO1lBQ0ksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO1NBQ3BCO0lBQ0wsQ0FBQztJQUNELCtCQUFVLEdBQVY7UUFFSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDekQsQ0FBQztJQUNELDZCQUFRLEdBQVI7UUFFSSxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3hFLE1BQU0sSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBQ0QsaUNBQVksR0FBWixVQUFhLEdBQTRCLEVBQUUsT0FBZTtRQUFmLHdCQUFBLEVBQUEsZUFBZTtRQUV0RCwwREFBMEQ7UUFDMUQsSUFBSSxPQUFPLEdBQUcsSUFBSSxRQUFRLEVBQzFCO1lB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b3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldENETiB9IGZyb20gXCIuLi9zcmMvY29tbW9uL3V0aWxzXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHksIGV4ZWN1dGVJbkVkaXRNb2RlIH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzcyAvLyA8PSByZW1vdmUgaXQgaWYgdXNpbmcgY29ubmVjdFxuQGV4ZWN1dGVJbkVkaXRNb2RlXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wQXZhdGFyIGV4dGVuZHMgY2MuQ29tcG9uZW50XG57XG5cbiAgICBAcHJvcGVydHkoTnVtYmVyKSBjdXN0b21TaXplOiBudW1iZXIgPSAwXG4gICAgcHJpdmF0ZSBhdmF0YXJVUkw6IHN0cmluZyA9IFwiXCI7XG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBzdGFydCgpXG4gICAge1xuICAgICAgICBpZiAodGhpcy5jdXN0b21TaXplID4gMClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTaXplKClcbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGFuZ2VTaXplKClcbiAgICB7XG4gICAgICAgIHRoaXMubm9kZS5zZXRTY2FsZSh0aGlzLmN1c3RvbVNpemUgLyB0aGlzLm5vZGUud2lkdGgpXG4gICAgfVxuICAgIG9uRW5hYmxlKClcbiAgICB7XG4gICAgICAgIGxldCBhdmF0YXIgPSBjYy5maW5kKFwiYXZ0XCIsIHRoaXMubm9kZSkgfHwgY2MuZmluZChcIk1hc2svYXZ0XCIsIHRoaXMubm9kZSlcbiAgICAgICAgYXZhdGFyICYmIGF2YXRhci5zZXRDb250ZW50U2l6ZSg4MCwgODApO1xuICAgIH1cbiAgICB1cGRhdGVBdmF0YXIodXJsOiBzdHJpbmcgfCBjYy5TcHJpdGVGcmFtZSwgaXNEZWJ1ZyA9IGZhbHNlKVxuICAgIHtcbiAgICAgICAgLy8gdXJsID0gXCJodHRwczovL2Vsby1nYW1lcy5lbG9mdW4uY29tL2F2YXRhcnMvKygxMTkpLnBuZ1wiXG4gICAgICAgIGlmICh0eXBlb2YgdXJsID09IFwic3RyaW5nXCIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICh1cmwgIT0gdGhpcy5hdmF0YXJVUkwgJiYgdXJsLnN0YXJ0c1dpdGgoXCJodHRwXCIpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuYXZhdGFyVVJMID0gZ2V0Q0ROKHVybClcbiAgICAgICAgICAgICAgICBsZXQgYXZhdGFyID0gY2MuZmluZChcImF2dFwiLCB0aGlzLm5vZGUpIHx8IGNjLmZpbmQoXCJNYXNrL2F2dFwiLCB0aGlzLm5vZGUpXG4gICAgICAgICAgICAgICAgbGV0IGF2dFNwcml0ZSA9IGF2YXRhci5nZXRDb21wb25lbnQoY2MuU3ByaXRlKVxuICAgICAgICAgICAgICAgIGlmIChhdmF0YXIgJiYgYXZ0U3ByaXRlKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRSZW1vdGUoZ2V0Q0ROKHVybCksIChlcnI6IGFueSwgdGV4OiBhbnkpID0+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhdmF0YXIgJiYgIWVycilcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXIuc2V0U2NhbGUoMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdnRTcHJpdGUuc3ByaXRlRnJhbWUgPSBlcnIgPyBudWxsIDogbmV3IGNjLlNwcml0ZUZyYW1lKHRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyLnNldENvbnRlbnRTaXplKDgwLCA4MCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBhdmF0YXIgPSBjYy5maW5kKFwiYXZ0XCIsIHRoaXMubm9kZSkgfHwgY2MuZmluZChcIk1hc2svYXZ0XCIsIHRoaXMubm9kZSlcbiAgICAgICAgICAgIGxldCBhdnRTcHJpdGUgPSBhdmF0YXIuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSlcbiAgICAgICAgICAgIGlmIChhdmF0YXIgJiYgYXZ0U3ByaXRlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGF2dFNwcml0ZS5zcHJpdGVGcmFtZSA9IHVybFxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhdmF0YXIuc2V0Q29udGVudFNpemUoODAsIDgwKTtcbiAgICAgICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGFjdGl2ZU9wcG9uZW50QXZhdGFyKGlzQWN0aXZlOiBib29sZWFuKVxuICAgIHtcbiAgICAgICAgbGV0IGF2YXRhciA9IGNjLmZpbmQoXCJhdnRcIiwgdGhpcy5ub2RlKSB8fCBjYy5maW5kKFwiTWFzay9hdnRcIiwgdGhpcy5ub2RlKVxuICAgICAgICBsZXQgcXVlc3Rpb24gPSBjYy5maW5kKFwiaWNvbi1xdWVzdGlvblwiLCB0aGlzLm5vZGUpIHx8IGNjLmZpbmQoXCJNYXNrL2ljb24tcXVlc3Rpb25cIiwgdGhpcy5ub2RlKVxuXG4gICAgICAgIGF2YXRhci5hY3RpdmUgPSBpc0FjdGl2ZVxuICAgICAgICBpZiAocXVlc3Rpb24pIHF1ZXN0aW9uLmFjdGl2ZSA9ICFpc0FjdGl2ZVxuICAgIH1cbiAgICBnZXRBdnRVUkwoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXZhdGFyVVJMXG4gICAgfVxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=