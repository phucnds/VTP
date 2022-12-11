"use strict";
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