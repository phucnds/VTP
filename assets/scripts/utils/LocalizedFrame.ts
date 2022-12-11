import Events from "../common/Events";

const { ccclass, property } = cc._decorator;

@ccclass
export default class LocalizedFrame extends cc.Component 
{
    @property(cc.SpriteFrame) EN: cc.SpriteFrame = null;
    @property(cc.SpriteFrame) MY: cc.SpriteFrame = null;
    @property(cc.SpriteFrame) MU: cc.SpriteFrame = null;

    private mDefaultFrame: cc.SpriteFrame;

    onLoad(){
        Events.registerEvent(Events.EventLanguageChanged, this.localize.bind(this));
        this.mDefaultFrame = this.node.getComponent(cc.Sprite).spriteFrame;
    }
    
    onEnable(){
        this.localize();
    }

    private localize(){
        this.node.getComponent(cc.Sprite).spriteFrame = this[window.language.toUpperCase()] || this.mDefaultFrame;
    }
}
