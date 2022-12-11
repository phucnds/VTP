"use strict";
cc._RF.push(module, 'f848byA0oVNa73cArS5scXP', 'PopupError');
// scripts/Popups/PopupError.ts

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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopupError = exports.errorCodeToMessage = void 0;
var SoundMgr_1 = require("../common/SoundMgr");
var connect_1 = require("../src/app/connect");
var wsgw_1 = require("../src/app/wsgw");
var SliceApp_1 = require("../src/features/SliceApp");
var SliceDeeplinks_1 = require("../src/features/SliceDeeplinks");
var SliceError_1 = require("../src/features/SliceError");
var Popup_1 = require("./Popup");
var _b = cc._decorator, ccclass = _b.ccclass, property = _b.property;
exports.errorCodeToMessage = (_a = {},
    _a[wsgw_1.ErrorCode.CLIENT_EXCEPTION] = 'Oops có trục trặc xảy ra. \nVui lòng thử lại sau.',
    _a[wsgw_1.ErrorCode.CONECTION_TIMEOUT] = 'Không có phản hồi. \nVui lòng thử lại sau.',
    _a[wsgw_1.ErrorCode.NOT_AUTHENTICATED] = 'Oops có trục trặc xảy ra. \nVui lòng thử lại sau.',
    _a[wsgw_1.ErrorCode.OTHER_CASES] = 'Oops có trục trặc xảy ra. \nVui lòng thử lại sau.',
    _a[wsgw_1.ErrorCode.SERVER_EXCEPTION] = 'Oops có trục trặc xảy ra. \nVui lòng thử lại sau.',
    _a[wsgw_1.ErrorCode.TIMEOUT_TXT] = 'Không có phản hồi. \nVui lòng thử lại sau.',
    _a);
var PopupError = /** @class */ (function (_super) {
    __extends(PopupError, _super);
    function PopupError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.descriptionTxt = 'Lỗi %s';
        _this.btnRetry = null;
        _this.btnExit = null;
        _this.btnClose = null;
        _this.errorCode = null;
        _this.message = null;
        _this.retryName = null;
        _this.exitName = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    PopupError.prototype.onEnable = function () {
        this.onStateChange();
        this.btnRetry.on(cc.Node.EventType.TOUCH_END, this.onRetry.bind(this));
        this.btnExit.on(cc.Node.EventType.TOUCH_END, this.onExit.bind(this));
        this.btnClose.on(cc.Node.EventType.TOUCH_END, this.onClose.bind(this));
    };
    PopupError.prototype.onDisable = function () {
        this.btnRetry.off(cc.Node.EventType.TOUCH_END, this.onRetry.bind(this));
        this.btnExit.off(cc.Node.EventType.TOUCH_END, this.onExit.bind(this));
        this.btnClose.off(cc.Node.EventType.TOUCH_END, this.onClose.bind(this));
    };
    PopupError.prototype.onStateChange = function () {
        var _this = this;
        var errCode = "";
        this.props.error.list.map(function (e, i) {
            if (errCode.indexOf(e.errorCode) < 0)
                errCode += (e.errorCode + (i == _this.props.error.list.length - 1 ? "." : "/"));
        });
        // this.errorCode.string = "Mã Lỗi : " + errCode
        this.message.string = this.descriptionTxt.replace('%s', errCode);
        this.createCallback();
    };
    PopupError.prototype.onRedirectToHome = function () {
        SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
        this.actions.refreshError();
        this.actions.popPopup();
        this.actions.popToPage({ page: SliceApp_1.EAppPages.PageHome, effect: SliceApp_1.PAGE_SHOW_EFFECT.LEFT });
    };
    PopupError.prototype.onRetry = function () {
        SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
        this.retryCB && this.retryCB();
    };
    PopupError.prototype.onExit = function () {
        SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
        this.exitCB && this.exitCB();
        this.actions.refreshError();
        this.actions.popPopup();
    };
    PopupError.prototype.onClose = function () {
        SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
        this.closeCB && this.closeCB();
        this.actions.refreshError();
        this.actions.popPopup();
    };
    PopupError.prototype.activeButton = function (value) {
        this.btnRetry.active = value;
        // this.btnExit.active = value
    };
    PopupError.prototype.enableButton = function (enable) {
        this.btnRetry.getComponent(cc.Button).interactable = enable;
        this.btnClose.getComponent(cc.Button).interactable = enable;
        this.btnExit.getComponent(cc.Button).interactable = enable;
    };
    PopupError.prototype.createCallback = function () {
        var _this = this;
        this.btnRetry.active = true;
        this.btnClose.active = true;
        this.retryCB = function () {
            console.log('askljfghaslkghas');
            document.location.reload();
        };
        this.closeCB = function () {
            window.location.href = _this.props.deeplinks.data[SliceDeeplinks_1.DeeplinkTypesToName[SliceDeeplinks_1.EDeeplinkTypes.CLOSE_GAME]];
        };
    };
    __decorate([
        property(String)
    ], PopupError.prototype, "descriptionTxt", void 0);
    __decorate([
        property(cc.Node)
    ], PopupError.prototype, "btnRetry", void 0);
    __decorate([
        property(cc.Node)
    ], PopupError.prototype, "btnExit", void 0);
    __decorate([
        property(cc.Node)
    ], PopupError.prototype, "btnClose", void 0);
    __decorate([
        property(cc.Label)
    ], PopupError.prototype, "errorCode", void 0);
    __decorate([
        property(cc.Label)
    ], PopupError.prototype, "message", void 0);
    __decorate([
        property(cc.Label)
    ], PopupError.prototype, "retryName", void 0);
    __decorate([
        property(cc.Label)
    ], PopupError.prototype, "exitName", void 0);
    return PopupError;
}(Popup_1.default));
exports.PopupError = PopupError;
var mapStateToProps = function (state) { return ({
    error: state.error,
    deeplinks: state.deeplinks,
}); };
var mapDispatchToAction = function (dispatch) { return ({
    popPopup: function () { return dispatch(SliceApp_1.popPopup()); },
    popToPage: function (e) { return dispatch(SliceApp_1.popToPage(e)); },
    refreshError: function () { return dispatch(SliceError_1.refreshError()); }
}); };
exports.default = connect_1.default(mapStateToProps, mapDispatchToAction)(PopupError);

cc._RF.pop();