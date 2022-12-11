"use strict";
cc._RF.push(module, '8947eZLrGNEs6xf1KtLkd9+', 'TopUI');
// scripts/common/TopUI.ts

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
exports.EAppTopUIs = void 0;
var SingletonNode_1 = require("../utils/SingletonNode");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var EAppTopUIs;
(function (EAppTopUIs) {
    EAppTopUIs["CompHeader"] = "CompHeader";
    EAppTopUIs["CompHeaderSimple"] = "CompHeaderSimple";
})(EAppTopUIs = exports.EAppTopUIs || (exports.EAppTopUIs = {}));
var TopUI = /** @class */ (function (_super) {
    __extends(TopUI, _super);
    function TopUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.TopUIPrefabs = [];
        return _this;
    }
    TopUI.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        for (var i = 0; i < this.TopUIPrefabs.length; i++) {
            var UI = cc.instantiate(this.TopUIPrefabs[i]);
            UI.active = false;
            this.TopUIPrefabs[i] && this.node.addChild(UI);
        }
    };
    TopUI.prototype.show = function (UI, active, only) {
        if (active === void 0) { active = true; }
        if (only === void 0) { only = false; }
        only && this.hideAll();
        this.node.getChildByName(UI).active = active;
        this.node.active = active;
    };
    TopUI.prototype.hideAll = function () {
        for (var i = 0; i < this.node.children.length; i++) {
            this.node.children[i].active = false;
        }
    };
    __decorate([
        property(cc.Prefab)
    ], TopUI.prototype, "TopUIPrefabs", void 0);
    TopUI = __decorate([
        ccclass
    ], TopUI);
    return TopUI;
}(SingletonNode_1.default()));
exports.default = TopUI;

cc._RF.pop();