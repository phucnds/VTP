// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class HorizontalScroll extends cc.Component
{

    @property(cc.ScrollView) mainScroll: cc.ScrollView = null
    // LIFE-CYCLE CALLBACKS:
    public isVerticalMoving: boolean = false
    static self()
    {
        return this;
    }

    // private _self = this

    onLoad()
    {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this, true)
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMoved, this, true)
        this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnded, this, true)

        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this._onTouchCancelled, this, true)
        let scroll = this.getComponent(cc.ScrollView)
        // scroll._onTouchBegan = this.overrideTouchBegan.bind(scroll)
    }

    start()
    {

    }
    touchStart(event, captureListeners)
    {

        // this.isTouchDown = true
    }
    _onTouchMoved(event, captureListeners)
    {
        var touch = event.touch;
        var deltaY = Math.abs(touch.getLocation().y - touch.getStartLocation().y);
        var deltaX = Math.abs(touch.getLocation().x - touch.getStartLocation().x);
        if(deltaX > deltaY && deltaX > 7)
        {
            this.isVerticalMoving = false
            return;
        }
        if (deltaY > 7 && !this.isVerticalMoving)
        {
            this.isVerticalMoving = true
            if (captureListeners && captureListeners.length >= 2)
            {
                captureListeners.shift()
                captureListeners.unshift(this.mainScroll.node)
            }
            this.mainScroll._onTouchBegan(event, captureListeners);
        }
        else if (this.isVerticalMoving && deltaY > 7)
        {
            // event.stopPropagation();
            if (captureListeners && captureListeners.length >= 2)
            {
                captureListeners.shift()
                captureListeners.unshift(this.mainScroll.node)
            }
            this.mainScroll._onTouchMoved(event, captureListeners);
        }
    }
    _onTouchCancelled(event, captureListeners)
    {
        if(this.isVerticalMoving)
        {
            if (captureListeners && captureListeners.length >= 2)
            {
                captureListeners.shift()
                captureListeners.unshift(this.mainScroll.node)
            }
            this.mainScroll._onTouchCancelled(event, captureListeners);
        }
        // this.isVerticalMoving = false
    }
    _onTouchEnded(event, captureListeners)
    {
        if(this.isVerticalMoving)
        {
            if (captureListeners && captureListeners.length >= 2)
            {
                captureListeners.shift()
                captureListeners.unshift(this.mainScroll.node)
            }
            this.mainScroll._onTouchEnded(event, captureListeners);
        }
        this.isVerticalMoving = false
    }

    // update (dt) {}
}
