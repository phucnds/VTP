"use strict";
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