
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/src/game/Gift.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ea119r90E1JDpFYXmoGfsvj', 'Gift');
// scripts/src/game/Gift.ts

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
var FrameMgr_1 = require("../../common/FrameMgr");
var Helper_1 = require("../../utils/Helper");
var GameDefine_1 = require("../common/GameDefine");
var utils_1 = require("../common/utils");
var PathFollowObject_1 = require("../Path/PathFollowObject");
var GameMgr_1 = require("./GameMgr");
var GiftsMgr_1 = require("./GiftsMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Gift = /** @class */ (function (_super) {
    __extends(Gift, _super);
    function Gift() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.container = null;
        _this.topView = null;
        _this.cover = null;
        _this.ui = null;
        _this.selectPoint = null;
        _this.btnClose = null;
        _this.sprite = null;
        _this.isChosen = false;
        _this.clickable = true;
        return _this;
    }
    Gift.prototype.onLoad = function () {
        // Helper.registerButtonEvent(this.sprite.node, () => {
        //     if (!this.clickable) return;
        //     GameMgr.Instance.setGameState(GameStates.OPEN_BOX);
        var _this = this;
        //     this.isChosen = true;
        //     this.clickable = false;
        //     this.node.parent = this.topView;
        //     cc.tween(this.cover)
        //         .set({ opacity: 0, active: true })
        //         .to(
        //             GameDefine.GIFT_CHOSEN_ANIM_TIME,
        //             { opacity: 170 },
        //             { easing: 'quartOut' }
        //         )
        //         .start();
        //     cc.tween(this.node)
        //         .set({ scale: 1 })
        //         .to(
        //             GameDefine.GIFT_CHOSEN_ANIM_TIME,
        //             { scale: GameDefine.GIFT_CHOSEN_SCALE, position: cc.Vec3.ZERO },
        //             { easing: 'quartOut' }
        //         )
        //         .call(() => {
        //             this.ui.active = true;
        //         })
        //         .start();
        // })
        Helper_1.default.registerButtonEvent(this.btnClose, function () {
            GameMgr_1.default.Instance.setGameState(GameMgr_1.GameStates.PLAYING);
            _this.close();
        });
        this.init();
    };
    Gift.prototype.pickSelf = function () {
        GameMgr_1.default.Instance.setGameState(GameMgr_1.GameStates.SELECT);
        this.isChosen = true;
        this.clickable = false;
    };
    Gift.prototype.init = function () {
        this.isChosen = false;
        this.clickable = true;
        this.cover.active = false;
        this.sprite.node.active = true;
        this.node.scale = 1;
        this.sprite.spriteFrame = FrameMgr_1.default.Instance.GIFT_FRAMES[utils_1.randomInt(0, FrameMgr_1.default.Instance.GIFT_FRAMES.length)];
    };
    Gift.prototype.setSpeed = function (speed) {
        var passedDistance = this.speed * this.time;
        this.speed = speed;
        this.time = this.pos ? passedDistance / this.speed : 0;
    };
    Gift.prototype.update = function (dt) {
        var _this = this;
        if (!this.running)
            return;
        if (GameMgr_1.default.Instance.getGameState() !== GameMgr_1.GameStates.PLAYING &&
            GameMgr_1.default.Instance.getGameState() !== GameMgr_1.GameStates.ROLLING &&
            GameMgr_1.default.Instance.getGameState() !== GameMgr_1.GameStates.SELECT) {
            return;
        }
        else {
            if (!this.initiated) {
                // this.timer += dt;
                // if ((this.timer * this.speed) < this.delay) {
                //     return
                // } else {
                this.initiate();
                // };
            }
        }
        if (GameMgr_1.default.Instance.getGameState() === GameMgr_1.GameStates.ROLLING) {
            if (this.speed > GameDefine_1.default.GIFT_SPEED_MIN) {
                this.setSpeed(this.speed - GameDefine_1.default.GIFT_BREAK_A * dt * dt);
            }
            else {
                this.setSpeed(GameDefine_1.default.GIFT_SPEED_MIN);
                GiftsMgr_1.default.Instance.choose();
            }
        }
        else if (GameMgr_1.default.Instance.getGameState() === GameMgr_1.GameStates.PLAYING) {
            this.setSpeed(GameDefine_1.default.GIFT_SPEED);
        }
        ;
        this.time += dt;
        if (this.time > this.distance / this.speed) {
            this.time = 0;
            this.initNextPoint();
            if (this.nextPoint === this.path.getStartPoint()) {
                this.completeLapCallback();
            }
        }
        var direction = this.GetBezierPosition(this.time / (this.distance / this.speed)).sub(this.pos).normalize();
        this.pos = this.pos.add(direction.mul(this.speed).mul(dt));
        this.node.setPosition(this.pos);
        if (this.isChosen && GameMgr_1.default.Instance.getGameState() === GameMgr_1.GameStates.SELECT) {
            if (this.currentPoint === this.selectPoint) {
                GameMgr_1.default.Instance.setGameState(GameMgr_1.GameStates.PICK_UP);
                setTimeout(function () {
                    _this.isChosen = true;
                    _this.clickable = false;
                    _this.node.parent = _this.topView;
                    cc.tween(_this.cover)
                        .set({ opacity: 0, active: true })
                        .to(GameDefine_1.default.GIFT_CHOSEN_ANIM_TIME, { opacity: 170 }, { easing: 'quartOut' })
                        .start();
                    cc.tween(_this.node)
                        .set({ scale: 1 })
                        .to(GameDefine_1.default.GIFT_CHOSEN_ANIM_TIME, { scale: GameDefine_1.default.GIFT_CHOSEN_SCALE, position: cc.Vec3.ZERO }, { easing: 'quartOut' })
                        .call(function () {
                        _this.ui.active = true;
                    })
                        .start();
                }, 1000);
            }
        }
    };
    Gift.prototype.completeLapCallback = function () {
        if (!this.loop) {
            this.initiate();
        }
        if (this.isChosen) {
            return;
        }
        ;
        this.sprite.node.active = true;
        this.sprite.spriteFrame = FrameMgr_1.default.Instance.GIFT_FRAMES[utils_1.randomInt(0, FrameMgr_1.default.Instance.GIFT_FRAMES.length)];
    };
    Gift.prototype.close = function () {
        this.node.parent = this.container;
        this.cover.active = false;
        this.ui.active = false;
        this.sprite.node.active = false;
        this.node.scale = 1;
        this.isChosen = false;
        this.clickable = true;
    };
    __decorate([
        property(cc.Node)
    ], Gift.prototype, "container", void 0);
    __decorate([
        property(cc.Node)
    ], Gift.prototype, "topView", void 0);
    __decorate([
        property(cc.Node)
    ], Gift.prototype, "cover", void 0);
    __decorate([
        property(cc.Node)
    ], Gift.prototype, "ui", void 0);
    __decorate([
        property(cc.Node)
    ], Gift.prototype, "selectPoint", void 0);
    __decorate([
        property(cc.Node)
    ], Gift.prototype, "btnClose", void 0);
    __decorate([
        property(cc.Sprite)
    ], Gift.prototype, "sprite", void 0);
    Gift = __decorate([
        ccclass
    ], Gift);
    return Gift;
}(PathFollowObject_1.default));
exports.default = Gift;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3NyYy9nYW1lL0dpZnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0RBQTZDO0FBQzdDLDZDQUF3QztBQUN4QyxtREFBOEM7QUFDOUMseUNBQTRDO0FBQzVDLDZEQUF3RDtBQUN4RCxxQ0FBZ0Q7QUFDaEQsdUNBQWlDO0FBRTNCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWtDLHdCQUFnQjtJQUFsRDtRQUFBLHFFQWlMQztRQS9LVSxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixRQUFFLEdBQVksSUFBSSxDQUFDO1FBRW5CLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsWUFBTSxHQUFjLElBQUksQ0FBQztRQUV4QixjQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGVBQVMsR0FBRyxJQUFJLENBQUM7O0lBZ0s3QixDQUFDO0lBOUphLHFCQUFNLEdBQWhCO1FBQ0ksdURBQXVEO1FBQ3ZELG1DQUFtQztRQUNuQywwREFBMEQ7UUFIOUQsaUJBcUNDO1FBaENHLDRCQUE0QjtRQUM1Qiw4QkFBOEI7UUFDOUIsdUNBQXVDO1FBRXZDLDJCQUEyQjtRQUMzQiw2Q0FBNkM7UUFDN0MsZUFBZTtRQUNmLGdEQUFnRDtRQUNoRCxnQ0FBZ0M7UUFDaEMscUNBQXFDO1FBQ3JDLFlBQVk7UUFDWixvQkFBb0I7UUFHcEIsMEJBQTBCO1FBQzFCLDZCQUE2QjtRQUM3QixlQUFlO1FBQ2YsZ0RBQWdEO1FBQ2hELCtFQUErRTtRQUMvRSxxQ0FBcUM7UUFDckMsWUFBWTtRQUNaLHdCQUF3QjtRQUN4QixxQ0FBcUM7UUFDckMsYUFBYTtRQUNiLG9CQUFv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SUFFaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt3Q0FDWTtJQWRmLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0FpTHhCO0lBQUQsV0FBQztDQWpMRCxBQWlMQyxDQWpMaUMsMEJBQWdCLEdBaUxqRDtrQkFqTG9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRnJhbWVNZ3IgZnJvbSBcIi4uLy4uL2NvbW1vbi9GcmFtZU1nclwiO1xuaW1wb3J0IEhlbHBlciBmcm9tIFwiLi4vLi4vdXRpbHMvSGVscGVyXCI7XG5pbXBvcnQgR2FtZURlZmluZSBmcm9tIFwiLi4vY29tbW9uL0dhbWVEZWZpbmVcIjtcbmltcG9ydCB7IHJhbmRvbUludCB9IGZyb20gXCIuLi9jb21tb24vdXRpbHNcIjtcbmltcG9ydCBQYXRoRm9sbG93T2JqZWN0IGZyb20gXCIuLi9QYXRoL1BhdGhGb2xsb3dPYmplY3RcIjtcbmltcG9ydCBHYW1lTWdyLCB7IEdhbWVTdGF0ZXMgfSBmcm9tIFwiLi9HYW1lTWdyXCI7XG5pbXBvcnQgR2lmdE1nciBmcm9tIFwiLi9HaWZ0c01nclwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2lmdCBleHRlbmRzIFBhdGhGb2xsb3dPYmplY3Qge1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHB1YmxpYyBjb250YWluZXI6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHB1YmxpYyB0b3BWaWV3OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwdWJsaWMgY292ZXI6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHB1YmxpYyB1aTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHVibGljIHNlbGVjdFBvaW50OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwdWJsaWMgYnRuQ2xvc2U6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgcHVibGljIHNwcml0ZTogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIHByaXZhdGUgaXNDaG9zZW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIGNsaWNrYWJsZSA9IHRydWU7XG5cbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xuICAgICAgICAvLyBIZWxwZXIucmVnaXN0ZXJCdXR0b25FdmVudCh0aGlzLnNwcml0ZS5ub2RlLCAoKSA9PiB7XG4gICAgICAgIC8vICAgICBpZiAoIXRoaXMuY2xpY2thYmxlKSByZXR1cm47XG4gICAgICAgIC8vICAgICBHYW1lTWdyLkluc3RhbmNlLnNldEdhbWVTdGF0ZShHYW1lU3RhdGVzLk9QRU5fQk9YKTtcblxuICAgICAgICAvLyAgICAgdGhpcy5pc0Nob3NlbiA9IHRydWU7XG4gICAgICAgIC8vICAgICB0aGlzLmNsaWNrYWJsZSA9IGZhbHNlO1xuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLnBhcmVudCA9IHRoaXMudG9wVmlldztcblxuICAgICAgICAvLyAgICAgY2MudHdlZW4odGhpcy5jb3ZlcilcbiAgICAgICAgLy8gICAgICAgICAuc2V0KHsgb3BhY2l0eTogMCwgYWN0aXZlOiB0cnVlIH0pXG4gICAgICAgIC8vICAgICAgICAgLnRvKFxuICAgICAgICAvLyAgICAgICAgICAgICBHYW1lRGVmaW5lLkdJRlRfQ0hPU0VOX0FOSU1fVElNRSxcbiAgICAgICAgLy8gICAgICAgICAgICAgeyBvcGFjaXR5OiAxNzAgfSxcbiAgICAgICAgLy8gICAgICAgICAgICAgeyBlYXNpbmc6ICdxdWFydE91dCcgfVxuICAgICAgICAvLyAgICAgICAgIClcbiAgICAgICAgLy8gICAgICAgICAuc3RhcnQoKTtcblxuXG4gICAgICAgIC8vICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXG4gICAgICAgIC8vICAgICAgICAgLnNldCh7IHNjYWxlOiAxIH0pXG4gICAgICAgIC8vICAgICAgICAgLnRvKFxuICAgICAgICAvLyAgICAgICAgICAgICBHYW1lRGVmaW5lLkdJRlRfQ0hPU0VOX0FOSU1fVElNRSxcbiAgICAgICAgLy8gICAgICAgICAgICAgeyBzY2FsZTogR2FtZURlZmluZS5HSUZUX0NIT1NFTl9TQ0FMRSwgcG9zaXRpb246IGNjLlZlYzMuWkVSTyB9LFxuICAgICAgICAvLyAgICAgICAgICAgICB7IGVhc2luZzogJ3F1YXJ0T3V0JyB9XG4gICAgICAgIC8vICAgICAgICAgKVxuICAgICAgICAvLyAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy51aS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAvLyAgICAgICAgIH0pXG4gICAgICAgIC8vICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIC8vIH0pXG5cbiAgICAgICAgSGVscGVyLnJlZ2lzdGVyQnV0dG9uRXZlbnQodGhpcy5idG5DbG9zZSwgKCkgPT4ge1xuICAgICAgICAgICAgR2FtZU1nci5JbnN0YW5jZS5zZXRHYW1lU3RhdGUoR2FtZVN0YXRlcy5QTEFZSU5HKTtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBwaWNrU2VsZigpIHtcbiAgICAgICAgR2FtZU1nci5JbnN0YW5jZS5zZXRHYW1lU3RhdGUoR2FtZVN0YXRlcy5TRUxFQ1QpO1xuICAgICAgICB0aGlzLmlzQ2hvc2VuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jbGlja2FibGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmlzQ2hvc2VuID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2xpY2thYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jb3Zlci5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zcHJpdGUubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLm5vZGUuc2NhbGUgPSAxO1xuICAgICAgICB0aGlzLnNwcml0ZS5zcHJpdGVGcmFtZSA9IEZyYW1lTWdyLkluc3RhbmNlLkdJRlRfRlJBTUVTW3JhbmRvbUludCgwLCBGcmFtZU1nci5JbnN0YW5jZS5HSUZUX0ZSQU1FUy5sZW5ndGgpXTtcbiAgICB9XG5cbiAgICBzZXRTcGVlZChzcGVlZDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IHBhc3NlZERpc3RhbmNlID0gdGhpcy5zcGVlZCAqIHRoaXMudGltZTtcbiAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xuICAgICAgICB0aGlzLnRpbWUgPSB0aGlzLnBvcyA/IHBhc3NlZERpc3RhbmNlIC8gdGhpcy5zcGVlZCA6IDA7XG4gICAgfVxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICBpZiAoIXRoaXMucnVubmluZykgcmV0dXJuO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBHYW1lTWdyLkluc3RhbmNlLmdldEdhbWVTdGF0ZSgpICE9PSBHYW1lU3RhdGVzLlBMQVlJTkcgJiZcbiAgICAgICAgICAgIEdhbWVNZ3IuSW5zdGFuY2UuZ2V0R2FtZVN0YXRlKCkgIT09IEdhbWVTdGF0ZXMuUk9MTElORyAmJlxuICAgICAgICAgICAgR2FtZU1nci5JbnN0YW5jZS5nZXRHYW1lU3RhdGUoKSAhPT0gR2FtZVN0YXRlcy5TRUxFQ1RcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaW5pdGlhdGVkKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy50aW1lciArPSBkdDtcbiAgICAgICAgICAgICAgICAvLyBpZiAoKHRoaXMudGltZXIgKiB0aGlzLnNwZWVkKSA8IHRoaXMuZGVsYXkpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRpYXRlKCk7XG4gICAgICAgICAgICAgICAgLy8gfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChHYW1lTWdyLkluc3RhbmNlLmdldEdhbWVTdGF0ZSgpID09PSBHYW1lU3RhdGVzLlJPTExJTkcpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNwZWVkID4gR2FtZURlZmluZS5HSUZUX1NQRUVEX01JTikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3BlZWQodGhpcy5zcGVlZCAtIEdhbWVEZWZpbmUuR0lGVF9CUkVBS19BICogZHQgKiBkdCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3BlZWQoR2FtZURlZmluZS5HSUZUX1NQRUVEX01JTik7XG4gICAgICAgICAgICAgICAgR2lmdE1nci5JbnN0YW5jZS5jaG9vc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChHYW1lTWdyLkluc3RhbmNlLmdldEdhbWVTdGF0ZSgpID09PSBHYW1lU3RhdGVzLlBMQVlJTkcpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3BlZWQoR2FtZURlZmluZS5HSUZUX1NQRUVEKTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnRpbWUgKz0gZHQ7XG4gICAgICAgIGlmICh0aGlzLnRpbWUgPiB0aGlzLmRpc3RhbmNlIC8gdGhpcy5zcGVlZCkge1xuICAgICAgICAgICAgdGhpcy50aW1lID0gMDtcbiAgICAgICAgICAgIHRoaXMuaW5pdE5leHRQb2ludCgpXG4gICAgICAgICAgICBpZiAodGhpcy5uZXh0UG9pbnQgPT09IHRoaXMucGF0aC5nZXRTdGFydFBvaW50KCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlTGFwQ2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMuR2V0QmV6aWVyUG9zaXRpb24odGhpcy50aW1lIC8gKHRoaXMuZGlzdGFuY2UgLyB0aGlzLnNwZWVkKSkuc3ViKHRoaXMucG9zKS5ub3JtYWxpemUoKTtcbiAgICAgICAgdGhpcy5wb3MgPSB0aGlzLnBvcy5hZGQoZGlyZWN0aW9uLm11bCh0aGlzLnNwZWVkKS5tdWwoZHQpKTtcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMucG9zKTtcbiAgICAgICAgaWYgKHRoaXMuaXNDaG9zZW4gJiYgR2FtZU1nci5JbnN0YW5jZS5nZXRHYW1lU3RhdGUoKSA9PT0gR2FtZVN0YXRlcy5TRUxFQ1QpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRQb2ludCA9PT0gdGhpcy5zZWxlY3RQb2ludCkge1xuICAgICAgICAgICAgICAgIEdhbWVNZ3IuSW5zdGFuY2Uuc2V0R2FtZVN0YXRlKEdhbWVTdGF0ZXMuUElDS19VUCk7XG5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0Nob3NlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xpY2thYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQgPSB0aGlzLnRvcFZpZXc7XG5cbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jb3ZlcilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZXQoeyBvcGFjaXR5OiAwLCBhY3RpdmU6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50byhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHYW1lRGVmaW5lLkdJRlRfQ0hPU0VOX0FOSU1fVElNRSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG9wYWNpdHk6IDE3MCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgZWFzaW5nOiAncXVhcnRPdXQnIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNldCh7IHNjYWxlOiAxIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAudG8oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR2FtZURlZmluZS5HSUZUX0NIT1NFTl9BTklNX1RJTUUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzY2FsZTogR2FtZURlZmluZS5HSUZUX0NIT1NFTl9TQ0FMRSwgcG9zaXRpb246IGNjLlZlYzMuWkVSTyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgZWFzaW5nOiAncXVhcnRPdXQnIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgfSwgMTAwMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBsZXRlTGFwQ2FsbGJhY2soKSB7XG4gICAgICAgIGlmICghdGhpcy5sb29wKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYXRlKClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmlzQ2hvc2VuKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnNwcml0ZS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuc3ByaXRlLnNwcml0ZUZyYW1lID0gRnJhbWVNZ3IuSW5zdGFuY2UuR0lGVF9GUkFNRVNbcmFuZG9tSW50KDAsIEZyYW1lTWdyLkluc3RhbmNlLkdJRlRfRlJBTUVTLmxlbmd0aCldO1xuICAgIH1cblxuICAgIGNsb3NlKCkge1xuICAgICAgICB0aGlzLm5vZGUucGFyZW50ID0gdGhpcy5jb250YWluZXI7XG4gICAgICAgIHRoaXMuY292ZXIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudWkuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3ByaXRlLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IDE7XG4gICAgICAgIHRoaXMuaXNDaG9zZW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jbGlja2FibGUgPSB0cnVlO1xuICAgIH1cbn1cbiJdfQ==