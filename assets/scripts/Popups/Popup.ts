// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import SoundMgr from "../common/SoundMgr";
import store from "../src/app/store";
import { popPopup } from "../src/features/SliceApp";
import Helper from "../utils/Helper";


const { ccclass, property } = cc._decorator;

@ccclass
export default class Popup extends cc.Component {
    @property(cc.Node)
    public btnBack: cc.Node = null;

    onLoad() {
        if (this.btnBack) {
            Helper.registerButtonEvent(this.btnBack, () => store.dispatch(popPopup()));
        }
    }
}