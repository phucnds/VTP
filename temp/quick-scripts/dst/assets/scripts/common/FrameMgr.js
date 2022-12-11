
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/common/FrameMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2af42k1WypJMIZ/nsc3uFll', 'FrameMgr');
// scripts/common/FrameMgr.ts

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
var SingletonNode_1 = require("../utils/SingletonNode");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FrameMgr = /** @class */ (function (_super) {
    __extends(FrameMgr, _super);
    function FrameMgr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Login
        _this.LOGIN_LEVEL_1 = null;
        _this.LOGIN_LEVEL_2 = null;
        _this.LOGIN_LEVEL_3 = null;
        _this.LOGIN_LEVEL_4 = null;
        _this.LOGIN_LEVEL_5 = null;
        // Reward
        _this.REWARD_COIN = null;
        _this.REWARD_EMONEY = null;
        _this.REWARD_VOUCHER = null;
        _this.REWARD_TURN = null;
        // Buttons
        _this.BUTTON_GOLD_SELECTED = null;
        _this.BUTTON_GOLD = null;
        // Popup titles
        _this.POPUP_TITLE_SUCCESS = null;
        _this.POPUP_TITLE_FAILED = null;
        _this.POPUP_TITLE_NOTI = null;
        _this.POPUP_TITLE_WEEKLY_TICKET = null;
        // UI
        _this.ICON_SOUND = null;
        _this.ICON_SOUND_OFF = null;
        // Gifts
        _this.GIFT_FRAMES = [];
        return _this;
    }
    __decorate([
        property(cc.SpriteFrame)
    ], FrameMgr.prototype, "LOGIN_LEVEL_1", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], FrameMgr.prototype, "LOGIN_LEVEL_2", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], FrameMgr.prototype, "LOGIN_LEVEL_3", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], FrameMgr.prototype, "LOGIN_LEVEL_4", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], FrameMgr.prototype, "LOGIN_LEVEL_5", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], FrameMgr.prototype, "REWARD_COIN", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], FrameMgr.prototype, "REWARD_EMONEY", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], FrameMgr.prototype, "REWARD_VOUCHER", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], FrameMgr.prototype, "REWARD_TURN", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], FrameMgr.prototype, "BUTTON_GOLD_SELECTED", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], FrameMgr.prototype, "BUTTON_GOLD", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], FrameMgr.prototype, "POPUP_TITLE_SUCCESS", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], FrameMgr.prototype, "POPUP_TITLE_FAILED", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], FrameMgr.prototype, "POPUP_TITLE_NOTI", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], FrameMgr.prototype, "POPUP_TITLE_WEEKLY_TICKET", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], FrameMgr.prototype, "ICON_SOUND", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], FrameMgr.prototype, "ICON_SOUND_OFF", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], FrameMgr.prototype, "GIFT_FRAMES", void 0);
    FrameMgr = __decorate([
        ccclass
    ], FrameMgr);
    return FrameMgr;
}(SingletonNode_1.default()));
exports.default = FrameMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NvbW1vbi9GcmFtZU1nci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRix3REFBbUQ7QUFFN0MsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQXlCO0lBQS9EO1FBQUEscUVBOEJDO1FBN0JHLFFBQVE7UUFDa0IsbUJBQWEsR0FBbUIsSUFBSSxDQUFBO1FBQ3BDLG1CQUFhLEdBQW1CLElBQUksQ0FBQTtRQUNwQyxtQkFBYSxHQUFtQixJQUFJLENBQUE7UUFDcEMsbUJBQWEsR0FBbUIsSUFBSSxDQUFBO1FBQ3BDLG1CQUFhLEdBQW1CLElBQUksQ0FBQTtRQUU5RCxTQUFTO1FBQ2lCLGlCQUFXLEdBQW1CLElBQUksQ0FBQTtRQUNsQyxtQkFBYSxHQUFtQixJQUFJLENBQUE7UUFDcEMsb0JBQWMsR0FBbUIsSUFBSSxDQUFBO1FBQ3JDLGlCQUFXLEdBQW1CLElBQUksQ0FBQTtRQUU1RCxVQUFVO1FBQ2dCLDBCQUFvQixHQUFtQixJQUFJLENBQUE7UUFDM0MsaUJBQVcsR0FBbUIsSUFBSSxDQUFBO1FBRTVELGVBQWU7UUFDVyx5QkFBbUIsR0FBbUIsSUFBSSxDQUFBO1FBQzFDLHdCQUFrQixHQUFtQixJQUFJLENBQUE7UUFDekMsc0JBQWdCLEdBQW1CLElBQUksQ0FBQTtRQUN2QywrQkFBeUIsR0FBbUIsSUFBSSxDQUFBO1FBRTFFLEtBQUs7UUFDcUIsZ0JBQVUsR0FBbUIsSUFBSSxDQUFBO1FBQ2pDLG9CQUFjLEdBQW1CLElBQUksQ0FBQTtRQUUvRCxRQUFRO1FBQ2tCLGlCQUFXLEdBQXFCLEVBQUUsQ0FBQTs7SUFDaEUsQ0FBQztJQTVCNkI7UUFBekIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7bURBQXFDO0lBQ3BDO1FBQXpCLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO21EQUFxQztJQUNwQztRQUF6QixRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzttREFBcUM7SUFDcEM7UUFBekIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7bURBQXFDO0lBQ3BDO1FBQXpCLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO21EQUFxQztJQUdwQztRQUF6QixRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztpREFBbUM7SUFDbEM7UUFBekIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7bURBQXFDO0lBQ3BDO1FBQXpCLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO29EQUFzQztJQUNyQztRQUF6QixRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztpREFBbUM7SUFHbEM7UUFBekIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7MERBQTRDO0lBQzNDO1FBQXpCLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO2lEQUFtQztJQUdsQztRQUF6QixRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzt5REFBMkM7SUFDMUM7UUFBekIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7d0RBQTBDO0lBQ3pDO1FBQXpCLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3NEQUF3QztJQUN2QztRQUF6QixRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzsrREFBaUQ7SUFHaEQ7UUFBekIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7Z0RBQWtDO0lBQ2pDO1FBQXpCLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO29EQUFzQztJQUdyQztRQUF6QixRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztpREFBbUM7SUE3QjNDLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E4QjVCO0lBQUQsZUFBQztDQTlCRCxBQThCQyxDQTlCcUMsdUJBQWEsRUFBWSxHQThCOUQ7a0JBOUJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBTaW5nbGV0b25Ob2RlIGZyb20gXCIuLi91dGlscy9TaW5nbGV0b25Ob2RlXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmFtZU1nciBleHRlbmRzIFNpbmdsZXRvbk5vZGU8RnJhbWVNZ3I+KCkge1xuICAgIC8vIExvZ2luXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKSBMT0dJTl9MRVZFTF8xOiBjYy5TcHJpdGVGcmFtZSA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpIExPR0lOX0xFVkVMXzI6IGNjLlNwcml0ZUZyYW1lID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSkgTE9HSU5fTEVWRUxfMzogY2MuU3ByaXRlRnJhbWUgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKSBMT0dJTl9MRVZFTF80OiBjYy5TcHJpdGVGcmFtZSA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpIExPR0lOX0xFVkVMXzU6IGNjLlNwcml0ZUZyYW1lID0gbnVsbFxuXG4gICAgLy8gUmV3YXJkXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKSBSRVdBUkRfQ09JTjogY2MuU3ByaXRlRnJhbWUgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKSBSRVdBUkRfRU1PTkVZOiBjYy5TcHJpdGVGcmFtZSA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpIFJFV0FSRF9WT1VDSEVSOiBjYy5TcHJpdGVGcmFtZSA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpIFJFV0FSRF9UVVJOOiBjYy5TcHJpdGVGcmFtZSA9IG51bGxcblxuICAgIC8vIEJ1dHRvbnNcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpIEJVVFRPTl9HT0xEX1NFTEVDVEVEOiBjYy5TcHJpdGVGcmFtZSA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpIEJVVFRPTl9HT0xEOiBjYy5TcHJpdGVGcmFtZSA9IG51bGxcblxuICAgIC8vIFBvcHVwIHRpdGxlc1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSkgUE9QVVBfVElUTEVfU1VDQ0VTUzogY2MuU3ByaXRlRnJhbWUgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKSBQT1BVUF9USVRMRV9GQUlMRUQ6IGNjLlNwcml0ZUZyYW1lID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSkgUE9QVVBfVElUTEVfTk9USTogY2MuU3ByaXRlRnJhbWUgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKSBQT1BVUF9USVRMRV9XRUVLTFlfVElDS0VUOiBjYy5TcHJpdGVGcmFtZSA9IG51bGxcblxuICAgIC8vIFVJXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKSBJQ09OX1NPVU5EOiBjYy5TcHJpdGVGcmFtZSA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpIElDT05fU09VTkRfT0ZGOiBjYy5TcHJpdGVGcmFtZSA9IG51bGxcblxuICAgIC8vIEdpZnRzXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKSBHSUZUX0ZSQU1FUzogY2MuU3ByaXRlRnJhbWVbXSA9IFtdXG59XG4iXX0=