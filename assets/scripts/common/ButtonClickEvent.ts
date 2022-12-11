import SoundMgr from "../common/SoundMgr";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ButtonClickEvent extends cc.Component 
{
    @property(cc.Float) ClickInterval: number = 0.5; //-1: one time click

    get Interactive(){ return this.mInteractive; }
    set Interactive(value){ this.mInteractive = value; }

    private mInteractive: boolean;
    private mTimer: number;

    registerEvent(callback){
        // this.node.on(cc.Node.EventType.TOUCH_END, () => {

        //     this.onClick(callback);
        // });
        this.node.on(cc.Node.EventType.TOUCH_END, () => {
            this.onClick(callback);
        }, this, true);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, () => {
        }, this, true);
        this.node.on(cc.Node.EventType.TOUCH_END, () => {
        }, this, true);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, () => {
        }, this, true);
    }

    onEnable(){
        this.mInteractive = true;
        this.mTimer = this.ClickInterval;
    }

    update(dt){
        if(this.ClickInterval != -1){
            if(!this.mInteractive){
                this.mTimer -= dt;
                if(this.mTimer < 0){
                    this.mInteractive = true;
                    this.mTimer = this.ClickInterval;
                }
            }
        }
    }

    private onClick(callback: Function){
        // SoundMgr.playSfx(SoundMgr.Instance.SFX_CLICK);
        if(!this.mInteractive){
            return;
        }
        this.mInteractive = false;
        SoundMgr.playSfx(SoundMgr.Instance.SFX_BUTTON)
        callback && callback();
    }
}