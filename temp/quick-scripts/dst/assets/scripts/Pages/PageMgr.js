
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Pages/PageMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3ffeaZEH8hMPIyMUbecULP8', 'PageMgr');
// scripts/Pages/PageMgr.ts

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
exports.PageMgr = exports.pageNameMap = void 0;
var connect_1 = require("../src/app/connect");
var store_1 = require("../src/app/store");
var SliceApp_1 = require("../src/features/SliceApp");
var Localization_1 = require("../common/Localization");
var SoundMgr_1 = require("../common/SoundMgr");
var wsgw_1 = require("../src/app/wsgw");
var common_1 = require("../src/common/common");
var APIDefine_1 = require("../src/app/APIDefine");
var SliceQuests_1 = require("../src/features/SliceQuests");
var UserProfile_1 = require("../common/UserProfile");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
exports.pageNameMap = {
    home: 'PageHome',
    rules: 'PageRules',
    buyTurn: 'PageBuyTurn',
    inventory: 'PageInventory',
    reward: 'PageReward',
    savenow: 'PageSavenow',
    weeklyPrizeHistory: 'PageWeeklyPrizeHistory',
    paynow: 'PagePaynow',
    guiTietKiem: 'PageGuiTietKiem',
};
var PageMgr = /** @class */ (function (_super) {
    __extends(PageMgr, _super);
    function PageMgr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PagePrefabs = [];
        _this.pageCover = null;
        _this.Canvas = null;
        _this.mPreviousView = null;
        _this.mCurrentView = null;
        _this.mCurrentPageView = null;
        _this.needToCheckRewardPopup = false;
        return _this;
    }
    PageMgr.show = function (viewName, effectType, easing, duration) {
        var _a;
        if (effectType === void 0) { effectType = SliceApp_1.PAGE_SHOW_EFFECT.APPEAR; }
        if (easing === void 0) { easing = "smooth"; }
        if (duration === void 0) { duration = 0.3; }
        var instance = this.Instance;
        instance.mPreviousView = instance.mCurrentView;
        // cc.find('Canvas').getChildByName("NodeFixedOnUI").active = true;
        for (var _i = 0, _b = instance.node.children; _i < _b.length; _i++) {
            var view = _b[_i];
            var isActive = view.name == SliceApp_1.EAppPages[viewName];
            if (isActive) {
                instance.mCurrentView = view;
            }
            if (view.active != isActive) {
                view.active = isActive;
            }
        }
        if (instance.mPreviousView && instance.mCurrentView && instance.mPreviousView != instance.mCurrentView) {
            instance.animate(effectType, easing, duration, viewName);
        }
        else {
            (_a = instance.mCurrentView.getComponent(SliceApp_1.EAppPages[viewName])) === null || _a === void 0 ? void 0 : _a.init();
        }
    };
    PageMgr.hide = function () {
        var instance = this.Instance;
        for (var _i = 0, _a = instance.node.children; _i < _a.length; _i++) {
            var view = _a[_i];
            view.active = false;
        }
    };
    PageMgr.getUI = function (viewName) {
        return this.Instance.node.getChildByName(SliceApp_1.EAppPages[viewName]).getComponent(SliceApp_1.EAppPages[viewName]);
    };
    PageMgr.prototype.onLoad = function () {
        // super.onLoad();
        // if (!(/localhost/i.test(window.location.hostname) || /elofun.github.io/i.test(window.location.hostname))) {
        //     console.log = console.clear
        //     console.warn = console.clear
        //     console.error = console.clear
        // }
        // setInterval(() => {
        //     cc.screen.requestFullScreen();
        // }, 1000);
        var _this = this;
        window.vdsShareMissionCallback = function (payload) {
            setTimeout(function () {
                UserProfile_1.userProfile.UpdateProfile(true, function () {
                    wsgw_1.default.userRequest(APIDefine_1.default.getMissionList, {}, function (e) {
                        store_1.default.dispatch(SliceQuests_1.syncQuests(e));
                    }, console.error);
                    common_1.checkRewardPopup();
                    UserProfile_1.userProfile.UpdateBalance();
                });
            }, 1000);
        };
        window.vdsCompleteMissionCallback = function (payload) {
            setTimeout(function () {
                UserProfile_1.userProfile.UpdateProfile(true, function () {
                    wsgw_1.default.userRequest(APIDefine_1.default.getMissionList, {}, function (e) {
                        store_1.default.dispatch(SliceQuests_1.syncQuests(e));
                    }, console.error);
                    common_1.checkRewardPopup();
                    UserProfile_1.userProfile.UpdateBalance();
                });
            }, 1000);
        };
        window.vdsBuyTurnCallback = function (payload) {
        };
        // window.addEventListener("message", (event) => {
        //     const prefix = typeof event.data === 'string' ? event.data.split('_').shift() : '';
        //     if (prefix === 'redirect') {
        //         const postFix = typeof event.data === 'string' ? event.data.split('_').pop() : '';
        //         this.actions.pushPage({ page: postFix, effect: PAGE_SHOW_EFFECT.LEFT })
        //     }
        //     if (prefix === 'complete-quest') {
        //         setTimeout(() => {
        //             userProfile.UpdateProfile(true, () => {
        //                 wsgw.userRequest(APIDefine.getMissionList, {}, (e) => {
        //                     store.dispatch(syncQuests(e));
        //                 }, console.error);
        //                 checkRewardPopup()
        //                 userProfile.UpdateBalance();
        //             });
        //         }, 1000);
        //     }
        // });
        cc.game.on(cc.game.EVENT_HIDE, function () {
            _this.needToCheckRewardPopup = true;
            SoundMgr_1.default.setMute(true);
        });
        cc.game.on(cc.game.EVENT_SHOW, function () {
            if (!_this.needToCheckRewardPopup)
                return;
            _this.needToCheckRewardPopup = false;
            var muteSetting = localStorage.getItem('mute') === 'true';
            SoundMgr_1.default.setMute(muteSetting);
            setTimeout(function () {
                UserProfile_1.userProfile.UpdateProfile(true, function () {
                    wsgw_1.default.userRequest(APIDefine_1.default.getMissionList, {}, function (e) {
                        store_1.default.dispatch(SliceQuests_1.syncQuests(e));
                    }, console.error);
                    common_1.checkRewardPopup();
                    UserProfile_1.userProfile.UpdateBalance();
                });
            }, 1000);
        });
        cc.view.enableAutoFullScreen(false);
        cc.view.resizeWithBrowserSize(false);
        PageMgr.Instance = this;
        for (var i = 0; i < this.PagePrefabs.length; i++) {
            if (!this.PagePrefabs[i])
                continue;
            var node = cc.instantiate(this.PagePrefabs[i]);
            node.active = false;
            this.node.addChild(node);
            // node.group = "UI"
        }
        this.Canvas = cc.find("Canvas");
    };
    PageMgr.prototype.start = function () {
        window.appVersion = "0.9.10 - 26/08/2022";
        console.log("Version : " + window.appVersion);
        this.pageCover = cc.find('Canvas').getChildByName("Stage Cover");
        this.pageCover.active = false;
        cc.find('Canvas').getChildByName("TopUI").active = false;
        this.onStateChange();
        SoundMgr_1.default.playMusic(SoundMgr_1.default.Instance.BGM, true);
        var lang = localStorage.getItem("lang") || "vi";
        var bgmActive = Number(localStorage.getItem("bgm") || "1");
        var sfxActive = Number(localStorage.getItem("sfx") || "1");
        SoundMgr_1.default.setSfxVolume(sfxActive);
        SoundMgr_1.default.setMusicVolume(bgmActive);
        Localization_1.default.ChangeLanguage(lang);
        cc.view.enableAutoFullScreen(false);
    };
    PageMgr.prototype.onStateChange = function () {
        if (this.mCurrentPageView != this.props.app.currentPage) {
            this.mCurrentPageView = this.props.app.currentPage;
            PageMgr.show(this.props.app.currentPage, this.props.app.effectType);
            // let pageHasTopUI = [EAppPages.PageHome, EAppPages.PageWinner, EAppPages.PagePrizes]
            // cc.find('Canvas').getChildByName("TopUI").active = pageHasTopUI.includes(this.props.app.currentPage) && (!shallowEqualObjects(this.props.games, {}));
        }
    };
    PageMgr.prototype.animate = function (effectType, easing, duration, viewName) {
        var _this = this;
        var _a;
        this.mPreviousView.active = true;
        this.mCurrentView.active = true;
        var previousViewPosition = null;
        var currentViewPosition = null;
        switch (effectType) {
            case SliceApp_1.PAGE_SHOW_EFFECT.APPEAR:
                {
                    this.mPreviousView.active = false;
                    (_a = this.mCurrentView.getComponent(SliceApp_1.EAppPages[viewName])) === null || _a === void 0 ? void 0 : _a.init();
                    break;
                }
            case SliceApp_1.PAGE_SHOW_EFFECT.UP:
                {
                    currentViewPosition = cc.v2(0, -this.Canvas.height * 1);
                    previousViewPosition = cc.v2(0, this.Canvas.height * 1);
                    break;
                }
            case SliceApp_1.PAGE_SHOW_EFFECT.DOWN:
                {
                    currentViewPosition = cc.v2(0, this.Canvas.height * 1);
                    previousViewPosition = cc.v2(0, -this.Canvas.height * 1);
                    break;
                }
            case SliceApp_1.PAGE_SHOW_EFFECT.LEFT:
                {
                    currentViewPosition = cc.v2(this.Canvas.width * 1, this.Canvas.height / 2);
                    previousViewPosition = cc.v2(-this.Canvas.width * 1, this.Canvas.height / 2);
                    break;
                }
            case SliceApp_1.PAGE_SHOW_EFFECT.RIGHT:
                {
                    currentViewPosition = cc.v2(-this.Canvas.width * 1, this.Canvas.height / 2);
                    previousViewPosition = cc.v2(this.Canvas.width * 1, this.Canvas.height / 2);
                    break;
                }
            case SliceApp_1.PAGE_SHOW_EFFECT.SCALE:
                {
                    this.mCurrentView.setScale(cc.Vec2.ZERO);
                    cc.tween(this.mPreviousView)
                        .to(duration, { scale: 0 }, { easing: easing })
                        .call(function () { return _this.mPreviousView.active = false; })
                        .start();
                    cc.tween(this.mCurrentView)
                        .delay(duration)
                        .to(duration, { scale: 1 }, { easing: easing })
                        .call(function () { var _a; return (_a = _this.mCurrentView.getComponent(SliceApp_1.EAppPages[viewName])) === null || _a === void 0 ? void 0 : _a.init(); })
                        .start();
                    break;
                }
            case SliceApp_1.PAGE_SHOW_EFFECT.FADE:
                {
                    this.pageCover.active = true;
                    this.mCurrentView.active = false;
                    cc.tween(this.mPreviousView)
                        .to(duration, { scale: this.mPreviousView.scaleX }, {
                        progress: function (start, end, current, ratio) {
                            // this.mPreviousStage.opacity = (1 - ratio) * 255;
                            _this.pageCover.opacity = ratio * 255;
                            return start + (end - start) * ratio;
                        }
                    })
                        .call(function () {
                        _this.mPreviousView.active = false;
                        _this.mCurrentView.active = true;
                        // this.mCurrentView.getComponent(EAppPages[viewName]).init();
                    })
                        .start();
                    cc.tween(this.mCurrentView)
                        .delay(duration)
                        .to(duration, { scale: this.mCurrentView.scaleX }, {
                        progress: function (start, end, current, ratio) {
                            // this.mCurrentStage.opacity = ratio * 255;
                            _this.pageCover.opacity = (1 - ratio) * 255;
                            return start + (end - start) * ratio;
                        }
                    })
                        .call(function () {
                        _this.pageCover.active = false;
                    })
                        .start();
                    break;
                }
        }
        if (previousViewPosition && currentViewPosition) {
            cc.tween(this.mPreviousView)
                .set({ scale: 1 })
                .to(duration, { position: previousViewPosition }, { easing: easing })
                .call(function () { return _this.mPreviousView.active = false; })
                .start();
            cc.tween(this.mCurrentView)
                .set({ opacity: 0, scale: 1 })
                .delay(0)
                .set({ position: currentViewPosition, opacity: 255 })
                .to(duration, { position: cc.v3(0, this.Canvas.height / 2, 0) }, { easing: easing })
                .call(function () { var _a; return (_a = _this.mCurrentView.getComponent(SliceApp_1.EAppPages[viewName])) === null || _a === void 0 ? void 0 : _a.init(); })
                .start();
        }
    };
    __decorate([
        property(cc.Prefab)
    ], PageMgr.prototype, "PagePrefabs", void 0);
    return PageMgr;
}(cc.Component));
exports.PageMgr = PageMgr;
var mapStateToProps = function (state) { return ({
    app: state.app,
}); };
var mapDispatchToAction = function (dispatch) { return ({
    pushPopup: function (e) { return dispatch(SliceApp_1.pushPopup(e)); },
}); };
exports.default = connect_1.default(mapStateToProps, mapDispatchToAction)(PageMgr);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BhZ2VzL1BhZ2VNZ3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDhDQUF5QztBQUN6QywwQ0FBaUU7QUFDakUscURBQThGO0FBRTlGLHVEQUFrRDtBQUNsRCwrQ0FBMEM7QUFDMUMsd0NBQW1DO0FBQ25DLCtDQUF3RDtBQUN4RCxrREFBNkM7QUFDN0MsMkRBQXlEO0FBQ3pELHFEQUFvRDtBQUM5QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUUvQixRQUFBLFdBQVcsR0FBRztJQUN2QixJQUFJLEVBQUUsVUFBVTtJQUNoQixLQUFLLEVBQUUsV0FBVztJQUNsQixPQUFPLEVBQUUsYUFBYTtJQUN0QixTQUFTLEVBQUUsZUFBZTtJQUMxQixNQUFNLEVBQUUsWUFBWTtJQUNwQixPQUFPLEVBQUUsYUFBYTtJQUN0QixrQkFBa0IsRUFBRSx3QkFBd0I7SUFDNUMsTUFBTSxFQUFFLFlBQVk7SUFDcEIsV0FBVyxFQUFFLGlCQUFpQjtDQUNqQyxDQUFBO0FBRUQ7SUFBNkIsMkJBQVk7SUFBekM7UUFBQSxxRUE0UUM7UUF4UWdDLGlCQUFXLEdBQXFCLEVBQUUsQ0FBQztRQUV4RCxlQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFDdkIsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFDOUIsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFDN0Isc0JBQWdCLEdBQWMsSUFBSSxDQUFDO1FBQ25DLDRCQUFzQixHQUFHLEtBQUssQ0FBQzs7SUFpUTNDLENBQUM7SUEvUFUsWUFBSSxHQUFYLFVBQVksUUFBbUIsRUFDM0IsVUFBc0QsRUFDdEQsTUFBeUIsRUFDekIsUUFBc0I7O1FBRnRCLDJCQUFBLEVBQUEsYUFBK0IsMkJBQWdCLENBQUMsTUFBTTtRQUN0RCx1QkFBQSxF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VUFBQyxLQUFnQixJQUFLLE9BQUEsQ0FBQztJQUMzQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUc7Q0FDakIsQ0FBQyxFQUY0QyxDQUU1QyxDQUFBO0FBQ0YsSUFBTSxtQkFBbUIsR0FBRyxVQUFDLFFBQXFCLElBQUssT0FBQSxDQUFDO0lBQ3BELFNBQVMsRUFBRSxVQUFDLENBQWEsSUFBSyxPQUFBLFFBQVEsQ0FBQyxvQkFBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQXRCLENBQXNCO0NBQ3ZELENBQUMsRUFGcUQsQ0FFckQsQ0FBQTtBQUNGLGtCQUFlLGlCQUFPLENBQUMsZUFBZSxFQUFFLG1CQUFtQixDQUFDLENBQUMsT0FBTyxDQUFDLENBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJztcbmltcG9ydCBjb25uZWN0IGZyb20gXCIuLi9zcmMvYXBwL2Nvbm5lY3RcIjtcbmltcG9ydCBzdG9yZSwgeyBBcHBEaXNwYXRjaCwgUm9vdFN0YXRlIH0gZnJvbSBcIi4uL3NyYy9hcHAvc3RvcmVcIjtcbmltcG9ydCB7IEVBcHBQYWdlcywgRUFwcFBvcHVwcywgUEFHRV9TSE9XX0VGRkVDVCwgcHVzaFBvcHVwIH0gZnJvbSBcIi4uL3NyYy9mZWF0dXJlcy9TbGljZUFwcFwiO1xuaW1wb3J0IFBhZ2UgZnJvbSBcIi4vUGFnZVwiO1xuaW1wb3J0IExvY2FsaXphdGlvbiBmcm9tIFwiLi4vY29tbW9uL0xvY2FsaXphdGlvblwiO1xuaW1wb3J0IFNvdW5kTWdyIGZyb20gXCIuLi9jb21tb24vU291bmRNZ3JcIjtcbmltcG9ydCB3c2d3IGZyb20gXCIuLi9zcmMvYXBwL3dzZ3dcIjtcbmltcG9ydCB7IGNoZWNrUmV3YXJkUG9wdXAgfSBmcm9tIFwiLi4vc3JjL2NvbW1vbi9jb21tb25cIjtcbmltcG9ydCBBUElEZWZpbmUgZnJvbSBcIi4uL3NyYy9hcHAvQVBJRGVmaW5lXCI7XG5pbXBvcnQgeyBzeW5jUXVlc3RzIH0gZnJvbSBcIi4uL3NyYy9mZWF0dXJlcy9TbGljZVF1ZXN0c1wiO1xuaW1wb3J0IHsgdXNlclByb2ZpbGUgfSBmcm9tIFwiLi4vY29tbW9uL1VzZXJQcm9maWxlXCI7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5leHBvcnQgY29uc3QgcGFnZU5hbWVNYXAgPSB7XG4gICAgaG9tZTogJ1BhZ2VIb21lJyxcbiAgICBydWxlczogJ1BhZ2VSdWxlcycsXG4gICAgYnV5VHVybjogJ1BhZ2VCdXlUdXJuJyxcbiAgICBpbnZlbnRvcnk6ICdQYWdlSW52ZW50b3J5JyxcbiAgICByZXdhcmQ6ICdQYWdlUmV3YXJkJyxcbiAgICBzYXZlbm93OiAnUGFnZVNhdmVub3cnLFxuICAgIHdlZWtseVByaXplSGlzdG9yeTogJ1BhZ2VXZWVrbHlQcml6ZUhpc3RvcnknLFxuICAgIHBheW5vdzogJ1BhZ2VQYXlub3cnLFxuICAgIGd1aVRpZXRLaWVtOiAnUGFnZUd1aVRpZXRLaWVtJyxcbn1cblxuZXhwb3J0IGNsYXNzIFBhZ2VNZ3IgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIGFjdGlvbnM6IGFueTtcbiAgICBwcm9wczogUm9vdFN0YXRlO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYikgcHJpdmF0ZSBQYWdlUHJlZmFiczogQXJyYXk8Y2MuUHJlZmFiPiA9IFtdO1xuXG4gICAgcHJpdmF0ZSBwYWdlQ292ZXI6IGNjLk5vZGUgPSBudWxsO1xuICAgIHByaXZhdGUgQ2FudmFzOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBwcml2YXRlIG1QcmV2aW91c1ZpZXc6IGNjLk5vZGUgPSBudWxsO1xuICAgIHByaXZhdGUgbUN1cnJlbnRWaWV3OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBwcml2YXRlIG1DdXJyZW50UGFnZVZpZXc6IEVBcHBQYWdlcyA9IG51bGw7XG4gICAgcHJpdmF0ZSBuZWVkVG9DaGVja1Jld2FyZFBvcHVwID0gZmFsc2U7XG4gICAgc3RhdGljIEluc3RhbmNlOiBQYWdlTWdyXG4gICAgc3RhdGljIHNob3codmlld05hbWU6IEVBcHBQYWdlcyxcbiAgICAgICAgZWZmZWN0VHlwZTogUEFHRV9TSE9XX0VGRkVDVCA9IFBBR0VfU0hPV19FRkZFQ1QuQVBQRUFSLFxuICAgICAgICBlYXNpbmc6IHN0cmluZyA9IFwic21vb3RoXCIsXG4gICAgICAgIGR1cmF0aW9uOiBudW1iZXIgPSAwLjMpIHtcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLkluc3RhbmNlO1xuICAgICAgICBpbnN0YW5jZS5tUHJldmlvdXNWaWV3ID0gaW5zdGFuY2UubUN1cnJlbnRWaWV3O1xuICAgICAgICAvLyBjYy5maW5kKCdDYW52YXMnKS5nZXRDaGlsZEJ5TmFtZShcIk5vZGVGaXhlZE9uVUlcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgZm9yIChsZXQgdmlldyBvZiBpbnN0YW5jZS5ub2RlLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICBjb25zdCBpc0FjdGl2ZSA9IHZpZXcubmFtZSA9PSBFQXBwUGFnZXNbdmlld05hbWVdO1xuICAgICAgICAgICAgaWYgKGlzQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UubUN1cnJlbnRWaWV3ID0gdmlldztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHZpZXcuYWN0aXZlICE9IGlzQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgdmlldy5hY3RpdmUgPSBpc0FjdGl2ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbnN0YW5jZS5tUHJldmlvdXNWaWV3ICYmIGluc3RhbmNlLm1DdXJyZW50VmlldyAmJiBpbnN0YW5jZS5tUHJldmlvdXNWaWV3ICE9IGluc3RhbmNlLm1DdXJyZW50Vmlldykge1xuICAgICAgICAgICAgaW5zdGFuY2UuYW5pbWF0ZShlZmZlY3RUeXBlLCBlYXNpbmcsIGR1cmF0aW9uLCB2aWV3TmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpbnN0YW5jZS5tQ3VycmVudFZpZXcuZ2V0Q29tcG9uZW50KEVBcHBQYWdlc1t2aWV3TmFtZV0pPy5pbml0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGhpZGUoKSB7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5JbnN0YW5jZTtcbiAgICAgICAgZm9yIChsZXQgdmlldyBvZiBpbnN0YW5jZS5ub2RlLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICB2aWV3LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBnZXRVSTxUPih2aWV3TmFtZTogRUFwcFBhZ2VzKTogVCB7XG4gICAgICAgIHJldHVybiB0aGlzLkluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoRUFwcFBhZ2VzW3ZpZXdOYW1lXSkuZ2V0Q29tcG9uZW50KEVBcHBQYWdlc1t2aWV3TmFtZV0pO1xuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgLy8gc3VwZXIub25Mb2FkKCk7XG4gICAgICAgIC8vIGlmICghKC9sb2NhbGhvc3QvaS50ZXN0KHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSkgfHwgL2Vsb2Z1bi5naXRodWIuaW8vaS50ZXN0KHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSkpKSB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyA9IGNvbnNvbGUuY2xlYXJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUud2FybiA9IGNvbnNvbGUuY2xlYXJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUuZXJyb3IgPSBjb25zb2xlLmNsZWFyXG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAvLyAgICAgY2Muc2NyZWVuLnJlcXVlc3RGdWxsU2NyZWVuKCk7XG4gICAgICAgIC8vIH0sIDEwMDApO1xuXG4gICAgICAgICh3aW5kb3cgYXMgYW55KS52ZHNTaGFyZU1pc3Npb25DYWxsYmFjayA9IChwYXlsb2FkKSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB1c2VyUHJvZmlsZS5VcGRhdGVQcm9maWxlKHRydWUsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgd3Nndy51c2VyUmVxdWVzdChBUElEZWZpbmUuZ2V0TWlzc2lvbkxpc3QsIHt9LCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goc3luY1F1ZXN0cyhlKSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIGNvbnNvbGUuZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICBjaGVja1Jld2FyZFBvcHVwKClcbiAgICAgICAgICAgICAgICAgICAgdXNlclByb2ZpbGUuVXBkYXRlQmFsYW5jZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH1cblxuICAgICAgICAod2luZG93IGFzIGFueSkudmRzQ29tcGxldGVNaXNzaW9uQ2FsbGJhY2sgPSAocGF5bG9hZCkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdXNlclByb2ZpbGUuVXBkYXRlUHJvZmlsZSh0cnVlLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHdzZ3cudXNlclJlcXVlc3QoQVBJRGVmaW5lLmdldE1pc3Npb25MaXN0LCB7fSwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHN5bmNRdWVzdHMoZSkpO1xuICAgICAgICAgICAgICAgICAgICB9LCBjb25zb2xlLmVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tSZXdhcmRQb3B1cCgpXG4gICAgICAgICAgICAgICAgICAgIHVzZXJQcm9maWxlLlVwZGF0ZUJhbGFuY2UoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9XG5cbiAgICAgICAgKHdpbmRvdyBhcyBhbnkpLnZkc0J1eVR1cm5DYWxsYmFjayA9IChwYXlsb2FkKSA9PiB7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIC8vICAgICBjb25zdCBwcmVmaXggPSB0eXBlb2YgZXZlbnQuZGF0YSA9PT0gJ3N0cmluZycgPyBldmVudC5kYXRhLnNwbGl0KCdfJykuc2hpZnQoKSA6ICcnO1xuXG4gICAgICAgIC8vICAgICBpZiAocHJlZml4ID09PSAncmVkaXJlY3QnKSB7XG4gICAgICAgIC8vICAgICAgICAgY29uc3QgcG9zdEZpeCA9IHR5cGVvZiBldmVudC5kYXRhID09PSAnc3RyaW5nJyA/IGV2ZW50LmRhdGEuc3BsaXQoJ18nKS5wb3AoKSA6ICcnO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuYWN0aW9ucy5wdXNoUGFnZSh7IHBhZ2U6IHBvc3RGaXgsIGVmZmVjdDogUEFHRV9TSE9XX0VGRkVDVC5MRUZUIH0pXG4gICAgICAgIC8vICAgICB9XG5cbiAgICAgICAgLy8gICAgIGlmIChwcmVmaXggPT09ICdjb21wbGV0ZS1xdWVzdCcpIHtcbiAgICAgICAgLy8gICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgdXNlclByb2ZpbGUuVXBkYXRlUHJvZmlsZSh0cnVlLCAoKSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB3c2d3LnVzZXJSZXF1ZXN0KEFQSURlZmluZS5nZXRNaXNzaW9uTGlzdCwge30sIChlKSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goc3luY1F1ZXN0cyhlKSk7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB9LCBjb25zb2xlLmVycm9yKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNoZWNrUmV3YXJkUG9wdXAoKVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdXNlclByb2ZpbGUuVXBkYXRlQmFsYW5jZSgpO1xuICAgICAgICAvLyAgICAgICAgICAgICB9KTtcbiAgICAgICAgLy8gICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgY2MuZ2FtZS5vbihjYy5nYW1lLkVWRU5UX0hJREUsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubmVlZFRvQ2hlY2tSZXdhcmRQb3B1cCA9IHRydWU7XG4gICAgICAgICAgICBTb3VuZE1nci5zZXRNdXRlKHRydWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjYy5nYW1lLm9uKGNjLmdhbWUuRVZFTlRfU0hPVywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLm5lZWRUb0NoZWNrUmV3YXJkUG9wdXApIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMubmVlZFRvQ2hlY2tSZXdhcmRQb3B1cCA9IGZhbHNlO1xuICAgICAgICAgICAgY29uc3QgbXV0ZVNldHRpbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXV0ZScpID09PSAndHJ1ZSc7XG4gICAgICAgICAgICBTb3VuZE1nci5zZXRNdXRlKG11dGVTZXR0aW5nKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHVzZXJQcm9maWxlLlVwZGF0ZVByb2ZpbGUodHJ1ZSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB3c2d3LnVzZXJSZXF1ZXN0KEFQSURlZmluZS5nZXRNaXNzaW9uTGlzdCwge30sIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChzeW5jUXVlc3RzKGUpKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgY29uc29sZS5lcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrUmV3YXJkUG9wdXAoKVxuICAgICAgICAgICAgICAgICAgICB1c2VyUHJvZmlsZS5VcGRhdGVCYWxhbmNlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY2Mudmlldy5lbmFibGVBdXRvRnVsbFNjcmVlbihmYWxzZSlcbiAgICAgICAgY2Mudmlldy5yZXNpemVXaXRoQnJvd3NlclNpemUoZmFsc2UpXG4gICAgICAgIFBhZ2VNZ3IuSW5zdGFuY2UgPSB0aGlzO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuUGFnZVByZWZhYnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5QYWdlUHJlZmFic1tpXSkgY29udGludWVcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLlBhZ2VQcmVmYWJzW2ldKTtcbiAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICAvLyBub2RlLmdyb3VwID0gXCJVSVwiXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5DYW52YXMgPSBjYy5maW5kKFwiQ2FudmFzXCIpO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICAod2luZG93IGFzIGFueSkuYXBwVmVyc2lvbiA9IFwiMC45LjEwIC0gMjYvMDgvMjAyMlwiXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVmVyc2lvbiA6IFwiICsgKHdpbmRvdyBhcyBhbnkpLmFwcFZlcnNpb24pO1xuICAgICAgICB0aGlzLnBhZ2VDb3ZlciA9IGNjLmZpbmQoJ0NhbnZhcycpLmdldENoaWxkQnlOYW1lKFwiU3RhZ2UgQ292ZXJcIik7XG4gICAgICAgIHRoaXMucGFnZUNvdmVyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBjYy5maW5kKCdDYW52YXMnKS5nZXRDaGlsZEJ5TmFtZShcIlRvcFVJXCIpLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgIHRoaXMub25TdGF0ZUNoYW5nZSgpXG4gICAgICAgIFNvdW5kTWdyLnBsYXlNdXNpYyhTb3VuZE1nci5JbnN0YW5jZS5CR00sIHRydWUpXG4gICAgICAgIGxldCBsYW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsYW5nXCIpIHx8IFwidmlcIlxuICAgICAgICBsZXQgYmdtQWN0aXZlID0gTnVtYmVyKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYmdtXCIpIHx8IFwiMVwiKVxuICAgICAgICBsZXQgc2Z4QWN0aXZlID0gTnVtYmVyKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2Z4XCIpIHx8IFwiMVwiKVxuICAgICAgICBTb3VuZE1nci5zZXRTZnhWb2x1bWUoc2Z4QWN0aXZlKVxuICAgICAgICBTb3VuZE1nci5zZXRNdXNpY1ZvbHVtZShiZ21BY3RpdmUpXG4gICAgICAgIExvY2FsaXphdGlvbi5DaGFuZ2VMYW5ndWFnZShsYW5nKVxuICAgICAgICBjYy52aWV3LmVuYWJsZUF1dG9GdWxsU2NyZWVuKGZhbHNlKVxuICAgIH1cbiAgICBvblN0YXRlQ2hhbmdlKCkge1xuICAgICAgICBpZiAodGhpcy5tQ3VycmVudFBhZ2VWaWV3ICE9IHRoaXMucHJvcHMuYXBwLmN1cnJlbnRQYWdlKSB7XG4gICAgICAgICAgICB0aGlzLm1DdXJyZW50UGFnZVZpZXcgPSB0aGlzLnByb3BzLmFwcC5jdXJyZW50UGFnZVxuICAgICAgICAgICAgUGFnZU1nci5zaG93KHRoaXMucHJvcHMuYXBwLmN1cnJlbnRQYWdlLCB0aGlzLnByb3BzLmFwcC5lZmZlY3RUeXBlKTtcbiAgICAgICAgICAgIC8vIGxldCBwYWdlSGFzVG9wVUkgPSBbRUFwcFBhZ2VzLlBhZ2VIb21lLCBFQXBwUGFnZXMuUGFnZVdpbm5lciwgRUFwcFBhZ2VzLlBhZ2VQcml6ZXNdXG4gICAgICAgICAgICAvLyBjYy5maW5kKCdDYW52YXMnKS5nZXRDaGlsZEJ5TmFtZShcIlRvcFVJXCIpLmFjdGl2ZSA9IHBhZ2VIYXNUb3BVSS5pbmNsdWRlcyh0aGlzLnByb3BzLmFwcC5jdXJyZW50UGFnZSkgJiYgKCFzaGFsbG93RXF1YWxPYmplY3RzKHRoaXMucHJvcHMuZ2FtZXMsIHt9KSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBhbmltYXRlKGVmZmVjdFR5cGU6IFBBR0VfU0hPV19FRkZFQ1QsIGVhc2luZzogc3RyaW5nLCBkdXJhdGlvbjogbnVtYmVyLCB2aWV3TmFtZTogRUFwcFBhZ2VzKSB7XG4gICAgICAgIHRoaXMubVByZXZpb3VzVmlldy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLm1DdXJyZW50Vmlldy5hY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgIGxldCBwcmV2aW91c1ZpZXdQb3NpdGlvbiA9IG51bGw7XG4gICAgICAgIGxldCBjdXJyZW50Vmlld1Bvc2l0aW9uID0gbnVsbDtcbiAgICAgICAgc3dpdGNoIChlZmZlY3RUeXBlKSB7XG4gICAgICAgICAgICBjYXNlIFBBR0VfU0hPV19FRkZFQ1QuQVBQRUFSOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tUHJldmlvdXNWaWV3LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1DdXJyZW50Vmlldy5nZXRDb21wb25lbnQoRUFwcFBhZ2VzW3ZpZXdOYW1lXSk/LmluaXQoKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhc2UgUEFHRV9TSE9XX0VGRkVDVC5VUDpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRWaWV3UG9zaXRpb24gPSBjYy52MigwLCAtIHRoaXMuQ2FudmFzLmhlaWdodCAqIDEpO1xuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1ZpZXdQb3NpdGlvbiA9IGNjLnYyKDAsIHRoaXMuQ2FudmFzLmhlaWdodCAqIDEpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFBBR0VfU0hPV19FRkZFQ1QuRE9XTjpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRWaWV3UG9zaXRpb24gPSBjYy52MigwLCB0aGlzLkNhbnZhcy5oZWlnaHQgKiAxKTtcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNWaWV3UG9zaXRpb24gPSBjYy52MigwLCAtIHRoaXMuQ2FudmFzLmhlaWdodCAqIDEpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFBBR0VfU0hPV19FRkZFQ1QuTEVGVDpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRWaWV3UG9zaXRpb24gPSBjYy52Mih0aGlzLkNhbnZhcy53aWR0aCAqIDEsIHRoaXMuQ2FudmFzLmhlaWdodCAvIDIpO1xuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1ZpZXdQb3NpdGlvbiA9IGNjLnYyKC0gdGhpcy5DYW52YXMud2lkdGggKiAxLCB0aGlzLkNhbnZhcy5oZWlnaHQgLyAyKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBQQUdFX1NIT1dfRUZGRUNULlJJR0hUOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFZpZXdQb3NpdGlvbiA9IGNjLnYyKC0gdGhpcy5DYW52YXMud2lkdGggKiAxLCB0aGlzLkNhbnZhcy5oZWlnaHQgLyAyKTtcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNWaWV3UG9zaXRpb24gPSBjYy52Mih0aGlzLkNhbnZhcy53aWR0aCAqIDEsIHRoaXMuQ2FudmFzLmhlaWdodCAvIDIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFBBR0VfU0hPV19FRkZFQ1QuU0NBTEU6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1DdXJyZW50Vmlldy5zZXRTY2FsZShjYy5WZWMyLlpFUk8pO1xuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm1QcmV2aW91c1ZpZXcpXG4gICAgICAgICAgICAgICAgICAgICAgICAudG8oZHVyYXRpb24sIHsgc2NhbGU6IDAgfSwgeyBlYXNpbmcgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHRoaXMubVByZXZpb3VzVmlldy5hY3RpdmUgPSBmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm1DdXJyZW50VmlldylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kZWxheShkdXJhdGlvbilcbiAgICAgICAgICAgICAgICAgICAgICAgIC50byhkdXJhdGlvbiwgeyBzY2FsZTogMSB9LCB7IGVhc2luZyB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4gdGhpcy5tQ3VycmVudFZpZXcuZ2V0Q29tcG9uZW50KEVBcHBQYWdlc1t2aWV3TmFtZV0pPy5pbml0KCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcblxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFBBR0VfU0hPV19FRkZFQ1QuRkFERTpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZUNvdmVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubUN1cnJlbnRWaWV3LmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubVByZXZpb3VzVmlldylcbiAgICAgICAgICAgICAgICAgICAgICAgIC50byhkdXJhdGlvbiwgeyBzY2FsZTogdGhpcy5tUHJldmlvdXNWaWV3LnNjYWxlWCB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IChzdGFydCwgZW5kLCBjdXJyZW50LCByYXRpbykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLm1QcmV2aW91c1N0YWdlLm9wYWNpdHkgPSAoMSAtIHJhdGlvKSAqIDI1NTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlQ292ZXIub3BhY2l0eSA9IHJhdGlvICogMjU1O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RhcnQgKyAoZW5kIC0gc3RhcnQpICogcmF0aW87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1QcmV2aW91c1ZpZXcuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tQ3VycmVudFZpZXcuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLm1DdXJyZW50Vmlldy5nZXRDb21wb25lbnQoRUFwcFBhZ2VzW3ZpZXdOYW1lXSkuaW5pdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm1DdXJyZW50VmlldylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kZWxheShkdXJhdGlvbilcbiAgICAgICAgICAgICAgICAgICAgICAgIC50byhkdXJhdGlvbiwgeyBzY2FsZTogdGhpcy5tQ3VycmVudFZpZXcuc2NhbGVYIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzczogKHN0YXJ0LCBlbmQsIGN1cnJlbnQsIHJhdGlvKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubUN1cnJlbnRTdGFnZS5vcGFjaXR5ID0gcmF0aW8gKiAyNTU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZUNvdmVyLm9wYWNpdHkgPSAoMSAtIHJhdGlvKSAqIDI1NTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXJ0ICsgKGVuZCAtIHN0YXJ0KSAqIHJhdGlvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlQ292ZXIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocHJldmlvdXNWaWV3UG9zaXRpb24gJiYgY3VycmVudFZpZXdQb3NpdGlvbikge1xuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5tUHJldmlvdXNWaWV3KVxuICAgICAgICAgICAgICAgIC5zZXQoeyBzY2FsZTogMSB9KVxuICAgICAgICAgICAgICAgIC50byhkdXJhdGlvbiwgeyBwb3NpdGlvbjogcHJldmlvdXNWaWV3UG9zaXRpb24gfSwgeyBlYXNpbmcgfSlcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB0aGlzLm1QcmV2aW91c1ZpZXcuYWN0aXZlID0gZmFsc2UpXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm1DdXJyZW50VmlldylcbiAgICAgICAgICAgICAgICAuc2V0KHsgb3BhY2l0eTogMCwgc2NhbGU6IDEgfSlcbiAgICAgICAgICAgICAgICAuZGVsYXkoMClcbiAgICAgICAgICAgICAgICAuc2V0KHsgcG9zaXRpb246IGN1cnJlbnRWaWV3UG9zaXRpb24sIG9wYWNpdHk6IDI1NSB9KVxuICAgICAgICAgICAgICAgIC50byhkdXJhdGlvbiwgeyBwb3NpdGlvbjogY2MudjMoMCwgdGhpcy5DYW52YXMuaGVpZ2h0IC8gMiwgMCkgfSwgeyBlYXNpbmcgfSlcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB0aGlzLm1DdXJyZW50Vmlldy5nZXRDb21wb25lbnQoRUFwcFBhZ2VzW3ZpZXdOYW1lXSk/LmluaXQoKSlcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogUm9vdFN0YXRlKSA9PiAoe1xuICAgIGFwcDogc3RhdGUuYXBwLFxufSlcbmNvbnN0IG1hcERpc3BhdGNoVG9BY3Rpb24gPSAoZGlzcGF0Y2g6IEFwcERpc3BhdGNoKSA9PiAoe1xuICAgIHB1c2hQb3B1cDogKGU6IEVBcHBQb3B1cHMpID0+IGRpc3BhdGNoKHB1c2hQb3B1cChlKSksXG59KVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9BY3Rpb24pKFBhZ2VNZ3IpIl19