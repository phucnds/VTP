"use strict";
cc._RF.push(module, '92f12UCSg1BNIcqMLCZFzf7', 'PathFollowObject');
// scripts/src/Path/PathFollowObject.ts

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
var GameDefine_1 = require("../common/GameDefine");
var Path_1 = require("./Path");
var Point_1 = require("./Point");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PathFollowObject = /** @class */ (function (_super) {
    __extends(PathFollowObject, _super);
    function PathFollowObject() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.path = null;
        _this.loop = true;
        _this.delay = 0;
        _this.currentPoint = null;
        _this.nextPoint = null;
        _this.distance = 0;
        _this.time = 0;
        _this.timer = 0;
        _this.initiated = false;
        _this.running = true;
        _this.speed = GameDefine_1.default.GIFT_SPEED;
        return _this;
    }
    Object.defineProperty(PathFollowObject.prototype, "Delay", {
        set: function (delay) {
            this.delay = delay;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PathFollowObject.prototype, "Initiated", {
        get: function () {
            return this.initiate;
        },
        enumerable: false,
        configurable: true
    });
    PathFollowObject.prototype.pause = function () {
        this.running = false;
    };
    PathFollowObject.prototype.resume = function () {
        this.running = true;
    };
    PathFollowObject.prototype.GetBezierPosition = function (t) {
        var p0 = this.currentPoint.getPosition();
        var p0Forward = this.currentPoint.getComponent(Point_1.default).getForwardVector().mul(this.path.reverse ? -1 : 1);
        var p1 = p0.add(p0Forward);
        var p3 = this.nextPoint.getPosition();
        var p3Back = this.currentPoint.getComponent(Point_1.default).getBackVector().mul(this.path.reverse ? -1 : 1);
        var p2 = p3.sub(p3Back);
        var a = p0.mul(Math.pow(1 - t, 3));
        var b = p1.mul(3 * Math.pow(1 - t, 2) * t);
        var c = p2.mul(3 * (1 - t) * Math.pow(t, 2));
        var d = p3.mul(Math.pow(t, 3));
        return a.add(b).add(c).add(d);
    };
    PathFollowObject.prototype.initiate = function () {
        this.initiated = true;
        if (!this.currentPoint) {
            this.currentPoint = this.path.getStartPoint();
            this.pos = this.currentPoint.getPosition();
        }
        else {
            this.pos = this.node.getPosition();
        }
        this.nextPoint = this.path.getNextPoint(this.currentPoint);
        this.distance = this.nextPoint.position.sub(this.currentPoint.position).mag();
        var passedDistance = this.pos.sub(this.currentPoint.getPosition()).mag();
        this.time = passedDistance / this.speed;
    };
    PathFollowObject.prototype.initNextPoint = function () {
        this.currentPoint = this.nextPoint;
        this.nextPoint = this.path.getNextPoint(this.nextPoint);
        this.distance = this.nextPoint.position.sub(this.currentPoint.position).mag();
    };
    PathFollowObject.prototype.update = function (dt) {
        if (!this.running)
            return;
        if (!this.initiated) {
            this.timer += dt;
            if (this.timer < this.delay) {
                return;
            }
            else {
                this.initiate();
            }
            ;
        }
        this.time += dt;
        if (this.time > this.distance / this.speed) {
            this.time = 0;
            this.initNextPoint();
            if (this.nextPoint === this.path.getStartPoint()) {
                this.completeLapCallback();
                if (this.loop) {
                }
                else {
                    this.initiate();
                }
            }
        }
        var direction = this.GetBezierPosition(this.time / (this.distance / this.speed)).sub(this.pos).normalize();
        this.pos = this.pos.add(direction.mul(this.speed).mul(dt));
        this.node.setPosition(this.pos);
    };
    PathFollowObject.prototype.completeLapCallback = function () {
    };
    __decorate([
        property(Path_1.default)
    ], PathFollowObject.prototype, "path", void 0);
    __decorate([
        property(cc.Boolean)
    ], PathFollowObject.prototype, "loop", void 0);
    __decorate([
        property(Number)
    ], PathFollowObject.prototype, "delay", void 0);
    __decorate([
        property(cc.Node)
    ], PathFollowObject.prototype, "currentPoint", void 0);
    PathFollowObject = __decorate([
        ccclass
    ], PathFollowObject);
    return PathFollowObject;
}(cc.Component));
exports.default = PathFollowObject;

cc._RF.pop();