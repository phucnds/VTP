
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/common/Events.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ea18dqOuq1Cx7O+U51FB9JD', 'Events');
// scripts/common/Events.ts

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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var SingletonNode_1 = require("../utils/SingletonNode");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Events.registerEvent = function (name, callback) {
        this.Instance.node.on(name, callback);
    };
    Events.on = function (name, callback) {
        this.Instance.node.on(name, callback);
    };
    Events.off = function (name, callback) {
        this.Instance.node.off(name, callback);
    };
    Events.emit = function (name) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        (_a = this.Instance.node).emit.apply(_a, __spreadArrays([name], args));
    };
    Events.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    Events.EventLanguageChanged = 'EventLanguageChanged';
    Events.EventUpdateRank = 'EventUpdateRank';
    Events.EventUpdateState = 'EventUpdateRank';
    Events = __decorate([
        ccclass
    ], Events);
    return Events;
}(SingletonNode_1.default()));
exports.default = Events;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NvbW1vbi9FdmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdEQUFtRDtBQUU3QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFvQywwQkFBdUI7SUFBM0Q7O0lBdUJBLENBQUM7SUFqQlUsb0JBQWEsR0FBcEIsVUFBcUIsSUFBWSxFQUFFLFFBQWtCO1FBQ2pELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUNNLFNBQUUsR0FBVCxVQUFVLElBQVksRUFBRSxRQUFrQjtRQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFDTSxVQUFHLEdBQVYsVUFBVyxJQUFZLEVBQUUsUUFBa0I7UUFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRU0sV0FBSSxHQUFYLFVBQVksSUFBWTs7UUFBRSxjQUFPO2FBQVAsVUFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztZQUFQLDZCQUFPOztRQUM3QixDQUFBLEtBQUEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUEsQ0FBQyxJQUFJLDJCQUFDLElBQUksR0FBSyxJQUFJLEdBQUU7SUFDM0MsQ0FBQztJQUNELHVCQUFNLEdBQU47UUFFSSxpQkFBTSxNQUFNLFdBQUUsQ0FBQztJQUNuQixDQUFDO0lBcEJNLDJCQUFvQixHQUFXLHNCQUFzQixDQUFDO0lBQ3RELHNCQUFlLEdBQVcsaUJBQWlCLENBQUM7SUFDNUMsdUJBQWdCLEdBQVcsaUJBQWlCLENBQUM7SUFKbkMsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQXVCMUI7SUFBRCxhQUFDO0NBdkJELEFBdUJDLENBdkJtQyx1QkFBYSxFQUFVLEdBdUIxRDtrQkF2Qm9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2luZ2xldG9uTm9kZSBmcm9tIFwiLi4vdXRpbHMvU2luZ2xldG9uTm9kZVwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRzIGV4dGVuZHMgU2luZ2xldG9uTm9kZTxFdmVudHM+KClcbntcbiAgICBzdGF0aWMgRXZlbnRMYW5ndWFnZUNoYW5nZWQ6IHN0cmluZyA9ICdFdmVudExhbmd1YWdlQ2hhbmdlZCc7XG4gICAgc3RhdGljIEV2ZW50VXBkYXRlUmFuazogc3RyaW5nID0gJ0V2ZW50VXBkYXRlUmFuayc7XG4gICAgc3RhdGljIEV2ZW50VXBkYXRlU3RhdGU6IHN0cmluZyA9ICdFdmVudFVwZGF0ZVJhbmsnO1xuXG4gICAgc3RhdGljIHJlZ2lzdGVyRXZlbnQobmFtZTogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24pe1xuICAgICAgICB0aGlzLkluc3RhbmNlLm5vZGUub24obmFtZSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBzdGF0aWMgb24obmFtZTogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24pe1xuICAgICAgICB0aGlzLkluc3RhbmNlLm5vZGUub24obmFtZSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBzdGF0aWMgb2ZmKG5hbWU6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uKXtcbiAgICAgICAgdGhpcy5JbnN0YW5jZS5ub2RlLm9mZihuYW1lLCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgc3RhdGljIGVtaXQobmFtZTogc3RyaW5nLCAuLi5hcmdzKXtcbiAgICAgICAgdGhpcy5JbnN0YW5jZS5ub2RlLmVtaXQobmFtZSwgLi4uYXJncyk7XG4gICAgfVxuICAgIG9uTG9hZCgpXG4gICAge1xuICAgICAgICBzdXBlci5vbkxvYWQoKTtcbiAgICB9XG59Il19