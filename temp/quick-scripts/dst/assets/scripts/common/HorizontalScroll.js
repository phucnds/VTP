
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/common/HorizontalScroll.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NvbW1vbi9Ib3Jpem9udGFsU2Nyb2xsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQThDLG9DQUFZO0lBQTFEO1FBQUEscUVBNEZDO1FBekY0QixnQkFBVSxHQUFrQixJQUFJLENBQUE7UUFDekQsd0JBQXdCO1FBQ2pCLHNCQUFnQixHQUFZLEtBQUssQ0FBQTs7UUFzRnhDLGlCQUFpQjtJQUNyQixDQUFDO0lBdEZVLHFCQUFJLEdBQVg7UUFFSSxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsdUJBQXVCO0lBRXZCLGlDQUFNLEdBQU47UUFFSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDeEUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQzFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUV6RSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFD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Q0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFBO2FBQ2pEO1lBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLENBQUM7U0FDMUQ7UUFDRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFBO0lBQ2pDLENBQUM7SUF0RndCO1FBQXhCLFFBQVEsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDO3dEQUFpQztJQUh4QyxnQkFBZ0I7UUFEcEMsT0FBTztPQUNhLGdCQUFnQixDQTRGcEM7SUFBRCx1QkFBQztDQTVGRCxBQTRGQyxDQTVGNkMsRUFBRSxDQUFDLFNBQVMsR0E0RnpEO2tCQTVGb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb3Jpem9udGFsU2Nyb2xsIGV4dGVuZHMgY2MuQ29tcG9uZW50XG57XG5cbiAgICBAcHJvcGVydHkoY2MuU2Nyb2xsVmlldykgbWFpblNjcm9sbDogY2MuU2Nyb2xsVmlldyA9IG51bGxcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcbiAgICBwdWJsaWMgaXNWZXJ0aWNhbE1vdmluZzogYm9vbGVhbiA9IGZhbHNlXG4gICAgc3RhdGljIHNlbGYoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gcHJpdmF0ZSBfc2VsZiA9IHRoaXNcblxuICAgIG9uTG9hZCgpXG4gICAge1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMudG91Y2hTdGFydCwgdGhpcywgdHJ1ZSlcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMuX29uVG91Y2hNb3ZlZCwgdGhpcywgdHJ1ZSlcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5fb25Ub3VjaEVuZGVkLCB0aGlzLCB0cnVlKVxuXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMuX29uVG91Y2hDYW5jZWxsZWQsIHRoaXMsIHRydWUpXG4gICAgICAgIGxldCBzY3JvbGwgPSB0aGlzLmdldENvbXBvbmVudChjYy5TY3JvbGxWaWV3KVxuICAgICAgICAvLyBzY3JvbGwuX29uVG91Y2hCZWdhbiA9IHRoaXMub3ZlcnJpZGVUb3VjaEJlZ2FuLmJpbmQoc2Nyb2xsKVxuICAgIH1cblxuICAgIHN0YXJ0KClcbiAgICB7XG5cbiAgICB9XG4gICAgdG91Y2hTdGFydChldmVudCwgY2FwdHVyZUxpc3RlbmVycylcbiAgICB7XG5cbiAgICAgICAgLy8gdGhpcy5pc1RvdWNoRG93biA9IHRydWVcbiAgICB9XG4gICAgX29uVG91Y2hNb3ZlZChldmVudCwgY2FwdHVyZUxpc3RlbmVycylcbiAgICB7XG4gICAgICAgIHZhciB0b3VjaCA9IGV2ZW50LnRvdWNoO1xuICAgICAgICB2YXIgZGVsdGFZID0gTWF0aC5hYnModG91Y2guZ2V0TG9jYXRpb24oKS55IC0gdG91Y2guZ2V0U3RhcnRMb2NhdGlvbigpLnkpO1xuICAgICAgICB2YXIgZGVsdGFYID0gTWF0aC5hYnModG91Y2guZ2V0TG9jYXRpb24oKS54IC0gdG91Y2guZ2V0U3RhcnRMb2NhdGlvbigpLngpO1xuICAgICAgICBpZihkZWx0YVggPiBkZWx0YVkgJiYgZGVsdGFYID4gNylcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5pc1ZlcnRpY2FsTW92aW5nID0gZmFsc2VcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVsdGFZID4gNyAmJiAhdGhpcy5pc1ZlcnRpY2FsTW92aW5nKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmlzVmVydGljYWxNb3ZpbmcgPSB0cnVlXG4gICAgICAgICAgICBpZiAoY2FwdHVyZUxpc3RlbmVycyAmJiBjYXB0dXJlTGlzdGVuZXJzLmxlbmd0aCA+PSAyKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNhcHR1cmVMaXN0ZW5lcnMuc2hpZnQoKVxuICAgICAgICAgICAgICAgIGNhcHR1cmVMaXN0ZW5lcnMudW5zaGlmdCh0aGlzLm1haW5TY3JvbGwubm9kZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubWFpblNjcm9sbC5fb25Ub3VjaEJlZ2FuKGV2ZW50LCBjYXB0dXJlTGlzdGVuZXJzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmlzVmVydGljYWxNb3ZpbmcgJiYgZGVsdGFZID4gNylcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBpZiAoY2FwdHVyZUxpc3RlbmVycyAmJiBjYXB0dXJlTGlzdGVuZXJzLmxlbmd0aCA+PSAyKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNhcHR1cmVMaXN0ZW5lcnMuc2hpZnQoKVxuICAgICAgICAgICAgICAgIGNhcHR1cmVMaXN0ZW5lcnMudW5zaGlmdCh0aGlzLm1haW5TY3JvbGwubm9kZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubWFpblNjcm9sbC5fb25Ub3VjaE1vdmVkKGV2ZW50LCBjYXB0dXJlTGlzdGVuZXJzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfb25Ub3VjaENhbmNlbGxlZChldmVudCwgY2FwdHVyZUxpc3RlbmVycylcbiAgICB7XG4gICAgICAgIGlmKHRoaXMuaXNWZXJ0aWNhbE1vdmluZylcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKGNhcHR1cmVMaXN0ZW5lcnMgJiYgY2FwdHVyZUxpc3RlbmVycy5sZW5ndGggPj0gMilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjYXB0dXJlTGlzdGVuZXJzLnNoaWZ0KClcbiAgICAgICAgICAgICAgICBjYXB0dXJlTGlzdGVuZXJzLnVuc2hpZnQodGhpcy5tYWluU2Nyb2xsLm5vZGUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm1haW5TY3JvbGwuX29uVG91Y2hDYW5jZWxsZWQoZXZlbnQsIGNhcHR1cmVMaXN0ZW5lcnMpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMuaXNWZXJ0aWNhbE1vdmluZyA9IGZhbHNlXG4gICAgfVxuICAgIF9vblRvdWNoRW5kZWQoZXZlbnQsIGNhcHR1cmVMaXN0ZW5lcnMpXG4gICAge1xuICAgICAgICBpZih0aGlzLmlzVmVydGljYWxNb3ZpbmcpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmIChjYXB0dXJlTGlzdGVuZXJzICYmIGNhcHR1cmVMaXN0ZW5lcnMubGVuZ3RoID49IDIpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2FwdHVyZUxpc3RlbmVycy5zaGlmdCgpXG4gICAgICAgICAgICAgICAgY2FwdHVyZUxpc3RlbmVycy51bnNoaWZ0KHRoaXMubWFpblNjcm9sbC5ub2RlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5tYWluU2Nyb2xsLl9vblRvdWNoRW5kZWQoZXZlbnQsIGNhcHR1cmVMaXN0ZW5lcnMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNWZXJ0aWNhbE1vdmluZyA9IGZhbHNlXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==