// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class Path extends cc.Component {
    @property(cc.Boolean)
    public reverse: boolean = false;

    getPrevious(point: cc.Node) {
        const previousIndex = point.getSiblingIndex() - 1;
        return this.node.children[previousIndex >= 0 ? previousIndex : this.node.childrenCount - 1];
    }
    getPreviousPoint(point: cc.Node) {
        if (!this.reverse) {
            return this.getPrevious(point);
        } else {
            return this.getNext(point);
        }
    }

    getNext(point: cc.Node) {
        const nextIndex = point.getSiblingIndex() + 1;
        return this.node.children[nextIndex < this.node.childrenCount ? nextIndex : 0];
    }
    getNextPoint(point: cc.Node) {
        if (this.reverse) {
            return this.getPrevious(point);
        } else {
            return this.getNext(point);
        }
    }

    getStart() {
        return this.node.children[0];
    }

    getEnd() {
        return this.node.children[this.node.childrenCount - 1];
    }

    getStartPoint() {
        if (this.reverse) {
            return this.getEnd();
        } else {
            return this.getStart();
        }
    }

    getEndPoint() {
        if (!this.reverse) {
            return this.getEnd();
        } else {
            return this.getStart();
        }
    }
}
