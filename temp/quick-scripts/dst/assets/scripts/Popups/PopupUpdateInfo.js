
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Popups/PopupUpdateInfo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '90acbF0/KpHiLV+bp8Pj4F7', 'PopupUpdateInfo');
// scripts/Popups/PopupUpdateInfo.ts

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
var SliceDeeplinks_1 = require("../src/features/SliceDeeplinks");
var Popup_1 = require("./Popup");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopupUpdateInfo = /** @class */ (function (_super) {
    __extends(PopupUpdateInfo, _super);
    function PopupUpdateInfo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btnUpdateInfo = null;
        return _this;
    }
    PopupUpdateInfo.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.btnUpdateInfo.on(cc.Node.EventType.TOUCH_END, function () {
            SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
            store_1.default.dispatch(SliceApp_1.popPopup());
            store_1.default.dispatch(SliceApp_1.pushPage({ page: SliceApp_1.EAppPages.PageHome, effect: SliceApp_1.PAGE_SHOW_EFFECT.LEFT }));
            window.location.href = store_1.default.getState().deeplinks.data[SliceDeeplinks_1.DeeplinkTypesToName[SliceDeeplinks_1.EDeeplinkTypes.XAC_THUC_THONG_TIN]];
        });
    };
    PopupUpdateInfo.prototype.init = function (amount, price) {
        this.amount = amount;
        this.price = price;
    };
    __decorate([
        property(cc.Node)
    ], PopupUpdateInfo.prototype, "btnUpdateInfo", void 0);
    PopupUpdateInfo = __decorate([
        ccclass
    ], PopupUpdateInfo);
    return PopupUpdateInfo;
}(Popup_1.default));
exports.default = PopupUpdateInfo;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BvcHVwcy9Qb3B1cFVwZGF0ZUluZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsK0NBQTBDO0FBQzFDLDBDQUFxQztBQUNyQyxxREFBdUc7QUFDdkcsaUVBQXFGO0FBRXJGLGlDQUE0QjtBQUd0QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE2QyxtQ0FBSztJQUFsRDtRQUFBLHFFQXNCQztRQXBCRyxtQkFBYSxHQUFZLElBQUksQ0FBQzs7SUFvQmxDLENBQUM7SUFmRyxnQ0FBTSxHQUFOO1FBQ0ksaUJBQU0sTUFBTSxXQUFFLENBQUM7UUFFZixJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUU7WUFDL0Msa0JBQVEsQ0FBQyxPQUFPLENBQUMsa0JBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDL0MsZUFBSyxDQUFDLFFBQVEsQ0FBQyxtQkFBUSxFQUFFLENBQUMsQ0FBQTtZQUMxQixlQUFLLENBQUMsUUFBUSxDQUFDLG1CQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsb0JBQVMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLDJCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN0RixNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxlQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxvQ0FBbUIsQ0FBQywrQkFBYyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztRQUNuSCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSw4QkFBSSxHQUFYLFVBQVksTUFBYyxFQUFFLEtBQWE7UUFDckMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQW5CRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBEQUNZO0lBRmIsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQXNCbkM7SUFBRCxzQkFBQztDQXRCRCxBQXNCQyxDQXRCNEMsZUFBSyxHQXNCakQ7a0JBdEJvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBTb3VuZE1nciBmcm9tIFwiLi4vY29tbW9uL1NvdW5kTWdyXCI7XG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4uL3NyYy9hcHAvc3RvcmVcIjtcbmltcG9ydCB7IEVBcHBQYWdlcywgRUFwcFBvcHVwcywgUEFHRV9TSE9XX0VGRkVDVCwgcG9wUG9wdXAsIHB1c2hQYWdlIH0gZnJvbSBcIi4uL3NyYy9mZWF0dXJlcy9TbGljZUFwcFwiO1xuaW1wb3J0IHsgRGVlcGxpbmtUeXBlc1RvTmFtZSwgRURlZXBsaW5rVHlwZXMgfSBmcm9tIFwiLi4vc3JjL2ZlYXR1cmVzL1NsaWNlRGVlcGxpbmtzXCI7XG5pbXBvcnQgSGVscGVyIGZyb20gXCIuLi91dGlscy9IZWxwZXJcIjtcbmltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cFwiO1xuXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFVwZGF0ZUluZm8gZXh0ZW5kcyBQb3B1cCB7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYnRuVXBkYXRlSW5mbzogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBwcml2YXRlIGFtb3VudDtcbiAgICBwcml2YXRlIHByaWNlO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBzdXBlci5vbkxvYWQoKTtcblxuICAgICAgICB0aGlzLmJ0blVwZGF0ZUluZm8ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoKSA9PiB7XG4gICAgICAgICAgICBTb3VuZE1nci5wbGF5U2Z4KFNvdW5kTWdyLkluc3RhbmNlLlNGWF9CVVRUT04pO1xuICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2gocG9wUG9wdXAoKSlcbiAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHB1c2hQYWdlKHsgcGFnZTogRUFwcFBhZ2VzLlBhZ2VIb21lLCBlZmZlY3Q6IFBBR0VfU0hPV19FRkZFQ1QuTEVGVCB9KSk7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHN0b3JlLmdldFN0YXRlKCkuZGVlcGxpbmtzLmRhdGFbRGVlcGxpbmtUeXBlc1RvTmFtZVtFRGVlcGxpbmtUeXBlcy5YQUNfVEhVQ19USE9OR19USU5dXTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGluaXQoYW1vdW50OiBzdHJpbmcsIHByaWNlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5hbW91bnQgPSBhbW91bnQ7XG4gICAgICAgIHRoaXMucHJpY2UgPSBwcmljZTtcbiAgICB9XG59XG4iXX0=