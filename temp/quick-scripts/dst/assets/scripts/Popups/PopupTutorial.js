
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Popups/PopupTutorial.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4432fzPceROuKPkVoqOoZrS', 'PopupTutorial');
// scripts/Popups/PopupTutorial.ts

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
exports.PopupTutorial = void 0;
var connect_1 = require("../src/app/connect");
var SliceApp_1 = require("../src/features/SliceApp");
var Popup_1 = require("./Popup");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopupTutorial = /** @class */ (function (_super) {
    __extends(PopupTutorial, _super);
    function PopupTutorial() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.container = null;
        return _this;
    }
    PopupTutorial.prototype.onEnable = function () {
        this.container.children.forEach(function (child, index) {
            child.active = false;
        });
        this.container.children[0].active = true;
    };
    __decorate([
        property(cc.Node)
    ], PopupTutorial.prototype, "container", void 0);
    return PopupTutorial;
}(Popup_1.default));
exports.PopupTutorial = PopupTutorial;
var mapStateToProps = function (state) { return ({}); };
var mapDispatchToAction = function (dispatch) { return ({
    pushPage: function (payload) {
        return dispatch(SliceApp_1.pushPage(payload));
    },
    popPopup: function () { return dispatch(SliceApp_1.popPopup()); },
    pushPopup: function (payload) { return dispatch(SliceApp_1.pushPopup(payload)); },
}); };
exports.default = connect_1.default(mapStateToProps, mapDispatchToAction)(PopupTutorial);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BvcHVwcy9Qb3B1cFR1dG9yaWFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtsRiw4Q0FBeUM7QUFFekMscURBQWlIO0FBR2pILGlDQUE0QjtBQUl0QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUFtQyxpQ0FBSztJQUF4QztRQUFBLHFFQWNDO1FBVEcsZUFBUyxHQUFZLElBQUksQ0FBQzs7SUFTOUIsQ0FBQztJQVBHLGdDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLLEVBQUUsS0FBSztZQUN6QyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDN0MsQ0FBQztJQVJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQ1E7SUFTOUIsb0JBQUM7Q0FkRCxBQWNDLENBZGtDLGVBQUssR0FjdkM7QUFkWSxzQ0FBYTtBQWdCMUIsSUFBTSxlQUFlLEdBQUcsVUFBQyxLQUFnQixJQUFLLE9BQUEsQ0FBQyxFQUM5QyxDQUFDLEVBRDRDLENBQzVDLENBQUE7QUFDRixJQUFNLG1CQUFtQixHQUFHLFVBQUMsUUFBcUIsSUFBSyxPQUFBLENBQUM7SUFDcEQsUUFBUSxFQUFFLFVBQUMsT0FBb0M7UUFDM0MsT0FBQSxRQUFRLENBQUMsbUJBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUEzQixDQUEyQjtJQUMvQixRQUFRLEVBQUUsY0FBTSxPQUFBLFFBQVEsQ0FBQyxtQkFBUSxFQUFFLENBQUMsRUFBcEIsQ0FBb0I7SUFDcEMsU0FBUyxFQUFFLFVBQUMsT0FBbUIsSUFBSyxPQUFBLFFBQVEsQ0FBQyxvQkFBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQTVCLENBQTRCO0NBQ25FLENBQUMsRUFMcUQsQ0FLckQsQ0FBQTtBQUNGLGtCQUFlLGlCQUFPLENBQUMsZUFBZSxFQUFFLG1CQUFtQixDQUFDLENBQUMsYUFBYSxDQUFDLENBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCBTb3VuZE1nciBmcm9tIFwiLi4vY29tbW9uL1NvdW5kTWdyXCI7XG5pbXBvcnQgeyBNaXNzaW9ucyB9IGZyb20gJy4uL2NvbXBvbmVudHMvQ29tcFF1ZXN0c0NvbnRhaW5lcic7XG5pbXBvcnQgY29ubmVjdCBmcm9tIFwiLi4vc3JjL2FwcC9jb25uZWN0XCI7XG5pbXBvcnQgc3RvcmUsIHsgQXBwRGlzcGF0Y2gsIFJvb3RTdGF0ZSB9IGZyb20gXCIuLi9zcmMvYXBwL3N0b3JlXCI7XG5pbXBvcnQgeyBFQXBwUGFnZXMsIEVBcHBQb3B1cHMsIElQYWdlV2l0aEVmZmVjdCwgcG9wUG9wdXAsIHB1c2hQYWdlLCBwdXNoUG9wdXAgfSBmcm9tIFwiLi4vc3JjL2ZlYXR1cmVzL1NsaWNlQXBwXCI7XG5pbXBvcnQgeyBEZWVwbGlua1R5cGVzVG9OYW1lLCBFRGVlcGxpbmtUeXBlcyB9IGZyb20gJy4uL3NyYy9mZWF0dXJlcy9TbGljZURlZXBsaW5rcyc7XG5pbXBvcnQgSGVscGVyIGZyb20gXCIuLi91dGlscy9IZWxwZXJcIjtcbmltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cFwiO1xuaW1wb3J0IFBvcHVwVXBkYXRlSW5mbyBmcm9tICcuL1BvcHVwVXBkYXRlSW5mbyc7XG5cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuZXhwb3J0IGNsYXNzIFBvcHVwVHV0b3JpYWwgZXh0ZW5kcyBQb3B1cCB7XG4gICAgYWN0aW9uczogYW55XG4gICAgcHJvcHM6IGFueVxuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY29udGFpbmVyOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIG9uRW5hYmxlKCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNoaWxkLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gKHtcbn0pXG5jb25zdCBtYXBEaXNwYXRjaFRvQWN0aW9uID0gKGRpc3BhdGNoOiBBcHBEaXNwYXRjaCkgPT4gKHtcbiAgICBwdXNoUGFnZTogKHBheWxvYWQ6IEVBcHBQYWdlcyB8IElQYWdlV2l0aEVmZmVjdCkgPT5cbiAgICAgICAgZGlzcGF0Y2gocHVzaFBhZ2UocGF5bG9hZCkpLFxuICAgIHBvcFBvcHVwOiAoKSA9PiBkaXNwYXRjaChwb3BQb3B1cCgpKSxcbiAgICBwdXNoUG9wdXA6IChwYXlsb2FkOiBFQXBwUG9wdXBzKSA9PiBkaXNwYXRjaChwdXNoUG9wdXAocGF5bG9hZCkpLFxufSlcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvQWN0aW9uKShQb3B1cFR1dG9yaWFsKVxuIl19