import SingletonNode from "../utils/SingletonNode";

const { ccclass, property } = cc._decorator;

@ccclass
export default class LoadingCover extends SingletonNode<LoadingCover>()
{
    @property(cc.Node) private Container: cc.Node = null;

    onLoad(){
        super.onLoad();
        this.hide();
    }

    show(){
        this.Container.active = true;
    }

    hide(){
        this.Container.active = false;
    }
}
