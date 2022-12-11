// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import * as R from 'ramda'
import { Console } from "console";
import LoadingCover from "../common/LoadingCover";
import SoundMgr from "../common/SoundMgr";
import TopUI, { EAppTopUIs } from "../common/TopUI";
import { userProfile, UserProfile } from "../common/UserProfile";
import { CompQuestsContainer } from "../components/CompQuestsContainer";
import PopupManager from "../Popups/PopupManager";
import APIDefine from "../src/app/APIDefine";
import connect from "../src/app/connect";
import store, { RootState, AppDispatch } from "../src/app/store";
import wsgw from "../src/app/wsgw";
import GameDefine from "../src/common/GameDefine";
import { EAppPages, IPageWithEffect, pushPage, popPage, EAppPopups, pushPopup, PAGE_SHOW_EFFECT } from "../src/features/SliceApp";
import { syncLoginMilestones, syncLoginStreak } from "../src/features/SliceLogin";
import { LoginProgressBar } from "../src/game/LoginProgressBar";
import Helper from "../utils/Helper";
import Page from "./Page";
import { syncQuests } from '../src/features/SliceQuests';
import { syncReward } from '../src/features/SliceReward';
import { syncWeeklyTicket } from '../src/features/SliceWeeklyTicket';
import PopupDailyLogin from '../Popups/PopupDailyLogin';
import MachineLightFX from '../src/game/MachineLightFX';
import TrackingDefine from '../src/common/TrackingDefine';
import { trackUserInteract } from '../src/common/utils';
import RewardPopupsMgr from '../src/game/RewardPopupsMgr';
import { checkRewardPopup } from '../src/common/common';
import PopupNewUserReward from '../Popups/PopupNewUserReward';
import { syncDeeplinks } from '../src/features/SliceDeeplinks';
import { PageRules } from './PageRules';
import GameMgr from '../src/game/GameMgr';

const { ccclass, property } = cc._decorator;

export class PageHome extends Page {
    actions: any;
    props: any
    @property(cc.Node)
    public btnLeaderboard: cc.Node = null;

    @property(cc.Node) btnRules: cc.Node = null;
    @property(cc.Node) btnOrder: cc.Node = null;
    @property(cc.Node) btnShare: cc.Node = null;

    @property(cc.Node) bgDay: cc.Node = null;
    @property(cc.Node) bgNight: cc.Node = null;

    claimLoginReward(newUserCoin, newUserTurn, initFunc: Function = () => { }, fail: Function = () => { }, retry = 45) {
        if (retry < 0) {
            // this.actions.pushPopup(EAppPopups.PopupErrorReload);
            return
        }
        wsgw.userRequest(APIDefine.claimLoginReward, {}, (e) => {
            userProfile.UpdateBalance();
            store.dispatch(syncLoginStreak(e));
            if (e.message) return;

            const { coin: loginCoin, turn: loginTurn, loginStreak } = e;
            initFunc(newUserCoin + loginCoin, newUserTurn + loginTurn, loginStreak)
        }, (e) => {
            if (e.status === 409) return;
            fail();
            setTimeout(() => this.claimLoginReward(newUserCoin, newUserTurn, initFunc, fail, retry - 1), 1000);
            console.error(e)
        });
    }

    onLoad() {
        GameMgr.Instance.init();

        userProfile.UpdateProfile(true, () => {
            wsgw.userRequest(APIDefine.claimNewUserRewards, {}, (e) => {
                userProfile.UpdateBalance();
                const { coin: newUserCoin, turn: newUserTurn } = e;
                this.claimLoginReward(newUserCoin, newUserTurn, (coin, turn) => {
                    this.actions.pushPopup(EAppPopups.PopupNewUserReward);
                    const popup = cc.find('Canvas/PopupManager/Shown Popups/PopupNewUserReward');
                    popup && popup.getComponent(PopupNewUserReward).init(coin, turn);
                });
            }, () => {
                if (!this.props.user.isNewUser) {
                    this.claimLoginReward(
                        0,
                        0,
                        (coin, turn, loginStreak) => {
                            this.actions.pushPopup(EAppPopups.PopupDailyLogin);
                            const popup = cc.find('Canvas/PopupManager/Shown Popups/PopupDailyLogin');
                            popup && popup.getComponent(PopupDailyLogin).init(coin, turn, loginStreak);
                        },
                    );
                } else {
                    // this.actions.pushPopup(EAppPopups.PopupErrorReload);
                }
            });

            wsgw.userRequest(APIDefine.getMissionList, {}, (e) => {
                store.dispatch(syncQuests(e));
            }, console.error);
            wsgw.userRequest(APIDefine.getDeeplinks, {}, (e) => {
                store.dispatch(syncDeeplinks(e));
            }, console.error);
            wsgw.userRequest(APIDefine.getLoginMilestones, {}, (e) => {
                store.dispatch(syncLoginMilestones(e.milestones));
            }, console.error);
            wsgw.userRequest(APIDefine.checkWeeklyTicket, {}, (e) => {
                store.dispatch(syncWeeklyTicket({ bought: true }))
            }, console.error);
            checkRewardPopup();
        });

        SoundMgr.playMusic(SoundMgr.Instance.BGM);

        this.initButtons();

        this.btnRules.on(cc.Node.EventType.TOUCH_END, (e) => {
            this.actions.pushPage(EAppPages.PageRules);
        })

        this.btnOrder.on(cc.Node.EventType.TOUCH_END, this.onOrder.bind(this))
        this.btnShare.on(cc.Node.EventType.TOUCH_END, this.onShare.bind(this))

        this.setBg()
        this.schedule(function() {
            this.setBg();
        }, 5);
    }

    onOrder() {
        if ((<any>window).ReactNativeWebView) {
            (<any>window).ReactNativeWebView.postMessage('ON_CREATE_ORDER', '*')
        } else {
            window.postMessage('ON_CREATE_ORDER', '*')
        }
    }

    onShare() {
        if ((<any>window).ReactNativeWebView) {
            (<any>window).ReactNativeWebView.postMessage('ON_SHARE_GAME', '*')
        } else {
            window.postMessage('ON_SHARE_GAME', '*')
        }
    }

    initButtons() {
        Helper.registerButtonEvent(this.btnLeaderboard, () => {
            this.actions.pushPopup(EAppPopups.PopupLeaderboard);
        })
    }

    start() {
        
    }

    update(dt) {
        
    }

    updateBalance(spinBalance: number, coinBalance: number) {
    }

    init() {
        super.init();
        TopUI.Instance.show(EAppTopUIs.CompHeader, true, true)

        userProfile.UpdateBalance();
    }
    protected onDisable(): void {
        TopUI.Instance.show(EAppTopUIs.CompHeaderSimple, true, true)
    }

    onStateChange() {
    }

    setBg(){
        const d = new Date();
        let hour = d.getHours();

        if(hour >= 6 && hour < 18){
            console.log("Day")
            this.bgDay.active = true
            this.bgNight.active = false
        }else{
            console.log("Night")
            this.bgDay.active = false
            this.bgNight.active = true
        }

        
    }



    
}
const mapStateToProps = (state: RootState) => ({
    user: state.user
})
const mapDispatchToAction = (dispatch: AppDispatch) => ({
    pushPage: (payload: EAppPages | IPageWithEffect) =>
        dispatch(pushPage(payload)),
    popPage: () => dispatch(popPage()),
    pushPopup: (payload: EAppPopups) => dispatch(pushPopup(payload)),
})
export default connect(mapStateToProps, mapDispatchToAction)(PageHome)