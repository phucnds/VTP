"use strict";
cc._RF.push(module, '15cf6+twpFGaJgsquQOINHQ', 'CompColider');
// scripts/common/CompColider.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode;
var CompColider = /** @class */ (function (_super) {
    __extends(CompColider, _super);
    function CompColider() {
        // LIFE-CYCLE CALLBACKS:
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.exceptChildernDeactive = [];
        return _this;
        // onCollisionStay()
        // {
        //     console.log("stayyy")
        // }
        // update (dt) {}
    }
    CompColider.prototype.onCollisionEnter = function (other) {
        if (other.node.name != "main collider")
            return;
        var _loop_1 = function (child) {
            if (this_1.exceptChildernDeactive.find(function (e) { return e.name == child.name; }))
                return "continue";
            child.active = true;
        };
        var this_1 = this;
        for (var _i = 0, _a = this.node.children; _i < _a.length; _i++) {
            var child = _a[_i];
            _loop_1(child);
        }
    };
    CompColider.prototype.onCollisionExit = function (other) {
        if (other.node.name != "main collider")
            return;
        for (var _i = 0, _a = this.node.children; _i < _a.length; _i++) {
            var child = _a[_i];
            child.active = false;
        }
    };
    CompColider.prototype.updateBoxSize = function () {
        var boxColider = this.getComponent(cc.BoxCollider);
        if (boxColider) {
            var height = this.node.getContentSize().height;
            boxColider.size.height = height;
            boxColider.offset.y = -height / 2;
        }
    };
    __decorate([
        property(cc.Node)
    ], CompColider.prototype, "exceptChildernDeactive", void 0);
    CompColider = __decorate([
        ccclass,
        executeInEditMode
    ], CompColider);
    return CompColider;
}(cc.Component));
exports.default = CompColider;

cc._RF.pop();