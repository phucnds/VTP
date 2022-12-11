// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import SoundMgr from "../common/SoundMgr";
import store from "../src/app/store";
import { EAppPages, EAppPopups, PAGE_SHOW_EFFECT, popPopup, pushPage } from "../src/features/SliceApp";
import RewardPopupsMgr from "../src/game/RewardPopupsMgr";
import Helper from "../utils/Helper";
import Popup from "./Popup";


const { ccclass, property } = cc._decorator;

@ccclass
export default class PopupWeeklyWinner extends Popup {
    @property(cc.Node)
    btnResult: cc.Node = null;

    onLoad() {
        super.onLoad();

        this.btnResult.on(cc.Node.EventType.TOUCH_END, () => {
            SoundMgr.playSfx(SoundMgr.Instance.SFX_BUTTON);
            store.dispatch(popPopup())
            store.dispatch(pushPage({ page: EAppPages.PageWeeklyPrizeHistory, effect: PAGE_SHOW_EFFECT.LEFT }));
        });
    }

    protected onDisable(): void {
        RewardPopupsMgr.Instance.showPopup();
    }
}
