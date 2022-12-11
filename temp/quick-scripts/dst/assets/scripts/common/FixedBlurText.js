
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/common/FixedBlurText.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5648aPNPDhA/rMuYB5dKQiC', 'FixedBlurText');
// scripts/common/FixedBlurText.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FixedBlurText = /** @class */ (function (_super) {
    __extends(FixedBlurText, _super);
    function FixedBlurText() {
        // LIFE-CYCLE CALLBACKS:
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // onLoad () {}
        _this.SCALE_RATIO_TO_FIXED_BLUR = 2;
        _this.label = null;
        return _this;
        // update (dt) {}
    }
    FixedBlurText.prototype.start = function () {
        this.label = this.getComponent(cc.Label);
        if (!this.label)
            return;
        if (this.node.scaleX < 1) {
            var ratio = 1 / (this.node.scaleX);
            this.node.scaleX = 1;
            this.node.scaleY = 1;
            this.label.fontSize /= ratio;
            this.label.lineHeight /= ratio;
            if (this.label.overflow == cc.Label.Overflow.SHRINK) {
                this.node.height /= ratio;
                this.node.width /= ratio;
            }
        }
        if (this.node.scaleX == 1) {
            if (this.label.overflow == cc.Label.Overflow.SHRINK || this.label.overflow == cc.Label.Overflow.RESIZE_HEIGHT) {
                this.node.height *= this.SCALE_RATIO_TO_FIXED_BLUR;
                this.node.width *= this.SCALE_RATIO_TO_FIXED_BLUR;
            }
            this.label.fontSize *= this.SCALE_RATIO_TO_FIXED_BLUR;
            this.label.lineHeight *= this.SCALE_RATIO_TO_FIXED_BLUR;
            this.node.scaleX /= this.SCALE_RATIO_TO_FIXED_BLUR;
            this.node.scaleY /= this.SCALE_RATIO_TO_FIXED_BLUR;
        }
        try {
            this.node.parent.getComponent(cc.Layout).updateLayout();
            this.node.getComponent(cc.Layout).updateLayout();
        }
        catch (_a) {
        }
    };
    FixedBlurText = __decorate([
        ccclass
    ], FixedBlurText);
    return FixedBlurText;
}(cc.Component));
exports.default = FixedBlurText;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NvbW1vbi9GaXhlZEJsdXJUZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTJDLGlDQUFZO0lBQXZEO1FBQ0ksd0JBQXdCO1FBRDVCLHFFQXlDQztRQXRDRyxlQUFlO1FBQ1AsK0JBQXlCLEdBQVcsQ0FBQyxDQUFBO1FBQ3JDLFdBQUssR0FBYSxJQUFJLENBQUM7O1FBbUMvQixpQkFBaUI7SUFDckIsQ0FBQztJQW5DRyw2QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFBRSxPQUFNO1FBRXZCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3RCLElBQUksS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUM7WUFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLElBQUksS0FBSyxDQUFDO1lBQy9CLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO2dCQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQzthQUM1QjtTQUNKO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDdkIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFO2dCQUMzRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMseUJBQXlCLENBQUM7Z0JBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyx5QkFBeUIsQ0FBQzthQUNyRDtZQUNELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyx5QkFBeUIsQ0FBQztZQUN0RCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMseUJBQXlCLENBQUM7WUFDeEQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLHlCQUF5QixDQUFDO1lBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyx5QkFBeUIsQ0FBQztTQUN0RDtRQUVELElBQUk7WUFDQSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3hELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNwRDtRQUFDLFdBQU07U0FFUDtJQUNMLENBQUM7SUF0Q2dCLGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0F5Q2pDO0lBQUQsb0JBQUM7Q0F6Q0QsQUF5Q0MsQ0F6QzBDLEVBQUUsQ0FBQyxTQUFTLEdBeUN0RDtrQkF6Q29CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpeGVkQmx1clRleHQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG4gICAgcHJpdmF0ZSBTQ0FMRV9SQVRJT19UT19GSVhFRF9CTFVSOiBudW1iZXIgPSAyXG4gICAgcHJpdmF0ZSBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmxhYmVsID0gdGhpcy5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICBpZiAoIXRoaXMubGFiZWwpIHJldHVyblxuXG4gICAgICAgIGlmICh0aGlzLm5vZGUuc2NhbGVYIDwgMSkge1xuICAgICAgICAgICAgbGV0IHJhdGlvID0gMSAvICh0aGlzLm5vZGUuc2NhbGVYKVxuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IDE7XG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVZID0gMTtcbiAgICAgICAgICAgIHRoaXMubGFiZWwuZm9udFNpemUgLz0gcmF0aW87XG4gICAgICAgICAgICB0aGlzLmxhYmVsLmxpbmVIZWlnaHQgLz0gcmF0aW87XG4gICAgICAgICAgICBpZiAodGhpcy5sYWJlbC5vdmVyZmxvdyA9PSBjYy5MYWJlbC5PdmVyZmxvdy5TSFJJTkspIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuaGVpZ2h0IC89IHJhdGlvO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS53aWR0aCAvPSByYXRpbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5ub2RlLnNjYWxlWCA9PSAxKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5sYWJlbC5vdmVyZmxvdyA9PSBjYy5MYWJlbC5PdmVyZmxvdy5TSFJJTksgfHwgdGhpcy5sYWJlbC5vdmVyZmxvdyA9PSBjYy5MYWJlbC5PdmVyZmxvdy5SRVNJWkVfSEVJR0hUKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmhlaWdodCAqPSB0aGlzLlNDQUxFX1JBVElPX1RPX0ZJWEVEX0JMVVI7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLndpZHRoICo9IHRoaXMuU0NBTEVfUkFUSU9fVE9fRklYRURfQkxVUjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubGFiZWwuZm9udFNpemUgKj0gdGhpcy5TQ0FMRV9SQVRJT19UT19GSVhFRF9CTFVSO1xuICAgICAgICAgICAgdGhpcy5sYWJlbC5saW5lSGVpZ2h0ICo9IHRoaXMuU0NBTEVfUkFUSU9fVE9fRklYRURfQkxVUjtcbiAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggLz0gdGhpcy5TQ0FMRV9SQVRJT19UT19GSVhFRF9CTFVSO1xuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWSAvPSB0aGlzLlNDQUxFX1JBVElPX1RPX0ZJWEVEX0JMVVI7XG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5nZXRDb21wb25lbnQoY2MuTGF5b3V0KS51cGRhdGVMYXlvdXQoKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuTGF5b3V0KS51cGRhdGVMYXlvdXQoKTtcbiAgICAgICAgfSBjYXRjaCB7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=