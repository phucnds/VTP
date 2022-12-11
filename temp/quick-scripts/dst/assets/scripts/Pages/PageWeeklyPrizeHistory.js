
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Pages/PageWeeklyPrizeHistory.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BhZ2VzL1BhZ2VXZWVrbHlQcml6ZUhpc3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR2xGLCtCQUFrQztBQUNsQywrQ0FBMEM7QUFDMUMsdUZBQWtGO0FBQ2xGLGtEQUE2QztBQUM3Qyw4Q0FBeUM7QUFDekMsMENBQWlFO0FBQ2pFLHdDQUFtQztBQUNuQyw2Q0FBdUQ7QUFDdkQscURBQWtJO0FBQ2xJLG1GQUFpRjtBQUVqRiwrQkFBMEI7QUFHcEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBNEMsMENBQUk7SUFBaEQ7UUFBQSxxRUFzRUM7UUFqRVUsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFHN0IsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRTdCLGFBQU8sR0FBYSxJQUFJLENBQUM7O0lBd0RwQyxDQUFDO0lBdERHLHVDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUU7WUFDMUMsa0JBQVEsQ0FBQyxPQUFPLENBQUMsa0JBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDL0MsZUFBSyxDQUFDLFFBQVEsQ0FBQyxrQkFBTyxFQUFFLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxxQ0FBSSxHQUFKO1FBQ0ksY0FBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBUyxDQUFDLGlCQUFpQixFQUFF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QUdwQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzREQUNjO0lBRWhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkRBQ2E7SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnRUFDa0I7SUFFcEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyREFDYTtJQXdEcEMsNkJBQUM7Q0F0RUQsQUFzRUMsQ0F0RTJDLGNBQUksR0FzRS9DO0FBdEVZLHdEQUFzQjtBQXVFbkMsSUFBTSxlQUFlLEdBQUcsVUFBQyxLQUFnQixJQUFLLE9BQUEsQ0FBQztJQUMzQyxrQkFBa0IsRUFBRSxLQUFLLENBQUMsa0JBQWtCO0NBQy9DLENBQUMsRUFGNEMsQ0FFNUMsQ0FBQTtBQUNGLElBQU0sbUJBQW1CLEdBQUcsVUFBQyxRQUFxQixJQUFLLE9BQUEsQ0FBQztJQUNwRCxRQUFRLEVBQUUsVUFBQyxPQUFvQztRQUMzQyxPQUFBLFFBQVEsQ0FBQyxtQkFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQTNCLENBQTJCO0lBQy9CLE9BQU8sRUFBRSxjQUFNLE9BQUEsUUFBUSxDQUFDLGtCQUFPLEVBQUUsQ0FBQyxFQUFuQixDQUFtQjtJQUNsQyxTQUFTLEVBQUUsVUFBQyxPQUFtQixJQUFLLE9BQUEsUUFBUSxDQUFDLG9CQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBNUIsQ0FBNEI7Q0FDbkUsQ0FBQyxFQUxxRCxDQUtyRCxDQUFBO0FBQ0Ysa0JBQWUsaUJBQU8sQ0FBQyxlQUFlLEVBQUUsbUJBQW1CLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnO1xuaW1wb3J0IG1vbWVudCA9IHJlcXVpcmUoXCJtb21lbnRcIik7XG5pbXBvcnQgU291bmRNZ3IgZnJvbSBcIi4uL2NvbW1vbi9Tb3VuZE1nclwiO1xuaW1wb3J0IENvbXBXZWVrbHlQcml6ZUhpc3RvcnlJdGVtIGZyb20gXCIuLi9jb21wb25lbnRzL0NvbXBXZWVrbHlQcml6ZUhpc3RvcnlJdGVtXCI7XG5pbXBvcnQgQVBJRGVmaW5lIGZyb20gXCIuLi9zcmMvYXBwL0FQSURlZmluZVwiO1xuaW1wb3J0IGNvbm5lY3QgZnJvbSBcIi4uL3NyYy9hcHAvY29ubmVjdFwiO1xuaW1wb3J0IHN0b3JlLCB7IFJvb3RTdGF0ZSwgQXBwRGlzcGF0Y2ggfSBmcm9tIFwiLi4vc3JjL2FwcC9zdG9yZVwiO1xuaW1wb3J0IHdzZ3cgZnJvbSBcIi4uL3NyYy9hcHAvd3Nnd1wiO1xuaW1wb3J0IHsgZ2V0UmVtYW5uaW5nVGltZSB9IGZyb20gXCIuLi9zcmMvY29tbW9uL3V0aWxzXCI7XG5pbXBvcnQgeyBFQXBwUGFnZXMsIElQYWdlV2l0aEVmZmVjdCwgcHVzaFBhZ2UsIHBvcFBhZ2UsIEVBcHBQb3B1cHMsIHB1c2hQb3B1cCwgUEFHRV9TSE9XX0VGRkVDVCB9IGZyb20gXCIuLi9zcmMvZmVhdHVyZXMvU2xpY2VBcHBcIjtcbmltcG9ydCB7IHN5bmNXZWVrbHlQcml6ZUhpc3RvcnkgfSBmcm9tIFwiLi4vc3JjL2ZlYXR1cmVzL1NsaWNlV2Vla2x5UHJpemVIaXN0b3J5XCI7XG5pbXBvcnQgSGVscGVyIGZyb20gXCIuLi91dGlscy9IZWxwZXJcIjtcbmltcG9ydCBQYWdlIGZyb20gXCIuL1BhZ2VcIjtcbmltcG9ydCB7IGlzRnVsZmlsbGVkIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbmV4cG9ydCBjbGFzcyBQYWdlV2Vla2x5UHJpemVIaXN0b3J5IGV4dGVuZHMgUGFnZSB7XG4gICAgYWN0aW9uczogYW55XG4gICAgcHJvcHM6IGFueVxuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwdWJsaWMgaXRlbVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHB1YmxpYyBidG5DbG9zZTogY2MuTm9kZSA9IG51bGw7IDFcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwdWJsaWMgY29udGVudDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHVibGljIGVtcHR5Q29udGVudDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHB1YmxpYyBkYXRlVHh0OiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuYnRuQ2xvc2Uub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoKSA9PiB7XG4gICAgICAgICAgICBTb3VuZE1nci5wbGF5U2Z4KFNvdW5kTWdyLkluc3RhbmNlLlNGWF9CVVRUT04pO1xuICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2gocG9wUGFnZSgpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgd3Nndy51c2VyUmVxdWVzdChBUElEZWZpbmUuZ2V0Q29pbldpbm5lckxpc3QsIHt9LCAoZSkgPT4ge1xuICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goc3luY1dlZWtseVByaXplSGlzdG9yeShlKSlcbiAgICAgICAgfSwgY29uc29sZS5lcnJvcik7XG4gICAgfVxuXG4gICAgb25TdGF0ZUNoYW5nZSgpIHtcbiAgICAgICAgdGhpcy5jb250ZW50LnJlbW92ZUFsbENoaWxkcmVuKCk7XG5cbiAgICAgICAgbGV0IGRhdGFUb1VzZSA9IHRoaXMucHJvcHMud2Vla2x5UHJpemVIaXN0b3J5LmRhdGE7XG5cbiAgICAgICAgaWYgKGRhdGFUb1VzZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmVtcHR5Q29udGVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZW1wdHlDb250ZW50LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhVG9Vc2UuZm9yRWFjaCgoaXRlbTogYW55LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBjbGFpbUF0LCBtc2lzZG4gfSA9IGl0ZW07XG5cbiAgICAgICAgICAgIHRoaXMuYWRkSXRlbShkYXRhVG9Vc2UubGVuZ3RoIC0gaW5kZXgsIG1zaXNkbiwgY2xhaW1BdCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgYWRkSXRlbShpbmRleDogbnVtYmVyLCBwaG9uZTogc3RyaW5nLCBkYXRlOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgbmV3SXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbVByZWZhYik7XG4gICAgICAgIHRoaXMuY29udGVudC5hZGRDaGlsZChuZXdJdGVtKTtcblxuICAgICAgICBuZXdJdGVtLmdldENvbXBvbmVudChDb21wV2Vla2x5UHJpemVIaXN0b3J5SXRlbSkuaW5pdChpbmRleCwgcGhvbmUsIGRhdGUpO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5zeW5jVGltZSgpO1xuICAgIH1cblxuICAgIHN5bmNUaW1lKCkge1xuICAgICAgICBsZXQgcm9sbFBoYXNlRHVlRGF0ZSA9IG1vbWVudCgpLmVuZE9mKCdpc29XZWVrJykuc3RhcnRPZignZGF5JykuYWRkKDIwLCBcImhvdXJzXCIpO1xuICAgICAgICBpZiAocm9sbFBoYXNlRHVlRGF0ZS52YWx1ZU9mKCkgPCBtb21lbnQoKS52YWx1ZU9mKCkpIHtcbiAgICAgICAgICAgIHJvbGxQaGFzZUR1ZURhdGUgPSBtb21lbnQoKS5lbmRPZignaXNvV2VlaycpLmFkZCgxLCAnd2Vla3MnKS5zdGFydE9mKCdkYXknKS5hZGQoMjAsIFwiaG91cnNcIilcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGRheTogZGF5Um9sbCwgaG91cjogaG91clJvbGwsIG1pbnV0ZTogbWludXRlUm9sbCwgc2Vjb25kOiBzZWNvbmRSb2xsXG4gICAgICAgIH0gPSBnZXRSZW1hbm5pbmdUaW1lKG5ldyBEYXRlKHJvbGxQaGFzZUR1ZURhdGUudmFsdWVPZigpKSk7XG5cbiAgICAgICAgdGhpcy5kYXRlVHh0LnN0cmluZyA9IGAke2RheVJvbGwudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpfSBuZ8OgeSAke2hvdXJSb2xsLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKX0gZ2nhu50gJHttaW51dGVSb2xsLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKX0gcGjDunQgJHtzZWNvbmRSb2xsLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKX0gZ2nDonlgO1xuICAgIH1cbn1cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogUm9vdFN0YXRlKSA9PiAoe1xuICAgIHdlZWtseVByaXplSGlzdG9yeTogc3RhdGUud2Vla2x5UHJpemVIaXN0b3J5LFxufSlcbmNvbnN0IG1hcERpc3BhdGNoVG9BY3Rpb24gPSAoZGlzcGF0Y2g6IEFwcERpc3BhdGNoKSA9PiAoe1xuICAgIHB1c2hQYWdlOiAocGF5bG9hZDogRUFwcFBhZ2VzIHwgSVBhZ2VXaXRoRWZmZWN0KSA9PlxuICAgICAgICBkaXNwYXRjaChwdXNoUGFnZShwYXlsb2FkKSksXG4gICAgcG9wUGFnZTogKCkgPT4gZGlzcGF0Y2gocG9wUGFnZSgpKSxcbiAgICBwdXNoUG9wdXA6IChwYXlsb2FkOiBFQXBwUG9wdXBzKSA9PiBkaXNwYXRjaChwdXNoUG9wdXAocGF5bG9hZCkpLFxufSlcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvQWN0aW9uKShQYWdlV2Vla2x5UHJpemVIaXN0b3J5KSJdfQ==