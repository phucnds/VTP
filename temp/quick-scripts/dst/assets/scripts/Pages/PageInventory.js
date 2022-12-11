
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Pages/PageInventory.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BhZ2VzL1BhZ2VJbnZlbnRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLCtCQUFnQztBQUNoQywrQ0FBMEM7QUFDMUMsK0NBQTBDO0FBQzFDLHFFQUFnRTtBQUNoRSxrREFBNkM7QUFDN0MsOENBQXlDO0FBQ3pDLDBDQUFpRTtBQUNqRSx3Q0FBbUM7QUFDbkMsdURBQWtEO0FBQ2xELHFEQUFrSTtBQUNsSSxpRUFBMEc7QUFDMUcsK0JBQTBCO0FBRXBCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDLElBQVksYUFHWDtBQUhELFdBQVksYUFBYTtJQUNyQiw4QkFBYSxDQUFBO0lBQ2IsOEJBQWEsQ0FBQTtBQUNqQixDQUFDLEVBSFcsYUFBYSxHQUFiLHFCQUFhLEtBQWIscUJBQWEsUUFHeEI7QUFDRDtJQUFtQyxpQ0FBSTtJQUF2Qzs7UUFBQSxxRUE0SUM7UUF2SVUsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFFOUIsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFFOUIsb0JBQWMsR0FBa0IsSUFBSSxDQUFDO1FBRXJDLHNCQUFnQixHQUFrQixJQUFJLENBQUM7UUFFdkMsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsbUJBQWEsR0FBYyxJQUFJLENBQUM7UUFHaEMsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXZCLGdCQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2Ysa0JBQVksR0FBRyxDQUFDLENBQUM7UUFDakIscUJBQWUsR0FBRyxJQUFJLENBQUM7UUFDdkIsdUJBQWlCLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLFdBQUssR0FBRyxFQUFFLENBQUE7UUFDVixTQUFHLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQztRQUN6Qix1QkFBaUI7WUFDckIsR0FBQyxhQUFhLENBQUMsSUFBSSxJQUFHLGVBQWU7WUFDckMsR0FBQyxhQUFhLENBQUMsSUFBSSxJQUFHLGVBQWU7Z0JBQ3hDO1FBQ08scUJBQWU7WUFDbkIsR0FBQyxhQUFhLENBQUMsSUFBSSxJQUFHLGFBQWE7WUFDbkMsR0FBQyxhQUFhLENBQUMsSUFBSSxJQUFHLGFBQWE7Z0JBQ3RDOztJQXFHTCxDQUFDO0lBbkdHLDhCQUFNLEdBQU47UUFBQSxpQkFhQztRQVpHLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRTtZQUN6QyxLQUFJLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxPQUFPLEVBQUUsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RELENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFO1lBQ3pDLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEQsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUU7WUFDNUMsa0JBQVEsQ0FBQyxPQUFPLENBQUMsa0JBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDL0MsS0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMscUJBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3hELENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLGdCQUFnQixFQUFFLEVBQXZCLENBQXVCLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUF6QixDQUF5QixDQUFDLENBQUM7SUFDcEYsQ0FBQztJQUVTLGlDQUFTLEdBQW5CO1FBQ0ksZUFBSyxDQUFDLFFBQVEsQ0FBQywrQkFBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbkMsZUFBSyxDQUFDLFFBQVEsQ0FBQyw2QkFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUNuRSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ3ZFLENBQUM7SUFFRCw0QkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztRQUM5QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCx3Q0FBZ0IsR0FBaEI7UUFBQSxpQkFRQztRQVBHLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZTtZQUFFLE9BQU87UUFDbEMsY0FBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBUyxDQUFDLG9CQUFvQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxVQUFDLENBQUM7WUFDL0YsZUFBSyxDQUFDLFFBQVEsQ0FBQyw4QkFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDaEMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsS0FBSztnQkFBRSxLQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUM5RCxLQUFJLENBQUMsVUFBVSxJQUFJLEtBQUksQ0FBQyxLQUFLLENBQUM7WUFDOUIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQsMENBQWtCLEdBQWxCO1FBQUEsaUJBU0M7UUFSRyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQjtZQUFFLE9BQU87UUFDcEMsY0FBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBUyxDQUFDLGlCQUFpQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxVQUFDLENBQUM7WUFDOUYsZUFBSyxDQUFDLFFBQVEsQ0FBQyw0QkFBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDOUIsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsS0FBSztnQkFBRSxLQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO1lBQ2hFLEtBQUksQ0FBQyxZQUFZLElBQUksS0FBSSxDQUFDLEtBQUssQ0FBQztZQUVoQyxLQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QyxDQUFDLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxrQ0FBVSxHQUFWLFVBQVcsTUFBZSxFQUFFLEdBQWtCO1FBQzFDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2Ysa0JBQVEsQ0FBQyxPQUFPLENBQUMsa0JBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsa0JBQVEsQ0FBQyxRQUFRLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUNwSCxNQUFNLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEdBQUcsb0JBQVUsQ0FBQyxTQUFTLENBQUM7UUFDekYsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFFaEQsSUFBSSxHQUFHLEtBQUssYUFBYSxDQUFDLElBQUksRUFBRTtZQUM1QixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUMzQjthQUFNLElBQUksR0FBRyxLQUFLLGFBQWEsQ0FBQyxJQUFJLEVBQUU7WUFDbkMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDN0I7SUFDTCxDQUFDO0lBRUQsc0NBQWMsR0FBZDtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNsQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsa0JBQVEsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDakgsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsa0JBQVEsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDakgsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssR0FBRyxvQkFBVSxDQUFDLFdBQVcsQ0FBQztRQUNqRyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxHQUFHLG9CQUFVLENBQUMsV0FBVyxDQUFDO0lBQ3JHLENBQUM7SUFFRCxtQ0FBVyxHQUFYLFVBQVksR0FBRztRQUFmLGlCQWdCQztRQWZHLElBQUksU0FBUyxHQUFHLEdBQUcsS0FBSyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQztRQUV6RyxJQUFJLEdBQUcsS0FBSyxhQUFhLENBQUMsSUFBSSxFQUFFO1lBQzVCLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJLEVBQUUsS0FBSztnQkFDbEIsSUFBQSxTQUFTLEdBQW1DLElBQUksVUFBdkMsRUFBRSxTQUFTLEdBQXdCLElBQUksVUFBNUIsRUFBRSxTQUFTLEdBQWEsSUFBSSxVQUFqQixFQUFFLE1BQU0sR0FBSyxJQUFJLE9BQVQsQ0FBVTtnQkFFekQsS0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsS0FBSSxDQUFDLEtBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDekgsQ0FBQyxDQUFDLENBQUE7U0FDTDthQUFNO1lBQ0gsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUksRUFBRSxLQUFLO2dCQUNsQixJQUFBLElBQUksR0FBYSxJQUFJLEtBQWpCLEVBQUUsTUFBTSxHQUFLLElBQUksT0FBVCxDQUFVO2dCQUU5QixLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxLQUFJLENBQUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLGFBQWEsR0FBRyxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNqSCxDQUFDLENBQUMsQ0FBQTtTQUNMO0lBQ0wsQ0FBQztJQUVELCtCQUFPLEdBQVAsVUFBUSxJQUFZLEVBQUUsS0FBYSxFQUFFLEtBQWEsRUFBRSxVQUFrQixFQUFFLEdBQWtCO1FBQ3RGLElBQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWxELE9BQU8sQ0FBQyxZQUFZLENBQUMsMkJBQWlCLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDakYsQ0FBQztJQXRJRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dEQUNtQjtJQUVyQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dEQUNtQjtJQUVyQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDO3lEQUNvQjtJQUU1QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDOzJEQUNzQjtJQUU5QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NEQUNpQjtJQUVuQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NEQUNpQjtJQUVuQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3dEQUNtQjtJQUd2QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3FEQUNnQjtJQUVsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNhO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ2E7SUFvSG5DLG9CQUFDO0NBNUlELEFBNElDLENBNUlrQyxjQUFJLEdBNEl0QztBQTVJWSxzQ0FBYTtBQTZJMUIsSUFBTSxlQUFlLEdBQUcsVUFBQyxLQUFnQixJQUFLLE9BQUEsQ0FBQztJQUMzQyxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7Q0FDN0IsQ0FBQyxFQUY0QyxDQUU1QyxDQUFBO0FBQ0YsSUFBTSxtQkFBbUIsR0FBRyxVQUFDLFFBQXFCLElBQUssT0FBQSxDQUFDO0lBQ3BELFFBQVEsRUFBRSxVQUFDLE9BQW9DO1FBQzNDLE9BQUEsUUFBUSxDQUFDLG1CQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFBM0IsQ0FBMkI7SUFDL0IsT0FBTyxFQUFFLGNBQU0sT0FBQSxRQUFRLENBQUMsa0JBQU8sRUFBRSxDQUFDLEVBQW5CLENBQW1CO0lBQ2xDLFNBQVMsRUFBRSxVQUFDLE9BQW1CLElBQUssT0FBQSxRQUFRLENBQUMsb0JBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUE1QixDQUE0QjtDQUNuRSxDQUFDLEVBTHFELENBS3JELENBQUE7QUFDRixrQkFBZSxpQkFBTyxDQUFDLGVBQWUsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnXG5pbXBvcnQgRnJhbWVNZ3IgZnJvbSAnLi4vY29tbW9uL0ZyYW1lTWdyJztcbmltcG9ydCBTb3VuZE1nciBmcm9tICcuLi9jb21tb24vU291bmRNZ3InO1xuaW1wb3J0IENvbXBJbnZlbnRvcnlJdGVtIGZyb20gJy4uL2NvbXBvbmVudHMvQ29tcEludmVudG9yeUl0ZW0nO1xuaW1wb3J0IEFQSURlZmluZSBmcm9tICcuLi9zcmMvYXBwL0FQSURlZmluZSc7XG5pbXBvcnQgY29ubmVjdCBmcm9tIFwiLi4vc3JjL2FwcC9jb25uZWN0XCI7XG5pbXBvcnQgc3RvcmUsIHsgUm9vdFN0YXRlLCBBcHBEaXNwYXRjaCB9IGZyb20gXCIuLi9zcmMvYXBwL3N0b3JlXCI7XG5pbXBvcnQgd3NndyBmcm9tICcuLi9zcmMvYXBwL3dzZ3cnO1xuaW1wb3J0IEdhbWVEZWZpbmUgZnJvbSAnLi4vc3JjL2NvbW1vbi9HYW1lRGVmaW5lJztcbmltcG9ydCB7IEVBcHBQYWdlcywgSVBhZ2VXaXRoRWZmZWN0LCBwdXNoUGFnZSwgcG9wUGFnZSwgRUFwcFBvcHVwcywgcHVzaFBvcHVwLCBQQUdFX1NIT1dfRUZGRUNUIH0gZnJvbSBcIi4uL3NyYy9mZWF0dXJlcy9TbGljZUFwcFwiO1xuaW1wb3J0IHsgcmVzZXRJbnZlbnRvcnksIHJlc2V0VGlja2V0cywgc3luY0ludmVudG9yeSwgc3luY1RpY2tldHMgfSBmcm9tICcuLi9zcmMvZmVhdHVyZXMvU2xpY2VJbnZlbnRvcnknO1xuaW1wb3J0IFBhZ2UgZnJvbSBcIi4vUGFnZVwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5leHBvcnQgZW51bSBJbnZlbnRvcnlUYWJzIHtcbiAgICBHSUZUID0gJ0dJRlQnLFxuICAgIFRVUk4gPSAnVFVSTicsXG59XG5leHBvcnQgY2xhc3MgUGFnZUludmVudG9yeSBleHRlbmRzIFBhZ2Uge1xuICAgIGFjdGlvbnM6IGFueVxuICAgIHByb3BzOiBhbnlcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHB1YmxpYyBnaWZ0Q29udGFpbmVyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwdWJsaWMgdHVybkNvbnRhaW5lcjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNjcm9sbFZpZXcpXG4gICAgcHVibGljIGdpZnRTY3JvbGxWaWV3OiBjYy5TY3JvbGxWaWV3ID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU2Nyb2xsVmlldylcbiAgICBwdWJsaWMgdGlja2V0U2Nyb2xsVmlldzogY2MuU2Nyb2xsVmlldyA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHVibGljIGdpZnRDb250ZW50OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwdWJsaWMgdHVybkNvbnRlbnQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHVibGljIGludmVudG9yeUl0ZW06IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwdWJsaWMgYnRuVm91Y2hlcjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHVibGljIGJ0bkdpZnQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHB1YmxpYyBidG5UdXJuOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIHByaXZhdGUgZ2lmdE9mZnNldCA9IDA7XG4gICAgcHJpdmF0ZSB0aWNrZXRPZmZzZXQgPSAwO1xuICAgIHByaXZhdGUgbmVlZFRvRmV0Y2hHaWZ0ID0gdHJ1ZTtcbiAgICBwcml2YXRlIG5lZWRUb0ZldGNoVGlja2V0ID0gdHJ1ZTtcbiAgICBwcml2YXRlIGxpbWl0ID0gMTBcbiAgICBwcml2YXRlIHRhYiA9IEludmVudG9yeVRhYnMuR0lGVDtcbiAgICBwcml2YXRlIHRhYlRvQ29udGFpbmVyTWFwID0ge1xuICAgICAgICBbSW52ZW50b3J5VGFicy5HSUZUXTogJ2dpZnRDb250YWluZXInLFxuICAgICAgICBbSW52ZW50b3J5VGFicy5UVVJOXTogJ3R1cm5Db250YWluZXInLFxuICAgIH1cbiAgICBwcml2YXRlIHRhYlRvQ29udGVudE1hcCA9IHtcbiAgICAgICAgW0ludmVudG9yeVRhYnMuR0lGVF06ICdnaWZ0Q29udGVudCcsXG4gICAgICAgIFtJbnZlbnRvcnlUYWJzLlRVUk5dOiAndHVybkNvbnRlbnQnLFxuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5idG5HaWZ0Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vblRhYkNsaWNrKHRoaXMuYnRuR2lmdCwgSW52ZW50b3J5VGFicy5HSUZUKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYnRuVHVybi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25UYWJDbGljayh0aGlzLmJ0blR1cm4sIEludmVudG9yeVRhYnMuVFVSTik7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmJ0blZvdWNoZXIub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoKSA9PiB7XG4gICAgICAgICAgICBTb3VuZE1nci5wbGF5U2Z4KFNvdW5kTWdyLkluc3RhbmNlLlNGWF9CVVRUT04pO1xuICAgICAgICAgICAgdGhpcy5hY3Rpb25zLnB1c2hQb3B1cChFQXBwUG9wdXBzLlBvcHVwR29Ub1ZvdWNoZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5naWZ0U2Nyb2xsVmlldy5ub2RlLm9uKCdib3VuY2UtYm90dG9tJywgKCkgPT4gdGhpcy5mZXRjaEdpZnRIaXN0b3J5KCkpO1xuICAgICAgICB0aGlzLnRpY2tldFNjcm9sbFZpZXcubm9kZS5vbignYm91bmNlLWJvdHRvbScsICgpID0+IHRoaXMuZmV0Y2hUaWNrZXRIaXN0b3J5KCkpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkRpc2FibGUoKTogdm9pZCB7XG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKHJlc2V0SW52ZW50b3J5KHt9KSk7XG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKHJlc2V0VGlja2V0cyh7fSkpO1xuICAgICAgICB0aGlzW3RoaXMudGFiVG9Db250ZW50TWFwW0ludmVudG9yeVRhYnMuR0lGVF1dLnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgICAgIHRoaXNbdGhpcy50YWJUb0NvbnRlbnRNYXBbSW52ZW50b3J5VGFicy5UVVJOXV0ucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmdpZnRPZmZzZXQgPSAwO1xuICAgICAgICB0aGlzLnRpY2tldE9mZnNldCA9IDA7XG4gICAgICAgIHRoaXMubmVlZFRvRmV0Y2hHaWZ0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5uZWVkVG9GZXRjaFRpY2tldCA9IHRydWU7XG4gICAgICAgIHRoaXMub25UYWJDbGljayh0aGlzLmJ0bkdpZnQsIEludmVudG9yeVRhYnMuR0lGVCk7XG4gICAgfVxuXG4gICAgZmV0Y2hHaWZ0SGlzdG9yeSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLm5lZWRUb0ZldGNoR2lmdCkgcmV0dXJuO1xuICAgICAgICB3c2d3LnVzZXJSZXF1ZXN0KEFQSURlZmluZS5nZXRBbGxSZXdhcmRzSGlzdG9yeSwgeyBvZmZzZXQ6IHRoaXMuZ2lmdE9mZnNldCwgbGltaXQ6IHRoaXMubGltaXQgfSwgKGUpID0+IHtcbiAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHN5bmNJbnZlbnRvcnkoZSkpXG4gICAgICAgICAgICBpZiAoZS5pdGVtcy5sZW5ndGggPCB0aGlzLmxpbWl0KSB0aGlzLm5lZWRUb0ZldGNoR2lmdCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5naWZ0T2Zmc2V0ICs9IHRoaXMubGltaXQ7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUl0ZW1zKEludmVudG9yeVRhYnMuR0lGVCk7XG4gICAgICAgIH0sIGNvbnNvbGUuZXJyb3IpO1xuICAgIH1cblxuICAgIGZldGNoVGlja2V0SGlzdG9yeSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLm5lZWRUb0ZldGNoVGlja2V0KSByZXR1cm47XG4gICAgICAgIHdzZ3cudXNlclJlcXVlc3QoQVBJRGVmaW5lLmdldFRpY2tldHNIaXN0b3J5LCB7IG9mZnNldDogdGhpcy50aWNrZXRPZmZzZXQsIGxpbWl0OiB0aGlzLmxpbWl0IH0sIChlKSA9PiB7XG4gICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChzeW5jVGlja2V0cyhlKSlcbiAgICAgICAgICAgIGlmIChlLml0ZW1zLmxlbmd0aCA8IHRoaXMubGltaXQpIHRoaXMubmVlZFRvRmV0Y2hUaWNrZXQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudGlja2V0T2Zmc2V0ICs9IHRoaXMubGltaXQ7XG5cbiAgICAgICAgICAgIHRoaXMudXBkYXRlSXRlbXMoSW52ZW50b3J5VGFicy5UVVJOKTtcbiAgICAgICAgfSwgY29uc29sZS5lcnJvcik7XG4gICAgfVxuXG4gICAgb25UYWJDbGljayhidXR0b246IGNjLk5vZGUsIHRhYjogSW52ZW50b3J5VGFicykge1xuICAgICAgICB0aGlzLnRhYiA9IHRhYjtcbiAgICAgICAgU291bmRNZ3IucGxheVNmeChTb3VuZE1nci5JbnN0YW5jZS5TRlhfQlVUVE9OKTtcbiAgICAgICAgdGhpcy5kaXNhYmxlQWxsVGFicygpO1xuICAgICAgICBidXR0b24uZ2V0Q2hpbGRCeU5hbWUoJ0JhY2tncm91bmQnKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IEZyYW1lTWdyLkluc3RhbmNlWydCVVRUT05fR09MRF9TRUxFQ1RFRCddO1xuICAgICAgICBidXR0b24uZ2V0Q2hpbGRCeU5hbWUoJ0JhY2tncm91bmQnKS5nZXRDaGlsZEJ5TmFtZSgnTGFiZWwnKS5jb2xvciA9IEdhbWVEZWZpbmUuQ09MT1JfUkVEO1xuICAgICAgICB0aGlzW3RoaXMudGFiVG9Db250YWluZXJNYXBbdGFiXV0uYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICBpZiAodGFiID09PSBJbnZlbnRvcnlUYWJzLkdJRlQpIHtcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hHaWZ0SGlzdG9yeSgpO1xuICAgICAgICB9IGVsc2UgaWYgKHRhYiA9PT0gSW52ZW50b3J5VGFicy5UVVJOKSB7XG4gICAgICAgICAgICB0aGlzLmZldGNoVGlja2V0SGlzdG9yeSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGlzYWJsZUFsbFRhYnMoKSB7XG4gICAgICAgIHRoaXMuZ2lmdENvbnRhaW5lci5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50dXJuQ29udGFpbmVyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJ0bkdpZnQuZ2V0Q2hpbGRCeU5hbWUoJ0JhY2tncm91bmQnKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IEZyYW1lTWdyLkluc3RhbmNlWydCVVRUT05fR09MRCddO1xuICAgICAgICB0aGlzLmJ0blR1cm4uZ2V0Q2hpbGRCeU5hbWUoJ0JhY2tncm91bmQnKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IEZyYW1lTWdyLkluc3RhbmNlWydCVVRUT05fR09MRCddO1xuICAgICAgICB0aGlzLmJ0bkdpZnQuZ2V0Q2hpbGRCeU5hbWUoJ0JhY2tncm91bmQnKS5nZXRDaGlsZEJ5TmFtZSgnTGFiZWwnKS5jb2xvciA9IEdhbWVEZWZpbmUuQ09MT1JfQlJPV047XG4gICAgICAgIHRoaXMuYnRuVHVybi5nZXRDaGlsZEJ5TmFtZSgnQmFja2dyb3VuZCcpLmdldENoaWxkQnlOYW1lKCdMYWJlbCcpLmNvbG9yID0gR2FtZURlZmluZS5DT0xPUl9CUk9XTjtcbiAgICB9XG5cbiAgICB1cGRhdGVJdGVtcyh0YWIpIHtcbiAgICAgICAgbGV0IGRhdGFUb1VzZSA9IHRhYiA9PT0gSW52ZW50b3J5VGFicy5HSUZUID8gdGhpcy5wcm9wcy5pbnZlbnRvcnkucmV3YXJkcyA6IHRoaXMucHJvcHMuaW52ZW50b3J5LnRpY2tldHM7XG5cbiAgICAgICAgaWYgKHRhYiA9PT0gSW52ZW50b3J5VGFicy5HSUZUKSB7XG4gICAgICAgICAgICBkYXRhVG9Vc2UuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGNsYWltZWRBdCwgcHJpemVOYW1lLCBwcml6ZVR5cGUsIGFtb3VudCB9ID0gaXRlbTtcblxuICAgICAgICAgICAgICAgIHRoaXMuYWRkSXRlbShwcml6ZVR5cGUsIHRoaXNbdGhpcy50YWJUb0NvbnRlbnRNYXBbdGFiXV0uY2hpbGRyZW5Db3VudCArIDEsIGFtb3VudCwgbW9tZW50KGNsYWltZWRBdCkudmFsdWVPZigpLCB0YWIpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRhdGFUb1VzZS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0ZSwgYW1vdW50IH0gPSBpdGVtO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRJdGVtKCdUVVJOJywgdGhpc1t0aGlzLnRhYlRvQ29udGVudE1hcFt0YWJdXS5jaGlsZHJlbkNvdW50ICsgMSwgYW1vdW50LCBtb21lbnQoZGF0ZSkudmFsdWVPZigpLCB0YWIpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZEl0ZW0odHlwZTogc3RyaW5nLCBpbmRleDogbnVtYmVyLCB2YWx1ZTogbnVtYmVyLCB0aW1lc3RhbXB6OiBudW1iZXIsIHRhYjogSW52ZW50b3J5VGFicykge1xuICAgICAgICBjb25zdCBuZXdJdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5pbnZlbnRvcnlJdGVtKTtcbiAgICAgICAgdGhpc1t0aGlzLnRhYlRvQ29udGVudE1hcFt0YWJdXS5hZGRDaGlsZChuZXdJdGVtKTtcblxuICAgICAgICBuZXdJdGVtLmdldENvbXBvbmVudChDb21wSW52ZW50b3J5SXRlbSkuaW5pdCh0eXBlLCBpbmRleCwgdmFsdWUsIHRpbWVzdGFtcHopO1xuICAgIH1cbn1cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogUm9vdFN0YXRlKSA9PiAoe1xuICAgIGludmVudG9yeTogc3RhdGUuaW52ZW50b3J5LFxufSlcbmNvbnN0IG1hcERpc3BhdGNoVG9BY3Rpb24gPSAoZGlzcGF0Y2g6IEFwcERpc3BhdGNoKSA9PiAoe1xuICAgIHB1c2hQYWdlOiAocGF5bG9hZDogRUFwcFBhZ2VzIHwgSVBhZ2VXaXRoRWZmZWN0KSA9PlxuICAgICAgICBkaXNwYXRjaChwdXNoUGFnZShwYXlsb2FkKSksXG4gICAgcG9wUGFnZTogKCkgPT4gZGlzcGF0Y2gocG9wUGFnZSgpKSxcbiAgICBwdXNoUG9wdXA6IChwYXlsb2FkOiBFQXBwUG9wdXBzKSA9PiBkaXNwYXRjaChwdXNoUG9wdXAocGF5bG9hZCkpLFxufSlcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvQWN0aW9uKShQYWdlSW52ZW50b3J5KVxuIl19