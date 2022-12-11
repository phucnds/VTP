"use strict";
cc._RF.push(module, 'cd4c8slb21EnKUYnwmuT0DR', 'GiftsMgr');
// scripts/src/game/GiftsMgr.ts

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
var SingletonNode_1 = require("../../utils/SingletonNode");
var utils_1 = require("../common/utils");
var GameMgr_1 = require("./GameMgr");
var Gift_1 = require("./Gift");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GiftMgr = /** @class */ (function (_super) {
    __extends(GiftMgr, _super);
    function GiftMgr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.template = null;
        _this.topView = null;
        _this.indicator = null;
        _this.numbOfGifts = 0;
        return _this;
    }
    GiftMgr.prototype.init = function () {
        // this.topView.removeAllChildren();
        // this.node.removeAllChildren();
        // for (let i = 0; i < this.numbOfGifts; i++) {
        //     const newGift = cc.instantiate(this.template);
        //     newGift.getComponent(PathFollowObject).Delay = i * GameDefine.GIFT_GAP;
        //     this.node.addChild(newGift);
        //     newGift.active = true;
        // }
    };
    GiftMgr.prototype.roll = function () {
        if (GameMgr_1.default.Instance.getGameState() !== GameMgr_1.GameStates.PLAYING)
            return;
        GameMgr_1.default.Instance.setGameState(GameMgr_1.GameStates.ROLLING);
    };
    GiftMgr.prototype.choose = function () {
        var _this = this;
        if (GameMgr_1.default.Instance.getGameState() !== GameMgr_1.GameStates.ROLLING)
            return;
        var chosenOne = null;
        var minDistance = 999999;
        this.node.children.forEach(function (gift) {
            var giftPos = utils_1.getWorldPosition(gift);
            var indicatorPos = utils_1.getWorldPosition(_this.indicator);
            if (giftPos.y < indicatorPos.y) {
                return;
            }
            var distance = giftPos.sub(indicatorPos).mag();
            if (distance < minDistance) {
                minDistance = distance;
                chosenOne = gift;
            }
        });
        if (chosenOne) {
            chosenOne.getComponent(Gift_1.default).pickSelf();
        }
    };
    __decorate([
        property(cc.Node)
    ], GiftMgr.prototype, "template", void 0);
    __decorate([
        property(cc.Node)
    ], GiftMgr.prototype, "topView", void 0);
    __decorate([
        property(cc.Node)
    ], GiftMgr.prototype, "indicator", void 0);
    __decorate([
        property(Number)
    ], GiftMgr.prototype, "numbOfGifts", void 0);
    GiftMgr = __decorate([
        ccclass
    ], GiftMgr);
    return GiftMgr;
}(SingletonNode_1.default()));
exports.default = GiftMgr;

cc._RF.pop();