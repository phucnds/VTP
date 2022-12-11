"use strict";
cc._RF.push(module, 'dbc77ws+sxPlY9zPANdJYTf', 'ObjectMgr');
// scripts/utils/ObjectMgr.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ObjectMgr = /** @class */ (function (_super) {
    __extends(ObjectMgr, _super);
    function ObjectMgr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ObjectMgr.prototype.load = function (prefab, poolSize) {
        // for (let i = 0; i < poolSize; i++) {
        //     const node = cc.instantiate(prefab);
        //     // node.getComponent(GameObject).load();
        //     node.active = false;
        //     this.node.addChild(node);
        // }
        // this.hide();
    };
    ObjectMgr.prototype.init = function () {
        this.hide();
    };
    ObjectMgr.prototype.hide = function () {
        for (var _i = 0, _a = this.node.children; _i < _a.length; _i++) {
            var item = _a[_i];
            item.active = false;
        }
    };
    ObjectMgr.prototype.spawn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    };
    ObjectMgr.prototype.getAvailable = function () {
        for (var _i = 0, _a = this.node.children; _i < _a.length; _i++) {
            var item = _a[_i];
            if (!item.active) {
                return item;
            }
        }
        return null;
    };
    ObjectMgr = __decorate([
        ccclass
    ], ObjectMgr);
    return ObjectMgr;
}(cc.Component));
exports.default = ObjectMgr;

cc._RF.pop();