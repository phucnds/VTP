// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import SoundMgr from "../common/SoundMgr";
import { CompQuestsContainer } from "../components/CompQuestsContainer";
import store from "../src/app/store";
import { popPopup } from "../src/features/SliceApp";
import { DeeplinkTypesToName, EDeeplinkTypes } from "../src/features/SliceDeeplinks";
import Helper from "../utils/Helper";
import Popup from "./Popup";

const { ccclass, property } = cc._decorator;

@ccclass
export default class PopupGoToVoucher extends Popup {

    @property(cc.Node)
    public btnExit: cc.Node = null;
    @property(cc.Node)
    public btnContinue: cc.Node = null;

    public onLoad() {
        super.onLoad();

        this.btnExit.on(cc.Node.EventType.TOUCH_END, () => {
            SoundMgr.playSfx(SoundMgr.Instance.SFX_BUTTON);
            store.dispatch(popPopup());
            window.location.href = store.getState().deeplinks.data[DeeplinkTypesToName[EDeeplinkTypes.OPEN_VOUCHER]];
        });
        this.btnContinue.on(cc.Node.EventType.TOUCH_END, () => {
            SoundMgr.playSfx(SoundMgr.Instance.SFX_BUTTON);
            store.dispatch(popPopup());
        });
    }
}
