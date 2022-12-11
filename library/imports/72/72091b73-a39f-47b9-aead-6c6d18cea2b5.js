"use strict";
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