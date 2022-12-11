
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/src/game/GiftsMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cd4c8slb21EnKUYnwmuT0DR', 'GiftsMgr');
// scripts/src/game/GiftsMgr.ts

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
var SingletonNode_1 = require("../../utils/SingletonNode");
var utils_1 = require("../common/utils");
var GameMgr_1 = require("./GameMgr");
var Gift_1 = require("./Gift");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GiftMgr = /** @class */ (function (_super) {
    __extends(GiftMgr, _super);
    function GiftMgr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.template = null;
        _this.topView = null;
        _this.indicator = null;
        _this.numbOfGifts = 0;
        return _this;
    }
    GiftMgr.prototype.init = function () {
        // this.topView.removeAllChildren();
        // this.node.removeAllChildren();
        // for (let i = 0; i < this.numbOfGifts; i++) {
        //     const newGift = cc.instantiate(this.template);
        //     newGift.getComponent(PathFollowObject).Delay = i * GameDefine.GIFT_GAP;
        //     this.node.addChild(newGift);
        //     newGift.active = true;
        // }
    };
    GiftMgr.prototype.roll = function () {
        if (GameMgr_1.default.Instance.getGameState() !== GameMgr_1.GameStates.PLAYING)
            return;
        GameMgr_1.default.Instance.setGameState(GameMgr_1.GameStates.ROLLING);
    };
    GiftMgr.prototype.choose = function () {
        var _this = this;
        if (GameMgr_1.default.Instance.getGameState() !== GameMgr_1.GameStates.ROLLING)
            return;
        var chosenOne = null;
        var minDistance = 999999;
        this.node.children.forEach(function (gift) {
            var giftPos = utils_1.getWorldPosition(gift);
            var indicatorPos = utils_1.getWorldPosition(_this.indicator);
            if (giftPos.y < indicatorPos.y) {
                return;
            }
            var distance = giftPos.sub(indicatorPos).mag();
            if (distance < minDistance) {
                minDistance = distance;
                chosenOne = gift;
            }
        });
        if (chosenOne) {
            chosenOne.getComponent(Gift_1.default).pickSelf();
        }
    };
    __decorate([
        property(cc.Node)
    ], GiftMgr.prototype, "template", void 0);
    __decorate([
        property(cc.Node)
    ], GiftMgr.prototype, "topView", void 0);
    __decorate([
        property(cc.Node)
    ], GiftMgr.prototype, "indicator", void 0);
    __decorate([
        property(Number)
    ], GiftMgr.prototype, "numbOfGifts", void 0);
    GiftMgr = __decorate([
        ccclass
    ], GiftMgr);
    return GiftMgr;
}(SingletonNode_1.default()));
exports.default = GiftMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3NyYy9nYW1lL0dpZnRzTWdyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLDJEQUFzRDtBQUV0RCx5Q0FBbUQ7QUFFbkQscUNBQWdEO0FBQ2hELCtCQUEwQjtBQUVwQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFxQywyQkFBd0I7SUFBN0Q7UUFBQSxxRUFpREM7UUEvQ0csY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsaUJBQVcsR0FBVyxDQUFDLENBQUM7O0lBeUM1QixDQUFDO0lBdkNHLHNCQUFJLEdBQUo7UUFDSSxvQ0FBb0M7UUFDcEMsaUNBQWlDO1FBQ2pDLCtDQUErQztRQUMvQyxxREFBcUQ7UUFDckQsOEVBQThFO1FBQzlFLG1DQUFtQztRQUNuQyw2QkFBNkI7UUFDN0IsSUFBSTtJQUNSLENBQUM7SUFFRCxzQkFBSSxHQUFKO1FBQ0ksSUFBSSxpQkFBTyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsS0FBSyxvQkFBVSxDQUFDLE9BQU87WUFBRSxPQUFPO1FBQ25FLGlCQUFPLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxvQkFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCx3QkFBTSxHQUFOO1FBQUEsaUJBc0JDO1FBckJHLElBQUksaUJBQU8sQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLEtBQUssb0JBQVUsQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUNuRSxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxXQUFXLEdBQUcsTUFBTSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7WUFDNUIsSUFBTSxPQUFPLEdBQUcsd0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkMsSUFBTSxZQUFZLEdBQUcsd0JBQWdCLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBRXRELElBQUksT0FBTyxDQUFDLENBQUMsR0FBRyxZQUFZLENBQUMsQ0FBQyxFQUFFO2dCQUM1QixPQUFPO2FBQ1Y7WUFFRCxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ2pELElBQUksUUFBUSxHQUFHLFdBQVcsRUFBRTtnQkFDeEIsV0FBVyxHQUFHLFFBQVEsQ0FBQztnQkFDdkIsU0FBUyxHQUFHLElBQUksQ0FBQzthQUNwQjtRQUNMLENBQUMsQ0FBQyxDQUFBO1FBRUYsSUFBSSxTQUFTLEVBQUU7WUFDWCxTQUFTLENBQUMsWUFBWSxDQUFDLGNBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQzNDO0lBQ0wsQ0FBQztJQTlDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDUTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxNQUFNLENBQUM7Z0RBQ087SUFSUCxPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBaUQzQjtJQUFELGNBQUM7Q0FqREQsQUFpREMsQ0FqRG9DLHVCQUFhLEVBQVcsR0FpRDVEO2tCQWpEb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgU2luZ2xldG9uTm9kZSBmcm9tIFwiLi4vLi4vdXRpbHMvU2luZ2xldG9uTm9kZVwiO1xuaW1wb3J0IEdhbWVEZWZpbmUgZnJvbSBcIi4uL2NvbW1vbi9HYW1lRGVmaW5lXCI7XG5pbXBvcnQgeyBnZXRXb3JsZFBvc2l0aW9uIH0gZnJvbSBcIi4uL2NvbW1vbi91dGlsc1wiO1xuaW1wb3J0IFBhdGhGb2xsb3dPYmplY3QgZnJvbSBcIi4uL1BhdGgvUGF0aEZvbGxvd09iamVjdFwiO1xuaW1wb3J0IEdhbWVNZ3IsIHsgR2FtZVN0YXRlcyB9IGZyb20gXCIuL0dhbWVNZ3JcIjtcbmltcG9ydCBHaWZ0IGZyb20gXCIuL0dpZnRcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdpZnRNZ3IgZXh0ZW5kcyBTaW5nbGV0b25Ob2RlPEdpZnRNZ3I+KCkge1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHRlbXBsYXRlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB0b3BWaWV3OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBpbmRpY2F0b3I6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShOdW1iZXIpXG4gICAgbnVtYk9mR2lmdHM6IE51bWJlciA9IDA7XG5cbiAgICBpbml0KCkge1xuICAgICAgICAvLyB0aGlzLnRvcFZpZXcucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgLy8gdGhpcy5ub2RlLnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1iT2ZHaWZ0czsgaSsrKSB7XG4gICAgICAgIC8vICAgICBjb25zdCBuZXdHaWZ0ID0gY2MuaW5zdGFudGlhdGUodGhpcy50ZW1wbGF0ZSk7XG4gICAgICAgIC8vICAgICBuZXdHaWZ0LmdldENvbXBvbmVudChQYXRoRm9sbG93T2JqZWN0KS5EZWxheSA9IGkgKiBHYW1lRGVmaW5lLkdJRlRfR0FQO1xuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5ld0dpZnQpO1xuICAgICAgICAvLyAgICAgbmV3R2lmdC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgcm9sbCgpIHtcbiAgICAgICAgaWYgKEdhbWVNZ3IuSW5zdGFuY2UuZ2V0R2FtZVN0YXRlKCkgIT09IEdhbWVTdGF0ZXMuUExBWUlORykgcmV0dXJuO1xuICAgICAgICBHYW1lTWdyLkluc3RhbmNlLnNldEdhbWVTdGF0ZShHYW1lU3RhdGVzLlJPTExJTkcpO1xuICAgIH1cblxuICAgIGNob29zZSgpIHtcbiAgICAgICAgaWYgKEdhbWVNZ3IuSW5zdGFuY2UuZ2V0R2FtZVN0YXRlKCkgIT09IEdhbWVTdGF0ZXMuUk9MTElORykgcmV0dXJuO1xuICAgICAgICBsZXQgY2hvc2VuT25lID0gbnVsbDtcbiAgICAgICAgbGV0IG1pbkRpc3RhbmNlID0gOTk5OTk5O1xuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW4uZm9yRWFjaCgoZ2lmdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZ2lmdFBvcyA9IGdldFdvcmxkUG9zaXRpb24oZ2lmdCk7XG4gICAgICAgICAgICBjb25zdCBpbmRpY2F0b3JQb3MgPSBnZXRXb3JsZFBvc2l0aW9uKHRoaXMuaW5kaWNhdG9yKTtcblxuICAgICAgICAgICAgaWYgKGdpZnRQb3MueSA8IGluZGljYXRvclBvcy55KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IGdpZnRQb3Muc3ViKGluZGljYXRvclBvcykubWFnKCk7XG4gICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCBtaW5EaXN0YW5jZSkge1xuICAgICAgICAgICAgICAgIG1pbkRpc3RhbmNlID0gZGlzdGFuY2U7XG4gICAgICAgICAgICAgICAgY2hvc2VuT25lID0gZ2lmdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoY2hvc2VuT25lKSB7XG4gICAgICAgICAgICBjaG9zZW5PbmUuZ2V0Q29tcG9uZW50KEdpZnQpLnBpY2tTZWxmKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=