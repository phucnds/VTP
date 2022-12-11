
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/common/SoundMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NvbW1vbi9Tb3VuZE1nci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3REFBbUQ7QUFFN0MsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQXlCO0lBQS9EO1FBQUEscUVBMkZDO1FBekZ5QixnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFDaEMsZUFBUyxHQUFpQixJQUFJLENBQUM7UUFDL0IscUJBQWUsR0FBaUIsSUFBSSxDQUFDO1FBQ3JDLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUNsQyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFDbEMsU0FBRyxHQUFpQixJQUFJLENBQUM7O0lBb0ZuRCxDQUFDO2lCQTNGb0IsUUFBUTtJQVMzQixzQkFBVyxrQkFBTTthQUFqQixjQUFzQixPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDcEUsc0JBQVcsMEJBQWM7YUFBekIsY0FBOEIsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFFaEUsa0JBQVMsR0FBaEIsVUFBaUIsSUFBa0IsRUFBRSxJQUFvQjtRQUFwQixxQkFBQSxFQUFBLFdBQW9CO1FBQ3ZELElBQUksVUFBUSxDQUFDLGNBQWM7WUFBRSxPQUFPO1FBQ3BDLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRU0sZ0JBQU8sR0FBZCxVQUFlLElBQWtCLEVBQUUsSUFBcUI7UUFBckIscUJBQUEsRUFBQSxZQUFxQjtRQUN0RCxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxD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b3J0IFNpbmdsZXRvbk5vZGUgZnJvbSBcIi4uL3V0aWxzL1NpbmdsZXRvbk5vZGVcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvdW5kTWdyIGV4dGVuZHMgU2luZ2xldG9uTm9kZTxTb3VuZE1ncj4oKVxue1xuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKSBTRlhfQlVUVE9OOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKSBTRlhfUE9QVVA6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApIFNGWF9TSE9XX05VTUJFUjogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcCkgU0ZYX1NQSU5OSU5HOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKSBTRlhfU1BJTl9UQVA6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApIEJHTTogY2MuQXVkaW9DbGlwID0gbnVsbDtcblxuICBzdGF0aWMgZ2V0IElzTXV0ZSgpIHsgcmV0dXJuIGNjLmF1ZGlvRW5naW5lLmdldE11c2ljVm9sdW1lKCkgPT0gMDsgfVxuICBzdGF0aWMgZ2V0IElzTXVzaWNQbGF5aW5nKCkgeyByZXR1cm4gY2MuYXVkaW9FbmdpbmUuaXNNdXNpY1BsYXlpbmcoKTsgfVxuXG4gIHN0YXRpYyBwbGF5TXVzaWMoY2xpcDogY2MuQXVkaW9DbGlwLCBsb29wOiBib29sZWFuID0gdHJ1ZSkge1xuICAgIGlmIChTb3VuZE1nci5Jc011c2ljUGxheWluZykgcmV0dXJuO1xuICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyhjbGlwLCBsb29wKTtcbiAgfVxuXG4gIHN0YXRpYyBwbGF5U2Z4KGNsaXA6IGNjLkF1ZGlvQ2xpcCwgbG9vcDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChjbGlwLCBsb29wKTtcbiAgfVxuXG4gIHN0YXRpYyBwYXVzZU11c2ljKCkge1xuICAgIGlmICghdGhpcy5JbnN0YW5jZS5CR00pIHJldHVybjtcbiAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZU11c2ljKCk7XG4gIH1cblxuICBzdGF0aWMgcGF1c2VBbGwoKSB7XG4gICAgY2MuYXVkaW9FbmdpbmUucGF1c2VBbGwoKTtcbiAgfVxuXG4gIHN0YXRpYyBzdG9wTXVzaWMoKSB7XG4gICAgY2MuYXVkaW9FbmdpbmUuc3RvcE11c2ljKCk7XG4gIH1cblxuICBzdGF0aWMgc3RvcEFsbFNmeCgpIHtcbiAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsRWZmZWN0cygpO1xuICB9XG5cbiAgc3RhdGljIHN0b3BBbGwoKSB7XG4gICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbCgpO1xuICB9XG5cbiAgc3RhdGljIHNldE11dGUodmFsdWU6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgY29uc3Qgdm9sdW1lID0gTnVtYmVyKCF2YWx1ZSk7XG4gICAgdGhpcy5zZXRNdXNpY1ZvbHVtZSh2b2x1bWUpO1xuICAgIHRoaXMuc2V0U2Z4Vm9sdW1lKHZvbHVtZSk7XG4gIH1cblxuICBzdGF0aWMgc2V0TXVzaWNWb2x1bWUodmFsdWUpIHtcbiAgICBjYy5hdWRpb0VuZ2luZS5zZXRNdXNpY1ZvbHVtZSh2YWx1ZSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0TXVzaWNWb2x1bWUoKSB7XG4gICAgcmV0dXJuIGNjLmF1ZGlvRW5naW5lLmdldE11c2ljVm9sdW1lKCk7XG4gIH1cblxuICBzdGF0aWMgc2V0U2Z4Vm9sdW1lKHZhbHVlKSB7XG4gICAgY2MuYXVkaW9FbmdpbmUuc2V0RWZmZWN0c1ZvbHVtZSh2YWx1ZSk7XG4gIH1cblxuICBzdGF0aWMgdG9nZ2xlU291bmQoKSB7XG4gICAgdGhpcy5zZXRNdXRlKCF0aGlzLklzTXV0ZSk7XG4gIH1cbiAgc3RhdGljIGZhZGVNdXNpYyh0aW1lciwgdHlwZSA9IFwiZmFkZUluXCIsIGNiID0gbnVsbCkgeyAgLy8gMCA9IGluLCAxIDogb3V0XG4gICAgbGV0IG5vZGUgPSBuZXcgY2MuTm9kZSgnU3ByaXRlJyk7XG4gICAgbGV0IGluaXRTY2FsZSA9IDE7XG4gICAgbm9kZS5zZXRTY2FsZShpbml0U2NhbGUpXG4gICAgY2MudHdlZW4obm9kZSlcbiAgICAgIC50byh0aW1lciwgeyBzY2FsZTogMiB9LCB7XG4gICAgICAgIHByb2dyZXNzOiAoc3RhcnQsIGVuZCwgY3VycmVudCwgcmF0aW8pID0+IHtcbiAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRNdXNpY1ZvbHVtZSh0eXBlID09IFwiZmFkZUluXCIgPyByYXRpbyA6IDEgLSByYXRpbyk7XG4gICAgICAgICAgcmV0dXJuIHN0YXJ0ICsgKGVuZCAtIHN0YXJ0KSAqIHJhdGlvO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhbGwoKCkgPT4gY2IgJiYgY2IoKSlcbiAgICAgIC5zdGFydCgpO1xuICB9XG4gIHN0YXRpYyBmYWRlU2Z4KHRpbWVyLCB0eXBlID0gXCJmYWRlSW5cIiwgY2IgPSBudWxsKSB7IC8vIDAgPSBpbiwgMSA6IG91dFxuICAgIGxldCBub2RlID0gbmV3IGNjLk5vZGUoJ1Nwcml0ZScpO1xuICAgIGxldCBpbml0U2NhbGUgPSAxO1xuICAgIG5vZGUuc2V0U2NhbGUoaW5pdFNjYWxlKVxuICAgIGNjLnR3ZWVuKG5vZGUpXG4gICAgICAudG8odGltZXIsIHsgc2NhbGU6IDIgfSwge1xuICAgICAgICBwcm9ncmVzczogKHN0YXJ0LCBlbmQsIGN1cnJlbnQsIHJhdGlvKSA9PiB7XG4gICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0RWZmZWN0c1ZvbHVtZSh0eXBlID09IFwiZmFkZUluXCIgPyByYXRpbyA6IDEgLSByYXRpbyk7XG4gICAgICAgICAgcmV0dXJuIHN0YXJ0ICsgKGVuZCAtIHN0YXJ0KSAqIHJhdGlvO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhbGwoKCkgPT4gY2IgJiYgY2IoKSlcbiAgICAgIC5zdGFydCgpO1xuICB9XG59XG4iXX0=