// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import SingletonNode from "../utils/SingletonNode";

const { ccclass, property } = cc._decorator;

@ccclass
export default class FrameMgr extends SingletonNode<FrameMgr>() {
    // Login
    @property(cc.SpriteFrame) LOGIN_LEVEL_1: cc.SpriteFrame = null
    @property(cc.SpriteFrame) LOGIN_LEVEL_2: cc.SpriteFrame = null
    @property(cc.SpriteFrame) LOGIN_LEVEL_3: cc.SpriteFrame = null
    @property(cc.SpriteFrame) LOGIN_LEVEL_4: cc.SpriteFrame = null
    @property(cc.SpriteFrame) LOGIN_LEVEL_5: cc.SpriteFrame = null

    // Reward
    @property(cc.SpriteFrame) REWARD_COIN: cc.SpriteFrame = null
    @property(cc.SpriteFrame) REWARD_EMONEY: cc.SpriteFrame = null
    @property(cc.SpriteFrame) REWARD_VOUCHER: cc.SpriteFrame = null
    @property(cc.SpriteFrame) REWARD_TURN: cc.SpriteFrame = null

    // Buttons
    @property(cc.SpriteFrame) BUTTON_GOLD_SELECTED: cc.SpriteFrame = null
    @property(cc.SpriteFrame) BUTTON_GOLD: cc.SpriteFrame = null

    // Popup titles
    @property(cc.SpriteFrame) POPUP_TITLE_SUCCESS: cc.SpriteFrame = null
    @property(cc.SpriteFrame) POPUP_TITLE_FAILED: cc.SpriteFrame = null
    @property(cc.SpriteFrame) POPUP_TITLE_NOTI: cc.SpriteFrame = null
    @property(cc.SpriteFrame) POPUP_TITLE_WEEKLY_TICKET: cc.SpriteFrame = null

    // UI
    @property(cc.SpriteFrame) ICON_SOUND: cc.SpriteFrame = null
    @property(cc.SpriteFrame) ICON_SOUND_OFF: cc.SpriteFrame = null

    // Gifts
    @property(cc.SpriteFrame) GIFT_FRAMES: cc.SpriteFrame[] = []
}
