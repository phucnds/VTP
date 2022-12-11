
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/src/game/SessionLengthCount.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6a6965/Gz9Dfbc4vjPKJCP9', 'SessionLengthCount');
// scripts/src/game/SessionLengthCount.ts

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var APIDefine_1 = require("../app/APIDefine");
var wsgw_1 = require("../app/wsgw");
var TrackingDefine_1 = require("../common/TrackingDefine");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SessionLengthCount = /** @class */ (function (_super) {
    __extends(SessionLengthCount, _super);
    function SessionLengthCount() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sessionLength = 0;
        return _this;
    }
    SessionLengthCount.prototype.onLoad = function () {
        var _this = this;
        var lastSessionLength = localStorage.getItem('lastSessionLength');
        if (lastSessionLength && lastSessionLength !== 'null') {
            wsgw_1.default.userRequest(APIDefine_1.default.track, {
                eventName: TrackingDefine_1.default.TrackingEvents.SESSION_LENGTH,
                data: lastSessionLength
            }, function (e) { console.log("TRACKING - " + TrackingDefine_1.default.TrackingEvents.SESSION_LENGTH + " - " + lastSessionLength); }, console.error);
        }
        window.addEventListener('beforeunload', function (event) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                localStorage.setItem('lastSessionLength', this.sessionLength.toString());
                return [2 /*return*/];
            });
        }); });
    };
    SessionLengthCount.prototype.update = function (dt) {
        this.sessionLength += dt;
    };
    SessionLengthCount = __decorate([
        ccclass
    ], SessionLengthCount);
    return SessionLengthCount;
}(cc.Component));
exports.default = SessionLengthCount;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3NyYy9nYW1lL1Nlc3Npb25MZW5ndGhDb3VudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiw4Q0FBeUM7QUFDekMsb0NBQStCO0FBQy9CLDJEQUFzRDtBQUVoRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFnRCxzQ0FBWTtJQUE1RDtRQUFBLHFFQTBCQztRQXhCVyxtQkFBYSxHQUFHLENBQUMsQ0FBQzs7SUF3QjlCLENBQUM7SUF0QkcsbUNBQU0sR0FBTjtRQUFBLGlCQWlCQztRQWhCRyxJQUFNLGlCQUFpQixHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNwRSxJQUFJLGlCQUFpQixJQUFJLGlCQUFpQixLQUFLLE1BQU0sRUFBRTtZQUNuRCxjQUFJLENBQUMsV0FBVyxDQUNaLG1CQUFTLENBQUMsS0FBSyxFQUNmO2dCQUNJLFNBQVMsRUFBRSx3QkFBYyxDQUFDLGNBQWMsQ0FBQyxjQUFjO2dCQUN2RCxJQUFJLEVBQUUsaUJBQWlCO2FBQzFCLEVBQ0QsVUFBQyxDQUFDLElBQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBYyx3QkFBYyxDQUFDLGNBQWMsQ0FBQyxjQUFjLFdBQU0saUJBQW1CLENBQUMsQ0FBQSxDQUFDLENBQUMsRUFDM0csT0FBTyxDQUFDLEtBQUssQ0FDaEIsQ0FBQztTQUNMO1FBRUQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxVQUFPLEtBQUs7O2dCQUNoRCxZQUFZLENBQUMsT0FBTyxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQzs7O2FBQzVFLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxtQ0FBTSxHQUFOLFVBQU8sRUFBVTtRQUNiLElBQUksQ0FBQyxhQUFhLElBQUksRUFBRSxDQUFDO0lBQzdCLENBQUM7SUF6QmdCLGtCQUFrQjtRQUR0QyxPQUFPO09BQ2Esa0JBQWtCLENBMEJ0QztJQUFELHlCQUFDO0NBMUJELEFBMEJDLENBMUIrQyxFQUFFLENBQUMsU0FBUyxHQTBCM0Q7a0JBMUJvQixrQkFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEFQSURlZmluZSBmcm9tIFwiLi4vYXBwL0FQSURlZmluZVwiO1xuaW1wb3J0IHdzZ3cgZnJvbSBcIi4uL2FwcC93c2d3XCI7XG5pbXBvcnQgVHJhY2tpbmdEZWZpbmUgZnJvbSBcIi4uL2NvbW1vbi9UcmFja2luZ0RlZmluZVwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Vzc2lvbkxlbmd0aENvdW50IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIHByaXZhdGUgc2Vzc2lvbkxlbmd0aCA9IDA7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIGNvbnN0IGxhc3RTZXNzaW9uTGVuZ3RoID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhc3RTZXNzaW9uTGVuZ3RoJyk7XG4gICAgICAgIGlmIChsYXN0U2Vzc2lvbkxlbmd0aCAmJiBsYXN0U2Vzc2lvbkxlbmd0aCAhPT0gJ251bGwnKSB7XG4gICAgICAgICAgICB3c2d3LnVzZXJSZXF1ZXN0KFxuICAgICAgICAgICAgICAgIEFQSURlZmluZS50cmFjayxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50TmFtZTogVHJhY2tpbmdEZWZpbmUuVHJhY2tpbmdFdmVudHMuU0VTU0lPTl9MRU5HVEgsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGxhc3RTZXNzaW9uTGVuZ3RoXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoZSkgPT4geyBjb25zb2xlLmxvZyhgVFJBQ0tJTkcgLSAke1RyYWNraW5nRGVmaW5lLlRyYWNraW5nRXZlbnRzLlNFU1NJT05fTEVOR1RIfSAtICR7bGFzdFNlc3Npb25MZW5ndGh9YCkgfSxcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZXVubG9hZCcsIGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xhc3RTZXNzaW9uTGVuZ3RoJywgdGhpcy5zZXNzaW9uTGVuZ3RoLnRvU3RyaW5nKCkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1cGRhdGUoZHQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLnNlc3Npb25MZW5ndGggKz0gZHQ7XG4gICAgfVxufVxuIl19