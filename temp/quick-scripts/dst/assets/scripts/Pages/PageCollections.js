
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Pages/PageCollections.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '514bf2cX3hMNYZEo1a+A0/i', 'PageCollections');
// scripts/Pages/PageCollections.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageCollections = void 0;
var connect_1 = require("../src/app/connect");
var SliceApp_1 = require("../src/features/SliceApp");
var Page_1 = require("./Page");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PageCollections = /** @class */ (function (_super) {
    __extends(PageCollections, _super);
    function PageCollections() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PageCollections.prototype.start = function () { };
    PageCollections.prototype.onLoad = function () {
    };
    PageCollections.prototype.onEnded = function () {
    };
    PageCollections.prototype.onEnable = function () { };
    PageCollections.prototype.onDisable = function () { };
    return PageCollections;
}(Page_1.default));
exports.PageCollections = PageCollections;
var mapStateToProps = function (state) { return ({}); };
var mapDispatchToAction = function (dispatch) { return ({
    pushPage: function (payload) {
        return dispatch(SliceApp_1.pushPage(payload));
    },
    popPage: function () { return dispatch(SliceApp_1.popPage()); },
    pushPopup: function (payload) { return dispatch(SliceApp_1.pushPopup(payload)); },
}); };
exports.default = connect_1.default(mapStateToProps, mapDispatchToAction)(PageCollections);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BhZ2VzL1BhZ2VDb2xsZWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsOENBQXlDO0FBRXpDLHFEQUFrSTtBQUVsSSwrQkFBMEI7QUFFcEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBcUMsbUNBQUk7SUFBekM7O0lBWUEsQ0FBQztJQVJHLCtCQUFLLEdBQUwsY0FBVSxDQUFDO0lBRVgsZ0NBQU0sR0FBTjtJQUNBLENBQUM7SUFDRCxpQ0FBTyxHQUFQO0lBQ0EsQ0FBQztJQUNELGtDQUFRLEdBQVIsY0FBYSxDQUFDO0lBQ2QsbUNBQVMsR0FBVCxjQUFjLENBQUM7SUFDbkIsc0JBQUM7QUFBRCxDQVpBLEFBWUMsQ0Fab0MsY0FBSSxHQVl4QztBQVpZLDBDQUFlO0FBYTVCLElBQU0sZUFBZSxHQUFHLFVBQUMsS0FBZ0IsSUFBSyxPQUFBLENBQUMsRUFDOUMsQ0FBQyxFQUQ0QyxDQUM1QyxDQUFBO0FBQ0YsSUFBTSxtQkFBbUIsR0FBRyxVQUFDLFFBQXFCLElBQUssT0FBQSxDQUFDO0lBQ3BELFFBQVEsRUFBRSxVQUFDLE9BQW9DO1FBQzNDLE9BQUEsUUFBUSxDQUFDLG1CQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFBM0IsQ0FBMkI7SUFDL0IsT0FBTyxFQUFFLGNBQU0sT0FBQSxRQUFRLENBQUMsa0JBQU8sRUFBRSxDQUFDLEVBQW5CLENBQW1CO0lBQ2xDLFNBQVMsRUFBRSxVQUFDLE9BQW1CLElBQUssT0FBQSxRQUFRLENBQUMsb0JBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUE1QixDQUE0QjtDQUNuRSxDQUFDLEVBTHFELENBS3JELENBQUE7QUFDRixrQkFBZSxpQkFBTyxDQUFDLGVBQWUsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBjb25uZWN0IGZyb20gXCIuLi9zcmMvYXBwL2Nvbm5lY3RcIjtcbmltcG9ydCB7IFJvb3RTdGF0ZSwgQXBwRGlzcGF0Y2ggfSBmcm9tIFwiLi4vc3JjL2FwcC9zdG9yZVwiO1xuaW1wb3J0IHsgRUFwcFBhZ2VzLCBJUGFnZVdpdGhFZmZlY3QsIHB1c2hQYWdlLCBwb3BQYWdlLCBFQXBwUG9wdXBzLCBwdXNoUG9wdXAsIFBBR0VfU0hPV19FRkZFQ1QgfSBmcm9tIFwiLi4vc3JjL2ZlYXR1cmVzL1NsaWNlQXBwXCI7XG5pbXBvcnQgSGVscGVyIGZyb20gXCIuLi91dGlscy9IZWxwZXJcIjtcbmltcG9ydCBQYWdlIGZyb20gXCIuL1BhZ2VcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuZXhwb3J0IGNsYXNzIFBhZ2VDb2xsZWN0aW9ucyBleHRlbmRzIFBhZ2Uge1xuICAgIGFjdGlvbnM6IGFueVxuICAgIHByb3BzOiBhbnlcblxuICAgIHN0YXJ0KCkgeyB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgfVxuICAgIG9uRW5kZWQoKSB7XG4gICAgfVxuICAgIG9uRW5hYmxlKCkgeyB9XG4gICAgb25EaXNhYmxlKCkgeyB9XG59XG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gKHtcbn0pXG5jb25zdCBtYXBEaXNwYXRjaFRvQWN0aW9uID0gKGRpc3BhdGNoOiBBcHBEaXNwYXRjaCkgPT4gKHtcbiAgICBwdXNoUGFnZTogKHBheWxvYWQ6IEVBcHBQYWdlcyB8IElQYWdlV2l0aEVmZmVjdCkgPT5cbiAgICAgICAgZGlzcGF0Y2gocHVzaFBhZ2UocGF5bG9hZCkpLFxuICAgIHBvcFBhZ2U6ICgpID0+IGRpc3BhdGNoKHBvcFBhZ2UoKSksXG4gICAgcHVzaFBvcHVwOiAocGF5bG9hZDogRUFwcFBvcHVwcykgPT4gZGlzcGF0Y2gocHVzaFBvcHVwKHBheWxvYWQpKSxcbn0pXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb0FjdGlvbikoUGFnZUNvbGxlY3Rpb25zKSJdfQ==