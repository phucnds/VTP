
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/components/CompWeeklyPrizeHistoryItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvQ29tcFdlZWtseVByaXplSGlzdG9yeUl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQWtDO0FBR2xDLDZDQUFrRTtBQUU1RCxJQUFBLEtBQTJDLEVBQUUsQ0FBQyxVQUFVLEVBQXRELE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLGlCQUFpQix1QkFBa0IsQ0FBQztBQUcvRDtJQUF3RCw4Q0FBWTtJQUFwRTtRQUFBLHFFQWFDO1FBWFUsY0FBUSxHQUFhLElBQUksQ0FBQztRQUUxQixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBRXpCLGFBQU8sR0FBYSxJQUFJLENBQUM7O0lBT3BDLENBQUM7SUFMRyx5Q0FBSSxHQUFKLFVBQUssS0FBYSxFQUFFLEtBQWEsRUFBRSxJQUFZO1FBQzNDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLHFCQUFhLENBQUMsb0JBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBTSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBTSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUcsQ0FBQTtJQUNqSSxDQUFDO0lBVkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztnRUFDYztJQUVqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOytEQUNhO0lBRWhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0RBQ2E7SUFOZiwwQkFBMEI7UUFEOUMsT0FBTztPQUNhLDBCQUEwQixDQWE5QztJQUFELGlDQUFDO0NBYkQsQUFhQyxDQWJ1RCxFQUFFLENBQUMsU0FBUyxHQWFuRTtrQkFib0IsMEJBQTBCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbWVudCA9IHJlcXVpcmUoJ21vbWVudCcpO1xuaW1wb3J0IFNvdW5kTWdyIGZyb20gJy4uL2NvbW1vbi9Tb3VuZE1ncic7XG5pbXBvcnQgR2FtZURlZmluZSBmcm9tICcuLi9zcmMvY29tbW9uL0dhbWVEZWZpbmUnO1xuaW1wb3J0IHsgZm9ybWF0TXNpc2RuLCB0cnVuY2F0ZVBob25lIH0gZnJvbSAnLi4vc3JjL2NvbW1vbi91dGlscyc7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHksIGV4ZWN1dGVJbkVkaXRNb2RlIH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcFdlZWtseVByaXplSGlzdG9yeUl0ZW0gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBwdWJsaWMgcGhvbmVUeHQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgcHVibGljIHdlZWtUeHQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgcHVibGljIGRhdGVUeHQ6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIGluaXQoaW5kZXg6IG51bWJlciwgcGhvbmU6IHN0cmluZywgZGF0ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMucGhvbmVUeHQuc3RyaW5nID0gdHJ1bmNhdGVQaG9uZShmb3JtYXRNc2lzZG4ocGhvbmUpKTtcbiAgICAgICAgdGhpcy53ZWVrVHh0LnN0cmluZyA9IChpbmRleCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICB0aGlzLmRhdGVUeHQuc3RyaW5nID0gYCR7bW9tZW50KGRhdGUpLnN0YXJ0T2YoJ2lzb1dlZWsnKS5mb3JtYXQoJ0REL01NJyl9IC0gJHttb21lbnQoZGF0ZSkuZW5kT2YoJ2lzb1dlZWsnKS5mb3JtYXQoJ0REL01NJyl9YFxuICAgIH1cbn1cbiJdfQ==