// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class FixedBlurText extends cc.Component {
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    private SCALE_RATIO_TO_FIXED_BLUR: number = 2
    private label: cc.Label = null;
    start() {
        this.label = this.getComponent(cc.Label);
        if (!this.label) return

        if (this.node.scaleX < 1) {
            let ratio = 1 / (this.node.scaleX)
            this.node.scaleX = 1;
            this.node.scaleY = 1;
            this.label.fontSize /= ratio;
            this.label.lineHeight /= ratio;
            if (this.label.overflow == cc.Label.Overflow.SHRINK) {
                this.node.height /= ratio;
                this.node.width /= ratio;
            }
        }
        if (this.node.scaleX == 1) {
            if (this.label.overflow == cc.Label.Overflow.SHRINK || this.label.overflow == cc.Label.Overflow.RESIZE_HEIGHT) {
                this.node.height *= this.SCALE_RATIO_TO_FIXED_BLUR;
                this.node.width *= this.SCALE_RATIO_TO_FIXED_BLUR;
            }
            this.label.fontSize *= this.SCALE_RATIO_TO_FIXED_BLUR;
            this.label.lineHeight *= this.SCALE_RATIO_TO_FIXED_BLUR;
            this.node.scaleX /= this.SCALE_RATIO_TO_FIXED_BLUR;
            this.node.scaleY /= this.SCALE_RATIO_TO_FIXED_BLUR;
        }

        try {
            this.node.parent.getComponent(cc.Layout).updateLayout();
            this.node.getComponent(cc.Layout).updateLayout();
        } catch {

        }
    }

    // update (dt) {}
}
