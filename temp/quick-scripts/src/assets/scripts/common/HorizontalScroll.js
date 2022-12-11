"use strict";
cc._RF.push(module, '0a048ZjAyVOrLkzbUbUjoM4', 'HorizontalScroll');
// scripts/common/HorizontalScroll.ts

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
var HorizontalScroll = /** @class */ (function (_super) {
    __extends(HorizontalScroll, _super);
    function HorizontalScroll() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mainScroll = null;
        // LIFE-CYCLE CALLBACKS:
        _this.isVerticalMoving = false;
        return _this;
        // update (dt) {}
    }
    HorizontalScroll.self = function () {
        return this;
    };
    // private _self = this
    HorizontalScroll.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this, true);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMoved, this, true);
        this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnded, this, true);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this._onTouchCancelled, this, true);
        var scroll = this.getComponent(cc.ScrollView);
        // scroll._onTouchBegan = this.overrideTouchBegan.bind(scroll)
    };
    HorizontalScroll.prototype.start = function () {
    };
    HorizontalScroll.prototype.touchStart = function (event, captureListeners) {
        // this.isTouchDown = true
    };
    HorizontalScroll.prototype._onTouchMoved = function (event, captureListeners) {
        var touch = event.touch;
        var deltaY = Math.abs(touch.getLocation().y - touch.getStartLocation().y);
        var deltaX = Math.abs(touch.getLocation().x - touch.getStartLocation().x);
        if (deltaX > deltaY && deltaX > 7) {
            this.isVerticalMoving = false;
            return;
        }
        if (deltaY > 7 && !this.isVerticalMoving) {
            this.isVerticalMoving = true;
            if (captureListeners && captureListeners.length >= 2) {
                captureListeners.shift();
                captureListeners.unshift(this.mainScroll.node);
            }
            this.mainScroll._onTouchBegan(event, captureListeners);
        }
        else if (this.isVerticalMoving && deltaY > 7) {
            // event.stopPropagation();
            if (captureListeners && captureListeners.length >= 2) {
                captureListeners.shift();
                captureListeners.unshift(this.mainScroll.node);
            }
            this.mainScroll._onTouchMoved(event, captureListeners);
        }
    };
    HorizontalScroll.prototype._onTouchCancelled = function (event, captureListeners) {
        if (this.isVerticalMoving) {
            if (captureListeners && captureListeners.length >= 2) {
                captureListeners.shift();
                captureListeners.unshift(this.mainScroll.node);
            }
            this.mainScroll._onTouchCancelled(event, captureListeners);
        }
        // this.isVerticalMoving = false
    };
    HorizontalScroll.prototype._onTouchEnded = function (event, captureListeners) {
        if (this.isVerticalMoving) {
            if (captureListeners && captureListeners.length >= 2) {
                captureListeners.shift();
                captureListeners.unshift(this.mainScroll.node);
            }
            this.mainScroll._onTouchEnded(event, captureListeners);
        }
        this.isVerticalMoving = false;
    };
    __decorate([
        property(cc.ScrollView)
    ], HorizontalScroll.prototype, "mainScroll", void 0);
    HorizontalScroll = __decorate([
        ccclass
    ], HorizontalScroll);
    return HorizontalScroll;
}(cc.Component));
exports.default = HorizontalScroll;

cc._RF.pop();