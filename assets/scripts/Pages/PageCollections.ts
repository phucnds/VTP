// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import connect from "../src/app/connect";
import { RootState, AppDispatch } from "../src/app/store";
import { EAppPages, IPageWithEffect, pushPage, popPage, EAppPopups, pushPopup, PAGE_SHOW_EFFECT } from "../src/features/SliceApp";
import Helper from "../utils/Helper";
import Page from "./Page";

const { ccclass, property } = cc._decorator;

export class PageCollections extends Page {
    actions: any
    props: any

    start() { }

    onLoad() {
    }
    onEnded() {
    }
    onEnable() { }
    onDisable() { }
}
const mapStateToProps = (state: RootState) => ({
})
const mapDispatchToAction = (dispatch: AppDispatch) => ({
    pushPage: (payload: EAppPages | IPageWithEffect) =>
        dispatch(pushPage(payload)),
    popPage: () => dispatch(popPage()),
    pushPopup: (payload: EAppPopups) => dispatch(pushPopup(payload)),
})
export default connect(mapStateToProps, mapDispatchToAction)(PageCollections)