
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/components/CompQuest.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a5d33JWH95EN7AIZJY8ayEI', 'CompQuest');
// scripts/components/CompQuest.ts

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
var SoundMgr_1 = require("../common/SoundMgr");
var APIDefine_1 = require("../src/app/APIDefine");
var store_1 = require("../src/app/store");
var wsgw_1 = require("../src/app/wsgw");
var TrackingDefine_1 = require("../src/common/TrackingDefine");
var CompQuestsContainer_1 = require("./CompQuestsContainer");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode;
var CompQuest = /** @class */ (function (_super) {
    __extends(CompQuest, _super);
    function CompQuest() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.progress = null;
        _this.nameTxt = null;
        _this.descriptionTxt = null;
        _this.ticketTxt = null;
        _this.coinTxt = null;
        _this.btnDoit = null;
        _this.btnTxt = null;
        _this.completedTxt = null;
        _this.rewardTurnContainer = null;
        _this.rewardCoinContainer = null;
        return _this;
    }
    CompQuest.prototype.init = function (progress, max, name, description, coin, turn, deeplink, btnCB, questCode) {
        if (btnCB === void 0) { btnCB = null; }
        var verifiedUser = store_1.default.getState().user.verifiedUser;
        if (verifiedUser && questCode == CompQuestsContainer_1.Missions.XAC_THUC_THONG_TIN.toString()) {
            if (progress >= max) {
                this.node.active = true;
            }
            else {
                this.node.active = false;
            }
        }
        var customerSourceLinked = store_1.default.getState().user.customerSourceLinked;
        if (customerSourceLinked && questCode == CompQuestsContainer_1.Missions.LIEN_KET_THE.toString()) {
            if (progress >= max) {
                this.node.active = true;
            }
            else {
                this.node.active = false;
            }
        }
        this.progress.string = (progress || '0') + " / " + (max || '0');
        this.nameTxt.string = name || '-';
        this.descriptionTxt.string = description ? description.split('\\n').join('\n') : '-';
        this.ticketTxt.string = turn ? turn.toString() : '0';
        this.coinTxt.string = coin ? coin.toString() : '0';
        this.btnTxt.string = CompQuestsContainer_1.MissionsButtonText[questCode] || 'Tham gia';
        this.rewardCoinContainer.active = coin > 0;
        this.rewardTurnContainer.active = turn > 0;
        if (progress >= max) {
            this.btnDoit.getComponent(cc.Button).interactable = false;
            this.btnDoit.active = false;
            this.completedTxt.node.active = true;
        }
        else {
            this.btnDoit.getComponent(cc.Button).interactable = true;
            this.btnDoit.active = true;
            this.completedTxt.node.active = false;
        }
        if (!btnCB && deeplink) {
            this.btnDoit.on(cc.Node.EventType.TOUCH_END, function () {
                SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
                window.location.href = deeplink;
                wsgw_1.default.userRequest(APIDefine_1.default.track, {
                    eventName: TrackingDefine_1.default.TrackingEvents.CLICK_ON_MISSION,
                    data: questCode
                }, function (e) { console.log("TRACKING - " + questCode); }, console.error);
            });
            return;
        }
        if (btnCB) {
            this.btnDoit.on(cc.Node.EventType.TOUCH_END, function () {
                SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
                btnCB(deeplink);
                wsgw_1.default.userRequest(APIDefine_1.default.track, {
                    eventName: TrackingDefine_1.default.TrackingEvents.CLICK_ON_MISSION,
                    data: questCode
                }, function (e) { console.log("TRACKING - " + questCode); }, console.error);
            });
            return;
        }
    };
    __decorate([
        property(cc.Label)
    ], CompQuest.prototype, "progress", void 0);
    __decorate([
        property(cc.Label)
    ], CompQuest.prototype, "nameTxt", void 0);
    __decorate([
        property(cc.Label)
    ], CompQuest.prototype, "descriptionTxt", void 0);
    __decorate([
        property(cc.Label)
    ], CompQuest.prototype, "ticketTxt", void 0);
    __decorate([
        property(cc.Label)
    ], CompQuest.prototype, "coinTxt", void 0);
    __decorate([
        property(cc.Node)
    ], CompQuest.prototype, "btnDoit", void 0);
    __decorate([
        property(cc.Label)
    ], CompQuest.prototype, "btnTxt", void 0);
    __decorate([
        property(cc.Label)
    ], CompQuest.prototype, "completedTxt", void 0);
    __decorate([
        property(cc.Node)
    ], CompQuest.prototype, "rewardTurnContainer", void 0);
    __decorate([
        property(cc.Node)
    ], CompQuest.prototype, "rewardCoinContainer", void 0);
    CompQuest = __decorate([
        ccclass
    ], CompQuest);
    return CompQuest;
}(cc.Component));
exports.default = CompQuest;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvQ29tcFF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUEwQztBQUMxQyxrREFBNkM7QUFDN0MsMENBQXFDO0FBQ3JDLHdDQUFtQztBQUVuQywrREFBMEQ7QUFHMUQsNkRBQXFFO0FBRS9ELElBQUEsS0FBMkMsRUFBRSxDQUFDLFVBQVUsRUFBdEQsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsaUJBQWlCLHVCQUFrQixDQUFDO0FBRS9EO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBMEdDO1FBdkdVLGNBQVEsR0FBYSxJQUFJLENBQUM7UUFFMUIsYUFBTyxHQUFhLElBQUksQ0FBQztRQUV6QixvQkFBYyxHQUFhLElBQUksQ0FBQztRQUVoQyxlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRTNCLGFBQU8sR0FBYSxJQUFJLENBQUM7UUFFekIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixZQUFNLEdBQWEsSUFBSSxDQUFDO1FBRXhCLGtCQUFZLEdBQWEsSUFBSSxDQUFDO1FBRTlCLHlCQUFtQixHQUFZLElBQUksQ0FBQztRQUVwQyx5QkFBbUIsR0FBWSxJQUFJLENBQUM7O0lBcUYvQyxDQUFDO0lBbkZHLHdCQUFJLEdBQUosVUFDSSxRQUFnQixFQUNoQixHQUFXLEVBQ1gsSUFBWSxFQUNaLFdBQW1CLEVBQ25CLElBQVksRUFDWixJQUFZLEVBQ1osUUFBZ0IsRUFDaEIsS0FBc0IsRUFDdEIsU0FBYTtRQURiLHNCQUFBLEVBQUEsWUFBc0I7UUFHdEIsSUFBTSxZQUFZLEdBQUcsZUFBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDeEQsSUFBSSxZQUFZLElBQUksU0FBUyxJQUFJLDhCQUFRLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDckUsSUFBSSxRQUFRLElBQUksR0FB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SSxDQUFDOzhDQUNhO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NkNBQ1k7SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzttREFDa0I7SUFFckM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswREFDeUI7SUFFM0M7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswREFDeUI7SUFyQjFCLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0EwRzdCO0lBQUQsZ0JBQUM7Q0ExR0QsQUEwR0MsQ0ExR3NDLEVBQUUsQ0FBQyxTQUFTLEdBMEdsRDtrQkExR29CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU291bmRNZ3IgZnJvbSBcIi4uL2NvbW1vbi9Tb3VuZE1nclwiO1xuaW1wb3J0IEFQSURlZmluZSBmcm9tIFwiLi4vc3JjL2FwcC9BUElEZWZpbmVcIjtcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi4vc3JjL2FwcC9zdG9yZVwiO1xuaW1wb3J0IHdzZ3cgZnJvbSBcIi4uL3NyYy9hcHAvd3Nnd1wiO1xuaW1wb3J0IEdhbWVEZWZpbmUgZnJvbSBcIi4uL3NyYy9jb21tb24vR2FtZURlZmluZVwiO1xuaW1wb3J0IFRyYWNraW5nRGVmaW5lIGZyb20gXCIuLi9zcmMvY29tbW9uL1RyYWNraW5nRGVmaW5lXCI7XG5pbXBvcnQgeyBFQXBwUGFnZXMsIEVBcHBQb3B1cHMsIFBBR0VfU0hPV19FRkZFQ1QsIHBvcFBhZ2UsIHB1c2hQb3B1cCB9IGZyb20gXCIuLi9zcmMvZmVhdHVyZXMvU2xpY2VBcHBcIjtcbmltcG9ydCBIZWxwZXIgZnJvbSBcIi4uL3V0aWxzL0hlbHBlclwiO1xuaW1wb3J0IHsgTWlzc2lvbnMsIE1pc3Npb25zQnV0dG9uVGV4dCB9IGZyb20gXCIuL0NvbXBRdWVzdHNDb250YWluZXJcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgZXhlY3V0ZUluRWRpdE1vZGUgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcFF1ZXN0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBwdWJsaWMgcHJvZ3Jlc3M6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgcHVibGljIG5hbWVUeHQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgcHVibGljIGRlc2NyaXB0aW9uVHh0OiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHB1YmxpYyB0aWNrZXRUeHQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgcHVibGljIGNvaW5UeHQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwdWJsaWMgYnRuRG9pdDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHB1YmxpYyBidG5UeHQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgcHVibGljIGNvbXBsZXRlZFR4dDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHB1YmxpYyByZXdhcmRUdXJuQ29udGFpbmVyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwdWJsaWMgcmV3YXJkQ29pbkNvbnRhaW5lcjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBpbml0KFxuICAgICAgICBwcm9ncmVzczogbnVtYmVyLFxuICAgICAgICBtYXg6IG51bWJlcixcbiAgICAgICAgbmFtZTogc3RyaW5nLFxuICAgICAgICBkZXNjcmlwdGlvbjogc3RyaW5nLFxuICAgICAgICBjb2luOiBudW1iZXIsXG4gICAgICAgIHR1cm46IG51bWJlcixcbiAgICAgICAgZGVlcGxpbms6IHN0cmluZyxcbiAgICAgICAgYnRuQ0I6IEZ1bmN0aW9uID0gbnVsbCxcbiAgICAgICAgcXVlc3RDb2RlOiAnJyxcbiAgICApIHtcbiAgICAgICAgY29uc3QgdmVyaWZpZWRVc2VyID0gc3RvcmUuZ2V0U3RhdGUoKS51c2VyLnZlcmlmaWVkVXNlcjtcbiAgICAgICAgaWYgKHZlcmlmaWVkVXNlciAmJiBxdWVzdENvZGUgPT0gTWlzc2lvbnMuWEFDX1RIVUNfVEhPTkdfVElOLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICAgIGlmIChwcm9ncmVzcyA+PSBtYXgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY3VzdG9tZXJTb3VyY2VMaW5rZWQgPSBzdG9yZS5nZXRTdGF0ZSgpLnVzZXIuY3VzdG9tZXJTb3VyY2VMaW5rZWQ7XG4gICAgICAgIGlmIChjdXN0b21lclNvdXJjZUxpbmtlZCAmJiBxdWVzdENvZGUgPT0gTWlzc2lvbnMuTElFTl9LRVRfVEhFLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICAgIGlmIChwcm9ncmVzcyA+PSBtYXgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcm9ncmVzcy5zdHJpbmcgPSBgJHtwcm9ncmVzcyB8fCAnMCd9IC8gJHttYXggfHwgJzAnfWA7XG4gICAgICAgIHRoaXMubmFtZVR4dC5zdHJpbmcgPSBuYW1lIHx8ICctJztcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvblR4dC5zdHJpbmcgPSBkZXNjcmlwdGlvbiA/IGRlc2NyaXB0aW9uLnNwbGl0KCdcXFxcbicpLmpvaW4oJ1xcbicpIDogJy0nO1xuICAgICAgICB0aGlzLnRpY2tldFR4dC5zdHJpbmcgPSB0dXJuID8gdHVybi50b1N0cmluZygpIDogJzAnO1xuICAgICAgICB0aGlzLmNvaW5UeHQuc3RyaW5nID0gY29pbiA/IGNvaW4udG9TdHJpbmcoKSA6ICcwJztcbiAgICAgICAgdGhpcy5idG5UeHQuc3RyaW5nID0gTWlzc2lvbnNCdXR0b25UZXh0W3F1ZXN0Q29kZV0gfHwgJ1RoYW0gZ2lhJztcblxuICAgICAgICB0aGlzLnJld2FyZENvaW5Db250YWluZXIuYWN0aXZlID0gY29pbiA+IDA7XG4gICAgICAgIHRoaXMucmV3YXJkVHVybkNvbnRhaW5lci5hY3RpdmUgPSB0dXJuID4gMDtcblxuICAgICAgICBpZiAocHJvZ3Jlc3MgPj0gbWF4KSB7XG4gICAgICAgICAgICB0aGlzLmJ0bkRvaXQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmJ0bkRvaXQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmNvbXBsZXRlZFR4dC5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJ0bkRvaXQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuYnRuRG9pdC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5jb21wbGV0ZWRUeHQubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghYnRuQ0IgJiYgZGVlcGxpbmspIHtcbiAgICAgICAgICAgIHRoaXMuYnRuRG9pdC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsICgpID0+IHtcbiAgICAgICAgICAgICAgICBTb3VuZE1nci5wbGF5U2Z4KFNvdW5kTWdyLkluc3RhbmNlLlNGWF9CVVRUT04pO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVlcGxpbms7XG4gICAgICAgICAgICAgICAgd3Nndy51c2VyUmVxdWVzdChcbiAgICAgICAgICAgICAgICAgICAgQVBJRGVmaW5lLnRyYWNrLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudE5hbWU6IFRyYWNraW5nRGVmaW5lLlRyYWNraW5nRXZlbnRzLkNMSUNLX09OX01JU1NJT04sXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBxdWVzdENvZGVcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgKGUpID0+IHsgY29uc29sZS5sb2coYFRSQUNLSU5HIC0gJHtxdWVzdENvZGV9YCkgfSxcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvclxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChidG5DQikge1xuICAgICAgICAgICAgdGhpcy5idG5Eb2l0Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIFNvdW5kTWdyLnBsYXlTZngoU291bmRNZ3IuSW5zdGFuY2UuU0ZYX0JVVFRPTik7XG4gICAgICAgICAgICAgICAgYnRuQ0IoZGVlcGxpbmspO1xuICAgICAgICAgICAgICAgIHdzZ3cudXNlclJlcXVlc3QoXG4gICAgICAgICAgICAgICAgICAgIEFQSURlZmluZS50cmFjayxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnROYW1lOiBUcmFja2luZ0RlZmluZS5UcmFja2luZ0V2ZW50cy5DTElDS19PTl9NSVNTSU9OLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogcXVlc3RDb2RlXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIChlKSA9PiB7IGNvbnNvbGUubG9nKGBUUkFDS0lORyAtICR7cXVlc3RDb2RlfWApIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3JcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=