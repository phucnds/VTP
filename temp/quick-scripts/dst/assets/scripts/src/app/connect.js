
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/src/app/connect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '72091tzo59Hua6tbG0YzqK1', 'connect');
// scripts/src/app/connect.ts

"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var shallow_equal_1 = require("shallow-equal");
var store_1 = require("./store");
function connect(mapStateToProps, mapDispatchToProps) {
    return function (target) {
        var res = cc.Class(__assign(__assign({}, ((target &&
            target.__ccclassCache__ &&
            target.__ccclassCache__.proto) ||
            {})), { extends: target, onLoad: function () {
                var _this = this;
                this.actions = mapDispatchToProps && mapDispatchToProps(store_1.default.dispatch);
                this.props = mapStateToProps(store_1.default.getState(), this.props);
                this.unsubcribe = store_1.default.subscribe(function () {
                    var state = store_1.default.getState();
                    var props = mapStateToProps(state, _this.props);
                    if (!shallow_equal_1.shallowEqualObjects(props, _this.props)) {
                        _this.props = props;
                        if (_this.node && _this._active) {
                            _this.onStateChange && _this.onStateChange();
                        }
                        else {
                            _this._needUpdate = true;
                        }
                    }
                });
                this._super && this._super();
            },
            onStateChange: function () {
                this._super && this._super();
            },
            onEnable: function () {
                this._active = true;
                if (this._needUpdate) {
                    this.onStateChange && this.onStateChange();
                }
                this._super && this._super();
            },
            onDisable: function () {
                this._active = false;
                this._super && this._super();
            },
            onDestroy: function () {
                this.unsubcribe && this.unsubcribe();
                this._super && this._super();
            } }));
        return res;
    };
}
exports.default = connect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3NyYy9hcHAvY29ubmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQW9EO0FBQ3BELGlDQUE0QjtBQUU1QixTQUFTLE9BQU8sQ0FDZCxlQUFvQyxFQUNwQyxrQkFBb0M7SUFFcEMsT0FBTyxVQUFVLE1BQU07UUFDckIsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLEtBQUssdUJBQ2IsQ0FBQyxDQUFDLE1BQU07WUFDVCxNQUFNLENBQUMsZ0JBQWdCO1lBQ3ZCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7WUFDOUIsRUFBRSxDQUFDLEtBQ0wsT0FBTyxFQUFFLE1BQU0sRUFDZixNQUFNO2dCQUFOLGlCQWlCQztnQkFoQkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxrQkFBa0IsSUFBSSxrQkFBa0IsQ0FBQyxlQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3hFLElBQUksQ0FBQyxLQUFLLEdBQUcsZUFBZSxDQUFDLGVBQUssQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzNELElBQUksQ0FBQyxVQUFVLEdBQUcsZUFBSyxDQUFDLFNBQVMsQ0FBQztvQkFDaEMsSUFBTSxLQUFLLEdBQUcsZUFBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUMvQixJQUFNLEtBQUssR0FBRyxlQUFlLENBQUMsS0FBSyxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDakQsSUFBSSxDQUFDLG1DQUFtQixDQUFDLEtBQUssRUFBRSxLQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7d0JBQzNDLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO3dCQUNuQixJQUFJLEtBQUksQ0FBQyxJQUFJLElBQUksS0FBSSxDQUFDLE9BQU8sRUFBRTs0QkFDN0IsS0FBSSxDQUFDLGFBQWEsSUFBSSxLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7eUJBQzVDOzZCQUNJOzRCQUNILEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO3lCQUN6QjtxQkFDRjtnQkFDSCxDQUFDLENBQUMsQ0FBQztnQkFDSCxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUMvQixDQUFDO1lBQ0QsYUFBYTtnQkFDWCxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUMvQixDQUFDO1lBQ0QsUUFBUTtnQkFDTixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQTtnQkFDbkIsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO29CQUNwQixJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztpQkFDNUM7Z0JBQ0QsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDL0IsQ0FBQztZQUNELFNBQVM7Z0JBQ1AsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUE7Z0JBQ3BCLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQy9CLENBQUM7WUFDRCxTQUFTO2dCQUNQLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNyQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUMvQixDQUFDLElBQ0QsQ0FBQztRQUNILE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVELGtCQUFlLE9BQU8sQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNoYWxsb3dFcXVhbE9iamVjdHMgfSBmcm9tIFwic2hhbGxvdy1lcXVhbFwiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCIuL3N0b3JlXCI7XG5cbmZ1bmN0aW9uIGNvbm5lY3Q8VCA9IGFueSwgQSA9IGFueT4oXG4gIG1hcFN0YXRlVG9Qcm9wczogKHN0YXRlLCBwcm9wcykgPT4gVCxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzPzogKGRpc3BhdGNoKSA9PiBBXG4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICB2YXIgcmVzID0gY2MuQ2xhc3Moe1xuICAgICAgLi4uKCh0YXJnZXQgJiZcbiAgICAgICAgdGFyZ2V0Ll9fY2NjbGFzc0NhY2hlX18gJiZcbiAgICAgICAgdGFyZ2V0Ll9fY2NjbGFzc0NhY2hlX18ucHJvdG8pIHx8XG4gICAgICAgIHt9KSxcbiAgICAgIGV4dGVuZHM6IHRhcmdldCxcbiAgICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5hY3Rpb25zID0gbWFwRGlzcGF0Y2hUb1Byb3BzICYmIG1hcERpc3BhdGNoVG9Qcm9wcyhzdG9yZS5kaXNwYXRjaCk7XG4gICAgICAgIHRoaXMucHJvcHMgPSBtYXBTdGF0ZVRvUHJvcHMoc3RvcmUuZ2V0U3RhdGUoKSwgdGhpcy5wcm9wcyk7XG4gICAgICAgIHRoaXMudW5zdWJjcmliZSA9IHN0b3JlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgIGNvbnN0IHByb3BzID0gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCB0aGlzLnByb3BzKTtcbiAgICAgICAgICBpZiAoIXNoYWxsb3dFcXVhbE9iamVjdHMocHJvcHMsIHRoaXMucHJvcHMpKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlICYmIHRoaXMuX2FjdGl2ZSkge1xuICAgICAgICAgICAgICB0aGlzLm9uU3RhdGVDaGFuZ2UgJiYgdGhpcy5vblN0YXRlQ2hhbmdlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5fbmVlZFVwZGF0ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fc3VwZXIgJiYgdGhpcy5fc3VwZXIoKTtcbiAgICAgIH0sXG4gICAgICBvblN0YXRlQ2hhbmdlKCkge1xuICAgICAgICB0aGlzLl9zdXBlciAmJiB0aGlzLl9zdXBlcigpO1xuICAgICAgfSxcbiAgICAgIG9uRW5hYmxlKCkge1xuICAgICAgICB0aGlzLl9hY3RpdmUgPSB0cnVlXG4gICAgICAgIGlmICh0aGlzLl9uZWVkVXBkYXRlKSB7XG4gICAgICAgICAgdGhpcy5vblN0YXRlQ2hhbmdlICYmIHRoaXMub25TdGF0ZUNoYW5nZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3N1cGVyICYmIHRoaXMuX3N1cGVyKCk7XG4gICAgICB9LFxuICAgICAgb25EaXNhYmxlKCkge1xuICAgICAgICB0aGlzLl9hY3RpdmUgPSBmYWxzZVxuICAgICAgICB0aGlzLl9zdXBlciAmJiB0aGlzLl9zdXBlcigpO1xuICAgICAgfSxcbiAgICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy51bnN1YmNyaWJlICYmIHRoaXMudW5zdWJjcmliZSgpO1xuICAgICAgICB0aGlzLl9zdXBlciAmJiB0aGlzLl9zdXBlcigpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXM7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Q7XG4iXX0=