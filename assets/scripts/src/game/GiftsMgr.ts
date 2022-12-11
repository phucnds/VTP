// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import SingletonNode from "../../utils/SingletonNode";
import GameDefine from "../common/GameDefine";
import { getWorldPosition } from "../common/utils";
import PathFollowObject from "../Path/PathFollowObject";
import GameMgr, { GameStates } from "./GameMgr";
import Gift from "./Gift";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GiftMgr extends SingletonNode<GiftMgr>() {
    @property(cc.Node)
    template: cc.Node = null;
    @property(cc.Node)
    topView: cc.Node = null;
    @property(cc.Node)
    indicator: cc.Node = null;
    @property(Number)
    numbOfGifts: Number = 0;

    init() {
        // this.topView.removeAllChildren();
        // this.node.removeAllChildren();
        // for (let i = 0; i < this.numbOfGifts; i++) {
        //     const newGift = cc.instantiate(this.template);
        //     newGift.getComponent(PathFollowObject).Delay = i * GameDefine.GIFT_GAP;
        //     this.node.addChild(newGift);
        //     newGift.active = true;
        // }
    }

    roll() {
        if (GameMgr.Instance.getGameState() !== GameStates.PLAYING) return;
        GameMgr.Instance.setGameState(GameStates.ROLLING);
    }

    choose() {
        if (GameMgr.Instance.getGameState() !== GameStates.ROLLING) return;
        let chosenOne = null;
        let minDistance = 999999;
        this.node.children.forEach((gift) => {
            const giftPos = getWorldPosition(gift);
            const indicatorPos = getWorldPosition(this.indicator);

            if (giftPos.y < indicatorPos.y) {
                return;
            }

            const distance = giftPos.sub(indicatorPos).mag();
            if (distance < minDistance) {
                minDistance = distance;
                chosenOne = gift;
            }
        })

        if (chosenOne) {
            chosenOne.getComponent(Gift).pickSelf();
        }
    }
}
