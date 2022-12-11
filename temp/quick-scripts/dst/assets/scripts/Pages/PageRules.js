
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Pages/PageRules.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f623aCLTRdPFJudc8owRz7C', 'PageRules');
// scripts/Pages/PageRules.ts

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
exports.PageRules = void 0;
var SoundMgr_1 = require("../common/SoundMgr");
var connect_1 = require("../src/app/connect");
var store_1 = require("../src/app/store");
var utils_1 = require("../src/common/utils");
var SliceApp_1 = require("../src/features/SliceApp");
var Page_1 = require("./Page");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PageRules = /** @class */ (function (_super) {
    __extends(PageRules, _super);
    function PageRules() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btnClose2 = null;
        _this.template = null;
        _this.content = null;
        _this.scrollView = null;
        return _this;
    }
    PageRules.prototype.onLoad = function () {
        var _this = this;
        this.btnClose2.on(cc.Node.EventType.TOUCH_END, function () {
            SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
            store_1.default.dispatch(SliceApp_1.popPage());
        });
        var _loop_1 = function (i) {
            var index = i + 1;
            cc.assetManager.loadRemote(utils_1.getCDN("https://assets.elofun.com/vds-chiec-may-than-ky/rules%20(" + index + ").png"), function (err, tex) {
                if (!err) {
                    var newImage = cc.instantiate(_this.template);
                    newImage.active = true;
                    newImage.parent = _this.content;
                    newImage.name = "Image " + index;
                    newImage.zIndex = i;
                    newImage.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(tex);
                    _this.content.sortAllChildren();
                    if (_this.scrollPosition) {
                        if (_this.scrollPosition.y === -1) {
                            _this.scrollView.scrollToBottom();
                        }
                        else {
                            _this.scrollView.scrollToOffset(_this.scrollPosition, _this.time || 0);
                        }
                    }
                }
                else {
                    console.error(err);
                }
            });
        };
        for (var i = 0; i < 3; i++) {
            _loop_1(i);
        }
    };
    PageRules.prototype.scrollToOffset = function (position, time) {
        if (position.y === -1) {
            this.scrollView.scrollToBottom();
        }
        else {
            this.scrollView.scrollToOffset(position, time);
        }
        this.scrollPosition = position;
        this.time = time;
    };
    __decorate([
        property(cc.Node)
    ], PageRules.prototype, "btnClose2", void 0);
    __decorate([
        property(cc.Node)
    ], PageRules.prototype, "template", void 0);
    __decorate([
        property(cc.Node)
    ], PageRules.prototype, "content", void 0);
    __decorate([
        property(cc.ScrollView)
    ], PageRules.prototype, "scrollView", void 0);
    return PageRules;
}(Page_1.default));
exports.PageRules = PageRules;
var mapStateToProps = function (state) { return ({}); };
var mapDispatchToAction = function (dispatch) { return ({
    pushPage: function (payload) {
        return dispatch(SliceApp_1.pushPage(payload));
    },
    popPage: function () { return dispatch(SliceApp_1.popPage()); },
    pushPopup: function (payload) { return dispatch(SliceApp_1.pushPopup(payload)); },
}); };
exports.default = connect_1.default(mapStateToProps, mapDispatchToAction)(PageRules);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BhZ2VzL1BhZ2VSdWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsK0NBQTBDO0FBQzFDLDhDQUF5QztBQUN6QywwQ0FBaUU7QUFDakUsNkNBQTZDO0FBQzdDLHFEQUFrSTtBQUVsSSwrQkFBMEI7QUFFcEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBK0IsNkJBQUk7SUFBbkM7UUFBQSxxRUEyREM7UUF0RFUsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsZ0JBQVUsR0FBa0IsSUFBSSxDQUFDOztJQWdENUMsQ0FBQztJQTNDRywwQkFBTSxHQUFOO1FBQUEsaUJBZ0NDO1FBL0JHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRTtZQUMzQyxrQkFBUSxDQUFDLE9BQU8sQ0FBQyxrQkFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMvQyxlQUFLLENBQUMsUUFBUSxDQUFDLGtCQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO2dDQUVNLENBQUM7WUFDTixJQUFNLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3BCLEVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLGNBQU0sQ0FBQyw4REFBNEQsS0FBSyxVQUFPLENBQUMsRUFBRSxVQUFDLEdBQVEsRUFBRSxHQUFRO2dCQUM1SCxJQUFJLENBQUMsR0FB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b290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgU291bmRNZ3IgZnJvbSBcIi4uL2NvbW1vbi9Tb3VuZE1nclwiO1xuaW1wb3J0IGNvbm5lY3QgZnJvbSBcIi4uL3NyYy9hcHAvY29ubmVjdFwiO1xuaW1wb3J0IHN0b3JlLCB7IFJvb3RTdGF0ZSwgQXBwRGlzcGF0Y2ggfSBmcm9tIFwiLi4vc3JjL2FwcC9zdG9yZVwiO1xuaW1wb3J0IHsgZ2V0Q0ROIH0gZnJvbSBcIi4uL3NyYy9jb21tb24vdXRpbHNcIjtcbmltcG9ydCB7IEVBcHBQYWdlcywgSVBhZ2VXaXRoRWZmZWN0LCBwdXNoUGFnZSwgcG9wUGFnZSwgRUFwcFBvcHVwcywgcHVzaFBvcHVwLCBQQUdFX1NIT1dfRUZGRUNUIH0gZnJvbSBcIi4uL3NyYy9mZWF0dXJlcy9TbGljZUFwcFwiO1xuaW1wb3J0IFNpbmdsZXRvbiBmcm9tIFwiLi4vdXRpbHMvU2luZ2xldG9uXCI7XG5pbXBvcnQgUGFnZSBmcm9tIFwiLi9QYWdlXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbmV4cG9ydCBjbGFzcyBQYWdlUnVsZXMgZXh0ZW5kcyBQYWdlIHtcbiAgICBhY3Rpb25zOiBhbnlcbiAgICBwcm9wczogYW55XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwdWJsaWMgYnRuQ2xvc2UyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwdWJsaWMgdGVtcGxhdGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHB1YmxpYyBjb250ZW50OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU2Nyb2xsVmlldylcbiAgICBwdWJsaWMgc2Nyb2xsVmlldzogY2MuU2Nyb2xsVmlldyA9IG51bGw7XG5cbiAgICBwcml2YXRlIHNjcm9sbFBvc2l0aW9uO1xuICAgIHByaXZhdGUgdGltZTtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5idG5DbG9zZTIub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoKSA9PiB7XG4gICAgICAgICAgICBTb3VuZE1nci5wbGF5U2Z4KFNvdW5kTWdyLkluc3RhbmNlLlNGWF9CVVRUT04pO1xuICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2gocG9wUGFnZSgpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gaSArIDE7XG4gICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZFJlbW90ZShnZXRDRE4oYGh0dHBzOi8vYXNzZXRzLmVsb2Z1bi5jb20vdmRzLWNoaWVjLW1heS10aGFuLWt5L3J1bGVzJTIwKCR7aW5kZXh9KS5wbmdgKSwgKGVycjogYW55LCB0ZXg6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0ltYWdlID0gY2MuaW5zdGFudGlhdGUodGhpcy50ZW1wbGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIG5ld0ltYWdlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIG5ld0ltYWdlLnBhcmVudCA9IHRoaXMuY29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgbmV3SW1hZ2UubmFtZSA9IGBJbWFnZSAke2luZGV4fWBcbiAgICAgICAgICAgICAgICAgICAgbmV3SW1hZ2UuekluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgbmV3SW1hZ2UuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LnNvcnRBbGxDaGlsZHJlbigpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNjcm9sbFBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zY3JvbGxQb3NpdGlvbi55ID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVmlldy5zY3JvbGxUb0JvdHRvbSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxWaWV3LnNjcm9sbFRvT2Zmc2V0KHRoaXMuc2Nyb2xsUG9zaXRpb24sIHRoaXMudGltZSB8fCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzY3JvbGxUb09mZnNldChwb3NpdGlvbiwgdGltZSkge1xuICAgICAgICBpZiAocG9zaXRpb24ueSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVmlldy5zY3JvbGxUb0JvdHRvbSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxWaWV3LnNjcm9sbFRvT2Zmc2V0KHBvc2l0aW9uLCB0aW1lKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2Nyb2xsUG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgdGhpcy50aW1lID0gdGltZTtcbiAgICB9XG59XG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gKHtcbn0pXG5jb25zdCBtYXBEaXNwYXRjaFRvQWN0aW9uID0gKGRpc3BhdGNoOiBBcHBEaXNwYXRjaCkgPT4gKHtcbiAgICBwdXNoUGFnZTogKHBheWxvYWQ6IEVBcHBQYWdlcyB8IElQYWdlV2l0aEVmZmVjdCkgPT5cbiAgICAgICAgZGlzcGF0Y2gocHVzaFBhZ2UocGF5bG9hZCkpLFxuICAgIHBvcFBhZ2U6ICgpID0+IGRpc3BhdGNoKHBvcFBhZ2UoKSksXG4gICAgcHVzaFBvcHVwOiAocGF5bG9hZDogRUFwcFBvcHVwcykgPT4gZGlzcGF0Y2gocHVzaFBvcHVwKHBheWxvYWQpKSxcbn0pXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb0FjdGlvbikoUGFnZVJ1bGVzKSJdfQ==