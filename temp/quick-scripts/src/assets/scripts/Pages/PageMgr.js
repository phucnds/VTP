"use strict";
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