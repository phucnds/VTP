
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Popups/PopupManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e6ddasTzadAIpsamBLux9OL', 'PopupManager');
// scripts/Popups/PopupManager.ts

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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopupManager = void 0;
var connect_1 = require("../src/app/connect");
var SliceApp_1 = require("../src/features/SliceApp");
var Helper_1 = require("../utils/Helper");
var Popup_1 = require("./Popup");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopupManager = /** @class */ (function (_super) {
    __extends(PopupManager, _super);
    function PopupManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PopupBackground = null;
        _this.PopupContainer = null;
        _this.ShownPopups = null;
        _this.PopupPrefabs = [];
        _this.popups = [];
        return _this;
    }
    PopupManager.push = function (popupName, useBg) {
        if (useBg === void 0) { useBg = true; }
        // const SoundInstance = SoundMgr.Instance
        var instance = this.Instance;
        var popup = instance.PopupContainer.getChildByName(SliceApp_1.EAppPopups[popupName]);
        if (popup) {
            // SoundMgr.playSfx(SoundInstance.SFX_POPUP);
            instance.usePopup(popup);
            instance.animate(true, popup);
            instance.PopupBackground.active = useBg;
        }
    };
    PopupManager.pop = function (isFade) {
        if (isFade === void 0) { isFade = false; }
        var instance = this.Instance;
        if (instance.ShownPopups.children.length > 0) {
            var popup = instance.ShownPopups.children[instance.ShownPopups.children.length - 1];
            instance.PopupBackground.active = instance.ShownPopups.children.length - 1 > 0;
            instance.animate(false, popup, isFade);
        }
    };
    PopupManager.hide = function (popupName) {
        var instance = this.Instance;
        var popup = instance.ShownPopups.getChildByName(SliceApp_1.EAppPopups[popupName]);
        if (popup) {
            instance.animate(false, popup);
        }
    };
    PopupManager.getPopup = function (popupName) {
        var instance = this.Instance;
        var popup = instance.PopupContainer.getChildByName(SliceApp_1.EAppPopups[popupName]);
        if (popup) {
            return popup;
        }
        return instance.ShownPopups.getChildByName(SliceApp_1.EAppPopups[popupName]);
    };
    PopupManager.prototype.animate = function (isShow, popup, isFade) {
        var _this = this;
        if (isFade === void 0) { isFade = false; }
        if (!isShow) {
            var randomEasing = ['bounceOut', 'quadOut', 'backOut'];
            var easing = randomEasing[Helper_1.default.RandInt(0, randomEasing.length - 1)];
            if (isFade) {
                this.returnPopup(popup);
                return;
            }
            cc.tween(popup)
                .to(0.3, { scale: 0, }, { easing: 'quadIn' })
                .call(function () {
                _this.returnPopup(popup);
                // this.PopupBackground.active = this.ShownPopups.children.length > 0;
            })
                .start();
        }
        else {
            var randomEasing = ['bounceOut', 'quadOut', 'backOut'];
            var easing = randomEasing[Helper_1.default.RandInt(0, randomEasing.length - 1)];
            popup.setScale(0);
            cc.tween(popup)
                .by(0.3, { scale: 1, }, { easing: easing })
                .start();
        }
    };
    PopupManager.prototype.usePopup = function (popup) {
        this.PopupContainer.removeChild(popup, false);
        this.ShownPopups.addChild(popup);
    };
    PopupManager.prototype.returnPopup = function (popup) {
        this.ShownPopups.removeChild(popup, false);
        this.PopupContainer.addChild(popup);
    };
    PopupManager.prototype.onLoad = function () {
        PopupManager.Instance = this;
        for (var i = 0; i < this.PopupPrefabs.length; i++) {
            this.PopupContainer.addChild(cc.instantiate(this.PopupPrefabs[i]));
        }
    };
    PopupManager.prototype.onStateChange = function () {
        if (this.popups.length < this.props.app.popups.length) {
            PopupManager.push(this.props.app.popups[this.props.app.popups.length - 1]);
        }
        else if (this.popups.length > this.props.app.popups.length) {
            PopupManager.pop(this.props.app.popupEffect);
            if (this.props.app.popupEffect) {
                this.actions.removeEffect();
            }
        }
        this.popups = __spreadArrays(this.props.app.popups);
    };
    __decorate([
        property(cc.Node)
    ], PopupManager.prototype, "PopupBackground", void 0);
    __decorate([
        property(cc.Node)
    ], PopupManager.prototype, "PopupContainer", void 0);
    __decorate([
        property(cc.Node)
    ], PopupManager.prototype, "ShownPopups", void 0);
    __decorate([
        property(cc.Prefab)
    ], PopupManager.prototype, "PopupPrefabs", void 0);
    return PopupManager;
}(Popup_1.default));
exports.PopupManager = PopupManager;
var mapStateToProps = function (state) { return ({
    app: state.app
}); };
var mapDispatchToAction = function (dispatch) { return ({
    removeEffect: function () { return dispatch(SliceApp_1.removeEffect()); }
}); };
exports.default = connect_1.default(mapStateToProps, mapDispatchToAction)(PopupManager);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BvcHVwcy9Qb3B1cE1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSw4Q0FBeUM7QUFFekMscURBQW9FO0FBQ3BFLDBDQUFxQztBQUNyQyxpQ0FBNEI7QUFFdEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBa0MsZ0NBQUs7SUFBdkM7UUFBQSxxRUF1R0M7UUFuRzhCLHFCQUFlLEdBQVksSUFBSSxDQUFDO1FBQ2hDLG9CQUFjLEdBQVksSUFBSSxDQUFDO1FBQy9CLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBQzFCLGtCQUFZLEdBQXFCLEVBQUUsQ0FBQztRQUl6RCxZQUFNLEdBQWlCLEVBQUUsQ0FBQTs7SUE0RnJDLENBQUM7SUExRlUsaUJBQUksR0FBWCxVQUFZLFNBQXFCLEVBQUUsS0FBWTtRQUFaLHNCQUFBLEVBQUEsWUFBWTtRQUMzQywwQ0FBMEM7UUFDMUMsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUMvQixJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxxQkFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDNUUsSUFBSSxLQUFLLEVBQUU7WUFDUCw2Q0FBNkM7WUFDN0MsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6QixRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztZQUM5QixRQUFRLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDM0M7SUFDTCxDQUFDO0lBRU0sZ0JBQUcsR0FBVixVQUFXLE1BQWM7UUFBZCx1QkFBQSxFQUFBLGNBQWM7UUFDckIsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFB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ciBmcm9tIFwiLi4vY29tbW9uL1NvdW5kTWdyXCI7XG5pbXBvcnQgY29ubmVjdCBmcm9tIFwiLi4vc3JjL2FwcC9jb25uZWN0XCI7XG5pbXBvcnQgeyBBcHBEaXNwYXRjaCwgUm9vdFN0YXRlIH0gZnJvbSBcIi4uL3NyYy9hcHAvc3RvcmVcIjtcbmltcG9ydCB7IEVBcHBQb3B1cHMsIHJlbW92ZUVmZmVjdCB9IGZyb20gXCIuLi9zcmMvZmVhdHVyZXMvU2xpY2VBcHBcIjtcbmltcG9ydCBIZWxwZXIgZnJvbSBcIi4uL3V0aWxzL0hlbHBlclwiO1xuaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbmV4cG9ydCBjbGFzcyBQb3B1cE1hbmFnZXIgZXh0ZW5kcyBQb3B1cCB7XG5cbiAgICBhY3Rpb25zOiBhbnk7XG4gICAgcHJvcHM6IFJvb3RTdGF0ZTtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSkgcHJpdmF0ZSBQb3B1cEJhY2tncm91bmQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKSBwcml2YXRlIFBvcHVwQ29udGFpbmVyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSkgcHJpdmF0ZSBTaG93blBvcHVwczogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYikgcHJpdmF0ZSBQb3B1cFByZWZhYnM6IEFycmF5PGNjLlByZWZhYj4gPSBbXTtcblxuICAgIHByaXZhdGUgbVNob3dDYWxsYmFjaztcbiAgICBwcml2YXRlIG1IaWRlQ2FsbGJhY2s7XG4gICAgcHJpdmF0ZSBwb3B1cHM6IEVBcHBQb3B1cHNbXSA9IFtdXG4gICAgc3RhdGljIEluc3RhbmNlOiBQb3B1cE1hbmFnZXI7XG4gICAgc3RhdGljIHB1c2gocG9wdXBOYW1lOiBFQXBwUG9wdXBzLCB1c2VCZyA9IHRydWUpIHtcbiAgICAgICAgLy8gY29uc3QgU291bmRJbnN0YW5jZSA9IFNvdW5kTWdyLkluc3RhbmNlXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5JbnN0YW5jZTtcbiAgICAgICAgY29uc3QgcG9wdXAgPSBpbnN0YW5jZS5Qb3B1cENvbnRhaW5lci5nZXRDaGlsZEJ5TmFtZShFQXBwUG9wdXBzW3BvcHVwTmFtZV0pO1xuICAgICAgICBpZiAocG9wdXApIHtcbiAgICAgICAgICAgIC8vIFNvdW5kTWdyLnBsYXlTZngoU291bmRJbnN0YW5jZS5TRlhfUE9QVVApO1xuICAgICAgICAgICAgaW5zdGFuY2UudXNlUG9wdXAocG9wdXApO1xuICAgICAgICAgICAgaW5zdGFuY2UuYW5pbWF0ZSh0cnVlLCBwb3B1cCk7XG4gICAgICAgICAgICBpbnN0YW5jZS5Qb3B1cEJhY2tncm91bmQuYWN0aXZlID0gdXNlQmc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgcG9wKGlzRmFkZSA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5JbnN0YW5jZTtcbiAgICAgICAgaWYgKGluc3RhbmNlLlNob3duUG9wdXBzLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHBvcHVwID0gaW5zdGFuY2UuU2hvd25Qb3B1cHMuY2hpbGRyZW5baW5zdGFuY2UuU2hvd25Qb3B1cHMuY2hpbGRyZW4ubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBpbnN0YW5jZS5Qb3B1cEJhY2tncm91bmQuYWN0aXZlID0gaW5zdGFuY2UuU2hvd25Qb3B1cHMuY2hpbGRyZW4ubGVuZ3RoIC0gMSA+IDA7XG4gICAgICAgICAgICBpbnN0YW5jZS5hbmltYXRlKGZhbHNlLCBwb3B1cCwgaXNGYWRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBoaWRlKHBvcHVwTmFtZTogRUFwcFBvcHVwcykge1xuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuSW5zdGFuY2U7XG4gICAgICAgIGNvbnN0IHBvcHVwID0gaW5zdGFuY2UuU2hvd25Qb3B1cHMuZ2V0Q2hpbGRCeU5hbWUoRUFwcFBvcHVwc1twb3B1cE5hbWVdKTtcbiAgICAgICAgaWYgKHBvcHVwKSB7XG4gICAgICAgICAgICBpbnN0YW5jZS5hbmltYXRlKGZhbHNlLCBwb3B1cCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0UG9wdXAocG9wdXBOYW1lOiBFQXBwUG9wdXBzKSB7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5JbnN0YW5jZTtcbiAgICAgICAgbGV0IHBvcHVwID0gaW5zdGFuY2UuUG9wdXBDb250YWluZXIuZ2V0Q2hpbGRCeU5hbWUoRUFwcFBvcHVwc1twb3B1cE5hbWVdKTtcbiAgICAgICAgaWYgKHBvcHVwKSB7XG4gICAgICAgICAgICByZXR1cm4gcG9wdXA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLlNob3duUG9wdXBzLmdldENoaWxkQnlOYW1lKEVBcHBQb3B1cHNbcG9wdXBOYW1lXSk7XG4gICAgfVxuICAgIHByaXZhdGUgYW5pbWF0ZShpc1Nob3c6IGJvb2xlYW4sIHBvcHVwOiBjYy5Ob2RlLCBpc0ZhZGU6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBpZiAoIWlzU2hvdykge1xuICAgICAgICAgICAgbGV0IHJhbmRvbUVhc2luZyA9IFsnYm91bmNlT3V0JywgJ3F1YWRPdXQnLCAnYmFja091dCddXG4gICAgICAgICAgICBsZXQgZWFzaW5nID0gcmFuZG9tRWFzaW5nW0hlbHBlci5SYW5kSW50KDAsIHJhbmRvbUVhc2luZy5sZW5ndGggLSAxKV1cbiAgICAgICAgICAgIGlmIChpc0ZhZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJldHVyblBvcHVwKHBvcHVwKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYy50d2Vlbihwb3B1cClcbiAgICAgICAgICAgICAgICAudG8oMC4zLCB7IHNjYWxlOiAwLCB9LCB7IGVhc2luZzogJ3F1YWRJbicgfSlcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmV0dXJuUG9wdXAocG9wdXApO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLlBvcHVwQmFja2dyb3VuZC5hY3RpdmUgPSB0aGlzLlNob3duUG9wdXBzLmNoaWxkcmVuLmxlbmd0aCA+IDA7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc3RhcnQoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHJhbmRvbUVhc2luZyA9IFsnYm91bmNlT3V0JywgJ3F1YWRPdXQnLCAnYmFja091dCddXG4gICAgICAgICAgICBsZXQgZWFzaW5nID0gcmFuZG9tRWFzaW5nW0hlbHBlci5SYW5kSW50KDAsIHJhbmRvbUVhc2luZy5sZW5ndGggLSAxKV1cbiAgICAgICAgICAgIHBvcHVwLnNldFNjYWxlKDApXG4gICAgICAgICAgICBjYy50d2Vlbihwb3B1cClcbiAgICAgICAgICAgICAgICAuYnkoMC4zLCB7IHNjYWxlOiAxLCB9LCB7IGVhc2luZzogZWFzaW5nIH0pXG4gICAgICAgICAgICAgICAgLnN0YXJ0KClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgdXNlUG9wdXAocG9wdXA6IGNjLk5vZGUpIHtcbiAgICAgICAgdGhpcy5Qb3B1cENvbnRhaW5lci5yZW1vdmVDaGlsZChwb3B1cCwgZmFsc2UpO1xuICAgICAgICB0aGlzLlNob3duUG9wdXBzLmFkZENoaWxkKHBvcHVwKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJldHVyblBvcHVwKHBvcHVwOiBjYy5Ob2RlKSB7XG4gICAgICAgIHRoaXMuU2hvd25Qb3B1cHMucmVtb3ZlQ2hpbGQocG9wdXAsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5Qb3B1cENvbnRhaW5lci5hZGRDaGlsZChwb3B1cCk7XG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBQb3B1cE1hbmFnZXIuSW5zdGFuY2UgPSB0aGlzO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuUG9wdXBQcmVmYWJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLlBvcHVwQ29udGFpbmVyLmFkZENoaWxkKGNjLmluc3RhbnRpYXRlKHRoaXMuUG9wdXBQcmVmYWJzW2ldKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25TdGF0ZUNoYW5nZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucG9wdXBzLmxlbmd0aCA8IHRoaXMucHJvcHMuYXBwLnBvcHVwcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIFBvcHVwTWFuYWdlci5wdXNoKHRoaXMucHJvcHMuYXBwLnBvcHVwc1t0aGlzLnByb3BzLmFwcC5wb3B1cHMubGVuZ3RoIC0gMV0pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5wb3B1cHMubGVuZ3RoID4gdGhpcy5wcm9wcy5hcHAucG9wdXBzLmxlbmd0aCkge1xuICAgICAgICAgICAgUG9wdXBNYW5hZ2VyLnBvcCh0aGlzLnByb3BzLmFwcC5wb3B1cEVmZmVjdClcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmFwcC5wb3B1cEVmZmVjdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9ucy5yZW1vdmVFZmZlY3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBvcHVwcyA9IFsuLi50aGlzLnByb3BzLmFwcC5wb3B1cHNdXG4gICAgfVxufVxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBSb290U3RhdGUpID0+ICh7XG4gICAgYXBwOiBzdGF0ZS5hcHBcbn0pXG5jb25zdCBtYXBEaXNwYXRjaFRvQWN0aW9uID0gKGRpc3BhdGNoOiBBcHBEaXNwYXRjaCkgPT4gKHtcbiAgICByZW1vdmVFZmZlY3Q6ICgpID0+IGRpc3BhdGNoKHJlbW92ZUVmZmVjdCgpKVxufSlcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvQWN0aW9uKShQb3B1cE1hbmFnZXIpIl19