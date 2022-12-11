
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/utils/Helper.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '90a75udUmlJUqYerDKv5BZf', 'Helper');
// scripts/utils/Helper.ts

"use strict";
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var SoundMgr_1 = require("../common/SoundMgr");
var global_id = Date.now();
exports.default = new (/** @class */ (function () {
    function Helper() {
        this.isExcute = false;
        this.noSleep = null;
    }
    Helper.prototype.GetUnitId = function () {
        return "uid-" + global_id++;
    };
    Helper.prototype.Rand = function (min, max) {
        return Math.random() * (max - min) + min;
    };
    Helper.prototype.RandInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    Helper.prototype.RandomProperty = function (obj) {
        var keys = Object.keys(obj);
        return obj[keys[keys.length * Math.random() << 0]];
    };
    ;
    Helper.prototype.RandArgument = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return args[this.RandInt(0, args.length - 1)];
    };
    Helper.prototype.RandArray = function (arr) {
        return arr[this.RandInt(0, arr.length - 1)];
    };
    Helper.prototype.RandTypeEnum = function (obj) {
        var keys = Object.keys(obj);
        return this.RandInt(0, keys.length / 2 - 1);
    };
    Helper.prototype.GetKey = function (obj, index) {
        return Object.keys(obj)[index];
    };
    Helper.prototype.GetKeyEnum = function (obj, index) {
        var keys = Object.keys(obj);
        return keys[index + keys.length / 2];
    };
    Helper.prototype.GetIndexEnum = function (obj, name) {
        var keys = Object.keys(obj);
        for (var i = keys.length / 2; i < keys.length; i++) {
            if (keys[i] == name) {
                return i - keys.length / 2;
            }
        }
        return -1;
    };
    Helper.prototype.FallBackCopyToClipboard = function (str) {
        var el = document.createElement('textarea');
        var isIOS = navigator.userAgent.search(/(iPad|iPhone|iphone|iPod)/) != -1;
        el.value = str;
        document.body.appendChild(el);
        if (isIOS) {
            el.contentEditable = true;
            el.readOnly = false;
            var range = document.createRange();
            range.selectNodeContents(el);
            var sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
            el.setSelectionRange(0, 999999);
        }
        else {
            el.setAttribute('readonly', '');
            el.select();
        }
        document.execCommand('copy');
        document.body.removeChild(el);
    };
    Helper.prototype.CopyToClipboard = function (str) {
        if (!navigator.clipboard) {
            this.FallBackCopyToClipboard(str);
            return;
        }
        navigator.clipboard.writeText(str).then(function () {
        }, function (err) {
        });
    };
    Helper.prototype.Normalized = function (x1, y1, x2, y2) {
        var dX = x1 - x2;
        var dY = y1 - y2;
        var length = Math.sqrt(dX * dX + dY * dY);
        return new cc.Vec2(dX / length, dY / length);
    };
    Helper.prototype.MoveToTarget = function (current, target, speed) {
        speed = Math.abs(speed);
        if (current < target) {
            return Math.min(target, current + speed);
        }
        else {
            return Math.max(target, current - speed);
        }
    };
    Helper.prototype.Collision2Rect = function (rect1, rect2) {
        if (rect1.x + rect1.width < rect2.x ||
            rect1.y + rect1.height < rect2.y ||
            rect2.x + rect2.width < rect1.x ||
            rect2.y + rect2.height < rect1.y) {
            return false;
        }
        return true;
    };
    Helper.prototype.CollisionPointRect = function (x, y, rect) {
        if (x < rect.x ||
            y < rect.y ||
            x > rect.x + rect.width ||
            y > rect.y + rect.height) {
            return false;
        }
        return true;
    };
    Helper.prototype.Distance = function (x1, y1, x2, y2) {
        return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    };
    Helper.prototype.Constrain = function (value, min, max) {
        value = Math.max(min, value);
        value = Math.min(max, value);
        return value;
    };
    Helper.prototype.ToRadian = function (angle) {
        return (angle / 180) * Math.PI;
    };
    Helper.prototype.ToAngle = function (radian) {
        return (radian / Math.PI) * 180;
    };
    Helper.prototype.TimeoutPromise = function (time, promise) {
        var timeout = new Promise(function (resolve, reject) {
            setTimeout(function () {
                reject("Timed out.");
            }, time);
        });
        return Promise.race([promise, timeout]);
    };
    Helper.prototype.HttpRequest = function (method, url, body, responseType, headers, requestParams) {
        if (headers === void 0) { headers = null; }
        if (requestParams === void 0) { requestParams = {}; }
        var logEvent = window.logEvent || console.log;
        var start = Date.now();
        var apiName = url.split('/').pop().split('?').shift();
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open(method, url, true);
            if (method == "POST") {
                xhr.setRequestHeader("Content-Type", "application/json");
            }
            for (var _i = 0, headers_1 = headers; _i < headers_1.length; _i++) {
                var item = headers_1[_i];
                xhr.setRequestHeader(item.key, item.value);
            }
            if (responseType) {
                xhr.responseType = responseType;
            }
            xhr.timeout = 10000;
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(xhr.response);
                    }
                    else {
                        reject(xhr.response);
                    }
                    logEvent(apiName, {
                        method: method,
                        url: url,
                        body: body,
                        requestParams: requestParams,
                        reponseStatus: xhr.status,
                        response: xhr.response,
                        duration: Date.now() - start
                    });
                }
            };
            xhr.onerror = function (e) {
                logEvent('apiRequestError', {
                    apiName: apiName,
                    method: method,
                    url: url,
                    body: body,
                    requestParams: requestParams,
                    duration: Date.now() - start
                });
                reject('error');
            };
            xhr.ontimeout = function (e) {
                reject('timed out');
            };
            xhr.send(body);
        });
    };
    Helper.prototype.DrawLine = function (graphic, x1, y1, x2, y2, color, lineWidth) {
        if (color === void 0) { color = cc.Color.RED; }
        if (lineWidth === void 0) { lineWidth = 2; }
        graphic.lineWidth = lineWidth;
        graphic.strokeColor = color;
        graphic.moveTo(x1, y1);
        graphic.lineTo(x2, y2);
        graphic.stroke();
    };
    Helper.prototype.DrawSquare = function (graphic, x, y, width, color, lineWidth) {
        if (color === void 0) { color = cc.Color.RED; }
        if (lineWidth === void 0) { lineWidth = 2; }
        this.DrawRect(graphic, x, y, width, width, color, lineWidth);
    };
    Helper.prototype.DrawRect = function (graphic, x, y, width, height, color, lineWidth) {
        if (color === void 0) { color = cc.Color.RED; }
        if (lineWidth === void 0) { lineWidth = 2; }
        graphic.lineWidth = lineWidth;
        graphic.strokeColor = color;
        typeof x === "number"
            ? graphic.rect(x, y, width, height)
            : graphic.rect(x.x, x.y, x.width, x.height);
        graphic.stroke();
    };
    Helper.prototype.DrawArc = function (graphic, x, y, r, startAngle, endAngle, offsetAngle, anticlockwise, color, lineWidth, withLine) {
        if (startAngle === void 0) { startAngle = 0; }
        if (endAngle === void 0) { endAngle = Math.PI * 2; }
        if (offsetAngle === void 0) { offsetAngle = 0; }
        if (anticlockwise === void 0) { anticlockwise = true; }
        if (color === void 0) { color = cc.Color.RED; }
        if (lineWidth === void 0) { lineWidth = 2; }
        if (withLine === void 0) { withLine = false; }
        var TWO_PI = Math.PI * 2;
        var drawOffset = Math.PI * 1.5; // start angle at 0 o'clock
        startAngle += drawOffset + offsetAngle;
        endAngle += drawOffset + offsetAngle;
        startAngle = TWO_PI - startAngle;
        endAngle = TWO_PI - endAngle;
        startAngle = startAngle > TWO_PI ? startAngle % TWO_PI : startAngle;
        endAngle = endAngle > TWO_PI ? endAngle % TWO_PI : endAngle;
        graphic.lineWidth = lineWidth;
        graphic.strokeColor = color;
        graphic.arc(x, y, r, startAngle, endAngle, anticlockwise);
        if (withLine) {
            graphic.lineTo(x, y);
            graphic.close();
        }
        graphic.stroke();
    };
    Helper.prototype.DrawCircle = function (graphic, x, y, r, color, lineWidth) {
        if (color === void 0) { color = cc.Color.RED; }
        if (lineWidth === void 0) { lineWidth = 2; }
        this.DrawEllipse(graphic, x, y, r, r, color, lineWidth);
    };
    Helper.prototype.DrawEllipse = function (graphic, x, y, rX, rY, color, lineWidth) {
        if (color === void 0) { color = cc.Color.RED; }
        if (lineWidth === void 0) { lineWidth = 2; }
        graphic.lineWidth = lineWidth;
        graphic.strokeColor = color;
        graphic.ellipse(x, y, rX, rY);
        graphic.stroke();
    };
    Helper.prototype.FillSquare = function (graphic, x, y, width, color) {
        if (color === void 0) { color = cc.Color.RED; }
        this.FillRect(graphic, x, y, width, width, color);
    };
    Helper.prototype.FillRect = function (graphic, x, y, width, height, color) {
        if (color === void 0) { color = cc.Color.RED; }
        graphic.fillColor = color;
        this.DrawRect(graphic, x, y, width, height, color, 0);
        graphic.fill();
    };
    Helper.prototype.FillArc = function (graphic, x, y, r, startAngle, endAngle, offsetAngle, anticlockwise, color) {
        if (startAngle === void 0) { startAngle = 0; }
        if (endAngle === void 0) { endAngle = Math.PI * 2; }
        if (offsetAngle === void 0) { offsetAngle = 0; }
        if (anticlockwise === void 0) { anticlockwise = true; }
        if (color === void 0) { color = cc.Color.RED; }
        graphic.fillColor = color;
        this.DrawArc(graphic, x, y, r, startAngle, endAngle, offsetAngle, anticlockwise, undefined, 0, true);
        graphic.fill();
    };
    Helper.prototype.FillCircle = function (graphic, x, y, r, color) {
        if (color === void 0) { color = cc.Color.RED; }
        this.FillEllipse(graphic, x, y, r, r, color);
    };
    Helper.prototype.FillEllipse = function (graphic, x, y, rX, rY, color) {
        if (color === void 0) { color = cc.Color.RED; }
        graphic.fillColor = color;
        this.DrawEllipse(graphic, x, y, rX, rY, color, 0);
        graphic.fill();
    };
    Helper.prototype.registerButtonEvent = function (target, handle) {
        var _this = this;
        target.on(cc.Node.EventType.TOUCH_END, function (event, captureListeners) { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.isExcute)
                            return [2 /*return*/];
                        SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
                        this.isExcute = true;
                        setTimeout(function () {
                            _this.isExcute = false;
                        }, 300);
                        _a = handle;
                        if (!_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, handle()];
                    case 1:
                        _a = (_b.sent());
                        _b.label = 2;
                    case 2:
                        _a;
                        return [2 /*return*/];
                }
            });
        }); });
    };
    Helper.prototype.shuffleArray = function (arr) {
        var _a;
        var array = __spreadArrays(arr);
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [array[j], array[i]], array[i] = _a[0], array[j] = _a[1];
        }
        return array;
    };
    Helper.prototype.convertTextName = function (str) {
        var pname = "" + str;
        if (pname.length > 6) {
            pname = pname.substr(0, 12) + '...';
        }
        return pname;
    };
    return Helper;
}()))();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3V0aWxzL0hlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBMEM7QUFFMUMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQzNCLGtCQUFlLElBQUk7SUFBQztRQUVSLGFBQVEsR0FBYSxLQUFLLENBQUE7UUFDMUIsWUFBTyxHQUFHLElBQUksQ0FBQztJQW1hM0IsQ0FBQztJQWphRywwQkFBUyxHQUFUO1FBRUksT0FBTyxTQUFPLFNBQVMsRUFBSSxDQUFDO0lBQ2hDLENBQUM7SUFDRCxxQkFBSSxHQUFKLFVBQUssR0FBRyxFQUFFLEdBQUc7UUFFVCxPQUFPLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDN0MsQ0FBQztJQUVELHdCQUFPLEdBQVAsVUFBUSxHQUFHLEVBQUUsR0FBRztRQUVaLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFDRCwrQkFBYyxHQUFkLFVBQWUsR0FBRztRQUVkLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUIsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUFBLENBQUM7SUFDRiw2QkFBWSxHQUFaO1FBQWEsY0FBTzthQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87WUFBUCx5QkFBTzs7UUFFaEIsT0FBTyxJ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QyxFQUFFLENBQUMsRUFBRSxFQUN6QztZQUNJLElBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUMsS0FBdUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQTFDLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBQSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBQSxDQUF5QjtTQUMvQztRQUNELE9BQU8sS0FBSyxDQUFBO0lBQ2hCLENBQUM7SUFDRCxnQ0FBZSxHQUFmLFVBQWdCLEdBQVk7UUFFeEIsSUFBSSxLQUFLLEdBQUcsS0FBRyxHQUFLLENBQUM7UUFDckIsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDcEI7WUFDSSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDO1NBQ3ZDO1FBQ0QsT0FBTyxLQUFLLENBQUE7SUFDaEIsQ0FBQztJQUNMLGFBQUM7QUFBRCxDQXRhb0IsQUFzYW5CLElBQUMsRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNvdW5kTWdyIGZyb20gXCIuLi9jb21tb24vU291bmRNZ3JcIjtcblxubGV0IGdsb2JhbF9pZCA9IERhdGUubm93KCk7XG5leHBvcnQgZGVmYXVsdCBuZXcgKGNsYXNzIEhlbHBlclxue1xuICAgIHByaXZhdGUgaXNFeGN1dGUgOiBib29sZWFuID0gZmFsc2VcbiAgICBwcml2YXRlIG5vU2xlZXAgPSBudWxsO1xuXG4gICAgR2V0VW5pdElkKClcbiAgICB7XG4gICAgICAgIHJldHVybiBgdWlkLSR7Z2xvYmFsX2lkKyt9YDtcbiAgICB9XG4gICAgUmFuZChtaW4sIG1heClcbiAgICB7XG4gICAgICAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XG4gICAgfVxuXG4gICAgUmFuZEludChtaW4sIG1heClcbiAgICB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xuICAgIH1cbiAgICBSYW5kb21Qcm9wZXJ0eShvYmopXG4gICAge1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgICAgIHJldHVybiBvYmpba2V5c1trZXlzLmxlbmd0aCAqIE1hdGgucmFuZG9tKCkgPDwgMF1dO1xuICAgIH07XG4gICAgUmFuZEFyZ3VtZW50KC4uLmFyZ3MpXG4gICAge1xuICAgICAgICByZXR1cm4gYXJnc1t0aGlzLlJhbmRJbnQoMCwgYXJncy5sZW5ndGggLSAxKV07XG4gICAgfVxuXG4gICAgUmFuZEFycmF5KGFycilcbiAgICB7XG4gICAgICAgIHJldHVybiBhcnJbdGhpcy5SYW5kSW50KDAsIGFyci5sZW5ndGggLSAxKV07XG4gICAgfVxuXG4gICAgUmFuZFR5cGVFbnVtKG9iailcbiAgICB7XG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgICAgICByZXR1cm4gdGhpcy5SYW5kSW50KDAsIGtleXMubGVuZ3RoIC8gMiAtIDEpO1xuICAgIH1cblxuICAgIEdldEtleShvYmosIGluZGV4KVxuICAgIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iailbaW5kZXhdO1xuICAgIH1cblxuICAgIEdldEtleUVudW0ob2JqLCBpbmRleClcbiAgICB7XG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgICAgICByZXR1cm4ga2V5c1tpbmRleCArIGtleXMubGVuZ3RoIC8gMl07XG4gICAgfVxuXG4gICAgR2V0SW5kZXhFbnVtKG9iaiwgbmFtZSlcbiAgICB7XG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgICAgICBmb3IgKGxldCBpID0ga2V5cy5sZW5ndGggLyAyOyBpIDwga2V5cy5sZW5ndGg7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKGtleXNbaV0gPT0gbmFtZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaSAtIGtleXMubGVuZ3RoIC8gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgRmFsbEJhY2tDb3B5VG9DbGlwYm9hcmQoc3RyKVxuICAgIHtcbiAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICB2YXIgaXNJT1MgPSBuYXZpZ2F0b3IudXNlckFnZW50LnNlYXJjaCgvKGlQYWR8aVBob25lfGlwaG9uZXxpUG9kKS8pICE9IC0xXG4gICAgICAgIGVsLnZhbHVlID0gc3RyO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsKTtcblxuICAgICAgICBpZiAoaXNJT1MpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGVsLmNvbnRlbnRFZGl0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICBlbC5yZWFkT25seSA9IGZhbHNlO1xuXG4gICAgICAgICAgICB2YXIgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICAgICAgICAgICAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKGVsKTtcbiAgICAgICAgICAgIHZhciBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG4gICAgICAgICAgICBzZWwucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgICAgICAgICBzZWwuYWRkUmFuZ2UocmFuZ2UpO1xuICAgICAgICAgICAgZWwuc2V0U2VsZWN0aW9uUmFuZ2UoMCwgOTk5OTk5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCAnJyk7XG4gICAgICAgICAgICBlbC5zZWxlY3QoKTtcbiAgICAgICAgfVxuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGVsKTtcbiAgICB9XG4gICAgQ29weVRvQ2xpcGJvYXJkKHN0cilcbiAgICB7XG4gICAgICAgIGlmICghbmF2aWdhdG9yLmNsaXBib2FyZClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5GYWxsQmFja0NvcHlUb0NsaXBib2FyZChzdHIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHN0cikudGhlbihmdW5jdGlvbiAoKVxuICAgICAgICB7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpXG4gICAgICAgIHtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgTm9ybWFsaXplZCh4MSwgeTEsIHgyLCB5MilcbiAgICB7XG4gICAgICAgIGNvbnN0IGRYID0geDEgLSB4MjtcbiAgICAgICAgY29uc3QgZFkgPSB5MSAtIHkyO1xuICAgICAgICBjb25zdCBsZW5ndGggPSBNYXRoLnNxcnQoZFggKiBkWCArIGRZICogZFkpO1xuXG4gICAgICAgIHJldHVybiBuZXcgY2MuVmVjMihkWCAvIGxlbmd0aCwgZFkgLyBsZW5ndGgpO1xuICAgIH1cblxuICAgIE1vdmVUb1RhcmdldChjdXJyZW50LCB0YXJnZXQsIHNwZWVkKVxuICAgIHtcbiAgICAgICAgc3BlZWQgPSBNYXRoLmFicyhzcGVlZCk7XG5cbiAgICAgICAgaWYgKGN1cnJlbnQgPCB0YXJnZXQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLm1pbih0YXJnZXQsIGN1cnJlbnQgKyBzcGVlZCk7XG4gICAgICAgIH0gZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgodGFyZ2V0LCBjdXJyZW50IC0gc3BlZWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQ29sbGlzaW9uMlJlY3QocmVjdDEsIHJlY3QyKVxuICAgIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgcmVjdDEueCArIHJlY3QxLndpZHRoIDwgcmVjdDIueCB8fFxuICAgICAgICAgICAgcmVjdDEueSArIHJlY3QxLmhlaWdodCA8IHJlY3QyLnkgfHxcbiAgICAgICAgICAgIHJlY3QyLnggKyByZWN0Mi53aWR0aCA8IHJlY3QxLnggfHxcbiAgICAgICAgICAgIHJlY3QyLnkgKyByZWN0Mi5oZWlnaHQgPCByZWN0MS55XG4gICAgICAgIClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgQ29sbGlzaW9uUG9pbnRSZWN0KHgsIHksIHJlY3QpXG4gICAge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICB4IDwgcmVjdC54IHx8XG4gICAgICAgICAgICB5IDwgcmVjdC55IHx8XG4gICAgICAgICAgICB4ID4gcmVjdC54ICsgcmVjdC53aWR0aCB8fFxuICAgICAgICAgICAgeSA+IHJlY3QueSArIHJlY3QuaGVpZ2h0XG4gICAgICAgIClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgRGlzdGFuY2UoeDEsIHkxLCB4MiwgeTIpXG4gICAge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KCh4MSAtIHgyKSAqICh4MSAtIHgyKSArICh5MSAtIHkyKSAqICh5MSAtIHkyKSk7XG4gICAgfVxuXG4gICAgQ29uc3RyYWluKHZhbHVlLCBtaW4sIG1heClcbiAgICB7XG4gICAgICAgIHZhbHVlID0gTWF0aC5tYXgobWluLCB2YWx1ZSk7XG4gICAgICAgIHZhbHVlID0gTWF0aC5taW4obWF4LCB2YWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIFRvUmFkaWFuKGFuZ2xlKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIChhbmdsZSAvIDE4MCkgKiBNYXRoLlBJO1xuICAgIH1cblxuICAgIFRvQW5nbGUocmFkaWFuKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIChyYWRpYW4gLyBNYXRoLlBJKSAqIDE4MDtcbiAgICB9XG5cbiAgICBUaW1lb3V0UHJvbWlzZSh0aW1lLCBwcm9taXNlKVxuICAgIHtcbiAgICAgICAgY29uc3QgdGltZW91dCA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZWplY3QoXCJUaW1lZCBvdXQuXCIpO1xuICAgICAgICAgICAgfSwgdGltZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJhY2UoW3Byb21pc2UsIHRpbWVvdXRdKTtcbiAgICB9XG5cbiAgICBIdHRwUmVxdWVzdChtZXRob2QsIHVybCwgYm9keSwgcmVzcG9uc2VUeXBlLCBoZWFkZXJzID0gbnVsbCwgcmVxdWVzdFBhcmFtcyA9IHt9KVxuICAgIHtcbiAgICAgICAgY29uc3QgbG9nRXZlbnQgPSAod2luZG93IGFzIGFueSkubG9nRXZlbnQgfHwgY29uc29sZS5sb2c7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgY29uc3QgYXBpTmFtZSA9IHVybC5zcGxpdCgnLycpLnBvcCgpLnNwbGl0KCc/Jykuc2hpZnQoKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgIHhoci5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlKTtcblxuICAgICAgICAgICAgaWYgKG1ldGhvZCA9PSBcIlBPU1RcIilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgaGVhZGVycylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihpdGVtLmtleSwgaXRlbS52YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyZXNwb25zZVR5cGUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9IHJlc3BvbnNlVHlwZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgeGhyLnRpbWVvdXQgPSAxMDAwMDtcblxuICAgICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PSAyMDApXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoeGhyLnJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCh4aHIucmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbG9nRXZlbnQoYXBpTmFtZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RQYXJhbXMsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXBvbnNlU3RhdHVzOiB4aHIuc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2U6IHhoci5yZXNwb25zZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBEYXRlLm5vdygpIC0gc3RhcnRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbiAoZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsb2dFdmVudCgnYXBpUmVxdWVzdEVycm9yJywge1xuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lLFxuICAgICAgICAgICAgICAgICAgICBtZXRob2QsXG4gICAgICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICAgICAgYm9keSxcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdFBhcmFtcyxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IERhdGUubm93KCkgLSBzdGFydFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmVqZWN0KCdlcnJvcicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB4aHIub250aW1lb3V0ID0gKGUpID0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KCd0aW1lZCBvdXQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgeGhyLnNlbmQoYm9keSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIERyYXdMaW5lKGdyYXBoaWMsIHgxLCB5MSwgeDIsIHkyLCBjb2xvciA9IGNjLkNvbG9yLlJFRCwgbGluZVdpZHRoID0gMilcbiAgICB7XG4gICAgICAgIGdyYXBoaWMubGluZVdpZHRoID0gbGluZVdpZHRoO1xuICAgICAgICBncmFwaGljLnN0cm9rZUNvbG9yID0gY29sb3I7XG4gICAgICAgIGdyYXBoaWMubW92ZVRvKHgxLCB5MSk7XG4gICAgICAgIGdyYXBoaWMubGluZVRvKHgyLCB5Mik7XG4gICAgICAgIGdyYXBoaWMuc3Ryb2tlKCk7XG4gICAgfVxuXG4gICAgRHJhd1NxdWFyZShncmFwaGljLCB4LCB5LCB3aWR0aCwgY29sb3IgPSBjYy5Db2xvci5SRUQsIGxpbmVXaWR0aCA9IDIpXG4gICAge1xuICAgICAgICB0aGlzLkRyYXdSZWN0KGdyYXBoaWMsIHgsIHksIHdpZHRoLCB3aWR0aCwgY29sb3IsIGxpbmVXaWR0aCk7XG4gICAgfVxuXG4gICAgRHJhd1JlY3QoZ3JhcGhpYywgeCwgeSwgd2lkdGgsIGhlaWdodCwgY29sb3IgPSBjYy5Db2xvci5SRUQsIGxpbmVXaWR0aCA9IDIpXG4gICAge1xuICAgICAgICBncmFwaGljLmxpbmVXaWR0aCA9IGxpbmVXaWR0aDtcbiAgICAgICAgZ3JhcGhpYy5zdHJva2VDb2xvciA9IGNvbG9yO1xuICAgICAgICB0eXBlb2YgeCA9PT0gXCJudW1iZXJcIlxuICAgICAgICAgICAgPyBncmFwaGljLnJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodClcbiAgICAgICAgICAgIDogZ3JhcGhpYy5yZWN0KHgueCwgeC55LCB4LndpZHRoLCB4LmhlaWdodCk7XG4gICAgICAgIGdyYXBoaWMuc3Ryb2tlKCk7XG4gICAgfVxuXG4gICAgRHJhd0FyYyhcbiAgICAgICAgZ3JhcGhpYyxcbiAgICAgICAgeCxcbiAgICAgICAgeSxcbiAgICAgICAgcixcbiAgICAgICAgc3RhcnRBbmdsZSA9IDAsXG4gICAgICAgIGVuZEFuZ2xlID0gTWF0aC5QSSAqIDIsXG4gICAgICAgIG9mZnNldEFuZ2xlID0gMCxcbiAgICAgICAgYW50aWNsb2Nrd2lzZSA9IHRydWUsXG4gICAgICAgIGNvbG9yID0gY2MuQ29sb3IuUkVELFxuICAgICAgICBsaW5lV2lkdGggPSAyLFxuICAgICAgICB3aXRoTGluZSA9IGZhbHNlXG4gICAgKVxuICAgIHtcbiAgICAgICAgY29uc3QgVFdPX1BJID0gTWF0aC5QSSAqIDI7XG4gICAgICAgIGNvbnN0IGRyYXdPZmZzZXQgPSBNYXRoLlBJICogMS41OyAvLyBzdGFydCBhbmdsZSBhdCAwIG8nY2xvY2tcbiAgICAgICAgc3RhcnRBbmdsZSArPSBkcmF3T2Zmc2V0ICsgb2Zmc2V0QW5nbGU7XG4gICAgICAgIGVuZEFuZ2xlICs9IGRyYXdPZmZzZXQgKyBvZmZzZXRBbmdsZTtcbiAgICAgICAgc3RhcnRBbmdsZSA9IFRXT19QSSAtIHN0YXJ0QW5nbGU7XG4gICAgICAgIGVuZEFuZ2xlID0gVFdPX1BJIC0gZW5kQW5nbGU7XG5cbiAgICAgICAgc3RhcnRBbmdsZSA9IHN0YXJ0QW5nbGUgPiBUV09fUEkgPyBzdGFydEFuZ2xlICUgVFdPX1BJIDogc3RhcnRBbmdsZTtcbiAgICAgICAgZW5kQW5nbGUgPSBlbmRBbmdsZSA+IFRXT19QSSA/IGVuZEFuZ2xlICUgVFdPX1BJIDogZW5kQW5nbGU7XG5cbiAgICAgICAgZ3JhcGhpYy5saW5lV2lkdGggPSBsaW5lV2lkdGg7XG4gICAgICAgIGdyYXBoaWMuc3Ryb2tlQ29sb3IgPSBjb2xvcjtcbiAgICAgICAgZ3JhcGhpYy5hcmMoeCwgeSwgciwgc3RhcnRBbmdsZSwgZW5kQW5nbGUsIGFudGljbG9ja3dpc2UpO1xuICAgICAgICBpZiAod2l0aExpbmUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGdyYXBoaWMubGluZVRvKHgsIHkpO1xuICAgICAgICAgICAgZ3JhcGhpYy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICAgIGdyYXBoaWMuc3Ryb2tlKCk7XG4gICAgfVxuXG4gICAgRHJhd0NpcmNsZShncmFwaGljLCB4LCB5LCByLCBjb2xvciA9IGNjLkNvbG9yLlJFRCwgbGluZVdpZHRoID0gMilcbiAgICB7XG4gICAgICAgIHRoaXMuRHJhd0VsbGlwc2UoZ3JhcGhpYywgeCwgeSwgciwgciwgY29sb3IsIGxpbmVXaWR0aCk7XG4gICAgfVxuXG4gICAgRHJhd0VsbGlwc2UoZ3JhcGhpYywgeCwgeSwgclgsIHJZLCBjb2xvciA9IGNjLkNvbG9yLlJFRCwgbGluZVdpZHRoID0gMilcbiAgICB7XG4gICAgICAgIGdyYXBoaWMubGluZVdpZHRoID0gbGluZVdpZHRoO1xuICAgICAgICBncmFwaGljLnN0cm9rZUNvbG9yID0gY29sb3I7XG4gICAgICAgIGdyYXBoaWMuZWxsaXBzZSh4LCB5LCByWCwgclkpO1xuICAgICAgICBncmFwaGljLnN0cm9rZSgpO1xuICAgIH1cblxuICAgIEZpbGxTcXVhcmUoZ3JhcGhpYywgeCwgeSwgd2lkdGgsIGNvbG9yID0gY2MuQ29sb3IuUkVEKVxuICAgIHtcbiAgICAgICAgdGhpcy5GaWxsUmVjdChncmFwaGljLCB4LCB5LCB3aWR0aCwgd2lkdGgsIGNvbG9yKTtcbiAgICB9XG5cbiAgICBGaWxsUmVjdChncmFwaGljLCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb2xvciA9IGNjLkNvbG9yLlJFRClcbiAgICB7XG4gICAgICAgIGdyYXBoaWMuZmlsbENvbG9yID0gY29sb3I7XG4gICAgICAgIHRoaXMuRHJhd1JlY3QoZ3JhcGhpYywgeCwgeSwgd2lkdGgsIGhlaWdodCwgY29sb3IsIDApO1xuICAgICAgICBncmFwaGljLmZpbGwoKTtcbiAgICB9XG5cbiAgICBGaWxsQXJjKFxuICAgICAgICBncmFwaGljLFxuICAgICAgICB4LFxuICAgICAgICB5LFxuICAgICAgICByLFxuICAgICAgICBzdGFydEFuZ2xlID0gMCxcbiAgICAgICAgZW5kQW5nbGUgPSBNYXRoLlBJICogMixcbiAgICAgICAgb2Zmc2V0QW5nbGUgPSAwLFxuICAgICAgICBhbnRpY2xvY2t3aXNlID0gdHJ1ZSxcbiAgICAgICAgY29sb3IgPSBjYy5Db2xvci5SRURcbiAgICApXG4gICAge1xuICAgICAgICBncmFwaGljLmZpbGxDb2xvciA9IGNvbG9yO1xuICAgICAgICB0aGlzLkRyYXdBcmMoXG4gICAgICAgICAgICBncmFwaGljLFxuICAgICAgICAgICAgeCxcbiAgICAgICAgICAgIHksXG4gICAgICAgICAgICByLFxuICAgICAgICAgICAgc3RhcnRBbmdsZSxcbiAgICAgICAgICAgIGVuZEFuZ2xlLFxuICAgICAgICAgICAgb2Zmc2V0QW5nbGUsXG4gICAgICAgICAgICBhbnRpY2xvY2t3aXNlLFxuICAgICAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIHRydWVcbiAgICAgICAgKTtcbiAgICAgICAgZ3JhcGhpYy5maWxsKCk7XG4gICAgfVxuXG4gICAgRmlsbENpcmNsZShncmFwaGljLCB4LCB5LCByLCBjb2xvciA9IGNjLkNvbG9yLlJFRClcbiAgICB7XG4gICAgICAgIHRoaXMuRmlsbEVsbGlwc2UoZ3JhcGhpYywgeCwgeSwgciwgciwgY29sb3IpO1xuICAgIH1cblxuICAgIEZpbGxFbGxpcHNlKGdyYXBoaWMsIHgsIHksIHJYLCByWSwgY29sb3IgPSBjYy5Db2xvci5SRUQpXG4gICAge1xuICAgICAgICBncmFwaGljLmZpbGxDb2xvciA9IGNvbG9yO1xuICAgICAgICB0aGlzLkRyYXdFbGxpcHNlKGdyYXBoaWMsIHgsIHksIHJYLCByWSwgY29sb3IsIDApO1xuICAgICAgICBncmFwaGljLmZpbGwoKTtcbiAgICB9XG4gICAgcmVnaXN0ZXJCdXR0b25FdmVudCh0YXJnZXQ6IGNjLk5vZGUsIGhhbmRsZTogRnVuY3Rpb24pXG4gICAge1xuICAgICAgICB0YXJnZXQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCBhc3luYyAoZXZlbnQsIGNhcHR1cmVMaXN0ZW5lcnMpID0+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKHRoaXMuaXNFeGN1dGUpIHJldHVyblxuICAgICAgICAgICAgU291bmRNZ3IucGxheVNmeChTb3VuZE1nci5JbnN0YW5jZS5TRlhfQlVUVE9OKVxuICAgICAgICAgICAgdGhpcy5pc0V4Y3V0ZSA9IHRydWVcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNFeGN1dGUgPSBmYWxzZVxuICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgICAgIGhhbmRsZSAmJiBhd2FpdCBoYW5kbGUoKVxuICAgICAgICB9KVxuICAgIH1cbiAgICBzaHVmZmxlQXJyYXkoYXJyOiBBcnJheTxhbnk+KVxuICAgIHtcbiAgICAgICAgbGV0IGFycmF5ID0gWy4uLmFycl1cbiAgICAgICAgZm9yIChsZXQgaSA9IGFycmF5Lmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcbiAgICAgICAgICAgIFthcnJheVtpXSwgYXJyYXlbal1dID0gW2FycmF5W2pdLCBhcnJheVtpXV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycmF5XG4gICAgfVxuICAgIGNvbnZlcnRUZXh0TmFtZShzdHIgOiBzdHJpbmcpXG4gICAge1xuICAgICAgICBsZXQgcG5hbWUgPSBgJHtzdHJ9YDtcbiAgICAgICAgaWYgKHBuYW1lLmxlbmd0aCA+IDYpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBuYW1lID0gcG5hbWUuc3Vic3RyKDAsIDEyKSArICcuLi4nO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwbmFtZVxuICAgIH1cbn0pKCk7XG4iXX0=