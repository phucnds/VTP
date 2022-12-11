"use strict";
cc._RF.push(module, '2fbc04KsHtO9rOLJqTjEbZu', 'SoundMgr');
// scripts/common/SoundMgr.ts

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
var SingletonNode_1 = require("../utils/SingletonNode");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SoundMgr = /** @class */ (function (_super) {
    __extends(SoundMgr, _super);
    function SoundMgr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.SFX_BUTTON = null;
        _this.SFX_POPUP = null;
        _this.SFX_SHOW_NUMBER = null;
        _this.SFX_SPINNING = null;
        _this.SFX_SPIN_TAP = null;
        _this.BGM = null;
        return _this;
    }
    SoundMgr_1 = SoundMgr;
    Object.defineProperty(SoundMgr, "IsMute", {
        get: function () { return cc.audioEngine.getMusicVolume() == 0; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SoundMgr, "IsMusicPlaying", {
        get: function () { return cc.audioEngine.isMusicPlaying(); },
        enumerable: false,
        configurable: true
    });
    SoundMgr.playMusic = function (clip, loop) {
        if (loop === void 0) { loop = true; }
        if (SoundMgr_1.IsMusicPlaying)
            return;
        cc.audioEngine.playMusic(clip, loop);
    };
    SoundMgr.playSfx = function (clip, loop) {
        if (loop === void 0) { loop = false; }
        cc.audioEngine.playEffect(clip, loop);
    };
    SoundMgr.pauseMusic = function () {
        if (!this.Instance.BGM)
            return;
        cc.audioEngine.pauseMusic();
    };
    SoundMgr.pauseAll = function () {
        cc.audioEngine.pauseAll();
    };
    SoundMgr.stopMusic = function () {
        cc.audioEngine.stopMusic();
    };
    SoundMgr.stopAllSfx = function () {
        cc.audioEngine.stopAllEffects();
    };
    SoundMgr.stopAll = function () {
        cc.audioEngine.stopAll();
    };
    SoundMgr.setMute = function (value) {
        if (value === void 0) { value = true; }
        var volume = Number(!value);
        this.setMusicVolume(volume);
        this.setSfxVolume(volume);
    };
    SoundMgr.setMusicVolume = function (value) {
        cc.audioEngine.setMusicVolume(value);
    };
    SoundMgr.getMusicVolume = function () {
        return cc.audioEngine.getMusicVolume();
    };
    SoundMgr.setSfxVolume = function (value) {
        cc.audioEngine.setEffectsVolume(value);
    };
    SoundMgr.toggleSound = function () {
        this.setMute(!this.IsMute);
    };
    SoundMgr.fadeMusic = function (timer, type, cb) {
        if (type === void 0) { type = "fadeIn"; }
        if (cb === void 0) { cb = null; }
        var node = new cc.Node('Sprite');
        var initScale = 1;
        node.setScale(initScale);
        cc.tween(node)
            .to(timer, { scale: 2 }, {
            progress: function (start, end, current, ratio) {
                cc.audioEngine.setMusicVolume(type == "fadeIn" ? ratio : 1 - ratio);
                return start + (end - start) * ratio;
            }
        })
            .call(function () { return cb && cb(); })
            .start();
    };
    SoundMgr.fadeSfx = function (timer, type, cb) {
        if (type === void 0) { type = "fadeIn"; }
        if (cb === void 0) { cb = null; }
        var node = new cc.Node('Sprite');
        var initScale = 1;
        node.setScale(initScale);
        cc.tween(node)
            .to(timer, { scale: 2 }, {
            progress: function (start, end, current, ratio) {
                cc.audioEngine.setEffectsVolume(type == "fadeIn" ? ratio : 1 - ratio);
                return start + (end - start) * ratio;
            }
        })
            .call(function () { return cb && cb(); })
            .start();
    };
    var SoundMgr_1;
    __decorate([
        property(cc.AudioClip)
    ], SoundMgr.prototype, "SFX_BUTTON", void 0);
    __decorate([
        property(cc.AudioClip)
    ], SoundMgr.prototype, "SFX_POPUP", void 0);
    __decorate([
        property(cc.AudioClip)
    ], SoundMgr.prototype, "SFX_SHOW_NUMBER", void 0);
    __decorate([
        property(cc.AudioClip)
    ], SoundMgr.prototype, "SFX_SPINNING", void 0);
    __decorate([
        property(cc.AudioClip)
    ], SoundMgr.prototype, "SFX_SPIN_TAP", void 0);
    __decorate([
        property(cc.AudioClip)
    ], SoundMgr.prototype, "BGM", void 0);
    SoundMgr = SoundMgr_1 = __decorate([
        ccclass
    ], SoundMgr);
    return SoundMgr;
}(SingletonNode_1.default()));
exports.default = SoundMgr;

cc._RF.pop();