
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Popups/PopupDailyLogin.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7e68dTQ45pEqIz2zc+8VAx2', 'PopupDailyLogin');
// scripts/Popups/PopupDailyLogin.ts

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
var store_1 = require("../src/app/store");
var common_1 = require("../src/common/common");
var SliceApp_1 = require("../src/features/SliceApp");
var Helper_1 = require("../utils/Helper");
var Popup_1 = require("./Popup");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopupDailyLogin = /** @class */ (function (_super) {
    __extends(PopupDailyLogin, _super);
    function PopupDailyLogin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btnBack2 = null;
        _this.btnSpin = null;
        _this.coinAndTicketTxtPlaceholder = '';
        _this.descriptionTxtPlaceholder = '';
        _this.coinAndTicketTxt = null;
        _this.descriptionTxt = null;
        return _this;
    }
    PopupDailyLogin.prototype.onLoad = function () {
        if (this.btnBack2) {
            Helper_1.default.registerButtonEvent(this.btnBack2, function () { return store_1.default.dispatch(SliceApp_1.popPopup()); });
        }
        if (this.btnSpin) {
            Helper_1.default.registerButtonEvent(this.btnSpin, function () { return store_1.default.dispatch(SliceApp_1.popPopup()); });
        }
    };
    PopupDailyLogin.prototype.init = function (coin, ticket, loginStreak) {
        this.coinAndTicketTxt.string = this.coinAndTicketTxtPlaceholder.replace('%s1', coin.toString()).replace('%s2', ticket.toString());
        this.descriptionTxt.string = this.descriptionTxtPlaceholder.replace('%s1', loginStreak.toString()).split('\\n').join('\n').replace('%dump', loginStreak > 1 ? ' liên tiếp' : '');
    };
    PopupDailyLogin.prototype.onDisable = function () {
        common_1.checkRewardPopup();
    };
    __decorate([
        property(cc.Node)
    ], PopupDailyLogin.prototype, "btnBack2", void 0);
    __decorate([
        property(cc.Node)
    ], PopupDailyLogin.prototype, "btnSpin", void 0);
    __decorate([
        property(String)
    ], PopupDailyLogin.prototype, "coinAndTicketTxtPlaceholder", void 0);
    __decorate([
        property(String)
    ], PopupDailyLogin.prototype, "descriptionTxtPlaceholder", void 0);
    __decorate([
        property(cc.RichText)
    ], PopupDailyLogin.prototype, "coinAndTicketTxt", void 0);
    __decorate([
        property(cc.RichText)
    ], PopupDailyLogin.prototype, "descriptionTxt", void 0);
    PopupDailyLogin = __decorate([
        ccclass
    ], PopupDailyLogin);
    return PopupDailyLogin;
}(Popup_1.default));
exports.default = PopupDailyLogin;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BvcHVwcy9Qb3B1cERhaWx5TG9naW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJbEYsMENBQXFDO0FBRXJDLCtDQUF3RDtBQUV4RCxxREFBMkU7QUFFM0UsMENBQXFDO0FBQ3JDLGlDQUE0QjtBQUV0QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE2QyxtQ0FBSztJQUFsRDtRQUFBLHFFQWdDQztRQTlCVSxjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsaUNBQTJCLEdBQVcsRUFBRSxDQUFDO1FBRXpDLCtCQUF5QixHQUFXLEVBQUUsQ0FBQztRQUV2QyxzQkFBZ0IsR0FBZ0IsSUFBSSxDQUFDO1FBRXJDLG9CQUFjLEdBQWdCLElBQUksQ0FBQzs7SUFtQjlDLENBQUM7SUFqQkcsZ0NBQU0sR0FBTjtRQUNJLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNmLGdCQUFNLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxjQUFNLE9BQUEsZUFBSyxDQUFDLFFBQVEsQ0FBQyxtQkFBUSxFQUFFLENBQUMsRUFBMUIsQ0FBMEIsQ0FBQyxDQUFDO1NBQy9FO1FBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2QsZ0JBQU0sQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLGNBQU0sT0FBQSxlQUFLLENBQUMsUUFBUSxDQUFDLG1CQUFRLEVBQUUsQ0FBQyxFQUExQixDQUEwQixDQUFDLENBQUM7U0FDOUU7SUFDTCxDQUFDO0lBRU0sOEJBQUksR0FBWCxVQUFZLElBQVksRUFBRSxNQUFjLEVBQUUsV0FBbUI7UUFDekQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsMkJBQTJCLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ2xJLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3JMLENBQUM7SUFFUyxtQ0FBUyxHQUFuQjtRQUNJLHlCQUFnQixFQUFFLENBQUM7SUFDdkIsQ0FBQztJQTdCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3FEQUNjO0lBRWhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQ2E7SUFHL0I7UUFEQyxRQUFRLENBQUMsTUFBTSxDQUFDO3dFQUMrQjtJQUVoRDtRQURDLFFBQVEsQ0FBQyxNQUFNLENBQUM7c0VBQzZCO0lBRTlDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7NkRBQ3NCO0lBRTVDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7MkRBQ29CO0lBYnpCLGVBQWU7UUFEbkMsT0FBTztPQUNhLGVBQWUsQ0FnQ25DO0lBQUQsc0JBQUM7Q0FoQ0QsQUFnQ0MsQ0FoQzRDLGVBQUssR0FnQ2pEO2tCQWhDb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgeyB1c2VyUHJvZmlsZSB9IGZyb20gXCIuLi9jb21tb24vVXNlclByb2ZpbGVcIjtcbmltcG9ydCBBUElEZWZpbmUgZnJvbSBcIi4uL3NyYy9hcHAvQVBJRGVmaW5lXCI7XG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4uL3NyYy9hcHAvc3RvcmVcIjtcbmltcG9ydCB3c2d3IGZyb20gXCIuLi9zcmMvYXBwL3dzZ3dcIjtcbmltcG9ydCB7IGNoZWNrUmV3YXJkUG9wdXAgfSBmcm9tIFwiLi4vc3JjL2NvbW1vbi9jb21tb25cIjtcbmltcG9ydCB7IHRyYWNrVXNlckludGVyYWN0IH0gZnJvbSBcIi4uL3NyYy9jb21tb24vdXRpbHNcIjtcbmltcG9ydCB7IEVBcHBQb3B1cHMsIHBvcFBvcHVwLCBwdXNoUG9wdXAgfSBmcm9tIFwiLi4vc3JjL2ZlYXR1cmVzL1NsaWNlQXBwXCI7XG5pbXBvcnQgeyBzeW5jTG9naW5TdHJlYWsgfSBmcm9tIFwiLi4vc3JjL2ZlYXR1cmVzL1NsaWNlTG9naW5cIjtcbmltcG9ydCBIZWxwZXIgZnJvbSBcIi4uL3V0aWxzL0hlbHBlclwiO1xuaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cERhaWx5TG9naW4gZXh0ZW5kcyBQb3B1cCB7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHVibGljIGJ0bkJhY2syOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwdWJsaWMgYnRuU3BpbjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoU3RyaW5nKVxuICAgIHB1YmxpYyBjb2luQW5kVGlja2V0VHh0UGxhY2Vob2xkZXI6IFN0cmluZyA9ICcnO1xuICAgIEBwcm9wZXJ0eShTdHJpbmcpXG4gICAgcHVibGljIGRlc2NyaXB0aW9uVHh0UGxhY2Vob2xkZXI6IFN0cmluZyA9ICcnO1xuICAgIEBwcm9wZXJ0eShjYy5SaWNoVGV4dClcbiAgICBwdWJsaWMgY29pbkFuZFRpY2tldFR4dDogY2MuUmljaFRleHQgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5SaWNoVGV4dClcbiAgICBwdWJsaWMgZGVzY3JpcHRpb25UeHQ6IGNjLlJpY2hUZXh0ID0gbnVsbDtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuYnRuQmFjazIpIHtcbiAgICAgICAgICAgIEhlbHBlci5yZWdpc3RlckJ1dHRvbkV2ZW50KHRoaXMuYnRuQmFjazIsICgpID0+IHN0b3JlLmRpc3BhdGNoKHBvcFBvcHVwKCkpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5idG5TcGluKSB7XG4gICAgICAgICAgICBIZWxwZXIucmVnaXN0ZXJCdXR0b25FdmVudCh0aGlzLmJ0blNwaW4sICgpID0+IHN0b3JlLmRpc3BhdGNoKHBvcFBvcHVwKCkpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBpbml0KGNvaW46IG51bWJlciwgdGlja2V0OiBudW1iZXIsIGxvZ2luU3RyZWFrOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5jb2luQW5kVGlja2V0VHh0LnN0cmluZyA9IHRoaXMuY29pbkFuZFRpY2tldFR4dFBsYWNlaG9sZGVyLnJlcGxhY2UoJyVzMScsIGNvaW4udG9TdHJpbmcoKSkucmVwbGFjZSgnJXMyJywgdGlja2V0LnRvU3RyaW5nKCkpO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uVHh0LnN0cmluZyA9IHRoaXMuZGVzY3JpcHRpb25UeHRQbGFjZWhvbGRlci5yZXBsYWNlKCclczEnLCBsb2dpblN0cmVhay50b1N0cmluZygpKS5zcGxpdCgnXFxcXG4nKS5qb2luKCdcXG4nKS5yZXBsYWNlKCclZHVtcCcsIGxvZ2luU3RyZWFrID4gMSA/ICcgbGnDqm4gdGnhur9wJyA6ICcnKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25EaXNhYmxlKCk6IHZvaWQge1xuICAgICAgICBjaGVja1Jld2FyZFBvcHVwKCk7XG4gICAgfVxufVxuIl19