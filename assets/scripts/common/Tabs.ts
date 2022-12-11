// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import TabItem from '../common/TabItem';
import APIDefine, { apis } from '../src/app/APIDefine';
import connect from "../src/app/connect";
import { AppDispatch, RootState } from "../src/app/store";
import wsgw from '../src/app/wsgw';
import { EAppPages, EAppPopups, IPageWithEffect, popPage, popPopup, pushPage, pushPopup } from "../src/features/SliceApp";
import Helper from '../utils/Helper';
import TabButton from './TabButton';


const { ccclass, property } = cc._decorator;
export class Tabs extends cc.Component {
    actions: any
    props: any

    @property(cc.Node)
    public TabButtons: cc.Node = null;
    @property(cc.Node)
    public Tabs: cc.Node = null;

    onLoad() {
        this.TabButtons.children.forEach((btn, index) => {
            Helper.registerButtonEvent(btn, () => {
                this.onTabClick(index);
            })
        });
    }

    protected onEnable(): void {
        this.onTabClick(0);
    }

    onTabClick(indexToActive) {
        this.Tabs.children.forEach((tab, index) => {
            if (index === indexToActive) {
                tab.active = true;
            } else {
                tab.active = false;
            }
        })
        this.TabButtons.children.forEach((btn, index) => {
            if (index === indexToActive) {
                btn.getComponent(TabButton).setActive(true);
            } else {
                btn.getComponent(TabButton).setActive(false);
            }
        })
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
export default connect(mapStateToProps, mapDispatchToAction)(Tabs)