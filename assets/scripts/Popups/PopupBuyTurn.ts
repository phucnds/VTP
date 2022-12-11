// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import * as R from 'ramda'
import SoundMgr from "../common/SoundMgr";
import { Missions } from '../components/CompQuestsContainer';
import connect from "../src/app/connect";
import store, { AppDispatch, RootState } from "../src/app/store";
import { EAppPages, EAppPopups, IPageWithEffect, popPopup, pushPage, pushPopup } from "../src/features/SliceApp";
import { DeeplinkTypesToName, EDeeplinkTypes } from '../src/features/SliceDeeplinks';
import Helper from "../utils/Helper";
import Popup from "./Popup";
import PopupUpdateInfo from './PopupUpdateInfo';


const { ccclass, property } = cc._decorator;

export class PopupBuyTurn extends Popup {
    actions: any
    props: any

    @property(String)
    placeHolder: String = '';

    @property(cc.Label)
    amountTxt: cc.Label = null;
    @property(cc.Node)
    btnConfirm: cc.Node = null;

    private amount;
    private price;

    onLoad() {
        super.onLoad();

        this.btnConfirm.on(cc.Node.EventType.TOUCH_END, () => {
            SoundMgr.playSfx(SoundMgr.Instance.SFX_BUTTON);

            const verifiedUser = store.getState().user.verifiedUser;
            if (verifiedUser) {
                const data = { transAmount: this.price, turnNumber: this.amount, content: `Đổi ${this.amount} vé Chiếc máy thần kỳ` };
                window.location.href = `${this.props.deeplinks.data[DeeplinkTypesToName[EDeeplinkTypes.BUY_TURN]]}?data=` + JSON.stringify(data);
                this.actions.popPopup();
            } else {
                this.actions.popPopup();
                this.actions.pushPopup(EAppPopups.PopupUpdateInfo);
                const popup = cc.find('Canvas/PopupManager/Shown Popups/PopupUpdateInfo');
                popup && popup.getComponent(PopupUpdateInfo).init(this.amount, this.price);
            }
        });
    }

    public init(amount: string, price: string, valAmount: number, valPrice: number) {
        this.amount = valAmount;
        this.price = valPrice;
        this.amountTxt.string = this.placeHolder.replace('%s1', amount).replace('%s2', price);
    }
}

const mapStateToProps = (state: RootState) => ({
    reward: state.reward,
    quests: state.quests,
    deeplinks: state.deeplinks,
})
const mapDispatchToAction = (dispatch: AppDispatch) => ({
    pushPage: (payload: EAppPages | IPageWithEffect) =>
        dispatch(pushPage(payload)),
    popPopup: () => dispatch(popPopup()),
    pushPopup: (payload: EAppPopups) => dispatch(pushPopup(payload)),
})
export default connect(mapStateToProps, mapDispatchToAction)(PopupBuyTurn)
