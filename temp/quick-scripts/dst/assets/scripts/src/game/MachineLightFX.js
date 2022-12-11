
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/src/game/MachineLightFX.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a3744XgT9lFYZl7Q0VYOh5D', 'MachineLightFX');
// scripts/src/game/MachineLightFX.ts

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
var SingletonNode_1 = require("../../utils/SingletonNode");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MachineLightFX = /** @class */ (function (_super) {
    __extends(MachineLightFX, _super);
    function MachineLightFX() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MachineLightFX.prototype.blink = function (speed) {
        for (var i = 0; i < this.node.childrenCount; i++) {
            var light = this.node.children[i];
            light.scale = 0;
            cc.tween(light)
                .delay(i / speed)
                .to(10 / speed, {
                scale: 1.7
            }, { easing: 'quadIn' })
                .to(10 / speed, {
                scale: 0
            }, { easing: 'quadIn' })
                .start();
        }
    };
    MachineLightFX = __decorate([
        ccclass
    ], MachineLightFX);
    return MachineLightFX;
}(SingletonNode_1.default()));
exports.default = MachineLightFX;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3NyYy9nYW1lL01hY2hpbmVMaWdodEZYLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDJEQUFzRDtBQUVoRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE0QyxrQ0FBK0I7SUFBM0U7O0lBd0JBLENBQUM7SUF2QkcsOEJBQUssR0FBTCxVQUFNLEtBQWE7UUFDZixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDOUMsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDaEIsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7aUJBQ1YsS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7aUJBQ2hCLEVBQUUsQ0FDQyxFQUFFLEdBQUcsS0FBSyxFQUNWO2dCQUNJLEtBQUssRUFBRSxHQUFHO2FBQ2IsRUFDRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsQ0FDdkI7aUJBQ0EsRUFBRSxDQUNDLEVBQUUsR0FBRyxLQUFLLEVBQ1Y7Z0JBQ0ksS0FBSyxFQUFFLENBQUM7YUFDWCxFQUNELEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxDQUN2QjtpQkFDQSxLQUFLLEVBQUUsQ0FBQztTQUNoQjtJQUNMLENBQUM7SUF2QmdCLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0F3QmxDO0lBQUQscUJBQUM7Q0F4QkQsQUF3QkMsQ0F4QjJDLHVCQUFhLEVBQWtCLEdBd0IxRTtrQkF4Qm9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2luZ2xldG9uIGZyb20gXCIuLi8uLi91dGlscy9TaW5nbGV0b25cIjtcbmltcG9ydCBTaW5nbGV0b25Ob2RlIGZyb20gXCIuLi8uLi91dGlscy9TaW5nbGV0b25Ob2RlXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWNoaW5lTGlnaHRGWCBleHRlbmRzIFNpbmdsZXRvbk5vZGU8TWFjaGluZUxpZ2h0Rlg+KCkge1xuICAgIGJsaW5rKHNwZWVkOiBudW1iZXIpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5vZGUuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBsaWdodCA9IHRoaXMubm9kZS5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGxpZ2h0LnNjYWxlID0gMDtcbiAgICAgICAgICAgIGNjLnR3ZWVuKGxpZ2h0KVxuICAgICAgICAgICAgICAgIC5kZWxheShpIC8gc3BlZWQpXG4gICAgICAgICAgICAgICAgLnRvKFxuICAgICAgICAgICAgICAgICAgICAxMCAvIHNwZWVkLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FsZTogMS43XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgZWFzaW5nOiAncXVhZEluJyB9XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC50byhcbiAgICAgICAgICAgICAgICAgICAgMTAgLyBzcGVlZCxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IDBcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBlYXNpbmc6ICdxdWFkSW4nIH1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=