// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    loadingTxt: cc.Label = null;

    @property(cc.ProgressBar)
    processBar: cc.ProgressBar = null;

    private timer: number = 0;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {

    }

    update(dt) {
        this.timer += dt;
        if (this.timer % 3 < 1) {
            this.loadingTxt.string = 'Loading.';
        } else if (this.timer % 3 < 2) {
            this.loadingTxt.string = 'Loading..';
        } else {
            this.loadingTxt.string = 'Loading...';
        }


        if (this.processBar.progress < 1) {
            this.processBar.progress = this.timer < 1.8 ? this.timer / 2 : 0.9;
        }
    }


}
