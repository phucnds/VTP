
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Pages/PageBuyTurn.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BhZ2VzL1BhZ2VCdXlUdXJuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdsRiwrQ0FBMEM7QUFDMUMsaUVBQTREO0FBQzVELHVEQUFrRDtBQUNsRCw4Q0FBeUM7QUFHekMscURBQWtJO0FBQ2xJLCtCQUEwQjtBQUVwQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QyxJQUFZLFdBR1g7QUFIRCxXQUFZLFdBQVc7SUFDbkIsOEJBQWUsQ0FBQTtJQUNmLGdDQUFpQixDQUFBO0FBQ3JCLENBQUMsRUFIVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQUd0QjtBQUVZLFFBQUEscUJBQXFCLEdBQVcsSUFBSSxDQUFDO0FBQ3JDLFFBQUEsWUFBWSxHQUFHO0lBQ3hCLEtBQUssRUFBRSxFQUFFO0lBQ1QsT0FBTyxFQUFFLEVBQUU7Q0FDZCxDQUFDO0FBRUYsSUFBTSxpQkFBaUIsR0FBRztJQUN0QjtRQUNJLFNBQVMsRUFBRSxDQUFDO1FBQ1osS0FBSyxFQUFFLEVBQUU7UUFDVCxJQUFJLEVBQUUsR0FBRztLQUNaO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsQ0FBQztRQUNaLEtBQUssRUFBRSxHQUFHO1FBQ1YsSUFBSSxFQUFFLEdBQUc7S0FDWjtJQUNEO1FBQ0ksU0FBUyxFQUFFLEVBQUU7UUFDYixLQUFLLEVBQUUsR0FBRztRQUNWLElBQUksRUFBRSxHQUFHO0tBQ1o7SUFDRDtRQUNJLFNBQVMsRUFBRSxFQUFFO1FBQ2IsS0FBSyxFQUFFLEdBQUc7UUFDVixJQUFJLEVBQUUsR0FBRztLQUNaO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsRUFBRTtRQUNiLEtB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QU8sQ0FBQyxDQUFDLEVBQTVCLENBQTRCO0NBQ25FLENBQUMsRUFMcUQsQ0FLckQsQ0FBQTtBQUNGLGtCQUFlLGlCQUFPLENBQUMsZUFBZSxFQUFFLG1CQUFtQixDQUFDLENBQUMsV0FBVyxDQUFDLENBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEZyYW1lTWdyIGZyb20gXCIuLi9jb21tb24vRnJhbWVNZ3JcIjtcbmltcG9ydCBTb3VuZE1nciBmcm9tIFwiLi4vY29tbW9uL1NvdW5kTWdyXCI7XG5pbXBvcnQgQ29tcEJ1eVR1cm5JdGVtIGZyb20gXCIuLi9jb21wb25lbnRzL0NvbXBCdXlUdXJuSXRlbVwiO1xuaW1wb3J0IFBvcHVwQnV5VHVybiBmcm9tIFwiLi4vUG9wdXBzL1BvcHVwQnV5VHVyblwiO1xuaW1wb3J0IGNvbm5lY3QgZnJvbSBcIi4uL3NyYy9hcHAvY29ubmVjdFwiO1xuaW1wb3J0IHsgUm9vdFN0YXRlLCBBcHBEaXNwYXRjaCB9IGZyb20gXCIuLi9zcmMvYXBwL3N0b3JlXCI7XG5pbXBvcnQgR2FtZURlZmluZSBmcm9tIFwiLi4vc3JjL2NvbW1vbi9HYW1lRGVmaW5lXCI7XG5pbXBvcnQgeyBFQXBwUGFnZXMsIElQYWdlV2l0aEVmZmVjdCwgcHVzaFBhZ2UsIHBvcFBhZ2UsIEVBcHBQb3B1cHMsIHB1c2hQb3B1cCwgUEFHRV9TSE9XX0VGRkVDVCB9IGZyb20gXCIuLi9zcmMvZmVhdHVyZXMvU2xpY2VBcHBcIjtcbmltcG9ydCBQYWdlIGZyb20gXCIuL1BhZ2VcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuZXhwb3J0IGVudW0gQnV5VHVyblRhYnMge1xuICAgIE1PTkVZID0gJ01PTkVZJyxcbiAgICBWVFBMVVMgPSAnVlRQTFVTJyxcbn1cblxuZXhwb3J0IGNvbnN0IGJ1eVRpY2tldERyYWdEaXN0YW5jZTogbnVtYmVyID0gMTAuMTtcbmV4cG9ydCBjb25zdCB0aWNrZXRQcmljZXMgPSB7XG4gICAgbW9uZXk6IDI1LFxuICAgIHZpZXR0ZWw6IDI1LFxufTtcblxuY29uc3QgbW9ja1Nob3BJdGVtTW9uZXkgPSBbXG4gICAge1xuICAgICAgICB0aWNrZXROdW06IDEsXG4gICAgICAgIHByaWNlOiAyNSxcbiAgICAgICAgdW5pdDogJ8SRJ1xuICAgIH0sXG4gICAge1xuICAgICAgICB0aWNrZXROdW06IDUsXG4gICAgICAgIHByaWNlOiAxMjUsXG4gICAgICAgIHVuaXQ6ICfEkSdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGlja2V0TnVtOiAxMCxcbiAgICAgICAgcHJpY2U6IDI1MCxcbiAgICAgICAgdW5pdDogJ8SRJ1xuICAgIH0sXG4gICAge1xuICAgICAgICB0aWNrZXROdW06IDE1LFxuICAgICAgICBwcmljZTogMzc1LFxuICAgICAgICB1bml0OiAnxJEnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpY2tldE51bTogMjAsXG4gICAgICAgIHByaWNlOiA1MDAsXG4gICAgICAgIHVuaXQ6ICfEkSdcbiAgICB9XG5dXG5cbmNvbnN0IG1vY2tTaG9wSXRlbVZUUGx1cyA9IFtcbiAgICB7XG4gICAgICAgIHRpY2tldE51bTogMSxcbiAgICAgICAgcHJpY2U6IDI1LFxuICAgICAgICB1bml0OiAnIMSRaeG7g20nXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpY2tldE51bTogNSxcbiAgICAgICAgcHJpY2U6IDEyNSxcbiAgICAgICAgdW5pdDogJyDEkWnhu4NtJ1xuICAgIH0sXG4gICAge1xuICAgICAgICB0aWNrZXROdW06IDEwLFxuICAgICAgICBwcmljZTogMjUwLFxuICAgICAgICB1bml0OiAnIMSRaeG7g20nXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpY2tldE51bTogMTUsXG4gICAgICAgIHByaWNlOiAzNzUsXG4gICAgICAgIHVuaXQ6ICcgxJFp4buDbSdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGlja2V0TnVtOiAyMCxcbiAgICAgICAgcHJpY2U6IDUwMCxcbiAgICAgICAgdW5pdDogJyDEkWnhu4NtJ1xuICAgIH1cbl1cblxuZXhwb3J0IGNsYXNzIFBhZ2VCdXlUdXJuIGV4dGVuZHMgUGFnZSB7XG4gICAgYWN0aW9uczogYW55XG4gICAgcHJvcHM6IGFueVxuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwdWJsaWMgYnV5SXRlbVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHB1YmxpYyBwaWNrZXI6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Qcm9ncmVzc0JhcilcbiAgICBwdWJsaWMgcHJvZ3Jlc3NCYXJNb25leTogY2MuUHJvZ3Jlc3NCYXIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHB1YmxpYyBwcm9ncmVzc0Jhck1vbmV5Rkc6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHB1YmxpYyB0b3RhbEFtb3VudDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBwdWJsaWMgdG90YWxQcmljZTogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHVibGljIGJ0bk1vbmV5OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwdWJsaWMgYnRuVmlldHRlbFBsdXM6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHB1YmxpYyBidG5CdXk6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHB1YmxpYyBidXlCeU1vbmV5Q29udGFpbmVyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwdWJsaWMgYnV5QnlWVFBsdXNDb250YWluZXI6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHB1YmxpYyBidXlCeU1vbmV5Q29udGVudDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHVibGljIGJ1eUJ5VlRQbHVzQ29udGVudDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBwcml2YXRlIHBpY2tlckhvbGRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHByaXZhdGUgYW1vdW50OiBudW1iZXIgPSAxO1xuICAgIHByaXZhdGUgYW1vdW50TWF4OiBudW1iZXIgPSA1MDtcbiAgICBwcml2YXRlIHByaWNlOiBudW1iZXIgPSA1MDtcbiAgICBwcml2YXRlIHRhYjogQnV5VHVyblRhYnMgPSBCdXlUdXJuVGFicy5WVFBMVVM7XG5cblxuICAgIHByaXZhdGUgdGFiVG9Db250YWluZXJNYXAgPSB7XG4gICAgICAgIFtCdXlUdXJuVGFicy5NT05FWV06ICdidXlCeU1vbmV5Q29udGFpbmVyJyxcbiAgICAgICAgW0J1eVR1cm5UYWJzLlZUUExVU106ICdidXlCeVZUUGx1c0NvbnRhaW5lcicsXG4gICAgfVxuXG4gICAgcHVibGljIGluaXQoKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLmluaXQoKTtcbiAgICAgICAgdGhpcy5vblRhYkNsaWNrKHRoaXMuYnRuVmlldHRlbFBsdXMsIEJ1eVR1cm5UYWJzLlZUUExVUyk7XG4gICAgICAgIHRoaXMuc3luY1Byb2dyZXNzQmFyKClcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25EaXNhYmxlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFtb3VudCA9IDE7XG4gICAgICAgIHRoaXMub25UYWJDbGljayh0aGlzLmJ0blZpZXR0ZWxQbHVzLCBCdXlUdXJuVGFicy5WVFBMVVMpO1xuICAgICAgICB0aGlzLnN5bmNQcm9ncmVzc0JhcigpXG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLmJ0bk1vbmV5Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgKCkgPT4ge1xuICAgICAgICAgICAgLy8gdGhpcy5vblRhYkNsaWNrKHRoaXMuYnRuTW9uZXksIEJ1eVR1cm5UYWJzLk1PTkVZKTtcbiAgICAgICAgICAgIC8vIHRoaXMuc3luY1Byb2dyZXNzQmFyKClcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYnRuVmlldHRlbFBsdXMub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoKSA9PiB7XG4gICAgICAgICAgICAvLyB0aGlzLm9uVGFiQ2xpY2sodGhpcy5idG5WaWV0dGVsUGx1cywgQnV5VHVyblRhYnMuVlRQTFVTKTtcbiAgICAgICAgICAgIC8vIHRoaXMuc3luY1Byb2dyZXNzQmFyKClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5idG5CdXkub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoKSA9PiB7XG4gICAgICAgICAgICBTb3VuZE1nci5wbGF5U2Z4KFNvdW5kTWdyLkluc3RhbmNlLlNGWF9CVVRUT04pO1xuICAgICAgICAgICAgdGhpcy5vbkJ1dHRvbkJ1eUNsaWNrKClcbiAgICAgICAgfSk7XG5cblxuICAgICAgICBsZXQgc3RhcnRQb3NYID0gbnVsbDtcbiAgICAgICAgdGhpcy5waWNrZXIub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5waWNrZXJIb2xkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHN0YXJ0UG9zWCA9IGV2ZW50LmdldExvY2F0aW9uWCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnBpY2tlci5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5waWNrZXJIb2xkaW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB0b3VjaFggPSB0aGlzLnByb2dyZXNzQmFyTW9uZXlGRy5jb252ZXJ0VG9Ob2RlU3BhY2VBUihldmVudC5nZXRMb2NhdGlvbigpKS54O1xuICAgICAgICAgICAgbGV0IG5ld0Ftb3VudCA9IHRvdWNoWCAvICh0aGlzLnByb2dyZXNzQmFyTW9uZXkubm9kZS53aWR0aCAvIHRoaXMuYW1vdW50TWF4KSArIDE7XG5cbiAgICAgICAgICAgIG5ld0Ftb3VudCA9IG5ld0Ftb3VudCA+IHRoaXMuYW1vdW50TWF4ID8gdGhpcy5hbW91bnRNYXggOiBuZXdBbW91bnQ7XG4gICAgICAgICAgICBuZXdBbW91bnQgPSBuZXdBbW91bnQgPCAxID8gMSA6IG5ld0Ftb3VudDtcbiAgICAgICAgICAgIHRoaXMuYW1vdW50ID0gfn5uZXdBbW91bnQ7XG4gICAgICAgICAgICB0aGlzLnN5bmNQcm9ncmVzc0JhcigpO1xuICAgICAgICAgICAgdGhpcy5kaXNhYmxlQWxsUGFja3MoKTtcbiAgICAgICAgICAgIC8vIGlmIChldmVudC5nZXRMb2NhdGlvblgoKSAtIHN0YXJ0UG9zWCA+IGJ1eVRpY2tldERyYWdEaXN0YW5jZSkge1xuICAgICAgICAgICAgLy8gICAgIHN0YXJ0UG9zWCA9IGV2ZW50LmdldExvY2F0aW9uWCgpO1xuXG4gICAgICAgICAgICAvLyAgICAgaWYgKHRoaXMuYW1vdW50IDwgdGhpcy5hbW91bnRNYXgpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5hbW91bnQgKz0gMTtcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5zeW5jUHJvZ3Jlc3NCYXIoKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5kaXNhYmxlQWxsUGFja3MoKTtcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuO1xuICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAvLyBpZiAoZXZlbnQuZ2V0TG9jYXRpb25YKCkgLSBzdGFydFBvc1ggPCAtYnV5VGlja2V0RHJhZ0Rpc3RhbmNlKSB7XG4gICAgICAgICAgICAvLyAgICAgc3RhcnRQb3NYID0gZXZlbnQuZ2V0TG9jYXRpb25YKCk7XG5cbiAgICAgICAgICAgIC8vICAgICBpZiAodGhpcy5hbW91bnQgPiAxKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIHRoaXMuYW1vdW50IC09IDE7XG4gICAgICAgICAgICAvLyAgICAgICAgIHRoaXMuc3luY1Byb2dyZXNzQmFyKCk7XG4gICAgICAgICAgICAvLyAgICAgICAgIHRoaXMuZGlzYWJsZUFsbFBhY2tzKCk7XG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gICAgIHJldHVybjtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5waWNrZXIub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGlja2VySG9sZGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmluaXRQYWNrcygpO1xuICAgIH1cblxuICAgIGluaXRQYWNrcygpIHtcbiAgICAgICAgbW9ja1Nob3BJdGVtTW9uZXkuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgdGlja2V0TnVtLCBwcmljZSwgdW5pdCB9ID0gaXRlbTtcbiAgICAgICAgICAgIHRoaXMuYWRkUGFjayh0aWNrZXROdW0sIHByaWNlLCB1bml0LCB0aGlzLmJ1eUJ5TW9uZXlDb250ZW50KTtcbiAgICAgICAgfSlcbiAgICAgICAgbW9ja1Nob3BJdGVtVlRQbHVzLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IHRpY2tldE51bSwgcHJpY2UsIHVuaXQgfSA9IGl0ZW07XG4gICAgICAgICAgICB0aGlzLmFkZFBhY2sodGlja2V0TnVtLCBwcmljZSwgdW5pdCwgdGhpcy5idXlCeVZUUGx1c0NvbnRlbnQpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGFkZFBhY2sodGlja2V0TnVtOiBudW1iZXIsIHByaWNlOiBudW1iZXIsIHVuaXQ6IHN0cmluZywgcGFyZW50OiBjYy5Ob2RlKSB7XG4gICAgICAgIGNvbnN0IG5ld0l0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJ1eUl0ZW1QcmVmYWIpO1xuICAgICAgICBwYXJlbnQuYWRkQ2hpbGQobmV3SXRlbSk7XG5cbiAgICAgICAgbmV3SXRlbS5nZXRDb21wb25lbnQoQ29tcEJ1eVR1cm5JdGVtKS5pbml0KHRpY2tldE51bSwgcHJpY2UsIHVuaXQpO1xuXG4gICAgICAgIG5ld0l0ZW0ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoKSA9PiB7XG4gICAgICAgICAgICBTb3VuZE1nci5wbGF5U2Z4KFNvdW5kTWdyLkluc3RhbmNlLlNGWF9CVVRUT04pO1xuICAgICAgICAgICAgdGhpcy5kaXNhYmxlQWxsUGFja3MoKTtcbiAgICAgICAgICAgIG5ld0l0ZW0uZ2V0Q29tcG9uZW50KENvbXBCdXlUdXJuSXRlbSkuc2V0QWN0aXZlKHRydWUpO1xuICAgICAgICAgICAgdGhpcy5hbW91bnQgPSB0aWNrZXROdW07XG4gICAgICAgICAgICB0aGlzLnN5bmNQcm9ncmVzc0JhcigpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkaXNhYmxlQWxsUGFja3MoKSB7XG4gICAgICAgIGlmICh0aGlzLnRhYiA9PT0gQnV5VHVyblRhYnMuTU9ORVkpIHtcbiAgICAgICAgICAgIHRoaXMuYnV5QnlNb25leUNvbnRlbnQuY2hpbGRyZW4uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q29tcG9uZW50KENvbXBCdXlUdXJuSXRlbSkuc2V0QWN0aXZlKGZhbHNlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJ1eUJ5VlRQbHVzQ29udGVudC5jaGlsZHJlbi5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgaXRlbS5nZXRDb21wb25lbnQoQ29tcEJ1eVR1cm5JdGVtKS5zZXRBY3RpdmUoZmFsc2UpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN5bmNQcm9ncmVzc0JhcigpIHtcbiAgICAgICAgdGhpcy5wcm9ncmVzc0Jhck1vbmV5LnByb2dyZXNzID0gdGhpcy5hbW91bnQgLyB0aGlzLmFtb3VudE1heDtcbiAgICAgICAgdGhpcy50b3RhbEFtb3VudC5zdHJpbmcgPSB0aGlzLmFtb3VudC50b1N0cmluZygpO1xuICAgICAgICBpZiAodGhpcy50YWIgPT09IEJ1eVR1cm5UYWJzLk1PTkVZKSB7XG4gICAgICAgICAgICB0aGlzLnByaWNlID0gdGhpcy5hbW91bnQgKiB0aWNrZXRQcmljZXMubW9uZXk7XG4gICAgICAgICAgICB0aGlzLnRvdGFsUHJpY2Uuc3RyaW5nID0gKHRoaXMucHJpY2UpLnRvU3RyaW5nKCkgKyAnxJEnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wcmljZSA9IHRoaXMuYW1vdW50ICogdGlja2V0UHJpY2VzLnZpZXR0ZWw7XG4gICAgICAgICAgICB0aGlzLnRvdGFsUHJpY2Uuc3RyaW5nID0gKHRoaXMucHJpY2UpLnRvU3RyaW5nKCkgKyAnIMSRaeG7g20nO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5waWNrZXIuc2V0UG9zaXRpb24odGhpcy5wcm9ncmVzc0Jhck1vbmV5RkcucG9zaXRpb24ueCArIHRoaXMucHJvZ3Jlc3NCYXJNb25leUZHLndpZHRoLCB0aGlzLnBpY2tlci5wb3NpdGlvbi55KVxuICAgIH1cblxuICAgIG9uVGFiQ2xpY2soYnV0dG9uOiBjYy5Ob2RlLCB0YWI6IEJ1eVR1cm5UYWJzKSB7XG4gICAgICAgIFNvdW5kTWdyLnBsYXlTZngoU291bmRNZ3IuSW5zdGFuY2UuU0ZYX0JVVFRPTik7XG4gICAgICAgIHRoaXMuZGlzYWJsZUFsbFBhY2tzKCk7XG4gICAgICAgIHRoaXMuZGlzYWJsZUFsbFRhYnMoKTtcbiAgICAgICAgLy8gYnV0dG9uLmdldENoaWxkQnlOYW1lKCdCYWNrZ3JvdW5kJykuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBGcmFtZU1nci5JbnN0YW5jZVsnQlVUVE9OX0dPTERfU0VMRUNURUQnXTtcbiAgICAgICAgLy8gYnV0dG9uLmdldENoaWxkQnlOYW1lKCdCYWNrZ3JvdW5kJykuZ2V0Q2hpbGRCeU5hbWUoJ0xhYmVsJykuY29sb3IgPSBHYW1lRGVmaW5lLkNPTE9SX1JFRDtcbiAgICAgICAgdGhpc1t0aGlzLnRhYlRvQ29udGFpbmVyTWFwW3RhYl1dLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMudGFiID0gdGFiO1xuICAgIH1cblxuICAgIGRpc2FibGVBbGxUYWJzKCkge1xuICAgICAgICB0aGlzLmJ1eUJ5TW9uZXlDb250YWluZXIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYnV5QnlWVFBsdXNDb250YWluZXIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIC8vIHRoaXMuYnRuTW9uZXkuZ2V0Q2hpbGRCeU5hbWUoJ0JhY2tncm91bmQnKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IEZyYW1lTWdyLkluc3RhbmNlWydCVVRUT05fR09MRCddO1xuICAgICAgICAvLyB0aGlzLmJ0blZpZXR0ZWxQbHVzLmdldENoaWxkQnlOYW1lKCdCYWNrZ3JvdW5kJykuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBGcmFtZU1nci5JbnN0YW5jZVsnQlVUVE9OX0dPTEQnXTtcbiAgICAgICAgLy8gdGhpcy5idG5Nb25leS5nZXRDaGlsZEJ5TmFtZSgnQmFja2dyb3VuZCcpLmdldENoaWxkQnlOYW1lKCdMYWJlbCcpLmNvbG9yID0gR2FtZURlZmluZS5DT0xPUl9CUk9XTjtcbiAgICAgICAgLy8gdGhpcy5idG5WaWV0dGVsUGx1cy5nZXRDaGlsZEJ5TmFtZSgnQmFja2dyb3VuZCcpLmdldENoaWxkQnlOYW1lKCdMYWJlbCcpLmNvbG9yID0gR2FtZURlZmluZS5DT0xPUl9CUk9XTjtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25FbmFibGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3luY1Byb2dyZXNzQmFyKClcbiAgICB9XG5cbiAgICBvbkJ1dHRvbkJ1eUNsaWNrKCkge1xuICAgICAgICB0aGlzLmFjdGlvbnMucHVzaFBvcHVwKEVBcHBQb3B1cHMuUG9wdXBCdXlUdXJuKTtcbiAgICAgICAgY29uc3QgcG9wdXAgPSBjYy5maW5kKCdDYW52YXMvUG9wdXBNYW5hZ2VyL1Nob3duIFBvcHVwcy9Qb3B1cEJ1eVR1cm4nKTtcbiAgICAgICAgcG9wdXAgJiYgcG9wdXAuZ2V0Q29tcG9uZW50KFBvcHVwQnV5VHVybikuaW5pdCh0aGlzLnRvdGFsQW1vdW50LnN0cmluZywgdGhpcy50b3RhbFByaWNlLnN0cmluZyArICcgVmlldHRlbCsrJywgdGhpcy5hbW91bnQsIHRoaXMucHJpY2UpXG4gICAgfVxufVxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBSb290U3RhdGUpID0+ICh7XG59KVxuY29uc3QgbWFwRGlzcGF0Y2hUb0FjdGlvbiA9IChkaXNwYXRjaDogQXBwRGlzcGF0Y2gpID0+ICh7XG4gICAgcHVzaFBhZ2U6IChwYXlsb2FkOiBFQXBwUGFnZXMgfCBJUGFnZVdpdGhFZmZlY3QpID0+XG4gICAgICAgIGRpc3BhdGNoKHB1c2hQYWdlKHBheWxvYWQpKSxcbiAgICBwb3BQYWdlOiAoKSA9PiBkaXNwYXRjaChwb3BQYWdlKCkpLFxuICAgIHB1c2hQb3B1cDogKHBheWxvYWQ6IEVBcHBQb3B1cHMpID0+IGRpc3BhdGNoKHB1c2hQb3B1cChwYXlsb2FkKSksXG59KVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9BY3Rpb24pKFBhZ2VCdXlUdXJuKSJdfQ==