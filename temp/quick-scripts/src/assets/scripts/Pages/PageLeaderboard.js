"use strict";
cc._RF.push(module, '11c764ZGrNEIZaz9qT52oQT', 'PageLeaderboard');
// scripts/Pages/PageLeaderboard.ts

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
exports.PageLeaderboard = void 0;
var connect_1 = require("../src/app/connect");
var SliceApp_1 = require("../src/features/SliceApp");
var Helper_1 = require("../utils/Helper");
var Page_1 = require("./Page");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PageLeaderboard = /** @class */ (function (_super) {
    __extends(PageLeaderboard, _super);
    function PageLeaderboard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btnDescription = null;
        return _this;
    }
    PageLeaderboard.prototype.start = function () { };
    PageLeaderboard.prototype.onLoad = function () {
        var _this = this;
        Helper_1.default.registerButtonEvent(this.btnDescription, function () { return _this.actions.pushPage({ page: SliceApp_1.EAppPages.PageLeaderboardDescription, effect: SliceApp_1.PAGE_SHOW_EFFECT.LEFT }); });
    };
    PageLeaderboard.prototype.onEnded = function () {
    };
    PageLeaderboard.prototype.onEnable = function () { };
    PageLeaderboard.prototype.onDisable = function () { };
    __decorate([
        property(cc.Node)
    ], PageLeaderboard.prototype, "btnDescription", void 0);
    return PageLeaderboard;
}(Page_1.default));
exports.PageLeaderboard = PageLeaderboard;
var mapStateToProps = function (state) { return ({}); };
var mapDispatchToAction = function (dispatch) { return ({
    pushPage: function (payload) {
        return dispatch(SliceApp_1.pushPage(payload));
    },
    popPage: function () { return dispatch(SliceApp_1.popPage()); },
    pushPopup: function (payload) { return dispatch(SliceApp_1.pushPopup(payload)); },
}); };
exports.default = connect_1.default(mapStateToProps, mapDispatchToAction)(PageLeaderboard);

cc._RF.pop();