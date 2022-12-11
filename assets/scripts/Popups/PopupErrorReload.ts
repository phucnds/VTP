// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import SoundMgr from "../common/SoundMgr";
import connect from "../src/app/connect";
import store, { AppDispatch, RootState } from "../src/app/store";
import { EAppPages, EAppPopups, IPageWithEffect, popPage, popPopup, pushPage, pushPopup } from "../src/features/SliceApp";
import { DeeplinkTypesToName, EDeeplinkTypes } from "../src/features/SliceDeeplinks";
import Popup from "./Popup";


const { ccclass, property } = cc._decorator;

export class PopupErrorReload extends Popup {
    actions: any;
    props: any

    @property(cc.Node)
    btnClose: cc.Node = null;

    @property(cc.Node)
    btnOk: cc.Node = null;

    public onLoad() {
        this.btnOk.on(cc.Node.EventType.TOUCH_END, () => {
            SoundMgr.playSfx(SoundMgr.Instance.SFX_BUTTON);
            document.location.reload()
        });

        this.btnOk.on(cc.Node.EventType.TOUCH_END, () => {
            SoundMgr.playSfx(SoundMgr.Instance.SFX_BUTTON);
            window.location.href = this.props.deeplinks.data[DeeplinkTypesToName[EDeeplinkTypes.CLOSE_GAME]];
        });
    }
}

const mapStateToProps = (state: RootState) => ({
    deeplinks: state.deeplinks
})
const mapDispatchToAction = (dispatch: AppDispatch) => ({
    pushPage: (payload: EAppPages | IPageWithEffect) =>
        dispatch(pushPage(payload)),
    popPage: () => dispatch(popPage()),
    pushPopup: (payload: EAppPopups) => dispatch(pushPopup(payload)),
})
export default connect(mapStateToProps, mapDispatchToAction)(PopupErrorReload)
