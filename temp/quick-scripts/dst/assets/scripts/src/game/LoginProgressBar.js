
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/src/game/LoginProgressBar.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3NyYy9nYW1lL0xvZ2luUHJvZ3Jlc3NCYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLHlCQUEwQjtBQUMxQixrREFBNkM7QUFDN0MsMENBQXFDO0FBRXJDLGlEQUE0RztBQUV0RyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUFzQyxvQ0FBWTtJQUFsRDtRQUFBLHFFQWlEQztRQTVDRyxvQkFBYyxHQUFnQixJQUFJLENBQUM7UUFFbkMsVUFBSSxHQUFjLElBQUksQ0FBQztRQUV2QixpQkFBVyxHQUFtQixJQUFJLENBQUM7O0lBd0N2QyxDQUFDO0lBdENHLGlDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7SUFDeEIsQ0FBQztJQUVELHdDQUFhLEdBQWI7UUFDSSxJQUFNLFdBQVcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQzNELElBQU0sVUFBVSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7UUFFekQsSUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNoQyxJQUFNLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3BDLElBQU0sZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FDM0IsQ0FBQyxDQUFDLE1BQU0sRUFDUixDQUFDLENBQUMsYUFBYSxDQUFD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LENBQUE7QUFDRixrQkFBZSxpQkFBTyxDQUFDLGVBQWUsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCBGcmFtZU1nciBmcm9tICcuLi8uLi9jb21tb24vRnJhbWVNZ3InO1xuaW1wb3J0IGNvbm5lY3QgZnJvbSBcIi4uL2FwcC9jb25uZWN0XCI7XG5pbXBvcnQgeyBSb290U3RhdGUsIEFwcERpc3BhdGNoIH0gZnJvbSBcIi4uL2FwcC9zdG9yZVwiO1xuaW1wb3J0IHsgRUFwcFBhZ2VzLCBJUGFnZVdpdGhFZmZlY3QsIHB1c2hQYWdlLCBwb3BQYWdlLCBFQXBwUG9wdXBzLCBwdXNoUG9wdXAgfSBmcm9tIFwiLi4vZmVhdHVyZXMvU2xpY2VBcHBcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuZXhwb3J0IGNsYXNzIExvZ2luUHJvZ3Jlc3NCYXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIGFjdGlvbnM6IGFueTtcbiAgICBwcm9wczogYW55XG5cbiAgICBAcHJvcGVydHkoY2MuUmljaFRleHQpXG4gICAgZGVzY3JpcHRpb25UeHQ6IGNjLlJpY2hUZXh0ID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIGljb246IGNjLlNwcml0ZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByb2dyZXNzQmFyKVxuICAgIHByb2dyZXNzQmFyOiBjYy5Qcm9ncmVzc0JhciA9IG51bGw7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMub25TdGF0ZUNoYW5nZSgpXG4gICAgfVxuXG4gICAgb25TdGF0ZUNoYW5nZSgpIHtcbiAgICAgICAgY29uc3QgbG9naW5TdHJlYWsgPSBSLnByb3AoJ2xvZ2luU3RyZWFrJywgdGhpcy5wcm9wcy5sb2dpbilcbiAgICAgICAgY29uc3QgbWlsZXN0b25lcyA9IFIucHJvcCgnbWlsZXN0b25lcycsIHRoaXMucHJvcHMubG9naW4pXG5cbiAgICAgICAgY29uc3Qga2V5cyA9IFIua2V5cyhtaWxlc3RvbmVzKTtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gUi52YWx1ZXMobWlsZXN0b25lcyk7XG4gICAgICAgIGNvbnN0IHJlYWNoZWRNaWxlc3RvbmUgPSBSLnBpcGUoXG4gICAgICAgICAgICBSLnZhbHVlcyxcbiAgICAgICAgICAgIFIuZmluZExhc3RJbmRleCgobWlsZXN0b25lOiBudW1iZXIpID0+IE51bWJlcihsb2dpblN0cmVhaykgLSAxID49IG1pbGVzdG9uZSksXG4gICAgICAgICAgICAoaSkgPT4ga2V5c1tpXT8udG9TdHJpbmcoKSxcbiAgICAgICAgKShtaWxlc3RvbmVzIHx8IHt9KVxuICAgICAgICBjb25zdCBsZXZlbCA9IFIucGlwZShcbiAgICAgICAgICAgIFIuc3BsaXQoJ18nKSxcbiAgICAgICAgICAgIFIubGFzdCxcbiAgICAgICAgICAgIChsZXZlbFN0cjogU3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGV2ZWwgPSBOdW1iZXIobGV2ZWxTdHIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBsZXZlbCA8PSA1ID8gbGV2ZWwgOiA1O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgKShyZWFjaGVkTWlsZXN0b25lIHx8ICcnKVxuXG4gICAgICAgIGlmIChsb2dpblN0cmVhayA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmljb24ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChsb2dpblN0cmVhayA8IFIubGFzdCh2YWx1ZXMpKSB7XG4gICAgICAgICAgICBjb25zdCBleHBUb0xldmVsVXAgPSBOdW1iZXIodmFsdWVzW2xldmVsXSkgLSBOdW1iZXIodmFsdWVzW2xldmVsIC0gMV0pO1xuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5wcm9ncmVzcyA9IChsb2dpblN0cmVhayAtIHZhbHVlc1tsZXZlbCAtIDFdKSAvIGV4cFRvTGV2ZWxVcDtcbiAgICAgICAgICAgIHRoaXMuaWNvbi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyLnByb2dyZXNzID0gMTtcbiAgICAgICAgICAgIHRoaXMuaWNvbi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uVHh0LnN0cmluZyA9IFIucmVwbGFjZSgnJXMnLCBsb2dpblN0cmVhaywgJzxjb2xvcj0jZmZmZmZmPkNodeG7l2kgxJHEg25nIG5o4bqtcCA8L2M+PGNvbG9yPSNGRkUwMkQ+JXM8L2NvbG9yPjxjb2xvcj0jZmZmZmZmPiBuZ8OgeTwvY29sb3I+Jyk7XG4gICAgICAgIHRoaXMuaWNvbi5zcHJpdGVGcmFtZSA9IGxldmVsID4gMCAmJiBGcmFtZU1nci5JbnN0YW5jZVtgTE9HSU5fTEVWRUxfJHtsZXZlbH1gXVxuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBSb290U3RhdGUpID0+ICh7XG4gICAgbG9naW46IHN0YXRlLmxvZ2luXG59KVxuY29uc3QgbWFwRGlzcGF0Y2hUb0FjdGlvbiA9IChkaXNwYXRjaDogQXBwRGlzcGF0Y2gpID0+ICh7XG4gICAgcHVzaFBhZ2U6IChwYXlsb2FkOiBFQXBwUGFnZXMgfCBJUGFnZVdpdGhFZmZlY3QpID0+XG4gICAgICAgIGRpc3BhdGNoKHB1c2hQYWdlKHBheWxvYWQpKSxcbiAgICBwb3BQYWdlOiAoKSA9PiBkaXNwYXRjaChwb3BQYWdlKCkpLFxuICAgIHB1c2hQb3B1cDogKHBheWxvYWQ6IEVBcHBQb3B1cHMpID0+IGRpc3BhdGNoKHB1c2hQb3B1cChwYXlsb2FkKSksXG59KVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9BY3Rpb24pKExvZ2luUHJvZ3Jlc3NCYXIpXG4iXX0=