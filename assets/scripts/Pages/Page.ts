// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import TopUI, { EAppTopUIs } from "../common/TopUI";

const { ccclass, property } = cc._decorator;

@ccclass('Page')
export default class Page extends cc.Component {
    public init(): void {
        TopUI.Instance.show(EAppTopUIs.CompHeaderSimple, true, true);
    }
    public onKeyUp(event) {

    }
}
