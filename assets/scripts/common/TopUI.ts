// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import SingletonNode from "../utils/SingletonNode";

const { ccclass, property } = cc._decorator;

export enum EAppTopUIs {
    CompHeader = 'CompHeader',
    CompHeaderSimple = 'CompHeaderSimple',
}

@ccclass
export default class TopUI extends SingletonNode<TopUI>() {

    @property(cc.Prefab) private TopUIPrefabs: Array<cc.Prefab> = [];

    onLoad() {
        super.onLoad();
        for (let i = 0; i < this.TopUIPrefabs.length; i++) {
            const UI = cc.instantiate(this.TopUIPrefabs[i]);
            UI.active = false;
            this.TopUIPrefabs[i] && this.node.addChild(UI);
        }
    }

    show(UI: EAppTopUIs, active = true, only = false) {
        only && this.hideAll();
        this.node.getChildByName(UI).active = active;
        this.node.active = active
    }

    hideAll() {
        for (let i = 0; i < this.node.children.length; i++) {
            this.node.children[i].active = false;
        }
    }
}

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    // update (dt) {}
}
