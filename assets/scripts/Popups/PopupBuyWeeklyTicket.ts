// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import * as R from 'ramda';
import moment = require("moment");
import connect from "../src/app/connect";
import store, { AppDispatch, RootState } from "../src/app/store";
import { getRemainTime, getRemanningTime } from "../src/common/utils";
import { EAppPages, EAppPopups, IPageWithEffect, PAGE_SHOW_EFFECT, popPage, popPopup, pushPage, pushPopup } from "../src/features/SliceApp";
import FrameMgr from '../common/FrameMgr';
import GameDefine from '../src/common/GameDefine';
import SoundMgr from '../common/SoundMgr';
import APIDefine from '../src/app/APIDefine';
import wsgw from '../src/app/wsgw';
import Popup from './Popup';
import { syncWeeklyTicket } from '../src/features/SliceWeeklyTicket';
import { userProfile } from '../common/UserProfile';


const { ccclass, property } = cc._decorator;

export class PopupBuyWeeklyTicket extends Popup {
    actions: any;
    props: RootState

    @property(cc.Node)
    public btnContainer: cc.Node = null;
    @property(cc.Node)
    public btnResult: cc.Node = null;
    @property(cc.Node)
    public btnBuy: cc.Node = null;
    @property(cc.Node)
    public btnClose: cc.Node = null;
    @property(cc.Sprite)
    public title: cc.Sprite = null;

    @property(cc.Node)
    public buyTicketContainer: cc.Node = null;
    @property(cc.Label)
    public dayTxt1: cc.Label = null;
    @property(cc.Label)
    public dayTxt2: cc.Label = null;
    @property(cc.Label)
    public hourTxt1: cc.Label = null;
    @property(cc.Label)
    public hourTxt2: cc.Label = null;
    @property(cc.Label)
    public minuteTxt1: cc.Label = null;
    @property(cc.Label)
    public minuteTxt2: cc.Label = null;
    @property(cc.Label)
    public secondTxt1: cc.Label = null;
    @property(cc.Label)
    public secondTxt2: cc.Label = null;

    @property(cc.Node)
    public boughtTicketContainer: cc.Node = null;
    @property(cc.Label)
    public duedate: cc.Label = null;
    @property(cc.Label)
    public boughtTicketContainerCountdown: cc.Label = null;

    @property(cc.Node)
    public rollPhaseCompletedTicketContainer: cc.Node = null;
    @property(cc.Node)
    public rollPhaseCompletedNoTicketContainer: cc.Node = null;
    @property(cc.Node)
    public eventEndedContainer: cc.Node = null;

    @property(cc.Node)
    public notBuyTimeoutTicketContainer: cc.Node = null;
    @property(cc.Label)
    public notBuyTimeoutTicketContainerDate: cc.Label = null;

    private time = 0;

    onLoad() {
        super.onLoad();
        this.btnBuy.on(cc.Node.EventType.TOUCH_END, () => {
            if (!this.btnBuy.getComponent(cc.Button).interactable) return;
            SoundMgr.playSfx(SoundMgr.Instance.SFX_BUTTON);
            wsgw.userRequest(APIDefine.exchangeCoin, {}, (e) => {
                this.activeBuyButton(false)
                this.actions.popPopup();
                this.actions.pushPopup(EAppPopups.PopupBuyWeeklyTicketSuccess);
                wsgw.userRequest(APIDefine.checkWeeklyTicket, {}, (e) => {
                    store.dispatch(syncWeeklyTicket({ bought: true }))
                }, console.error);
                userProfile.UpdateBalance();
            }, console.error);
        });

        this.btnResult.on(cc.Node.EventType.TOUCH_END, () => {
            SoundMgr.playSfx(SoundMgr.Instance.SFX_BUTTON);
            this.actions.popPopup();
            this.actions.pushPage({ page: EAppPages.PageWeeklyPrizeHistory, effect: PAGE_SHOW_EFFECT.LEFT });
        });

        this.btnClose.on(cc.Node.EventType.TOUCH_END, () => {
            SoundMgr.playSfx(SoundMgr.Instance.SFX_BUTTON);
            this.actions.popPopup();
        });
    }

    protected update(dt: number): void {
        this.syncTime();
    }

    activeBuyButton(enable: boolean) {
        this.btnBuy.getComponent(cc.Button).interactable = enable;
        this.btnBuy.getChildByName('Background').color = enable ? new cc.Color(255, 255, 255) : new cc.Color(221, 221, 221);
        this.btnBuy.getChildByName('Label').color = enable ? new cc.Color(255, 0, 0) : new cc.Color(134, 134, 134);
    }

    protected onEnable(): void {
        super.onEnable();
        const coin = R.view(R.lensPath(['user', 'coinBalance']))(this.props);
        if (coin < GameDefine.WEEKLY_EXCHANGE_AMOUNT) {
            this.activeBuyButton(false)
        } else {
            this.activeBuyButton(true)
        }
    }

    disableAllContainer() {
        this.buyTicketContainer.active = false;
        this.boughtTicketContainer.active = false;
        this.rollPhaseCompletedTicketContainer.active = false;
        this.notBuyTimeoutTicketContainer.active = false;
        this.eventEndedContainer.active = false;
        this.rollPhaseCompletedNoTicketContainer.active = false;
    }
    disableAllButtons() {
        this.btnResult.active = false;
        this.btnBuy.active = false;
        this.btnClose.active = false;
        this.btnContainer.active = true;
    }


    syncTime() {
        if (Math.floor(new Date().valueOf() / 1000) === this.time) {
            return;
        }

        this.time = Math.floor(new Date().valueOf() / 1000)

        this.disableAllContainer();
        this.disableAllButtons();
        this.title.spriteFrame = FrameMgr.Instance.POPUP_TITLE_WEEKLY_TICKET;
        const { second: eventRemainingSeconds } = getRemanningTime(new Date(GameDefine.EVENT_END_DATE));
        if (eventRemainingSeconds < 0) {
            this.title.spriteFrame = FrameMgr.Instance.POPUP_TITLE_NOTI;
            this.eventEndedContainer.active = true;
            this.btnClose.active = true;
            return;
        }

        const buyPhaseDueDate = moment().endOf('isoWeek').startOf('day').add(19, "hours").add(50, 'minutes');
        const rollPhaseDueDate = moment().endOf('isoWeek').startOf('day').add(20, "hours");
        const {
            day: dayBuy, hour: hourBuy, minute: minuteBuy, second: secondBuy
        } = getRemanningTime(new Date(buyPhaseDueDate.valueOf()));
        const {
            day: dayRoll, hour: hourRoll, minute: minuteRoll, second: secondRoll
        } = getRemanningTime(new Date(rollPhaseDueDate.valueOf()));

        const isTicketBought = R.view(R.lensPath(['weeklyTicket', 'bought']), this.props);

        if (isTicketBought) { // Da mua ve
            if (secondRoll < 0) { // Da roll xong
                this.rollPhaseCompletedTicketContainer.active = true;
                this.btnResult.active = true;
                this.title.spriteFrame = FrameMgr.Instance.POPUP_TITLE_NOTI;
                return;
            }

            this.boughtTicketContainer.active = true;
            this.btnResult.active = true;

            this.duedate.string = '20h00 Chủ nhật ' + buyPhaseDueDate.format('DD/MM/YYYY');
            this.boughtTicketContainerCountdown.string = `${dayRoll.toString().padStart(2, '0')} ngày ${hourRoll.toString().padStart(2, '0')} giờ ${minuteRoll.toString().padStart(2, '0')} phút ${secondRoll.toString().padStart(2, '0')} giây`;

            return;
        } else {// Chua mua ve
            if (secondRoll < 0) { // Da roll xong
                this.rollPhaseCompletedNoTicketContainer.active = true;
                this.btnResult.active = true;
                this.title.spriteFrame = FrameMgr.Instance.POPUP_TITLE_NOTI;
                return;
            }

            if (secondBuy < 0) { // Het buy phase
                this.notBuyTimeoutTicketContainer.active = true;
                this.btnClose.active = true;

                this.notBuyTimeoutTicketContainerDate.string = rollPhaseDueDate.format('DD/MM/YYYY');
                this.title.spriteFrame = FrameMgr.Instance.POPUP_TITLE_NOTI;
            } else {// Con buy phase
                this.buyTicketContainer.active = true;
                this.btnResult.active = true;
                this.btnBuy.active = true;

                this.dayTxt1.string = Math.floor(dayBuy / 10).toString();
                this.dayTxt2.string = (dayBuy % 10).toString();

                this.hourTxt1.string = Math.floor(hourBuy / 10).toString();
                this.hourTxt2.string = (hourBuy % 10).toString();

                this.minuteTxt1.string = Math.floor(minuteBuy / 10).toString();
                this.minuteTxt2.string = (minuteBuy % 10).toString();

                this.secondTxt1.string = Math.floor(secondBuy / 10).toString();
                this.secondTxt2.string = (secondBuy % 10).toString();
            }

            return;
        }
    }
}

const mapStateToProps = (state: RootState) => ({
    weeklyTicket: state.weeklyTicket,
    user: state.user
})
const mapDispatchToAction = (dispatch: AppDispatch) => ({
    pushPage: (payload: EAppPages | IPageWithEffect) =>
        dispatch(pushPage(payload)),
    popPage: () => dispatch(popPage()),
    pushPopup: (payload: EAppPopups) => dispatch(pushPopup(payload)),
    popPopup: () => dispatch(popPopup()),
})
export default connect(mapStateToProps, mapDispatchToAction)(PopupBuyWeeklyTicket)
