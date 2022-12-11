
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/common/Tabs.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8091634kMhESaKWxxyu0+eA', 'Tabs');
// scripts/common/Tabs.ts

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
exports.Tabs = void 0;
var connect_1 = require("../src/app/connect");
var SliceApp_1 = require("../src/features/SliceApp");
var Helper_1 = require("../utils/Helper");
var TabButton_1 = require("./TabButton");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Tabs = /** @class */ (function (_super) {
    __extends(Tabs, _super);
    function Tabs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.TabButtons = null;
        _this.Tabs = null;
        return _this;
    }
    Tabs.prototype.onLoad = function () {
        var _this = this;
        this.TabButtons.children.forEach(function (btn, index) {
            Helper_1.default.registerButtonEvent(btn, function () {
                _this.onTabClick(index);
            });
        });
    };
    Tabs.prototype.onEnable = function () {
        this.onTabClick(0);
    };
    Tabs.prototype.onTabClick = function (indexToActive) {
        this.Tabs.children.forEach(function (tab, index) {
            if (index === indexToActive) {
                tab.active = true;
            }
            else {
                tab.active = false;
            }
        });
        this.TabButtons.children.forEach(function (btn, index) {
            if (index === indexToActive) {
                btn.getComponent(TabButton_1.default).setActive(true);
            }
            else {
                btn.getComponent(TabButton_1.default).setActive(false);
            }
        });
    };
    __decorate([
        property(cc.Node)
    ], Tabs.prototype, "TabButtons", void 0);
    __decorate([
        property(cc.Node)
    ], Tabs.prototype, "Tabs", void 0);
    return Tabs;
}(cc.Component));
exports.Tabs = Tabs;
var mapStateToProps = function (state) { return ({}); };
var mapDispatchToAction = function (dispatch) { return ({
    pushPage: function (payload) {
        return dispatch(SliceApp_1.pushPage(payload));
    },
    popPage: function () { return dispatch(SliceApp_1.popPage()); },
    pushPopup: function (payload) { return dispatch(SliceApp_1.pushPopup(payload)); },
}); };
exports.default = connect_1.default(mapStateToProps, mapDispatchToAction)(Tabs);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NvbW1vbi9UYWJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlsRiw4Q0FBeUM7QUFHekMscURBQTBIO0FBQzFILDBDQUFxQztBQUNyQyx5Q0FBb0M7QUFHOUIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUM7SUFBMEIsd0JBQVk7SUFBdEM7UUFBQSxxRUFxQ0M7UUFoQ1UsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsVUFBSSxHQUFZLElBQUksQ0FBQzs7SUE4QmhDLENBQUM7SUE1QkcscUJBQU0sR0FBTjtRQUFBLGlCQU1DO1FBTEcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRyxFQUFFLEtBQUs7WUFDeEMsZ0JBQU0sQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLEVBQUU7Z0JBQzVCLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDM0IsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFUyx1QkFBUSxHQUFsQjtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVELHlCQUFVLEdBQVYsVUFBVyxhQUFhO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUcsRUFBRSxLQUFLO1lBQ2xDLElBQUksS0FBSyxLQUFLLGFBQWEsRUFBRTtnQkFDekIsR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7YUFDckI7aUJBQU07Z0JBQ0gsR0FBRyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7YUFDdEI7UUFDTCxDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUcsRUFBRSxLQUFLO1lBQ3hDLElBQUksS0FBSyxLQUFLLGFBQWEsRUFBRTtnQkFDekIsR0FBRyxDQUFDLFlBQVksQ0FBQyxtQkFBUyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQy9DO2lCQUFNO2dCQUNILEdBQUcsQ0FBQyxZQUFZLENBQUMsbUJBQVMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNoRDtRQUNMLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQS9CRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNnQjtJQUVsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NDQUNVO0lBOEJoQyxXQUFDO0NBckNELEFBcUNDLENBckN5QixFQUFFLENBQUMsU0FBUyxHQXFDckM7QUFyQ1ksb0JBQUk7QUFzQ2pCLElBQU0sZUFBZSxHQUFHLFVBQUMsS0FBZ0IsSUFBSyxPQUFBLENBQUMsRUFDOUMsQ0FBQyxFQUQ0QyxDQUM1QyxDQUFBO0FBQ0YsSUFBTSxtQkFBbUIsR0FBRyxVQUFDLFFBQXFCLElBQUssT0FBQSxDQUFDO0lBQ3BELFFBQVEsRUFBRSxVQUFDLE9BQW9DO1FBQzNDLE9BQUEsUUFBUSxDQUFDLG1CQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFBM0IsQ0FBMkI7SUFDL0IsT0FBTyxFQUFFLGNBQU0sT0FBQSxRQUFRLENBQUMsa0JBQU8sRUFBRSxDQUFDLEVBQW5CLENBQW1CO0lBQ2xDLFNBQVMsRUFBRSxVQUFDLE9BQW1CLElBQUssT0FBQSxRQUFRLENBQUMsb0JBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUE1QixDQUE0QjtDQUNuRSxDQUFDLEVBTHFELENBS3JELENBQUE7QUFDRixrQkFBZSxpQkFBTyxDQUFDLGVBQWUsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBUYWJJdGVtIGZyb20gJy4uL2NvbW1vbi9UYWJJdGVtJztcbmltcG9ydCBBUElEZWZpbmUsIHsgYXBpcyB9IGZyb20gJy4uL3NyYy9hcHAvQVBJRGVmaW5lJztcbmltcG9ydCBjb25uZWN0IGZyb20gXCIuLi9zcmMvYXBwL2Nvbm5lY3RcIjtcbmltcG9ydCB7IEFwcERpc3BhdGNoLCBSb290U3RhdGUgfSBmcm9tIFwiLi4vc3JjL2FwcC9zdG9yZVwiO1xuaW1wb3J0IHdzZ3cgZnJvbSAnLi4vc3JjL2FwcC93c2d3JztcbmltcG9ydCB7IEVBcHBQYWdlcywgRUFwcFBvcHVwcywgSVBhZ2VXaXRoRWZmZWN0LCBwb3BQYWdlLCBwb3BQb3B1cCwgcHVzaFBhZ2UsIHB1c2hQb3B1cCB9IGZyb20gXCIuLi9zcmMvZmVhdHVyZXMvU2xpY2VBcHBcIjtcbmltcG9ydCBIZWxwZXIgZnJvbSAnLi4vdXRpbHMvSGVscGVyJztcbmltcG9ydCBUYWJCdXR0b24gZnJvbSAnLi9UYWJCdXR0b24nO1xuXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5leHBvcnQgY2xhc3MgVGFicyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgYWN0aW9uczogYW55XG4gICAgcHJvcHM6IGFueVxuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHVibGljIFRhYkJ1dHRvbnM6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHB1YmxpYyBUYWJzOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5UYWJCdXR0b25zLmNoaWxkcmVuLmZvckVhY2goKGJ0biwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIEhlbHBlci5yZWdpc3RlckJ1dHRvbkV2ZW50KGJ0biwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub25UYWJDbGljayhpbmRleCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25FbmFibGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMub25UYWJDbGljaygwKTtcbiAgICB9XG5cbiAgICBvblRhYkNsaWNrKGluZGV4VG9BY3RpdmUpIHtcbiAgICAgICAgdGhpcy5UYWJzLmNoaWxkcmVuLmZvckVhY2goKHRhYiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gaW5kZXhUb0FjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHRhYi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YWIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuVGFiQnV0dG9ucy5jaGlsZHJlbi5mb3JFYWNoKChidG4sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IGluZGV4VG9BY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBidG4uZ2V0Q29tcG9uZW50KFRhYkJ1dHRvbikuc2V0QWN0aXZlKHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBidG4uZ2V0Q29tcG9uZW50KFRhYkJ1dHRvbikuc2V0QWN0aXZlKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59XG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gKHtcbn0pXG5jb25zdCBtYXBEaXNwYXRjaFRvQWN0aW9uID0gKGRpc3BhdGNoOiBBcHBEaXNwYXRjaCkgPT4gKHtcbiAgICBwdXNoUGFnZTogKHBheWxvYWQ6IEVBcHBQYWdlcyB8IElQYWdlV2l0aEVmZmVjdCkgPT5cbiAgICAgICAgZGlzcGF0Y2gocHVzaFBhZ2UocGF5bG9hZCkpLFxuICAgIHBvcFBhZ2U6ICgpID0+IGRpc3BhdGNoKHBvcFBhZ2UoKSksXG4gICAgcHVzaFBvcHVwOiAocGF5bG9hZDogRUFwcFBvcHVwcykgPT4gZGlzcGF0Y2gocHVzaFBvcHVwKHBheWxvYWQpKSxcbn0pXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb0FjdGlvbikoVGFicykiXX0=