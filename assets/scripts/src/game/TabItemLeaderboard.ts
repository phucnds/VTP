// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import TabItem from "../../common/TabItem";

const { ccclass, property } = cc._decorator;

@ccclass
export default class TabItemLeaderboard extends TabItem {
    init(data, index) {
        super.init(data, index);
        console.log('asgljkashglajkshglkas')
    }
}
