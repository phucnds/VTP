// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import SoundMgr from "../common/SoundMgr";
import store from "../src/app/store";
import { EAppPages, EAppPopups, PAGE_SHOW_EFFECT, popPopup, pushPage } from "../src/features/SliceApp";
import { DeeplinkTypesToName, EDeeplinkTypes } from "../src/features/SliceDeeplinks";
import Helper from "../utils/Helper";
import Popup from "./Popup";


const { ccclass, property } = cc._decorator;

@ccclass
export default class PopupUpdateInfo extends Popup {
    @property(cc.Node)
    btnUpdateInfo: cc.Node = null;

    private amount;
    private price;

    onLoad() {
        super.onLoad();

        this.btnUpdateInfo.on(cc.Node.EventType.TOUCH_END, () => {
            SoundMgr.playSfx(SoundMgr.Instance.SFX_BUTTON);
            store.dispatch(popPopup())
            store.dispatch(pushPage({ page: EAppPages.PageHome, effect: PAGE_SHOW_EFFECT.LEFT }));
            window.location.href = store.getState().deeplinks.data[DeeplinkTypesToName[EDeeplinkTypes.XAC_THUC_THONG_TIN]];
        });
    }

    public init(amount: string, price: string) {
        this.amount = amount;
        this.price = price;
    }
}
