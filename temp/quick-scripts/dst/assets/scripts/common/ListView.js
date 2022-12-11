
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/common/ListView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '177abJ7IQBIRJVACrHF9+Nu', 'ListView');
// scripts/common/ListView.ts

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
exports.ListView = void 0;
var TabItem_1 = require("../common/TabItem");
var APIDefine_1 = require("../src/app/APIDefine");
var connect_1 = require("../src/app/connect");
var wsgw_1 = require("../src/app/wsgw");
var SliceApp_1 = require("../src/features/SliceApp");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ListView = /** @class */ (function (_super) {
    __extends(ListView, _super);
    function ListView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.api = APIDefine_1.apis.getBalances;
        _this.scrollview = null;
        _this.content = null;
        _this.item = null;
        _this.isPage = false;
        _this.offset = 0;
        _this.needToFetch = true;
        _this.limit = 30;
        return _this;
    }
    ListView.prototype.onLoad = function () {
        var _this = this;
        this.scrollview.node.on('bounce-bottom', function () { return _this.fetch(); });
    };
    ListView.prototype.onDisable = function () {
        this.content.removeAllChildren();
        this.content.removeAllChildren();
    };
    ListView.prototype.onEnable = function () {
        this.offset = 0;
        this.limit = 0;
        this.needToFetch = true;
        this.fetch();
    };
    ListView.prototype.fetch = function () {
        var _this = this;
        if (!this.needToFetch)
            return;
        wsgw_1.default.userRequest(APIDefine_1.default[this.api], { offset: this.offset, limit: this.limit }, function (e) {
            if (e.items.length < _this.limit)
                _this.needToFetch = false;
            if (_this.isPage) {
                _this.offset += 1;
            }
            else {
                _this.offset += _this.limit;
            }
            _this.updateItems(e);
        }, console.error);
    };
    ListView.prototype.updateItems = function (data) {
        var _this = this;
        data.forEach(function (item, index) {
            _this.addItem(item, index);
        });
    };
    ListView.prototype.addItem = function (data, index) {
        var newItem = cc.instantiate(this.item);
        this.content.addChild(newItem);
        newItem.getComponent(TabItem_1.default).init(data, index);
    };
    __decorate([
        property(String)
    ], ListView.prototype, "api", void 0);
    __decorate([
        property(cc.ScrollView)
    ], ListView.prototype, "scrollview", void 0);
    __decorate([
        property(cc.Node)
    ], ListView.prototype, "content", void 0);
    __decorate([
        property(cc.Node)
    ], ListView.prototype, "item", void 0);
    __decorate([
        property(Boolean)
    ], ListView.prototype, "isPage", void 0);
    return ListView;
}(cc.Component));
exports.ListView = ListView;
var mapStateToProps = function (state) { return ({}); };
var mapDispatchToAction = function (dispatch) { return ({
    pushPage: function (payload) {
        return dispatch(SliceApp_1.pushPage(payload));
    },
    popPage: function () { return dispatch(SliceApp_1.popPage()); },
    pushPopup: function (payload) { return dispatch(SliceApp_1.pushPopup(payload)); },
}); };
exports.default = connect_1.default(mapStateToProps, mapDispatchToAction)(ListView);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NvbW1vbi9MaXN0Vmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsNkNBQXdDO0FBQ3hDLGtEQUF1RDtBQUN2RCw4Q0FBeUM7QUFFekMsd0NBQW1DO0FBQ25DLHFEQUEwSDtBQUdwSCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1QztJQUE4Qiw0QkFBWTtJQUExQztRQUFBLHFFQTJEQztRQXREVSxTQUFHLEdBQVcsZ0JBQUksQ0FBQyxXQUFXLENBQUM7UUFFL0IsZ0JBQVUsR0FBa0IsSUFBSSxDQUFDO1FBRWpDLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixZQUFNLEdBQVksS0FBSyxDQUFDO1FBRXZCLFlBQU0sR0FBRyxDQUFDLENBQUM7UUFDWCxpQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixXQUFLLEdBQUcsRUFBRSxDQUFBOztJQTBDdEIsQ0FBQztJQXhDRyx5QkFBTSxHQUFOO1FBQUEsaUJBRUM7UUFERyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsZUFBZSxFQUFFLGNBQU0sT0FBQSxLQUFJLENBQUMsS0FBSyxFQUFFLEVBQVosQ0FBWSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVTLDRCQUFTLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRUQsMkJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcs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dXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBUYWJJdGVtIGZyb20gJy4uL2NvbW1vbi9UYWJJdGVtJztcbmltcG9ydCBBUElEZWZpbmUsIHsgYXBpcyB9IGZyb20gJy4uL3NyYy9hcHAvQVBJRGVmaW5lJztcbmltcG9ydCBjb25uZWN0IGZyb20gXCIuLi9zcmMvYXBwL2Nvbm5lY3RcIjtcbmltcG9ydCB7IEFwcERpc3BhdGNoLCBSb290U3RhdGUgfSBmcm9tIFwiLi4vc3JjL2FwcC9zdG9yZVwiO1xuaW1wb3J0IHdzZ3cgZnJvbSAnLi4vc3JjL2FwcC93c2d3JztcbmltcG9ydCB7IEVBcHBQYWdlcywgRUFwcFBvcHVwcywgSVBhZ2VXaXRoRWZmZWN0LCBwb3BQYWdlLCBwb3BQb3B1cCwgcHVzaFBhZ2UsIHB1c2hQb3B1cCB9IGZyb20gXCIuLi9zcmMvZmVhdHVyZXMvU2xpY2VBcHBcIjtcblxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuZXhwb3J0IGNsYXNzIExpc3RWaWV3IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBhY3Rpb25zOiBhbnlcbiAgICBwcm9wczogYW55XG5cbiAgICBAcHJvcGVydHkoU3RyaW5nKVxuICAgIHB1YmxpYyBhcGk6IHN0cmluZyA9IGFwaXMuZ2V0QmFsYW5jZXM7XG4gICAgQHByb3BlcnR5KGNjLlNjcm9sbFZpZXcpXG4gICAgcHVibGljIHNjcm9sbHZpZXc6IGNjLlNjcm9sbFZpZXcgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHB1YmxpYyBjb250ZW50OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwdWJsaWMgaXRlbTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KEJvb2xlYW4pXG4gICAgcHVibGljIGlzUGFnZTogQm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHJpdmF0ZSBvZmZzZXQgPSAwO1xuICAgIHByaXZhdGUgbmVlZFRvRmV0Y2ggPSB0cnVlO1xuICAgIHByaXZhdGUgbGltaXQgPSAzMFxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLnNjcm9sbHZpZXcubm9kZS5vbignYm91bmNlLWJvdHRvbScsICgpID0+IHRoaXMuZmV0Y2goKSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uRGlzYWJsZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jb250ZW50LnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgICAgIHRoaXMuY29udGVudC5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgIH1cblxuICAgIG9uRW5hYmxlKCkge1xuICAgICAgICB0aGlzLm9mZnNldCA9IDA7XG4gICAgICAgIHRoaXMubGltaXQgPSAwO1xuICAgICAgICB0aGlzLm5lZWRUb0ZldGNoID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5mZXRjaCgpO1xuICAgIH1cblxuICAgIGZldGNoKCkge1xuICAgICAgICBpZiAoIXRoaXMubmVlZFRvRmV0Y2gpIHJldHVybjtcbiAgICAgICAgd3Nndy51c2VyUmVxdWVzdChBUElEZWZpbmVbdGhpcy5hcGldLCB7IG9mZnNldDogdGhpcy5vZmZzZXQsIGxpbWl0OiB0aGlzLmxpbWl0IH0sIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5pdGVtcy5sZW5ndGggPCB0aGlzLmxpbWl0KSB0aGlzLm5lZWRUb0ZldGNoID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1BhZ2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9mZnNldCArPSAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9mZnNldCArPSB0aGlzLmxpbWl0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy51cGRhdGVJdGVtcyhlKTtcbiAgICAgICAgfSwgY29uc29sZS5lcnJvcik7XG4gICAgfVxuXG4gICAgdXBkYXRlSXRlbXMoZGF0YSkge1xuICAgICAgICBkYXRhLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZEl0ZW0oaXRlbSwgaW5kZXgpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGFkZEl0ZW0oZGF0YTogYW55LCBpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IG5ld0l0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLml0ZW0pO1xuICAgICAgICB0aGlzLmNvbnRlbnQuYWRkQ2hpbGQobmV3SXRlbSk7XG4gICAgICAgIG5ld0l0ZW0uZ2V0Q29tcG9uZW50KFRhYkl0ZW0pLmluaXQoZGF0YSwgaW5kZXgpO1xuICAgIH1cbn1cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogUm9vdFN0YXRlKSA9PiAoe1xufSlcbmNvbnN0IG1hcERpc3BhdGNoVG9BY3Rpb24gPSAoZGlzcGF0Y2g6IEFwcERpc3BhdGNoKSA9PiAoe1xuICAgIHB1c2hQYWdlOiAocGF5bG9hZDogRUFwcFBhZ2VzIHwgSVBhZ2VXaXRoRWZmZWN0KSA9PlxuICAgICAgICBkaXNwYXRjaChwdXNoUGFnZShwYXlsb2FkKSksXG4gICAgcG9wUGFnZTogKCkgPT4gZGlzcGF0Y2gocG9wUGFnZSgpKSxcbiAgICBwdXNoUG9wdXA6IChwYXlsb2FkOiBFQXBwUG9wdXBzKSA9PiBkaXNwYXRjaChwdXNoUG9wdXAocGF5bG9hZCkpLFxufSlcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvQWN0aW9uKShMaXN0VmlldykiXX0=