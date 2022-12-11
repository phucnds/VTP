
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Pages/PageSavenow.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '13fdcnHEHdEsaOBIUeYo0a8', 'PageSavenow');
// scripts/Pages/PageSavenow.ts

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
exports.PageSavenow = void 0;
var SoundMgr_1 = require("../common/SoundMgr");
var APIDefine_1 = require("../src/app/APIDefine");
var connect_1 = require("../src/app/connect");
var store_1 = require("../src/app/store");
var wsgw_1 = require("../src/app/wsgw");
var SliceApp_1 = require("../src/features/SliceApp");
var SliceDeeplinks_1 = require("../src/features/SliceDeeplinks");
var Page_1 = require("./Page");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PageSavenow = /** @class */ (function (_super) {
    __extends(PageSavenow, _super);
    function PageSavenow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btnConfirm = null;
        return _this;
    }
    PageSavenow.prototype.onLoad = function () {
        var _this = this;
        this.btnConfirm.on(cc.Node.EventType.TOUCH_END, function () {
            if (_this.btnConfirm.getComponent(cc.Button).interactable === false)
                return;
            _this.btnConfirm.getComponent(cc.Button).interactable = false;
            SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
            wsgw_1.default.userRequest(APIDefine_1.default.hitSaveNowButton, {}, function (e) {
                store_1.default.dispatch(SliceApp_1.popPage());
                window.location.href = _this.props.deeplinks.data[SliceDeeplinks_1.DeeplinkTypesToName[SliceDeeplinks_1.EDeeplinkTypes.THAM_QUAN_DAU_TU_SAVE_NOW]];
                _this.btnConfirm.getComponent(cc.Button).interactable = true;
            }, function () {
                _this.actions.pushPopup(SliceApp_1.EAppPopups.PopupSaveNowOverloaded);
                _this.btnConfirm.getComponent(cc.Button).interactable = true;
            });
        });
    };
    PageSavenow.prototype.onDisable = function () {
        this.btnConfirm.getComponent(cc.Button).interactable = true;
    };
    __decorate([
        property(cc.Node)
    ], PageSavenow.prototype, "btnConfirm", void 0);
    return PageSavenow;
}(Page_1.default));
exports.PageSavenow = PageSavenow;
var mapStateToProps = function (state) { return ({
    user: state.user,
    deeplinks: state.deeplinks,
}); };
var mapDispatchToAction = function (dispatch) { return ({
    pushPage: function (payload) {
        return dispatch(SliceApp_1.pushPage(payload));
    },
    popPage: function () { return dispatch(SliceApp_1.popPage()); },
    pushPopup: function (payload) { return dispatch(SliceApp_1.pushPopup(payload)); },
}); };
exports.default = connect_1.default(mapStateToProps, mapDispatchToAction)(PageSavenow);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BhZ2VzL1BhZ2VTYXZlbm93LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiwrQ0FBMEM7QUFFMUMsa0RBQTZDO0FBQzdDLDhDQUF5QztBQUN6QywwQ0FBaUU7QUFDakUsd0NBQW1DO0FBRW5DLHFEQUFrSTtBQUNsSSxpRUFBcUY7QUFFckYsK0JBQTBCO0FBRXBCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQWlDLCtCQUFJO0lBQXJDO1FBQUEscUVBMkJDO1FBdEJVLGdCQUFVLEdBQVksSUFBSSxDQUFDOztJQXNCdEMsQ0FBQztJQXBCRyw0QkFBTSxHQUFOO1FBQUEsaUJBZUM7UUFkRyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUU7WUFDNUMsSUFBSSxLQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxLQUFLLEtBQUs7Z0JBQUUsT0FBTztZQUUzRSxLQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUM3RCxrQkFBUSxDQUFDLE9BQU8sQ0FBQyxrQkFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMvQyxjQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFTLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxFQUFFLFVBQUMsQ0FBQztnQkFDL0MsZUFBSyxDQUFDLFFBQVEsQ0FBQyxrQkFBTyxFQUFFLENBQUMsQ0FBQztnQkFDMUIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLG9DQUFtQixDQUFDLCtCQUFjLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDO2dCQUNoSCxLQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNoRSxDQUFDLEVBQUU7Z0JBQ0MsS0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMscUJBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO2dCQUMxRCxLQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNoRSxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVTLCtCQUFTLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7SUFDaEUsQ0FBQztJQXJCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNnQjtJQXNCdEMsa0JBQUM7Q0EzQkQsQUEyQkMsQ0EzQmdDLGNBQUksR0EyQnBDO0FBM0JZLGtDQUFXO0FBNEJ4QixJQUFNLGVBQWUsR0FBRyxVQUFDLEtBQWdCLElBQUssT0FBQSxDQUFDO0lBQzNDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtJQUNoQixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7Q0FDN0IsQ0FBQyxFQUg0QyxDQUc1QyxDQUFBO0FBQ0YsSUFBTSxtQkFBbUIsR0FBRyxVQUFDLFFBQXFCLElBQUssT0FBQSxDQUFDO0lBQ3BELFFBQVEsRUFBRSxVQUFDLE9BQW9DO1FBQzNDLE9BQUEsUUFBUSxDQUFDLG1CQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFBM0IsQ0FBMkI7SUFDL0IsT0FBTyxFQUFFLGNBQU0sT0FBQSxRQUFRLENBQUMsa0JBQU8sRUFBRSxDQUFDLEVBQW5CLENBQW1CO0lBQ2xDLFNBQVMsRUFBRSxVQUFDLE9BQW1CLElBQUssT0FBQSxRQUFRLENBQUMsb0JBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUE1QixDQUE0QjtDQUNuRSxDQUFDLEVBTHFELENBS3JELENBQUE7QUFDRixrQkFBZSxpQkFBTyxDQUFDLGVBQWUsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBTb3VuZE1nciBmcm9tIFwiLi4vY29tbW9uL1NvdW5kTWdyXCI7XG5pbXBvcnQgeyBNaXNzaW9ucyB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbXBRdWVzdHNDb250YWluZXJcIjtcbmltcG9ydCBBUElEZWZpbmUgZnJvbSBcIi4uL3NyYy9hcHAvQVBJRGVmaW5lXCI7XG5pbXBvcnQgY29ubmVjdCBmcm9tIFwiLi4vc3JjL2FwcC9jb25uZWN0XCI7XG5pbXBvcnQgc3RvcmUsIHsgUm9vdFN0YXRlLCBBcHBEaXNwYXRjaCB9IGZyb20gXCIuLi9zcmMvYXBwL3N0b3JlXCI7XG5pbXBvcnQgd3NndyBmcm9tIFwiLi4vc3JjL2FwcC93c2d3XCI7XG5pbXBvcnQgeyByYW5kb21TdHJpbmcgfSBmcm9tIFwiLi4vc3JjL2NvbW1vbi91dGlsc1wiO1xuaW1wb3J0IHsgRUFwcFBhZ2VzLCBJUGFnZVdpdGhFZmZlY3QsIHB1c2hQYWdlLCBwb3BQYWdlLCBFQXBwUG9wdXBzLCBwdXNoUG9wdXAsIFBBR0VfU0hPV19FRkZFQ1QgfSBmcm9tIFwiLi4vc3JjL2ZlYXR1cmVzL1NsaWNlQXBwXCI7XG5pbXBvcnQgeyBEZWVwbGlua1R5cGVzVG9OYW1lLCBFRGVlcGxpbmtUeXBlcyB9IGZyb20gXCIuLi9zcmMvZmVhdHVyZXMvU2xpY2VEZWVwbGlua3NcIjtcbmltcG9ydCBIZWxwZXIgZnJvbSBcIi4uL3V0aWxzL0hlbHBlclwiO1xuaW1wb3J0IFBhZ2UgZnJvbSBcIi4vUGFnZVwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5leHBvcnQgY2xhc3MgUGFnZVNhdmVub3cgZXh0ZW5kcyBQYWdlIHtcbiAgICBhY3Rpb25zOiBhbnlcbiAgICBwcm9wczogYW55XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwdWJsaWMgYnRuQ29uZmlybTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuYnRuQ29uZmlybS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmJ0bkNvbmZpcm0uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID09PSBmYWxzZSkgcmV0dXJuO1xuXG4gICAgICAgICAgICB0aGlzLmJ0bkNvbmZpcm0uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICBTb3VuZE1nci5wbGF5U2Z4KFNvdW5kTWdyLkluc3RhbmNlLlNGWF9CVVRUT04pO1xuICAgICAgICAgICAgd3Nndy51c2VyUmVxdWVzdChBUElEZWZpbmUuaGl0U2F2ZU5vd0J1dHRvbiwge30sIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2gocG9wUGFnZSgpKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMucHJvcHMuZGVlcGxpbmtzLmRhdGFbRGVlcGxpbmtUeXBlc1RvTmFtZVtFRGVlcGxpbmtUeXBlcy5USEFNX1FVQU5fREFVX1RVX1NBVkVfTk9XXV07XG4gICAgICAgICAgICAgICAgdGhpcy5idG5Db25maXJtLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3Rpb25zLnB1c2hQb3B1cChFQXBwUG9wdXBzLlBvcHVwU2F2ZU5vd092ZXJsb2FkZWQpO1xuICAgICAgICAgICAgICAgIHRoaXMuYnRuQ29uZmlybS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkRpc2FibGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYnRuQ29uZmlybS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgIH1cbn1cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogUm9vdFN0YXRlKSA9PiAoe1xuICAgIHVzZXI6IHN0YXRlLnVzZXIsXG4gICAgZGVlcGxpbmtzOiBzdGF0ZS5kZWVwbGlua3MsXG59KVxuY29uc3QgbWFwRGlzcGF0Y2hUb0FjdGlvbiA9IChkaXNwYXRjaDogQXBwRGlzcGF0Y2gpID0+ICh7XG4gICAgcHVzaFBhZ2U6IChwYXlsb2FkOiBFQXBwUGFnZXMgfCBJUGFnZVdpdGhFZmZlY3QpID0+XG4gICAgICAgIGRpc3BhdGNoKHB1c2hQYWdlKHBheWxvYWQpKSxcbiAgICBwb3BQYWdlOiAoKSA9PiBkaXNwYXRjaChwb3BQYWdlKCkpLFxuICAgIHB1c2hQb3B1cDogKHBheWxvYWQ6IEVBcHBQb3B1cHMpID0+IGRpc3BhdGNoKHB1c2hQb3B1cChwYXlsb2FkKSksXG59KVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9BY3Rpb24pKFBhZ2VTYXZlbm93KSJdfQ==