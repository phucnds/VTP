"use strict";
cc._RF.push(module, '51173/Z4/VOBZodENTfZ/Jb', 'CompHeader');
// scripts/components/CompHeader.ts

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
exports.CompHeader = void 0;
var FrameMgr_1 = require("../common/FrameMgr");
var SoundMgr_1 = require("../common/SoundMgr");
var connect_1 = require("../src/app/connect");
var SliceApp_1 = require("../src/features/SliceApp");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode;
var CompHeader = /** @class */ (function (_super) {
    __extends(CompHeader, _super);
    function CompHeader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btnSound = null;
        _this.btnSoundIcon = null;
        _this.btnBack = null;
        return _this;
    }
    CompHeader.prototype.onLoad = function () {
        var _this = this;
        var isMute = localStorage.getItem('mute');
        // SoundMgr.setMute(isMute === 'true');
        // this.btnSound.getComponent(cc.Button).interactable = isMute === 'false'
        this.btnSoundIcon.spriteFrame = isMute === 'true' ? FrameMgr_1.default.Instance.ICON_SOUND_OFF : FrameMgr_1.default.Instance.ICON_SOUND;
        this.btnBack.on(cc.Node.EventType.TOUCH_END, function () {
            SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
            // store.dispatch(pushPopup(EAppPopups.PopupExitGame));
            if (window.ReactNativeWebView) {
                window.ReactNativeWebView.postMessage('ON_EXIT_GAME', '*');
            }
            else {
                window.postMessage('ON_EXIT_GAME', '*');
            }
        });
        this.btnSound.on(cc.Node.EventType.TOUCH_END, function () {
            SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
            var muteSetting = localStorage.getItem('mute');
            var newMuteSetting = muteSetting === 'false';
            SoundMgr_1.default.setMute(newMuteSetting);
            // this.btnSound.getComponent(cc.Button).interactable = !newMuteSetting;
            _this.btnSoundIcon.spriteFrame = newMuteSetting ? FrameMgr_1.default.Instance.ICON_SOUND_OFF : FrameMgr_1.default.Instance.ICON_SOUND;
            localStorage.setItem('mute', newMuteSetting ? 'true' : 'false');
        });
    };
    CompHeader.prototype.update = function (dt) {
        var isMute = localStorage.getItem('mute');
        SoundMgr_1.default.setMute(isMute === 'true');
    };
    __decorate([
        property(cc.Node)
    ], CompHeader.prototype, "btnSound", void 0);
    __decorate([
        property(cc.Sprite)
    ], CompHeader.prototype, "btnSoundIcon", void 0);
    __decorate([
        property(cc.Node)
    ], CompHeader.prototype, "btnBack", void 0);
    return CompHeader;
}(cc.Component));
exports.CompHeader = CompHeader;
var mapStateToProps = function (state) { return ({
    user: state.user,
}); };
var mapDispatchToAction = function (dispatch) { return ({
    pushPage: function (payload) {
        return dispatch(SliceApp_1.pushPage(payload));
    },
    popPage: function () { return dispatch(SliceApp_1.popPage()); },
    pushPopup: function (payload) { return dispatch(SliceApp_1.pushPopup(payload)); },
}); };
exports.default = connect_1.default(mapStateToProps, mapDispatchToAction)(CompHeader);

cc._RF.pop();