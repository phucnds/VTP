
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/utils/ResizeSprite.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3V0aWxzL1Jlc2l6ZVNwcml0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQTtBQUUzQyxJQUFNLGlCQUFpQixHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDaEMsS0FBSyxFQUFFLENBQUM7SUFDUixNQUFNLEVBQUUsQ0FBQztJQUNULElBQUksRUFBRSxDQUFDO0NBQ1IsQ0FBQyxDQUFBO0FBR0Y7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUE4REM7UUE3RGdELGVBQVMsR0FBVyxDQUFDLENBQUE7UUFDdEMscUJBQWUsR0FBWSxLQUFLLENBQUE7O0lBNERoRSxDQUFDO0lBckRDLDZCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFBO1FBQ2pFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUE7UUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQTtRQUNuQyxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUE7UUFDL0QsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUE7UUFDbEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUE7SUFDdEMsQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUE7SUFDZixDQUFDO0lBRUQsNkJBQU0sR0FBTixVQUFPLEVBQUU7UUFDUCxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFBO1NBQ2Q7SUFDSCxDQUFDO0lBRU8sNkJBQU0sR0FBZDtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEVBQUU7WUFDN0MsT0FBTTtTQUNQO1FBRUQsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFBO1FBQy9ELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUE7UUFDM0IsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQTtRQUU3QixRQUFRLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDdEIsS0FBSyxpQkFBaUIsQ0FBQyxLQUFLO2dCQUMxQixLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQTtnQkFDdkIsTUFBTSxHQUFHLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO2dCQUMzQyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7b0JBQ25DLE1BQU0sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUE7b0JBQy9CLEtBQUssR0FBRyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtpQkFDNUM7Z0JBQ0QsTUFBSztZQUNQLEtBQUssaUJBQWlCLENBQUMsTUFBTTtnQkFDM0IsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUE7Z0JBQ3pCLEtBQUssR0FBRyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtnQkFDM0MsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFO29CQUNqQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFBO29CQUM3QixNQUFNLEdBQUcsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7aUJBQzVDO2dCQUNELE1BQUs7WUFDUCxLQUFLLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3pCLE1BQUs7U0FFUjtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQTtRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7SUFDM0IsQ0FBQztJQTVEc0M7UUFBdEMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFLENBQUM7bURBQThCO0lBQzlDO1FBQXJCLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO3lEQUF5QztJQUYzQyxZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBOERoQztJQUFELG1CQUFDO0NBOURELEFBOERDLENBOUR5QyxFQUFFLENBQUMsU0FBUyxHQThEckQ7a0JBOURvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yXG5cbmNvbnN0IFJlc2l6ZVNwcml0ZU1vZGVzID0gY2MuRW51bSh7XG4gIFdJRFRIOiAwLFxuICBIRUlHSFQ6IDEsXG4gIEJPVEg6IDIsXG59KVxuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzaXplU3ByaXRlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgQHByb3BlcnR5KHsgdHlwZTogUmVzaXplU3ByaXRlTW9kZXMgfSkgcHJpdmF0ZSBNYXRjaE1vZGU6IG51bWJlciA9IDBcbiAgQHByb3BlcnR5KGNjLkJvb2xlYW4pIHByaXZhdGUgVXNlVXBkYXRlTWV0aG9kOiBib29sZWFuID0gZmFsc2VcblxuICBwcml2YXRlIG1Jbml0V2lkdGg6IG51bWJlclxuICBwcml2YXRlIG1Jbml0SGVpZ2h0OiBudW1iZXJcbiAgcHJpdmF0ZSBtSW5pdFNwcml0ZVdpZHRoOiBudW1iZXJcbiAgcHJpdmF0ZSBtSW5pdFNwcml0ZUhlaWdodDogbnVtYmVyXG5cbiAgb25Mb2FkKCkge1xuICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc2l6ZU1vZGUgPSBjYy5TcHJpdGUuU2l6ZU1vZGUuQ1VTVE9NXG4gICAgdGhpcy5tSW5pdFdpZHRoID0gdGhpcy5ub2RlLndpZHRoXG4gICAgdGhpcy5tSW5pdEhlaWdodCA9IHRoaXMubm9kZS5oZWlnaHRcbiAgICBjb25zdCByZWN0ID0gdGhpcy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZS5nZXRSZWN0KClcbiAgICB0aGlzLm1Jbml0U3ByaXRlV2lkdGggPSByZWN0LndpZHRoXG4gICAgdGhpcy5tSW5pdFNwcml0ZUhlaWdodCA9IHJlY3QuaGVpZ2h0XG4gIH1cblxuICBvbkVuYWJsZSgpIHtcbiAgICB0aGlzLnJlc2l6ZSgpXG4gIH1cblxuICB1cGRhdGUoZHQpIHtcbiAgICBpZiAodGhpcy5Vc2VVcGRhdGVNZXRob2QpIHtcbiAgICAgIHRoaXMucmVzaXplKClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlc2l6ZSgpIHtcbiAgICBpZiAoIXRoaXMuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJlY3QgPSB0aGlzLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lLmdldFJlY3QoKVxuICAgIGxldCB3aWR0aCA9IHRoaXMubUluaXRXaWR0aFxuICAgIGxldCBoZWlnaHQgPSB0aGlzLm1Jbml0SGVpZ2h0XG5cbiAgICBzd2l0Y2ggKHRoaXMuTWF0Y2hNb2RlKSB7XG4gICAgICBjYXNlIFJlc2l6ZVNwcml0ZU1vZGVzLldJRFRIOlxuICAgICAgICB3aWR0aCA9IHRoaXMubUluaXRXaWR0aFxuICAgICAgICBoZWlnaHQgPSB3aWR0aCAqIChyZWN0LmhlaWdodCAvIHJlY3Qud2lkdGgpXG4gICAgICAgIGlmIChoZWlnaHQgPiB0aGlzLm1Jbml0U3ByaXRlSGVpZ2h0KSB7XG4gICAgICAgICAgaGVpZ2h0ID0gdGhpcy5tSW5pdFNwcml0ZUhlaWdodFxuICAgICAgICAgIHdpZHRoID0gaGVpZ2h0ICogKHJlY3Qud2lkdGggLyByZWN0LmhlaWdodClcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSBSZXNpemVTcHJpdGVNb2Rlcy5IRUlHSFQ6XG4gICAgICAgIGhlaWdodCA9IHRoaXMubUluaXRIZWlnaHRcbiAgICAgICAgd2lkdGggPSBoZWlnaHQgKiAocmVjdC53aWR0aCAvIHJlY3QuaGVpZ2h0KVxuICAgICAgICBpZiAod2lkdGggPiB0aGlzLm1Jbml0U3ByaXRlV2lkdGgpIHtcbiAgICAgICAgICB3aWR0aCA9IHRoaXMubUluaXRTcHJpdGVXaWR0aFxuICAgICAgICAgIGhlaWdodCA9IHdpZHRoICogKHJlY3QuaGVpZ2h0IC8gcmVjdC53aWR0aClcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSBSZXNpemVTcHJpdGVNb2Rlcy5CT1RIOlxuICAgICAgICBicmVha1xuXG4gICAgfVxuXG4gICAgdGhpcy5ub2RlLndpZHRoID0gd2lkdGhcbiAgICB0aGlzLm5vZGUuaGVpZ2h0ID0gaGVpZ2h0XG4gIH1cbn1cbiJdfQ==