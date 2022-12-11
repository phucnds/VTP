// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import * as R from 'ramda';
import moment = require("moment");
import SoundMgr from "../common/SoundMgr";
import CompWeeklyPrizeHistoryItem from "../components/CompWeeklyPrizeHistoryItem";
import APIDefine from "../src/app/APIDefine";
import connect from "../src/app/connect";
import store, { RootState, AppDispatch } from "../src/app/store";
import wsgw from "../src/app/wsgw";
import { getRemanningTime } from "../src/common/utils";
import { EAppPages, IPageWithEffect, pushPage, popPage, EAppPopups, pushPopup, PAGE_SHOW_EFFECT } from "../src/features/SliceApp";
import { syncWeeklyPrizeHistory } from "../src/features/SliceWeeklyPrizeHistory";
import Helper from "../utils/Helper";
import Page from "./Page";
import { isFulfilled } from '@reduxjs/toolkit';

const { ccclass, property } = cc._decorator;

export class PageWeeklyPrizeHistory extends Page {
    actions: any
    props: any

    @property(cc.Prefab)
    public itemPrefab: cc.Prefab = null;

    @property(cc.Node)
    public btnClose: cc.Node = null; 1
    @property(cc.Node)
    public content: cc.Node = null;
    @property(cc.Node)
    public emptyContent: cc.Node = null;
    @property(cc.Label)
    public dateTxt: cc.Label = null;

    onLoad() {
        this.btnClose.on(cc.Node.EventType.TOUCH_END, () => {
            SoundMgr.playSfx(SoundMgr.Instance.SFX_BUTTON);
            store.dispatch(popPage());
        });
    }

    init() {
        wsgw.userRequest(APIDefine.getCoinWinnerList, {}, (e) => {
            store.dispatch(syncWeeklyPrizeHistory(e))
        }, console.error);
    }

    onStateChange() {
        this.content.removeAllChildren();

        let dataToUse = this.props.weeklyPrizeHistory.data;

        if (dataToUse.length > 0) {
            this.emptyContent.active = false;
        } else {
            this.emptyContent.active = true;
        }

        dataToUse.forEach((item: any, index) => {
            const { claimAt, msisdn } = item;

            this.addItem(dataToUse.length - index, msisdn, claimAt);
        })
    }

    addItem(index: number, phone: string, date: string) {
        const newItem = cc.instantiate(this.itemPrefab);
        this.content.addChild(newItem);

        newItem.getComponent(CompWeeklyPrizeHistoryItem).init(index, phone, date);
    }

    update() {
        this.syncTime();
    }

    syncTime() {
        let rollPhaseDueDate = moment().endOf('isoWeek').startOf('day').add(20, "hours");
        if (rollPhaseDueDate.valueOf() < moment().valueOf()) {
            rollPhaseDueDate = moment().endOf('isoWeek').add(1, 'weeks').startOf('day').add(20, "hours")
        }

        const {
            day: dayRoll, hour: hourRoll, minute: minuteRoll, second: secondRoll
        } = getRemanningTime(new Date(rollPhaseDueDate.valueOf()));

        this.dateTxt.string = `${dayRoll.toString().padStart(2, '0')} ngày ${hourRoll.toString().padStart(2, '0')} giờ ${minuteRoll.toString().padStart(2, '0')} phút ${secondRoll.toString().padStart(2, '0')} giây`;
    }
}
const mapStateToProps = (state: RootState) => ({
    weeklyPrizeHistory: state.weeklyPrizeHistory,
})
const mapDispatchToAction = (dispatch: AppDispatch) => ({
    pushPage: (payload: EAppPages | IPageWithEffect) =>
        dispatch(pushPage(payload)),
    popPage: () => dispatch(popPage()),
    pushPopup: (payload: EAppPopups) => dispatch(pushPopup(payload)),
})
export default connect(mapStateToProps, mapDispatchToAction)(PageWeeklyPrizeHistory)