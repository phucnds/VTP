
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/common/ButtonClickEvent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4d452Utru9JvpZLQQqp5DvU', 'ButtonClickEvent');
// scripts/common/ButtonClickEvent.ts

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
var SoundMgr_1 = require("../common/SoundMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ButtonClickEvent = /** @class */ (function (_super) {
    __extends(ButtonClickEvent, _super);
    function ButtonClickEvent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ClickInterval = 0.5; //-1: one time click
        return _this;
    }
    Object.defineProperty(ButtonClickEvent.prototype, "Interactive", {
        get: function () { return this.mInteractive; },
        set: function (value) { this.mInteractive = value; },
        enumerable: false,
        configurable: true
    });
    ButtonClickEvent.prototype.registerEvent = function (callback) {
        // this.node.on(cc.Node.EventType.TOUCH_END, () => {
        var _this = this;
        //     this.onClick(callback);
        // });
        this.node.on(cc.Node.EventType.TOUCH_END, function () {
            _this.onClick(callback);
        }, this, true);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function () {
        }, this, true);
        this.node.on(cc.Node.EventType.TOUCH_END, function () {
        }, this, true);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, function () {
        }, this, true);
    };
    ButtonClickEvent.prototype.onEnable = function () {
        this.mInteractive = true;
        this.mTimer = this.ClickInterval;
    };
    ButtonClickEvent.prototype.update = function (dt) {
        if (this.ClickInterval != -1) {
            if (!this.mInteractive) {
                this.mTimer -= dt;
                if (this.mTimer < 0) {
                    this.mInteractive = true;
                    this.mTimer = this.ClickInterval;
                }
            }
        }
    };
    ButtonClickEvent.prototype.onClick = function (callback) {
        // SoundMgr.playSfx(SoundMgr.Instance.SFX_CLICK);
        if (!this.mInteractive) {
            return;
        }
        this.mInteractive = false;
        SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
        callback && callback();
    };
    __decorate([
        property(cc.Float)
    ], ButtonClickEvent.prototype, "ClickInterval", void 0);
    ButtonClickEvent = __decorate([
        ccclass
    ], ButtonClickEvent);
    return ButtonClickEvent;
}(cc.Component));
exports.default = ButtonClickEvent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NvbW1vbi9CdXR0b25DbGlja0V2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUEwQztBQUVwQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE4QyxvQ0FBWTtJQUExRDtRQUFBLHFFQW9EQztRQWxEdUIsbUJBQWEsR0FBVyxHQUFHLENBQUMsQ0FBQyxvQkFBb0I7O0lBa0R6RSxDQUFDO0lBaERHLHNCQUFJLHlDQUFXO2FBQWYsY0FBbUIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQzthQUM5QyxVQUFnQixLQUFLLElBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7T0FETjtJQU05Qyx3Q0FBYSxHQUFiLFVBQWMsUUFBUTtRQUNsQixvREFBb0Q7UUFEeEQsaUJBY0M7UUFYRyw4QkFBOEI7UUFDOUIsTUFBTTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRTtZQUN0QyxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNCLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUU7UUFDM0MsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRTtRQUMxQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFO1FBQzdDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUVELG1DQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDckMsQ0FBQztJQUVELGlDQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsSUFBRyxJQUFJLENBQUMsYUFBYSxJQUFJLENBQUMsQ0FBQyxFQUFDO1lBQ3hCLElBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFDO2dCQUNsQixJQUFJLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQztnQkFDbEIsSUFBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBQztvQkFDZixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztvQkFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO2lCQUNwQzthQUNKO1NBQ0o7SUFDTCxDQUFDO0lBRU8sa0NBQU8sR0FBZixVQUFnQixRQUFrQjtRQUM5QixpREFBaUQ7UUFDakQsSUFBRyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUM7WUFDbEIsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsa0JBQVEsQ0FBQyxPQUFPLENBQUMsa0JBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDOUMsUUFBUSxJQUFJLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFqRG1CO1FBQW5CLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJEQUE2QjtJQUYvQixnQkFBZ0I7UUFEcEMsT0FBTztPQUNhLGdCQUFnQixDQW9EcEM7SUFBRCx1QkFBQztDQXBERCxBQW9EQyxDQXBENkMsRUFBRSxDQUFDLFNBQVMsR0FvRHpEO2tCQXBEb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNvdW5kTWdyIGZyb20gXCIuLi9jb21tb24vU291bmRNZ3JcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbkNsaWNrRXZlbnQgZXh0ZW5kcyBjYy5Db21wb25lbnQgXG57XG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KSBDbGlja0ludGVydmFsOiBudW1iZXIgPSAwLjU7IC8vLTE6IG9uZSB0aW1lIGNsaWNrXG5cbiAgICBnZXQgSW50ZXJhY3RpdmUoKXsgcmV0dXJuIHRoaXMubUludGVyYWN0aXZlOyB9XG4gICAgc2V0IEludGVyYWN0aXZlKHZhbHVlKXsgdGhpcy5tSW50ZXJhY3RpdmUgPSB2YWx1ZTsgfVxuXG4gICAgcHJpdmF0ZSBtSW50ZXJhY3RpdmU6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBtVGltZXI6IG51bWJlcjtcblxuICAgIHJlZ2lzdGVyRXZlbnQoY2FsbGJhY2spe1xuICAgICAgICAvLyB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoKSA9PiB7XG5cbiAgICAgICAgLy8gICAgIHRoaXMub25DbGljayhjYWxsYmFjayk7XG4gICAgICAgIC8vIH0pO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uQ2xpY2soY2FsbGJhY2spO1xuICAgICAgICB9LCB0aGlzLCB0cnVlKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsICgpID0+IHtcbiAgICAgICAgfSwgdGhpcywgdHJ1ZSk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsICgpID0+IHtcbiAgICAgICAgfSwgdGhpcywgdHJ1ZSk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsICgpID0+IHtcbiAgICAgICAgfSwgdGhpcywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgb25FbmFibGUoKXtcbiAgICAgICAgdGhpcy5tSW50ZXJhY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLm1UaW1lciA9IHRoaXMuQ2xpY2tJbnRlcnZhbDtcbiAgICB9XG5cbiAgICB1cGRhdGUoZHQpe1xuICAgICAgICBpZih0aGlzLkNsaWNrSW50ZXJ2YWwgIT0gLTEpe1xuICAgICAgICAgICAgaWYoIXRoaXMubUludGVyYWN0aXZlKXtcbiAgICAgICAgICAgICAgICB0aGlzLm1UaW1lciAtPSBkdDtcbiAgICAgICAgICAgICAgICBpZih0aGlzLm1UaW1lciA8IDApe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1JbnRlcmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubVRpbWVyID0gdGhpcy5DbGlja0ludGVydmFsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb25DbGljayhjYWxsYmFjazogRnVuY3Rpb24pe1xuICAgICAgICAvLyBTb3VuZE1nci5wbGF5U2Z4KFNvdW5kTWdyLkluc3RhbmNlLlNGWF9DTElDSyk7XG4gICAgICAgIGlmKCF0aGlzLm1JbnRlcmFjdGl2ZSl7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tSW50ZXJhY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgU291bmRNZ3IucGxheVNmeChTb3VuZE1nci5JbnN0YW5jZS5TRlhfQlVUVE9OKVxuICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xuICAgIH1cbn0iXX0=