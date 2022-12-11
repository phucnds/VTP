
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/components/CompHeaderSimple.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ef16f5/4KFEJIXt2zjoZbLp', 'CompHeaderSimple');
// scripts/components/CompHeaderSimple.ts

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
var store_1 = require("../src/app/store");
var SliceApp_1 = require("../src/features/SliceApp");
var Helper_1 = require("../utils/Helper");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode;
var CompHeaderSimple = /** @class */ (function (_super) {
    __extends(CompHeaderSimple, _super);
    function CompHeaderSimple() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btnBack = null;
        return _this;
    }
    CompHeaderSimple.prototype.onLoad = function () {
        Helper_1.default.registerButtonEvent(this.btnBack, function () { return store_1.default.dispatch(SliceApp_1.popPage()); });
    };
    __decorate([
        property(cc.Node)
    ], CompHeaderSimple.prototype, "btnBack", void 0);
    CompHeaderSimple = __decorate([
        ccclass
    ], CompHeaderSimple);
    return CompHeaderSimple;
}(cc.Component));
exports.default = CompHeaderSimple;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvQ29tcEhlYWRlclNpbXBsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQ0FBcUM7QUFDckMscURBQW1EO0FBQ25ELDBDQUFxQztBQUUvQixJQUFBLEtBQTJDLEVBQUUsQ0FBQyxVQUFVLEVBQXRELE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLGlCQUFpQix1QkFBa0IsQ0FBQztBQUcvRDtJQUE4QyxvQ0FBWTtJQUExRDtRQUFBLHFFQVFDO1FBTFUsYUFBTyxHQUFZLElBQUksQ0FBQzs7SUFLbkMsQ0FBQztJQUhHLGlDQUFNLEdBQU47UUFDSSxnQkFBTSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsY0FBTSxPQUFBLGVBQUssQ0FBQyxRQUFRLENBQUMsa0JBQU8sRUFBRSxDQUFDLEVBQXpCLENBQXlCLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBSkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztxREFDYTtJQUhkLGdCQUFnQjtRQURwQyxPQUFPO09BQ2EsZ0JBQWdCLENBUXBDO0lBQUQsdUJBQUM7Q0FSRCxBQVFDLENBUjZDLEVBQUUsQ0FBQyxTQUFTLEdBUXpEO2tCQVJvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3RvcmUgZnJvbSBcIi4uL3NyYy9hcHAvc3RvcmVcIjtcbmltcG9ydCB7IHBvcFBhZ2UgfSBmcm9tIFwiLi4vc3JjL2ZlYXR1cmVzL1NsaWNlQXBwXCI7XG5pbXBvcnQgSGVscGVyIGZyb20gXCIuLi91dGlscy9IZWxwZXJcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgZXhlY3V0ZUluRWRpdE1vZGUgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wSGVhZGVyU2ltcGxlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHB1YmxpYyBidG5CYWNrOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgSGVscGVyLnJlZ2lzdGVyQnV0dG9uRXZlbnQodGhpcy5idG5CYWNrLCAoKSA9PiBzdG9yZS5kaXNwYXRjaChwb3BQYWdlKCkpKTtcbiAgICB9XG59XG4iXX0=