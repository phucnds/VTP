// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property, executeInEditMode } = cc._decorator;

@ccclass
@executeInEditMode
export default class CompColider extends cc.Component {
    // LIFE-CYCLE CALLBACKS:

    @property(cc.Node) exceptChildernDeactive: cc.Node[] = [];

    onCollisionEnter(other: cc.BoxCollider) {
        if (other.node.name != "main collider") return
        for (let child of this.node.children) {
            if (this.exceptChildernDeactive.find(e => e.name == child.name)) continue;
            child.active = true
        }
    }
    onCollisionExit(other) {
        if (other.node.name != "main collider") return
        for (let child of this.node.children) {
            child.active = false
        }
    }
    updateBoxSize() {
        let boxColider = this.getComponent(cc.BoxCollider)
        if (boxColider) {
            let height = this.node.getContentSize().height
            boxColider.size.height = height;
            boxColider.offset.y = -height / 2;
        }
    }
    // onCollisionStay()
    // {
    //     console.log("stayyy")
    // }
    // update (dt) {}
}
