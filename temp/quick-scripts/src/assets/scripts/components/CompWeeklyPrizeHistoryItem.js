"use strict";
cc._RF.push(module, '96a30cEtcJPoLbzS3jhqajY', 'CompWeeklyPrizeHistoryItem');
// scripts/components/CompWeeklyPrizeHistoryItem.ts

"use strict";
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
var moment = require("moment");
var utils_1 = require("../src/common/utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode;
var CompWeeklyPrizeHistoryItem = /** @class */ (function (_super) {
    __extends(CompWeeklyPrizeHistoryItem, _super);
    function CompWeeklyPrizeHistoryItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.phoneTxt = null;
        _this.weekTxt = null;
        _this.dateTxt = null;
        return _this;
    }
    CompWeeklyPrizeHistoryItem.prototype.init = function (index, phone, date) {
        this.phoneTxt.string = utils_1.truncatePhone(utils_1.formatMsisdn(phone));
        this.weekTxt.string = (index).toString().padStart(2, '0');
        this.dateTxt.string = moment(date).startOf('isoWeek').format('DD/MM') + " - " + moment(date).endOf('isoWeek').format('DD/MM');
    };
    __decorate([
        property(cc.Label)
    ], CompWeeklyPrizeHistoryItem.prototype, "phoneTxt", void 0);
    __decorate([
        property(cc.Label)
    ], CompWeeklyPrizeHistoryItem.prototype, "weekTxt", void 0);
    __decorate([
        property(cc.Label)
    ], CompWeeklyPrizeHistoryItem.prototype, "dateTxt", void 0);
    CompWeeklyPrizeHistoryItem = __decorate([
        ccclass
    ], CompWeeklyPrizeHistoryItem);
    return CompWeeklyPrizeHistoryItem;
}(cc.Component));
exports.default = CompWeeklyPrizeHistoryItem;

cc._RF.pop();