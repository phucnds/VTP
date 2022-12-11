
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Popups/PopupError.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BvcHVwcy9Qb3B1cEVycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHbEYsK0NBQTBDO0FBRTFDLDhDQUF5QztBQUV6Qyx3Q0FBa0Q7QUFDbEQscURBQXNHO0FBQ3RHLGlFQUFxRjtBQUNyRix5REFBMEQ7QUFFMUQsaUNBQTRCO0FBRXRCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRS9CLFFBQUEsa0JBQWtCO0lBQzNCLEdBQUMsZ0JBQVMsQ0FBQyxnQkFBZ0IsSUFBRyxtREFBbUQ7SUFDakYsR0FBQyxnQkFBUyxDQUFDLGlCQUFpQixJQUFHLDRDQUE0QztJQUMzRSxHQUFDLGdCQUFTLENBQUMsaUJBQWlCLElBQUcsbURBQW1EO0lBQ2xGLEdBQUMsZ0JBQVMsQ0FBQyxXQUFXLElBQUcsbURBQW1EO0lBQzVFLEdBQUMsZ0JBQVMsQ0FBQyxnQkFBZ0IsSUFBRyxtREFBbUQ7SUFDakYsR0FBQyxnQkFBUyxDQUFDLFdBQVcsSUFBRyw0Q0FBNEM7UUFDeEU7QUFDRDtJQUFnQyw4QkFBSztJQUFyQztRQUFBLHFFQWtGQztRQS9FNEIsb0JBQWMsR0FBRyxRQUFRLENBQUM7UUFDaEMsY0FBUSxHQUFZLElBQUksQ0FBQztRQUN6QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3hCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFDeEIsZUFBUyxHQUFhLElBQUksQ0FBQztRQUMzQixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBQ3pCLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFDM0IsY0FBUSxHQUFhLElBQUksQ0FBQzs7SUF3RWxELENBQUM7SUFwRUcsd0JBQXdCO0lBQ3hCLDZCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7UUFDdEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7UUFDcEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7SUFDMUUsQ0FBQztJQUNELDhCQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtRQUN2RSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtRQUNyRSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtJQUMzRSxDQUFDO0lBQ0Qsa0NBQWEsR0FBYjtRQUFBLGlCQVVDO1FBVEcsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFBO1FBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQztZQUMzQixJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUM7Z0JBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLElBQUksS0FBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtRQUN0RixDQUFDLENBQUMsQ0FBQTtRQUNGLGdEQUFnRDtRQUNoRCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFakUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFDRCxxQ0FBZ0IsR0FBaEI7UUFDSSxrQkFBUSxDQUFDLE9BQU8sQ0FBQyxrQkFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUU5QyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFBO1FBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUsb0JBQVMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLDJCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7SUFDdkYsQ0FBQztJQUNELDRCQUFPLEdBQVA7UUFDSSxrQkFBUSxDQUFDLE9BQU8sQ0FBQyxrQkFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUU5QyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQTtJQUNsQyxDQUFDO0lBQ0QsMkJBQU0sR0FBTjtRQUNJLGtCQUFRLENBQUMsT0FBTyxDQUFDLGtCQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBRTlDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFBO1FBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUE7UUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBQ0QsNEJBQU8sR0FBUDtRQUNJLGtCQUFRLENBQUMsT0FBTyxDQUFDLGtCQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQzlDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBO1FBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUE7UUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBQ0QsaUNBQVksR0FBWixVQUFhLEtBQWM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1FBQzVCLDhCQUE4QjtJQUNsQyxDQUFDO0lBQ0QsaUNBQVksR0FBWixVQUFhLE1BQWU7UUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUE7UUFDM0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUE7UUFDM0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUE7SUFDOUQsQ0FBQztJQUNELG1DQUFjLEdBQWQ7UUFBQSxpQkFVQztRQVRHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRztZQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtZQUMvQixRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFBO1FBQzlCLENBQUMsQ0FBQTtRQUNELElBQUksQ0FBQyxPQUFPLEdBQUc7WUFDWCxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsb0NBQW1CLENBQUMsK0JBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ3JHLENBQUMsQ0FBQTtJQUNMLENBQUM7SUE5RWlCO1FBQWpCLFFBQVEsQ0FBQyxNQUFNLENBQUM7c0RBQWtDO0lBQ2hDO1FBQWxCLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUEwQjtJQUN6QjtRQUFsQixRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FBeUI7SUFDeEI7UUFBbEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQTBCO0lBQ3hCO1FBQW5CLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2lEQUE0QjtJQUMzQjtRQUFuQixRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsrQ0FBMEI7SUFDekI7UUFBbkIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7aURBQTRCO0lBQzNCO1FBQW5CLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2dEQUEyQjtJQXdFbEQsaUJBQUM7Q0FsRkQsQUFrRkMsQ0FsRitCLGVBQUssR0FrRnBDO0FBbEZZLGdDQUFVO0FBbUZ2QixJQUFNLGVBQWUsR0FBRyxVQUFDLEtBQWdCLElBQUssT0FBQSxDQUFDO0lBQzNDLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztJQUNsQixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7Q0FDN0IsQ0FBQyxFQUg0QyxDQUc1QyxDQUFBO0FBQ0YsSUFBTSxtQkFBbUIsR0FBRyxVQUFDLFFBQXFCLElBQUssT0FBQSxDQUFDO0lBQ3BELFFBQVEsRUFBRSxjQUFNLE9BQUEsUUFBUSxDQUFDLG1CQUFRLEVBQUUsQ0FBQyxFQUFwQixDQUFvQjtJQUNwQyxTQUFTLEVBQUUsVUFBQyxDQUFDLElBQUssT0FBQSxRQUFRLENBQUMsb0JBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUF0QixDQUFzQjtJQUN4QyxZQUFZLEVBQUUsY0FBTSxPQUFBLFFBQVEsQ0FBQyx5QkFBWSxFQUFFLENBQUMsRUFBeEIsQ0FBd0I7Q0FDL0MsQ0FBQyxFQUpxRCxDQUlyRCxDQUFBO0FBQ0Ysa0JBQWUsaUJBQU8sQ0FBQyxlQUFlLEVBQUUsbUJBQW1CLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IFNvdW5kTWdyIGZyb20gXCIuLi9jb21tb24vU291bmRNZ3JcIjtcbmltcG9ydCB7IEVycm9ySGFuZGxlVHlwZSB9IGZyb20gXCIuLi9zcmMvYXBwL0FQSURlZmluZVwiO1xuaW1wb3J0IGNvbm5lY3QgZnJvbSBcIi4uL3NyYy9hcHAvY29ubmVjdFwiO1xuaW1wb3J0IHsgQXBwRGlzcGF0Y2gsIFJvb3RTdGF0ZSB9IGZyb20gXCIuLi9zcmMvYXBwL3N0b3JlXCI7XG5pbXBvcnQgd3NndywgeyBFcnJvckNvZGUgfSBmcm9tIFwiLi4vc3JjL2FwcC93c2d3XCI7XG5pbXBvcnQgeyBFQXBwUGFnZXMsIFBBR0VfU0hPV19FRkZFQ1QsIHBvcFBvcHVwLCBwb3BUb1BhZ2UsIHB1c2hQYWdlIH0gZnJvbSBcIi4uL3NyYy9mZWF0dXJlcy9TbGljZUFwcFwiO1xuaW1wb3J0IHsgRGVlcGxpbmtUeXBlc1RvTmFtZSwgRURlZXBsaW5rVHlwZXMgfSBmcm9tICcuLi9zcmMvZmVhdHVyZXMvU2xpY2VEZWVwbGlua3MnO1xuaW1wb3J0IHsgcmVmcmVzaEVycm9yIH0gZnJvbSBcIi4uL3NyYy9mZWF0dXJlcy9TbGljZUVycm9yXCI7XG5pbXBvcnQgSGVscGVyIGZyb20gXCIuLi91dGlscy9IZWxwZXJcIjtcbmltcG9ydCBQb3B1cCBmcm9tICcuL1BvcHVwJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuZXhwb3J0IGNvbnN0IGVycm9yQ29kZVRvTWVzc2FnZSA9IHtcbiAgICBbRXJyb3JDb2RlLkNMSUVOVF9FWENFUFRJT05dOiAnT29wcyBjw7MgdHLhu6VjIHRy4bq3YyB44bqjeSByYS4gXFxuVnVpIGzDsm5nIHRo4butIGzhuqFpIHNhdS4nLFxuICAgIFtFcnJvckNvZGUuQ09ORUNUSU9OX1RJTUVPVVRdOiAnS2jDtG5nIGPDsyBwaOG6o24gaOG7k2kuIFxcblZ1aSBsw7JuZyB0aOG7rSBs4bqhaSBzYXUuJyxcbiAgICBbRXJyb3JDb2RlLk5PVF9BVVRIRU5USUNBVEVEXTogJ09vcHMgY8OzIHRy4bulYyB0cuG6t2MgeOG6o3kgcmEuIFxcblZ1aSBsw7JuZyB0aOG7rSBs4bqhaSBzYXUuJyxcbiAgICBbRXJyb3JDb2RlLk9USEVSX0NBU0VTXTogJ09vcHMgY8OzIHRy4bulYyB0cuG6t2MgeOG6o3kgcmEuIFxcblZ1aSBsw7JuZyB0aOG7rSBs4bqhaSBzYXUuJyxcbiAgICBbRXJyb3JDb2RlLlNFUlZFUl9FWENFUFRJT05dOiAnT29wcyBjw7MgdHLhu6VjIHRy4bq3YyB44bqjeSByYS4gXFxuVnVpIGzDsm5nIHRo4butIGzhuqFpIHNhdS4nLFxuICAgIFtFcnJvckNvZGUuVElNRU9VVF9UWFRdOiAnS2jDtG5nIGPDsyBwaOG6o24gaOG7k2kuIFxcblZ1aSBsw7JuZyB0aOG7rSBs4bqhaSBzYXUuJyxcbn1cbmV4cG9ydCBjbGFzcyBQb3B1cEVycm9yIGV4dGVuZHMgUG9wdXAge1xuICAgIHByb3BzOiBSb290U3RhdGVcbiAgICBhY3Rpb25zOiBhbnk7XG4gICAgQHByb3BlcnR5KFN0cmluZykgcHVibGljIGRlc2NyaXB0aW9uVHh0ID0gJ0zhu5dpICVzJztcbiAgICBAcHJvcGVydHkoY2MuTm9kZSkgYnRuUmV0cnk6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKSBidG5FeGl0OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSkgYnRuQ2xvc2U6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbCkgZXJyb3JDb2RlOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKSBtZXNzYWdlOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKSByZXRyeU5hbWU6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpIGV4aXROYW1lOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgcHJpdmF0ZSByZXRyeUNCOiBhbnk7XG4gICAgcHJpdmF0ZSBleGl0Q0I6IGFueTtcbiAgICBwcml2YXRlIGNsb3NlQ0I6IGFueTtcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcbiAgICBvbkVuYWJsZSgpIHtcbiAgICAgICAgdGhpcy5vblN0YXRlQ2hhbmdlKCk7XG4gICAgICAgIHRoaXMuYnRuUmV0cnkub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uUmV0cnkuYmluZCh0aGlzKSlcbiAgICAgICAgdGhpcy5idG5FeGl0Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbkV4aXQuYmluZCh0aGlzKSlcbiAgICAgICAgdGhpcy5idG5DbG9zZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25DbG9zZS5iaW5kKHRoaXMpKVxuICAgIH1cbiAgICBvbkRpc2FibGUoKSB7XG4gICAgICAgIHRoaXMuYnRuUmV0cnkub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblJldHJ5LmJpbmQodGhpcykpXG4gICAgICAgIHRoaXMuYnRuRXhpdC5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uRXhpdC5iaW5kKHRoaXMpKVxuICAgICAgICB0aGlzLmJ0bkNsb3NlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25DbG9zZS5iaW5kKHRoaXMpKVxuICAgIH1cbiAgICBvblN0YXRlQ2hhbmdlKCkge1xuICAgICAgICBsZXQgZXJyQ29kZSA9IFwiXCJcbiAgICAgICAgdGhpcy5wcm9wcy5lcnJvci5saXN0Lm1hcCgoZSwgaSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVyckNvZGUuaW5kZXhPZihlLmVycm9yQ29kZSkgPCAwKVxuICAgICAgICAgICAgICAgIGVyckNvZGUgKz0gKGUuZXJyb3JDb2RlICsgKGkgPT0gdGhpcy5wcm9wcy5lcnJvci5saXN0Lmxlbmd0aCAtIDEgPyBcIi5cIiA6IFwiL1wiKSlcbiAgICAgICAgfSlcbiAgICAgICAgLy8gdGhpcy5lcnJvckNvZGUuc3RyaW5nID0gXCJNw6MgTOG7l2kgOiBcIiArIGVyckNvZGVcbiAgICAgICAgdGhpcy5tZXNzYWdlLnN0cmluZyA9IHRoaXMuZGVzY3JpcHRpb25UeHQucmVwbGFjZSgnJXMnLCBlcnJDb2RlKTtcblxuICAgICAgICB0aGlzLmNyZWF0ZUNhbGxiYWNrKCk7XG4gICAgfVxuICAgIG9uUmVkaXJlY3RUb0hvbWUoKSB7XG4gICAgICAgIFNvdW5kTWdyLnBsYXlTZngoU291bmRNZ3IuSW5zdGFuY2UuU0ZYX0JVVFRPTilcblxuICAgICAgICB0aGlzLmFjdGlvbnMucmVmcmVzaEVycm9yKClcbiAgICAgICAgdGhpcy5hY3Rpb25zLnBvcFBvcHVwKCk7XG4gICAgICAgIHRoaXMuYWN0aW9ucy5wb3BUb1BhZ2UoeyBwYWdlOiBFQXBwUGFnZXMuUGFnZUhvbWUsIGVmZmVjdDogUEFHRV9TSE9XX0VGRkVDVC5MRUZUIH0pXG4gICAgfVxuICAgIG9uUmV0cnkoKSB7XG4gICAgICAgIFNvdW5kTWdyLnBsYXlTZngoU291bmRNZ3IuSW5zdGFuY2UuU0ZYX0JVVFRPTilcblxuICAgICAgICB0aGlzLnJldHJ5Q0IgJiYgdGhpcy5yZXRyeUNCKClcbiAgICB9XG4gICAgb25FeGl0KCkge1xuICAgICAgICBTb3VuZE1nci5wbGF5U2Z4KFNvdW5kTWdyLkluc3RhbmNlLlNGWF9CVVRUT04pXG5cbiAgICAgICAgdGhpcy5leGl0Q0IgJiYgdGhpcy5leGl0Q0IoKVxuICAgICAgICB0aGlzLmFjdGlvbnMucmVmcmVzaEVycm9yKClcbiAgICAgICAgdGhpcy5hY3Rpb25zLnBvcFBvcHVwKCk7XG4gICAgfVxuICAgIG9uQ2xvc2UoKSB7XG4gICAgICAgIFNvdW5kTWdyLnBsYXlTZngoU291bmRNZ3IuSW5zdGFuY2UuU0ZYX0JVVFRPTilcbiAgICAgICAgdGhpcy5jbG9zZUNCICYmIHRoaXMuY2xvc2VDQigpXG4gICAgICAgIHRoaXMuYWN0aW9ucy5yZWZyZXNoRXJyb3IoKVxuICAgICAgICB0aGlzLmFjdGlvbnMucG9wUG9wdXAoKTtcbiAgICB9XG4gICAgYWN0aXZlQnV0dG9uKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuYnRuUmV0cnkuYWN0aXZlID0gdmFsdWVcbiAgICAgICAgLy8gdGhpcy5idG5FeGl0LmFjdGl2ZSA9IHZhbHVlXG4gICAgfVxuICAgIGVuYWJsZUJ1dHRvbihlbmFibGU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5idG5SZXRyeS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBlbmFibGVcbiAgICAgICAgdGhpcy5idG5DbG9zZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBlbmFibGVcbiAgICAgICAgdGhpcy5idG5FeGl0LmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGVuYWJsZVxuICAgIH1cbiAgICBjcmVhdGVDYWxsYmFjaygpIHtcbiAgICAgICAgdGhpcy5idG5SZXRyeS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmJ0bkNsb3NlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMucmV0cnlDQiA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhc2tsamZnaGFzbGtnaGFzJylcbiAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jbG9zZUNCID0gKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0aGlzLnByb3BzLmRlZXBsaW5rcy5kYXRhW0RlZXBsaW5rVHlwZXNUb05hbWVbRURlZXBsaW5rVHlwZXMuQ0xPU0VfR0FNRV1dO1xuICAgICAgICB9XG4gICAgfVxufVxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBSb290U3RhdGUpID0+ICh7XG4gICAgZXJyb3I6IHN0YXRlLmVycm9yLFxuICAgIGRlZXBsaW5rczogc3RhdGUuZGVlcGxpbmtzLFxufSlcbmNvbnN0IG1hcERpc3BhdGNoVG9BY3Rpb24gPSAoZGlzcGF0Y2g6IEFwcERpc3BhdGNoKSA9PiAoe1xuICAgIHBvcFBvcHVwOiAoKSA9PiBkaXNwYXRjaChwb3BQb3B1cCgpKSxcbiAgICBwb3BUb1BhZ2U6IChlKSA9PiBkaXNwYXRjaChwb3BUb1BhZ2UoZSkpLFxuICAgIHJlZnJlc2hFcnJvcjogKCkgPT4gZGlzcGF0Y2gocmVmcmVzaEVycm9yKCkpXG59KVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9BY3Rpb24pKFBvcHVwRXJyb3IpIl19