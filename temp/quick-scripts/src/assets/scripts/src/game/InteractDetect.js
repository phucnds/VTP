"use strict";
cc._RF.push(module, 'c09aa/T7pBB84U8TWYsD4pU', 'InteractDetect');
// scripts/src/game/InteractDetect.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.InteractDetection = void 0;
var SingletonNode_1 = require("../../utils/SingletonNode");
var connect_1 = require("../app/connect");
var store_1 = require("../app/store");
var GameDefine_1 = require("../common/GameDefine");
var SliceApp_1 = require("../features/SliceApp");
var SliceError_1 = require("../features/SliceError");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var InteractDetection = /** @class */ (function (_super) {
    __extends(InteractDetection, _super);
    function InteractDetection() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.idleCountDown = GameDefine_1.default.IDLE_TIMEOUT;
        _this.isPopupShown = false;
        return _this;
    }
    InteractDetection.prototype.onLoad = function () {
        this.initDetectInteraction();
    };
    InteractDetection.prototype.initDetectInteraction = function () {
        var _this = this;
        cc.find("Canvas").on(cc.Node.EventType.TOUCH_START, function (event) {
            _this.idleCountDown = GameDefine_1.default.IDLE_TIMEOUT;
        }, this, true);
        cc.find("Canvas").on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            _this.idleCountDown = GameDefine_1.default.IDLE_TIMEOUT;
        }, this, true);
        cc.find("Canvas").on(cc.Node.EventType.TOUCH_END, function (event) {
            _this.idleCountDown = GameDefine_1.default.IDLE_TIMEOUT;
        }, this, true);
    };
    InteractDetection.prototype.update = function (dt) {
        if (this.isPopupShown) {
            return;
        }
        this.idleCountDown -= dt;
        if (this.idleCountDown < 0) {
            store_1.default.dispatch(SliceApp_1.pushPopup(SliceApp_1.EAppPopups.PopupIdleTooLong));
            this.isPopupShown = true;
        }
    };
    InteractDetection.prototype.reset = function () {
        this.idleCountDown = GameDefine_1.default.IDLE_TIMEOUT;
    };
    return InteractDetection;
}(SingletonNode_1.default()));
exports.InteractDetection = InteractDetection;
var mapStateToProps = function (state) { return ({
    error: state.error
}); };
var mapDispatchToAction = function (dispatch) { return ({
    popPopup: function () { return dispatch(SliceApp_1.popPopup()); },
    popToPage: function (e) { return dispatch(SliceApp_1.popToPage(e)); },
    refreshError: function () { return dispatch(SliceError_1.refreshError()); }
}); };
exports.default = connect_1.default(mapStateToProps, mapDispatchToAction)(InteractDetection);

cc._RF.pop();