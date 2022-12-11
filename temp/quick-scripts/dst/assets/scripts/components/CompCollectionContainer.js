
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/components/CompCollectionContainer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7c59btHNrpJm5IQNLEZ6iz6', 'CompCollectionContainer');
// scripts/components/CompCollectionContainer.ts

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
exports.CompCollectionContainer = void 0;
var SoundMgr_1 = require("../common/SoundMgr");
var connect_1 = require("../src/app/connect");
var SliceApp_1 = require("../src/features/SliceApp");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CompCollectionContainer = /** @class */ (function (_super) {
    __extends(CompCollectionContainer, _super);
    function CompCollectionContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btnSpin = null;
        return _this;
        // update (dt) {}
    }
    CompCollectionContainer.prototype.onLoad = function () {
        var _this = this;
        this.btnSpin.on(cc.Node.EventType.TOUCH_END, function () {
            SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
            _this.actions.pushPage({ page: SliceApp_1.EAppPages.PageHome, effect: SliceApp_1.PAGE_SHOW_EFFECT.LEFT });
        });
    };
    __decorate([
        property(cc.Node)
    ], CompCollectionContainer.prototype, "btnSpin", void 0);
    return CompCollectionContainer;
}(cc.Component));
exports.CompCollectionContainer = CompCollectionContainer;
var mapStateToProps = function (state) { return ({}); };
var mapDispatchToAction = function (dispatch) { return ({
    pushPage: function (payload) {
        return dispatch(SliceApp_1.pushPage(payload));
    },
    popPage: function () { return dispatch(SliceApp_1.popPage()); },
    pushPopup: function (payload) { return dispatch(SliceApp_1.pushPopup(payload)); },
}); };
exports.default = connect_1.default(mapStateToProps, mapDispatchToAction)(CompCollectionContainer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvQ29tcENvbGxlY3Rpb25Db250YWluZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLCtDQUEwQztBQUMxQyw4Q0FBeUM7QUFFekMscURBQWtJO0FBRTVILElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQTZDLDJDQUFZO0lBQXpEO1FBQUEscUVBZUM7UUFWVSxhQUFPLEdBQVksSUFBSSxDQUFDOztRQVMvQixpQkFBaUI7SUFDckIsQ0FBQztJQVJHLHdDQUFNLEdBQU47UUFBQSxpQkFLQztRQUpHLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRTtZQUN6QyxrQkFBUSxDQUFDLE9BQU8sQ0FBQyxrQkFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMvQyxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxvQkFBUyxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsMkJBQWdCLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUN2RixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFQRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzREQUNhO0lBVW5DLDhCQUFDO0NBZkQsQUFlQyxDQWY0QyxFQUFFLENBQUMsU0FBUyxHQWV4RDtBQWZZLDBEQUF1QjtBQWdCcEMsSUFBTSxlQUFlLEdBQUcsVUFBQyxLQUFnQixJQUFLLE9BQUEsQ0FBQyxFQUM5QyxDQUFDLEVBRDRDLENBQzVDLENBQUE7QUFDRixJQUFNLG1CQUFtQixHQUFHLFVBQUMsUUFBcUIsSUFBSyxPQUFBLENBQUM7SUFDcEQsUUFBUSxFQUFFLFVBQUMsT0FBb0M7UUFDM0MsT0FBQSxRQUFRLENBQUMsbUJBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUEzQixDQUEyQjtJQUMvQixPQUFPLEVBQUUsY0FBTSxPQUFBLFFBQVEsQ0FBQyxrQkFBTyxFQUFFLENBQUMsRUFBbkIsQ0FBbUI7SUFDbEMsU0FBUyxFQUFFLFVBQUMsT0FBbUIsSUFBSyxPQUFBLFFBQVEsQ0FBQyxvQkFBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQTVCLENBQTRCO0NBQ25FLENBQUMsRUFMcUQsQ0FLckQsQ0FBQTtBQUNGLGtCQUFlLGlCQUFPLENBQUMsZUFBZSxFQUFFLG1CQUFtQixDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgU291bmRNZ3IgZnJvbSBcIi4uL2NvbW1vbi9Tb3VuZE1nclwiO1xuaW1wb3J0IGNvbm5lY3QgZnJvbSBcIi4uL3NyYy9hcHAvY29ubmVjdFwiO1xuaW1wb3J0IHsgUm9vdFN0YXRlLCBBcHBEaXNwYXRjaCB9IGZyb20gXCIuLi9zcmMvYXBwL3N0b3JlXCI7XG5pbXBvcnQgeyBFQXBwUGFnZXMsIElQYWdlV2l0aEVmZmVjdCwgcHVzaFBhZ2UsIHBvcFBhZ2UsIEVBcHBQb3B1cHMsIHB1c2hQb3B1cCwgUEFHRV9TSE9XX0VGRkVDVCB9IGZyb20gXCIuLi9zcmMvZmVhdHVyZXMvU2xpY2VBcHBcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuZXhwb3J0IGNsYXNzIENvbXBDb2xsZWN0aW9uQ29udGFpbmVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBhY3Rpb25zOiBhbnk7XG4gICAgcHJvcHM6IGFueVxuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHVibGljIGJ0blNwaW46IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLmJ0blNwaW4ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoKSA9PiB7XG4gICAgICAgICAgICBTb3VuZE1nci5wbGF5U2Z4KFNvdW5kTWdyLkluc3RhbmNlLlNGWF9CVVRUT04pO1xuICAgICAgICAgICAgdGhpcy5hY3Rpb25zLnB1c2hQYWdlKHsgcGFnZTogRUFwcFBhZ2VzLlBhZ2VIb21lLCBlZmZlY3Q6IFBBR0VfU0hPV19FRkZFQ1QuTEVGVCB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogUm9vdFN0YXRlKSA9PiAoe1xufSlcbmNvbnN0IG1hcERpc3BhdGNoVG9BY3Rpb24gPSAoZGlzcGF0Y2g6IEFwcERpc3BhdGNoKSA9PiAoe1xuICAgIHB1c2hQYWdlOiAocGF5bG9hZDogRUFwcFBhZ2VzIHwgSVBhZ2VXaXRoRWZmZWN0KSA9PlxuICAgICAgICBkaXNwYXRjaChwdXNoUGFnZShwYXlsb2FkKSksXG4gICAgcG9wUGFnZTogKCkgPT4gZGlzcGF0Y2gocG9wUGFnZSgpKSxcbiAgICBwdXNoUG9wdXA6IChwYXlsb2FkOiBFQXBwUG9wdXBzKSA9PiBkaXNwYXRjaChwdXNoUG9wdXAocGF5bG9hZCkpLFxufSlcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvQWN0aW9uKShDb21wQ29sbGVjdGlvbkNvbnRhaW5lcikiXX0=