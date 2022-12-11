// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import * as moment from 'moment'
import FrameMgr from '../common/FrameMgr';
import SoundMgr from '../common/SoundMgr';
import CompInventoryItem from '../components/CompInventoryItem';
import APIDefine from '../src/app/APIDefine';
import connect from "../src/app/connect";
import store, { RootState, AppDispatch } from "../src/app/store";
import wsgw from '../src/app/wsgw';
import GameDefine from '../src/common/GameDefine';
import { EAppPages, IPageWithEffect, pushPage, popPage, EAppPopups, pushPopup, PAGE_SHOW_EFFECT } from "../src/features/SliceApp";
import { resetInventory, resetTickets, syncInventory, syncTickets } from '../src/features/SliceInventory';
import Page from "./Page";

const { ccclass, property } = cc._decorator;

export enum InventoryTabs {
    GIFT = 'GIFT',
    TURN = 'TURN',
}
export class PageInventory extends Page {
    actions: any
    props: any

    @property(cc.Node)
    public giftContainer: cc.Node = null;
    @property(cc.Node)
    public turnContainer: cc.Node = null;
    @property(cc.ScrollView)
    public giftScrollView: cc.ScrollView = null;
    @property(cc.ScrollView)
    public ticketScrollView: cc.ScrollView = null;
    @property(cc.Node)
    public giftContent: cc.Node = null;
    @property(cc.Node)
    public turnContent: cc.Node = null;
    @property(cc.Prefab)
    public inventoryItem: cc.Prefab = null;

    @property(cc.Node)
    public btnVoucher: cc.Node = null;
    @property(cc.Node)
    public btnGift: cc.Node = null;
    @property(cc.Node)
    public btnTurn: cc.Node = null;

    private giftOffset = 0;
    private ticketOffset = 0;
    private needToFetchGift = true;
    private needToFetchTicket = true;
    private limit = 10
    private tab = InventoryTabs.GIFT;
    private tabToContainerMap = {
        [InventoryTabs.GIFT]: 'giftContainer',
        [InventoryTabs.TURN]: 'turnContainer',
    }
    private tabToContentMap = {
        [InventoryTabs.GIFT]: 'giftContent',
        [InventoryTabs.TURN]: 'turnContent',
    }

    onLoad() {
        this.btnGift.on(cc.Node.EventType.TOUCH_END, () => {
            this.onTabClick(this.btnGift, InventoryTabs.GIFT);
        });
        this.btnTurn.on(cc.Node.EventType.TOUCH_END, () => {
            this.onTabClick(this.btnTurn, InventoryTabs.TURN);
        });
        this.btnVoucher.on(cc.Node.EventType.TOUCH_END, () => {
            SoundMgr.playSfx(SoundMgr.Instance.SFX_BUTTON);
            this.actions.pushPopup(EAppPopups.PopupGoToVoucher);
        });
        this.giftScrollView.node.on('bounce-bottom', () => this.fetchGiftHistory());
        this.ticketScrollView.node.on('bounce-bottom', () => this.fetchTicketHistory());
    }

    protected onDisable(): void {
        store.dispatch(resetInventory({}));
        store.dispatch(resetTickets({}));
        this[this.tabToContentMap[InventoryTabs.GIFT]].removeAllChildren();
        this[this.tabToContentMap[InventoryTabs.TURN]].removeAllChildren();
    }

    init() {
        this.giftOffset = 0;
        this.ticketOffset = 0;
        this.needToFetchGift = true;
        this.needToFetchTicket = true;
        this.onTabClick(this.btnGift, InventoryTabs.GIFT);
    }

    fetchGiftHistory() {
        if (!this.needToFetchGift) return;
        wsgw.userRequest(APIDefine.getAllRewardsHistory, { offset: this.giftOffset, limit: this.limit }, (e) => {
            store.dispatch(syncInventory(e))
            if (e.items.length < this.limit) this.needToFetchGift = false;
            this.giftOffset += this.limit;
            this.updateItems(InventoryTabs.GIFT);
        }, console.error);
    }

    fetchTicketHistory() {
        if (!this.needToFetchTicket) return;
        wsgw.userRequest(APIDefine.getTicketsHistory, { offset: this.ticketOffset, limit: this.limit }, (e) => {
            store.dispatch(syncTickets(e))
            if (e.items.length < this.limit) this.needToFetchTicket = false;
            this.ticketOffset += this.limit;

            this.updateItems(InventoryTabs.TURN);
        }, console.error);
    }

    onTabClick(button: cc.Node, tab: InventoryTabs) {
        this.tab = tab;
        SoundMgr.playSfx(SoundMgr.Instance.SFX_BUTTON);
        this.disableAllTabs();
        button.getChildByName('Background').getComponent(cc.Sprite).spriteFrame = FrameMgr.Instance['BUTTON_GOLD_SELECTED'];
        button.getChildByName('Background').getChildByName('Label').color = GameDefine.COLOR_RED;
        this[this.tabToContainerMap[tab]].active = true;

        if (tab === InventoryTabs.GIFT) {
            this.fetchGiftHistory();
        } else if (tab === InventoryTabs.TURN) {
            this.fetchTicketHistory();
        }
    }

    disableAllTabs() {
        this.giftContainer.active = false;
        this.turnContainer.active = false;
        this.btnGift.getChildByName('Background').getComponent(cc.Sprite).spriteFrame = FrameMgr.Instance['BUTTON_GOLD'];
        this.btnTurn.getChildByName('Background').getComponent(cc.Sprite).spriteFrame = FrameMgr.Instance['BUTTON_GOLD'];
        this.btnGift.getChildByName('Background').getChildByName('Label').color = GameDefine.COLOR_BROWN;
        this.btnTurn.getChildByName('Background').getChildByName('Label').color = GameDefine.COLOR_BROWN;
    }

    updateItems(tab) {
        let dataToUse = tab === InventoryTabs.GIFT ? this.props.inventory.rewards : this.props.inventory.tickets;

        if (tab === InventoryTabs.GIFT) {
            dataToUse.forEach((item, index) => {
                const { claimedAt, prizeName, prizeType, amount } = item;

                this.addItem(prizeType, this[this.tabToContentMap[tab]].childrenCount + 1, amount, moment(claimedAt).valueOf(), tab);
            })
        } else {
            dataToUse.forEach((item, index) => {
                const { date, amount } = item;

                this.addItem('TURN', this[this.tabToContentMap[tab]].childrenCount + 1, amount, moment(date).valueOf(), tab);
            })
        }
    }

    addItem(type: string, index: number, value: number, timestampz: number, tab: InventoryTabs) {
        const newItem = cc.instantiate(this.inventoryItem);
        this[this.tabToContentMap[tab]].addChild(newItem);

        newItem.getComponent(CompInventoryItem).init(type, index, value, timestampz);
    }
}
const mapStateToProps = (state: RootState) => ({
    inventory: state.inventory,
})
const mapDispatchToAction = (dispatch: AppDispatch) => ({
    pushPage: (payload: EAppPages | IPageWithEffect) =>
        dispatch(pushPage(payload)),
    popPage: () => dispatch(popPage()),
    pushPopup: (payload: EAppPopups) => dispatch(pushPopup(payload)),
})
export default connect(mapStateToProps, mapDispatchToAction)(PageInventory)
