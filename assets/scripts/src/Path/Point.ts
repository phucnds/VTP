// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { getWorldPosition } from "../common/utils";


const { ccclass, property } = cc._decorator;

@ccclass
export default class Point extends cc.Component {
    @property(cc.Node)
    private forwardPoint: cc.Node = null;
    @property(cc.Node)
    private backPoint: cc.Node = null;

    getForwardVector() {
        return getWorldPosition(this.forwardPoint).sub(getWorldPosition(this.node))
    }

    getBackVector() {
        return getWorldPosition(this.backPoint).sub(getWorldPosition(this.node))
    }
}
