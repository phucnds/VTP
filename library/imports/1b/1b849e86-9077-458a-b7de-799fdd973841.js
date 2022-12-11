"use strict";
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