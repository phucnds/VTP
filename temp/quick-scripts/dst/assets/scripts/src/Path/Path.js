
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/src/Path/Path.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '58eef/hk/pOpqsqF5e2CWcg', 'Path');
// scripts/src/Path/Path.ts

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
var Path = /** @class */ (function (_super) {
    __extends(Path, _super);
    function Path() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.reverse = false;
        return _this;
    }
    Path.prototype.getPrevious = function (point) {
        var previousIndex = point.getSiblingIndex() - 1;
        return this.node.children[previousIndex >= 0 ? previousIndex : this.node.childrenCount - 1];
    };
    Path.prototype.getPreviousPoint = function (point) {
        if (!this.reverse) {
            return this.getPrevious(point);
        }
        else {
            return this.getNext(point);
        }
    };
    Path.prototype.getNext = function (point) {
        var nextIndex = point.getSiblingIndex() + 1;
        return this.node.children[nextIndex < this.node.childrenCount ? nextIndex : 0];
    };
    Path.prototype.getNextPoint = function (point) {
        if (this.reverse) {
            return this.getPrevious(point);
        }
        else {
            return this.getNext(point);
        }
    };
    Path.prototype.getStart = function () {
        return this.node.children[0];
    };
    Path.prototype.getEnd = function () {
        return this.node.children[this.node.childrenCount - 1];
    };
    Path.prototype.getStartPoint = function () {
        if (this.reverse) {
            return this.getEnd();
        }
        else {
            return this.getStart();
        }
    };
    Path.prototype.getEndPoint = function () {
        if (!this.reverse) {
            return this.getEnd();
        }
        else {
            return this.getStart();
        }
    };
    __decorate([
        property(cc.Boolean)
    ], Path.prototype, "reverse", void 0);
    Path = __decorate([
        ccclass
    ], Path);
    return Path;
}(cc.Component));
exports.default = Path;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3NyYy9QYXRoL1BhdGgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUFtREM7UUFqRFUsYUFBTyxHQUFZLEtBQUssQ0FBQzs7SUFpRHBDLENBQUM7SUEvQ0csMEJBQVcsR0FBWCxVQUFZLEtBQWM7UUFDdEIsSUFBTSxhQUFhLEdBQUcsS0FBSyxDQUFDLGVBQWUsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNsRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDaEcsQ0FBQztJQUNELCtCQUFnQixHQUFoQixVQUFpQixLQUFjO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2YsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2xDO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDOUI7SUFDTCxDQUFDO0lBRUQsc0JBQU8sR0FBUCxVQUFRLEtBQWM7UUFDbEIsSUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLGVBQWUsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM5QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBQ0QsMkJBQVksR0FBWixVQUFhLEtBQWM7UUFDdkIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2QsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2xDO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDOUI7SUFDTCxDQUFDO0lBRUQsdUJBQVEsR0FBUjtRQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELHFCQUFNLEdBQU47UUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCw0QkFBYSxHQUFiO1FBQ0ksSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2QsT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDeEI7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQzFCO0lBQ0wsQ0FBQztJQUVELDBCQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNmLE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ3hCO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUMxQjtJQUNMLENBQUM7SUFoREQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzt5Q0FDVztJQUZmLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0FtRHhCO0lBQUQsV0FBQztDQW5ERCxBQW1EQyxDQW5EaUMsRUFBRSxDQUFDLFNBQVMsR0FtRDdDO2tCQW5Eb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGF0aCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLkJvb2xlYW4pXG4gICAgcHVibGljIHJldmVyc2U6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGdldFByZXZpb3VzKHBvaW50OiBjYy5Ob2RlKSB7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzSW5kZXggPSBwb2ludC5nZXRTaWJsaW5nSW5kZXgoKSAtIDE7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGUuY2hpbGRyZW5bcHJldmlvdXNJbmRleCA+PSAwID8gcHJldmlvdXNJbmRleCA6IHRoaXMubm9kZS5jaGlsZHJlbkNvdW50IC0gMV07XG4gICAgfVxuICAgIGdldFByZXZpb3VzUG9pbnQocG9pbnQ6IGNjLk5vZGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLnJldmVyc2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFByZXZpb3VzKHBvaW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldE5leHQocG9pbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0TmV4dChwb2ludDogY2MuTm9kZSkge1xuICAgICAgICBjb25zdCBuZXh0SW5kZXggPSBwb2ludC5nZXRTaWJsaW5nSW5kZXgoKSArIDE7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGUuY2hpbGRyZW5bbmV4dEluZGV4IDwgdGhpcy5ub2RlLmNoaWxkcmVuQ291bnQgPyBuZXh0SW5kZXggOiAwXTtcbiAgICB9XG4gICAgZ2V0TmV4dFBvaW50KHBvaW50OiBjYy5Ob2RlKSB7XG4gICAgICAgIGlmICh0aGlzLnJldmVyc2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFByZXZpb3VzKHBvaW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldE5leHQocG9pbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0U3RhcnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGUuY2hpbGRyZW5bMF07XG4gICAgfVxuXG4gICAgZ2V0RW5kKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlLmNoaWxkcmVuW3RoaXMubm9kZS5jaGlsZHJlbkNvdW50IC0gMV07XG4gICAgfVxuXG4gICAgZ2V0U3RhcnRQb2ludCgpIHtcbiAgICAgICAgaWYgKHRoaXMucmV2ZXJzZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RW5kKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRTdGFydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0RW5kUG9pbnQoKSB7XG4gICAgICAgIGlmICghdGhpcy5yZXZlcnNlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRFbmQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=