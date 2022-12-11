
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/utils/ObjectMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dbc77ws+sxPlY9zPANdJYTf', 'ObjectMgr');
// scripts/utils/ObjectMgr.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ObjectMgr = /** @class */ (function (_super) {
    __extends(ObjectMgr, _super);
    function ObjectMgr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ObjectMgr.prototype.load = function (prefab, poolSize) {
        // for (let i = 0; i < poolSize; i++) {
        //     const node = cc.instantiate(prefab);
        //     // node.getComponent(GameObject).load();
        //     node.active = false;
        //     this.node.addChild(node);
        // }
        // this.hide();
    };
    ObjectMgr.prototype.init = function () {
        this.hide();
    };
    ObjectMgr.prototype.hide = function () {
        for (var _i = 0, _a = this.node.children; _i < _a.length; _i++) {
            var item = _a[_i];
            item.active = false;
        }
    };
    ObjectMgr.prototype.spawn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    };
    ObjectMgr.prototype.getAvailable = function () {
        for (var _i = 0, _a = this.node.children; _i < _a.length; _i++) {
            var item = _a[_i];
            if (!item.active) {
                return item;
            }
        }
        return null;
    };
    ObjectMgr = __decorate([
        ccclass
    ], ObjectMgr);
    return ObjectMgr;
}(cc.Component));
exports.default = ObjectMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3V0aWxzL09iamVjdE1nci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF1Qyw2QkFBWTtJQUFuRDs7SUFrQ0EsQ0FBQztJQWpDRyx3QkFBSSxHQUFKLFVBQUssTUFBaUIsRUFBRSxRQUFnQjtRQUNwQyx1Q0FBdUM7UUFDdkMsMkNBQTJDO1FBQzNDLCtDQUErQztRQUMvQywyQkFBMkI7UUFDM0IsZ0NBQWdDO1FBQ2hDLElBQUk7UUFDSixlQUFlO0lBQ25CLENBQUM7SUFFRCx3QkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCx3QkFBSSxHQUFKO1FBQ0ksS0FBaUIsVUFBa0IsRUFBbEIsS0FBQSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBbEIsY0FBa0IsRUFBbEIsSUFBa0IsRUFBRTtZQUFoQyxJQUFJLElBQUksU0FBQTtZQUNULElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3ZCO0lBQ0wsQ0FBQztJQUVELHlCQUFLLEdBQUw7UUFBTSxjQUFPO2FBQVAsVUFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztZQUFQLHlCQUFPOztJQUViLENBQUM7SUFFRCxnQ0FBWSxHQUFaO1FBQ0ksS0FBaUIsVUFBa0IsRUFBbEIsS0FBQSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBbEIsY0FBa0IsRUFBbEIsSUFBa0IsRUFBRTtZQUFoQyxJQUFJLElBQUksU0FBQTtZQUNULElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNkLE9BQU8sSUFBSSxDQUFDO2FBQ2Y7U0FDSjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFqQ2dCLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FrQzdCO0lBQUQsZ0JBQUM7Q0FsQ0QsQUFrQ0MsQ0FsQ3NDLEVBQUUsQ0FBQyxTQUFTLEdBa0NsRDtrQkFsQ29CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiLi9HYW1lT2JqZWN0XCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPYmplY3RNZ3IgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIGxvYWQocHJlZmFiOiBjYy5QcmVmYWIsIHBvb2xTaXplOiBudW1iZXIpIHtcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBwb29sU2l6ZTsgaSsrKSB7XG4gICAgICAgIC8vICAgICBjb25zdCBub2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgICAgLy8gICAgIC8vIG5vZGUuZ2V0Q29tcG9uZW50KEdhbWVPYmplY3QpLmxvYWQoKTtcbiAgICAgICAgLy8gICAgIG5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobm9kZSk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gdGhpcy5oaWRlKCk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuXG4gICAgaGlkZSgpIHtcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLm5vZGUuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGl0ZW0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzcGF3biguLi5hcmdzKSB7XG5cbiAgICB9XG5cbiAgICBnZXRBdmFpbGFibGUoKSB7XG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy5ub2RlLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICBpZiAoIWl0ZW0uYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG4iXX0=