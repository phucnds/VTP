// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import * as R from 'ramda'
import FrameMgr from "../common/FrameMgr";
import SoundMgr from "../common/SoundMgr";
import { Missions } from '../components/CompQuestsContainer';
import { PageHome } from '../Pages/PageHome';
import connect from "../src/app/connect";
import store, { RootState, AppDispatch } from "../src/app/store";
import { convertToCurrency } from '../src/common/utils';
import { EAppPages, IPageWithEffect, pushPage, popPopup, EAppPopups, pushPopup, PAGE_SHOW_EFFECT } from "../src/features/SliceApp";
import { DeeplinkTypesToName, EDeeplinkTypes } from '../src/features/SliceDeeplinks';
import Popup from './Popup';

const { ccclass, property } = cc._decorator;

export const typeToUnit = {
    COIN: ' xu',
    VOUCHER: 'đ',
    EMONEY: 'đ',
    TURN: ' vé',
}
export class PopupReward extends Popup {
    actions: any
    props: any

    @property(cc.Sprite)
    public rewardSprite: cc.Sprite = null;
    @property(cc.Node)
    public confetti: cc.Node = null;
    @property(cc.Label)
    public amountTxt: cc.Label = null;
    @property(cc.Label)
    public voucherTxt: cc.Label = null;

    @property(cc.Node)
    public btnSpinMore: cc.Node = null;
    @property(cc.Node)
    public btnInventory: cc.Node = null;
    @property(cc.Node)
    public btnUpdateInfo: cc.Node = null;
    @property(cc.Node)
    public btnBack2: cc.Node = null;
    @property(cc.Node)
    public container: cc.Node = null;
    @property(cc.Node)
    public updateInfoContainer: cc.Node = null;

    start() { }

    onLoad() {
        this.btnSpinMore.on(cc.Node.EventType.TOUCH_END, () => {
            SoundMgr.playSfx(SoundMgr.Instance.SFX_BUTTON);
            this.actions.popPopup();
            this.actions.pushPage({ page: EAppPages.PageHome, effect: PAGE_SHOW_EFFECT.LEFT });
            PageHome.Instance.pressButtonPlay();
        });
        this.btnInventory.on(cc.Node.EventType.TOUCH_END, () => {
            SoundMgr.playSfx(SoundMgr.Instance.SFX_BUTTON);
            this.actions.popPopup();
            this.actions.pushPage({ page: EAppPages.PageInventory, effect: PAGE_SHOW_EFFECT.LEFT });
        });

        this.btnUpdateInfo.on(cc.Node.EventType.TOUCH_END, () => {
            SoundMgr.playSfx(SoundMgr.Instance.SFX_BUTTON);
            store.dispatch(popPopup())
            this.actions.pushPage({ page: EAppPages.PageHome, effect: PAGE_SHOW_EFFECT.LEFT });
            window.location.href = store.getState().deeplinks.data[DeeplinkTypesToName[EDeeplinkTypes.XAC_THUC_THONG_TIN]];
        });

        this.btnBack2.on(cc.Node.EventType.TOUCH_END, () => {
            SoundMgr.playSfx(SoundMgr.Instance.SFX_BUTTON);
            store.dispatch(popPopup())
        });
    }

    onEnded() {
    }
    onEnable() {
        super.onEnable();
        const { type, amount } = R.view(R.lensPath(['reward', 'spinReward']))(this.props) || {}
        this.rewardSprite.spriteFrame = FrameMgr.Instance[`REWARD_${type.toUpperCase()}`];
        this.amountTxt.string = convertToCurrency(amount) + typeToUnit[type]
        this.voucherTxt.node.active = type === 'VOUCHER'

        this.confetti.children.forEach((fx) => {
            fx.getComponent(sp.Skeleton).animation = 'animation'
        })

        const verifiedUser = store.getState().user.verifiedUser;
        if (verifiedUser) {
            this.updateInfoContainer.active = false;
            this.container.setPosition(this.container.position.x, -200, this.container.position.z)
        } else {
            this.updateInfoContainer.active = true;
            this.container.setPosition(this.container.position.x, 0, this.container.position.z)
        }
    }
    onDisable() { }
}
const mapStateToProps = (state: RootState) => ({
    reward: state.reward,
    quests: state.quests,
})
const mapDispatchToAction = (dispatch: AppDispatch) => ({
    pushPage: (payload: EAppPages | IPageWithEffect) =>
        dispatch(pushPage(payload)),
    popPopup: () => dispatch(popPopup()),
    pushPopup: (payload: EAppPopups) => dispatch(pushPopup(payload)),
})
export default connect(mapStateToProps, mapDispatchToAction)(PopupReward)