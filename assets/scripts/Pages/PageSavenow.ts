// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import SoundMgr from "../common/SoundMgr";
import { Missions } from "../components/CompQuestsContainer";
import APIDefine from "../src/app/APIDefine";
import connect from "../src/app/connect";
import store, { RootState, AppDispatch } from "../src/app/store";
import wsgw from "../src/app/wsgw";
import { randomString } from "../src/common/utils";
import { EAppPages, IPageWithEffect, pushPage, popPage, EAppPopups, pushPopup, PAGE_SHOW_EFFECT } from "../src/features/SliceApp";
import { DeeplinkTypesToName, EDeeplinkTypes } from "../src/features/SliceDeeplinks";
import Helper from "../utils/Helper";
import Page from "./Page";

const { ccclass, property } = cc._decorator;

export class PageSavenow extends Page {
    actions: any
    props: any

    @property(cc.Node)
    public btnConfirm: cc.Node = null;

    onLoad() {
        this.btnConfirm.on(cc.Node.EventType.TOUCH_END, () => {
            if (this.btnConfirm.getComponent(cc.Button).interactable === false) return;

            this.btnConfirm.getComponent(cc.Button).interactable = false;
            SoundMgr.playSfx(SoundMgr.Instance.SFX_BUTTON);
            wsgw.userRequest(APIDefine.hitSaveNowButton, {}, (e) => {
                store.dispatch(popPage());
                window.location.href = this.props.deeplinks.data[DeeplinkTypesToName[EDeeplinkTypes.THAM_QUAN_DAU_TU_SAVE_NOW]];
                this.btnConfirm.getComponent(cc.Button).interactable = true;
            }, () => {
                this.actions.pushPopup(EAppPopups.PopupSaveNowOverloaded);
                this.btnConfirm.getComponent(cc.Button).interactable = true;
            });
        });
    }

    protected onDisable(): void {
        this.btnConfirm.getComponent(cc.Button).interactable = true;
    }
}
const mapStateToProps = (state: RootState) => ({
    user: state.user,
    deeplinks: state.deeplinks,
})
const mapDispatchToAction = (dispatch: AppDispatch) => ({
    pushPage: (payload: EAppPages | IPageWithEffect) =>
        dispatch(pushPage(payload)),
    popPage: () => dispatch(popPage()),
    pushPopup: (payload: EAppPopups) => dispatch(pushPopup(payload)),
})
export default connect(mapStateToProps, mapDispatchToAction)(PageSavenow)