// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class TabButton extends cc.Component {

    @property(cc.SpriteFrame)
    activeFrame: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    inactiveFrame: cc.SpriteFrame = null;
    @property(cc.Sprite)
    image: cc.Sprite = null;

    setActive(active) {
        if (active) {
            this.image.spriteFrame = this.activeFrame;
        } else {
            this.image.spriteFrame = this.inactiveFrame;
        }
    }

    // update (dt) {}
}
