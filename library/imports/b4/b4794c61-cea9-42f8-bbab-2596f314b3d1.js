"use strict";
cc._RF.push(module, 'b4794xhzqlC+LurJZbzFLPR', 'PopupErrorReload');
// scripts/Popups/PopupErrorReload.ts

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
exports.PopupErrorReload = void 0;
var SoundMgr_1 = require("../common/SoundMgr");
var connect_1 = require("../src/app/connect");
var SliceApp_1 = require("../src/features/SliceApp");
var SliceDeeplinks_1 = require("../src/features/SliceDeeplinks");
var Popup_1 = require("./Popup");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopupErrorReload = /** @class */ (function (_super) {
    __extends(PopupErrorReload, _super);
    function PopupErrorReload() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btnClose = null;
        _this.btnOk = null;
        return _this;
    }
    PopupErrorReload.prototype.onLoad = function () {
        var _this = this;
        this.btnOk.on(cc.Node.EventType.TOUCH_END, function () {
            SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
            document.location.reload();
        });
        this.btnOk.on(cc.Node.EventType.TOUCH_END, function () {
            SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
            window.location.href = _this.props.deeplinks.data[SliceDeeplinks_1.DeeplinkTypesToName[SliceDeeplinks_1.EDeeplinkTypes.CLOSE_GAME]];
        });
    };
    __decorate([
        property(cc.Node)
    ], PopupErrorReload.prototype, "btnClose", void 0);
    __decorate([
        property(cc.Node)
    ], PopupErrorReload.prototype, "btnOk", void 0);
    return PopupErrorReload;
}(Popup_1.default));
exports.PopupErrorReload = PopupErrorReload;
var mapStateToProps = function (state) { return ({
    deeplinks: state.deeplinks
}); };
var mapDispatchToAction = function (dispatch) { return ({
    pushPage: function (payload) {
        return dispatch(SliceApp_1.pushPage(payload));
    },
    popPage: function () { return dispatch(SliceApp_1.popPage()); },
    pushPopup: function (payload) { return dispatch(SliceApp_1.pushPopup(payload)); },
}); };
exports.default = connect_1.default(mapStateToProps, mapDispatchToAction)(PopupErrorReload);

cc._RF.pop();