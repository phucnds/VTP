
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Pages/PageThamQuan.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '26d8c3rf8ZJxb3r09l2HQlE', 'PageThamQuan');
// scripts/Pages/PageThamQuan.ts

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
exports.PageThamQuan = void 0;
var SoundMgr_1 = require("../common/SoundMgr");
var connect_1 = require("../src/app/connect");
var store_1 = require("../src/app/store");
var SliceApp_1 = require("../src/features/SliceApp");
var SliceDeeplinks_1 = require("../src/features/SliceDeeplinks");
var Page_1 = require("./Page");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PageThamQuan = /** @class */ (function (_super) {
    __extends(PageThamQuan, _super);
    function PageThamQuan() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.deeplink = SliceDeeplinks_1.EDeeplinkTypes.THAM_QUAN_VI_PAY_NOW;
        _this.btnConfirm = null;
        return _this;
    }
    PageThamQuan.prototype.onLoad = function () {
        var _this = this;
        this.btnConfirm.on(cc.Node.EventType.TOUCH_END, function () {
            if (_this.btnConfirm.getComponent(cc.Button).interactable === false)
                return;
            _this.btnConfirm.getComponent(cc.Button).interactable = false;
            SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
            store_1.default.dispatch(SliceApp_1.popPage());
            window.location.href = _this.props.deeplinks.data[SliceDeeplinks_1.DeeplinkTypesToName[_this.deeplink]];
            _this.btnConfirm.getComponent(cc.Button).interactable = true;
        });
    };
    PageThamQuan.prototype.onDisable = function () {
        this.btnConfirm.getComponent(cc.Button).interactable = true;
    };
    __decorate([
        property({ type: cc.Enum(SliceDeeplinks_1.EDeeplinkTypes) })
    ], PageThamQuan.prototype, "deeplink", void 0);
    __decorate([
        property(cc.Node)
    ], PageThamQuan.prototype, "btnConfirm", void 0);
    return PageThamQuan;
}(Page_1.default));
exports.PageThamQuan = PageThamQuan;
var mapStateToProps = function (state) { return ({
    deeplinks: state.deeplinks,
}); };
var mapDispatchToAction = function (dispatch) { return ({
    pushPage: function (payload) {
        return dispatch(SliceApp_1.pushPage(payload));
    },
    popPage: function () { return dispatch(SliceApp_1.popPage()); },
    pushPopup: function (payload) { return dispatch(SliceApp_1.pushPopup(payload)); },
}); };
exports.default = connect_1.default(mapStateToProps, mapDispatchToAction)(PageThamQuan);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BhZ2VzL1BhZ2VUaGFtUXVhbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsK0NBQTBDO0FBRzFDLDhDQUF5QztBQUN6QywwQ0FBaUU7QUFHakUscURBQWtJO0FBQ2xJLGlFQUFxRjtBQUVyRiwrQkFBMEI7QUFFcEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBa0MsZ0NBQUk7SUFBdEM7UUFBQSxxRUF1QkM7UUFsQlUsY0FBUSxHQUFtQiwrQkFBYyxDQUFDLG9CQUFvQixDQUFDO1FBRy9ELGdCQUFVLEdBQVksSUFBSSxDQUFDOztJQWV0QyxDQUFDO0lBYkcsNkJBQU0sR0FBTjtRQUFBLGlCQVNDO1FBUkcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFO1lBQzVDLElBQUksS0FBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksS0FBSyxLQUFLO2dCQUFFLE9BQU87WUFDM0UsS0FBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDN0Qsa0JBQVEsQ0FBQyxPQUFPLENBQUMsa0JBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDL0MsZUFBSyxDQUFDLFFBQVEsQ0FBQyxrQkFBTyxFQUFFLENBQUMsQ0FBQztZQUMxQixNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsb0NBQW1CLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDckYsS0FBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDaEUsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ1MsZ0NBQVMsR0FBbkI7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztJQUNoRSxDQUFDO0lBakJEO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsK0JBQWMsQ0FBQyxFQUFFLENBQUM7a0RBQzBCO0lBR3RFO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQ2dCO0lBZXRDLG1CQUFDO0NBdkJELEFBdUJDLENBdkJpQyxjQUFJLEdBdUJyQztBQXZCWSxvQ0FBWTtBQXdCekIsSUFBTSxlQUFlLEdBQUcsVUFBQyxLQUFnQixJQUFLLE9BQUEsQ0FBQztJQUMzQyxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7Q0FDN0IsQ0FBQyxFQUY0QyxDQUU1QyxDQUFBO0FBQ0YsSUFBTSxtQkFBbUIsR0FBRyxVQUFDLFFBQXFCLElBQUssT0FBQSxDQUFDO0lBQ3BELFFBQVEsRUFBRSxVQUFDLE9BQW9DO1FBQzNDLE9BQUEsUUFBUSxDQUFDLG1CQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFBM0IsQ0FBMkI7SUFDL0IsT0FBTyxFQUFFLGNBQU0sT0FBQSxRQUFRLENBQUMsa0JBQU8sRUFBRSxDQUFDLEVBQW5CLENBQW1CO0lBQ2xDLFNBQVMsRUFBRSxVQUFDLE9BQW1CLElBQUssT0FBQSxRQUFRLENBQUMsb0JBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUE1QixDQUE0QjtDQUNuRSxDQUFDLEVBTHFELENBS3JELENBQUE7QUFDRixrQkFBZSxpQkFBTyxDQUFDLGVBQWUsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBTb3VuZE1nciBmcm9tIFwiLi4vY29tbW9uL1NvdW5kTWdyXCI7XG5pbXBvcnQgeyBNaXNzaW9ucyB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbXBRdWVzdHNDb250YWluZXJcIjtcbmltcG9ydCBBUElEZWZpbmUgZnJvbSBcIi4uL3NyYy9hcHAvQVBJRGVmaW5lXCI7XG5pbXBvcnQgY29ubmVjdCBmcm9tIFwiLi4vc3JjL2FwcC9jb25uZWN0XCI7XG5pbXBvcnQgc3RvcmUsIHsgUm9vdFN0YXRlLCBBcHBEaXNwYXRjaCB9IGZyb20gXCIuLi9zcmMvYXBwL3N0b3JlXCI7XG5pbXBvcnQgd3NndyBmcm9tIFwiLi4vc3JjL2FwcC93c2d3XCI7XG5pbXBvcnQgeyByYW5kb21TdHJpbmcgfSBmcm9tIFwiLi4vc3JjL2NvbW1vbi91dGlsc1wiO1xuaW1wb3J0IHsgRUFwcFBhZ2VzLCBJUGFnZVdpdGhFZmZlY3QsIHB1c2hQYWdlLCBwb3BQYWdlLCBFQXBwUG9wdXBzLCBwdXNoUG9wdXAsIFBBR0VfU0hPV19FRkZFQ1QgfSBmcm9tIFwiLi4vc3JjL2ZlYXR1cmVzL1NsaWNlQXBwXCI7XG5pbXBvcnQgeyBEZWVwbGlua1R5cGVzVG9OYW1lLCBFRGVlcGxpbmtUeXBlcyB9IGZyb20gXCIuLi9zcmMvZmVhdHVyZXMvU2xpY2VEZWVwbGlua3NcIjtcbmltcG9ydCBIZWxwZXIgZnJvbSBcIi4uL3V0aWxzL0hlbHBlclwiO1xuaW1wb3J0IFBhZ2UgZnJvbSBcIi4vUGFnZVwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5leHBvcnQgY2xhc3MgUGFnZVRoYW1RdWFuIGV4dGVuZHMgUGFnZSB7XG4gICAgYWN0aW9uczogYW55XG4gICAgcHJvcHM6IGFueVxuXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuRW51bShFRGVlcGxpbmtUeXBlcykgfSlcbiAgICBwdWJsaWMgZGVlcGxpbms6IEVEZWVwbGlua1R5cGVzID0gRURlZXBsaW5rVHlwZXMuVEhBTV9RVUFOX1ZJX1BBWV9OT1c7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwdWJsaWMgYnRuQ29uZmlybTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuYnRuQ29uZmlybS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmJ0bkNvbmZpcm0uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID09PSBmYWxzZSkgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy5idG5Db25maXJtLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgU291bmRNZ3IucGxheVNmeChTb3VuZE1nci5JbnN0YW5jZS5TRlhfQlVUVE9OKTtcbiAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHBvcFBhZ2UoKSk7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMucHJvcHMuZGVlcGxpbmtzLmRhdGFbRGVlcGxpbmtUeXBlc1RvTmFtZVt0aGlzLmRlZXBsaW5rXV07XG4gICAgICAgICAgICB0aGlzLmJ0bkNvbmZpcm0uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBvbkRpc2FibGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYnRuQ29uZmlybS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgIH1cbn1cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogUm9vdFN0YXRlKSA9PiAoe1xuICAgIGRlZXBsaW5rczogc3RhdGUuZGVlcGxpbmtzLFxufSlcbmNvbnN0IG1hcERpc3BhdGNoVG9BY3Rpb24gPSAoZGlzcGF0Y2g6IEFwcERpc3BhdGNoKSA9PiAoe1xuICAgIHB1c2hQYWdlOiAocGF5bG9hZDogRUFwcFBhZ2VzIHwgSVBhZ2VXaXRoRWZmZWN0KSA9PlxuICAgICAgICBkaXNwYXRjaChwdXNoUGFnZShwYXlsb2FkKSksXG4gICAgcG9wUGFnZTogKCkgPT4gZGlzcGF0Y2gocG9wUGFnZSgpKSxcbiAgICBwdXNoUG9wdXA6IChwYXlsb2FkOiBFQXBwUG9wdXBzKSA9PiBkaXNwYXRjaChwdXNoUG9wdXAocGF5bG9hZCkpLFxufSlcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvQWN0aW9uKShQYWdlVGhhbVF1YW4pIl19