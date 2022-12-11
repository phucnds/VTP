// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import SoundMgr from "../common/SoundMgr";
import { CompQuestsContainer } from "../components/CompQuestsContainer";
import store from "../src/app/store";
import { EAppPages, PAGE_SHOW_EFFECT, popPopup, pushPage } from "../src/features/SliceApp";
import Helper from "../utils/Helper";
import Popup from "./Popup";

const { ccclass, property } = cc._decorator;

@ccclass
export default class PopupOutOfTicket extends Popup {

    @property(cc.Node)
    public btnQuest: cc.Node = null;
    @property(cc.Node)
    public btnBuy: cc.Node = null;

    public onLoad() {
        super.onLoad();

        this.btnQuest.on(cc.Node.EventType.TOUCH_END, () => {
            SoundMgr.playSfx(SoundMgr.Instance.SFX_BUTTON);
            store.dispatch(popPopup());
            CompQuestsContainer.Instance.Open();
        });
        this.btnBuy.on(cc.Node.EventType.TOUCH_END, () => {
            SoundMgr.playSfx(SoundMgr.Instance.SFX_BUTTON);
            store.dispatch(popPopup());
            store.dispatch(pushPage({ page: EAppPages.PageBuyTurn, effect: PAGE_SHOW_EFFECT.LEFT }))
        });
    }
}
