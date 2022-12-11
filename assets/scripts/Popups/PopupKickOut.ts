// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import SoundMgr from "../common/SoundMgr";
import store from "../src/app/store";
import { popPopup } from "../src/features/SliceApp";
import { DeeplinkTypesToName, EDeeplinkTypes } from "../src/features/SliceDeeplinks";
import Popup from "./Popup";


const { ccclass, property } = cc._decorator;

@ccclass
export default class PopupKickOut extends Popup {
    @property(cc.Node)
    btnClose: cc.Node = null;
    @property(cc.Node)
    btnOk: cc.Node = null;

    public onLoad() {
        this.btnClose.on(cc.Node.EventType.TOUCH_END, () => {
            SoundMgr.playSfx(SoundMgr.Instance.SFX_BUTTON);
            window.location.href = store.getState().deeplinks.data[DeeplinkTypesToName[EDeeplinkTypes.CLOSE_GAME]];
        });
        this.btnOk.on(cc.Node.EventType.TOUCH_END, () => {
            SoundMgr.playSfx(SoundMgr.Instance.SFX_BUTTON);
            window.location.href = store.getState().deeplinks.data[DeeplinkTypesToName[EDeeplinkTypes.CLOSE_GAME]];
        });
    }
}
