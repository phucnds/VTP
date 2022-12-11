"use strict";
cc._RF.push(module, 'df30djd/1JNMbN96aUBQgPt', 'PageInventory');
// scripts/Pages/PageInventory.ts

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
exports.PageInventory = exports.InventoryTabs = void 0;
var moment = require("moment");
var FrameMgr_1 = require("../common/FrameMgr");
var SoundMgr_1 = require("../common/SoundMgr");
var CompInventoryItem_1 = require("../components/CompInventoryItem");
var APIDefine_1 = require("../src/app/APIDefine");
var connect_1 = require("../src/app/connect");
var store_1 = require("../src/app/store");
var wsgw_1 = require("../src/app/wsgw");
var GameDefine_1 = require("../src/common/GameDefine");
var SliceApp_1 = require("../src/features/SliceApp");
var SliceInventory_1 = require("../src/features/SliceInventory");
var Page_1 = require("./Page");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var InventoryTabs;
(function (InventoryTabs) {
    InventoryTabs["GIFT"] = "GIFT";
    InventoryTabs["TURN"] = "TURN";
})(InventoryTabs = exports.InventoryTabs || (exports.InventoryTabs = {}));
var PageInventory = /** @class */ (function (_super) {
    __extends(PageInventory, _super);
    function PageInventory() {
        var _a, _b;
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.giftContainer = null;
        _this.turnContainer = null;
        _this.giftScrollView = null;
        _this.ticketScrollView = null;
        _this.giftContent = null;
        _this.turnContent = null;
        _this.inventoryItem = null;
        _this.btnVoucher = null;
        _this.btnGift = null;
        _this.btnTurn = null;
        _this.giftOffset = 0;
        _this.ticketOffset = 0;
        _this.needToFetchGift = true;
        _this.needToFetchTicket = true;
        _this.limit = 10;
        _this.tab = InventoryTabs.GIFT;
        _this.tabToContainerMap = (_a = {},
            _a[InventoryTabs.GIFT] = 'giftContainer',
            _a[InventoryTabs.TURN] = 'turnContainer',
            _a);
        _this.tabToContentMap = (_b = {},
            _b[InventoryTabs.GIFT] = 'giftContent',
            _b[InventoryTabs.TURN] = 'turnContent',
            _b);
        return _this;
    }
    PageInventory.prototype.onLoad = function () {
        var _this = this;
        this.btnGift.on(cc.Node.EventType.TOUCH_END, function () {
            _this.onTabClick(_this.btnGift, InventoryTabs.GIFT);
        });
        this.btnTurn.on(cc.Node.EventType.TOUCH_END, function () {
            _this.onTabClick(_this.btnTurn, InventoryTabs.TURN);
        });
        this.btnVoucher.on(cc.Node.EventType.TOUCH_END, function () {
            SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
            _this.actions.pushPopup(SliceApp_1.EAppPopups.PopupGoToVoucher);
        });
        this.giftScrollView.node.on('bounce-bottom', function () { return _this.fetchGiftHistory(); });
        this.ticketScrollView.node.on('bounce-bottom', function () { return _this.fetchTicketHistory(); });
    };
    PageInventory.prototype.onDisable = function () {
        store_1.default.dispatch(SliceInventory_1.resetInventory({}));
        store_1.default.dispatch(SliceInventory_1.resetTickets({}));
        this[this.tabToContentMap[InventoryTabs.GIFT]].removeAllChildren();
        this[this.tabToContentMap[InventoryTabs.TURN]].removeAllChildren();
    };
    PageInventory.prototype.init = function () {
        this.giftOffset = 0;
        this.ticketOffset = 0;
        this.needToFetchGift = true;
        this.needToFetchTicket = true;
        this.onTabClick(this.btnGift, InventoryTabs.GIFT);
    };
    PageInventory.prototype.fetchGiftHistory = function () {
        var _this = this;
        if (!this.needToFetchGift)
            return;
        wsgw_1.default.userRequest(APIDefine_1.default.getAllRewardsHistory, { offset: this.giftOffset, limit: this.limit }, function (e) {
            store_1.default.dispatch(SliceInventory_1.syncInventory(e));
            if (e.items.length < _this.limit)
                _this.needToFetchGift = false;
            _this.giftOffset += _this.limit;
            _this.updateItems(InventoryTabs.GIFT);
        }, console.error);
    };
    PageInventory.prototype.fetchTicketHistory = function () {
        var _this = this;
        if (!this.needToFetchTicket)
            return;
        wsgw_1.default.userRequest(APIDefine_1.default.getTicketsHistory, { offset: this.ticketOffset, limit: this.limit }, function (e) {
            store_1.default.dispatch(SliceInventory_1.syncTickets(e));
            if (e.items.length < _this.limit)
                _this.needToFetchTicket = false;
            _this.ticketOffset += _this.limit;
            _this.updateItems(InventoryTabs.TURN);
        }, console.error);
    };
    PageInventory.prototype.onTabClick = function (button, tab) {
        this.tab = tab;
        SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
        this.disableAllTabs();
        button.getChildByName('Background').getComponent(cc.Sprite).spriteFrame = FrameMgr_1.default.Instance['BUTTON_GOLD_SELECTED'];
        button.getChildByName('Background').getChildByName('Label').color = GameDefine_1.default.COLOR_RED;
        this[this.tabToContainerMap[tab]].active = true;
        if (tab === InventoryTabs.GIFT) {
            this.fetchGiftHistory();
        }
        else if (tab === InventoryTabs.TURN) {
            this.fetchTicketHistory();
        }
    };
    PageInventory.prototype.disableAllTabs = function () {
        this.giftContainer.active = false;
        this.turnContainer.active = false;
        this.btnGift.getChildByName('Background').getComponent(cc.Sprite).spriteFrame = FrameMgr_1.default.Instance['BUTTON_GOLD'];
        this.btnTurn.getChildByName('Background').getComponent(cc.Sprite).spriteFrame = FrameMgr_1.default.Instance['BUTTON_GOLD'];
        this.btnGift.getChildByName('Background').getChildByName('Label').color = GameDefine_1.default.COLOR_BROWN;
        this.btnTurn.getChildByName('Background').getChildByName('Label').color = GameDefine_1.default.COLOR_BROWN;
    };
    PageInventory.prototype.updateItems = function (tab) {
        var _this = this;
        var dataToUse = tab === InventoryTabs.GIFT ? this.props.inventory.rewards : this.props.inventory.tickets;
        if (tab === InventoryTabs.GIFT) {
            dataToUse.forEach(function (item, index) {
                var claimedAt = item.claimedAt, prizeName = item.prizeName, prizeType = item.prizeType, amount = item.amount;
                _this.addItem(prizeType, _this[_this.tabToContentMap[tab]].childrenCount + 1, amount, moment(claimedAt).valueOf(), tab);
            });
        }
        else {
            dataToUse.forEach(function (item, index) {
                var date = item.date, amount = item.amount;
                _this.addItem('TURN', _this[_this.tabToContentMap[tab]].childrenCount + 1, amount, moment(date).valueOf(), tab);
            });
        }
    };
    PageInventory.prototype.addItem = function (type, index, value, timestampz, tab) {
        var newItem = cc.instantiate(this.inventoryItem);
        this[this.tabToContentMap[tab]].addChild(newItem);
        newItem.getComponent(CompInventoryItem_1.default).init(type, index, value, timestampz);
    };
    __decorate([
        property(cc.Node)
    ], PageInventory.prototype, "giftContainer", void 0);
    __decorate([
        property(cc.Node)
    ], PageInventory.prototype, "turnContainer", void 0);
    __decorate([
        property(cc.ScrollView)
    ], PageInventory.prototype, "giftScrollView", void 0);
    __decorate([
        property(cc.ScrollView)
    ], PageInventory.prototype, "ticketScrollView", void 0);
    __decorate([
        property(cc.Node)
    ], PageInventory.prototype, "giftContent", void 0);
    __decorate([
        property(cc.Node)
    ], PageInventory.prototype, "turnContent", void 0);
    __decorate([
        property(cc.Prefab)
    ], PageInventory.prototype, "inventoryItem", void 0);
    __decorate([
        property(cc.Node)
    ], PageInventory.prototype, "btnVoucher", void 0);
    __decorate([
        property(cc.Node)
    ], PageInventory.prototype, "btnGift", void 0);
    __decorate([
        property(cc.Node)
    ], PageInventory.prototype, "btnTurn", void 0);
    return PageInventory;
}(Page_1.default));
exports.PageInventory = PageInventory;
var mapStateToProps = function (state) { return ({
    inventory: state.inventory,
}); };
var mapDispatchToAction = function (dispatch) { return ({
    pushPage: function (payload) {
        return dispatch(SliceApp_1.pushPage(payload));
    },
    popPage: function () { return dispatch(SliceApp_1.popPage()); },
    pushPopup: function (payload) { return dispatch(SliceApp_1.pushPopup(payload)); },
}); };
exports.default = connect_1.default(mapStateToProps, mapDispatchToAction)(PageInventory);

cc._RF.pop();