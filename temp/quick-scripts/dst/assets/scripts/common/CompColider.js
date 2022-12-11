
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/common/CompColider.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NvbW1vbi9Db21wQ29saWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQTJDLEVBQUUsQ0FBQyxVQUFVLEVBQXRELE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLGlCQUFpQix1QkFBa0IsQ0FBQztBQUkvRDtJQUF5QywrQkFBWTtJQUFyRDtRQUNJLHdCQUF3QjtRQUQ1QixxRUErQkM7UUE1QnNCLDRCQUFzQixHQUFjLEVBQUUsQ0FBQzs7UUF1QjFELG9CQUFvQjtRQUNwQixJQUFJO1FBQ0osNEJBQTRCO1FBQzVCLElBQUk7UUFDSixpQkFBaUI7SUFDckIsQ0FBQztJQTFCRyxzQ0FBZ0IsR0FBaEIsVUFBaUIsS0FBcUI7UUFDbEMsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxlQUFlO1lBQUUsT0FBTTtnQ0FDckMsS0FBSztZQUNWLElBQUksT0FBSyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxJQUFJLEVBQXBCLENBQW9CLENBQUM7a0NBQVc7WUFDMUUsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7OztRQUZ2QixLQUFrQixVQUFrQixFQUFsQixLQUFBLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFsQixjQUFrQixFQUFsQixJQUFrQjtZQUEvQixJQUFJLEtBQUssU0FBQTtvQkFBTCxLQUFLO1NBR2I7SUFDTCxDQUFDO0lBQ0QscUNBQWUsR0FBZixVQUFnQixLQUFLO1FBQ2pCLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksZUFBZTtZQUFFLE9BQU07UUFDOUMsS0FBa0IsVUFBa0IsRUFBbEIsS0FBQSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBbEIsY0FBa0IsRUFBbEIsSUFBa0IsRUFBRTtZQUFqQyxJQUFJLEtBQUssU0FBQTtZQUNWLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1NBQ3ZCO0lBQ0wsQ0FBQztJQUNELG1DQUFhLEdBQWI7UUFDSSxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUNsRCxJQUFJLFVBQVUsRUFBRTtZQUNaLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxDQUFBO1lBQzlDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUNoQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7U0FDckM7SUFDTCxDQUFDO0lBdEJrQjtRQUFsQixRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrREFBd0M7SUFIekMsV0FBVztRQUYvQixPQUFPO1FBQ1AsaUJBQWlCO09BQ0csV0FBVyxDQStCL0I7SUFBRCxrQkFBQztDQS9CRCxBQStCQyxDQS9Cd0MsRUFBRSxDQUFDLFNBQVMsR0ErQnBEO2tCQS9Cb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCBleGVjdXRlSW5FZGl0TW9kZSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbkBleGVjdXRlSW5FZGl0TW9kZVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcENvbGlkZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpIGV4Y2VwdENoaWxkZXJuRGVhY3RpdmU6IGNjLk5vZGVbXSA9IFtdO1xuXG4gICAgb25Db2xsaXNpb25FbnRlcihvdGhlcjogY2MuQm94Q29sbGlkZXIpIHtcbiAgICAgICAgaWYgKG90aGVyLm5vZGUubmFtZSAhPSBcIm1haW4gY29sbGlkZXJcIikgcmV0dXJuXG4gICAgICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMubm9kZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgaWYgKHRoaXMuZXhjZXB0Q2hpbGRlcm5EZWFjdGl2ZS5maW5kKGUgPT4gZS5uYW1lID09IGNoaWxkLm5hbWUpKSBjb250aW51ZTtcbiAgICAgICAgICAgIGNoaWxkLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgfVxuICAgIH1cbiAgICBvbkNvbGxpc2lvbkV4aXQob3RoZXIpIHtcbiAgICAgICAgaWYgKG90aGVyLm5vZGUubmFtZSAhPSBcIm1haW4gY29sbGlkZXJcIikgcmV0dXJuXG4gICAgICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMubm9kZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgY2hpbGQuYWN0aXZlID0gZmFsc2VcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGVCb3hTaXplKCkge1xuICAgICAgICBsZXQgYm94Q29saWRlciA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkJveENvbGxpZGVyKVxuICAgICAgICBpZiAoYm94Q29saWRlcikge1xuICAgICAgICAgICAgbGV0IGhlaWdodCA9IHRoaXMubm9kZS5nZXRDb250ZW50U2l6ZSgpLmhlaWdodFxuICAgICAgICAgICAgYm94Q29saWRlci5zaXplLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgICAgIGJveENvbGlkZXIub2Zmc2V0LnkgPSAtaGVpZ2h0IC8gMjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBvbkNvbGxpc2lvblN0YXkoKVxuICAgIC8vIHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJzdGF5eXlcIilcbiAgICAvLyB9XG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==