
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/common/TopUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NvbW1vbi9Ub3BVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsd0RBQW1EO0FBRTdDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDLElBQVksVUFHWDtBQUhELFdBQVksVUFBVTtJQUNsQix1Q0FBeUIsQ0FBQTtJQUN6QixtREFBcUMsQ0FBQTtBQUN6QyxDQUFDLEVBSFcsVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUFHckI7QUFHRDtJQUFtQyx5QkFBc0I7SUFBekQ7UUFBQSxxRUF3QkM7UUF0QmdDLGtCQUFZLEdBQXFCLEVBQUUsQ0FBQzs7SUFzQnJFLENBQUM7SUFwQkcsc0JBQU0sR0FBTjtRQUNJLGlCQUFNLE1BQU0sV0FBRSxDQUFDO1FBQ2YsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQy9DLElBQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hELEVBQUUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDbEQ7SUFDTCxDQUFDO0lBRUQsb0JBQUksR0FBSixVQUFLLEVBQWMsRUFBRSxNQUFhLEVBQUUsSUFBWTtRQUEzQix1QkFBQSxFQUFBLGFBQWE7UUFBRSxxQkFBQSxFQUFBLFlBQVk7UUFDNUMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtJQUM3QixDQUFDO0lBRUQsdUJBQU8sR0FBUDtRQUNJLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUN4QztJQUNMLENBQUM7SUFyQm9CO1FBQXBCLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOytDQUE2QztJQUZoRCxLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBd0J6QjtJQUFELFlBQUM7Q0F4QkQsQUF3QkMsQ0F4QmtDLHVCQUFhLEVBQVMsR0F3QnhEO2tCQXhCb0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgU2luZ2xldG9uTm9kZSBmcm9tIFwiLi4vdXRpbHMvU2luZ2xldG9uTm9kZVwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5leHBvcnQgZW51bSBFQXBwVG9wVUlzIHtcbiAgICBDb21wSGVhZGVyID0gJ0NvbXBIZWFkZXInLFxuICAgIENvbXBIZWFkZXJTaW1wbGUgPSAnQ29tcEhlYWRlclNpbXBsZScsXG59XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3BVSSBleHRlbmRzIFNpbmdsZXRvbk5vZGU8VG9wVUk+KCkge1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYikgcHJpdmF0ZSBUb3BVSVByZWZhYnM6IEFycmF5PGNjLlByZWZhYj4gPSBbXTtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgc3VwZXIub25Mb2FkKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5Ub3BVSVByZWZhYnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IFVJID0gY2MuaW5zdGFudGlhdGUodGhpcy5Ub3BVSVByZWZhYnNbaV0pO1xuICAgICAgICAgICAgVUkuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLlRvcFVJUHJlZmFic1tpXSAmJiB0aGlzLm5vZGUuYWRkQ2hpbGQoVUkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvdyhVSTogRUFwcFRvcFVJcywgYWN0aXZlID0gdHJ1ZSwgb25seSA9IGZhbHNlKSB7XG4gICAgICAgIG9ubHkgJiYgdGhpcy5oaWRlQWxsKCk7XG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShVSSkuYWN0aXZlID0gYWN0aXZlO1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gYWN0aXZlXG4gICAgfVxuXG4gICAgaGlkZUFsbCgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5jaGlsZHJlbltpXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19