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


const { ccclass, property } = cc._decorator;
export class ListView extends cc.Component {
    actions: any
    props: any

    @property(String)
    public api: string = apis.getBalances;
    @property(cc.ScrollView)
    public scrollview: cc.ScrollView = null;
    @property(cc.Node)
    public content: cc.Node = null;
    @property(cc.Node)
    public item: cc.Node = null;
    @property(Boolean)
    public isPage: Boolean = false;

    private offset = 0;
    private needToFetch = true;
    private limit = 30

    onLoad() {
        this.scrollview.node.on('bounce-bottom', () => this.fetch());
    }

    protected onDisable(): void {
        this.content.removeAllChildren();
        this.content.removeAllChildren();
    }

    onEnable() {
        this.offset = 0;
        this.limit = 0;
        this.needToFetch = true;
        this.fetch();
    }

    fetch() {
        if (!this.needToFetch) return;
        wsgw.userRequest(APIDefine[this.api], { offset: this.offset, limit: this.limit }, (e) => {
            if (e.items.length < this.limit) this.needToFetch = false;
            if (this.isPage) {
                this.offset += 1;
            } else {
                this.offset += this.limit;
            }
            this.updateItems(e);
        }, console.error);
    }

    updateItems(data) {
        data.forEach((item, index) => {
            this.addItem(item, index);
        })
    }

    addItem(data: any, index: number) {
        const newItem = cc.instantiate(this.item);
        this.content.addChild(newItem);
        newItem.getComponent(TabItem).init(data, index);
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
export default connect(mapStateToProps, mapDispatchToAction)(ListView)