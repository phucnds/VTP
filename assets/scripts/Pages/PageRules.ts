// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import SoundMgr from "../common/SoundMgr";
import connect from "../src/app/connect";
import store, { RootState, AppDispatch } from "../src/app/store";
import { getCDN } from "../src/common/utils";
import { EAppPages, IPageWithEffect, pushPage, popPage, EAppPopups, pushPopup, PAGE_SHOW_EFFECT } from "../src/features/SliceApp";
import Singleton from "../utils/Singleton";
import Page from "./Page";

const { ccclass, property } = cc._decorator;

export class PageRules extends Page {
    actions: any
    props: any

    @property(cc.Node)
    public btnClose2: cc.Node = null;
    @property(cc.Node)
    public template: cc.Node = null;
    @property(cc.Node)
    public content: cc.Node = null;
    @property(cc.ScrollView)
    public scrollView: cc.ScrollView = null;

    private scrollPosition;
    private time;

    onLoad() {
        this.btnClose2.on(cc.Node.EventType.TOUCH_END, () => {
            SoundMgr.playSfx(SoundMgr.Instance.SFX_BUTTON);
            store.dispatch(popPage());
        });

        for (let i = 0; i < 3; i++) {
            const index = i + 1;
            cc.assetManager.loadRemote(getCDN(`https://assets.elofun.com/vds-chiec-may-than-ky/rules%20(${index}).png`), (err: any, tex: any) => {
                if (!err) {
                    const newImage = cc.instantiate(this.template);
                    newImage.active = true;
                    newImage.parent = this.content;
                    newImage.name = `Image ${index}`
                    newImage.zIndex = i;
                    newImage.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(tex);
                    this.content.sortAllChildren();

                    if (this.scrollPosition) {
                        if (this.scrollPosition.y === -1) {
                            this.scrollView.scrollToBottom();
                        }
                        else {
                            this.scrollView.scrollToOffset(this.scrollPosition, this.time || 0);
                        }
                    }
                }
                else {
                    console.error(err)
                }
            });
        }
    }

    scrollToOffset(position, time) {
        if (position.y === -1) {
            this.scrollView.scrollToBottom();
        } else {
            this.scrollView.scrollToOffset(position, time)
        }
        this.scrollPosition = position;
        this.time = time;
    }
}
const mapStateToProps = (state: RootState) => ({
})
const mapDispatchToAction = (dispatch: AppDispatch) => ({
    pushPage: (payload: EAppPages | IPageWithEffect) =>
        dispatch(pushPage(payload)),
    popPage: () => dispatch(popPage()),
    pushPopup: (payload: EAppPopups) => dispatch(pushPopup(payload)),
})
export default connect(mapStateToProps, mapDispatchToAction)(PageRules)