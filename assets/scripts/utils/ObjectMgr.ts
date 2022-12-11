import GameObject from "./GameObject";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ObjectMgr extends cc.Component {
    load(prefab: cc.Prefab, poolSize: number) {
        // for (let i = 0; i < poolSize; i++) {
        //     const node = cc.instantiate(prefab);
        //     // node.getComponent(GameObject).load();
        //     node.active = false;
        //     this.node.addChild(node);
        // }
        // this.hide();
    }

    init() {
        this.hide();
    }

    hide() {
        for (let item of this.node.children) {
            item.active = false;
        }
    }

    spawn(...args) {

    }

    getAvailable() {
        for (let item of this.node.children) {
            if (!item.active) {
                return item;
            }
        }

        return null;
    }
}
