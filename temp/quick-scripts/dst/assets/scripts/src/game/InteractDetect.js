
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/src/game/InteractDetect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3NyYy9nYW1lL0ludGVyYWN0RGV0ZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7OztBQUdsRiwyREFBc0Q7QUFDdEQsMENBQXFDO0FBQ3JDLHNDQUE2RDtBQUM3RCxtREFBOEM7QUFDOUMsaURBQWlJO0FBQ2pJLHFEQUFzRDtBQUVoRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUF1QyxxQ0FBa0M7SUFBekU7UUFBQSxxRUFzQ0M7UUFsQ1csbUJBQWEsR0FBRyxvQkFBVSxDQUFDLFlBQVksQ0FBQztRQUN4QyxrQkFBWSxHQUFHLEtBQUssQ0FBQzs7SUFpQ2pDLENBQUM7SUEvQkcsa0NBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxpREFBcUIsR0FBckI7UUFBQSxpQkFVQztRQVRHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxVQUFDLEtBQUs7WUFDdEQsS0FBSSxDQUFDLGFBQWEsR0FBRyxvQkFBVSxDQUFDLFlBQVksQ0FBQztRQUNqRCxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2YsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLFVBQUMsS0FBSztZQUNyRCxLQUFJLENBQUMsYUFBYSxHQUFHLG9CQUFVLENBQUMsWUFBWSxDQUFDO1FBQ2pELENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDZixFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsVUFBQyxLQUFLO1lBQ3BELEtBQUksQ0FBQyxhQUFhLEdBQUcsb0JBQVUsQ0FBQyxZQUFZLENBQUM7UUFDakQsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBRVMsa0NBQU0sR0FBaEIsVUFBaUIsRUFBVTtRQUN2QixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDbkIsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLGFBQWEsSUFBSSxFQUFFLENBQUM7UUFDekIsSUFBSSxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsRUFBRTtZQUN4QixlQUFLLENBQUMsUUFBUSxDQUFDLG9CQUFTLENBQUMscUJBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUE7WUFDdEQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7U0FDNUI7SUFDTCxDQUFDO0lBRU0saUNBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxhQUFhLEdBQUcsb0JBQVUsQ0FBQyxZQUFZLENBQUM7SUFDakQsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0F0Q0EsQUFzQ0MsQ0F0Q3NDLHVCQUFhLEVBQXFCLEdBc0N4RTtBQXRDWSw4Q0FBaUI7QUF3QzlCLElBQU0sZUFBZSxHQUFHLFVBQUMsS0FBZ0IsSUFBSyxPQUFBLENBQUM7SUFDM0MsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO0NBQ3JCLENBQUMsRUFGNEMsQ0FFNUMsQ0FBQTtBQUNGLElBQU0sbUJBQW1CLEdBQUcsVUFBQyxRQUFxQixJQUFLLE9BQUEsQ0FBQztJQUNwRCxRQUFRLEVBQUUsY0FBTSxPQUFBLFFBQVEsQ0FBQyxtQkFBUSxFQUFFLENBQUMsRUFBcEIsQ0FBb0I7SUFDcEMsU0FBUyxFQUFFLFVBQUMsQ0FBQyxJQUFLLE9BQUEsUUFBUSxDQUFDLG9CQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBdEIsQ0FBc0I7SUFDeEMsWUFBWSxFQUFFLGNBQU0sT0FBQSxRQUFRLENBQUMseUJBQVksRUFBRSxDQUFDLEVBQXhCLENBQXdCO0NBQy9DLENBQUMsRUFKcUQsQ0FJckQsQ0FBQTtBQUVGLGtCQUFlLGlCQUFPLENBQUMsZUFBZSxFQUFFLG1CQUFtQixDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgVG9wVUkgZnJvbSBcIi4uLy4uL2NvbW1vbi9Ub3BVSVwiO1xuaW1wb3J0IFNpbmdsZXRvbk5vZGUgZnJvbSBcIi4uLy4uL3V0aWxzL1NpbmdsZXRvbk5vZGVcIjtcbmltcG9ydCBjb25uZWN0IGZyb20gXCIuLi9hcHAvY29ubmVjdFwiO1xuaW1wb3J0IHN0b3JlLCB7IEFwcERpc3BhdGNoLCBSb290U3RhdGUgfSBmcm9tIFwiLi4vYXBwL3N0b3JlXCI7XG5pbXBvcnQgR2FtZURlZmluZSBmcm9tIFwiLi4vY29tbW9uL0dhbWVEZWZpbmVcIjtcbmltcG9ydCB7IEVBcHBQYWdlcywgRUFwcFBvcHVwcywgSVBhZ2VXaXRoRWZmZWN0LCBwb3BQYWdlLCBwb3BQb3B1cCwgcG9wVG9QYWdlLCBwdXNoUGFnZSwgcHVzaFBvcHVwIH0gZnJvbSBcIi4uL2ZlYXR1cmVzL1NsaWNlQXBwXCI7XG5pbXBvcnQgeyByZWZyZXNoRXJyb3IgfSBmcm9tIFwiLi4vZmVhdHVyZXMvU2xpY2VFcnJvclwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5leHBvcnQgY2xhc3MgSW50ZXJhY3REZXRlY3Rpb24gZXh0ZW5kcyBTaW5nbGV0b25Ob2RlPEludGVyYWN0RGV0ZWN0aW9uPigpIHtcbiAgICBwcm9wczogUm9vdFN0YXRlXG4gICAgYWN0aW9uczogYW55O1xuXG4gICAgcHJpdmF0ZSBpZGxlQ291bnREb3duID0gR2FtZURlZmluZS5JRExFX1RJTUVPVVQ7XG4gICAgcHJpdmF0ZSBpc1BvcHVwU2hvd24gPSBmYWxzZTtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5pbml0RGV0ZWN0SW50ZXJhY3Rpb24oKTtcbiAgICB9XG5cbiAgICBpbml0RGV0ZWN0SW50ZXJhY3Rpb24oKSB7XG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXNcIikub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pZGxlQ291bnREb3duID0gR2FtZURlZmluZS5JRExFX1RJTUVPVVQ7XG4gICAgICAgIH0sIHRoaXMsIHRydWUpO1xuICAgICAgICBjYy5maW5kKFwiQ2FudmFzXCIpLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pZGxlQ291bnREb3duID0gR2FtZURlZmluZS5JRExFX1RJTUVPVVQ7XG4gICAgICAgIH0sIHRoaXMsIHRydWUpO1xuICAgICAgICBjYy5maW5kKFwiQ2FudmFzXCIpLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlkbGVDb3VudERvd24gPSBHYW1lRGVmaW5lLklETEVfVElNRU9VVDtcbiAgICAgICAgfSwgdGhpcywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmlzUG9wdXBTaG93bikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pZGxlQ291bnREb3duIC09IGR0O1xuICAgICAgICBpZiAodGhpcy5pZGxlQ291bnREb3duIDwgMCkge1xuICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2gocHVzaFBvcHVwKEVBcHBQb3B1cHMuUG9wdXBJZGxlVG9vTG9uZykpXG4gICAgICAgICAgICB0aGlzLmlzUG9wdXBTaG93biA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuaWRsZUNvdW50RG93biA9IEdhbWVEZWZpbmUuSURMRV9USU1FT1VUO1xuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBSb290U3RhdGUpID0+ICh7XG4gICAgZXJyb3I6IHN0YXRlLmVycm9yXG59KVxuY29uc3QgbWFwRGlzcGF0Y2hUb0FjdGlvbiA9IChkaXNwYXRjaDogQXBwRGlzcGF0Y2gpID0+ICh7XG4gICAgcG9wUG9wdXA6ICgpID0+IGRpc3BhdGNoKHBvcFBvcHVwKCkpLFxuICAgIHBvcFRvUGFnZTogKGUpID0+IGRpc3BhdGNoKHBvcFRvUGFnZShlKSksXG4gICAgcmVmcmVzaEVycm9yOiAoKSA9PiBkaXNwYXRjaChyZWZyZXNoRXJyb3IoKSlcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvQWN0aW9uKShJbnRlcmFjdERldGVjdGlvbilcbiJdfQ==