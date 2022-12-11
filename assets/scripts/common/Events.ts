import SingletonNode from "../utils/SingletonNode";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Events extends SingletonNode<Events>()
{
    static EventLanguageChanged: string = 'EventLanguageChanged';
    static EventUpdateRank: string = 'EventUpdateRank';
    static EventUpdateState: string = 'EventUpdateRank';

    static registerEvent(name: string, callback: Function){
        this.Instance.node.on(name, callback);
    }
    static on(name: string, callback: Function){
        this.Instance.node.on(name, callback);
    }
    static off(name: string, callback: Function){
        this.Instance.node.off(name, callback);
    }

    static emit(name: string, ...args){
        this.Instance.node.emit(name, ...args);
    }
    onLoad()
    {
        super.onLoad();
    }
}