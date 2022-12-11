"use strict";
cc._RF.push(module, '5648aPNPDhA/rMuYB5dKQiC', 'FixedBlurText');
// scripts/common/FixedBlurText.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FixedBlurText = /** @class */ (function (_super) {
    __extends(FixedBlurText, _super);
    function FixedBlurText() {
        // LIFE-CYCLE CALLBACKS:
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // onLoad () {}
        _this.SCALE_RATIO_TO_FIXED_BLUR = 2;
        _this.label = null;
        return _this;
        // update (dt) {}
    }
    FixedBlurText.prototype.start = function () {
        this.label = this.getComponent(cc.Label);
        if (!this.label)
            return;
        if (this.node.scaleX < 1) {
            var ratio = 1 / (this.node.scaleX);
            this.node.scaleX = 1;
            this.node.scaleY = 1;
            this.label.fontSize /= ratio;
            this.label.lineHeight /= ratio;
            if (this.label.overflow == cc.Label.Overflow.SHRINK) {
                this.node.height /= ratio;
                this.node.width /= ratio;
            }
        }
        if (this.node.scaleX == 1) {
            if (this.label.overflow == cc.Label.Overflow.SHRINK || this.label.overflow == cc.Label.Overflow.RESIZE_HEIGHT) {
                this.node.height *= this.SCALE_RATIO_TO_FIXED_BLUR;
                this.node.width *= this.SCALE_RATIO_TO_FIXED_BLUR;
            }
            this.label.fontSize *= this.SCALE_RATIO_TO_FIXED_BLUR;
            this.label.lineHeight *= this.SCALE_RATIO_TO_FIXED_BLUR;
            this.node.scaleX /= this.SCALE_RATIO_TO_FIXED_BLUR;
            this.node.scaleY /= this.SCALE_RATIO_TO_FIXED_BLUR;
        }
        try {
            this.node.parent.getComponent(cc.Layout).updateLayout();
            this.node.getComponent(cc.Layout).updateLayout();
        }
        catch (_a) {
        }
    };
    FixedBlurText = __decorate([
        ccclass
    ], FixedBlurText);
    return FixedBlurText;
}(cc.Component));
exports.default = FixedBlurText;

cc._RF.pop();