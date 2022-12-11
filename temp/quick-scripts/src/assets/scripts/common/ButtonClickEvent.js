"use strict";
cc._RF.push(module, '4d452Utru9JvpZLQQqp5DvU', 'ButtonClickEvent');
// scripts/common/ButtonClickEvent.ts

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
var SoundMgr_1 = require("../common/SoundMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ButtonClickEvent = /** @class */ (function (_super) {
    __extends(ButtonClickEvent, _super);
    function ButtonClickEvent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ClickInterval = 0.5; //-1: one time click
        return _this;
    }
    Object.defineProperty(ButtonClickEvent.prototype, "Interactive", {
        get: function () { return this.mInteractive; },
        set: function (value) { this.mInteractive = value; },
        enumerable: false,
        configurable: true
    });
    ButtonClickEvent.prototype.registerEvent = function (callback) {
        // this.node.on(cc.Node.EventType.TOUCH_END, () => {
        var _this = this;
        //     this.onClick(callback);
        // });
        this.node.on(cc.Node.EventType.TOUCH_END, function () {
            _this.onClick(callback);
        }, this, true);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function () {
        }, this, true);
        this.node.on(cc.Node.EventType.TOUCH_END, function () {
        }, this, true);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, function () {
        }, this, true);
    };
    ButtonClickEvent.prototype.onEnable = function () {
        this.mInteractive = true;
        this.mTimer = this.ClickInterval;
    };
    ButtonClickEvent.prototype.update = function (dt) {
        if (this.ClickInterval != -1) {
            if (!this.mInteractive) {
                this.mTimer -= dt;
                if (this.mTimer < 0) {
                    this.mInteractive = true;
                    this.mTimer = this.ClickInterval;
                }
            }
        }
    };
    ButtonClickEvent.prototype.onClick = function (callback) {
        // SoundMgr.playSfx(SoundMgr.Instance.SFX_CLICK);
        if (!this.mInteractive) {
            return;
        }
        this.mInteractive = false;
        SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
        callback && callback();
    };
    __decorate([
        property(cc.Float)
    ], ButtonClickEvent.prototype, "ClickInterval", void 0);
    ButtonClickEvent = __decorate([
        ccclass
    ], ButtonClickEvent);
    return ButtonClickEvent;
}(cc.Component));
exports.default = ButtonClickEvent;

cc._RF.pop();