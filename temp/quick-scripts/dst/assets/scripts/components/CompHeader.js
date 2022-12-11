
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/components/CompHeader.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvQ29tcEhlYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQTBDO0FBQzFDLCtDQUEwQztBQUUxQyw4Q0FBeUM7QUFFekMscURBQWdIO0FBRzFHLElBQUEsS0FBMkMsRUFBRSxDQUFDLFVBQVUsRUFBdEQsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsaUJBQWlCLHVCQUFrQixDQUFDO0FBRS9EO0lBQWdDLDhCQUFZO0lBQTVDO1FBQUEscUVBMkNDO1FBdENVLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsa0JBQVksR0FBYyxJQUFJLENBQUM7UUFFL0IsYUFBTyxHQUFZLElBQUksQ0FBQzs7SUFrQ25DLENBQUM7SUFoQ0csMkJBQU0sR0FBTjtRQUFBLGlCQTBCQztRQXpCRyxJQUFNLE1BQU0sR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVDLHVDQUF1QztRQUN2QywwRUFBMEU7UUFDMUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEdBQUcsTUFBTSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsa0JBQVEsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxrQkFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUE7UUFFbkgsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFO1lBQ3pDLGtCQUFRLENBQUMsT0FBTyxDQUFDLGtCQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQy9DLHVEQUF1RDtZQUV2RCxJQUFVLE1BQU8sQ0FBQyxrQkFBa0IsRUFBRTtnQkFDNUIsTUFBTyxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLENBQUE7YUFDcEU7aUJBQU07Z0JBQ0gsTUFBTSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLENBQUE7YUFDMUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRTtZQUMxQyxrQkFBUSxDQUFDLE9BQU8sQ0FBQyxrQkFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMvQyxJQUFNLFdBQVcsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pELElBQU0sY0FBYyxHQUFHLFdBQVcsS0FBSyxPQUFPLENBQUM7WUFDL0Msa0JBQVEsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDakMsd0VBQXdFO1lBQ3hFLEtBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxHQUFHLGNBQWMsQ0FBQyxDQUFDLENBQUMsa0JBQVEsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxrQkFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUE7WUFDaEgsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BFLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVTLDJCQUFNLEdBQWhCLFVBQWlCLEVBQVU7UUFDdkIsSUFBTSxNQUFNLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QyxrQkFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssTUFBTSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQXJDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNjO0lBRWhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7b0RBQ2tCO0lBRXRDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ2E7SUFrQ25DLGlCQUFDO0NBM0NELEFBMkNDLENBM0MrQixFQUFFLENBQUMsU0FBUyxHQTJDM0M7QUEzQ1ksZ0NBQVU7QUE2Q3ZCLElBQU0sZUFBZSxHQUFHLFVBQUMsS0FBZ0IsSUFBSyxPQUFBLENBQUM7SUFDM0MsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO0NBQ25CLENBQUMsRUFGNEMsQ0FFNUMsQ0FBQTtBQUNGLElBQU0sbUJBQW1CLEdBQUcsVUFBQyxRQUFxQixJQUFLLE9BQUEsQ0FBQztJQUNwRCxRQUFRLEVBQUUsVUFBQyxPQUFvQztRQUMzQyxPQUFBLFFBQVEsQ0FBQyxtQkFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQTNCLENBQTJCO0lBQy9CLE9BQU8sRUFBRSxjQUFNLE9BQUEsUUFBUSxDQUFDLGtCQUFPLEVBQUUsQ0FBQyxFQUFuQixDQUFtQjtJQUNsQyxTQUFTLEVBQUUsVUFBQyxPQUFtQixJQUFLLE9BQUEsUUFBUSxDQUFDLG9CQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBNUIsQ0FBNEI7Q0FDbkUsQ0FBQyxFQUxxRCxDQUtyRCxDQUFBO0FBQ0Ysa0JBQWUsaUJBQU8sQ0FBQyxlQUFlLEVBQUUsbUJBQW1CLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGcmFtZU1nciBmcm9tIFwiLi4vY29tbW9uL0ZyYW1lTWdyXCI7XG5pbXBvcnQgU291bmRNZ3IgZnJvbSBcIi4uL2NvbW1vbi9Tb3VuZE1nclwiO1xuaW1wb3J0IHsgUGFnZUhvbWUgfSBmcm9tIFwiLi4vUGFnZXMvUGFnZUhvbWVcIjtcbmltcG9ydCBjb25uZWN0IGZyb20gXCIuLi9zcmMvYXBwL2Nvbm5lY3RcIjtcbmltcG9ydCBzdG9yZSwgeyBBcHBEaXNwYXRjaCwgUm9vdFN0YXRlIH0gZnJvbSBcIi4uL3NyYy9hcHAvc3RvcmVcIjtcbmltcG9ydCB7IEVBcHBQYWdlcywgRUFwcFBvcHVwcywgSVBhZ2VXaXRoRWZmZWN0LCBwb3BQYWdlLCBwdXNoUGFnZSwgcHVzaFBvcHVwIH0gZnJvbSBcIi4uL3NyYy9mZWF0dXJlcy9TbGljZUFwcFwiO1xuaW1wb3J0IEhlbHBlciBmcm9tIFwiLi4vdXRpbHMvSGVscGVyXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHksIGV4ZWN1dGVJbkVkaXRNb2RlIH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5leHBvcnQgY2xhc3MgQ29tcEhlYWRlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgYWN0aW9uczogYW55O1xuICAgIHByb3BzOiBhbnlcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHB1YmxpYyBidG5Tb3VuZDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBwdWJsaWMgYnRuU291bmRJY29uOiBjYy5TcHJpdGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHB1YmxpYyBidG5CYWNrOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgY29uc3QgaXNNdXRlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ211dGUnKTtcbiAgICAgICAgLy8gU291bmRNZ3Iuc2V0TXV0ZShpc011dGUgPT09ICd0cnVlJyk7XG4gICAgICAgIC8vIHRoaXMuYnRuU291bmQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gaXNNdXRlID09PSAnZmFsc2UnXG4gICAgICAgIHRoaXMuYnRuU291bmRJY29uLnNwcml0ZUZyYW1lID0gaXNNdXRlID09PSAndHJ1ZScgPyBGcmFtZU1nci5JbnN0YW5jZS5JQ09OX1NPVU5EX09GRiA6IEZyYW1lTWdyLkluc3RhbmNlLklDT05fU09VTkRcblxuICAgICAgICB0aGlzLmJ0bkJhY2sub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoKSA9PiB7XG4gICAgICAgICAgICBTb3VuZE1nci5wbGF5U2Z4KFNvdW5kTWdyLkluc3RhbmNlLlNGWF9CVVRUT04pO1xuICAgICAgICAgICAgLy8gc3RvcmUuZGlzcGF0Y2gocHVzaFBvcHVwKEVBcHBQb3B1cHMuUG9wdXBFeGl0R2FtZSkpO1xuXG4gICAgICAgICAgICBpZiAoKDxhbnk+d2luZG93KS5SZWFjdE5hdGl2ZVdlYlZpZXcpIHtcbiAgICAgICAgICAgICAgICAoPGFueT53aW5kb3cpLlJlYWN0TmF0aXZlV2ViVmlldy5wb3N0TWVzc2FnZSgnT05fRVhJVF9HQU1FJywgJyonKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoJ09OX0VYSVRfR0FNRScsICcqJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5idG5Tb3VuZC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsICgpID0+IHtcbiAgICAgICAgICAgIFNvdW5kTWdyLnBsYXlTZngoU291bmRNZ3IuSW5zdGFuY2UuU0ZYX0JVVFRPTik7XG4gICAgICAgICAgICBjb25zdCBtdXRlU2V0dGluZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtdXRlJyk7XG4gICAgICAgICAgICBjb25zdCBuZXdNdXRlU2V0dGluZyA9IG11dGVTZXR0aW5nID09PSAnZmFsc2UnO1xuICAgICAgICAgICAgU291bmRNZ3Iuc2V0TXV0ZShuZXdNdXRlU2V0dGluZyk7XG4gICAgICAgICAgICAvLyB0aGlzLmJ0blNvdW5kLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9ICFuZXdNdXRlU2V0dGluZztcbiAgICAgICAgICAgIHRoaXMuYnRuU291bmRJY29uLnNwcml0ZUZyYW1lID0gbmV3TXV0ZVNldHRpbmcgPyBGcmFtZU1nci5JbnN0YW5jZS5JQ09OX1NPVU5EX09GRiA6IEZyYW1lTWdyLkluc3RhbmNlLklDT05fU09VTkRcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdtdXRlJywgbmV3TXV0ZVNldHRpbmcgPyAndHJ1ZScgOiAnZmFsc2UnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGlzTXV0ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtdXRlJyk7XG4gICAgICAgIFNvdW5kTWdyLnNldE11dGUoaXNNdXRlID09PSAndHJ1ZScpO1xuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBSb290U3RhdGUpID0+ICh7XG4gICAgdXNlcjogc3RhdGUudXNlcixcbn0pXG5jb25zdCBtYXBEaXNwYXRjaFRvQWN0aW9uID0gKGRpc3BhdGNoOiBBcHBEaXNwYXRjaCkgPT4gKHtcbiAgICBwdXNoUGFnZTogKHBheWxvYWQ6IEVBcHBQYWdlcyB8IElQYWdlV2l0aEVmZmVjdCkgPT5cbiAgICAgICAgZGlzcGF0Y2gocHVzaFBhZ2UocGF5bG9hZCkpLFxuICAgIHBvcFBhZ2U6ICgpID0+IGRpc3BhdGNoKHBvcFBhZ2UoKSksXG4gICAgcHVzaFBvcHVwOiAocGF5bG9hZDogRUFwcFBvcHVwcykgPT4gZGlzcGF0Y2gocHVzaFBvcHVwKHBheWxvYWQpKSxcbn0pXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb0FjdGlvbikoQ29tcEhlYWRlcilcbiJdfQ==