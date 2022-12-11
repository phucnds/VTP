import * as R from 'ramda';
import connect from "../src/app/connect";
import store, { AppDispatch, RootState } from "../src/app/store";
import { EAppPages, EAppPopups, PAGE_SHOW_EFFECT, pushPopup } from "../src/features/SliceApp";
import Page from "./Page";
import Localization from "../common/Localization";
import SoundMgr from "../common/SoundMgr";
import wsgw from "../src/app/wsgw";
import { checkRewardPopup } from "../src/common/common";
import APIDefine from "../src/app/APIDefine";
import { syncQuests } from "../src/features/SliceQuests";
import { userProfile } from "../common/UserProfile";
const { ccclass, property } = cc._decorator;

export const pageNameMap = {
    home: 'PageHome',
    rules: 'PageRules',
    buyTurn: 'PageBuyTurn',
    inventory: 'PageInventory',
    reward: 'PageReward',
    savenow: 'PageSavenow',
    weeklyPrizeHistory: 'PageWeeklyPrizeHistory',
    paynow: 'PagePaynow',
    guiTietKiem: 'PageGuiTietKiem',
}

export class PageMgr extends cc.Component {
    actions: any;
    props: RootState;

    @property(cc.Prefab) private PagePrefabs: Array<cc.Prefab> = [];

    private pageCover: cc.Node = null;
    private Canvas: cc.Node = null;
    private mPreviousView: cc.Node = null;
    private mCurrentView: cc.Node = null;
    private mCurrentPageView: EAppPages = null;
    private needToCheckRewardPopup = false;
    static Instance: PageMgr
    static show(viewName: EAppPages,
        effectType: PAGE_SHOW_EFFECT = PAGE_SHOW_EFFECT.APPEAR,
        easing: string = "smooth",
        duration: number = 0.3) {
        const instance = this.Instance;
        instance.mPreviousView = instance.mCurrentView;
        // cc.find('Canvas').getChildByName("NodeFixedOnUI").active = true;
        for (let view of instance.node.children) {
            const isActive = view.name == EAppPages[viewName];
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
            instance.mCurrentView.getComponent(EAppPages[viewName])?.init();
        }
    }
    static hide() {
        const instance = this.Instance;
        for (let view of instance.node.children) {
            view.active = false;
        }
    }
    static getUI<T>(viewName: EAppPages): T {
        return this.Instance.node.getChildByName(EAppPages[viewName]).getComponent(EAppPages[viewName]);
    }

    onLoad() {
        // super.onLoad();
        // if (!(/localhost/i.test(window.location.hostname) || /elofun.github.io/i.test(window.location.hostname))) {
        //     console.log = console.clear
        //     console.warn = console.clear
        //     console.error = console.clear
        // }
        // setInterval(() => {
        //     cc.screen.requestFullScreen();
        // }, 1000);

        (window as any).vdsShareMissionCallback = (payload) => {
            setTimeout(() => {
                userProfile.UpdateProfile(true, () => {
                    wsgw.userRequest(APIDefine.getMissionList, {}, (e) => {
                        store.dispatch(syncQuests(e));
                    }, console.error);
                    checkRewardPopup()
                    userProfile.UpdateBalance();
                });
            }, 1000);
        }

        (window as any).vdsCompleteMissionCallback = (payload) => {
            setTimeout(() => {
                userProfile.UpdateProfile(true, () => {
                    wsgw.userRequest(APIDefine.getMissionList, {}, (e) => {
                        store.dispatch(syncQuests(e));
                    }, console.error);
                    checkRewardPopup()
                    userProfile.UpdateBalance();
                });
            }, 1000);
        }

        (window as any).vdsBuyTurnCallback = (payload) => {
        }

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

        cc.game.on(cc.game.EVENT_HIDE, () => {
            this.needToCheckRewardPopup = true;
            SoundMgr.setMute(true);
        });

        cc.game.on(cc.game.EVENT_SHOW, () => {
            if (!this.needToCheckRewardPopup) return;
            this.needToCheckRewardPopup = false;
            const muteSetting = localStorage.getItem('mute') === 'true';
            SoundMgr.setMute(muteSetting);
            setTimeout(() => {
                userProfile.UpdateProfile(true, () => {
                    wsgw.userRequest(APIDefine.getMissionList, {}, (e) => {
                        store.dispatch(syncQuests(e));
                    }, console.error);
                    checkRewardPopup()
                    userProfile.UpdateBalance();
                });
            }, 1000);
        });

        cc.view.enableAutoFullScreen(false)
        cc.view.resizeWithBrowserSize(false)
        PageMgr.Instance = this;
        for (let i = 0; i < this.PagePrefabs.length; i++) {
            if (!this.PagePrefabs[i]) continue
            const node = cc.instantiate(this.PagePrefabs[i]);
            node.active = false;
            this.node.addChild(node);
            // node.group = "UI"
        }
        this.Canvas = cc.find("Canvas");
    }

    start() {
        (window as any).appVersion = "0.9.10 - 26/08/2022"
        console.log("Version : " + (window as any).appVersion);
        this.pageCover = cc.find('Canvas').getChildByName("Stage Cover");
        this.pageCover.active = false;
        cc.find('Canvas').getChildByName("TopUI").active = false
        this.onStateChange()
        SoundMgr.playMusic(SoundMgr.Instance.BGM, true)
        let lang = localStorage.getItem("lang") || "vi"
        let bgmActive = Number(localStorage.getItem("bgm") || "1")
        let sfxActive = Number(localStorage.getItem("sfx") || "1")
        SoundMgr.setSfxVolume(sfxActive)
        SoundMgr.setMusicVolume(bgmActive)
        Localization.ChangeLanguage(lang)
        cc.view.enableAutoFullScreen(false)
    }
    onStateChange() {
        if (this.mCurrentPageView != this.props.app.currentPage) {
            this.mCurrentPageView = this.props.app.currentPage
            PageMgr.show(this.props.app.currentPage, this.props.app.effectType);
            // let pageHasTopUI = [EAppPages.PageHome, EAppPages.PageWinner, EAppPages.PagePrizes]
            // cc.find('Canvas').getChildByName("TopUI").active = pageHasTopUI.includes(this.props.app.currentPage) && (!shallowEqualObjects(this.props.games, {}));
        }
    }
    private animate(effectType: PAGE_SHOW_EFFECT, easing: string, duration: number, viewName: EAppPages) {
        this.mPreviousView.active = true;
        this.mCurrentView.active = true;

        let previousViewPosition = null;
        let currentViewPosition = null;
        switch (effectType) {
            case PAGE_SHOW_EFFECT.APPEAR:
                {
                    this.mPreviousView.active = false;
                    this.mCurrentView.getComponent(EAppPages[viewName])?.init()
                    break;
                }

            case PAGE_SHOW_EFFECT.UP:
                {
                    currentViewPosition = cc.v2(0, - this.Canvas.height * 1);
                    previousViewPosition = cc.v2(0, this.Canvas.height * 1);
                    break;
                }
            case PAGE_SHOW_EFFECT.DOWN:
                {
                    currentViewPosition = cc.v2(0, this.Canvas.height * 1);
                    previousViewPosition = cc.v2(0, - this.Canvas.height * 1);
                    break;
                }
            case PAGE_SHOW_EFFECT.LEFT:
                {
                    currentViewPosition = cc.v2(this.Canvas.width * 1, this.Canvas.height / 2);
                    previousViewPosition = cc.v2(- this.Canvas.width * 1, this.Canvas.height / 2);
                    break;
                }
            case PAGE_SHOW_EFFECT.RIGHT:
                {
                    currentViewPosition = cc.v2(- this.Canvas.width * 1, this.Canvas.height / 2);
                    previousViewPosition = cc.v2(this.Canvas.width * 1, this.Canvas.height / 2);
                    break;
                }
            case PAGE_SHOW_EFFECT.SCALE:
                {
                    this.mCurrentView.setScale(cc.Vec2.ZERO);
                    cc.tween(this.mPreviousView)
                        .to(duration, { scale: 0 }, { easing })
                        .call(() => this.mPreviousView.active = false)
                        .start();
                    cc.tween(this.mCurrentView)
                        .delay(duration)
                        .to(duration, { scale: 1 }, { easing })
                        .call(() => this.mCurrentView.getComponent(EAppPages[viewName])?.init())
                        .start();

                    break;
                }
            case PAGE_SHOW_EFFECT.FADE:
                {
                    this.pageCover.active = true;
                    this.mCurrentView.active = false;

                    cc.tween(this.mPreviousView)
                        .to(duration, { scale: this.mPreviousView.scaleX }, {
                            progress: (start, end, current, ratio) => {
                                // this.mPreviousStage.opacity = (1 - ratio) * 255;
                                this.pageCover.opacity = ratio * 255;
                                return start + (end - start) * ratio;
                            }
                        })
                        .call(() => {
                            this.mPreviousView.active = false;
                            this.mCurrentView.active = true;
                            // this.mCurrentView.getComponent(EAppPages[viewName]).init();
                        })
                        .start();
                    cc.tween(this.mCurrentView)
                        .delay(duration)
                        .to(duration, { scale: this.mCurrentView.scaleX }, {
                            progress: (start, end, current, ratio) => {
                                // this.mCurrentStage.opacity = ratio * 255;
                                this.pageCover.opacity = (1 - ratio) * 255;
                                return start + (end - start) * ratio;
                            }
                        })
                        .call(() => {
                            this.pageCover.active = false;
                        })
                        .start();
                    break;
                }
        }
        if (previousViewPosition && currentViewPosition) {
            cc.tween(this.mPreviousView)
                .set({ scale: 1 })
                .to(duration, { position: previousViewPosition }, { easing })
                .call(() => this.mPreviousView.active = false)
                .start();
            cc.tween(this.mCurrentView)
                .set({ opacity: 0, scale: 1 })
                .delay(0)
                .set({ position: currentViewPosition, opacity: 255 })
                .to(duration, { position: cc.v3(0, this.Canvas.height / 2, 0) }, { easing })
                .call(() => this.mCurrentView.getComponent(EAppPages[viewName])?.init())
                .start();
        }
    }
}
const mapStateToProps = (state: RootState) => ({
    app: state.app,
})
const mapDispatchToAction = (dispatch: AppDispatch) => ({
    pushPopup: (e: EAppPopups) => dispatch(pushPopup(e)),
})
export default connect(mapStateToProps, mapDispatchToAction)(PageMgr)