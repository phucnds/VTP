"use strict";
cc._RF.push(module, '58eef/hk/pOpqsqF5e2CWcg', 'Path');
// scripts/src/Path/Path.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Path = /** @class */ (function (_super) {
    __extends(Path, _super);
    function Path() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.reverse = false;
        return _this;
    }
    Path.prototype.getPrevious = function (point) {
        var previousIndex = point.getSiblingIndex() - 1;
        return this.node.children[previousIndex >= 0 ? previousIndex : this.node.childrenCount - 1];
    };
    Path.prototype.getPreviousPoint = function (point) {
        if (!this.reverse) {
            return this.getPrevious(point);
        }
        else {
            return this.getNext(point);
        }
    };
    Path.prototype.getNext = function (point) {
        var nextIndex = point.getSiblingIndex() + 1;
        return this.node.children[nextIndex < this.node.childrenCount ? nextIndex : 0];
    };
    Path.prototype.getNextPoint = function (point) {
        if (this.reverse) {
            return this.getPrevious(point);
        }
        else {
            return this.getNext(point);
        }
    };
    Path.prototype.getStart = function () {
        return this.node.children[0];
    };
    Path.prototype.getEnd = function () {
        return this.node.children[this.node.childrenCount - 1];
    };
    Path.prototype.getStartPoint = function () {
        if (this.reverse) {
            return this.getEnd();
        }
        else {
            return this.getStart();
        }
    };
    Path.prototype.getEndPoint = function () {
        if (!this.reverse) {
            return this.getEnd();
        }
        else {
            return this.getStart();
        }
    };
    __decorate([
        property(cc.Boolean)
    ], Path.prototype, "reverse", void 0);
    Path = __decorate([
        ccclass
    ], Path);
    return Path;
}(cc.Component));
exports.default = Path;

cc._RF.pop();