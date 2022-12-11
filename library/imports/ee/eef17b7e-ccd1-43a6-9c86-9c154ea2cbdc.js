"use strict";
cc._RF.push(module, 'eef17t+zNFDppyGnBVOosvc', 'LoginProgressBar');
// scripts/src/game/LoginProgressBar.ts

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
exports.LoginProgressBar = void 0;
var R = require("ramda");
var FrameMgr_1 = require("../../common/FrameMgr");
var connect_1 = require("../app/connect");
var SliceApp_1 = require("../features/SliceApp");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LoginProgressBar = /** @class */ (function (_super) {
    __extends(LoginProgressBar, _super);
    function LoginProgressBar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.descriptionTxt = null;
        _this.icon = null;
        _this.progressBar = null;
        return _this;
    }
    LoginProgressBar.prototype.onLoad = function () {
        this.onStateChange();
    };
    LoginProgressBar.prototype.onStateChange = function () {
        var loginStreak = R.prop('loginStreak', this.props.login);
        var milestones = R.prop('milestones', this.props.login);
        var keys = R.keys(milestones);
        var values = R.values(milestones);
        var reachedMilestone = R.pipe(R.values, R.findLastIndex(function (milestone) { return Number(loginStreak) - 1 >= milestone; }), function (i) { var _a; return (_a = keys[i]) === null || _a === void 0 ? void 0 : _a.toString(); })(milestones || {});
        var level = R.pipe(R.split('_'), R.last, function (levelStr) {
            var level = Number(levelStr);
            return level <= 5 ? level : 5;
        })(reachedMilestone || '');
        if (loginStreak <= 0) {
            this.icon.node.active = false;
        }
        else if (loginStreak < R.last(values)) {
            var expToLevelUp = Number(values[level]) - Number(values[level - 1]);
            this.progressBar.progress = (loginStreak - values[level - 1]) / expToLevelUp;
            this.icon.node.active = true;
        }
        else {
            this.progressBar.progress = 1;
            this.icon.node.active = true;
        }
        this.descriptionTxt.string = R.replace('%s', loginStreak, '<color=#ffffff>Chuỗi đăng nhập </c><color=#FFE02D>%s</color><color=#ffffff> ngày</color>');
        this.icon.spriteFrame = level > 0 && FrameMgr_1.default.Instance["LOGIN_LEVEL_" + level];
    };
    __decorate([
        property(cc.RichText)
    ], LoginProgressBar.prototype, "descriptionTxt", void 0);
    __decorate([
        property(cc.Sprite)
    ], LoginProgressBar.prototype, "icon", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], LoginProgressBar.prototype, "progressBar", void 0);
    return LoginProgressBar;
}(cc.Component));
exports.LoginProgressBar = LoginProgressBar;
var mapStateToProps = function (state) { return ({
    login: state.login
}); };
var mapDispatchToAction = function (dispatch) { return ({
    pushPage: function (payload) {
        return dispatch(SliceApp_1.pushPage(payload));
    },
    popPage: function () { return dispatch(SliceApp_1.popPage()); },
    pushPopup: function (payload) { return dispatch(SliceApp_1.pushPopup(payload)); },
}); };
exports.default = connect_1.default(mapStateToProps, mapDispatchToAction)(LoginProgressBar);

cc._RF.pop();