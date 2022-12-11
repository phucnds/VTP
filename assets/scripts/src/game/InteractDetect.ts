// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import TopUI from "../../common/TopUI";
import SingletonNode from "../../utils/SingletonNode";
import connect from "../app/connect";
import store, { AppDispatch, RootState } from "../app/store";
import GameDefine from "../common/GameDefine";
import { EAppPages, EAppPopups, IPageWithEffect, popPage, popPopup, popToPage, pushPage, pushPopup } from "../features/SliceApp";
import { refreshError } from "../features/SliceError";

const { ccclass, property } = cc._decorator;

export class InteractDetection extends SingletonNode<InteractDetection>() {
    props: RootState
    actions: any;

    private idleCountDown = GameDefine.IDLE_TIMEOUT;
    private isPopupShown = false;

    onLoad() {
        this.initDetectInteraction();
    }

    initDetectInteraction() {
        cc.find("Canvas").on(cc.Node.EventType.TOUCH_START, (event) => {
            this.idleCountDown = GameDefine.IDLE_TIMEOUT;
        }, this, true);
        cc.find("Canvas").on(cc.Node.EventType.TOUCH_MOVE, (event) => {
            this.idleCountDown = GameDefine.IDLE_TIMEOUT;
        }, this, true);
        cc.find("Canvas").on(cc.Node.EventType.TOUCH_END, (event) => {
            this.idleCountDown = GameDefine.IDLE_TIMEOUT;
        }, this, true);
    }

    protected update(dt: number): void {
        if (this.isPopupShown) {
            return;
        }

        this.idleCountDown -= dt;
        if (this.idleCountDown < 0) {
            store.dispatch(pushPopup(EAppPopups.PopupIdleTooLong))
            this.isPopupShown = true;
        }
    }

    public reset() {
        this.idleCountDown = GameDefine.IDLE_TIMEOUT;
    }
}

const mapStateToProps = (state: RootState) => ({
    error: state.error
})
const mapDispatchToAction = (dispatch: AppDispatch) => ({
    popPopup: () => dispatch(popPopup()),
    popToPage: (e) => dispatch(popToPage(e)),
    refreshError: () => dispatch(refreshError())
})

export default connect(mapStateToProps, mapDispatchToAction)(InteractDetection)
