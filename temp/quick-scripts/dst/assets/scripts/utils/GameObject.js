
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/utils/GameObject.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ac648lWW65FVL6lqaVqOgIb', 'GameObject');
// scripts/utils/GameObject.ts

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
var GameObject = /** @class */ (function (_super) {
    __extends(GameObject, _super);
    function GameObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameObject.prototype.onLoad = function () {
    };
    GameObject.prototype.onDisable = function () {
    };
    GameObject.prototype.load = function () {
    };
    GameObject.prototype.kill = function () {
        // this.node.active = false;
    };
    GameObject = __decorate([
        ccclass
    ], GameObject);
    return GameObject;
}(cc.Component));
exports.default = GameObject;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3V0aWxzL0dhbWVPYmplY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVk7SUFBcEQ7O0lBaUJBLENBQUM7SUFmRywyQkFBTSxHQUFOO0lBR0EsQ0FBQztJQUNELDhCQUFTLEdBQVQ7SUFHQSxDQUFDO0lBQ0QseUJBQUksR0FBSjtJQUVBLENBQUM7SUFFRCx5QkFBSSxHQUFKO1FBQ0ksNEJBQTRCO0lBQ2hDLENBQUM7SUFoQmdCLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0FpQjlCO0lBQUQsaUJBQUM7Q0FqQkQsQUFpQkMsQ0FqQnVDLEVBQUUsQ0FBQyxTQUFTLEdBaUJuRDtrQkFqQm9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXZlbnRzIGZyb20gXCIuLi9jb21tb24vRXZlbnRzXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lT2JqZWN0IGV4dGVuZHMgY2MuQ29tcG9uZW50IFxue1xuICAgIG9uTG9hZCgpXG4gICAge1xuICAgICAgICBcbiAgICB9XG4gICAgb25EaXNhYmxlKClcbiAgICB7XG5cbiAgICB9XG4gICAgbG9hZCgpe1xuICAgICAgICBcbiAgICB9XG5cbiAgICBraWxsKCl7XG4gICAgICAgIC8vIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG59XG4iXX0=