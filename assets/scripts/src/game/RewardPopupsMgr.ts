// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import * as R from 'ramda'
import { userProfile } from '../../common/UserProfile';
import { Missions } from '../../components/CompQuestsContainer';
import PopupBuyTurnSuccess from '../../Popups/PopupBuyTurnSuccess';
import PopupCompleteQuest from '../../Popups/PopupCompleteQuest';
import PopupWeeklyWinner from '../../Popups/PopupWeeklyWinner';
import SingletonNode from "../../utils/SingletonNode";
import APIDefine from '../app/APIDefine';
import connect from '../app/connect';
import store, { AppDispatch, RootState } from '../app/store';
import wsgw from '../app/wsgw';
import { checkRewardPopup } from '../common/common';
import { EAppPages, EAppPopups, IPageWithEffect, popPage, pushPage, pushPopup } from '../features/SliceApp';
import { syncQuests } from '../features/SliceQuests';

const { ccclass, property } = cc._decorator;

export enum ETopupType {
    MO_GAME = 'MO_GAME',
    MO_GAME_LAN_DAU = 'MO_GAME_LAN_DAU',
    DOI_DIEM_VT_PLUS = 'DOI_DIEM_VT_PLUS',
    MUA_LUOT = 'MUA_LUOT',
    PHAN_THUONG_TRONG_GAME = 'PHAN_THUONG_TRONG_GAME',
    KHAC = 'KHAC',
    WEEKLY_REWARD = 'WEEKLY_REWARD',
}

export class RewardPopupsMgr extends SingletonNode<RewardPopupsMgr>() {
    actions: any;
    props: any

    private rewardPopups: Array<any>;

    setData(data) {
        this.rewardPopups = data;
    }

    onLoad(): void {
        super.onLoad();

        wsgw.subscribeCompleteMission((data) => {
            const { type, msisdn } = data;
            if (type === Missions.CHIA_SE_GAME.toString()) return;
            if (msisdn !== this.props.user.msisdn) return;

            setTimeout(() => {
                userProfile.UpdateProfile(true, () => {
                    wsgw.userRequest(APIDefine.getMissionList, {}, (e) => {
                        store.dispatch(syncQuests(e));
                    }, console.error);
                    checkRewardPopup()
                    userProfile.UpdateBalance();
                });
            }, 1000);

        })
        wsgw.subscribeBuyTurn((data) => {
            const { msisdn } = data;
            if (msisdn !== this.props.user.msisdn) return;

            setTimeout(() => {
                wsgw.userRequest(APIDefine.getMissionList, {}, (e) => {
                    store.dispatch(syncQuests(e));
                }, console.error);
                checkRewardPopup()
                userProfile.UpdateBalance();
            }, 1000);
        })
    }

    showPopup() {
        const item = R.last(this.rewardPopups);
        if (!item) return;

        this.rewardPopups = R.dropLast(1, this.rewardPopups);
        const {
            data: {
                turn, coin
            },
            type,
        } = item;

        if (type === ETopupType.DOI_DIEM_VT_PLUS || type === ETopupType.MUA_LUOT) {
            store.dispatch(pushPopup(EAppPopups.PopupBuyTurnSuccess));
            const popup = cc.find('Canvas/PopupManager/Shown Popups/PopupBuyTurnSuccess');
            popup && popup.getComponent(PopupBuyTurnSuccess).init(turn)
        } else if (type === ETopupType.WEEKLY_REWARD) {
            store.dispatch(pushPopup(EAppPopups.PopupWeeklyWinner));
        } else {
            store.dispatch(pushPopup(EAppPopups.PopupCompleteQuest));
            const popup = cc.find('Canvas/PopupManager/Shown Popups/PopupCompleteQuest');
            popup && popup.getComponent(PopupCompleteQuest).init(turn, coin)
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
export default connect(mapStateToProps, mapDispatchToAction)(RewardPopupsMgr)
