// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import SoundMgr from "../common/SoundMgr";
import { userProfile } from "../common/UserProfile";
import APIDefine from "../src/app/APIDefine";
import store from "../src/app/store";
import wsgw from "../src/app/wsgw";
import { trackUserInteract } from "../src/common/utils";
import { EAppPopups, popPopup, pushPopup } from "../src/features/SliceApp";
import { DeeplinkTypesToName, EDeeplinkTypes } from "../src/features/SliceDeeplinks";
import { syncLoginStreak } from "../src/features/SliceLogin";
import Helper from "../utils/Helper";
import Popup from "./Popup";
import PopupDailyLogin from "./PopupDailyLogin";

const { ccclass, property } = cc._decorator;

@ccclass
export default class PopupNewUserReward extends Popup {
    @property(cc.Node)
    public btnUpdateInfo: cc.Node = null;
    @property(cc.Node)
    public btnSpin: cc.Node = null;

    @property(cc.Node)
    public ShellUserContainer: cc.Node = null;
    @property(cc.Label)
    public ShellUserContainerDescription: cc.Label = null;
    @property(cc.Node)
    public UserContainer: cc.Node = null;
    @property(cc.Label)
    public UserContainerDescription: cc.Label = null;

    private coin: Number = 0;
    private turn: Number = 0;

    onLoad() {
        super.onLoad();

        if (this.btnUpdateInfo) {
            Helper.registerButtonEvent(this.btnUpdateInfo, () => {
                SoundMgr.playSfx(SoundMgr.Instance.SFX_BUTTON);
                store.dispatch(popPopup())
                window.location.href = store.getState().deeplinks.data[DeeplinkTypesToName[EDeeplinkTypes.XAC_THUC_THONG_TIN]];
            });
        }
        if (this.btnSpin) {
            Helper.registerButtonEvent(this.btnSpin, () => store.dispatch(popPopup()));
        }
    }

    protected onEnable(): void {
        super.onEnable();
        const verifiedUser = store.getState().user.verifiedUser;
        if (verifiedUser) {
            this.ShellUserContainer.active = false;
            this.UserContainer.active = true;
            this.btnUpdateInfo.active = false;
        }

    }

    init(coin: Number, turn: Number) {
        this.coin = Number(this.coin) + Number(coin);
        this.turn = Number(this.turn) + Number(turn);
        this.updateDescription();
    }

    public updateDescription() {
        const hasBoth = this.coin > 0 && this.turn;
        const text = `${this.coin ? this.coin + ' Xu' : ''} ${hasBoth && 'và'} ${this.turn ? this.turn + ' vé' : ''}`;
        this.ShellUserContainerDescription.string = text;
        this.UserContainerDescription.string = text;
    }

    // nextAnim() {
    //     this.GreetingRewardContainer.active = true;
    //     this.GreetingRewardContainer.setPosition(cc.v3(cc.find('Canvas').width + 300, this.GreetingRewardContainer.position.y, this.GreetingRewardContainer.position.z))
    //     cc.tween(this.GreetingContainer)
    //         .set({ scale: 1 })
    //         .to(0.5, { position: cc.v3(this.GreetingContainer.position.x - cc.find('Canvas').width - 300, this.GreetingContainer.position.y, this.GreetingContainer.position.z) }, { easing: "smooth" })
    //         .call(() => this.GreetingContainer.active = false)
    //         .start();

    //     cc.tween(this.GreetingRewardContainer)
    //         .set({ scale: 1 })
    //         .to(0.5, { position: cc.v3(0, this.GreetingRewardContainer.position.y, this.GreetingRewardContainer.position.z) }, { easing: "smooth" })
    //         .call(() => this.GreetingContainer.active = false)
    //         .start();
    // }

    // protected onDisable(): void {
    //     wsgw.userRequest(APIDefine.claimLoginReward, {}, (e) => {
    //         userProfile.UpdateBalance();
    //         store.dispatch(syncLoginStreak(e));
    //         if (e.message) return;
    //         // store.dispatch(pushPopup(EAppPopups.PopupDailyLogin));

    //         // const { coin, turn, loginStreak } = e;
    //         // const popup = cc.find('Canvas/PopupManager/Shown Popups/PopupDailyLogin');
    //         // popup && popup.getComponent(PopupDailyLogin).init(coin, turn, loginStreak)
    //     }, console.error);
    // }
}
