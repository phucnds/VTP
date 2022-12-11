
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/src/Path/PathFollowObject.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3NyYy9QYXRoL1BhdGhGb2xsb3dPYmplY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsbURBQThDO0FBRTlDLCtCQUEwQjtBQUMxQixpQ0FBNEI7QUFFdEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBOEMsb0NBQVk7SUFBMUQ7UUFBQSxxRUFzR0M7UUFwR2EsVUFBSSxHQUFTLElBQUksQ0FBQztRQUVsQixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFNbEIsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFDN0IsZUFBUyxHQUFZLElBQUksQ0FBQztRQUMxQixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLFVBQUksR0FBVyxDQUFDLENBQUM7UUFDakIsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixlQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFDeEIsV0FBSyxHQUFXLG9CQUFVLENBQUMsVUFBVSxDQUFDOztJQW1GcEQsQ0FBQztJQS9GRyxzQkFBSSxtQ0FBSzthQUFULFVBQVUsS0FBYTtZQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUN2QixDQUFDOzs7T0FBQTtJQWFELHNCQUFJLHVDQUFTO2FBQWI7WUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDekIsQ0FBQzs7O09BQUE7SUFFRCxnQ0FBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUVELGlDQUFNLEdBQU47UUFD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LElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQTtpQkFDbEI7YUFDSjtTQUNKO1FBRUQsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDN0csSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELDhDQUFtQixHQUFuQjtJQUNBLENBQUM7SUFuR0Q7UUFEQyxRQUFRLENBQUMsY0FBSSxDQUFDO2tEQUNhO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7a0RBQ1U7SUFFL0I7UUFEQyxRQUFRLENBQUMsTUFBTSxDQUFDO21EQUNXO0lBTTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MERBQ3FCO0lBWnRCLGdCQUFnQjtRQURwQyxPQUFPO09BQ2EsZ0JBQWdCLENBc0dwQztJQUFELHVCQUFDO0NBdEdELEFBc0dDLENBdEc2QyxFQUFFLENBQUMsU0FBUyxHQXNHekQ7a0JBdEdvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEdhbWVEZWZpbmUgZnJvbSBcIi4uL2NvbW1vbi9HYW1lRGVmaW5lXCI7XG5pbXBvcnQgR2FtZU1nciwgeyBHYW1lU3RhdGVzIH0gZnJvbSBcIi4uL2dhbWUvR2FtZU1nclwiO1xuaW1wb3J0IFBhdGggZnJvbSBcIi4vUGF0aFwiO1xuaW1wb3J0IFBvaW50IGZyb20gXCIuL1BvaW50XCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXRoRm9sbG93T2JqZWN0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoUGF0aClcbiAgICBwcm90ZWN0ZWQgcGF0aDogUGF0aCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkJvb2xlYW4pXG4gICAgcHJvdGVjdGVkIGxvb3A6IEJvb2xlYW4gPSB0cnVlO1xuICAgIEBwcm9wZXJ0eShOdW1iZXIpXG4gICAgcHJvdGVjdGVkIGRlbGF5OiBudW1iZXIgPSAwO1xuICAgIHNldCBEZWxheShkZWxheTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuZGVsYXkgPSBkZWxheTtcbiAgICB9XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcm90ZWN0ZWQgY3VycmVudFBvaW50OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBwcm90ZWN0ZWQgbmV4dFBvaW50OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBwcm90ZWN0ZWQgZGlzdGFuY2U6IG51bWJlciA9IDA7XG4gICAgcHJvdGVjdGVkIHRpbWU6IG51bWJlciA9IDA7XG4gICAgcHJvdGVjdGVkIHRpbWVyOiBudW1iZXIgPSAwO1xuICAgIHByb3RlY3RlZCBpbml0aWF0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcm90ZWN0ZWQgcnVubmluZzogYm9vbGVhbiA9IHRydWU7XG4gICAgcHJvdGVjdGVkIHNwZWVkOiBudW1iZXIgPSBHYW1lRGVmaW5lLkdJRlRfU1BFRUQ7XG4gICAgcHJvdGVjdGVkIHBvczogY2MuVmVjMjtcblxuICAgIGdldCBJbml0aWF0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmluaXRpYXRlO1xuICAgIH1cblxuICAgIHBhdXNlKCkge1xuICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZXN1bWUoKSB7XG4gICAgICAgIHRoaXMucnVubmluZyA9IHRydWU7XG4gICAgfVxuXG4gICAgR2V0QmV6aWVyUG9zaXRpb24odDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IHAwID0gdGhpcy5jdXJyZW50UG9pbnQuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgY29uc3QgcDBGb3J3YXJkID0gdGhpcy5jdXJyZW50UG9pbnQuZ2V0Q29tcG9uZW50KFBvaW50KS5nZXRGb3J3YXJkVmVjdG9yKCkubXVsKHRoaXMucGF0aC5yZXZlcnNlID8gLTEgOiAxKTtcbiAgICAgICAgY29uc3QgcDEgPSBwMC5hZGQocDBGb3J3YXJkKTtcbiAgICAgICAgY29uc3QgcDMgPSB0aGlzLm5leHRQb2ludC5nZXRQb3NpdGlvbigpO1xuICAgICAgICBjb25zdCBwM0JhY2sgPSB0aGlzLmN1cnJlbnRQb2ludC5nZXRDb21wb25lbnQoUG9pbnQpLmdldEJhY2tWZWN0b3IoKS5tdWwodGhpcy5wYXRoLnJldmVyc2UgPyAtMSA6IDEpO1xuICAgICAgICBjb25zdCBwMiA9IHAzLnN1YihwM0JhY2spO1xuXG4gICAgICAgIGNvbnN0IGEgPSBwMC5tdWwoTWF0aC5wb3coMSAtIHQsIDMpKTtcbiAgICAgICAgY29uc3QgYiA9IHAxLm11bCgzICogTWF0aC5wb3coMSAtIHQsIDIpICogdCk7XG4gICAgICAgIGNvbnN0IGMgPSBwMi5tdWwoMyAqICgxIC0gdCkgKiBNYXRoLnBvdyh0LCAyKSk7XG4gICAgICAgIGNvbnN0IGQgPSBwMy5tdWwoTWF0aC5wb3codCwgMykpO1xuICAgICAgICByZXR1cm4gYS5hZGQoYikuYWRkKGMpLmFkZChkKTtcbiAgICB9XG5cbiAgICBpbml0aWF0ZSgpIHtcbiAgICAgICAgdGhpcy5pbml0aWF0ZWQgPSB0cnVlO1xuICAgICAgICBpZiAoIXRoaXMuY3VycmVudFBvaW50KSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQb2ludCA9IHRoaXMucGF0aC5nZXRTdGFydFBvaW50KCk7XG4gICAgICAgICAgICB0aGlzLnBvcyA9IHRoaXMuY3VycmVudFBvaW50LmdldFBvc2l0aW9uKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5uZXh0UG9pbnQgPSB0aGlzLnBhdGguZ2V0TmV4dFBvaW50KHRoaXMuY3VycmVudFBvaW50KTtcbiAgICAgICAgdGhpcy5kaXN0YW5jZSA9IHRoaXMubmV4dFBvaW50LnBvc2l0aW9uLnN1Yih0aGlzLmN1cnJlbnRQb2ludC5wb3NpdGlvbikubWFnKCk7XG4gICAgICAgIGNvbnN0IHBhc3NlZERpc3RhbmNlID0gdGhpcy5wb3Muc3ViKHRoaXMuY3VycmVudFBvaW50LmdldFBvc2l0aW9uKCkpLm1hZygpO1xuICAgICAgICB0aGlzLnRpbWUgPSBwYXNzZWREaXN0YW5jZSAvIHRoaXMuc3BlZWQ7XG4gICAgfVxuXG4gICAgaW5pdE5leHRQb2ludCgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50UG9pbnQgPSB0aGlzLm5leHRQb2ludDtcbiAgICAgICAgdGhpcy5uZXh0UG9pbnQgPSB0aGlzLnBhdGguZ2V0TmV4dFBvaW50KHRoaXMubmV4dFBvaW50KTtcbiAgICAgICAgdGhpcy5kaXN0YW5jZSA9IHRoaXMubmV4dFBvaW50LnBvc2l0aW9uLnN1Yih0aGlzLmN1cnJlbnRQb2ludC5wb3NpdGlvbikubWFnKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIGlmICghdGhpcy5ydW5uaW5nKSByZXR1cm47XG5cbiAgICAgICAgaWYgKCF0aGlzLmluaXRpYXRlZCkge1xuICAgICAgICAgICAgdGhpcy50aW1lciArPSBkdDtcbiAgICAgICAgICAgIGlmICh0aGlzLnRpbWVyIDwgdGhpcy5kZWxheSkge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRpYXRlKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50aW1lICs9IGR0O1xuICAgICAgICBpZiAodGhpcy50aW1lID4gdGhpcy5kaXN0YW5jZSAvIHRoaXMuc3BlZWQpIHtcbiAgICAgICAgICAgIHRoaXMudGltZSA9IDA7XG4gICAgICAgICAgICB0aGlzLmluaXROZXh0UG9pbnQoKVxuICAgICAgICAgICAgaWYgKHRoaXMubmV4dFBvaW50ID09PSB0aGlzLnBhdGguZ2V0U3RhcnRQb2ludCgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wbGV0ZUxhcENhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubG9vcCkge1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhdGUoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMuR2V0QmV6aWVyUG9zaXRpb24odGhpcy50aW1lIC8gKHRoaXMuZGlzdGFuY2UgLyB0aGlzLnNwZWVkKSkuc3ViKHRoaXMucG9zKS5ub3JtYWxpemUoKTtcbiAgICAgICAgdGhpcy5wb3MgPSB0aGlzLnBvcy5hZGQoZGlyZWN0aW9uLm11bCh0aGlzLnNwZWVkKS5tdWwoZHQpKTtcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMucG9zKTtcbiAgICB9XG5cbiAgICBjb21wbGV0ZUxhcENhbGxiYWNrKCkge1xuICAgIH1cbn1cbiJdfQ==