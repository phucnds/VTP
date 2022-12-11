"use strict";
cc._RF.push(module, '35257nbWhhOs6mc0V6c2avH', 'PageWeeklyPrizeHistory');
// scripts/Pages/PageWeeklyPrizeHistory.ts

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
exports.PageWeeklyPrizeHistory = void 0;
var moment = require("moment");
var SoundMgr_1 = require("../common/SoundMgr");
var CompWeeklyPrizeHistoryItem_1 = require("../components/CompWeeklyPrizeHistoryItem");
var APIDefine_1 = require("../src/app/APIDefine");
var connect_1 = require("../src/app/connect");
var store_1 = require("../src/app/store");
var wsgw_1 = require("../src/app/wsgw");
var utils_1 = require("../src/common/utils");
var SliceApp_1 = require("../src/features/SliceApp");
var SliceWeeklyPrizeHistory_1 = require("../src/features/SliceWeeklyPrizeHistory");
var Page_1 = require("./Page");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PageWeeklyPrizeHistory = /** @class */ (function (_super) {
    __extends(PageWeeklyPrizeHistory, _super);
    function PageWeeklyPrizeHistory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.itemPrefab = null;
        _this.btnClose = null;
        _this.content = null;
        _this.emptyContent = null;
        _this.dateTxt = null;
        return _this;
    }
    PageWeeklyPrizeHistory.prototype.onLoad = function () {
        this.btnClose.on(cc.Node.EventType.TOUCH_END, function () {
            SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
            store_1.default.dispatch(SliceApp_1.popPage());
        });
    };
    PageWeeklyPrizeHistory.prototype.init = function () {
        wsgw_1.default.userRequest(APIDefine_1.default.getCoinWinnerList, {}, function (e) {
            store_1.default.dispatch(SliceWeeklyPrizeHistory_1.syncWeeklyPrizeHistory(e));
        }, console.error);
    };
    PageWeeklyPrizeHistory.prototype.onStateChange = function () {
        var _this = this;
        this.content.removeAllChildren();
        var dataToUse = this.props.weeklyPrizeHistory.data;
        if (dataToUse.length > 0) {
            this.emptyContent.active = false;
        }
        else {
            this.emptyContent.active = true;
        }
        dataToUse.forEach(function (item, index) {
            var claimAt = item.claimAt, msisdn = item.msisdn;
            _this.addItem(dataToUse.length - index, msisdn, claimAt);
        });
    };
    PageWeeklyPrizeHistory.prototype.addItem = function (index, phone, date) {
        var newItem = cc.instantiate(this.itemPrefab);
        this.content.addChild(newItem);
        newItem.getComponent(CompWeeklyPrizeHistoryItem_1.default).init(index, phone, date);
    };
    PageWeeklyPrizeHistory.prototype.update = function () {
        this.syncTime();
    };
    PageWeeklyPrizeHistory.prototype.syncTime = function () {
        var rollPhaseDueDate = moment().endOf('isoWeek').startOf('day').add(20, "hours");
        if (rollPhaseDueDate.valueOf() < moment().valueOf()) {
            rollPhaseDueDate = moment().endOf('isoWeek').add(1, 'weeks').startOf('day').add(20, "hours");
        }
        var _a = utils_1.getRemanningTime(new Date(rollPhaseDueDate.valueOf())), dayRoll = _a.day, hourRoll = _a.hour, minuteRoll = _a.minute, secondRoll = _a.second;
        this.dateTxt.string = dayRoll.toString().padStart(2, '0') + " ng\u00E0y " + hourRoll.toString().padStart(2, '0') + " gi\u1EDD " + minuteRoll.toString().padStart(2, '0') + " ph\u00FAt " + secondRoll.toString().padStart(2, '0') + " gi\u00E2y";
    };
    __decorate([
        property(cc.Prefab)
    ], PageWeeklyPrizeHistory.prototype, "itemPrefab", void 0);
    __decorate([
        property(cc.Node)
    ], PageWeeklyPrizeHistory.prototype, "btnClose", void 0);
    __decorate([
        property(cc.Node)
    ], PageWeeklyPrizeHistory.prototype, "content", void 0);
    __decorate([
        property(cc.Node)
    ], PageWeeklyPrizeHistory.prototype, "emptyContent", void 0);
    __decorate([
        property(cc.Label)
    ], PageWeeklyPrizeHistory.prototype, "dateTxt", void 0);
    return PageWeeklyPrizeHistory;
}(Page_1.default));
exports.PageWeeklyPrizeHistory = PageWeeklyPrizeHistory;
var mapStateToProps = function (state) { return ({
    weeklyPrizeHistory: state.weeklyPrizeHistory,
}); };
var mapDispatchToAction = function (dispatch) { return ({
    pushPage: function (payload) {
        return dispatch(SliceApp_1.pushPage(payload));
    },
    popPage: function () { return dispatch(SliceApp_1.popPage()); },
    pushPopup: function (payload) { return dispatch(SliceApp_1.pushPopup(payload)); },
}); };
exports.default = connect_1.default(mapStateToProps, mapDispatchToAction)(PageWeeklyPrizeHistory);

cc._RF.pop();