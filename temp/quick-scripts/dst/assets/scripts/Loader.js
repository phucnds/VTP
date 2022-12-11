
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Loader.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1b8496GkHdFirfeeZ/dlzhB', 'Loader');
// scripts/Loader.ts

"use strict";
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
cc.macro.ENABLE_WEBGL_ANTIALIAS = true;
// cc.macro.CLEANUP_IMAGE_CACHE = false;
// cc.dynamicAtlasManager.enabled = true;
// cc.dynamicAtlasManager.maxFrameSize = 512;
// window.dynamicAtlast = cc.dynamicAtlasManager
var Loader = /** @class */ (function (_super) {
    __extends(Loader, _super);
    function Loader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.SystemPrefabs = [];
        _this.PlaceHolderPrefabs = [];
        return _this;
    }
    Loader.prototype.onLoad = function () {
        // cc.game.setFrameRate(60);
        for (var i = 0; i < this.SystemPrefabs.length; i++) {
            this.SystemPrefabs[i] && this.node.addChild(cc.instantiate(this.SystemPrefabs[i]));
        }
        for (var i = 0; i < this.PlaceHolderPrefabs.length; i++) {
            this.PlaceHolderPrefabs[i] && this.node.addChild(cc.instantiate(this.PlaceHolderPrefabs[i]));
        }
    };
    __decorate([
        property(cc.Prefab)
    ], Loader.prototype, "SystemPrefabs", void 0);
    __decorate([
        property(cc.Prefab)
    ], Loader.prototype, "PlaceHolderPrefabs", void 0);
    Loader = __decorate([
        ccclass
    ], Loader);
    return Loader;
}(cc.Component));
exports.default = Loader;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0xvYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QyxFQUFFLENBQUMsS0FBSyxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQztBQUV2Qyx3Q0FBd0M7QUFDeEMseUNBQXlDO0FBQ3pDLDZDQUE2QztBQUM3QyxnREFBZ0Q7QUFFaEQ7SUFBb0MsMEJBQVk7SUFBaEQ7UUFBQSxxRUFhQztRQVpnQyxtQkFBYSxHQUFxQixFQUFFLENBQUM7UUFDckMsd0JBQWtCLEdBQXFCLEVBQUUsQ0FBQzs7SUFXM0UsQ0FBQztJQVRHLHVCQUFNLEdBQU47UUFDSSw0QkFBNEI7UUFDNUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2hELElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN0RjtRQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3JELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDaEc7SUFDTCxDQUFDO0lBWG9CO1FBQXBCLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2lEQUE4QztJQUM3QztRQUFwQixRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztzREFBbUQ7SUFGdEQsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQWExQjtJQUFELGFBQUM7Q0FiRCxBQWFDLENBYm1DLEVBQUUsQ0FBQyxTQUFTLEdBYS9DO2tCQWJvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0b3JlIGZyb20gXCIuL3NyYy9hcHAvc3RvcmVcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuY2MubWFjcm8uRU5BQkxFX1dFQkdMX0FOVElBTElBUyA9IHRydWU7XG5cbi8vIGNjLm1hY3JvLkNMRUFOVVBfSU1BR0VfQ0FDSEUgPSBmYWxzZTtcbi8vIGNjLmR5bmFtaWNBdGxhc01hbmFnZXIuZW5hYmxlZCA9IHRydWU7XG4vLyBjYy5keW5hbWljQXRsYXNNYW5hZ2VyLm1heEZyYW1lU2l6ZSA9IDUxMjtcbi8vIHdpbmRvdy5keW5hbWljQXRsYXN0ID0gY2MuZHluYW1pY0F0bGFzTWFuYWdlclxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYikgcHJpdmF0ZSBTeXN0ZW1QcmVmYWJzOiBBcnJheTxjYy5QcmVmYWI+ID0gW107XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYikgcHJpdmF0ZSBQbGFjZUhvbGRlclByZWZhYnM6IEFycmF5PGNjLlByZWZhYj4gPSBbXTtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgLy8gY2MuZ2FtZS5zZXRGcmFtZVJhdGUoNjApO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuU3lzdGVtUHJlZmFicy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5TeXN0ZW1QcmVmYWJzW2ldICYmIHRoaXMubm9kZS5hZGRDaGlsZChjYy5pbnN0YW50aWF0ZSh0aGlzLlN5c3RlbVByZWZhYnNbaV0pKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuUGxhY2VIb2xkZXJQcmVmYWJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLlBsYWNlSG9sZGVyUHJlZmFic1tpXSAmJiB0aGlzLm5vZGUuYWRkQ2hpbGQoY2MuaW5zdGFudGlhdGUodGhpcy5QbGFjZUhvbGRlclByZWZhYnNbaV0pKTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=