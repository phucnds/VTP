"use strict";
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