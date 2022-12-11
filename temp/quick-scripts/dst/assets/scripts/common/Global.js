
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/common/Global.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd20a0HD4J5Lx6vX5OXcGy4+', 'Global');
// scripts/common/Global.ts

"use strict";
// setTimeout(() => {
//     connectWsgw(SERVICE_HOST).then((wsgw) => {
//       // current userId
//     });
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
var APIDefine_1 = require("../src/app/APIDefine");
var store_1 = require("../src/app/store");
var wsgw_1 = require("../src/app/wsgw");
var SliceApp_1 = require("../src/features/SliceApp");
var SliceError_1 = require("../src/features/SliceError");
// let closePID: any;
// const scheduleClose = () => {
//     clearTimeout(closePID);
//     closePID = setTimeout(() => {
//         window.location.href = 'mytel://back';
//     }, 600000);
// };
// scheduleClose();
// window.addEventListener('click', scheduleClose);
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Global = /** @class */ (function (_super) {
    __extends(Global, _super);
    function Global() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Global.prototype.onLoad = function () {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        var errorHanling = function (err) {
            store_1.default.dispatch(SliceError_1.pushError(err));
            var type = err.type;
            if (type == APIDefine_1.ErrorHandleType.NOTHING)
                return;
            setTimeout(function () {
                store_1.default.dispatch(SliceApp_1.pushPopup(SliceApp_1.EAppPopups.PopupError));
            }, 300);
        };
        wsgw_1.default.on("ELO_ERROR", errorHanling);
        // cc.dynamicAtlasManager.showDebug(true);
    };
    Global = __decorate([
        ccclass
    ], Global);
    return Global;
}(cc.Component));
exports.default = Global;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NvbW1vbi9HbG9iYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHFCQUFxQjtBQUNyQixpREFBaUQ7QUFDakQsMEJBQTBCO0FBQzFCLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVWLGtEQUF1RDtBQUN2RCwwQ0FBcUM7QUFDckMsd0NBQW1DO0FBQ25DLHFEQUFpRTtBQUNqRSx5REFBb0U7QUFFcEUscUJBQXFCO0FBQ3JCLGdDQUFnQztBQUNoQyw4QkFBOEI7QUFDOUIsb0NBQW9DO0FBQ3BDLGlEQUFpRDtBQUNqRCxrQkFBa0I7QUFDbEIsS0FBSztBQUNMLG1CQUFtQjtBQUNuQixtREFBbUQ7QUFFN0MsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBb0MsMEJBQVk7SUFBaEQ7O0lBbUJBLENBQUM7SUFsQkcsdUJBQU0sR0FBTjtRQUNJLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUNoRCxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFNLFlBQVksR0FBRyxVQUFDLEdBQWdCO1lBQ2xDLGVBQUssQ0FBQyxRQUFRLENBQUMsc0JBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO1lBQ3RCLElBQUEsSUFBSSxHQUFLLEdBQUcsS0FBUixDQUFRO1lBQ3BCLElBQUksSUFBSSxJQUFJLDJCQUFlLENBQUMsT0FBTztnQkFBRSxPQUFPO1lBRTVDLFVBQVUsQ0FBQztnQkFDUCxlQUFLLENBQUMsUUFBUSxDQUFDLG9CQUFTLENBQUMscUJBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFBO1lBQ3BELENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNaLENBQUMsQ0FBQTtRQUNELGNBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBRW5DLDBDQUEwQztJQUU5QyxDQUFDO0lBakJnQixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBbUIxQjtJQUFELGFBQUM7Q0FuQkQsQUFtQkMsQ0FuQm1DLEVBQUUsQ0FBQyxTQUFTLEdBbUIvQztrQkFuQm9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIHNldFRpbWVvdXQoKCkgPT4ge1xuLy8gICAgIGNvbm5lY3RXc2d3KFNFUlZJQ0VfSE9TVCkudGhlbigod3NndykgPT4ge1xuLy8gICAgICAgLy8gY3VycmVudCB1c2VySWRcbi8vICAgICB9KTtcblxuaW1wb3J0IHsgRXJyb3JIYW5kbGVUeXBlIH0gZnJvbSBcIi4uL3NyYy9hcHAvQVBJRGVmaW5lXCI7XG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4uL3NyYy9hcHAvc3RvcmVcIjtcbmltcG9ydCB3c2d3IGZyb20gXCIuLi9zcmMvYXBwL3dzZ3dcIjtcbmltcG9ydCB7IEVBcHBQb3B1cHMsIHB1c2hQb3B1cCB9IGZyb20gXCIuLi9zcmMvZmVhdHVyZXMvU2xpY2VBcHBcIjtcbmltcG9ydCB7IElFcnJvckhhbmxlLCBwdXNoRXJyb3IgfSBmcm9tIFwiLi4vc3JjL2ZlYXR1cmVzL1NsaWNlRXJyb3JcIjtcblxuLy8gbGV0IGNsb3NlUElEOiBhbnk7XG4vLyBjb25zdCBzY2hlZHVsZUNsb3NlID0gKCkgPT4ge1xuLy8gICAgIGNsZWFyVGltZW91dChjbG9zZVBJRCk7XG4vLyAgICAgY2xvc2VQSUQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbi8vICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnbXl0ZWw6Ly9iYWNrJztcbi8vICAgICB9LCA2MDAwMDApO1xuLy8gfTtcbi8vIHNjaGVkdWxlQ2xvc2UoKTtcbi8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNjaGVkdWxlQ2xvc2UpO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2xvYmFsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHZhciBtYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpO1xuICAgICAgICBtYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICBjb25zdCBlcnJvckhhbmxpbmcgPSAoZXJyOiBJRXJyb3JIYW5sZSkgPT4ge1xuICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2gocHVzaEVycm9yKGVycikpXG4gICAgICAgICAgICBjb25zdCB7IHR5cGUgfSA9IGVyclxuICAgICAgICAgICAgaWYgKHR5cGUgPT0gRXJyb3JIYW5kbGVUeXBlLk5PVEhJTkcpIHJldHVybjtcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2gocHVzaFBvcHVwKEVBcHBQb3B1cHMuUG9wdXBFcnJvcikpXG4gICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICB9XG4gICAgICAgIHdzZ3cub24oXCJFTE9fRVJST1JcIiwgZXJyb3JIYW5saW5nKTtcblxuICAgICAgICAvLyBjYy5keW5hbWljQXRsYXNNYW5hZ2VyLnNob3dEZWJ1Zyh0cnVlKTtcblxuICAgIH1cblxufSJdfQ==