"use strict";
cc._RF.push(module, '21a5eFlhTJKDYM2KSF+j4e4', 'PopupBuyTurn');
// scripts/Popups/PopupBuyTurn.ts

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
exports.PopupBuyTurn = void 0;
var SoundMgr_1 = require("../common/SoundMgr");
var connect_1 = require("../src/app/connect");
var store_1 = require("../src/app/store");
var SliceApp_1 = require("../src/features/SliceApp");
var SliceDeeplinks_1 = require("../src/features/SliceDeeplinks");
var Popup_1 = require("./Popup");
var PopupUpdateInfo_1 = require("./PopupUpdateInfo");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopupBuyTurn = /** @class */ (function (_super) {
    __extends(PopupBuyTurn, _super);
    function PopupBuyTurn() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.placeHolder = '';
        _this.amountTxt = null;
        _this.btnConfirm = null;
        return _this;
    }
    PopupBuyTurn.prototype.onLoad = function () {
        var _this = this;
        _super.prototype.onLoad.call(this);
        this.btnConfirm.on(cc.Node.EventType.TOUCH_END, function () {
            SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
            var verifiedUser = store_1.default.getState().user.verifiedUser;
            if (verifiedUser) {
                var data = { transAmount: _this.price, turnNumber: _this.amount, content: "\u0110\u1ED5i " + _this.amount + " v\u00E9 Chi\u1EBFc m\u00E1y th\u1EA7n k\u1EF3" };
                window.location.href = _this.props.deeplinks.data[SliceDeeplinks_1.DeeplinkTypesToName[SliceDeeplinks_1.EDeeplinkTypes.BUY_TURN]] + "?data=" + JSON.stringify(data);
                _this.actions.popPopup();
            }
            else {
                _this.actions.popPopup();
                _this.actions.pushPopup(SliceApp_1.EAppPopups.PopupUpdateInfo);
                var popup = cc.find('Canvas/PopupManager/Shown Popups/PopupUpdateInfo');
                popup && popup.getComponent(PopupUpdateInfo_1.default).init(_this.amount, _this.price);
            }
        });
    };
    PopupBuyTurn.prototype.init = function (amount, price, valAmount, valPrice) {
        this.amount = valAmount;
        this.price = valPrice;
        this.amountTxt.string = this.placeHolder.replace('%s1', amount).replace('%s2', price);
    };
    __decorate([
        property(String)
    ], PopupBuyTurn.prototype, "placeHolder", void 0);
    __decorate([
        property(cc.Label)
    ], PopupBuyTurn.prototype, "amountTxt", void 0);
    __decorate([
        property(cc.Node)
    ], PopupBuyTurn.prototype, "btnConfirm", void 0);
    return PopupBuyTurn;
}(Popup_1.default));
exports.PopupBuyTurn = PopupBuyTurn;
var mapStateToProps = function (state) { return ({
    reward: state.reward,
    quests: state.quests,
    deeplinks: state.deeplinks,
}); };
var mapDispatchToAction = function (dispatch) { return ({
    pushPage: function (payload) {
        return dispatch(SliceApp_1.pushPage(payload));
    },
    popPopup: function () { return dispatch(SliceApp_1.popPopup()); },
    pushPopup: function (payload) { return dispatch(SliceApp_1.pushPopup(payload)); },
}); };
exports.default = connect_1.default(mapStateToProps, mapDispatchToAction)(PopupBuyTurn);

cc._RF.pop();