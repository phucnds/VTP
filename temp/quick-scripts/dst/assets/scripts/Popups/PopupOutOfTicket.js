
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Popups/PopupOutOfTicket.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '94579Rh6YBDtaE/6sCRzJ1R', 'PopupOutOfTicket');
// scripts/Popups/PopupOutOfTicket.ts

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
var CompQuestsContainer_1 = require("../components/CompQuestsContainer");
var store_1 = require("../src/app/store");
var SliceApp_1 = require("../src/features/SliceApp");
var Popup_1 = require("./Popup");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopupOutOfTicket = /** @class */ (function (_super) {
    __extends(PopupOutOfTicket, _super);
    function PopupOutOfTicket() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btnQuest = null;
        _this.btnBuy = null;
        return _this;
    }
    PopupOutOfTicket.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.btnQuest.on(cc.Node.EventType.TOUCH_END, function () {
            SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
            store_1.default.dispatch(SliceApp_1.popPopup());
            CompQuestsContainer_1.CompQuestsContainer.Instance.Open();
        });
        this.btnBuy.on(cc.Node.EventType.TOUCH_END, function () {
            SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
            store_1.default.dispatch(SliceApp_1.popPopup());
            store_1.default.dispatch(SliceApp_1.pushPage({ page: SliceApp_1.EAppPages.PageBuyTurn, effect: SliceApp_1.PAGE_SHOW_EFFECT.LEFT }));
        });
    };
    __decorate([
        property(cc.Node)
    ], PopupOutOfTicket.prototype, "btnQuest", void 0);
    __decorate([
        property(cc.Node)
    ], PopupOutOfTicket.prototype, "btnBuy", void 0);
    PopupOutOfTicket = __decorate([
        ccclass
    ], PopupOutOfTicket);
    return PopupOutOfTicket;
}(Popup_1.default));
exports.default = PopupOutOfTicket;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BvcHVwcy9Qb3B1cE91dE9mVGlja2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLCtDQUEwQztBQUMxQyx5RUFBd0U7QUFDeEUsMENBQXFDO0FBQ3JDLHFEQUEyRjtBQUUzRixpQ0FBNEI7QUFFdEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBOEMsb0NBQUs7SUFBbkQ7UUFBQSxxRUFxQkM7UUFsQlUsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixZQUFNLEdBQVksSUFBSSxDQUFDOztJQWdCbEMsQ0FBQztJQWRVLGlDQUFNLEdBQWI7UUFDSSxpQkFBTSxNQUFNLFdBQUUsQ0FBQztRQUVmLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRTtZQUMxQyxrQkFBUSxDQUFDLE9BQU8sQ0FBQyxrQkFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMvQyxlQUFLLENBQUMsUUFBUSxDQUFDLG1CQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQzNCLHlDQUFtQixDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRTtZQUN4QyxrQkFBUSxDQUFDLE9BQU8sQ0FBQyxrQkFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMvQyxlQUFLLENBQUMsUUFBUSxDQUFDLG1CQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQzNCLGVBQUssQ0FBQyxRQUFRLENBQUMsbUJBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxvQkFBUyxDQUFDLFdBQVcsRUFBRSxNQUFNLEVBQUUsMkJBQWdCLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQzVGLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQWpCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NEQUNjO0lBRWhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQ1k7SUFMYixnQkFBZ0I7UUFEcEMsT0FBTztPQUNhLGdCQUFnQixDQXFCcEM7SUFBRCx1QkFBQztDQXJCRCxBQXFCQyxDQXJCNkMsZUFBSyxHQXFCbEQ7a0JBckJvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IFNvdW5kTWdyIGZyb20gXCIuLi9jb21tb24vU291bmRNZ3JcIjtcbmltcG9ydCB7IENvbXBRdWVzdHNDb250YWluZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db21wUXVlc3RzQ29udGFpbmVyXCI7XG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4uL3NyYy9hcHAvc3RvcmVcIjtcbmltcG9ydCB7IEVBcHBQYWdlcywgUEFHRV9TSE9XX0VGRkVDVCwgcG9wUG9wdXAsIHB1c2hQYWdlIH0gZnJvbSBcIi4uL3NyYy9mZWF0dXJlcy9TbGljZUFwcFwiO1xuaW1wb3J0IEhlbHBlciBmcm9tIFwiLi4vdXRpbHMvSGVscGVyXCI7XG5pbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXBcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwT3V0T2ZUaWNrZXQgZXh0ZW5kcyBQb3B1cCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwdWJsaWMgYnRuUXVlc3Q6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHB1YmxpYyBidG5CdXk6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgcHVibGljIG9uTG9hZCgpIHtcbiAgICAgICAgc3VwZXIub25Mb2FkKCk7XG5cbiAgICAgICAgdGhpcy5idG5RdWVzdC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsICgpID0+IHtcbiAgICAgICAgICAgIFNvdW5kTWdyLnBsYXlTZngoU291bmRNZ3IuSW5zdGFuY2UuU0ZYX0JVVFRPTik7XG4gICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChwb3BQb3B1cCgpKTtcbiAgICAgICAgICAgIENvbXBRdWVzdHNDb250YWluZXIuSW5zdGFuY2UuT3BlbigpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5idG5CdXkub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoKSA9PiB7XG4gICAgICAgICAgICBTb3VuZE1nci5wbGF5U2Z4KFNvdW5kTWdyLkluc3RhbmNlLlNGWF9CVVRUT04pO1xuICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2gocG9wUG9wdXAoKSk7XG4gICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChwdXNoUGFnZSh7IHBhZ2U6IEVBcHBQYWdlcy5QYWdlQnV5VHVybiwgZWZmZWN0OiBQQUdFX1NIT1dfRUZGRUNULkxFRlQgfSkpXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==