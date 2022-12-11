"use strict";
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