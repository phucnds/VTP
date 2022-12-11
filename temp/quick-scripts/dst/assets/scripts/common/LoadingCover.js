
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/common/LoadingCover.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5efa34rLMBL6Z7zYO5/5lDg', 'LoadingCover');
// scripts/common/LoadingCover.ts

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
var SingletonNode_1 = require("../utils/SingletonNode");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LoadingCover = /** @class */ (function (_super) {
    __extends(LoadingCover, _super);
    function LoadingCover() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Container = null;
        return _this;
    }
    LoadingCover.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.hide();
    };
    LoadingCover.prototype.show = function () {
        this.Container.active = true;
    };
    LoadingCover.prototype.hide = function () {
        this.Container.active = false;
    };
    __decorate([
        property(cc.Node)
    ], LoadingCover.prototype, "Container", void 0);
    LoadingCover = __decorate([
        ccclass
    ], LoadingCover);
    return LoadingCover;
}(SingletonNode_1.default()));
exports.default = LoadingCover;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NvbW1vbi9Mb2FkaW5nQ292ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0RBQW1EO0FBRTdDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBDLGdDQUE2QjtJQUF2RTtRQUFBLHFFQWdCQztRQWQ4QixlQUFTLEdBQVksSUFBSSxDQUFDOztJQWN6RCxDQUFDO0lBWkcsNkJBQU0sR0FBTjtRQUNJLGlCQUFNLE1BQU0sV0FBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCwyQkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ2pDLENBQUM7SUFFRCwyQkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLENBQUM7SUFia0I7UUFBbEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQW1DO0lBRnBDLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0FnQmhDO0lBQUQsbUJBQUM7Q0FoQkQsQUFnQkMsQ0FoQnlDLHVCQUFhLEVBQWdCLEdBZ0J0RTtrQkFoQm9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2luZ2xldG9uTm9kZSBmcm9tIFwiLi4vdXRpbHMvU2luZ2xldG9uTm9kZVwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZGluZ0NvdmVyIGV4dGVuZHMgU2luZ2xldG9uTm9kZTxMb2FkaW5nQ292ZXI+KClcbntcbiAgICBAcHJvcGVydHkoY2MuTm9kZSkgcHJpdmF0ZSBDb250YWluZXI6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgb25Mb2FkKCl7XG4gICAgICAgIHN1cGVyLm9uTG9hZCgpO1xuICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG5cbiAgICBzaG93KCl7XG4gICAgICAgIHRoaXMuQ29udGFpbmVyLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgaGlkZSgpe1xuICAgICAgICB0aGlzLkNvbnRhaW5lci5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG59XG4iXX0=