import Events from "../common/Events";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameObject extends cc.Component 
{
    onLoad()
    {
        
    }
    onDisable()
    {

    }
    load(){
        
    }

    kill(){
        // this.node.active = false;
    }
}
