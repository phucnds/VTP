
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Popups/PopupSpinSuccess.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cc1162tzupKQZu+5cEYdpZU', 'PopupSpinSuccess');
// scripts/Popups/PopupSpinSuccess.ts

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
var SoundMgr_1 = require("../common/SoundMgr");
var store_1 = require("../src/app/store");
var SliceApp_1 = require("../src/features/SliceApp");
var Popup_1 = require("./Popup");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopupSpinSuccess = /** @class */ (function (_super) {
    __extends(PopupSpinSuccess, _super);
    function PopupSpinSuccess() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btnView = null;
        return _this;
    }
    PopupSpinSuccess.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.btnView.on(cc.Node.EventType.TOUCH_END, function () {
            SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
            store_1.default.dispatch(SliceApp_1.popPopup());
            store_1.default.dispatch(SliceApp_1.pushPopup(SliceApp_1.EAppPopups.PopupReward));
        });
    };
    PopupSpinSuccess.prototype.onDisable = function () {
    };
    __decorate([
        property(cc.Node)
    ], PopupSpinSuccess.prototype, "btnView", void 0);
    PopupSpinSuccess = __decorate([
        ccclass
    ], PopupSpinSuccess);
    return PopupSpinSuccess;
}(Popup_1.default));
exports.default = PopupSpinSuccess;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BvcHVwcy9Qb3B1cFNwaW5TdWNjZXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLCtDQUEwQztBQUUxQywwQ0FBcUM7QUFDckMscURBQWtIO0FBRWxILGlDQUE0QjtBQUV0QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE4QyxvQ0FBSztJQUFuRDtRQUFBLHFFQWlCQztRQWRVLGFBQU8sR0FBWSxJQUFJLENBQUM7O0lBY25DLENBQUM7SUFaVSxpQ0FBTSxHQUFiO1FBQ0ksaUJBQU0sTUFBTSxXQUFFLENBQUM7UUFFZixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUU7WUFDekMsa0JBQVEsQ0FBQyxPQUFPLENBQUMsa0JBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDL0MsZUFBSyxDQUFDLFFBQVEsQ0FBQyxtQkFBUSxFQUFFLENBQUMsQ0FBQztZQUMzQixlQUFLLENBQUMsUUFBUSxDQUFDLG9CQUFTLENBQUMscUJBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ3RELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVTLG9DQUFTLEdBQW5CO0lBQ0EsQ0FBQztJQWJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7cURBQ2E7SUFIZCxnQkFBZ0I7UUFEcEMsT0FBTztPQUNhLGdCQUFnQixDQWlCcEM7SUFBRCx1QkFBQztDQWpCRCxBQWlCQyxDQWpCNkMsZUFBSyxHQWlCbEQ7a0JBakJvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IFNvdW5kTWdyIGZyb20gXCIuLi9jb21tb24vU291bmRNZ3JcIjtcbmltcG9ydCB7IENvbXBRdWVzdHNDb250YWluZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db21wUXVlc3RzQ29udGFpbmVyXCI7XG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4uL3NyYy9hcHAvc3RvcmVcIjtcbmltcG9ydCB7IEVBcHBQYWdlcywgRUFwcFBvcHVwcywgUEFHRV9TSE9XX0VGRkVDVCwgcG9wUG9wdXAsIHB1c2hQYWdlLCBwdXNoUG9wdXAgfSBmcm9tIFwiLi4vc3JjL2ZlYXR1cmVzL1NsaWNlQXBwXCI7XG5pbXBvcnQgSGVscGVyIGZyb20gXCIuLi91dGlscy9IZWxwZXJcIjtcbmltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cFwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBTcGluU3VjY2VzcyBleHRlbmRzIFBvcHVwIHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHB1YmxpYyBidG5WaWV3OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIHB1YmxpYyBvbkxvYWQoKSB7XG4gICAgICAgIHN1cGVyLm9uTG9hZCgpO1xuXG4gICAgICAgIHRoaXMuYnRuVmlldy5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsICgpID0+IHtcbiAgICAgICAgICAgIFNvdW5kTWdyLnBsYXlTZngoU291bmRNZ3IuSW5zdGFuY2UuU0ZYX0JVVFRPTik7XG4gICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChwb3BQb3B1cCgpKTtcbiAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHB1c2hQb3B1cChFQXBwUG9wdXBzLlBvcHVwUmV3YXJkKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkRpc2FibGUoKTogdm9pZCB7XG4gICAgfVxufVxuIl19