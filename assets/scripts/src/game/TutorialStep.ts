// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Helper from "../../utils/Helper";
import store from "../app/store";
import { popPopup } from "../features/SliceApp";

const { ccclass, property } = cc._decorator;

@ccclass
export default class TutorialStep extends cc.Component {


    onLoad() {
        if (this.node.getSiblingIndex() === this.node.parent.childrenCount - 1) return;
        Helper.registerButtonEvent(this.node.getChildByName('button'), () => {
            this.node.active = false;
            this.node.parent.children[this.node.getSiblingIndex() + 1].active = true;
        });
    }

    // update (dt) {}
}
