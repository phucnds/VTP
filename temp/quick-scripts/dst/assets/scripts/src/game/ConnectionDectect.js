
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/src/game/ConnectionDectect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4d4ab76ajFAcop/E2WMgOeZ', 'ConnectionDectect');
// scripts/src/game/ConnectionDectect.ts

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
var store_1 = require("../app/store");
var SliceApp_1 = require("../features/SliceApp");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ConnectionDectect = /** @class */ (function (_super) {
    __extends(ConnectionDectect, _super);
    function ConnectionDectect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConnectionDectect.prototype.createCORSRequest = function (method, url) {
        var xhr = new XMLHttpRequest();
        if ("withCredentials" in xhr) {
            // Check if the XMLHttpRequest object has a "withCredentials" property.
            // "withCredentials" only exists on XMLHTTPRequest2 objects.
            xhr.open(method, url, true);
        }
        else {
            // Otherwise, CORS is not supported by the browser.
            xhr = null;
        }
        return xhr;
    };
    ConnectionDectect.prototype.onLoad = function () {
        var _this = this;
        setInterval(function () {
            var oReq = _this.createCORSRequest('HEAD', '');
            oReq.setRequestHeader("Cache-Control", "no-cache");
            oReq.addEventListener('error', function () {
                var status = oReq.status;
                store_1.default.dispatch(SliceApp_1.pushPopup(SliceApp_1.EAppPopups.PopupLostConnection));
            });
            oReq.send();
        }, 5000);
    };
    ConnectionDectect = __decorate([
        ccclass
    ], ConnectionDectect);
    return ConnectionDectect;
}(cc.Component));
exports.default = ConnectionDectect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3NyYy9nYW1lL0Nvbm5lY3Rpb25EZWN0ZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR2xGLHNDQUFpQztBQUNqQyxpREFBNkQ7QUFFdkQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBK0MscUNBQVk7SUFBM0Q7O0lBK0JBLENBQUM7SUE3QkcsNkNBQWlCLEdBQWpCLFVBQWtCLE1BQU0sRUFBRSxHQUFHO1FBQ3pCLElBQUksR0FBRyxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7UUFDL0IsSUFBSSxpQkFBaUIsSUFBSSxHQUFHLEVBQUU7WUFFMUIsdUVBQXVFO1lBQ3ZFLDREQUE0RDtZQUM1RCxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FFL0I7YUFBTTtZQUVILG1EQUFtRDtZQUNuRCxHQUFHLEdBQUcsSUFBSSxDQUFDO1NBRWQ7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFFRCxrQ0FBTSxHQUFOO1FBQUEsaUJBVUM7UUFURyxXQUFXLENBQUM7WUFDUixJQUFJLElBQUksR0FBRyxLQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFBO1lBQzdDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtnQkFDbkIsSUFBQSxNQUFNLEdBQUssSUFBSSxPQUFULENBQVU7Z0JBQ3hCLGVBQUssQ0FBQyxRQUFRLENBQUMsb0JBQVMsQ0FBQyxxQkFBVSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQTtZQUM3RCxDQUFDLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNoQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDYixDQUFDO0lBN0JnQixpQkFBaUI7UUFEckMsT0FBTztPQUNhLGlCQUFpQixDQStCckM7SUFBRCx3QkFBQztDQS9CRCxBQStCQyxDQS9COEMsRUFBRSxDQUFDLFNBQVMsR0ErQjFEO2tCQS9Cb0IsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBpbnRlcm5hbCA9IHJlcXVpcmUoXCJzdHJlYW1cIik7XG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4uL2FwcC9zdG9yZVwiO1xuaW1wb3J0IHsgRUFwcFBvcHVwcywgcHVzaFBvcHVwIH0gZnJvbSBcIi4uL2ZlYXR1cmVzL1NsaWNlQXBwXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25uZWN0aW9uRGVjdGVjdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBjcmVhdGVDT1JTUmVxdWVzdChtZXRob2QsIHVybCkge1xuICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIGlmIChcIndpdGhDcmVkZW50aWFsc1wiIGluIHhocikge1xuXG4gICAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgWE1MSHR0cFJlcXVlc3Qgb2JqZWN0IGhhcyBhIFwid2l0aENyZWRlbnRpYWxzXCIgcHJvcGVydHkuXG4gICAgICAgICAgICAvLyBcIndpdGhDcmVkZW50aWFsc1wiIG9ubHkgZXhpc3RzIG9uIFhNTEhUVFBSZXF1ZXN0MiBvYmplY3RzLlxuICAgICAgICAgICAgeGhyLm9wZW4obWV0aG9kLCB1cmwsIHRydWUpO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgQ09SUyBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBicm93c2VyLlxuICAgICAgICAgICAgeGhyID0gbnVsbDtcblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB4aHI7XG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICB2YXIgb1JlcSA9IHRoaXMuY3JlYXRlQ09SU1JlcXVlc3QoJ0hFQUQnLCAnJylcbiAgICAgICAgICAgIG9SZXEuc2V0UmVxdWVzdEhlYWRlcihcIkNhY2hlLUNvbnRyb2xcIiwgXCJuby1jYWNoZVwiKTtcbiAgICAgICAgICAgIG9SZXEuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBzdGF0dXMgfSA9IG9SZXE7XG4gICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2gocHVzaFBvcHVwKEVBcHBQb3B1cHMuUG9wdXBMb3N0Q29ubmVjdGlvbikpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG9SZXEuc2VuZCgpO1xuICAgICAgICB9LCA1MDAwKTtcbiAgICB9XG5cbn1cbiJdfQ==