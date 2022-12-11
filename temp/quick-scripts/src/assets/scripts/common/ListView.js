"use strict";
cc._RF.push(module, '177abJ7IQBIRJVACrHF9+Nu', 'ListView');
// scripts/common/ListView.ts

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
exports.ListView = void 0;
var TabItem_1 = require("../common/TabItem");
var APIDefine_1 = require("../src/app/APIDefine");
var connect_1 = require("../src/app/connect");
var wsgw_1 = require("../src/app/wsgw");
var SliceApp_1 = require("../src/features/SliceApp");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ListView = /** @class */ (function (_super) {
    __extends(ListView, _super);
    function ListView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.api = APIDefine_1.apis.getBalances;
        _this.scrollview = null;
        _this.content = null;
        _this.item = null;
        _this.isPage = false;
        _this.offset = 0;
        _this.needToFetch = true;
        _this.limit = 30;
        return _this;
    }
    ListView.prototype.onLoad = function () {
        var _this = this;
        this.scrollview.node.on('bounce-bottom', function () { return _this.fetch(); });
    };
    ListView.prototype.onDisable = function () {
        this.content.removeAllChildren();
        this.content.removeAllChildren();
    };
    ListView.prototype.onEnable = function () {
        this.offset = 0;
        this.limit = 0;
        this.needToFetch = true;
        this.fetch();
    };
    ListView.prototype.fetch = function () {
        var _this = this;
        if (!this.needToFetch)
            return;
        wsgw_1.default.userRequest(APIDefine_1.default[this.api], { offset: this.offset, limit: this.limit }, function (e) {
            if (e.items.length < _this.limit)
                _this.needToFetch = false;
            if (_this.isPage) {
                _this.offset += 1;
            }
            else {
                _this.offset += _this.limit;
            }
            _this.updateItems(e);
        }, console.error);
    };
    ListView.prototype.updateItems = function (data) {
        var _this = this;
        data.forEach(function (item, index) {
            _this.addItem(item, index);
        });
    };
    ListView.prototype.addItem = function (data, index) {
        var newItem = cc.instantiate(this.item);
        this.content.addChild(newItem);
        newItem.getComponent(TabItem_1.default).init(data, index);
    };
    __decorate([
        property(String)
    ], ListView.prototype, "api", void 0);
    __decorate([
        property(cc.ScrollView)
    ], ListView.prototype, "scrollview", void 0);
    __decorate([
        property(cc.Node)
    ], ListView.prototype, "content", void 0);
    __decorate([
        property(cc.Node)
    ], ListView.prototype, "item", void 0);
    __decorate([
        property(Boolean)
    ], ListView.prototype, "isPage", void 0);
    return ListView;
}(cc.Component));
exports.ListView = ListView;
var mapStateToProps = function (state) { return ({}); };
var mapDispatchToAction = function (dispatch) { return ({
    pushPage: function (payload) {
        return dispatch(SliceApp_1.pushPage(payload));
    },
    popPage: function () { return dispatch(SliceApp_1.popPage()); },
    pushPopup: function (payload) { return dispatch(SliceApp_1.pushPopup(payload)); },
}); };
exports.default = connect_1.default(mapStateToProps, mapDispatchToAction)(ListView);

cc._RF.pop();