"use strict";
cc._RF.push(module, 'd20b8hWsgdAlaAIcQl61EUM', 'PageBuyTurn');
// scripts/Pages/PageBuyTurn.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageBuyTurn = exports.ticketPrices = exports.buyTicketDragDistance = exports.BuyTurnTabs = void 0;
var SoundMgr_1 = require("../common/SoundMgr");
var CompBuyTurnItem_1 = require("../components/CompBuyTurnItem");
var PopupBuyTurn_1 = require("../Popups/PopupBuyTurn");
var connect_1 = require("../src/app/connect");
var SliceApp_1 = require("../src/features/SliceApp");
var Page_1 = require("./Page");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BuyTurnTabs;
(function (BuyTurnTabs) {
    BuyTurnTabs["MONEY"] = "MONEY";
    BuyTurnTabs["VTPLUS"] = "VTPLUS";
})(BuyTurnTabs = exports.BuyTurnTabs || (exports.BuyTurnTabs = {}));
exports.buyTicketDragDistance = 10.1;
exports.ticketPrices = {
    money: 25,
    viettel: 25,
};
var mockShopItemMoney = [
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
];
var mockShopItemVTPlus = [
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
];
var PageBuyTurn = /** @class */ (function (_super) {
    __extends(PageBuyTurn, _super);
    function PageBuyTurn() {
        var _a;
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.buyItemPrefab = null;
        _this.picker = null;
        _this.progressBarMoney = null;
        _this.progressBarMoneyFG = null;
        _this.totalAmount = null;
        _this.totalPrice = null;
        _this.btnMoney = null;
        _this.btnViettelPlus = null;
        _this.btnBuy = null;
        _this.buyByMoneyContainer = null;
        _this.buyByVTPlusContainer = null;
        _this.buyByMoneyContent = null;
        _this.buyByVTPlusContent = null;
        _this.pickerHolding = false;
        _this.amount = 1;
        _this.amountMax = 50;
        _this.price = 50;
        _this.tab = BuyTurnTabs.VTPLUS;
        _this.tabToContainerMap = (_a = {},
            _a[BuyTurnTabs.MONEY] = 'buyByMoneyContainer',
            _a[BuyTurnTabs.VTPLUS] = 'buyByVTPlusContainer',
            _a);
        return _this;
    }
    PageBuyTurn.prototype.init = function () {
        _super.prototype.init.call(this);
        this.onTabClick(this.btnViettelPlus, BuyTurnTabs.VTPLUS);
        this.syncProgressBar();
    };
    PageBuyTurn.prototype.onDisable = function () {
        this.amount = 1;
        this.onTabClick(this.btnViettelPlus, BuyTurnTabs.VTPLUS);
        this.syncProgressBar();
    };
    PageBuyTurn.prototype.onLoad = function () {
        var _this = this;
        this.btnMoney.on(cc.Node.EventType.TOUCH_END, function () {
            // this.onTabClick(this.btnMoney, BuyTurnTabs.MONEY);
            // this.syncProgressBar()
        });
        this.btnViettelPlus.on(cc.Node.EventType.TOUCH_END, function () {
            // this.onTabClick(this.btnViettelPlus, BuyTurnTabs.VTPLUS);
            // this.syncProgressBar()
        });
        this.btnBuy.on(cc.Node.EventType.TOUCH_END, function () {
            SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
            _this.onButtonBuyClick();
        });
        var startPosX = null;
        this.picker.on(cc.Node.EventType.TOUCH_START, function (event) {
            _this.pickerHolding = true;
            startPosX = event.getLocationX();
        });
        this.picker.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            if (!_this.pickerHolding) {
                return;
            }
            var touchX = _this.progressBarMoneyFG.convertToNodeSpaceAR(event.getLocation()).x;
            var newAmount = touchX / (_this.progressBarMoney.node.width / _this.amountMax) + 1;
            newAmount = newAmount > _this.amountMax ? _this.amountMax : newAmount;
            newAmount = newAmount < 1 ? 1 : newAmount;
            _this.amount = ~~newAmount;
            _this.syncProgressBar();
            _this.disableAllPacks();
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
        this.picker.on(cc.Node.EventType.TOUCH_END, function (event) {
            _this.pickerHolding = false;
        });
        this.initPacks();
    };
    PageBuyTurn.prototype.initPacks = function () {
        var _this = this;
        mockShopItemMoney.forEach(function (item, index) {
            var ticketNum = item.ticketNum, price = item.price, unit = item.unit;
            _this.addPack(ticketNum, price, unit, _this.buyByMoneyContent);
        });
        mockShopItemVTPlus.forEach(function (item, index) {
            var ticketNum = item.ticketNum, price = item.price, unit = item.unit;
            _this.addPack(ticketNum, price, unit, _this.buyByVTPlusContent);
        });
    };
    PageBuyTurn.prototype.addPack = function (ticketNum, price, unit, parent) {
        var _this = this;
        var newItem = cc.instantiate(this.buyItemPrefab);
        parent.addChild(newItem);
        newItem.getComponent(CompBuyTurnItem_1.default).init(ticketNum, price, unit);
        newItem.on(cc.Node.EventType.TOUCH_END, function () {
            SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
            _this.disableAllPacks();
            newItem.getComponent(CompBuyTurnItem_1.default).setActive(true);
            _this.amount = ticketNum;
            _this.syncProgressBar();
        });
    };
    PageBuyTurn.prototype.disableAllPacks = function () {
        if (this.tab === BuyTurnTabs.MONEY) {
            this.buyByMoneyContent.children.forEach(function (item) {
                item.getComponent(CompBuyTurnItem_1.default).setActive(false);
            });
        }
        else {
            this.buyByVTPlusContent.children.forEach(function (item) {
                item.getComponent(CompBuyTurnItem_1.default).setActive(false);
            });
        }
    };
    PageBuyTurn.prototype.syncProgressBar = function () {
        this.progressBarMoney.progress = this.amount / this.amountMax;
        this.totalAmount.string = this.amount.toString();
        if (this.tab === BuyTurnTabs.MONEY) {
            this.price = this.amount * exports.ticketPrices.money;
            this.totalPrice.string = (this.price).toString() + 'đ';
        }
        else {
            this.price = this.amount * exports.ticketPrices.viettel;
            this.totalPrice.string = (this.price).toString() + ' điểm';
        }
        this.picker.setPosition(this.progressBarMoneyFG.position.x + this.progressBarMoneyFG.width, this.picker.position.y);
    };
    PageBuyTurn.prototype.onTabClick = function (button, tab) {
        SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
        this.disableAllPacks();
        this.disableAllTabs();
        // button.getChildByName('Background').getComponent(cc.Sprite).spriteFrame = FrameMgr.Instance['BUTTON_GOLD_SELECTED'];
        // button.getChildByName('Background').getChildByName('Label').color = GameDefine.COLOR_RED;
        this[this.tabToContainerMap[tab]].active = true;
        this.tab = tab;
    };
    PageBuyTurn.prototype.disableAllTabs = function () {
        this.buyByMoneyContainer.active = false;
        this.buyByVTPlusContainer.active = false;
        // this.btnMoney.getChildByName('Background').getComponent(cc.Sprite).spriteFrame = FrameMgr.Instance['BUTTON_GOLD'];
        // this.btnViettelPlus.getChildByName('Background').getComponent(cc.Sprite).spriteFrame = FrameMgr.Instance['BUTTON_GOLD'];
        // this.btnMoney.getChildByName('Background').getChildByName('Label').color = GameDefine.COLOR_BROWN;
        // this.btnViettelPlus.getChildByName('Background').getChildByName('Label').color = GameDefine.COLOR_BROWN;
    };
    PageBuyTurn.prototype.onEnable = function () {
        this.syncProgressBar();
    };
    PageBuyTurn.prototype.onButtonBuyClick = function () {
        this.actions.pushPopup(SliceApp_1.EAppPopups.PopupBuyTurn);
        var popup = cc.find('Canvas/PopupManager/Shown Popups/PopupBuyTurn');
        popup && popup.getComponent(PopupBuyTurn_1.default).init(this.totalAmount.string, this.totalPrice.string + ' Viettel++', this.amount, this.price);
    };
    __decorate([
        property(cc.Prefab)
    ], PageBuyTurn.prototype, "buyItemPrefab", void 0);
    __decorate([
        property(cc.Node)
    ], PageBuyTurn.prototype, "picker", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], PageBuyTurn.prototype, "progressBarMoney", void 0);
    __decorate([
        property(cc.Node)
    ], PageBuyTurn.prototype, "progressBarMoneyFG", void 0);
    __decorate([
        property(cc.Label)
    ], PageBuyTurn.prototype, "totalAmount", void 0);
    __decorate([
        property(cc.Label)
    ], PageBuyTurn.prototype, "totalPrice", void 0);
    __decorate([
        property(cc.Node)
    ], PageBuyTurn.prototype, "btnMoney", void 0);
    __decorate([
        property(cc.Node)
    ], PageBuyTurn.prototype, "btnViettelPlus", void 0);
    __decorate([
        property(cc.Node)
    ], PageBuyTurn.prototype, "btnBuy", void 0);
    __decorate([
        property(cc.Node)
    ], PageBuyTurn.prototype, "buyByMoneyContainer", void 0);
    __decorate([
        property(cc.Node)
    ], PageBuyTurn.prototype, "buyByVTPlusContainer", void 0);
    __decorate([
        property(cc.Node)
    ], PageBuyTurn.prototype, "buyByMoneyContent", void 0);
    __decorate([
        property(cc.Node)
    ], PageBuyTurn.prototype, "buyByVTPlusContent", void 0);
    return PageBuyTurn;
}(Page_1.default));
exports.PageBuyTurn = PageBuyTurn;
var mapStateToProps = function (state) { return ({}); };
var mapDispatchToAction = function (dispatch) { return ({
    pushPage: function (payload) {
        return dispatch(SliceApp_1.pushPage(payload));
    },
    popPage: function () { return dispatch(SliceApp_1.popPage()); },
    pushPopup: function (payload) { return dispatch(SliceApp_1.pushPopup(payload)); },
}); };
exports.default = connect_1.default(mapStateToProps, mapDispatchToAction)(PageBuyTurn);

cc._RF.pop();