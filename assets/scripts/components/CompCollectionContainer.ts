// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import SoundMgr from "../common/SoundMgr";
import connect from "../src/app/connect";
import { RootState, AppDispatch } from "../src/app/store";
import { EAppPages, IPageWithEffect, pushPage, popPage, EAppPopups, pushPopup, PAGE_SHOW_EFFECT } from "../src/features/SliceApp";

const { ccclass, property } = cc._decorator;

export class CompCollectionContainer extends cc.Component {
    actions: any;
    props: any

    @property(cc.Node)
    public btnSpin: cc.Node = null;

    onLoad() {
        this.btnSpin.on(cc.Node.EventType.TOUCH_END, () => {
            SoundMgr.playSfx(SoundMgr.Instance.SFX_BUTTON);
            this.actions.pushPage({ page: EAppPages.PageHome, effect: PAGE_SHOW_EFFECT.LEFT });
        });
    }

    // update (dt) {}
}
const mapStateToProps = (state: RootState) => ({
})
const mapDispatchToAction = (dispatch: AppDispatch) => ({
    pushPage: (payload: EAppPages | IPageWithEffect) =>
        dispatch(pushPage(payload)),
    popPage: () => dispatch(popPage()),
    pushPopup: (payload: EAppPopups) => dispatch(pushPopup(payload)),
})
export default connect(mapStateToProps, mapDispatchToAction)(CompCollectionContainer)