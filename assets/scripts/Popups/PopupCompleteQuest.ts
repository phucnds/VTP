// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import SoundMgr from "../common/SoundMgr";
import store from "../src/app/store";
import { EAppPages, EAppPopups, PAGE_SHOW_EFFECT, popPopup, pushPage } from "../src/features/SliceApp";
import { RewardPopupsMgr } from "../src/game/RewardPopupsMgr";
import Helper from "../utils/Helper";
import Popup from "./Popup";


const { ccclass, property } = cc._decorator;

@ccclass
export default class PopupCompleteQuest extends Popup {
    @property(cc.RichText)
    amountTxt: cc.RichText = null;
    @property(cc.Node)
    btnSpin: cc.Node = null;

    onLoad() {
        super.onLoad();

        this.btnSpin.on(cc.Node.EventType.TOUCH_END, () => {
            SoundMgr.playSfx(SoundMgr.Instance.SFX_BUTTON);
            store.dispatch(popPopup())
            store.dispatch(pushPage({ page: EAppPages.PageHome, effect: PAGE_SHOW_EFFECT.LEFT }));
        });
    }

    public init(turn: number, coin: number) {
        this.amountTxt.string = `<color=#7F2E2E>Đã nhận được ${coin ? coin + ' xu và ' : ''}${turn ? turn + ' vé\nquay thưởng' : ''}</color>`;
    }

    protected onDisable(): void {
        RewardPopupsMgr.Instance.showPopup();
    }
}
