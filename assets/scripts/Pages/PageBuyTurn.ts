// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import FrameMgr from "../common/FrameMgr";
import SoundMgr from "../common/SoundMgr";
import CompBuyTurnItem from "../components/CompBuyTurnItem";
import PopupBuyTurn from "../Popups/PopupBuyTurn";
import connect from "../src/app/connect";
import { RootState, AppDispatch } from "../src/app/store";
import GameDefine from "../src/common/GameDefine";
import { EAppPages, IPageWithEffect, pushPage, popPage, EAppPopups, pushPopup, PAGE_SHOW_EFFECT } from "../src/features/SliceApp";
import Page from "./Page";

const { ccclass, property } = cc._decorator;

export enum BuyTurnTabs {
    MONEY = 'MONEY',
    VTPLUS = 'VTPLUS',
}

export const buyTicketDragDistance: number = 10.1;
export const ticketPrices = {
    money: 25,
    viettel: 25,
};

const mockShopItemMoney = [
    {
        ticketNum: 1,
        price: 25,
        unit: 'đ'
    },
    {
        ticketNum: 5,
        price: 125,
        unit: 'đ'
    },
    {
        ticketNum: 10,
        price: 250,
        unit: 'đ'
    },
    {
        ticketNum: 15,
        price: 375,
        unit: 'đ'
    },
    {
        ticketNum: 20,
        price: 500,
        unit: 'đ'
    }
]

const mockShopItemVTPlus = [
    {
        ticketNum: 1,
        price: 25,
        unit: ' điểm'
    },
    {
        ticketNum: 5,
        price: 125,
        unit: ' điểm'
    },
    {
        ticketNum: 10,
        price: 250,
        unit: ' điểm'
    },
    {
        ticketNum: 15,
        price: 375,
        unit: ' điểm'
    },
    {
        ticketNum: 20,
        price: 500,
        unit: ' điểm'
    }
]

export class PageBuyTurn extends Page {
    actions: any
    props: any

    @property(cc.Prefab)
    public buyItemPrefab: cc.Prefab = null;

    @property(cc.Node)
    public picker: cc.Node = null;
    @property(cc.ProgressBar)
    public progressBarMoney: cc.ProgressBar = null;
    @property(cc.Node)
    public progressBarMoneyFG: cc.Node = null;

    @property(cc.Label)
    public totalAmount: cc.Label = null;
    @property(cc.Label)
    public totalPrice: cc.Label = null;

    @property(cc.Node)
    public btnMoney: cc.Node = null;
    @property(cc.Node)
    public btnViettelPlus: cc.Node = null;
    @property(cc.Node)
    public btnBuy: cc.Node = null;
    @property(cc.Node)
    public buyByMoneyContainer: cc.Node = null;
    @property(cc.Node)
    public buyByVTPlusContainer: cc.Node = null;
    @property(cc.Node)
    public buyByMoneyContent: cc.Node = null;
    @property(cc.Node)
    public buyByVTPlusContent: cc.Node = null;

    private pickerHolding: boolean = false;

    private amount: number = 1;
    private amountMax: number = 50;
    private price: number = 50;
    private tab: BuyTurnTabs = BuyTurnTabs.VTPLUS;


    private tabToContainerMap = {
        [BuyTurnTabs.MONEY]: 'buyByMoneyContainer',
        [BuyTurnTabs.VTPLUS]: 'buyByVTPlusContainer',
    }

    public init(): void {
        super.init();
        this.onTabClick(this.btnViettelPlus, BuyTurnTabs.VTPLUS);
        this.syncProgressBar()
    }

    protected onDisable(): void {
        this.amount = 1;
        this.onTabClick(this.btnViettelPlus, BuyTurnTabs.VTPLUS);
        this.syncProgressBar()
    }

    onLoad() {
        this.btnMoney.on(cc.Node.EventType.TOUCH_END, () => {
            // this.onTabClick(this.btnMoney, BuyTurnTabs.MONEY);
            // this.syncProgressBar()
        });
        this.btnViettelPlus.on(cc.Node.EventType.TOUCH_END, () => {
            // this.onTabClick(this.btnViettelPlus, BuyTurnTabs.VTPLUS);
            // this.syncProgressBar()
        });

        this.btnBuy.on(cc.Node.EventType.TOUCH_END, () => {
            SoundMgr.playSfx(SoundMgr.Instance.SFX_BUTTON);
            this.onButtonBuyClick()
        });


        let startPosX = null;
        this.picker.on(cc.Node.EventType.TOUCH_START, (event) => {
            this.pickerHolding = true;
            startPosX = event.getLocationX();
        });

        this.picker.on(cc.Node.EventType.TOUCH_MOVE, (event) => {
            if (!this.pickerHolding) {
                return;
            }

            const touchX = this.progressBarMoneyFG.convertToNodeSpaceAR(event.getLocation()).x;
            let newAmount = touchX / (this.progressBarMoney.node.width / this.amountMax) + 1;

            newAmount = newAmount > this.amountMax ? this.amountMax : newAmount;
            newAmount = newAmount < 1 ? 1 : newAmount;
            this.amount = ~~newAmount;
            this.syncProgressBar();
            this.disableAllPacks();
            // if (event.getLocationX() - startPosX > buyTicketDragDistance) {
            //     startPosX = event.getLocationX();

            //     if (this.amount < this.amountMax) {
            //         this.amount += 1;
            //         this.syncProgressBar();
            //         this.disableAllPacks();
            //     }
            //     return;
            // }

            // if (event.getLocationX() - startPosX < -buyTicketDragDistance) {
            //     startPosX = event.getLocationX();

            //     if (this.amount > 1) {
            //         this.amount -= 1;
            //         this.syncProgressBar();
            //         this.disableAllPacks();
            //     }
            //     return;
            // }
        });

        this.picker.on(cc.Node.EventType.TOUCH_END, (event) => {
            this.pickerHolding = false;
        });

        this.initPacks();
    }

    initPacks() {
        mockShopItemMoney.forEach((item, index) => {
            const { ticketNum, price, unit } = item;
            this.addPack(ticketNum, price, unit, this.buyByMoneyContent);
        })
        mockShopItemVTPlus.forEach((item, index) => {
            const { ticketNum, price, unit } = item;
            this.addPack(ticketNum, price, unit, this.buyByVTPlusContent);
        })
    }

    addPack(ticketNum: number, price: number, unit: string, parent: cc.Node) {
        const newItem = cc.instantiate(this.buyItemPrefab);
        parent.addChild(newItem);

        newItem.getComponent(CompBuyTurnItem).init(ticketNum, price, unit);

        newItem.on(cc.Node.EventType.TOUCH_END, () => {
            SoundMgr.playSfx(SoundMgr.Instance.SFX_BUTTON);
            this.disableAllPacks();
            newItem.getComponent(CompBuyTurnItem).setActive(true);
            this.amount = ticketNum;
            this.syncProgressBar();
        });
    }

    disableAllPacks() {
        if (this.tab === BuyTurnTabs.MONEY) {
            this.buyByMoneyContent.children.forEach((item) => {
                item.getComponent(CompBuyTurnItem).setActive(false);
            })
        } else {
            this.buyByVTPlusContent.children.forEach((item) => {
                item.getComponent(CompBuyTurnItem).setActive(false);
            })
        }
    }

    syncProgressBar() {
        this.progressBarMoney.progress = this.amount / this.amountMax;
        this.totalAmount.string = this.amount.toString();
        if (this.tab === BuyTurnTabs.MONEY) {
            this.price = this.amount * ticketPrices.money;
            this.totalPrice.string = (this.price).toString() + 'đ';
        } else {
            this.price = this.amount * ticketPrices.viettel;
            this.totalPrice.string = (this.price).toString() + ' điểm';
        }

        this.picker.setPosition(this.progressBarMoneyFG.position.x + this.progressBarMoneyFG.width, this.picker.position.y)
    }

    onTabClick(button: cc.Node, tab: BuyTurnTabs) {
        SoundMgr.playSfx(SoundMgr.Instance.SFX_BUTTON);
        this.disableAllPacks();
        this.disableAllTabs();
        // button.getChildByName('Background').getComponent(cc.Sprite).spriteFrame = FrameMgr.Instance['BUTTON_GOLD_SELECTED'];
        // button.getChildByName('Background').getChildByName('Label').color = GameDefine.COLOR_RED;
        this[this.tabToContainerMap[tab]].active = true;
        this.tab = tab;
    }

    disableAllTabs() {
        this.buyByMoneyContainer.active = false;
        this.buyByVTPlusContainer.active = false;
        // this.btnMoney.getChildByName('Background').getComponent(cc.Sprite).spriteFrame = FrameMgr.Instance['BUTTON_GOLD'];
        // this.btnViettelPlus.getChildByName('Background').getComponent(cc.Sprite).spriteFrame = FrameMgr.Instance['BUTTON_GOLD'];
        // this.btnMoney.getChildByName('Background').getChildByName('Label').color = GameDefine.COLOR_BROWN;
        // this.btnViettelPlus.getChildByName('Background').getChildByName('Label').color = GameDefine.COLOR_BROWN;
    }

    protected onEnable(): void {
        this.syncProgressBar()
    }

    onButtonBuyClick() {
        this.actions.pushPopup(EAppPopups.PopupBuyTurn);
        const popup = cc.find('Canvas/PopupManager/Shown Popups/PopupBuyTurn');
        popup && popup.getComponent(PopupBuyTurn).init(this.totalAmount.string, this.totalPrice.string + ' Viettel++', this.amount, this.price)
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
export default connect(mapStateToProps, mapDispatchToAction)(PageBuyTurn)